// import THREE from 'three';
// @ts-ignore
import * as THREE from 'three';
import {GetSDK, initComponents, ISceneNode, OrientedBox, orientedBoxType, SceneComponent, slotType} from './common'
// @ts-ignore
import {SceneLoader} from './SceneLoader'

const showcase = document.getElementById('showcase') as HTMLIFrameElement
const key = 'sa0kpkg51tdrauqncdzp8eq6a'

const modelData = document.getElementById('modelData') as HTMLDivElement
let timeInterval:any
// declare this file is a module
export {};

let myControl:any
const translate = document.getElementById('translate') as HTMLDivElement
const scale = document.getElementById('scale') as HTMLDivElement
const rotate = document.getElementById('rotate') as HTMLDivElement

translate.addEventListener('click', () => {
  myControl.inputs.mode = 'translate'
})
scale.addEventListener('click', () => {
  myControl.inputs.mode = 'scale'
})
rotate.addEventListener('click', () => {
  myControl.inputs.mode = 'rotate'
})

// const SelectedColor = 0xffff00;
// const SelectedOpacity = 0.1;
// const SelectedLineOpacity = 1.0;
const UnselectedColor = 0xffffff;
const UnselectedOpacity = 0.04;
// const UnselectedLineOpacity = 0.4;

type SlotNode = {
  node: ISceneNode;
  slotComponent: SceneComponent;
  modelComponent: SceneComponent;
  boxComponent: OrientedBox;
}


// augment window with the MP_SDK property
declare global {
  interface Window {
    MP_SDK: any;
  }
}

