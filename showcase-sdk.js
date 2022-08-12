!function (t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var o = e[r] = {i: r, l: !1, exports: {}};
        return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
            return t[e]
        }.bind(null, o));
        return r
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 5)
}([function (t, e, n) {
    var r, o, i;
    /*!
      * $script.js JS loader & dependency manager
      * https://github.com/ded/script.js
      * (c) Dustin Diaz 2014 | License MIT
      */
    i = function () {
        var t, e, n = document, r = n.getElementsByTagName("head")[0], o = !1, i = "push", s = "readyState",
            c = "onreadystatechange", u = {}, a = {}, f = {}, h = {};

        function l(t, e) {
            for (var n = 0, r = t.length; n < r; ++n) if (!e(t[n])) return o;
            return 1
        }

        function p(t, e) {
            l(t, function (t) {
                return e(t), 1
            })
        }

        function d(e, n, r) {
            e = e[i] ? e : [e];
            var o = n && n.call, s = o ? n : r, c = o ? e.join("") : n, y = e.length;

            function g(t) {
                return t.call ? t() : u[t]
            }

            function m() {
                if (!--y) for (var t in u[c] = 1, s && s(), f) l(t.split("|"), g) && !p(f[t], g) && (f[t] = [])
            }

            return setTimeout(function () {
                p(e, function e(n, r) {
                    return null === n ? m() : (r || /^https?:\/\//.test(n) || !t || (n = -1 === n.indexOf(".js") ? t + n + ".js" : t + n), h[n] ? (c && (a[c] = 1), 2 == h[n] ? m() : setTimeout(function () {
                        e(n, !0)
                    }, 0)) : (h[n] = 1, c && (a[c] = 1), void v(n, m)))
                })
            }, 0), d
        }

        function v(t, o) {
            var i, u = n.createElement("script");
            u.onload = u.onerror = u[c] = function () {
                u[s] && !/^c|loade/.test(u[s]) || i || (u.onload = u[c] = null, i = 1, h[t] = 2, o())
            }, u.async = 1, u.src = e ? t + (-1 === t.indexOf("?") ? "?" : "&") + e : t, r.insertBefore(u, r.lastChild)
        }

        return d.get = v, d.order = function (t, e, n) {
            !function r(o) {
                o = t.shift(), t.length ? d(o, r) : d(o, e, n)
            }()
        }, d.path = function (e) {
            t = e
        }, d.urlArgs = function (t) {
            e = t
        }, d.ready = function (t, e, n) {
            t = t[i] ? t : [t];
            var r, o = [];
            return !p(t, function (t) {
                u[t] || o[i](t)
            }) && l(t, function (t) {
                return u[t]
            }) ? e() : (r = t.join("|"), f[r] = f[r] || [], f[r][i](e), n && n(o)), d
        }, d.done = function (t) {
            d([null], t)
        }, d
    }, t.exports ? t.exports = i() : void 0 === (o = "function" == typeof (r = i) ? r.call(e, n, e, t) : r) || (t.exports = o)
}, function (t, e, n) {
    "use strict";
    t.exports = n(2).polyfill()
}, function (t, e, n) {
    (function (e, n) {
        /*!
     * @overview es6-promise - a tiny implementation of Promises/A+.
     * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
     * @license   Licensed under MIT license
     *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
     * @version   v4.2.8+1e68dce6
     */
        var r;
        r = function () {
            "use strict";

            function t(t) {
                return "function" == typeof t
            }

            var r = Array.isArray ? Array.isArray : function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }, o = 0, i = void 0, s = void 0, c = function (t, e) {
                    d[o] = t, d[o + 1] = e, 2 === (o += 2) && (s ? s(v) : b())
                }, u = "undefined" != typeof window ? window : void 0, a = u || {},
                f = a.MutationObserver || a.WebKitMutationObserver,
                h = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                l = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

            function p() {
                var t = setTimeout;
                return function () {
                    return t(v, 1)
                }
            }

            var d = new Array(1e3);

            function v() {
                for (var t = 0; t < o; t += 2) (0, d[t])(d[t + 1]), d[t] = void 0, d[t + 1] = void 0;
                o = 0
            }

            var y, g, m, w, b = void 0;

            function O(t, e) {
                var n = this, r = new this.constructor(T);
                void 0 === r[E] && K(r);
                var o = n._state;
                if (o) {
                    var i = arguments[o - 1];
                    c(function () {
                        return D(o, r, i, n._result)
                    })
                } else k(n, r, t, e);
                return r
            }

            function _(t) {
                if (t && "object" == typeof t && t.constructor === this) return t;
                var e = new this(T);
                return I(e, t), e
            }

            h ? b = function () {
                return e.nextTick(v)
            } : f ? (g = 0, m = new f(v), w = document.createTextNode(""), m.observe(w, {characterData: !0}), b = function () {
                w.data = g = ++g % 2
            }) : l ? ((y = new MessageChannel).port1.onmessage = v, b = function () {
                return y.port2.postMessage(0)
            }) : b = void 0 === u ? function () {
                try {
                    var t = Function("return this")().require("vertx");
                    return void 0 !== (i = t.runOnLoop || t.runOnContext) ? function () {
                        i(v)
                    } : p()
                } catch (t) {
                    return p()
                }
            }() : p();
            var E = Math.random().toString(36).substring(2);

            function T() {
            }

            var C = void 0, A = 1, j = 2;

            function S(e, n, r) {
                n.constructor === e.constructor && r === O && n.constructor.resolve === _ ? function (t, e) {
                    e._state === A ? N(t, e._result) : e._state === j ? M(t, e._result) : k(e, void 0, function (e) {
                        return I(t, e)
                    }, function (e) {
                        return M(t, e)
                    })
                }(e, n) : void 0 === r ? N(e, n) : t(r) ? function (t, e, n) {
                    c(function (t) {
                        var r = !1, o = function (t, e, n, r) {
                            try {
                                t.call(e, n, r)
                            } catch (t) {
                                return t
                            }
                        }(n, e, function (n) {
                            r || (r = !0, e !== n ? I(t, n) : N(t, n))
                        }, function (e) {
                            r || (r = !0, M(t, e))
                        }, t._label);
                        !r && o && (r = !0, M(t, o))
                    }, t)
                }(e, n, r) : N(e, n)
            }

            function I(t, e) {
                if (t === e) M(t, new TypeError("You cannot resolve a promise with itself")); else if (o = typeof (r = e), null === r || "object" !== o && "function" !== o) N(t, e); else {
                    var n = void 0;
                    try {
                        n = e.then
                    } catch (e) {
                        return void M(t, e)
                    }
                    S(t, e, n)
                }
                var r, o
            }

            function P(t) {
                t._onerror && t._onerror(t._result), x(t)
            }

            function N(t, e) {
                t._state === C && (t._result = e, t._state = A, 0 !== t._subscribers.length && c(x, t))
            }

            function M(t, e) {
                t._state === C && (t._state = j, t._result = e, c(P, t))
            }

            function k(t, e, n, r) {
                var o = t._subscribers, i = o.length;
                t._onerror = null, o[i] = e, o[i + A] = n, o[i + j] = r, 0 === i && t._state && c(x, t)
            }

            function x(t) {
                var e = t._subscribers, n = t._state;
                if (0 !== e.length) {
                    for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? D(n, r, o, i) : o(i);
                    t._subscribers.length = 0
                }
            }

            function D(e, n, r, o) {
                var i = t(r), s = void 0, c = void 0, u = !0;
                if (i) {
                    try {
                        s = r(o)
                    } catch (t) {
                        u = !1, c = t
                    }
                    if (n === s) return void M(n, new TypeError("A promises callback cannot return that same promise."))
                } else s = o;
                n._state !== C || (i && u ? I(n, s) : !1 === u ? M(n, c) : e === A ? N(n, s) : e === j && M(n, s))
            }

            var L = 0;

            function K(t) {
                t[E] = L++, t._state = void 0, t._result = void 0, t._subscribers = []
            }

            var R = function () {
                function t(t, e) {
                    this._instanceConstructor = t, this.promise = new t(T), this.promise[E] || K(this.promise), r(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? N(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && N(this.promise, this._result))) : M(this.promise, new Error("Array Methods must be provided an Array"))
                }

                return t.prototype._enumerate = function (t) {
                    for (var e = 0; this._state === C && e < t.length; e++) this._eachEntry(t[e], e)
                }, t.prototype._eachEntry = function (t, e) {
                    var n = this._instanceConstructor, r = n.resolve;
                    if (r === _) {
                        var o = void 0, i = void 0, s = !1;
                        try {
                            o = t.then
                        } catch (t) {
                            s = !0, i = t
                        }
                        if (o === O && t._state !== C) this._settledAt(t._state, e, t._result); else if ("function" != typeof o) this._remaining--, this._result[e] = t; else if (n === W) {
                            var c = new n(T);
                            s ? M(c, i) : S(c, t, o), this._willSettleAt(c, e)
                        } else this._willSettleAt(new n(function (e) {
                            return e(t)
                        }), e)
                    } else this._willSettleAt(r(t), e)
                }, t.prototype._settledAt = function (t, e, n) {
                    var r = this.promise;
                    r._state === C && (this._remaining--, t === j ? M(r, n) : this._result[e] = n), 0 === this._remaining && N(r, this._result)
                }, t.prototype._willSettleAt = function (t, e) {
                    var n = this;
                    k(t, void 0, function (t) {
                        return n._settledAt(A, e, t)
                    }, function (t) {
                        return n._settledAt(j, e, t)
                    })
                }, t
            }(), W = function () {
                function e(t) {
                    this[E] = L++, this._result = this._state = void 0, this._subscribers = [], T !== t && ("function" != typeof t && function () {
                        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                    }(), this instanceof e ? function (t, e) {
                        try {
                            e(function (e) {
                                I(t, e)
                            }, function (e) {
                                M(t, e)
                            })
                        } catch (e) {
                            M(t, e)
                        }
                    }(this, t) : function () {
                        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                    }())
                }

                return e.prototype.catch = function (t) {
                    return this.then(null, t)
                }, e.prototype.finally = function (e) {
                    var n = this.constructor;
                    return t(e) ? this.then(function (t) {
                        return n.resolve(e()).then(function () {
                            return t
                        })
                    }, function (t) {
                        return n.resolve(e()).then(function () {
                            throw t
                        })
                    }) : this.then(e, e)
                }, e
            }();
            return W.prototype.then = O, W.all = function (t) {
                return new R(this, t).promise
            }, W.race = function (t) {
                var e = this;
                return r(t) ? new e(function (n, r) {
                    for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
                }) : new e(function (t, e) {
                    return e(new TypeError("You must pass an array to race."))
                })
            }, W.resolve = _, W.reject = function (t) {
                var e = new this(T);
                return M(e, t), e
            }, W._setScheduler = function (t) {
                s = t
            }, W._setAsap = function (t) {
                c = t
            }, W._asap = c, W.polyfill = function () {
                var t = void 0;
                if (void 0 !== n) t = n; else if ("undefined" != typeof self) t = self; else try {
                    t = Function("return this")()
                } catch (t) {
                    throw new Error("polyfill failed because global object is unavailable in this environment")
                }
                var e = t.Promise;
                if (e) {
                    var r = null;
                    try {
                        r = Object.prototype.toString.call(e.resolve())
                    } catch (t) {
                    }
                    if ("[object Promise]" === r && !e.cast) return
                }
                t.Promise = W
            }, W.Promise = W, W
        }, t.exports = r()
    }).call(this, n(3), n(4))
}, function (t, e) {
    var n, r, o = t.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function s() {
        throw new Error("clearTimeout has not been defined")
    }

    function c(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            n = i
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
            r = s
        }
    }();
    var u, a = [], f = !1, h = -1;

    function l() {
        f && u && (f = !1, u.length ? a = u.concat(a) : h = -1, a.length && p())
    }

    function p() {
        if (!f) {
            var t = c(l);
            f = !0;
            for (var e = a.length; e;) {
                for (u = a, a = []; ++h < e;) u && u[h].run();
                h = -1, e = a.length
            }
            u = null, f = !1, function (t) {
                if (r === clearTimeout) return clearTimeout(t);
                if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                try {
                    r(t)
                } catch (e) {
                    try {
                        return r.call(null, t)
                    } catch (e) {
                        return r.call(this, t)
                    }
                }
            }(t)
        }
    }

    function d(t, e) {
        this.fun = t, this.array = e
    }

    function v() {
    }

    o.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        a.push(new d(t, e)), 1 !== a.length || f || c(p)
    }, d.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = v, o.addListener = v, o.once = v, o.off = v, o.removeListener = v, o.removeAllListeners = v, o.emit = v, o.prependListener = v, o.prependOnceListener = v, o.listeners = function (t) {
        return []
    }, o.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, o.cwd = function () {
        return "/"
    }, o.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, o.umask = function () {
        return 0
    }
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    "use strict";
    n.r(e);
    n(1);
    var r, o, i = n(0), s = function () {
        function t(t) {
            this.messageReceiver = t
        }

        return t.prototype.notify = function (t) {
            this.messageReceiver.onMessageReceived(t)
        }, t
    }(), c = function () {
        function t() {
            this.values = {}
        }

        return t.prototype.add = function (t, e) {
            this.getValuesAtKey(t).push(e)
        }, t.prototype.remove = function (t, e) {
            var n = this.values[t];
            if (n) {
                var r = n.indexOf(e);
                r > -1 && n.splice(r, 1)
            }
        }, t.prototype.getValuesAtKey = function (t) {
            var e = this.values[t] || [];
            return this.values[t] = e, e
        }, t.prototype.valuesPerKey = function (t) {
            return this.getValuesAtKey(t).length
        }, t
    }(), u = function () {
        return (u = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    }, a = function () {
        function t(t, e) {
            this.sourceId = t, this.listenerBridge = e, this.observers = new c
        }

        return t.prototype.init = function () {
            var t = new (function () {
                function t(t) {
                    this.messenger = t
                }

                return t.prototype.onMessageReceived = function (t) {
                    this.messenger.onMessageReceived(t)
                }, t
            }())(this), e = new s(t);
            this.listenerBridge.listen(e)
        }, t.prototype.dispose = function () {
            this.listenerBridge.stopListening()
        }, t.prototype.addObserver = function (t) {
            this.observers.add(t.messageType, t)
        }, t.prototype.removeObserver = function (t) {
            this.observers.remove(t.messageType, t)
        }, t.prototype.send = function (t, e, n) {
            n.send(u(u({}, t), {fromId: this.sourceId, toId: e, timestamp: Date.now()}))
        }, t.prototype.onMessageReceived = function (t) {
            var e = t.type, n = this.observers.getValuesAtKey(e);
            if (n) for (var r = 0, o = n; r < o.length; r++) {
                o[r].notify(t.payload, t.timestamp)
            }
        }, t
    }(), f = function () {
        function t(t) {
            var e = this;
            this.sourceWindow = t, this.messageObserver = null, this.onMessage = function (t) {
                e.messageObserver && e.messageObserver.notify(t.data)
            }
        }

        return t.prototype.listen = function (t) {
            this.messageObserver || (this.messageObserver = t, this.sourceWindow.addEventListener("message", this.onMessage))
        }, t.prototype.stopListening = function () {
            this.sourceWindow.removeEventListener("message", this.onMessage), this.messageObserver = null
        }, t
    }(), h = function () {
        function t(t, e) {
            void 0 === e && (e = "*"), this.targetWindow = t, this.targetOrigin = e
        }

        return t.prototype.send = function (t) {
            this.targetWindow.postMessage(t, this.targetOrigin)
        }, t
    }(), l = function () {
        return (l = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
        }).apply(this, arguments)
    }, p = function () {
        function t(t, e, n) {
            this.sourceId = t, this.targetId = e, this.messageBridge = n, this.observers = new c
        }

        return t.prototype.init = function () {
            var t = new (function () {
                function t(t) {
                    this.messenger = t
                }

                return t.prototype.onMessageReceived = function (t) {
                    this.messenger.onMessageReceived(t)
                }, t
            }())(this), e = new s(t);
            this.messageBridge.listen(e)
        }, t.prototype.dispose = function () {
            this.messageBridge.stopListening()
        }, t.prototype.addObserver = function (t) {
            this.observers.add(t.messageType, t)
        }, t.prototype.removeObserver = function (t) {
            this.observers.remove(t.messageType, t)
        }, t.prototype.send = function (t) {
            var e = this.sourceId, n = this.targetId;
            this.messageBridge.send(l(l({}, t), {fromId: e, toId: n, timestamp: Date.now()}))
        }, t.prototype.onMessageReceived = function (t) {
            if (this.filterMessageId(t)) {
                var e = t.type, n = this.observers.getValuesAtKey(e);
                if (n) for (var r = 0, o = n; r < o.length; r++) {
                    o[r].notify(t.payload, t.timestamp)
                }
            }
        }, t.prototype.filterMessageId = function (t) {
            var e = t.toId, n = t.fromId;
            return e instanceof Array ? e.indexOf(this.sourceId) > -1 : e === this.sourceId && n === this.targetId
        }, t
    }(), d = function () {
        function t(t, e, n) {
            void 0 === n && (n = "*"), this.listener = new f(t), this.sender = new h(e, n)
        }

        return t.prototype.listen = function (t) {
            this.listener.listen(t)
        }, t.prototype.stopListening = function () {
            this.listener.stopListening()
        }, t.prototype.send = function (t) {
            this.sender.send(t)
        }, t
    }(), v = function () {
        function t(t, e, n, r, o) {
            void 0 === o && (o = "*"), this.sourceId = t, this.sourceWindow = e, this.targetId = n, this.targetWindow = r, this.targetOrigin = o
        }

        return t.prototype.createMessenger = function () {
            var t = new d(this.sourceWindow, this.targetWindow, this.targetOrigin);
            return new p(this.sourceId, this.targetId, t)
        }, t
    }();
    !function (t) {
        t.CONNECT = "postmessage.connect"
    }(r || (r = {})), function (t) {
        t.HANDSHAKE = "postmessage.handshake", t.ACCEPT = "postmessage.accept", t.REJECT = "postmessage.reject"
    }(o || (o = {}));
    var y, g = function (t, e) {
        this.type = r.CONNECT, this.payload = {applicationKey: t, requestedVersion: e}
    }, m = function () {
        function t(t) {
            this.receiver = t, this.messageType = o.HANDSHAKE
        }

        return t.prototype.notify = function (t) {
            this.receiver.handshake()
        }, t
    }(), w = function () {
        function t(t) {
            this.receiver = t, this.messageType = o.ACCEPT
        }

        return t.prototype.notify = function (t) {
            var e = t.scriptUrl, n = t.warning, r = t.targetId, o = t.targetOrigin, i = t.interface;
            this.receiver.accept(e, i, r, o, n)
        }, t
    }(), b = function () {
        function t(t) {
            this.receiver = t, this.messageType = o.REJECT
        }

        return t.prototype.notify = function (t) {
            this.receiver.reject(t.reason)
        }, t
    }();
    !function (t) {
        t[t.IDLE = 0] = "IDLE", t[t.CONNECTING = 1] = "CONNECTING", t[t.HANDSHAKE = 2] = "HANDSHAKE", t[t.CONNECTED = 3] = "CONNECTED", t[t.REJECTED = 4] = "REJECTED"
    }(y || (y = {}));
    var O, _ = function () {
        function t(t, e) {
            var n = this;
            this.messenger = t, this.target = e, this.connectionState = y.IDLE, this.connectionPoll = void 0;
            var r = new (function () {
                function t(t) {
                    this.connector = t
                }

                return t.prototype.handshake = function () {
                    this.connector.handshake()
                }, t.prototype.accept = function (t, e, n, r, o) {
                    this.connector.accept(t, e, n, r, o)
                }, t.prototype.reject = function (t) {
                    this.connector.reject(t)
                }, t
            }())(this);
            this.handshakeObserver = new m(r), this.acceptObserver = new w(r), this.rejectObserver = new b(r), this.connectionPromise = new Promise(function (t, e) {
                n.resolveConnection = t, n.rejectConnection = e
            })
        }

        return t.prototype.connect = function (t, e) {
            var n = this;
            return this.connectionState === y.IDLE && (this.connectionState = y.CONNECTING, this.messenger.addObserver(this.handshakeObserver), this.messenger.addObserver(this.acceptObserver), this.messenger.addObserver(this.rejectObserver), this.connectionPoll = setInterval(function () {
                n.messenger.send(new g(t, e), -1, n.target)
            }, 500)), this.connectionPromise
        }, t.prototype.cancelConnecting = function () {
            this.connectionState < y.CONNECTED && (this.stopConnectPolling(), this.rejectConnection("User manually cancelled connection"))
        }, t.prototype.handshake = function () {
            this.connectionState < y.HANDSHAKE && (this.connectionState = y.HANDSHAKE, this.stopConnectPolling(), this.messenger.removeObserver(this.handshakeObserver))
        }, t.prototype.accept = function (t, e, n, r, o) {
            this.connectionState < y.CONNECTED && (this.connectionState = y.CONNECTED, this.messenger.removeObserver(this.handshakeObserver), this.messenger.removeObserver(this.acceptObserver), this.messenger.removeObserver(this.rejectObserver), this.stopConnectPolling(), this.resolveConnection({
                targetId: n,
                targetOrigin: r,
                scriptUrl: t,
                serializedInterface: e,
                warning: o
            }))
        }, t.prototype.reject = function (t) {
            this.connectionState < y.CONNECTED && (this.connectionState = y.REJECTED, this.messenger.removeObserver(this.handshakeObserver), this.messenger.removeObserver(this.acceptObserver), this.messenger.removeObserver(this.rejectObserver), this.stopConnectPolling(), this.rejectConnection(t))
        }, t.prototype.stopConnectPolling = function () {
            clearInterval(this.connectionPoll), this.connectionPoll = void 0
        }, t
    }(), E = function (t, e, n, r) {
        return new (n || (n = Promise))(function (o, i) {
            function s(t) {
                try {
                    u(r.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function c(t) {
                try {
                    u(r.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function u(t) {
                var e;
                t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                    t(e)
                })).then(s, c)
            }

            u((r = r.apply(t, e || [])).next())
        })
    }, T = function (t, e) {
        var n, r, o, i, s = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return i = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
            return this
        }), i;

        function c(i) {
            return function (c) {
                return function (i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                        switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                            case 0:
                            case 1:
                                o = i;
                                break;
                            case 4:
                                return s.label++, {value: i[1], done: !1};
                            case 5:
                                s.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < o[1]) {
                                    s.label = o[1], o = i;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(i);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = e.call(t, s)
                    } catch (t) {
                        i = [6, t], r = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {value: i[0] ? i[1] : void 0, done: !0}
                }([i, c])
            }
        }
    };
    !function (t) {
        (O || (O = {})).connect = function (t, e, r) {
            return E(this, void 0, void 0, function () {
                var o, i, s, c, u, l, p, d, y, g;
                return T(this, function (m) {
                    switch (m.label) {
                        case 0:
                            if ("string" != typeof e) return [2, Promise.reject("invalid key")];
                            if ("string" != typeof r) return [2, Promise.reject("invalid version")];
                            if (!(o = (E = t) instanceof Window ? E : E.contentWindow ? E.contentWindow : null)) return [2, Promise.reject("invalid window")];
                            i = Math.floor(1e6 * Math.random()), s = new f(window), c = new h(o), (u = new a(i, s)).init(), l = new _(u, c), m.label = 1;
                        case 1:
                            return m.trys.push([1, 3, 4, 5]), [4, l.connect(e, r)];
                        case 2:
                            return p = m.sent(), [3, 5];
                        case 3:
                            throw d = m.sent(), Error(e + "@" + window.location.href + " - " + d);
                        case 4:
                            return l.cancelConnecting(), u.dispose(), [7];
                        case 5:
                            return [4, n(p.scriptUrl)];
                        case 6:
                            return y = m.sent(), g = new v(i, window, p.targetId, o, p.targetOrigin), [2, (w = y, b = g, O = p.serializedInterface, new w(b).build(O))]
                    }
                    var w, b, O, E
                })
            })
        };
        var e = {};

        function n(t) {
            return E(this, void 0, void 0, function () {
                var n, r;
                return T(this, function (o) {
                    if (!t) throw new Error("Unabled to load the sdk");
                    return (n = e[t]) ? [2, n] : (r = new Promise(function (e, n) {
                        try {
                            i(t, function () {
                                var t = window["sdk-client"];
                                delete window["sdk-client"], t && t.SdkBuilder && "function" == typeof t.SdkBuilder && e(t.SdkBuilder)
                            })
                        } catch (e) {
                            n("Could not load the sdk from " + t)
                        }
                    }), e[t] = r, [2, r])
                })
            })
        }
    }(), window.MP_SDK = O
}]);