showcase.addEventListener('load', async function () {
  let sdk
  // @ts-ignore
  let scene
  try {
    // sdk = await showcase.contentWindow.MP_SDK.connect(showcase, key, '3.6')
    sdk = await GetSDK(showcase, key);
    await initComponents(sdk);
    sdk.on(sdk.Model.Event.MODEL_LOADED,
      function (model: any) {
        console.log('Model sid:' + model.sid)
      }
    )

    await sdk.Scene.configure((renderer: any, three: any) => {
      renderer.physicallyCorrectLights = true;
      renderer.gammaFactor = 2.2;
      renderer.gammaOutput = true;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.bias = 0.0001;
      renderer.shadowMap.type = three.PCFSoftShadowMap;
    });
    scene = new SceneLoader(sdk);
    console.log('scene', scene)
    const slots: SlotNode[] = [];

    const findSlots = (node: ISceneNode) => {
      let slot: SceneComponent = null;
      let model: SceneComponent = null;
      let box: OrientedBox = null;
      const componentIterator: IterableIterator<SceneComponent> = node.componentIterator();
      for (const component of componentIterator) {
        if (component.componentType === slotType) {
          slot = component;
        }
        else if (component.componentType === 'mp.gltfLoader') {
          model = component;
        }
        else if (component.componentType == orientedBoxType) {
          box = component as OrientedBox;
          // box.spyOnEvent(clickSpy);
          // box.spyOnEvent(hoverSpy);
          box.inputs.color = UnselectedColor;
          box.inputs.opacity = UnselectedOpacity;
        }
      }

      if (slot && model) {
        slots.push({
          node: node,
          slotComponent: slot,
          modelComponent: model,
          boxComponent: box,
        })
      }
    };

    await scene.load('AAWs9eZ9ip6', findSlots);

  } catch (e) {
    console.error(e)
    return
  }


  const sceneObjects = await sdk.Scene.createObjects(1)
// add a scene node for the fbx model
  const gltfNode = sceneObjects[0].addNode()

// adjust the position of the scene node
  gltfNode.obj3D.position.set(0, 0, 0)
  gltfNode.obj3D.scale.set(1, 1, 1)

// add the gltf loader component that loads a parrot model. Adjust the model's scale to make it fit inside the model.
  const gltfComponent = gltfNode.addComponent('mp.gltfLoader', {
    url: 'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/Parrot.glb',
    localScale: {
      x: 0.01,
      y: 0.01,
      z: 0.01,
    },
  })

// Add a path id 'gltfUrl' to the gltf component url property (not used in the example).
  sceneObjects[0].addPath({
    id: 'gltfUrl',
    type: sdk.Scene.PathType.INPUT,
    node: gltfNode,
    component: gltfComponent,
    property: 'url',
  })

// add another scene node to contain the light objects.
  const lightsNode = sceneObjects[0].addNode()

// Add directional and ambient lights
  const directionalLightComponet = lightsNode.addComponent('mp.directionalLight', {
    color: {r: 0.7, g: 0.7, b: 0.7},
  })
  lightsNode.addComponent('mp.ambientLight', {
    intensity: 0.5,
    color: {r: 1.0, g: 1.0, b: 1.0},
  })

// Add a path id 'ambientIntensity' to the intensity property of the directional light component.
// The path id will be used in the update function that follows.
  sceneObjects[0].addPath({
    id: 'ambientIntensity',
    type: sdk.Scene.PathType.INPUT,
    node: lightsNode,
    component: directionalLightComponet,
    property: 'intensity',
  })


  const node = sceneObjects[0].addNode()
  myControl = node.addComponent('mp.transformControls')
  node.start()

// set 'translate' mode to position the selection.
  myControl.inputs.mode = 'rotate'

  class ClickSpy {
    public eventType = 'INTERACTION.CLICK'

    public onEvent (payload: unknown) {
      console.log('received',  gltfNode)
      if (myControl.inputs.selection === null) {
        myControl.inputs.selection = gltfNode
        updateData(gltfNode)
      } else {
        myControl.inputs.selection = null
        unUpdateDate()
      }
    }
  }

  gltfComponent.spyOnEvent(new ClickSpy())


  // console.log(sceneObjects[0])
  // const tempNode = sceneObjects[0].addNode()
  // console.log('1')
  // const comp1 = tempNode.addComponent(videoRendererType)
  // comp1.src = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-uni4934e7b/c4d93960-5643-11eb-a16f-5b3e54966275.m3u8'
  // console.log('2')
  // tempNode.obj3D.position.set(0, 0, 0)
  // console.log('4')
  // tempNode.obj3D.scale.set(1, 1, 1)
  // console.log('3')
  // tempNode.start()
  // console.log('5', comp1)
  // sceneObjects[0].addPath({
  //   id: 'tempNode',
  //   type: sdk.Scene.PathType.INPUT,
  //   node: tempNode,
  //   component: comp1
  // })
  // console.log('6')

  console.log(myControl.inputs)
  // Start the scene object and its nodes.
  sceneObjects[0].start()

  modelData.innerHTML = '<div>' +
    'position--'+ '<br>' + 'x:0' + '<br>' + 'y:0' + '<br>' +'z:0' + '<br>' +
    'rotation--'+ '<br>' + 'x:0' + '<br>' + 'y:0' + '<br>' +'z:0' + '<br>' +
    'scale--'+ '<br>' + 'x:0' + '<br>' + 'y:0' + '<br>' +'z:0' +
    '<\/div>'
})


function updateData (ISceneNode: any) {
  timeInterval = setInterval(() => {
    modelData.innerHTML = '<div>' +
      'position--'+ '<br>' + 'x:' + ISceneNode.obj3D.position.x + '<br>' + 'y:' + ISceneNode.obj3D.position.y+ '<br>' +'z:' + ISceneNode.obj3D.position.z +'<br>' +
      'rotation--'+ '<br>' + 'x:' + ISceneNode.obj3D.rotation.x + '<br>' + 'y:' + ISceneNode.obj3D.rotation.y+ '<br>' +'z:' + ISceneNode.obj3D.rotation.z +'<br>' +
      'scale--'+ '<br>' + 'x:' + ISceneNode.obj3D.scale.x + '<br>' + 'y:' + ISceneNode.obj3D.scale.y+ '<br>' +'z:' + ISceneNode.obj3D.scale.z +
      '<\/div>'
  }, 50)
}

function unUpdateDate() {
  clearInterval(timeInterval)
}


