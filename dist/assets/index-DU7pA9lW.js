(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = n(i);
    fetch(i.href, o);
  }
})();
var Bi =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function sv(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Rp = { exports: {} },
  ps = {},
  Ap = { exports: {} },
  F = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xi = Symbol.for("react.element"),
  av = Symbol.for("react.portal"),
  lv = Symbol.for("react.fragment"),
  uv = Symbol.for("react.strict_mode"),
  cv = Symbol.for("react.profiler"),
  fv = Symbol.for("react.provider"),
  dv = Symbol.for("react.context"),
  pv = Symbol.for("react.forward_ref"),
  hv = Symbol.for("react.suspense"),
  mv = Symbol.for("react.memo"),
  gv = Symbol.for("react.lazy"),
  Fc = Symbol.iterator;
function yv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fc && e[Fc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Lp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Mp = Object.assign,
  Dp = {};
function wr(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dp),
    (this.updater = n || Lp);
}
wr.prototype.isReactComponent = {};
wr.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
wr.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Vp() {}
Vp.prototype = wr.prototype;
function iu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Dp),
    (this.updater = n || Lp);
}
var ou = (iu.prototype = new Vp());
ou.constructor = iu;
Mp(ou, wr.prototype);
ou.isPureReactComponent = !0;
var Ic = Array.isArray,
  Fp = Object.prototype.hasOwnProperty,
  su = { current: null },
  Ip = { key: !0, ref: !0, __self: !0, __source: !0 };
function zp(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      Fp.call(t, r) && !Ip.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: xi,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: su.current,
  };
}
function vv(e, t) {
  return {
    $$typeof: xi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function au(e) {
  return typeof e == "object" && e !== null && e.$$typeof === xi;
}
function wv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var zc = /\/+/g;
function Xs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? wv("" + e.key)
    : t.toString(36);
}
function ho(e, t, n, r, i) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case xi:
          case av:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (i = i(s)),
      (e = r === "" ? "." + Xs(s, 0) : r),
      Ic(i)
        ? ((n = ""),
          e != null && (n = e.replace(zc, "$&/") + "/"),
          ho(i, t, n, "", function (u) {
            return u;
          }))
        : i != null &&
          (au(i) &&
            (i = vv(
              i,
              n +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(zc, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Ic(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var l = r + Xs(o, a);
      s += ho(o, t, n, l, i);
    }
  else if (((l = yv(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Xs(o, a++)), (s += ho(o, t, n, l, i));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function bi(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    ho(e, r, "", "", function (o) {
      return t.call(n, o, i++);
    }),
    r
  );
}
function Sv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ce = { current: null },
  mo = { transition: null },
  xv = {
    ReactCurrentDispatcher: Ce,
    ReactCurrentBatchConfig: mo,
    ReactCurrentOwner: su,
  };
F.Children = {
  map: bi,
  forEach: function (e, t, n) {
    bi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      bi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      bi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!au(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
F.Component = wr;
F.Fragment = lv;
F.Profiler = cv;
F.PureComponent = iu;
F.StrictMode = uv;
F.Suspense = hv;
F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = xv;
F.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Mp({}, e.props),
    i = e.key,
    o = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (s = su.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      Fp.call(t, l) &&
        !Ip.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
    r.children = a;
  }
  return { $$typeof: xi, type: e.type, key: i, ref: o, props: r, _owner: s };
};
F.createContext = function (e) {
  return (
    (e = {
      $$typeof: dv,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fv, _context: e }),
    (e.Consumer = e)
  );
};
F.createElement = zp;
F.createFactory = function (e) {
  var t = zp.bind(null, e);
  return (t.type = e), t;
};
F.createRef = function () {
  return { current: null };
};
F.forwardRef = function (e) {
  return { $$typeof: pv, render: e };
};
F.isValidElement = au;
F.lazy = function (e) {
  return { $$typeof: gv, _payload: { _status: -1, _result: e }, _init: Sv };
};
F.memo = function (e, t) {
  return { $$typeof: mv, type: e, compare: t === void 0 ? null : t };
};
F.startTransition = function (e) {
  var t = mo.transition;
  mo.transition = {};
  try {
    e();
  } finally {
    mo.transition = t;
  }
};
F.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
F.useCallback = function (e, t) {
  return Ce.current.useCallback(e, t);
};
F.useContext = function (e) {
  return Ce.current.useContext(e);
};
F.useDebugValue = function () {};
F.useDeferredValue = function (e) {
  return Ce.current.useDeferredValue(e);
};
F.useEffect = function (e, t) {
  return Ce.current.useEffect(e, t);
};
F.useId = function () {
  return Ce.current.useId();
};
F.useImperativeHandle = function (e, t, n) {
  return Ce.current.useImperativeHandle(e, t, n);
};
F.useInsertionEffect = function (e, t) {
  return Ce.current.useInsertionEffect(e, t);
};
F.useLayoutEffect = function (e, t) {
  return Ce.current.useLayoutEffect(e, t);
};
F.useMemo = function (e, t) {
  return Ce.current.useMemo(e, t);
};
F.useReducer = function (e, t, n) {
  return Ce.current.useReducer(e, t, n);
};
F.useRef = function (e) {
  return Ce.current.useRef(e);
};
F.useState = function (e) {
  return Ce.current.useState(e);
};
F.useSyncExternalStore = function (e, t, n) {
  return Ce.current.useSyncExternalStore(e, t, n);
};
F.useTransition = function () {
  return Ce.current.useTransition();
};
F.version = "18.2.0";
Ap.exports = F;
var j = Ap.exports;
const pt = sv(j);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _v = j,
  Ev = Symbol.for("react.element"),
  Pv = Symbol.for("react.fragment"),
  Tv = Object.prototype.hasOwnProperty,
  kv = _v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Cv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bp(e, t, n) {
  var r,
    i = {},
    o = null,
    s = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) Tv.call(t, r) && !Cv.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Ev,
    type: e,
    key: o,
    ref: s,
    props: i,
    _owner: kv.current,
  };
}
ps.Fragment = Pv;
ps.jsx = Bp;
ps.jsxs = Bp;
Rp.exports = ps;
var w = Rp.exports,
  $a = {},
  bp = { exports: {} },
  be = {},
  Up = { exports: {} },
  Hp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(N, M) {
    var V = N.length;
    N.push(M);
    e: for (; 0 < V; ) {
      var D = (V - 1) >>> 1,
        W = N[D];
      if (0 < i(W, M)) (N[D] = M), (N[V] = W), (V = D);
      else break e;
    }
  }
  function n(N) {
    return N.length === 0 ? null : N[0];
  }
  function r(N) {
    if (N.length === 0) return null;
    var M = N[0],
      V = N.pop();
    if (V !== M) {
      N[0] = V;
      e: for (var D = 0, W = N.length, dn = W >>> 1; D < dn; ) {
        var at = 2 * (D + 1) - 1,
          zn = N[at],
          De = at + 1,
          pn = N[De];
        if (0 > i(zn, V))
          De < W && 0 > i(pn, zn)
            ? ((N[D] = pn), (N[De] = V), (D = De))
            : ((N[D] = zn), (N[at] = V), (D = at));
        else if (De < W && 0 > i(pn, V)) (N[D] = pn), (N[De] = V), (D = De);
        else break e;
      }
    }
    return M;
  }
  function i(N, M) {
    var V = N.sortIndex - M.sortIndex;
    return V !== 0 ? V : N.id - M.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      a = s.now();
    e.unstable_now = function () {
      return s.now() - a;
    };
  }
  var l = [],
    u = [],
    f = 1,
    c = null,
    d = 3,
    g = !1,
    y = !1,
    v = !1,
    _ = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(N) {
    for (var M = n(u); M !== null; ) {
      if (M.callback === null) r(u);
      else if (M.startTime <= N)
        r(u), (M.sortIndex = M.expirationTime), t(l, M);
      else break;
      M = n(u);
    }
  }
  function S(N) {
    if (((v = !1), h(N), !y))
      if (n(l) !== null) (y = !0), ie(E);
      else {
        var M = n(u);
        M !== null && He(S, M.startTime - N);
      }
  }
  function E(N, M) {
    (y = !1), v && ((v = !1), m(T), (T = -1)), (g = !0);
    var V = d;
    try {
      for (
        h(M), c = n(l);
        c !== null && (!(c.expirationTime > M) || (N && !ne()));

      ) {
        var D = c.callback;
        if (typeof D == "function") {
          (c.callback = null), (d = c.priorityLevel);
          var W = D(c.expirationTime <= M);
          (M = e.unstable_now()),
            typeof W == "function" ? (c.callback = W) : c === n(l) && r(l),
            h(M);
        } else r(l);
        c = n(l);
      }
      if (c !== null) var dn = !0;
      else {
        var at = n(u);
        at !== null && He(S, at.startTime - M), (dn = !1);
      }
      return dn;
    } finally {
      (c = null), (d = V), (g = !1);
    }
  }
  var P = !1,
    k = null,
    T = -1,
    R = 5,
    A = -1;
  function ne() {
    return !(e.unstable_now() - A < R);
  }
  function ae() {
    if (k !== null) {
      var N = e.unstable_now();
      A = N;
      var M = !0;
      try {
        M = k(!0, N);
      } finally {
        M ? me() : ((P = !1), (k = null));
      }
    } else P = !1;
  }
  var me;
  if (typeof p == "function")
    me = function () {
      p(ae);
    };
  else if (typeof MessageChannel < "u") {
    var re = new MessageChannel(),
      st = re.port2;
    (re.port1.onmessage = ae),
      (me = function () {
        st.postMessage(null);
      });
  } else
    me = function () {
      _(ae, 0);
    };
  function ie(N) {
    (k = N), P || ((P = !0), me());
  }
  function He(N, M) {
    T = _(function () {
      N(e.unstable_now());
    }, M);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (N) {
      N.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), ie(E));
    }),
    (e.unstable_forceFrameRate = function (N) {
      0 > N || 125 < N
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (R = 0 < N ? Math.floor(1e3 / N) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (N) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var M = 3;
          break;
        default:
          M = d;
      }
      var V = d;
      d = M;
      try {
        return N();
      } finally {
        d = V;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (N, M) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var V = d;
      d = N;
      try {
        return M();
      } finally {
        d = V;
      }
    }),
    (e.unstable_scheduleCallback = function (N, M, V) {
      var D = e.unstable_now();
      switch (
        (typeof V == "object" && V !== null
          ? ((V = V.delay), (V = typeof V == "number" && 0 < V ? D + V : D))
          : (V = D),
        N)
      ) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return (
        (W = V + W),
        (N = {
          id: f++,
          callback: M,
          priorityLevel: N,
          startTime: V,
          expirationTime: W,
          sortIndex: -1,
        }),
        V > D
          ? ((N.sortIndex = V),
            t(u, N),
            n(l) === null &&
              N === n(u) &&
              (v ? (m(T), (T = -1)) : (v = !0), He(S, V - D)))
          : ((N.sortIndex = W), t(l, N), y || g || ((y = !0), ie(E))),
        N
      );
    }),
    (e.unstable_shouldYield = ne),
    (e.unstable_wrapCallback = function (N) {
      var M = d;
      return function () {
        var V = d;
        d = M;
        try {
          return N.apply(this, arguments);
        } finally {
          d = V;
        }
      };
    });
})(Hp);
Up.exports = Hp;
var jv = Up.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $p = j,
  ze = jv;
function C(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Wp = new Set(),
  Zr = {};
function Dn(e, t) {
  ur(e, t), ur(e + "Capture", t);
}
function ur(e, t) {
  for (Zr[e] = t, e = 0; e < t.length; e++) Wp.add(t[e]);
}
var jt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Wa = Object.prototype.hasOwnProperty,
  Nv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Bc = {},
  bc = {};
function Ov(e) {
  return Wa.call(bc, e)
    ? !0
    : Wa.call(Bc, e)
    ? !1
    : Nv.test(e)
    ? (bc[e] = !0)
    : ((Bc[e] = !0), !1);
}
function Rv(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Av(e, t, n, r) {
  if (t === null || typeof t > "u" || Rv(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function je(e, t, n, r, i, o, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var ve = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new je(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ve[t] = new je(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ve[e] = new je(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ve[e] = new je(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ve[e] = new je(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ve[e] = new je(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ve[e] = new je(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ve[e] = new je(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ve[e] = new je(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var lu = /[\-:]([a-z])/g;
function uu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lu, uu);
    ve[t] = new je(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(lu, uu);
    ve[t] = new je(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(lu, uu);
  ve[t] = new je(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ve[e] = new je(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ve.xlinkHref = new je(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ve[e] = new je(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cu(e, t, n, r) {
  var i = ve.hasOwnProperty(t) ? ve[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Av(t, n, i, r) && (n = null),
    r || i === null
      ? Ov(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Lt = $p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ui = Symbol.for("react.element"),
  bn = Symbol.for("react.portal"),
  Un = Symbol.for("react.fragment"),
  fu = Symbol.for("react.strict_mode"),
  Ka = Symbol.for("react.profiler"),
  Kp = Symbol.for("react.provider"),
  Qp = Symbol.for("react.context"),
  du = Symbol.for("react.forward_ref"),
  Qa = Symbol.for("react.suspense"),
  Ga = Symbol.for("react.suspense_list"),
  pu = Symbol.for("react.memo"),
  zt = Symbol.for("react.lazy"),
  Gp = Symbol.for("react.offscreen"),
  Uc = Symbol.iterator;
function Pr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Uc && e[Uc]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Z = Object.assign,
  qs;
function Dr(e) {
  if (qs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      qs = (t && t[1]) || "";
    }
  return (
    `
` +
    qs +
    e
  );
}
var Js = !1;
function Zs(e, t) {
  if (!e || Js) return "";
  Js = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          s = i.length - 1,
          a = o.length - 1;
        1 <= s && 0 <= a && i[s] !== o[a];

      )
        a--;
      for (; 1 <= s && 0 <= a; s--, a--)
        if (i[s] !== o[a]) {
          if (s !== 1 || a !== 1)
            do
              if ((s--, a--, 0 > a || i[s] !== o[a])) {
                var l =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= s && 0 <= a);
          break;
        }
    }
  } finally {
    (Js = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Dr(e) : "";
}
function Lv(e) {
  switch (e.tag) {
    case 5:
      return Dr(e.type);
    case 16:
      return Dr("Lazy");
    case 13:
      return Dr("Suspense");
    case 19:
      return Dr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Zs(e.type, !1)), e;
    case 11:
      return (e = Zs(e.type.render, !1)), e;
    case 1:
      return (e = Zs(e.type, !0)), e;
    default:
      return "";
  }
}
function Ya(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Un:
      return "Fragment";
    case bn:
      return "Portal";
    case Ka:
      return "Profiler";
    case fu:
      return "StrictMode";
    case Qa:
      return "Suspense";
    case Ga:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Qp:
        return (e.displayName || "Context") + ".Consumer";
      case Kp:
        return (e._context.displayName || "Context") + ".Provider";
      case du:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pu:
        return (
          (t = e.displayName || null), t !== null ? t : Ya(e.type) || "Memo"
        );
      case zt:
        (t = e._payload), (e = e._init);
        try {
          return Ya(e(t));
        } catch {}
    }
  return null;
}
function Mv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ya(t);
    case 8:
      return t === fu ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function nn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Yp(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Dv(e) {
  var t = Yp(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (r = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Hi(e) {
  e._valueTracker || (e._valueTracker = Dv(e));
}
function Xp(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Yp(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xa(e, t) {
  var n = t.checked;
  return Z({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Hc(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = nn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function qp(e, t) {
  (t = t.checked), t != null && cu(e, "checked", t, !1);
}
function qa(e, t) {
  qp(e, t);
  var n = nn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ja(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ja(e, t.type, nn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function $c(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ja(e, t, n) {
  (t !== "number" || Lo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Vr = Array.isArray;
function rr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + nn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Za(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(C(91));
  return Z({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Wc(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(C(92));
      if (Vr(n)) {
        if (1 < n.length) throw Error(C(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: nn(n) };
}
function Jp(e, t) {
  var n = nn(t.value),
    r = nn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Kc(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Zp(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function el(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Zp(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var $i,
  eh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        $i = $i || document.createElement("div"),
          $i.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = $i.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ei(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Br = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Vv = ["Webkit", "ms", "Moz", "O"];
Object.keys(Br).forEach(function (e) {
  Vv.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Br[t] = Br[e]);
  });
});
function th(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Br.hasOwnProperty(e) && Br[e])
    ? ("" + t).trim()
    : t + "px";
}
function nh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = th(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Fv = Z(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function tl(e, t) {
  if (t) {
    if (Fv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(C(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(C(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(C(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(C(62));
  }
}
function nl(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var rl = null;
function hu(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var il = null,
  ir = null,
  or = null;
function Qc(e) {
  if ((e = Pi(e))) {
    if (typeof il != "function") throw Error(C(280));
    var t = e.stateNode;
    t && ((t = vs(t)), il(e.stateNode, e.type, t));
  }
}
function rh(e) {
  ir ? (or ? or.push(e) : (or = [e])) : (ir = e);
}
function ih() {
  if (ir) {
    var e = ir,
      t = or;
    if (((or = ir = null), Qc(e), t)) for (e = 0; e < t.length; e++) Qc(t[e]);
  }
}
function oh(e, t) {
  return e(t);
}
function sh() {}
var ea = !1;
function ah(e, t, n) {
  if (ea) return e(t, n);
  ea = !0;
  try {
    return oh(e, t, n);
  } finally {
    (ea = !1), (ir !== null || or !== null) && (sh(), ih());
  }
}
function ti(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = vs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(C(231, t, typeof n));
  return n;
}
var ol = !1;
if (jt)
  try {
    var Tr = {};
    Object.defineProperty(Tr, "passive", {
      get: function () {
        ol = !0;
      },
    }),
      window.addEventListener("test", Tr, Tr),
      window.removeEventListener("test", Tr, Tr);
  } catch {
    ol = !1;
  }
function Iv(e, t, n, r, i, o, s, a, l) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (f) {
    this.onError(f);
  }
}
var br = !1,
  Mo = null,
  Do = !1,
  sl = null,
  zv = {
    onError: function (e) {
      (br = !0), (Mo = e);
    },
  };
function Bv(e, t, n, r, i, o, s, a, l) {
  (br = !1), (Mo = null), Iv.apply(zv, arguments);
}
function bv(e, t, n, r, i, o, s, a, l) {
  if ((Bv.apply(this, arguments), br)) {
    if (br) {
      var u = Mo;
      (br = !1), (Mo = null);
    } else throw Error(C(198));
    Do || ((Do = !0), (sl = u));
  }
}
function Vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function lh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Gc(e) {
  if (Vn(e) !== e) throw Error(C(188));
}
function Uv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vn(e)), t === null)) throw Error(C(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return Gc(i), e;
        if (o === r) return Gc(i), t;
        o = o.sibling;
      }
      throw Error(C(188));
    }
    if (n.return !== r.return) (n = i), (r = o);
    else {
      for (var s = !1, a = i.child; a; ) {
        if (a === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        if (a === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!s) {
        for (a = o.child; a; ) {
          if (a === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          if (a === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!s) throw Error(C(189));
      }
    }
    if (n.alternate !== r) throw Error(C(190));
  }
  if (n.tag !== 3) throw Error(C(188));
  return n.stateNode.current === n ? e : t;
}
function uh(e) {
  return (e = Uv(e)), e !== null ? ch(e) : null;
}
function ch(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ch(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fh = ze.unstable_scheduleCallback,
  Yc = ze.unstable_cancelCallback,
  Hv = ze.unstable_shouldYield,
  $v = ze.unstable_requestPaint,
  oe = ze.unstable_now,
  Wv = ze.unstable_getCurrentPriorityLevel,
  mu = ze.unstable_ImmediatePriority,
  dh = ze.unstable_UserBlockingPriority,
  Vo = ze.unstable_NormalPriority,
  Kv = ze.unstable_LowPriority,
  ph = ze.unstable_IdlePriority,
  hs = null,
  ht = null;
function Qv(e) {
  if (ht && typeof ht.onCommitFiberRoot == "function")
    try {
      ht.onCommitFiberRoot(hs, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var rt = Math.clz32 ? Math.clz32 : Xv,
  Gv = Math.log,
  Yv = Math.LN2;
function Xv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Gv(e) / Yv) | 0)) | 0;
}
var Wi = 64,
  Ki = 4194304;
function Fr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fo(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var a = s & ~i;
    a !== 0 ? (r = Fr(a)) : ((o &= s), o !== 0 && (r = Fr(o)));
  } else (s = n & ~i), s !== 0 ? (r = Fr(s)) : o !== 0 && (r = Fr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - rt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function qv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Jv(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var s = 31 - rt(o),
      a = 1 << s,
      l = i[s];
    l === -1
      ? (!(a & n) || a & r) && (i[s] = qv(a, t))
      : l <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function al(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function hh() {
  var e = Wi;
  return (Wi <<= 1), !(Wi & 4194240) && (Wi = 64), e;
}
function ta(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function _i(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - rt(t)),
    (e[t] = n);
}
function Zv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - rt(n),
      o = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o);
  }
}
function gu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - rt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var B = 0;
function mh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var gh,
  yu,
  yh,
  vh,
  wh,
  ll = !1,
  Qi = [],
  Kt = null,
  Qt = null,
  Gt = null,
  ni = new Map(),
  ri = new Map(),
  Ut = [],
  e0 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xc(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Qt = null;
      break;
    case "mouseover":
    case "mouseout":
      Gt = null;
      break;
    case "pointerover":
    case "pointerout":
      ni.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      ri.delete(t.pointerId);
  }
}
function kr(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Pi(t)), t !== null && yu(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function t0(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (Kt = kr(Kt, e, t, n, r, i)), !0;
    case "dragenter":
      return (Qt = kr(Qt, e, t, n, r, i)), !0;
    case "mouseover":
      return (Gt = kr(Gt, e, t, n, r, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return ni.set(o, kr(ni.get(o) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), ri.set(o, kr(ri.get(o) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Sh(e) {
  var t = _n(e.target);
  if (t !== null) {
    var n = Vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = lh(n)), t !== null)) {
          (e.blockedOn = t),
            wh(e.priority, function () {
              yh(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function go(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (rl = r), n.target.dispatchEvent(r), (rl = null);
    } else return (t = Pi(n)), t !== null && yu(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function qc(e, t, n) {
  go(e) && n.delete(t);
}
function n0() {
  (ll = !1),
    Kt !== null && go(Kt) && (Kt = null),
    Qt !== null && go(Qt) && (Qt = null),
    Gt !== null && go(Gt) && (Gt = null),
    ni.forEach(qc),
    ri.forEach(qc);
}
function Cr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    ll ||
      ((ll = !0),
      ze.unstable_scheduleCallback(ze.unstable_NormalPriority, n0)));
}
function ii(e) {
  function t(i) {
    return Cr(i, e);
  }
  if (0 < Qi.length) {
    Cr(Qi[0], e);
    for (var n = 1; n < Qi.length; n++) {
      var r = Qi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Kt !== null && Cr(Kt, e),
      Qt !== null && Cr(Qt, e),
      Gt !== null && Cr(Gt, e),
      ni.forEach(t),
      ri.forEach(t),
      n = 0;
    n < Ut.length;
    n++
  )
    (r = Ut[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Ut.length && ((n = Ut[0]), n.blockedOn === null); )
    Sh(n), n.blockedOn === null && Ut.shift();
}
var sr = Lt.ReactCurrentBatchConfig,
  Io = !0;
function r0(e, t, n, r) {
  var i = B,
    o = sr.transition;
  sr.transition = null;
  try {
    (B = 1), vu(e, t, n, r);
  } finally {
    (B = i), (sr.transition = o);
  }
}
function i0(e, t, n, r) {
  var i = B,
    o = sr.transition;
  sr.transition = null;
  try {
    (B = 4), vu(e, t, n, r);
  } finally {
    (B = i), (sr.transition = o);
  }
}
function vu(e, t, n, r) {
  if (Io) {
    var i = ul(e, t, n, r);
    if (i === null) fa(e, t, r, zo, n), Xc(e, r);
    else if (t0(i, e, t, n, r)) r.stopPropagation();
    else if ((Xc(e, r), t & 4 && -1 < e0.indexOf(e))) {
      for (; i !== null; ) {
        var o = Pi(i);
        if (
          (o !== null && gh(o),
          (o = ul(e, t, n, r)),
          o === null && fa(e, t, r, zo, n),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && r.stopPropagation();
    } else fa(e, t, r, null, n);
  }
}
var zo = null;
function ul(e, t, n, r) {
  if (((zo = null), (e = hu(r)), (e = _n(e)), e !== null))
    if (((t = Vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = lh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (zo = e), null;
}
function xh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Wv()) {
        case mu:
          return 1;
        case dh:
          return 4;
        case Vo:
        case Kv:
          return 16;
        case ph:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var $t = null,
  wu = null,
  yo = null;
function _h() {
  if (yo) return yo;
  var e,
    t = wu,
    n = t.length,
    r,
    i = "value" in $t ? $t.value : $t.textContent,
    o = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === i[o - r]; r++);
  return (yo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function vo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Gi() {
  return !0;
}
function Jc() {
  return !1;
}
function Ue(e) {
  function t(n, r, i, o, s) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Gi
        : Jc),
      (this.isPropagationStopped = Jc),
      this
    );
  }
  return (
    Z(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Gi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Gi));
      },
      persist: function () {},
      isPersistent: Gi,
    }),
    t
  );
}
var Sr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Su = Ue(Sr),
  Ei = Z({}, Sr, { view: 0, detail: 0 }),
  o0 = Ue(Ei),
  na,
  ra,
  jr,
  ms = Z({}, Ei, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== jr &&
            (jr && e.type === "mousemove"
              ? ((na = e.screenX - jr.screenX), (ra = e.screenY - jr.screenY))
              : (ra = na = 0),
            (jr = e)),
          na);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ra;
    },
  }),
  Zc = Ue(ms),
  s0 = Z({}, ms, { dataTransfer: 0 }),
  a0 = Ue(s0),
  l0 = Z({}, Ei, { relatedTarget: 0 }),
  ia = Ue(l0),
  u0 = Z({}, Sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  c0 = Ue(u0),
  f0 = Z({}, Sr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  d0 = Ue(f0),
  p0 = Z({}, Sr, { data: 0 }),
  ef = Ue(p0),
  h0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  m0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  g0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function y0(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = g0[e]) ? !!t[e] : !1;
}
function xu() {
  return y0;
}
var v0 = Z({}, Ei, {
    key: function (e) {
      if (e.key) {
        var t = h0[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = vo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? m0[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xu,
    charCode: function (e) {
      return e.type === "keypress" ? vo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? vo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  w0 = Ue(v0),
  S0 = Z({}, ms, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  tf = Ue(S0),
  x0 = Z({}, Ei, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xu,
  }),
  _0 = Ue(x0),
  E0 = Z({}, Sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  P0 = Ue(E0),
  T0 = Z({}, ms, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  k0 = Ue(T0),
  C0 = [9, 13, 27, 32],
  _u = jt && "CompositionEvent" in window,
  Ur = null;
jt && "documentMode" in document && (Ur = document.documentMode);
var j0 = jt && "TextEvent" in window && !Ur,
  Eh = jt && (!_u || (Ur && 8 < Ur && 11 >= Ur)),
  nf = " ",
  rf = !1;
function Ph(e, t) {
  switch (e) {
    case "keyup":
      return C0.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Th(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Hn = !1;
function N0(e, t) {
  switch (e) {
    case "compositionend":
      return Th(t);
    case "keypress":
      return t.which !== 32 ? null : ((rf = !0), nf);
    case "textInput":
      return (e = t.data), e === nf && rf ? null : e;
    default:
      return null;
  }
}
function O0(e, t) {
  if (Hn)
    return e === "compositionend" || (!_u && Ph(e, t))
      ? ((e = _h()), (yo = wu = $t = null), (Hn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Eh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var R0 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function of(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!R0[e.type] : t === "textarea";
}
function kh(e, t, n, r) {
  rh(r),
    (t = Bo(t, "onChange")),
    0 < t.length &&
      ((n = new Su("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Hr = null,
  oi = null;
function A0(e) {
  Fh(e, 0);
}
function gs(e) {
  var t = Kn(e);
  if (Xp(t)) return e;
}
function L0(e, t) {
  if (e === "change") return t;
}
var Ch = !1;
if (jt) {
  var oa;
  if (jt) {
    var sa = "oninput" in document;
    if (!sa) {
      var sf = document.createElement("div");
      sf.setAttribute("oninput", "return;"),
        (sa = typeof sf.oninput == "function");
    }
    oa = sa;
  } else oa = !1;
  Ch = oa && (!document.documentMode || 9 < document.documentMode);
}
function af() {
  Hr && (Hr.detachEvent("onpropertychange", jh), (oi = Hr = null));
}
function jh(e) {
  if (e.propertyName === "value" && gs(oi)) {
    var t = [];
    kh(t, oi, e, hu(e)), ah(A0, t);
  }
}
function M0(e, t, n) {
  e === "focusin"
    ? (af(), (Hr = t), (oi = n), Hr.attachEvent("onpropertychange", jh))
    : e === "focusout" && af();
}
function D0(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return gs(oi);
}
function V0(e, t) {
  if (e === "click") return gs(t);
}
function F0(e, t) {
  if (e === "input" || e === "change") return gs(t);
}
function I0(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var ot = typeof Object.is == "function" ? Object.is : I0;
function si(e, t) {
  if (ot(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Wa.call(t, i) || !ot(e[i], t[i])) return !1;
  }
  return !0;
}
function lf(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uf(e, t) {
  var n = lf(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = lf(n);
  }
}
function Nh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Nh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Oh() {
  for (var e = window, t = Lo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lo(e.document);
  }
  return t;
}
function Eu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function z0(e) {
  var t = Oh(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Nh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Eu(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          o = Math.min(r.start, i);
        (r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = uf(n, o));
        var s = uf(n, r);
        i &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var B0 = jt && "documentMode" in document && 11 >= document.documentMode,
  $n = null,
  cl = null,
  $r = null,
  fl = !1;
function cf(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  fl ||
    $n == null ||
    $n !== Lo(r) ||
    ((r = $n),
    "selectionStart" in r && Eu(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    ($r && si($r, r)) ||
      (($r = r),
      (r = Bo(cl, "onSelect")),
      0 < r.length &&
        ((t = new Su("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = $n))));
}
function Yi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Wn = {
    animationend: Yi("Animation", "AnimationEnd"),
    animationiteration: Yi("Animation", "AnimationIteration"),
    animationstart: Yi("Animation", "AnimationStart"),
    transitionend: Yi("Transition", "TransitionEnd"),
  },
  aa = {},
  Rh = {};
jt &&
  ((Rh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Wn.animationend.animation,
    delete Wn.animationiteration.animation,
    delete Wn.animationstart.animation),
  "TransitionEvent" in window || delete Wn.transitionend.transition);
function ys(e) {
  if (aa[e]) return aa[e];
  if (!Wn[e]) return e;
  var t = Wn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rh) return (aa[e] = t[n]);
  return e;
}
var Ah = ys("animationend"),
  Lh = ys("animationiteration"),
  Mh = ys("animationstart"),
  Dh = ys("transitionend"),
  Vh = new Map(),
  ff =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function an(e, t) {
  Vh.set(e, t), Dn(t, [e]);
}
for (var la = 0; la < ff.length; la++) {
  var ua = ff[la],
    b0 = ua.toLowerCase(),
    U0 = ua[0].toUpperCase() + ua.slice(1);
  an(b0, "on" + U0);
}
an(Ah, "onAnimationEnd");
an(Lh, "onAnimationIteration");
an(Mh, "onAnimationStart");
an("dblclick", "onDoubleClick");
an("focusin", "onFocus");
an("focusout", "onBlur");
an(Dh, "onTransitionEnd");
ur("onMouseEnter", ["mouseout", "mouseover"]);
ur("onMouseLeave", ["mouseout", "mouseover"]);
ur("onPointerEnter", ["pointerout", "pointerover"]);
ur("onPointerLeave", ["pointerout", "pointerover"]);
Dn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Dn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Dn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Dn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Dn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ir =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  H0 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ir));
function df(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), bv(r, t, void 0, e), (e.currentTarget = null);
}
function Fh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var a = r[s],
            l = a.instance,
            u = a.currentTarget;
          if (((a = a.listener), l !== o && i.isPropagationStopped())) break e;
          df(i, a, u), (o = l);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((a = r[s]),
            (l = a.instance),
            (u = a.currentTarget),
            (a = a.listener),
            l !== o && i.isPropagationStopped())
          )
            break e;
          df(i, a, u), (o = l);
        }
    }
  }
  if (Do) throw ((e = sl), (Do = !1), (sl = null), e);
}
function H(e, t) {
  var n = t[gl];
  n === void 0 && (n = t[gl] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Ih(t, e, 2, !1), n.add(r));
}
function ca(e, t, n) {
  var r = 0;
  t && (r |= 4), Ih(n, e, r, t);
}
var Xi = "_reactListening" + Math.random().toString(36).slice(2);
function ai(e) {
  if (!e[Xi]) {
    (e[Xi] = !0),
      Wp.forEach(function (n) {
        n !== "selectionchange" && (H0.has(n) || ca(n, !1, e), ca(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Xi] || ((t[Xi] = !0), ca("selectionchange", !1, t));
  }
}
function Ih(e, t, n, r) {
  switch (xh(t)) {
    case 1:
      var i = r0;
      break;
    case 4:
      i = i0;
      break;
    default:
      i = vu;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !ol ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function fa(e, t, n, r, i) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var l = s.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = s.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; a !== null; ) {
          if (((s = _n(a)), s === null)) return;
          if (((l = s.tag), l === 5 || l === 6)) {
            r = o = s;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  ah(function () {
    var u = o,
      f = hu(n),
      c = [];
    e: {
      var d = Vh.get(e);
      if (d !== void 0) {
        var g = Su,
          y = e;
        switch (e) {
          case "keypress":
            if (vo(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = w0;
            break;
          case "focusin":
            (y = "focus"), (g = ia);
            break;
          case "focusout":
            (y = "blur"), (g = ia);
            break;
          case "beforeblur":
          case "afterblur":
            g = ia;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Zc;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = a0;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = _0;
            break;
          case Ah:
          case Lh:
          case Mh:
            g = c0;
            break;
          case Dh:
            g = P0;
            break;
          case "scroll":
            g = o0;
            break;
          case "wheel":
            g = k0;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = d0;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = tf;
        }
        var v = (t & 4) !== 0,
          _ = !v && e === "scroll",
          m = v ? (d !== null ? d + "Capture" : null) : d;
        v = [];
        for (var p = u, h; p !== null; ) {
          h = p;
          var S = h.stateNode;
          if (
            (h.tag === 5 &&
              S !== null &&
              ((h = S),
              m !== null && ((S = ti(p, m)), S != null && v.push(li(p, S, h)))),
            _)
          )
            break;
          p = p.return;
        }
        0 < v.length &&
          ((d = new g(d, y, null, n, f)), c.push({ event: d, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          d &&
            n !== rl &&
            (y = n.relatedTarget || n.fromElement) &&
            (_n(y) || y[Nt]))
        )
          break e;
        if (
          (g || d) &&
          ((d =
            f.window === f
              ? f
              : (d = f.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? _n(y) : null),
              y !== null &&
                ((_ = Vn(y)), y !== _ || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((v = Zc),
            (S = "onMouseLeave"),
            (m = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = tf),
              (S = "onPointerLeave"),
              (m = "onPointerEnter"),
              (p = "pointer")),
            (_ = g == null ? d : Kn(g)),
            (h = y == null ? d : Kn(y)),
            (d = new v(S, p + "leave", g, n, f)),
            (d.target = _),
            (d.relatedTarget = h),
            (S = null),
            _n(f) === u &&
              ((v = new v(m, p + "enter", y, n, f)),
              (v.target = h),
              (v.relatedTarget = _),
              (S = v)),
            (_ = S),
            g && y)
          )
            t: {
              for (v = g, m = y, p = 0, h = v; h; h = Bn(h)) p++;
              for (h = 0, S = m; S; S = Bn(S)) h++;
              for (; 0 < p - h; ) (v = Bn(v)), p--;
              for (; 0 < h - p; ) (m = Bn(m)), h--;
              for (; p--; ) {
                if (v === m || (m !== null && v === m.alternate)) break t;
                (v = Bn(v)), (m = Bn(m));
              }
              v = null;
            }
          else v = null;
          g !== null && pf(c, d, g, v, !1),
            y !== null && _ !== null && pf(c, _, y, v, !0);
        }
      }
      e: {
        if (
          ((d = u ? Kn(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === "select" || (g === "input" && d.type === "file"))
        )
          var E = L0;
        else if (of(d))
          if (Ch) E = F0;
          else {
            E = D0;
            var P = M0;
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            (E = V0);
        if (E && (E = E(e, u))) {
          kh(c, E, n, f);
          break e;
        }
        P && P(e, d, u),
          e === "focusout" &&
            (P = d._wrapperState) &&
            P.controlled &&
            d.type === "number" &&
            Ja(d, "number", d.value);
      }
      switch (((P = u ? Kn(u) : window), e)) {
        case "focusin":
          (of(P) || P.contentEditable === "true") &&
            (($n = P), (cl = u), ($r = null));
          break;
        case "focusout":
          $r = cl = $n = null;
          break;
        case "mousedown":
          fl = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (fl = !1), cf(c, n, f);
          break;
        case "selectionchange":
          if (B0) break;
        case "keydown":
        case "keyup":
          cf(c, n, f);
      }
      var k;
      if (_u)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Hn
          ? Ph(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Eh &&
          n.locale !== "ko" &&
          (Hn || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Hn && (k = _h())
            : (($t = f),
              (wu = "value" in $t ? $t.value : $t.textContent),
              (Hn = !0))),
        (P = Bo(u, T)),
        0 < P.length &&
          ((T = new ef(T, e, null, n, f)),
          c.push({ event: T, listeners: P }),
          k ? (T.data = k) : ((k = Th(n)), k !== null && (T.data = k)))),
        (k = j0 ? N0(e, n) : O0(e, n)) &&
          ((u = Bo(u, "onBeforeInput")),
          0 < u.length &&
            ((f = new ef("onBeforeInput", "beforeinput", null, n, f)),
            c.push({ event: f, listeners: u }),
            (f.data = k)));
    }
    Fh(c, t);
  });
}
function li(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Bo(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = ti(e, n)),
      o != null && r.unshift(li(e, o, i)),
      (o = ti(e, t)),
      o != null && r.push(li(e, o, i))),
      (e = e.return);
  }
  return r;
}
function Bn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function pf(e, t, n, r, i) {
  for (var o = t._reactName, s = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      u = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      u !== null &&
      ((a = u),
      i
        ? ((l = ti(n, o)), l != null && s.unshift(li(n, l, a)))
        : i || ((l = ti(n, o)), l != null && s.push(li(n, l, a)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var $0 = /\r\n?/g,
  W0 = /\u0000|\uFFFD/g;
function hf(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      $0,
      `
`
    )
    .replace(W0, "");
}
function qi(e, t, n) {
  if (((t = hf(t)), hf(e) !== t && n)) throw Error(C(425));
}
function bo() {}
var dl = null,
  pl = null;
function hl(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var ml = typeof setTimeout == "function" ? setTimeout : void 0,
  K0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  mf = typeof Promise == "function" ? Promise : void 0,
  Q0 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof mf < "u"
      ? function (e) {
          return mf.resolve(null).then(e).catch(G0);
        }
      : ml;
function G0(e) {
  setTimeout(function () {
    throw e;
  });
}
function da(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ii(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ii(t);
}
function Yt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function gf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var xr = Math.random().toString(36).slice(2),
  ft = "__reactFiber$" + xr,
  ui = "__reactProps$" + xr,
  Nt = "__reactContainer$" + xr,
  gl = "__reactEvents$" + xr,
  Y0 = "__reactListeners$" + xr,
  X0 = "__reactHandles$" + xr;
function _n(e) {
  var t = e[ft];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Nt] || n[ft])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = gf(e); e !== null; ) {
          if ((n = e[ft])) return n;
          e = gf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Pi(e) {
  return (
    (e = e[ft] || e[Nt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Kn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(C(33));
}
function vs(e) {
  return e[ui] || null;
}
var yl = [],
  Qn = -1;
function ln(e) {
  return { current: e };
}
function $(e) {
  0 > Qn || ((e.current = yl[Qn]), (yl[Qn] = null), Qn--);
}
function b(e, t) {
  Qn++, (yl[Qn] = e.current), (e.current = t);
}
var rn = {},
  Ee = ln(rn),
  Re = ln(!1),
  Nn = rn;
function cr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return rn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in n) i[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ae(e) {
  return (e = e.childContextTypes), e != null;
}
function Uo() {
  $(Re), $(Ee);
}
function yf(e, t, n) {
  if (Ee.current !== rn) throw Error(C(168));
  b(Ee, t), b(Re, n);
}
function zh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(C(108, Mv(e) || "Unknown", i));
  return Z({}, n, r);
}
function Ho(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || rn),
    (Nn = Ee.current),
    b(Ee, e),
    b(Re, Re.current),
    !0
  );
}
function vf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(C(169));
  n
    ? ((e = zh(e, t, Nn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      $(Re),
      $(Ee),
      b(Ee, e))
    : $(Re),
    b(Re, n);
}
var St = null,
  ws = !1,
  pa = !1;
function Bh(e) {
  St === null ? (St = [e]) : St.push(e);
}
function q0(e) {
  (ws = !0), Bh(e);
}
function un() {
  if (!pa && St !== null) {
    pa = !0;
    var e = 0,
      t = B;
    try {
      var n = St;
      for (B = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (St = null), (ws = !1);
    } catch (i) {
      throw (St !== null && (St = St.slice(e + 1)), fh(mu, un), i);
    } finally {
      (B = t), (pa = !1);
    }
  }
  return null;
}
var Gn = [],
  Yn = 0,
  $o = null,
  Wo = 0,
  Ke = [],
  Qe = 0,
  On = null,
  xt = 1,
  _t = "";
function yn(e, t) {
  (Gn[Yn++] = Wo), (Gn[Yn++] = $o), ($o = e), (Wo = t);
}
function bh(e, t, n) {
  (Ke[Qe++] = xt), (Ke[Qe++] = _t), (Ke[Qe++] = On), (On = e);
  var r = xt;
  e = _t;
  var i = 32 - rt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var o = 32 - rt(t) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (i -= s),
      (xt = (1 << (32 - rt(t) + i)) | (n << i) | r),
      (_t = o + e);
  } else (xt = (1 << o) | (n << i) | r), (_t = e);
}
function Pu(e) {
  e.return !== null && (yn(e, 1), bh(e, 1, 0));
}
function Tu(e) {
  for (; e === $o; )
    ($o = Gn[--Yn]), (Gn[Yn] = null), (Wo = Gn[--Yn]), (Gn[Yn] = null);
  for (; e === On; )
    (On = Ke[--Qe]),
      (Ke[Qe] = null),
      (_t = Ke[--Qe]),
      (Ke[Qe] = null),
      (xt = Ke[--Qe]),
      (Ke[Qe] = null);
}
var Ie = null,
  Fe = null,
  Q = !1,
  nt = null;
function Uh(e, t) {
  var n = Ge(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function wf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ie = e), (Fe = Yt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ie = e), (Fe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = On !== null ? { id: xt, overflow: _t } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ge(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ie = e),
            (Fe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function vl(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function wl(e) {
  if (Q) {
    var t = Fe;
    if (t) {
      var n = t;
      if (!wf(e, t)) {
        if (vl(e)) throw Error(C(418));
        t = Yt(n.nextSibling);
        var r = Ie;
        t && wf(e, t)
          ? Uh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Ie = e));
      }
    } else {
      if (vl(e)) throw Error(C(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (Ie = e);
    }
  }
}
function Sf(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ie = e;
}
function Ji(e) {
  if (e !== Ie) return !1;
  if (!Q) return Sf(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !hl(e.type, e.memoizedProps))),
    t && (t = Fe))
  ) {
    if (vl(e)) throw (Hh(), Error(C(418)));
    for (; t; ) Uh(e, t), (t = Yt(t.nextSibling));
  }
  if ((Sf(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(C(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Fe = Yt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Fe = null;
    }
  } else Fe = Ie ? Yt(e.stateNode.nextSibling) : null;
  return !0;
}
function Hh() {
  for (var e = Fe; e; ) e = Yt(e.nextSibling);
}
function fr() {
  (Fe = Ie = null), (Q = !1);
}
function ku(e) {
  nt === null ? (nt = [e]) : nt.push(e);
}
var J0 = Lt.ReactCurrentBatchConfig;
function et(e, t) {
  if (e && e.defaultProps) {
    (t = Z({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Ko = ln(null),
  Qo = null,
  Xn = null,
  Cu = null;
function ju() {
  Cu = Xn = Qo = null;
}
function Nu(e) {
  var t = Ko.current;
  $(Ko), (e._currentValue = t);
}
function Sl(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function ar(e, t) {
  (Qo = e),
    (Cu = Xn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Oe = !0), (e.firstContext = null));
}
function qe(e) {
  var t = e._currentValue;
  if (Cu !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Xn === null)) {
      if (Qo === null) throw Error(C(308));
      (Xn = e), (Qo.dependencies = { lanes: 0, firstContext: e });
    } else Xn = Xn.next = e;
  return t;
}
var En = null;
function Ou(e) {
  En === null ? (En = [e]) : En.push(e);
}
function $h(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Ou(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Ot(e, r)
  );
}
function Ot(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Bt = !1;
function Ru(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Wh(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Pt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Xt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), z & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Ot(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Ou(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Ot(e, n)
  );
}
function wo(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gu(e, n);
  }
}
function xf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (n = n.next);
      } while (n !== null);
      o === null ? (i = o = t) : (o = o.next = t);
    } else i = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Go(e, t, n, r) {
  var i = e.updateQueue;
  Bt = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      u = l.next;
    (l.next = null), s === null ? (o = u) : (s.next = u), (s = l);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== s &&
        (a === null ? (f.firstBaseUpdate = u) : (a.next = u),
        (f.lastBaseUpdate = l)));
  }
  if (o !== null) {
    var c = i.baseState;
    (s = 0), (f = u = l = null), (a = o);
    do {
      var d = a.lane,
        g = a.eventTime;
      if ((r & d) === d) {
        f !== null &&
          (f = f.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            v = a;
          switch (((d = t), (g = n), v.tag)) {
            case 1:
              if (((y = v.payload), typeof y == "function")) {
                c = y.call(g, c, d);
                break e;
              }
              c = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = v.payload),
                (d = typeof y == "function" ? y.call(g, c, d) : y),
                d == null)
              )
                break e;
              c = Z({}, c, d);
              break e;
            case 2:
              Bt = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [a]) : d.push(a));
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((u = f = g), (l = c)) : (f = f.next = g),
          (s |= d);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (d = a),
          (a = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (l = c),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = f),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (s |= i.lane), (i = i.next);
      while (i !== t);
    } else o === null && (i.shared.lanes = 0);
    (An |= s), (e.lanes = s), (e.memoizedState = c);
  }
}
function _f(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(C(191, i));
        i.call(r);
      }
    }
}
var Kh = new $p.Component().refs;
function xl(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Z({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ss = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = Jt(e),
      o = Pt(r, i);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Xt(e, o, i)),
      t !== null && (it(t, e, i, r), wo(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ke(),
      i = Jt(e),
      o = Pt(r, i);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Xt(e, o, i)),
      t !== null && (it(t, e, i, r), wo(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ke(),
      r = Jt(e),
      i = Pt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = Xt(e, i, r)),
      t !== null && (it(t, e, r, n), wo(t, e, r));
  },
};
function Ef(e, t, n, r, i, o, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !si(n, r) || !si(i, o)
      : !0
  );
}
function Qh(e, t, n) {
  var r = !1,
    i = rn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = qe(o))
      : ((i = Ae(t) ? Nn : Ee.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? cr(e, i) : rn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ss),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Pf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ss.enqueueReplaceState(t, t.state, null);
}
function _l(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = Kh), Ru(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (i.context = qe(o))
    : ((o = Ae(t) ? Nn : Ee.current), (i.context = cr(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (xl(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ss.enqueueReplaceState(i, i.state, null),
      Go(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Nr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(C(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(C(147, e));
      var i = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (s) {
            var a = i.refs;
            a === Kh && (a = i.refs = {}),
              s === null ? delete a[o] : (a[o] = s);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(C(284));
    if (!n._owner) throw Error(C(290, e));
  }
  return e;
}
function Zi(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      C(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Tf(e) {
  var t = e._init;
  return t(e._payload);
}
function Gh(e) {
  function t(m, p) {
    if (e) {
      var h = m.deletions;
      h === null ? ((m.deletions = [p]), (m.flags |= 16)) : h.push(p);
    }
  }
  function n(m, p) {
    if (!e) return null;
    for (; p !== null; ) t(m, p), (p = p.sibling);
    return null;
  }
  function r(m, p) {
    for (m = new Map(); p !== null; )
      p.key !== null ? m.set(p.key, p) : m.set(p.index, p), (p = p.sibling);
    return m;
  }
  function i(m, p) {
    return (m = Zt(m, p)), (m.index = 0), (m.sibling = null), m;
  }
  function o(m, p, h) {
    return (
      (m.index = h),
      e
        ? ((h = m.alternate),
          h !== null
            ? ((h = h.index), h < p ? ((m.flags |= 2), p) : h)
            : ((m.flags |= 2), p))
        : ((m.flags |= 1048576), p)
    );
  }
  function s(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function a(m, p, h, S) {
    return p === null || p.tag !== 6
      ? ((p = Sa(h, m.mode, S)), (p.return = m), p)
      : ((p = i(p, h)), (p.return = m), p);
  }
  function l(m, p, h, S) {
    var E = h.type;
    return E === Un
      ? f(m, p, h.props.children, S, h.key)
      : p !== null &&
        (p.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === zt &&
            Tf(E) === p.type))
      ? ((S = i(p, h.props)), (S.ref = Nr(m, p, h)), (S.return = m), S)
      : ((S = To(h.type, h.key, h.props, null, m.mode, S)),
        (S.ref = Nr(m, p, h)),
        (S.return = m),
        S);
  }
  function u(m, p, h, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== h.containerInfo ||
      p.stateNode.implementation !== h.implementation
      ? ((p = xa(h, m.mode, S)), (p.return = m), p)
      : ((p = i(p, h.children || [])), (p.return = m), p);
  }
  function f(m, p, h, S, E) {
    return p === null || p.tag !== 7
      ? ((p = Cn(h, m.mode, S, E)), (p.return = m), p)
      : ((p = i(p, h)), (p.return = m), p);
  }
  function c(m, p, h) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Sa("" + p, m.mode, h)), (p.return = m), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case Ui:
          return (
            (h = To(p.type, p.key, p.props, null, m.mode, h)),
            (h.ref = Nr(m, null, p)),
            (h.return = m),
            h
          );
        case bn:
          return (p = xa(p, m.mode, h)), (p.return = m), p;
        case zt:
          var S = p._init;
          return c(m, S(p._payload), h);
      }
      if (Vr(p) || Pr(p))
        return (p = Cn(p, m.mode, h, null)), (p.return = m), p;
      Zi(m, p);
    }
    return null;
  }
  function d(m, p, h, S) {
    var E = p !== null ? p.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return E !== null ? null : a(m, p, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ui:
          return h.key === E ? l(m, p, h, S) : null;
        case bn:
          return h.key === E ? u(m, p, h, S) : null;
        case zt:
          return (E = h._init), d(m, p, E(h._payload), S);
      }
      if (Vr(h) || Pr(h)) return E !== null ? null : f(m, p, h, S, null);
      Zi(m, h);
    }
    return null;
  }
  function g(m, p, h, S, E) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (m = m.get(h) || null), a(p, m, "" + S, E);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case Ui:
          return (m = m.get(S.key === null ? h : S.key) || null), l(p, m, S, E);
        case bn:
          return (m = m.get(S.key === null ? h : S.key) || null), u(p, m, S, E);
        case zt:
          var P = S._init;
          return g(m, p, h, P(S._payload), E);
      }
      if (Vr(S) || Pr(S)) return (m = m.get(h) || null), f(p, m, S, E, null);
      Zi(p, S);
    }
    return null;
  }
  function y(m, p, h, S) {
    for (
      var E = null, P = null, k = p, T = (p = 0), R = null;
      k !== null && T < h.length;
      T++
    ) {
      k.index > T ? ((R = k), (k = null)) : (R = k.sibling);
      var A = d(m, k, h[T], S);
      if (A === null) {
        k === null && (k = R);
        break;
      }
      e && k && A.alternate === null && t(m, k),
        (p = o(A, p, T)),
        P === null ? (E = A) : (P.sibling = A),
        (P = A),
        (k = R);
    }
    if (T === h.length) return n(m, k), Q && yn(m, T), E;
    if (k === null) {
      for (; T < h.length; T++)
        (k = c(m, h[T], S)),
          k !== null &&
            ((p = o(k, p, T)), P === null ? (E = k) : (P.sibling = k), (P = k));
      return Q && yn(m, T), E;
    }
    for (k = r(m, k); T < h.length; T++)
      (R = g(k, m, T, h[T], S)),
        R !== null &&
          (e && R.alternate !== null && k.delete(R.key === null ? T : R.key),
          (p = o(R, p, T)),
          P === null ? (E = R) : (P.sibling = R),
          (P = R));
    return (
      e &&
        k.forEach(function (ne) {
          return t(m, ne);
        }),
      Q && yn(m, T),
      E
    );
  }
  function v(m, p, h, S) {
    var E = Pr(h);
    if (typeof E != "function") throw Error(C(150));
    if (((h = E.call(h)), h == null)) throw Error(C(151));
    for (
      var P = (E = null), k = p, T = (p = 0), R = null, A = h.next();
      k !== null && !A.done;
      T++, A = h.next()
    ) {
      k.index > T ? ((R = k), (k = null)) : (R = k.sibling);
      var ne = d(m, k, A.value, S);
      if (ne === null) {
        k === null && (k = R);
        break;
      }
      e && k && ne.alternate === null && t(m, k),
        (p = o(ne, p, T)),
        P === null ? (E = ne) : (P.sibling = ne),
        (P = ne),
        (k = R);
    }
    if (A.done) return n(m, k), Q && yn(m, T), E;
    if (k === null) {
      for (; !A.done; T++, A = h.next())
        (A = c(m, A.value, S)),
          A !== null &&
            ((p = o(A, p, T)), P === null ? (E = A) : (P.sibling = A), (P = A));
      return Q && yn(m, T), E;
    }
    for (k = r(m, k); !A.done; T++, A = h.next())
      (A = g(k, m, T, A.value, S)),
        A !== null &&
          (e && A.alternate !== null && k.delete(A.key === null ? T : A.key),
          (p = o(A, p, T)),
          P === null ? (E = A) : (P.sibling = A),
          (P = A));
    return (
      e &&
        k.forEach(function (ae) {
          return t(m, ae);
        }),
      Q && yn(m, T),
      E
    );
  }
  function _(m, p, h, S) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Un &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Ui:
          e: {
            for (var E = h.key, P = p; P !== null; ) {
              if (P.key === E) {
                if (((E = h.type), E === Un)) {
                  if (P.tag === 7) {
                    n(m, P.sibling),
                      (p = i(P, h.props.children)),
                      (p.return = m),
                      (m = p);
                    break e;
                  }
                } else if (
                  P.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === zt &&
                    Tf(E) === P.type)
                ) {
                  n(m, P.sibling),
                    (p = i(P, h.props)),
                    (p.ref = Nr(m, P, h)),
                    (p.return = m),
                    (m = p);
                  break e;
                }
                n(m, P);
                break;
              } else t(m, P);
              P = P.sibling;
            }
            h.type === Un
              ? ((p = Cn(h.props.children, m.mode, S, h.key)),
                (p.return = m),
                (m = p))
              : ((S = To(h.type, h.key, h.props, null, m.mode, S)),
                (S.ref = Nr(m, p, h)),
                (S.return = m),
                (m = S));
          }
          return s(m);
        case bn:
          e: {
            for (P = h.key; p !== null; ) {
              if (p.key === P)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === h.containerInfo &&
                  p.stateNode.implementation === h.implementation
                ) {
                  n(m, p.sibling),
                    (p = i(p, h.children || [])),
                    (p.return = m),
                    (m = p);
                  break e;
                } else {
                  n(m, p);
                  break;
                }
              else t(m, p);
              p = p.sibling;
            }
            (p = xa(h, m.mode, S)), (p.return = m), (m = p);
          }
          return s(m);
        case zt:
          return (P = h._init), _(m, p, P(h._payload), S);
      }
      if (Vr(h)) return y(m, p, h, S);
      if (Pr(h)) return v(m, p, h, S);
      Zi(m, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        p !== null && p.tag === 6
          ? (n(m, p.sibling), (p = i(p, h)), (p.return = m), (m = p))
          : (n(m, p), (p = Sa(h, m.mode, S)), (p.return = m), (m = p)),
        s(m))
      : n(m, p);
  }
  return _;
}
var dr = Gh(!0),
  Yh = Gh(!1),
  Ti = {},
  mt = ln(Ti),
  ci = ln(Ti),
  fi = ln(Ti);
function Pn(e) {
  if (e === Ti) throw Error(C(174));
  return e;
}
function Au(e, t) {
  switch ((b(fi, t), b(ci, e), b(mt, Ti), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : el(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = el(t, e));
  }
  $(mt), b(mt, t);
}
function pr() {
  $(mt), $(ci), $(fi);
}
function Xh(e) {
  Pn(fi.current);
  var t = Pn(mt.current),
    n = el(t, e.type);
  t !== n && (b(ci, e), b(mt, n));
}
function Lu(e) {
  ci.current === e && ($(mt), $(ci));
}
var X = ln(0);
function Yo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ha = [];
function Mu() {
  for (var e = 0; e < ha.length; e++)
    ha[e]._workInProgressVersionPrimary = null;
  ha.length = 0;
}
var So = Lt.ReactCurrentDispatcher,
  ma = Lt.ReactCurrentBatchConfig,
  Rn = 0,
  J = null,
  fe = null,
  pe = null,
  Xo = !1,
  Wr = !1,
  di = 0,
  Z0 = 0;
function we() {
  throw Error(C(321));
}
function Du(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!ot(e[n], t[n])) return !1;
  return !0;
}
function Vu(e, t, n, r, i, o) {
  if (
    ((Rn = o),
    (J = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (So.current = e === null || e.memoizedState === null ? r1 : i1),
    (e = n(r, i)),
    Wr)
  ) {
    o = 0;
    do {
      if (((Wr = !1), (di = 0), 25 <= o)) throw Error(C(301));
      (o += 1),
        (pe = fe = null),
        (t.updateQueue = null),
        (So.current = o1),
        (e = n(r, i));
    } while (Wr);
  }
  if (
    ((So.current = qo),
    (t = fe !== null && fe.next !== null),
    (Rn = 0),
    (pe = fe = J = null),
    (Xo = !1),
    t)
  )
    throw Error(C(300));
  return e;
}
function Fu() {
  var e = di !== 0;
  return (di = 0), e;
}
function ut() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pe === null ? (J.memoizedState = pe = e) : (pe = pe.next = e), pe;
}
function Je() {
  if (fe === null) {
    var e = J.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = fe.next;
  var t = pe === null ? J.memoizedState : pe.next;
  if (t !== null) (pe = t), (fe = e);
  else {
    if (e === null) throw Error(C(310));
    (fe = e),
      (e = {
        memoizedState: fe.memoizedState,
        baseState: fe.baseState,
        baseQueue: fe.baseQueue,
        queue: fe.queue,
        next: null,
      }),
      pe === null ? (J.memoizedState = pe = e) : (pe = pe.next = e);
  }
  return pe;
}
function pi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ga(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = fe,
    i = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (r.baseQueue = i = o), (n.pending = null);
  }
  if (i !== null) {
    (o = i.next), (r = r.baseState);
    var a = (s = null),
      l = null,
      u = o;
    do {
      var f = u.lane;
      if ((Rn & f) === f)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var c = {
          lane: f,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        l === null ? ((a = l = c), (s = r)) : (l = l.next = c),
          (J.lanes |= f),
          (An |= f);
      }
      u = u.next;
    } while (u !== null && u !== o);
    l === null ? (s = r) : (l.next = a),
      ot(r, t.memoizedState) || (Oe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (o = i.lane), (J.lanes |= o), (An |= o), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ya(e) {
  var t = Je(),
    n = t.queue;
  if (n === null) throw Error(C(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var s = (i = i.next);
    do (o = e(o, s.action)), (s = s.next);
    while (s !== i);
    ot(o, t.memoizedState) || (Oe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function qh() {}
function Jh(e, t) {
  var n = J,
    r = Je(),
    i = t(),
    o = !ot(r.memoizedState, i);
  if (
    (o && ((r.memoizedState = i), (Oe = !0)),
    (r = r.queue),
    Iu(tm.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (pe !== null && pe.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      hi(9, em.bind(null, n, r, i, t), void 0, null),
      he === null)
    )
      throw Error(C(349));
    Rn & 30 || Zh(n, t, i);
  }
  return i;
}
function Zh(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function em(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), nm(t) && rm(e);
}
function tm(e, t, n) {
  return n(function () {
    nm(t) && rm(e);
  });
}
function nm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !ot(e, n);
  } catch {
    return !0;
  }
}
function rm(e) {
  var t = Ot(e, 1);
  t !== null && it(t, e, 1, -1);
}
function kf(e) {
  var t = ut();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = n1.bind(null, J, e)),
    [t.memoizedState, e]
  );
}
function hi(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = J.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (J.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function im() {
  return Je().memoizedState;
}
function xo(e, t, n, r) {
  var i = ut();
  (J.flags |= e),
    (i.memoizedState = hi(1 | t, n, void 0, r === void 0 ? null : r));
}
function xs(e, t, n, r) {
  var i = Je();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (fe !== null) {
    var s = fe.memoizedState;
    if (((o = s.destroy), r !== null && Du(r, s.deps))) {
      i.memoizedState = hi(t, n, o, r);
      return;
    }
  }
  (J.flags |= e), (i.memoizedState = hi(1 | t, n, o, r));
}
function Cf(e, t) {
  return xo(8390656, 8, e, t);
}
function Iu(e, t) {
  return xs(2048, 8, e, t);
}
function om(e, t) {
  return xs(4, 2, e, t);
}
function sm(e, t) {
  return xs(4, 4, e, t);
}
function am(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function lm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), xs(4, 4, am.bind(null, t, e), n)
  );
}
function zu() {}
function um(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function cm(e, t) {
  var n = Je();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Du(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function fm(e, t, n) {
  return Rn & 21
    ? (ot(n, t) || ((n = hh()), (J.lanes |= n), (An |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Oe = !0)), (e.memoizedState = n));
}
function e1(e, t) {
  var n = B;
  (B = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ma.transition;
  ma.transition = {};
  try {
    e(!1), t();
  } finally {
    (B = n), (ma.transition = r);
  }
}
function dm() {
  return Je().memoizedState;
}
function t1(e, t, n) {
  var r = Jt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    pm(e))
  )
    hm(t, n);
  else if (((n = $h(e, t, n, r)), n !== null)) {
    var i = ke();
    it(n, e, r, i), mm(n, t, r);
  }
}
function n1(e, t, n) {
  var r = Jt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (pm(e)) hm(t, i);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var s = t.lastRenderedState,
          a = o(s, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), ot(a, s))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Ou(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = $h(e, t, i, r)),
      n !== null && ((i = ke()), it(n, e, r, i), mm(n, t, r));
  }
}
function pm(e) {
  var t = e.alternate;
  return e === J || (t !== null && t === J);
}
function hm(e, t) {
  Wr = Xo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function mm(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), gu(e, n);
  }
}
var qo = {
    readContext: qe,
    useCallback: we,
    useContext: we,
    useEffect: we,
    useImperativeHandle: we,
    useInsertionEffect: we,
    useLayoutEffect: we,
    useMemo: we,
    useReducer: we,
    useRef: we,
    useState: we,
    useDebugValue: we,
    useDeferredValue: we,
    useTransition: we,
    useMutableSource: we,
    useSyncExternalStore: we,
    useId: we,
    unstable_isNewReconciler: !1,
  },
  r1 = {
    readContext: qe,
    useCallback: function (e, t) {
      return (ut().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: qe,
    useEffect: Cf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        xo(4194308, 4, am.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return xo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return xo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ut();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = ut();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = t1.bind(null, J, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = ut();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: kf,
    useDebugValue: zu,
    useDeferredValue: function (e) {
      return (ut().memoizedState = e);
    },
    useTransition: function () {
      var e = kf(!1),
        t = e[0];
      return (e = e1.bind(null, e[1])), (ut().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = J,
        i = ut();
      if (Q) {
        if (n === void 0) throw Error(C(407));
        n = n();
      } else {
        if (((n = t()), he === null)) throw Error(C(349));
        Rn & 30 || Zh(r, t, n);
      }
      i.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (i.queue = o),
        Cf(tm.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        hi(9, em.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = ut(),
        t = he.identifierPrefix;
      if (Q) {
        var n = _t,
          r = xt;
        (n = (r & ~(1 << (32 - rt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = di++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Z0++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  i1 = {
    readContext: qe,
    useCallback: um,
    useContext: qe,
    useEffect: Iu,
    useImperativeHandle: lm,
    useInsertionEffect: om,
    useLayoutEffect: sm,
    useMemo: cm,
    useReducer: ga,
    useRef: im,
    useState: function () {
      return ga(pi);
    },
    useDebugValue: zu,
    useDeferredValue: function (e) {
      var t = Je();
      return fm(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ga(pi)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: qh,
    useSyncExternalStore: Jh,
    useId: dm,
    unstable_isNewReconciler: !1,
  },
  o1 = {
    readContext: qe,
    useCallback: um,
    useContext: qe,
    useEffect: Iu,
    useImperativeHandle: lm,
    useInsertionEffect: om,
    useLayoutEffect: sm,
    useMemo: cm,
    useReducer: ya,
    useRef: im,
    useState: function () {
      return ya(pi);
    },
    useDebugValue: zu,
    useDeferredValue: function (e) {
      var t = Je();
      return fe === null ? (t.memoizedState = e) : fm(t, fe.memoizedState, e);
    },
    useTransition: function () {
      var e = ya(pi)[0],
        t = Je().memoizedState;
      return [e, t];
    },
    useMutableSource: qh,
    useSyncExternalStore: Jh,
    useId: dm,
    unstable_isNewReconciler: !1,
  };
function hr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Lv(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function va(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function El(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var s1 = typeof WeakMap == "function" ? WeakMap : Map;
function gm(e, t, n) {
  (n = Pt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      Zo || ((Zo = !0), (Ll = r)), El(e, t);
    }),
    n
  );
}
function ym(e, t, n) {
  (n = Pt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        El(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        El(e, t),
          typeof r != "function" &&
            (qt === null ? (qt = new Set([this])) : qt.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function jf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new s1();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = S1.bind(null, e, t, n)), t.then(e, e));
}
function Nf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Of(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Pt(-1, 1)), (t.tag = 2), Xt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var a1 = Lt.ReactCurrentOwner,
  Oe = !1;
function Te(e, t, n, r) {
  t.child = e === null ? Yh(t, null, n, r) : dr(t, e.child, n, r);
}
function Rf(e, t, n, r, i) {
  n = n.render;
  var o = t.ref;
  return (
    ar(t, i),
    (r = Vu(e, t, n, r, o, i)),
    (n = Fu()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Rt(e, t, i))
      : (Q && n && Pu(t), (t.flags |= 1), Te(e, t, r, i), t.child)
  );
}
function Af(e, t, n, r, i) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Qu(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), vm(e, t, o, r, i))
      : ((e = To(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : si), n(s, r) && e.ref === t.ref)
    )
      return Rt(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Zt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function vm(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (si(o, r) && e.ref === t.ref)
      if (((Oe = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (Oe = !0);
      else return (t.lanes = e.lanes), Rt(e, t, i);
  }
  return Pl(e, t, n, r, i);
}
function wm(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        b(Jn, Ve),
        (Ve |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          b(Jn, Ve),
          (Ve |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        b(Jn, Ve),
        (Ve |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      b(Jn, Ve),
      (Ve |= r);
  return Te(e, t, i, n), t.child;
}
function Sm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Pl(e, t, n, r, i) {
  var o = Ae(n) ? Nn : Ee.current;
  return (
    (o = cr(t, o)),
    ar(t, i),
    (n = Vu(e, t, n, r, o, i)),
    (r = Fu()),
    e !== null && !Oe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        Rt(e, t, i))
      : (Q && r && Pu(t), (t.flags |= 1), Te(e, t, n, i), t.child)
  );
}
function Lf(e, t, n, r, i) {
  if (Ae(n)) {
    var o = !0;
    Ho(t);
  } else o = !1;
  if ((ar(t, i), t.stateNode === null))
    _o(e, t), Qh(t, n, r), _l(t, n, r, i), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      a = t.memoizedProps;
    s.props = a;
    var l = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = qe(u))
      : ((u = Ae(n) ? Nn : Ee.current), (u = cr(t, u)));
    var f = n.getDerivedStateFromProps,
      c =
        typeof f == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    c ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== r || l !== u) && Pf(t, s, r, u)),
      (Bt = !1);
    var d = t.memoizedState;
    (s.state = d),
      Go(t, r, s, i),
      (l = t.memoizedState),
      a !== r || d !== l || Re.current || Bt
        ? (typeof f == "function" && (xl(t, n, f, r), (l = t.memoizedState)),
          (a = Bt || Ef(t, n, a, r, d, l, u))
            ? (c ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (s.props = r),
          (s.state = l),
          (s.context = u),
          (r = a))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      Wh(e, t),
      (a = t.memoizedProps),
      (u = t.type === t.elementType ? a : et(t.type, a)),
      (s.props = u),
      (c = t.pendingProps),
      (d = s.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = qe(l))
        : ((l = Ae(n) ? Nn : Ee.current), (l = cr(t, l)));
    var g = n.getDerivedStateFromProps;
    (f =
      typeof g == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((a !== c || d !== l) && Pf(t, s, r, l)),
      (Bt = !1),
      (d = t.memoizedState),
      (s.state = d),
      Go(t, r, s, i);
    var y = t.memoizedState;
    a !== c || d !== y || Re.current || Bt
      ? (typeof g == "function" && (xl(t, n, g, r), (y = t.memoizedState)),
        (u = Bt || Ef(t, n, u, r, d, y, l) || !1)
          ? (f ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, y, l),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, y, l)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (s.props = r),
        (s.state = y),
        (s.context = l),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Tl(e, t, n, r, o, i);
}
function Tl(e, t, n, r, i, o) {
  Sm(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return i && vf(t, n, !1), Rt(e, t, o);
  (r = t.stateNode), (a1.current = t);
  var a =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = dr(t, e.child, null, o)), (t.child = dr(t, null, a, o)))
      : Te(e, t, a, o),
    (t.memoizedState = r.state),
    i && vf(t, n, !0),
    t.child
  );
}
function xm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? yf(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && yf(e, t.context, !1),
    Au(e, t.containerInfo);
}
function Mf(e, t, n, r, i) {
  return fr(), ku(i), (t.flags |= 256), Te(e, t, n, r), t.child;
}
var kl = { dehydrated: null, treeContext: null, retryLane: 0 };
function Cl(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function _m(e, t, n) {
  var r = t.pendingProps,
    i = X.current,
    o = !1,
    s = (t.flags & 128) !== 0,
    a;
  if (
    ((a = s) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    b(X, i & 1),
    e === null)
  )
    return (
      wl(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = Ps(s, r, 0, null)),
              (e = Cn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Cl(n)),
              (t.memoizedState = kl),
              e)
            : Bu(t, s))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return l1(e, t, s, r, a, i, n);
  if (o) {
    (o = r.fallback), (s = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Zt(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (o = Zt(a, o)) : ((o = Cn(o, s, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Cl(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = kl),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = Zt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Bu(e, t) {
  return (
    (t = Ps({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function eo(e, t, n, r) {
  return (
    r !== null && ku(r),
    dr(t, e.child, null, n),
    (e = Bu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function l1(e, t, n, r, i, o, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = va(Error(C(422)))), eo(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (i = t.mode),
        (r = Ps({ mode: "visible", children: r.children }, i, 0, null)),
        (o = Cn(o, i, s, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && dr(t, e.child, null, s),
        (t.child.memoizedState = Cl(s)),
        (t.memoizedState = kl),
        o);
  if (!(t.mode & 1)) return eo(e, t, s, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(C(419))), (r = va(o, r, void 0)), eo(e, t, s, r);
  }
  if (((a = (s & e.childLanes) !== 0), Oe || a)) {
    if (((r = he), r !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Ot(e, i), it(r, e, i, -1));
    }
    return Ku(), (r = va(Error(C(421)))), eo(e, t, s, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = x1.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Fe = Yt(i.nextSibling)),
      (Ie = t),
      (Q = !0),
      (nt = null),
      e !== null &&
        ((Ke[Qe++] = xt),
        (Ke[Qe++] = _t),
        (Ke[Qe++] = On),
        (xt = e.id),
        (_t = e.overflow),
        (On = t)),
      (t = Bu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Df(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Sl(e.return, t, n);
}
function wa(e, t, n, r, i) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i));
}
function Em(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail;
  if ((Te(e, t, r.children, n), (r = X.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Df(e, n, t);
        else if (e.tag === 19) Df(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((b(X, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Yo(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          wa(t, !1, i, n, o);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Yo(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        wa(t, !0, n, null, o);
        break;
      case "together":
        wa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function _o(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Rt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (An |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(C(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Zt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Zt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function u1(e, t, n) {
  switch (t.tag) {
    case 3:
      xm(t), fr();
      break;
    case 5:
      Xh(t);
      break;
    case 1:
      Ae(t.type) && Ho(t);
      break;
    case 4:
      Au(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      b(Ko, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (b(X, X.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? _m(e, t, n)
          : (b(X, X.current & 1),
            (e = Rt(e, t, n)),
            e !== null ? e.sibling : null);
      b(X, X.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Em(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        b(X, X.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), wm(e, t, n);
  }
  return Rt(e, t, n);
}
var Pm, jl, Tm, km;
Pm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
jl = function () {};
Tm = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Pn(mt.current);
    var o = null;
    switch (n) {
      case "input":
        (i = Xa(e, i)), (r = Xa(e, r)), (o = []);
        break;
      case "select":
        (i = Z({}, i, { value: void 0 })),
          (r = Z({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Za(e, i)), (r = Za(e, r)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = bo);
    }
    tl(n, r);
    var s;
    n = null;
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === "style") {
          var a = i[u];
          for (s in a) a.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (Zr.hasOwnProperty(u)
              ? o || (o = [])
              : (o = o || []).push(u, null));
    for (u in r) {
      var l = r[u];
      if (
        ((a = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== a && (l != null || a != null))
      )
        if (u === "style")
          if (a) {
            for (s in a)
              !a.hasOwnProperty(s) ||
                (l && l.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in l)
              l.hasOwnProperty(s) &&
                a[s] !== l[s] &&
                (n || (n = {}), (n[s] = l[s]));
          } else n || (o || (o = []), o.push(u, n)), (n = l);
        else
          u === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (o = o || []).push(u, l))
            : u === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (o = o || []).push(u, "" + l)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (Zr.hasOwnProperty(u)
                ? (l != null && u === "onScroll" && H("scroll", e),
                  o || a === l || (o = []))
                : (o = o || []).push(u, l));
    }
    n && (o = o || []).push("style", n);
    var u = o;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
km = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Or(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Se(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function c1(e, t, n) {
  var r = t.pendingProps;
  switch ((Tu(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Se(t), null;
    case 1:
      return Ae(t.type) && Uo(), Se(t), null;
    case 3:
      return (
        (r = t.stateNode),
        pr(),
        $(Re),
        $(Ee),
        Mu(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ji(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), nt !== null && (Vl(nt), (nt = null)))),
        jl(e, t),
        Se(t),
        null
      );
    case 5:
      Lu(t);
      var i = Pn(fi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Tm(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(C(166));
          return Se(t), null;
        }
        if (((e = Pn(mt.current)), Ji(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[ft] = t), (r[ui] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              H("cancel", r), H("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              H("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Ir.length; i++) H(Ir[i], r);
              break;
            case "source":
              H("error", r);
              break;
            case "img":
            case "image":
            case "link":
              H("error", r), H("load", r);
              break;
            case "details":
              H("toggle", r);
              break;
            case "input":
              Hc(r, o), H("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                H("invalid", r);
              break;
            case "textarea":
              Wc(r, o), H("invalid", r);
          }
          tl(n, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var a = o[s];
              s === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      qi(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      qi(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : Zr.hasOwnProperty(s) &&
                  a != null &&
                  s === "onScroll" &&
                  H("scroll", r);
            }
          switch (n) {
            case "input":
              Hi(r), $c(r, o, !0);
              break;
            case "textarea":
              Hi(r), Kc(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = bo);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Zp(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[ft] = t),
            (e[ui] = r),
            Pm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = nl(n, r)), n)) {
              case "dialog":
                H("cancel", e), H("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                H("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Ir.length; i++) H(Ir[i], e);
                i = r;
                break;
              case "source":
                H("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                H("error", e), H("load", e), (i = r);
                break;
              case "details":
                H("toggle", e), (i = r);
                break;
              case "input":
                Hc(e, r), (i = Xa(e, r)), H("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Z({}, r, { value: void 0 })),
                  H("invalid", e);
                break;
              case "textarea":
                Wc(e, r), (i = Za(e, r)), H("invalid", e);
                break;
              default:
                i = r;
            }
            tl(n, i), (a = i);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var l = a[o];
                o === "style"
                  ? nh(e, l)
                  : o === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && eh(e, l))
                  : o === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && ei(e, l)
                    : typeof l == "number" && ei(e, "" + l)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Zr.hasOwnProperty(o)
                      ? l != null && o === "onScroll" && H("scroll", e)
                      : l != null && cu(e, o, l, s));
              }
            switch (n) {
              case "input":
                Hi(e), $c(e, r, !1);
                break;
              case "textarea":
                Hi(e), Kc(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + nn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? rr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      rr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = bo);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Se(t), null;
    case 6:
      if (e && t.stateNode != null) km(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(C(166));
        if (((n = Pn(fi.current)), Pn(mt.current), Ji(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ft] = t),
            (o = r.nodeValue !== n) && ((e = Ie), e !== null))
          )
            switch (e.tag) {
              case 3:
                qi(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  qi(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ft] = t),
            (t.stateNode = r);
      }
      return Se(t), null;
    case 13:
      if (
        ($(X),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Fe !== null && t.mode & 1 && !(t.flags & 128))
          Hh(), fr(), (t.flags |= 98560), (o = !1);
        else if (((o = Ji(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(C(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(C(317));
            o[ft] = t;
          } else
            fr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Se(t), (o = !1);
        } else nt !== null && (Vl(nt), (nt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || X.current & 1 ? de === 0 && (de = 3) : Ku())),
          t.updateQueue !== null && (t.flags |= 4),
          Se(t),
          null);
    case 4:
      return (
        pr(), jl(e, t), e === null && ai(t.stateNode.containerInfo), Se(t), null
      );
    case 10:
      return Nu(t.type._context), Se(t), null;
    case 17:
      return Ae(t.type) && Uo(), Se(t), null;
    case 19:
      if (($(X), (o = t.memoizedState), o === null)) return Se(t), null;
      if (((r = (t.flags & 128) !== 0), (s = o.rendering), s === null))
        if (r) Or(o, !1);
        else {
          if (de !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Yo(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Or(o, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (e = s.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return b(X, (X.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            oe() > mr &&
            ((t.flags |= 128), (r = !0), Or(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yo(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Or(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Q)
            )
              return Se(t), null;
          } else
            2 * oe() - o.renderingStartTime > mr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Or(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = o.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = oe()),
          (t.sibling = null),
          (n = X.current),
          b(X, r ? (n & 1) | 2 : n & 1),
          t)
        : (Se(t), null);
    case 22:
    case 23:
      return (
        Wu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ve & 1073741824 && (Se(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Se(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(C(156, t.tag));
}
function f1(e, t) {
  switch ((Tu(t), t.tag)) {
    case 1:
      return (
        Ae(t.type) && Uo(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        pr(),
        $(Re),
        $(Ee),
        Mu(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Lu(t), null;
    case 13:
      if (($(X), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(C(340));
        fr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return $(X), null;
    case 4:
      return pr(), null;
    case 10:
      return Nu(t.type._context), null;
    case 22:
    case 23:
      return Wu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var to = !1,
  _e = !1,
  d1 = typeof WeakSet == "function" ? WeakSet : Set,
  O = null;
function qn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        te(e, t, r);
      }
    else n.current = null;
}
function Nl(e, t, n) {
  try {
    n();
  } catch (r) {
    te(e, t, r);
  }
}
var Vf = !1;
function p1(e, t) {
  if (((dl = Io), (e = Oh()), Eu(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            a = -1,
            l = -1,
            u = 0,
            f = 0,
            c = e,
            d = null;
          t: for (;;) {
            for (
              var g;
              c !== n || (i !== 0 && c.nodeType !== 3) || (a = s + i),
                c !== o || (r !== 0 && c.nodeType !== 3) || (l = s + r),
                c.nodeType === 3 && (s += c.nodeValue.length),
                (g = c.firstChild) !== null;

            )
              (d = c), (c = g);
            for (;;) {
              if (c === e) break t;
              if (
                (d === n && ++u === i && (a = s),
                d === o && ++f === r && (l = s),
                (g = c.nextSibling) !== null)
              )
                break;
              (c = d), (d = c.parentNode);
            }
            c = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (pl = { focusedElem: e, selectionRange: n }, Io = !1, O = t; O !== null; )
    if (((t = O), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (O = e);
    else
      for (; O !== null; ) {
        t = O;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var v = y.memoizedProps,
                    _ = y.memoizedState,
                    m = t.stateNode,
                    p = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : et(t.type, v),
                      _
                    );
                  m.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(C(163));
            }
        } catch (S) {
          te(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (O = e);
          break;
        }
        O = t.return;
      }
  return (y = Vf), (Vf = !1), y;
}
function Kr(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && Nl(t, n, o);
      }
      i = i.next;
    } while (i !== r);
  }
}
function _s(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ol(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Cm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Cm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ft], delete t[ui], delete t[gl], delete t[Y0], delete t[X0])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function jm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ff(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Rl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = bo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Rl(e, t, n), e = e.sibling; e !== null; ) Rl(e, t, n), (e = e.sibling);
}
function Al(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Al(e, t, n), e = e.sibling; e !== null; ) Al(e, t, n), (e = e.sibling);
}
var ge = null,
  tt = !1;
function Mt(e, t, n) {
  for (n = n.child; n !== null; ) Nm(e, t, n), (n = n.sibling);
}
function Nm(e, t, n) {
  if (ht && typeof ht.onCommitFiberUnmount == "function")
    try {
      ht.onCommitFiberUnmount(hs, n);
    } catch {}
  switch (n.tag) {
    case 5:
      _e || qn(n, t);
    case 6:
      var r = ge,
        i = tt;
      (ge = null),
        Mt(e, t, n),
        (ge = r),
        (tt = i),
        ge !== null &&
          (tt
            ? ((e = ge),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ge.removeChild(n.stateNode));
      break;
    case 18:
      ge !== null &&
        (tt
          ? ((e = ge),
            (n = n.stateNode),
            e.nodeType === 8
              ? da(e.parentNode, n)
              : e.nodeType === 1 && da(e, n),
            ii(e))
          : da(ge, n.stateNode));
      break;
    case 4:
      (r = ge),
        (i = tt),
        (ge = n.stateNode.containerInfo),
        (tt = !0),
        Mt(e, t, n),
        (ge = r),
        (tt = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !_e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && Nl(n, t, s),
            (i = i.next);
        } while (i !== r);
      }
      Mt(e, t, n);
      break;
    case 1:
      if (
        !_e &&
        (qn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          te(n, t, a);
        }
      Mt(e, t, n);
      break;
    case 21:
      Mt(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((_e = (r = _e) || n.memoizedState !== null), Mt(e, t, n), (_e = r))
        : Mt(e, t, n);
      break;
    default:
      Mt(e, t, n);
  }
}
function If(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new d1()),
      t.forEach(function (r) {
        var i = _1.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function Ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var o = e,
          s = t,
          a = s;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (ge = a.stateNode), (tt = !1);
              break e;
            case 3:
              (ge = a.stateNode.containerInfo), (tt = !0);
              break e;
            case 4:
              (ge = a.stateNode.containerInfo), (tt = !0);
              break e;
          }
          a = a.return;
        }
        if (ge === null) throw Error(C(160));
        Nm(o, s, i), (ge = null), (tt = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (u) {
        te(i, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Om(t, e), (t = t.sibling);
}
function Om(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Ze(t, e), lt(e), r & 4)) {
        try {
          Kr(3, e, e.return), _s(3, e);
        } catch (v) {
          te(e, e.return, v);
        }
        try {
          Kr(5, e, e.return);
        } catch (v) {
          te(e, e.return, v);
        }
      }
      break;
    case 1:
      Ze(t, e), lt(e), r & 512 && n !== null && qn(n, n.return);
      break;
    case 5:
      if (
        (Ze(t, e),
        lt(e),
        r & 512 && n !== null && qn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          ei(i, "");
        } catch (v) {
          te(e, e.return, v);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          s = n !== null ? n.memoizedProps : o,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && qp(i, o),
              nl(a, s);
            var u = nl(a, o);
            for (s = 0; s < l.length; s += 2) {
              var f = l[s],
                c = l[s + 1];
              f === "style"
                ? nh(i, c)
                : f === "dangerouslySetInnerHTML"
                ? eh(i, c)
                : f === "children"
                ? ei(i, c)
                : cu(i, f, c, u);
            }
            switch (a) {
              case "input":
                qa(i, o);
                break;
              case "textarea":
                Jp(i, o);
                break;
              case "select":
                var d = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? rr(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? rr(i, !!o.multiple, o.defaultValue, !0)
                      : rr(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[ui] = o;
          } catch (v) {
            te(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((Ze(t, e), lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(C(162));
        (i = e.stateNode), (o = e.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (v) {
          te(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (Ze(t, e), lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ii(t.containerInfo);
        } catch (v) {
          te(e, e.return, v);
        }
      break;
    case 4:
      Ze(t, e), lt(e);
      break;
    case 13:
      Ze(t, e),
        lt(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Hu = oe())),
        r & 4 && If(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((_e = (u = _e) || f), Ze(t, e), (_e = u)) : Ze(t, e),
        lt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !f && e.mode & 1)
        )
          for (O = e, f = e.child; f !== null; ) {
            for (c = O = f; O !== null; ) {
              switch (((d = O), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Kr(4, d, d.return);
                  break;
                case 1:
                  qn(d, d.return);
                  var y = d.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (v) {
                      te(r, n, v);
                    }
                  }
                  break;
                case 5:
                  qn(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Bf(c);
                    continue;
                  }
              }
              g !== null ? ((g.return = d), (O = g)) : Bf(c);
            }
            f = f.sibling;
          }
        e: for (f = null, c = e; ; ) {
          if (c.tag === 5) {
            if (f === null) {
              f = c;
              try {
                (i = c.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = c.stateNode),
                      (l = c.memoizedProps.style),
                      (s =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = th("display", s)));
              } catch (v) {
                te(e, e.return, v);
              }
            }
          } else if (c.tag === 6) {
            if (f === null)
              try {
                c.stateNode.nodeValue = u ? "" : c.memoizedProps;
              } catch (v) {
                te(e, e.return, v);
              }
          } else if (
            ((c.tag !== 22 && c.tag !== 23) ||
              c.memoizedState === null ||
              c === e) &&
            c.child !== null
          ) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            f === c && (f = null), (c = c.return);
          }
          f === c && (f = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      Ze(t, e), lt(e), r & 4 && If(e);
      break;
    case 21:
      break;
    default:
      Ze(t, e), lt(e);
  }
}
function lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(C(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (ei(i, ""), (r.flags &= -33));
          var o = Ff(e);
          Al(e, o, i);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            a = Ff(e);
          Rl(e, a, s);
          break;
        default:
          throw Error(C(161));
      }
    } catch (l) {
      te(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function h1(e, t, n) {
  (O = e), Rm(e);
}
function Rm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; O !== null; ) {
    var i = O,
      o = i.child;
    if (i.tag === 22 && r) {
      var s = i.memoizedState !== null || to;
      if (!s) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || _e;
        a = to;
        var u = _e;
        if (((to = s), (_e = l) && !u))
          for (O = i; O !== null; )
            (s = O),
              (l = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? bf(i)
                : l !== null
                ? ((l.return = s), (O = l))
                : bf(i);
        for (; o !== null; ) (O = o), Rm(o), (o = o.sibling);
        (O = i), (to = a), (_e = u);
      }
      zf(e);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (O = o)) : zf(e);
  }
}
function zf(e) {
  for (; O !== null; ) {
    var t = O;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              _e || _s(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !_e)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : et(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && _f(t, o, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                _f(t, s, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var f = u.memoizedState;
                  if (f !== null) {
                    var c = f.dehydrated;
                    c !== null && ii(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(C(163));
          }
        _e || (t.flags & 512 && Ol(t));
      } catch (d) {
        te(t, t.return, d);
      }
    }
    if (t === e) {
      O = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function Bf(e) {
  for (; O !== null; ) {
    var t = O;
    if (t === e) {
      O = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (O = n);
      break;
    }
    O = t.return;
  }
}
function bf(e) {
  for (; O !== null; ) {
    var t = O;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _s(4, t);
          } catch (l) {
            te(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              te(t, i, l);
            }
          }
          var o = t.return;
          try {
            Ol(t);
          } catch (l) {
            te(t, o, l);
          }
          break;
        case 5:
          var s = t.return;
          try {
            Ol(t);
          } catch (l) {
            te(t, s, l);
          }
      }
    } catch (l) {
      te(t, t.return, l);
    }
    if (t === e) {
      O = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (O = a);
      break;
    }
    O = t.return;
  }
}
var m1 = Math.ceil,
  Jo = Lt.ReactCurrentDispatcher,
  bu = Lt.ReactCurrentOwner,
  Ye = Lt.ReactCurrentBatchConfig,
  z = 0,
  he = null,
  ue = null,
  ye = 0,
  Ve = 0,
  Jn = ln(0),
  de = 0,
  mi = null,
  An = 0,
  Es = 0,
  Uu = 0,
  Qr = null,
  Ne = null,
  Hu = 0,
  mr = 1 / 0,
  wt = null,
  Zo = !1,
  Ll = null,
  qt = null,
  no = !1,
  Wt = null,
  es = 0,
  Gr = 0,
  Ml = null,
  Eo = -1,
  Po = 0;
function ke() {
  return z & 6 ? oe() : Eo !== -1 ? Eo : (Eo = oe());
}
function Jt(e) {
  return e.mode & 1
    ? z & 2 && ye !== 0
      ? ye & -ye
      : J0.transition !== null
      ? (Po === 0 && (Po = hh()), Po)
      : ((e = B),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : xh(e.type))),
        e)
    : 1;
}
function it(e, t, n, r) {
  if (50 < Gr) throw ((Gr = 0), (Ml = null), Error(C(185)));
  _i(e, n, r),
    (!(z & 2) || e !== he) &&
      (e === he && (!(z & 2) && (Es |= n), de === 4 && Ht(e, ye)),
      Le(e, r),
      n === 1 && z === 0 && !(t.mode & 1) && ((mr = oe() + 500), ws && un()));
}
function Le(e, t) {
  var n = e.callbackNode;
  Jv(e, t);
  var r = Fo(e, e === he ? ye : 0);
  if (r === 0)
    n !== null && Yc(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Yc(n), t === 1))
      e.tag === 0 ? q0(Uf.bind(null, e)) : Bh(Uf.bind(null, e)),
        Q0(function () {
          !(z & 6) && un();
        }),
        (n = null);
    else {
      switch (mh(r)) {
        case 1:
          n = mu;
          break;
        case 4:
          n = dh;
          break;
        case 16:
          n = Vo;
          break;
        case 536870912:
          n = ph;
          break;
        default:
          n = Vo;
      }
      n = zm(n, Am.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Am(e, t) {
  if (((Eo = -1), (Po = 0), z & 6)) throw Error(C(327));
  var n = e.callbackNode;
  if (lr() && e.callbackNode !== n) return null;
  var r = Fo(e, e === he ? ye : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ts(e, r);
  else {
    t = r;
    var i = z;
    z |= 2;
    var o = Mm();
    (he !== e || ye !== t) && ((wt = null), (mr = oe() + 500), kn(e, t));
    do
      try {
        v1();
        break;
      } catch (a) {
        Lm(e, a);
      }
    while (!0);
    ju(),
      (Jo.current = o),
      (z = i),
      ue !== null ? (t = 0) : ((he = null), (ye = 0), (t = de));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = al(e)), i !== 0 && ((r = i), (t = Dl(e, i)))), t === 1)
    )
      throw ((n = mi), kn(e, 0), Ht(e, r), Le(e, oe()), n);
    if (t === 6) Ht(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !g1(i) &&
          ((t = ts(e, r)),
          t === 2 && ((o = al(e)), o !== 0 && ((r = o), (t = Dl(e, o)))),
          t === 1))
      )
        throw ((n = mi), kn(e, 0), Ht(e, r), Le(e, oe()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(C(345));
        case 2:
          vn(e, Ne, wt);
          break;
        case 3:
          if (
            (Ht(e, r), (r & 130023424) === r && ((t = Hu + 500 - oe()), 10 < t))
          ) {
            if (Fo(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ke(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = ml(vn.bind(null, e, Ne, wt), t);
            break;
          }
          vn(e, Ne, wt);
          break;
        case 4:
          if ((Ht(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var s = 31 - rt(r);
            (o = 1 << s), (s = t[s]), s > i && (i = s), (r &= ~o);
          }
          if (
            ((r = i),
            (r = oe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * m1(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = ml(vn.bind(null, e, Ne, wt), r);
            break;
          }
          vn(e, Ne, wt);
          break;
        case 5:
          vn(e, Ne, wt);
          break;
        default:
          throw Error(C(329));
      }
    }
  }
  return Le(e, oe()), e.callbackNode === n ? Am.bind(null, e) : null;
}
function Dl(e, t) {
  var n = Qr;
  return (
    e.current.memoizedState.isDehydrated && (kn(e, t).flags |= 256),
    (e = ts(e, t)),
    e !== 2 && ((t = Ne), (Ne = n), t !== null && Vl(t)),
    e
  );
}
function Vl(e) {
  Ne === null ? (Ne = e) : Ne.push.apply(Ne, e);
}
function g1(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!ot(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ht(e, t) {
  for (
    t &= ~Uu,
      t &= ~Es,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - rt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Uf(e) {
  if (z & 6) throw Error(C(327));
  lr();
  var t = Fo(e, 0);
  if (!(t & 1)) return Le(e, oe()), null;
  var n = ts(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = al(e);
    r !== 0 && ((t = r), (n = Dl(e, r)));
  }
  if (n === 1) throw ((n = mi), kn(e, 0), Ht(e, t), Le(e, oe()), n);
  if (n === 6) throw Error(C(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    vn(e, Ne, wt),
    Le(e, oe()),
    null
  );
}
function $u(e, t) {
  var n = z;
  z |= 1;
  try {
    return e(t);
  } finally {
    (z = n), z === 0 && ((mr = oe() + 500), ws && un());
  }
}
function Ln(e) {
  Wt !== null && Wt.tag === 0 && !(z & 6) && lr();
  var t = z;
  z |= 1;
  var n = Ye.transition,
    r = B;
  try {
    if (((Ye.transition = null), (B = 1), e)) return e();
  } finally {
    (B = r), (Ye.transition = n), (z = t), !(z & 6) && un();
  }
}
function Wu() {
  (Ve = Jn.current), $(Jn);
}
function kn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), K0(n)), ue !== null))
    for (n = ue.return; n !== null; ) {
      var r = n;
      switch ((Tu(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Uo();
          break;
        case 3:
          pr(), $(Re), $(Ee), Mu();
          break;
        case 5:
          Lu(r);
          break;
        case 4:
          pr();
          break;
        case 13:
          $(X);
          break;
        case 19:
          $(X);
          break;
        case 10:
          Nu(r.type._context);
          break;
        case 22:
        case 23:
          Wu();
      }
      n = n.return;
    }
  if (
    ((he = e),
    (ue = e = Zt(e.current, null)),
    (ye = Ve = t),
    (de = 0),
    (mi = null),
    (Uu = Es = An = 0),
    (Ne = Qr = null),
    En !== null)
  ) {
    for (t = 0; t < En.length; t++)
      if (((n = En[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          o = n.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (r.next = s);
        }
        n.pending = r;
      }
    En = null;
  }
  return e;
}
function Lm(e, t) {
  do {
    var n = ue;
    try {
      if ((ju(), (So.current = qo), Xo)) {
        for (var r = J.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Xo = !1;
      }
      if (
        ((Rn = 0),
        (pe = fe = J = null),
        (Wr = !1),
        (di = 0),
        (bu.current = null),
        n === null || n.return === null)
      ) {
        (de = 1), (mi = t), (ue = null);
        break;
      }
      e: {
        var o = e,
          s = n.return,
          a = n,
          l = t;
        if (
          ((t = ye),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var u = l,
            f = a,
            c = f.tag;
          if (!(f.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var d = f.alternate;
            d
              ? ((f.updateQueue = d.updateQueue),
                (f.memoizedState = d.memoizedState),
                (f.lanes = d.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var g = Nf(s);
          if (g !== null) {
            (g.flags &= -257),
              Of(g, s, a, o, t),
              g.mode & 1 && jf(o, u, t),
              (t = g),
              (l = u);
            var y = t.updateQueue;
            if (y === null) {
              var v = new Set();
              v.add(l), (t.updateQueue = v);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              jf(o, u, t), Ku();
              break e;
            }
            l = Error(C(426));
          }
        } else if (Q && a.mode & 1) {
          var _ = Nf(s);
          if (_ !== null) {
            !(_.flags & 65536) && (_.flags |= 256),
              Of(_, s, a, o, t),
              ku(hr(l, a));
            break e;
          }
        }
        (o = l = hr(l, a)),
          de !== 4 && (de = 2),
          Qr === null ? (Qr = [o]) : Qr.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var m = gm(o, l, t);
              xf(o, m);
              break e;
            case 1:
              a = l;
              var p = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (qt === null || !qt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = ym(o, a, t);
                xf(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Vm(n);
    } catch (E) {
      (t = E), ue === n && n !== null && (ue = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Mm() {
  var e = Jo.current;
  return (Jo.current = qo), e === null ? qo : e;
}
function Ku() {
  (de === 0 || de === 3 || de === 2) && (de = 4),
    he === null || (!(An & 268435455) && !(Es & 268435455)) || Ht(he, ye);
}
function ts(e, t) {
  var n = z;
  z |= 2;
  var r = Mm();
  (he !== e || ye !== t) && ((wt = null), kn(e, t));
  do
    try {
      y1();
      break;
    } catch (i) {
      Lm(e, i);
    }
  while (!0);
  if ((ju(), (z = n), (Jo.current = r), ue !== null)) throw Error(C(261));
  return (he = null), (ye = 0), de;
}
function y1() {
  for (; ue !== null; ) Dm(ue);
}
function v1() {
  for (; ue !== null && !Hv(); ) Dm(ue);
}
function Dm(e) {
  var t = Im(e.alternate, e, Ve);
  (e.memoizedProps = e.pendingProps),
    t === null ? Vm(e) : (ue = t),
    (bu.current = null);
}
function Vm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = f1(n, t)), n !== null)) {
        (n.flags &= 32767), (ue = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (de = 6), (ue = null);
        return;
      }
    } else if (((n = c1(n, t, Ve)), n !== null)) {
      ue = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      ue = t;
      return;
    }
    ue = t = e;
  } while (t !== null);
  de === 0 && (de = 5);
}
function vn(e, t, n) {
  var r = B,
    i = Ye.transition;
  try {
    (Ye.transition = null), (B = 1), w1(e, t, n, r);
  } finally {
    (Ye.transition = i), (B = r);
  }
  return null;
}
function w1(e, t, n, r) {
  do lr();
  while (Wt !== null);
  if (z & 6) throw Error(C(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(C(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Zv(e, o),
    e === he && ((ue = he = null), (ye = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      no ||
      ((no = !0),
      zm(Vo, function () {
        return lr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ye.transition), (Ye.transition = null);
    var s = B;
    B = 1;
    var a = z;
    (z |= 4),
      (bu.current = null),
      p1(e, n),
      Om(n, e),
      z0(pl),
      (Io = !!dl),
      (pl = dl = null),
      (e.current = n),
      h1(n),
      $v(),
      (z = a),
      (B = s),
      (Ye.transition = o);
  } else e.current = n;
  if (
    (no && ((no = !1), (Wt = e), (es = i)),
    (o = e.pendingLanes),
    o === 0 && (qt = null),
    Qv(n.stateNode),
    Le(e, oe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (Zo) throw ((Zo = !1), (e = Ll), (Ll = null), e);
  return (
    es & 1 && e.tag !== 0 && lr(),
    (o = e.pendingLanes),
    o & 1 ? (e === Ml ? Gr++ : ((Gr = 0), (Ml = e))) : (Gr = 0),
    un(),
    null
  );
}
function lr() {
  if (Wt !== null) {
    var e = mh(es),
      t = Ye.transition,
      n = B;
    try {
      if (((Ye.transition = null), (B = 16 > e ? 16 : e), Wt === null))
        var r = !1;
      else {
        if (((e = Wt), (Wt = null), (es = 0), z & 6)) throw Error(C(331));
        var i = z;
        for (z |= 4, O = e.current; O !== null; ) {
          var o = O,
            s = o.child;
          if (O.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var u = a[l];
                for (O = u; O !== null; ) {
                  var f = O;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Kr(8, f, o);
                  }
                  var c = f.child;
                  if (c !== null) (c.return = f), (O = c);
                  else
                    for (; O !== null; ) {
                      f = O;
                      var d = f.sibling,
                        g = f.return;
                      if ((Cm(f), f === u)) {
                        O = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = g), (O = d);
                        break;
                      }
                      O = g;
                    }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var v = y.child;
                if (v !== null) {
                  y.child = null;
                  do {
                    var _ = v.sibling;
                    (v.sibling = null), (v = _);
                  } while (v !== null);
                }
              }
              O = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (O = s);
          else
            e: for (; O !== null; ) {
              if (((o = O), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Kr(9, o, o.return);
                }
              var m = o.sibling;
              if (m !== null) {
                (m.return = o.return), (O = m);
                break e;
              }
              O = o.return;
            }
        }
        var p = e.current;
        for (O = p; O !== null; ) {
          s = O;
          var h = s.child;
          if (s.subtreeFlags & 2064 && h !== null) (h.return = s), (O = h);
          else
            e: for (s = p; O !== null; ) {
              if (((a = O), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      _s(9, a);
                  }
                } catch (E) {
                  te(a, a.return, E);
                }
              if (a === s) {
                O = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (O = S);
                break e;
              }
              O = a.return;
            }
        }
        if (
          ((z = i), un(), ht && typeof ht.onPostCommitFiberRoot == "function")
        )
          try {
            ht.onPostCommitFiberRoot(hs, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (B = n), (Ye.transition = t);
    }
  }
  return !1;
}
function Hf(e, t, n) {
  (t = hr(n, t)),
    (t = gm(e, t, 1)),
    (e = Xt(e, t, 1)),
    (t = ke()),
    e !== null && (_i(e, 1, t), Le(e, t));
}
function te(e, t, n) {
  if (e.tag === 3) Hf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Hf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (qt === null || !qt.has(r)))
        ) {
          (e = hr(n, e)),
            (e = ym(t, e, 1)),
            (t = Xt(t, e, 1)),
            (e = ke()),
            t !== null && (_i(t, 1, e), Le(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function S1(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ke()),
    (e.pingedLanes |= e.suspendedLanes & n),
    he === e &&
      (ye & n) === n &&
      (de === 4 || (de === 3 && (ye & 130023424) === ye && 500 > oe() - Hu)
        ? kn(e, 0)
        : (Uu |= n)),
    Le(e, t);
}
function Fm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Ki), (Ki <<= 1), !(Ki & 130023424) && (Ki = 4194304))
      : (t = 1));
  var n = ke();
  (e = Ot(e, t)), e !== null && (_i(e, t, n), Le(e, n));
}
function x1(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Fm(e, n);
}
function _1(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(C(314));
  }
  r !== null && r.delete(t), Fm(e, n);
}
var Im;
Im = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current) Oe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Oe = !1), u1(e, t, n);
      Oe = !!(e.flags & 131072);
    }
  else (Oe = !1), Q && t.flags & 1048576 && bh(t, Wo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      _o(e, t), (e = t.pendingProps);
      var i = cr(t, Ee.current);
      ar(t, n), (i = Vu(null, t, r, e, i, n));
      var o = Fu();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ae(r) ? ((o = !0), Ho(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            Ru(t),
            (i.updater = Ss),
            (t.stateNode = i),
            (i._reactInternals = t),
            _l(t, r, e, n),
            (t = Tl(null, t, r, !0, o, n)))
          : ((t.tag = 0), Q && o && Pu(t), Te(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (_o(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = P1(r)),
          (e = et(r, e)),
          i)
        ) {
          case 0:
            t = Pl(null, t, r, e, n);
            break e;
          case 1:
            t = Lf(null, t, r, e, n);
            break e;
          case 11:
            t = Rf(null, t, r, e, n);
            break e;
          case 14:
            t = Af(null, t, r, et(r.type, e), n);
            break e;
        }
        throw Error(C(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : et(r, i)),
        Pl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : et(r, i)),
        Lf(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((xm(t), e === null)) throw Error(C(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Wh(e, t),
          Go(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (i = hr(Error(C(423)), t)), (t = Mf(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = hr(Error(C(424)), t)), (t = Mf(e, t, r, n, i));
            break e;
          } else
            for (
              Fe = Yt(t.stateNode.containerInfo.firstChild),
                Ie = t,
                Q = !0,
                nt = null,
                n = Yh(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((fr(), r === i)) {
            t = Rt(e, t, n);
            break e;
          }
          Te(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Xh(t),
        e === null && wl(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (s = i.children),
        hl(r, i) ? (s = null) : o !== null && hl(r, o) && (t.flags |= 32),
        Sm(e, t),
        Te(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && wl(t), null;
    case 13:
      return _m(e, t, n);
    case 4:
      return (
        Au(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = dr(t, null, r, n)) : Te(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : et(r, i)),
        Rf(e, t, r, i, n)
      );
    case 7:
      return Te(e, t, t.pendingProps, n), t.child;
    case 8:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Te(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (s = i.value),
          b(Ko, r._currentValue),
          (r._currentValue = s),
          o !== null)
        )
          if (ot(o.value, s)) {
            if (o.children === i.children && !Re.current) {
              t = Rt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                s = o.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      (l = Pt(-1, n & -n)), (l.tag = 2);
                      var u = o.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var f = u.pending;
                        f === null
                          ? (l.next = l)
                          : ((l.next = f.next), (f.next = l)),
                          (u.pending = l);
                      }
                    }
                    (o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      Sl(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (o.tag === 10) s = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(C(341));
                (s.lanes |= n),
                  (a = s.alternate),
                  a !== null && (a.lanes |= n),
                  Sl(s, n, t),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Te(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        ar(t, n),
        (i = qe(i)),
        (r = r(i)),
        (t.flags |= 1),
        Te(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = et(r, t.pendingProps)),
        (i = et(r.type, i)),
        Af(e, t, r, i, n)
      );
    case 15:
      return vm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : et(r, i)),
        _o(e, t),
        (t.tag = 1),
        Ae(r) ? ((e = !0), Ho(t)) : (e = !1),
        ar(t, n),
        Qh(t, r, i),
        _l(t, r, i, n),
        Tl(null, t, r, !0, e, n)
      );
    case 19:
      return Em(e, t, n);
    case 22:
      return wm(e, t, n);
  }
  throw Error(C(156, t.tag));
};
function zm(e, t) {
  return fh(e, t);
}
function E1(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ge(e, t, n, r) {
  return new E1(e, t, n, r);
}
function Qu(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function P1(e) {
  if (typeof e == "function") return Qu(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === du)) return 11;
    if (e === pu) return 14;
  }
  return 2;
}
function Zt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ge(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function To(e, t, n, r, i, o) {
  var s = 2;
  if (((r = e), typeof e == "function")) Qu(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Un:
        return Cn(n.children, i, o, t);
      case fu:
        (s = 8), (i |= 8);
        break;
      case Ka:
        return (
          (e = Ge(12, n, t, i | 2)), (e.elementType = Ka), (e.lanes = o), e
        );
      case Qa:
        return (e = Ge(13, n, t, i)), (e.elementType = Qa), (e.lanes = o), e;
      case Ga:
        return (e = Ge(19, n, t, i)), (e.elementType = Ga), (e.lanes = o), e;
      case Gp:
        return Ps(n, i, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Kp:
              s = 10;
              break e;
            case Qp:
              s = 9;
              break e;
            case du:
              s = 11;
              break e;
            case pu:
              s = 14;
              break e;
            case zt:
              (s = 16), (r = null);
              break e;
          }
        throw Error(C(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ge(s, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function Cn(e, t, n, r) {
  return (e = Ge(7, e, r, t)), (e.lanes = n), e;
}
function Ps(e, t, n, r) {
  return (
    (e = Ge(22, e, r, t)),
    (e.elementType = Gp),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Sa(e, t, n) {
  return (e = Ge(6, e, null, t)), (e.lanes = n), e;
}
function xa(e, t, n) {
  return (
    (t = Ge(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function T1(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ta(0)),
    (this.expirationTimes = ta(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ta(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Gu(e, t, n, r, i, o, s, a, l) {
  return (
    (e = new T1(e, t, n, a, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ge(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ru(o),
    e
  );
}
function k1(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: bn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Bm(e) {
  if (!e) return rn;
  e = e._reactInternals;
  e: {
    if (Vn(e) !== e || e.tag !== 1) throw Error(C(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ae(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(C(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ae(n)) return zh(e, n, t);
  }
  return t;
}
function bm(e, t, n, r, i, o, s, a, l) {
  return (
    (e = Gu(n, r, !0, e, i, o, s, a, l)),
    (e.context = Bm(null)),
    (n = e.current),
    (r = ke()),
    (i = Jt(n)),
    (o = Pt(r, i)),
    (o.callback = t ?? null),
    Xt(n, o, i),
    (e.current.lanes = i),
    _i(e, i, r),
    Le(e, r),
    e
  );
}
function Ts(e, t, n, r) {
  var i = t.current,
    o = ke(),
    s = Jt(i);
  return (
    (n = Bm(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Pt(o, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Xt(i, t, s)),
    e !== null && (it(e, i, s, o), wo(e, i, s)),
    s
  );
}
function ns(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function $f(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yu(e, t) {
  $f(e, t), (e = e.alternate) && $f(e, t);
}
function C1() {
  return null;
}
var Um =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Xu(e) {
  this._internalRoot = e;
}
ks.prototype.render = Xu.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(C(409));
  Ts(e, t, null, null);
};
ks.prototype.unmount = Xu.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ln(function () {
      Ts(null, e, null, null);
    }),
      (t[Nt] = null);
  }
};
function ks(e) {
  this._internalRoot = e;
}
ks.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = vh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Ut.length && t !== 0 && t < Ut[n].priority; n++);
    Ut.splice(n, 0, e), n === 0 && Sh(e);
  }
};
function qu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Cs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Wf() {}
function j1(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var u = ns(s);
        o.call(u);
      };
    }
    var s = bm(t, r, e, 0, null, !1, !1, "", Wf);
    return (
      (e._reactRootContainer = s),
      (e[Nt] = s.current),
      ai(e.nodeType === 8 ? e.parentNode : e),
      Ln(),
      s
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var u = ns(l);
      a.call(u);
    };
  }
  var l = Gu(e, 0, !1, null, null, !1, !1, "", Wf);
  return (
    (e._reactRootContainer = l),
    (e[Nt] = l.current),
    ai(e.nodeType === 8 ? e.parentNode : e),
    Ln(function () {
      Ts(t, l, n, r);
    }),
    l
  );
}
function js(e, t, n, r, i) {
  var o = n._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = ns(s);
        a.call(l);
      };
    }
    Ts(t, s, e, i);
  } else s = j1(n, t, e, i, r);
  return ns(s);
}
gh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fr(t.pendingLanes);
        n !== 0 &&
          (gu(t, n | 1), Le(t, oe()), !(z & 6) && ((mr = oe() + 500), un()));
      }
      break;
    case 13:
      Ln(function () {
        var r = Ot(e, 1);
        if (r !== null) {
          var i = ke();
          it(r, e, 1, i);
        }
      }),
        Yu(e, 1);
  }
};
yu = function (e) {
  if (e.tag === 13) {
    var t = Ot(e, 134217728);
    if (t !== null) {
      var n = ke();
      it(t, e, 134217728, n);
    }
    Yu(e, 134217728);
  }
};
yh = function (e) {
  if (e.tag === 13) {
    var t = Jt(e),
      n = Ot(e, t);
    if (n !== null) {
      var r = ke();
      it(n, e, t, r);
    }
    Yu(e, t);
  }
};
vh = function () {
  return B;
};
wh = function (e, t) {
  var n = B;
  try {
    return (B = e), t();
  } finally {
    B = n;
  }
};
il = function (e, t, n) {
  switch (t) {
    case "input":
      if ((qa(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = vs(r);
            if (!i) throw Error(C(90));
            Xp(r), qa(r, i);
          }
        }
      }
      break;
    case "textarea":
      Jp(e, n);
      break;
    case "select":
      (t = n.value), t != null && rr(e, !!n.multiple, t, !1);
  }
};
oh = $u;
sh = Ln;
var N1 = { usingClientEntryPoint: !1, Events: [Pi, Kn, vs, rh, ih, $u] },
  Rr = {
    findFiberByHostInstance: _n,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  O1 = {
    bundleType: Rr.bundleType,
    version: Rr.version,
    rendererPackageName: Rr.rendererPackageName,
    rendererConfig: Rr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Lt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = uh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Rr.findFiberByHostInstance || C1,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ro = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ro.isDisabled && ro.supportsFiber)
    try {
      (hs = ro.inject(O1)), (ht = ro);
    } catch {}
}
be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N1;
be.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!qu(t)) throw Error(C(200));
  return k1(e, t, null, n);
};
be.createRoot = function (e, t) {
  if (!qu(e)) throw Error(C(299));
  var n = !1,
    r = "",
    i = Um;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Gu(e, 1, !1, null, null, n, !1, r, i)),
    (e[Nt] = t.current),
    ai(e.nodeType === 8 ? e.parentNode : e),
    new Xu(t)
  );
};
be.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(C(188))
      : ((e = Object.keys(e).join(",")), Error(C(268, e)));
  return (e = uh(t)), (e = e === null ? null : e.stateNode), e;
};
be.flushSync = function (e) {
  return Ln(e);
};
be.hydrate = function (e, t, n) {
  if (!Cs(t)) throw Error(C(200));
  return js(null, e, t, !0, n);
};
be.hydrateRoot = function (e, t, n) {
  if (!qu(e)) throw Error(C(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = "",
    s = Um;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = bm(t, null, e, 1, n ?? null, i, !1, o, s)),
    (e[Nt] = t.current),
    ai(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new ks(t);
};
be.render = function (e, t, n) {
  if (!Cs(t)) throw Error(C(200));
  return js(null, e, t, !1, n);
};
be.unmountComponentAtNode = function (e) {
  if (!Cs(e)) throw Error(C(40));
  return e._reactRootContainer
    ? (Ln(function () {
        js(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Nt] = null);
        });
      }),
      !0)
    : !1;
};
be.unstable_batchedUpdates = $u;
be.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Cs(n)) throw Error(C(200));
  if (e == null || e._reactInternals === void 0) throw Error(C(38));
  return js(e, t, n, !1, r);
};
be.version = "18.2.0-next-9e3b772b8-20220608";
function Hm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hm);
    } catch (e) {
      console.error(e);
    }
}
Hm(), (bp.exports = be);
var $m = bp.exports,
  Kf = $m;
($a.createRoot = Kf.createRoot), ($a.hydrateRoot = Kf.hydrateRoot);
const Mn = "/assets/shape-1-DQnWar85.png";
var Wm = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Qf = pt.createContext && pt.createContext(Wm),
  en = function () {
    return (
      (en =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++) {
            t = arguments[n];
            for (var i in t)
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          }
          return e;
        }),
      en.apply(this, arguments)
    );
  },
  R1 = function (e, t) {
    var n = {};
    for (var r in e)
      Object.prototype.hasOwnProperty.call(e, r) &&
        t.indexOf(r) < 0 &&
        (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        t.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
          (n[r[i]] = e[r[i]]);
    return n;
  };
function Km(e) {
  return (
    e &&
    e.map(function (t, n) {
      return pt.createElement(t.tag, en({ key: n }, t.attr), Km(t.child));
    })
  );
}
function cn(e) {
  return function (t) {
    return pt.createElement(A1, en({ attr: en({}, e.attr) }, t), Km(e.child));
  };
}
function A1(e) {
  var t = function (n) {
    var r = e.attr,
      i = e.size,
      o = e.title,
      s = R1(e, ["attr", "size", "title"]),
      a = i || n.size || "1em",
      l;
    return (
      n.className && (l = n.className),
      e.className && (l = (l ? l + " " : "") + e.className),
      pt.createElement(
        "svg",
        en(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          r,
          s,
          {
            className: l,
            style: en(en({ color: e.color || n.color }, n.style), e.style),
            height: a,
            width: a,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && pt.createElement("title", null, o),
        e.children
      )
    );
  };
  return Qf !== void 0
    ? pt.createElement(Qf.Consumer, null, function (n) {
        return t(n);
      })
    : t(Wm);
}
function Ju(e) {
  return cn({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z",
        },
      },
    ],
  })(e);
}
function Zu(e) {
  return cn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z",
        },
      },
    ],
  })(e);
}
function ec(e) {
  return cn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z",
        },
      },
    ],
  })(e);
}
function L1(e) {
  return cn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
        },
      },
    ],
  })(e);
}
function M1(e) {
  return cn({
    tag: "svg",
    attr: { viewBox: "0 0 512 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z",
        },
      },
    ],
  })(e);
}
function D1(e) {
  return cn({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z",
        },
      },
    ],
  })(e);
}
function V1(e) {
  return cn({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z",
        },
      },
    ],
  })(e);
}
function F1(e) {
  return cn({
    tag: "svg",
    attr: { fill: "currentColor", viewBox: "0 0 16 16" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z",
        },
      },
    ],
  })(e);
}
const I1 = "/assets/tictactoe-DqnUHEY_.jpeg",
  Gf = "/assets/weatherapp-DRPtOZ1u.png",
  z1 = "/assets/project3-C_1snZ_H.jpeg",
  B1 = "/assets/project4-Chp2AI7p.jpeg",
  b1 = "/assets/project5-t03x2qBN.jpg",
  U1 = [
    { name: "Home", path: "home" },
    { name: "Skills", path: "skills" },
    { name: "Projects", path: "work" },
    { name: "Resume", path: "resume" },
    { name: "Contact", path: "contact" },
  ],
  H1 = [
    {
      id: 1,
      name: "JavaScript",
      description:
        "Proficient in JavaScript, I navigate the language's dynamic landscape with ease. Whether crafting interactive web interfaces or developing server-side applications, my expertise in JavaScript allows me to create efficient and engaging solutions.",
    },
    {
      id: 2,
      name: "React JS",
      description:
        "I excel in React development with a deep understanding of its intricacies and a proven track record of building dynamic and responsive user interfaces.",
    },
    {
      id: 3,
      name: "Node JS",
      description:
        "I command a robust skill set in Node.js, leveraging its powerful capabilities to develop scalable and efficient server-side applications. My experience extends to crafting high-performance, event-driven solutions that harness the full potential of Node.js for optimal results.",
    },
    {
      id: 4,
      name: "React Native",
      description:
        "Experienced in React Native, I create cross-platform mobile apps that deliver seamless and high-performance user experiences.",
    },
    {
      id: 5,
      name: "HTML & CSS & Bootstrap & Tailwind CSS",
      description:
        "I have a strong command of HTML and CSS, using them to structure and style web content. Additionally, I'm proficient in Bootstrap and Tailwind CSS, harnessing these frameworks to enhance the design and responsiveness of web applications.",
    },
    {
      id: 6,
      name: "Python",
      description:
        "Specialized in Python for data science, I leverage its versatile capabilities to analyze and derive insights from complex datasets. My expertise extends to employing powerful libraries and frameworks, making data-driven decisions a seamless process.",
    },
  ],
  ko = [
    {
      id: 1,
      img: b1,
      category: "Mobile App",
      title: "OPG DESIGN JAM 2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      url: "https://www.javascript.com/",
    },
    {
      id: 2,
      img: z1,
      category: "Mobile App",
      title: "IPark Mobile Application",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    },
    {
      id: 3,
      img: B1,
      category: "Web App",
      title: "IPark Web App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      url: "https://www.javascript.com/",
    },
    {
      id: 4,
      img: I1,
      category: "Web App",
      title: "Tic Tac Toe Game",
      description:
        "This Java-based Tic Tac Toe game utilizes JavaFX for the graphical user interface and features an AI opponent powered by the MinMax algorithm. The game provides three modes of play, allowing users to play against another human, against the AI, or watch the AI play against itself.",
      url: "https://www.javascript.com/",
    },
    {
      id: 5,
      img: Gf,
      category: "Web App",
      title: "Video Games Web App",
      description:
        "The Weather App with React is an intuitive web application offering instant weather updates for global cities. Built with React, it boasts a clean, responsive design for effortless city searches, real-time weather checks, and a 5-day forecast. The app's visual interface ensures a seamless experience on various devices, while its integration with a weather API provides a simple and effective means for users to stay informed, enabling confident activity planning.",
      url: "https://www.javascript.com/",
    },
    {
      id: 6,
      img: Gf,
      category: "Web App",
      title: "Employee Management System",
      description:
        "The Weather App with React is an intuitive web application offering instant weather updates for global cities. Built with React, it boasts a clean, responsive design for effortless city searches, real-time weather checks, and a 5-day forecast. The app's visual interface ensures a seamless experience on various devices, while its integration with a weather API provides a simple and effective means for users to stay informed, enabling confident activity planning.",
      url: "https://www.javascript.com/",
    },
  ],
  Yf = [
    {
      id: 1,
      title: "CoderHouse Courses",
      subtitle: "Backend Programming",
      date: "2014 - 2016",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "education",
    },
    {
      id: 2,
      title: "Lviv National Academy of Arts",
      subtitle: "Faculty of Design",
      date: "2012 - 2014",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "education",
    },
    {
      id: 3,
      title: "IT Future",
      subtitle: "High School",
      date: "2010 - 2012",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "education",
    },
    {
      id: 4,
      title: "UI Head & Manager",
      subtitle: "Soft Tech Inc.",
      date: "2020 - PRESENT",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "experience",
    },
    {
      id: 5,
      title: "UI / UX Specialist",
      subtitle: "Kana Design Studio",
      date: "2018 - 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "experience",
    },
    {
      id: 6,
      title: "Plugins Developer",
      subtitle: "Fiverr.com",
      date: "2016 - 2018",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      category: "experience",
    },
  ];
var ee = {},
  tc = {},
  ki = {},
  Ci = {},
  Qm = "Expected a function",
  Xf = NaN,
  $1 = "[object Symbol]",
  W1 = /^\s+|\s+$/g,
  K1 = /^[-+]0x[0-9a-f]+$/i,
  Q1 = /^0b[01]+$/i,
  G1 = /^0o[0-7]+$/i,
  Y1 = parseInt,
  X1 = typeof Bi == "object" && Bi && Bi.Object === Object && Bi,
  q1 = typeof self == "object" && self && self.Object === Object && self,
  J1 = X1 || q1 || Function("return this")(),
  Z1 = Object.prototype,
  ew = Z1.toString,
  tw = Math.max,
  nw = Math.min,
  _a = function () {
    return J1.Date.now();
  };
function rw(e, t, n) {
  var r,
    i,
    o,
    s,
    a,
    l,
    u = 0,
    f = !1,
    c = !1,
    d = !0;
  if (typeof e != "function") throw new TypeError(Qm);
  (t = qf(t) || 0),
    rs(n) &&
      ((f = !!n.leading),
      (c = "maxWait" in n),
      (o = c ? tw(qf(n.maxWait) || 0, t) : o),
      (d = "trailing" in n ? !!n.trailing : d));
  function g(P) {
    var k = r,
      T = i;
    return (r = i = void 0), (u = P), (s = e.apply(T, k)), s;
  }
  function y(P) {
    return (u = P), (a = setTimeout(m, t)), f ? g(P) : s;
  }
  function v(P) {
    var k = P - l,
      T = P - u,
      R = t - k;
    return c ? nw(R, o - T) : R;
  }
  function _(P) {
    var k = P - l,
      T = P - u;
    return l === void 0 || k >= t || k < 0 || (c && T >= o);
  }
  function m() {
    var P = _a();
    if (_(P)) return p(P);
    a = setTimeout(m, v(P));
  }
  function p(P) {
    return (a = void 0), d && r ? g(P) : ((r = i = void 0), s);
  }
  function h() {
    a !== void 0 && clearTimeout(a), (u = 0), (r = l = i = a = void 0);
  }
  function S() {
    return a === void 0 ? s : p(_a());
  }
  function E() {
    var P = _a(),
      k = _(P);
    if (((r = arguments), (i = this), (l = P), k)) {
      if (a === void 0) return y(l);
      if (c) return (a = setTimeout(m, t)), g(l);
    }
    return a === void 0 && (a = setTimeout(m, t)), s;
  }
  return (E.cancel = h), (E.flush = S), E;
}
function iw(e, t, n) {
  var r = !0,
    i = !0;
  if (typeof e != "function") throw new TypeError(Qm);
  return (
    rs(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (i = "trailing" in n ? !!n.trailing : i)),
    rw(e, t, { leading: r, maxWait: t, trailing: i })
  );
}
function rs(e) {
  var t = typeof e;
  return !!e && (t == "object" || t == "function");
}
function ow(e) {
  return !!e && typeof e == "object";
}
function sw(e) {
  return typeof e == "symbol" || (ow(e) && ew.call(e) == $1);
}
function qf(e) {
  if (typeof e == "number") return e;
  if (sw(e)) return Xf;
  if (rs(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = rs(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = e.replace(W1, "");
  var n = Q1.test(e);
  return n || G1.test(e) ? Y1(e.slice(2), n ? 2 : 8) : K1.test(e) ? Xf : +e;
}
var aw = iw,
  ji = {};
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.addPassiveEventListener = function (t, n, r) {
  var i = r.name;
  i || ((i = n), console.warn("Listener must be a named function.")),
    Co.has(n) || Co.set(n, new Set());
  var o = Co.get(n);
  if (!o.has(i)) {
    var s = (function () {
      var a = !1;
      try {
        var l = Object.defineProperty({}, "passive", {
          get: function () {
            a = !0;
          },
        });
        window.addEventListener("test", null, l);
      } catch {}
      return a;
    })();
    t.addEventListener(n, r, s ? { passive: !0 } : !1), o.add(i);
  }
};
ji.removePassiveEventListener = function (t, n, r) {
  t.removeEventListener(n, r), Co.get(n).delete(r.name || n);
};
var Co = new Map();
Object.defineProperty(Ci, "__esModule", { value: !0 });
var lw = aw,
  uw = fw(lw),
  cw = ji;
function fw(e) {
  return e && e.__esModule ? e : { default: e };
}
var dw = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
    return (0, uw.default)(t, n);
  },
  G = {
    spyCallbacks: [],
    spySetState: [],
    scrollSpyContainers: [],
    mount: function (t, n) {
      if (t) {
        var r = dw(function (i) {
          G.scrollHandler(t);
        }, n);
        G.scrollSpyContainers.push(t),
          (0, cw.addPassiveEventListener)(t, "scroll", r);
      }
    },
    isMounted: function (t) {
      return G.scrollSpyContainers.indexOf(t) !== -1;
    },
    currentPositionX: function (t) {
      if (t === document) {
        var n = window.pageYOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageXOffset
          : r
          ? document.documentElement.scrollLeft
          : document.body.scrollLeft;
      } else return t.scrollLeft;
    },
    currentPositionY: function (t) {
      if (t === document) {
        var n = window.pageXOffset !== void 0,
          r = (document.compatMode || "") === "CSS1Compat";
        return n
          ? window.pageYOffset
          : r
          ? document.documentElement.scrollTop
          : document.body.scrollTop;
      } else return t.scrollTop;
    },
    scrollHandler: function (t) {
      var n =
        G.scrollSpyContainers[G.scrollSpyContainers.indexOf(t)].spyCallbacks ||
        [];
      n.forEach(function (r) {
        return r(G.currentPositionX(t), G.currentPositionY(t));
      });
    },
    addStateHandler: function (t) {
      G.spySetState.push(t);
    },
    addSpyHandler: function (t, n) {
      var r = G.scrollSpyContainers[G.scrollSpyContainers.indexOf(n)];
      r.spyCallbacks || (r.spyCallbacks = []),
        r.spyCallbacks.push(t),
        t(G.currentPositionX(n), G.currentPositionY(n));
    },
    updateStates: function () {
      G.spySetState.forEach(function (t) {
        return t();
      });
    },
    unmount: function (t, n) {
      G.scrollSpyContainers.forEach(function (r) {
        return (
          r.spyCallbacks &&
          r.spyCallbacks.length &&
          r.spyCallbacks.indexOf(n) > -1 &&
          r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1)
        );
      }),
        G.spySetState &&
          G.spySetState.length &&
          G.spySetState.indexOf(t) > -1 &&
          G.spySetState.splice(G.spySetState.indexOf(t), 1),
        document.removeEventListener("scroll", G.scrollHandler);
    },
    update: function () {
      return G.scrollSpyContainers.forEach(function (t) {
        return G.scrollHandler(t);
      });
    },
  };
Ci.default = G;
var _r = {},
  Ni = {};
Object.defineProperty(Ni, "__esModule", { value: !0 });
var pw = function (t, n) {
    var r = t.indexOf("#") === 0 ? t.substring(1) : t,
      i = r ? "#" + r : "",
      o = window && window.location,
      s = i ? o.pathname + o.search + i : o.pathname + o.search;
    n
      ? history.pushState(history.state, "", s)
      : history.replaceState(history.state, "", s);
  },
  hw = function () {
    return window.location.hash.replace(/^#/, "");
  },
  mw = function (t) {
    return function (n) {
      return t.contains
        ? t != n && t.contains(n)
        : !!(t.compareDocumentPosition(n) & 16);
    };
  },
  gw = function (t) {
    return getComputedStyle(t).position !== "static";
  },
  Ea = function (t, n) {
    for (var r = t.offsetTop, i = t.offsetParent; i && !n(i); )
      (r += i.offsetTop), (i = i.offsetParent);
    return { offsetTop: r, offsetParent: i };
  },
  yw = function (t, n, r) {
    if (r)
      return t === document
        ? n.getBoundingClientRect().left +
            (window.scrollX || window.pageXOffset)
        : getComputedStyle(t).position !== "static"
        ? n.offsetLeft
        : n.offsetLeft - t.offsetLeft;
    if (t === document)
      return (
        n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset)
      );
    if (gw(t)) {
      if (n.offsetParent !== t) {
        var i = function (f) {
            return f === t || f === document;
          },
          o = Ea(n, i),
          s = o.offsetTop,
          a = o.offsetParent;
        if (a !== t)
          throw new Error(
            "Seems containerElement is not an ancestor of the Element"
          );
        return s;
      }
      return n.offsetTop;
    }
    if (n.offsetParent === t.offsetParent) return n.offsetTop - t.offsetTop;
    var l = function (f) {
      return f === document;
    };
    return Ea(n, l).offsetTop - Ea(t, l).offsetTop;
  };
Ni.default = {
  updateHash: pw,
  getHash: hw,
  filterElementInContainer: mw,
  scrollOffset: yw,
};
var Ns = {},
  nc = {};
Object.defineProperty(nc, "__esModule", { value: !0 });
nc.default = {
  defaultEasing: function (t) {
    return t < 0.5 ? Math.pow(t * 2, 2) / 2 : 1 - Math.pow((1 - t) * 2, 2) / 2;
  },
  linear: function (t) {
    return t;
  },
  easeInQuad: function (t) {
    return t * t;
  },
  easeOutQuad: function (t) {
    return t * (2 - t);
  },
  easeInOutQuad: function (t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  easeInCubic: function (t) {
    return t * t * t;
  },
  easeOutCubic: function (t) {
    return --t * t * t + 1;
  },
  easeInOutCubic: function (t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  easeInQuart: function (t) {
    return t * t * t * t;
  },
  easeOutQuart: function (t) {
    return 1 - --t * t * t * t;
  },
  easeInOutQuart: function (t) {
    return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  easeInQuint: function (t) {
    return t * t * t * t * t;
  },
  easeOutQuint: function (t) {
    return 1 + --t * t * t * t * t;
  },
  easeInOutQuint: function (t) {
    return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  },
};
var rc = {};
Object.defineProperty(rc, "__esModule", { value: !0 });
var vw = ji,
  ww = ["mousedown", "mousewheel", "touchmove", "keydown"];
rc.default = {
  subscribe: function (t) {
    return (
      typeof document < "u" &&
      ww.forEach(function (n) {
        return (0, vw.addPassiveEventListener)(document, n, t);
      })
    );
  },
};
var Oi = {};
Object.defineProperty(Oi, "__esModule", { value: !0 });
var Fl = {
  registered: {},
  scrollEvent: {
    register: function (t, n) {
      Fl.registered[t] = n;
    },
    remove: function (t) {
      Fl.registered[t] = null;
    },
  },
};
Oi.default = Fl;
Object.defineProperty(Ns, "__esModule", { value: !0 });
var Sw =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  xw = Ni;
Os(xw);
var _w = nc,
  Jf = Os(_w),
  Ew = rc,
  Pw = Os(Ew),
  Tw = Oi,
  ct = Os(Tw);
function Os(e) {
  return e && e.__esModule ? e : { default: e };
}
var Gm = function (t) {
    return Jf.default[t.smooth] || Jf.default.defaultEasing;
  },
  kw = function (t) {
    return typeof t == "function"
      ? t
      : function () {
          return t;
        };
  },
  Cw = function () {
    if (typeof window < "u")
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  },
  Il = (function () {
    return (
      Cw() ||
      function (e, t, n) {
        window.setTimeout(e, n || 1e3 / 60, new Date().getTime());
      }
    );
  })(),
  Ym = function () {
    return {
      currentPosition: 0,
      startPosition: 0,
      targetPosition: 0,
      progress: 0,
      duration: 0,
      cancel: !1,
      target: null,
      containerElement: null,
      to: null,
      start: null,
      delta: null,
      percent: null,
      delayTimeout: null,
    };
  },
  Xm = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollLeft;
    var r = window.pageXOffset !== void 0,
      i = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageXOffset
      : i
      ? document.documentElement.scrollLeft
      : document.body.scrollLeft;
  },
  qm = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body) return n.scrollTop;
    var r = window.pageXOffset !== void 0,
      i = (document.compatMode || "") === "CSS1Compat";
    return r
      ? window.pageYOffset
      : i
      ? document.documentElement.scrollTop
      : document.body.scrollTop;
  },
  jw = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollWidth - n.offsetWidth;
    var r = document.body,
      i = document.documentElement;
    return Math.max(
      r.scrollWidth,
      r.offsetWidth,
      i.clientWidth,
      i.scrollWidth,
      i.offsetWidth
    );
  },
  Nw = function (t) {
    var n = t.data.containerElement;
    if (n && n !== document && n !== document.body)
      return n.scrollHeight - n.offsetHeight;
    var r = document.body,
      i = document.documentElement;
    return Math.max(
      r.scrollHeight,
      r.offsetHeight,
      i.clientHeight,
      i.scrollHeight,
      i.offsetHeight
    );
  },
  Ow = function e(t, n, r) {
    var i = n.data;
    if (!n.ignoreCancelEvents && i.cancel) {
      ct.default.registered.end &&
        ct.default.registered.end(i.to, i.target, i.currentPositionY);
      return;
    }
    if (
      ((i.delta = Math.round(i.targetPosition - i.startPosition)),
      i.start === null && (i.start = r),
      (i.progress = r - i.start),
      (i.percent = i.progress >= i.duration ? 1 : t(i.progress / i.duration)),
      (i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent)),
      i.containerElement &&
      i.containerElement !== document &&
      i.containerElement !== document.body
        ? n.horizontal
          ? (i.containerElement.scrollLeft = i.currentPosition)
          : (i.containerElement.scrollTop = i.currentPosition)
        : n.horizontal
        ? window.scrollTo(i.currentPosition, 0)
        : window.scrollTo(0, i.currentPosition),
      i.percent < 1)
    ) {
      var o = e.bind(null, t, n);
      Il.call(window, o);
      return;
    }
    ct.default.registered.end &&
      ct.default.registered.end(i.to, i.target, i.currentPosition);
  },
  ic = function (t) {
    t.data.containerElement = t
      ? t.containerId
        ? document.getElementById(t.containerId)
        : t.container && t.container.nodeType
        ? t.container
        : document
      : null;
  },
  Ri = function (t, n, r, i) {
    (n.data = n.data || Ym()), window.clearTimeout(n.data.delayTimeout);
    var o = function () {
      n.data.cancel = !0;
    };
    if (
      (Pw.default.subscribe(o),
      ic(n),
      (n.data.start = null),
      (n.data.cancel = !1),
      (n.data.startPosition = n.horizontal ? Xm(n) : qm(n)),
      (n.data.targetPosition = n.absolute ? t : t + n.data.startPosition),
      n.data.startPosition === n.data.targetPosition)
    ) {
      ct.default.registered.end &&
        ct.default.registered.end(
          n.data.to,
          n.data.target,
          n.data.currentPosition
        );
      return;
    }
    (n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition)),
      (n.data.duration = kw(n.duration)(n.data.delta)),
      (n.data.duration = isNaN(parseFloat(n.data.duration))
        ? 1e3
        : parseFloat(n.data.duration)),
      (n.data.to = r),
      (n.data.target = i);
    var s = Gm(n),
      a = Ow.bind(null, s, n);
    if (n && n.delay > 0) {
      n.data.delayTimeout = window.setTimeout(function () {
        ct.default.registered.begin &&
          ct.default.registered.begin(n.data.to, n.data.target),
          Il.call(window, a);
      }, n.delay);
      return;
    }
    ct.default.registered.begin &&
      ct.default.registered.begin(n.data.to, n.data.target),
      Il.call(window, a);
  },
  Rs = function (t) {
    return (t = Sw({}, t)), (t.data = t.data || Ym()), (t.absolute = !0), t;
  },
  Rw = function (t) {
    Ri(0, Rs(t));
  },
  Aw = function (t, n) {
    Ri(t, Rs(n));
  },
  Lw = function (t) {
    (t = Rs(t)), ic(t), Ri(t.horizontal ? jw(t) : Nw(t), t);
  },
  Mw = function (t, n) {
    (n = Rs(n)), ic(n);
    var r = n.horizontal ? Xm(n) : qm(n);
    Ri(t + r, n);
  };
Ns.default = {
  animateTopScroll: Ri,
  getAnimationType: Gm,
  scrollToTop: Rw,
  scrollToBottom: Lw,
  scrollTo: Aw,
  scrollMore: Mw,
};
Object.defineProperty(_r, "__esModule", { value: !0 });
var Dw =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Vw = Ni,
  Fw = oc(Vw),
  Iw = Ns,
  zw = oc(Iw),
  Bw = Oi,
  io = oc(Bw);
function oc(e) {
  return e && e.__esModule ? e : { default: e };
}
var oo = {},
  Zf = void 0;
_r.default = {
  unmount: function () {
    oo = {};
  },
  register: function (t, n) {
    oo[t] = n;
  },
  unregister: function (t) {
    delete oo[t];
  },
  get: function (t) {
    return (
      oo[t] ||
      document.getElementById(t) ||
      document.getElementsByName(t)[0] ||
      document.getElementsByClassName(t)[0]
    );
  },
  setActiveLink: function (t) {
    return (Zf = t);
  },
  getActiveLink: function () {
    return Zf;
  },
  scrollTo: function (t, n) {
    var r = this.get(t);
    if (!r) {
      console.warn("target Element not found");
      return;
    }
    n = Dw({}, n, { absolute: !1 });
    var i = n.containerId,
      o = n.container,
      s = void 0;
    i
      ? (s = document.getElementById(i))
      : o && o.nodeType
      ? (s = o)
      : (s = document),
      (n.absolute = !0);
    var a = n.horizontal,
      l = Fw.default.scrollOffset(s, r, a) + (n.offset || 0);
    if (!n.smooth) {
      io.default.registered.begin && io.default.registered.begin(t, r),
        s === document
          ? n.horizontal
            ? window.scrollTo(l, 0)
            : window.scrollTo(0, l)
          : (s.scrollTop = l),
        io.default.registered.end && io.default.registered.end(t, r);
      return;
    }
    zw.default.animateTopScroll(l, n, t, r);
  },
};
var Jm = { exports: {} },
  bw = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  Uw = bw,
  Hw = Uw;
function Zm() {}
function eg() {}
eg.resetWarningCache = Zm;
var $w = function () {
  function e(r, i, o, s, a, l) {
    if (l !== Hw) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: eg,
    resetWarningCache: Zm,
  };
  return (n.PropTypes = n), n;
};
Jm.exports = $w();
var As = Jm.exports,
  Ls = {};
Object.defineProperty(Ls, "__esModule", { value: !0 });
var Ww = Ni,
  Pa = Kw(Ww);
function Kw(e) {
  return e && e.__esModule ? e : { default: e };
}
var Qw = {
  mountFlag: !1,
  initialized: !1,
  scroller: null,
  containers: {},
  mount: function (t) {
    (this.scroller = t),
      (this.handleHashChange = this.handleHashChange.bind(this)),
      window.addEventListener("hashchange", this.handleHashChange),
      this.initStateFromHash(),
      (this.mountFlag = !0);
  },
  mapContainer: function (t, n) {
    this.containers[t] = n;
  },
  isMounted: function () {
    return this.mountFlag;
  },
  isInitialized: function () {
    return this.initialized;
  },
  initStateFromHash: function () {
    var t = this,
      n = this.getHash();
    n
      ? window.setTimeout(function () {
          t.scrollTo(n, !0), (t.initialized = !0);
        }, 10)
      : (this.initialized = !0);
  },
  scrollTo: function (t, n) {
    var r = this.scroller,
      i = r.get(t);
    if (i && (n || t !== r.getActiveLink())) {
      var o = this.containers[t] || document;
      r.scrollTo(t, { container: o });
    }
  },
  getHash: function () {
    return Pa.default.getHash();
  },
  changeHash: function (t, n) {
    this.isInitialized() &&
      Pa.default.getHash() !== t &&
      Pa.default.updateHash(t, n);
  },
  handleHashChange: function () {
    this.scrollTo(this.getHash());
  },
  unmount: function () {
    (this.scroller = null),
      (this.containers = null),
      window.removeEventListener("hashchange", this.handleHashChange);
  },
};
Ls.default = Qw;
Object.defineProperty(ki, "__esModule", { value: !0 });
var so =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Gw = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  Yw = j,
  ed = Ai(Yw),
  Xw = Ci,
  ao = Ai(Xw),
  qw = _r,
  Jw = Ai(qw),
  Zw = As,
  K = Ai(Zw),
  eS = Ls,
  Dt = Ai(eS);
function Ai(e) {
  return e && e.__esModule ? e : { default: e };
}
function tS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function nS(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function rS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var td = {
  to: K.default.string.isRequired,
  containerId: K.default.string,
  container: K.default.object,
  activeClass: K.default.string,
  activeStyle: K.default.object,
  spy: K.default.bool,
  horizontal: K.default.bool,
  smooth: K.default.oneOfType([K.default.bool, K.default.string]),
  offset: K.default.number,
  delay: K.default.number,
  isDynamic: K.default.bool,
  onClick: K.default.func,
  duration: K.default.oneOfType([K.default.number, K.default.func]),
  absolute: K.default.bool,
  onSetActive: K.default.func,
  onSetInactive: K.default.func,
  ignoreCancelEvents: K.default.bool,
  hashSpy: K.default.bool,
  saveHashHistory: K.default.bool,
  spyThrottle: K.default.number,
};
ki.default = function (e, t) {
  var n = t || Jw.default,
    r = (function (o) {
      rS(s, o);
      function s(a) {
        tS(this, s);
        var l = nS(
          this,
          (s.__proto__ || Object.getPrototypeOf(s)).call(this, a)
        );
        return i.call(l), (l.state = { active: !1 }), l;
      }
      return (
        Gw(s, [
          {
            key: "getScrollSpyContainer",
            value: function () {
              var l = this.props.containerId,
                u = this.props.container;
              return l && !u
                ? document.getElementById(l)
                : u && u.nodeType
                ? u
                : document;
            },
          },
          {
            key: "componentDidMount",
            value: function () {
              if (this.props.spy || this.props.hashSpy) {
                var l = this.getScrollSpyContainer();
                ao.default.isMounted(l) ||
                  ao.default.mount(l, this.props.spyThrottle),
                  this.props.hashSpy &&
                    (Dt.default.isMounted() || Dt.default.mount(n),
                    Dt.default.mapContainer(this.props.to, l)),
                  ao.default.addSpyHandler(this.spyHandler, l),
                  this.setState({ container: l });
              }
            },
          },
          {
            key: "componentWillUnmount",
            value: function () {
              ao.default.unmount(this.stateHandler, this.spyHandler);
            },
          },
          {
            key: "render",
            value: function () {
              var l = "";
              this.state && this.state.active
                ? (l = (
                    (this.props.className || "") +
                    " " +
                    (this.props.activeClass || "active")
                  ).trim())
                : (l = this.props.className);
              var u = {};
              this.state && this.state.active
                ? (u = so({}, this.props.style, this.props.activeStyle))
                : (u = so({}, this.props.style));
              var f = so({}, this.props);
              for (var c in td) f.hasOwnProperty(c) && delete f[c];
              return (
                (f.className = l),
                (f.style = u),
                (f.onClick = this.handleClick),
                ed.default.createElement(e, f)
              );
            },
          },
        ]),
        s
      );
    })(ed.default.PureComponent),
    i = function () {
      var s = this;
      (this.scrollTo = function (a, l) {
        n.scrollTo(a, so({}, s.state, l));
      }),
        (this.handleClick = function (a) {
          s.props.onClick && s.props.onClick(a),
            a.stopPropagation && a.stopPropagation(),
            a.preventDefault && a.preventDefault(),
            s.scrollTo(s.props.to, s.props);
        }),
        (this.spyHandler = function (a, l) {
          var u = s.getScrollSpyContainer();
          if (!(Dt.default.isMounted() && !Dt.default.isInitialized())) {
            var f = s.props.horizontal,
              c = s.props.to,
              d = null,
              g = void 0,
              y = void 0;
            if (f) {
              var v = 0,
                _ = 0,
                m = 0;
              if (u.getBoundingClientRect) {
                var p = u.getBoundingClientRect();
                m = p.left;
              }
              if (!d || s.props.isDynamic) {
                if (((d = n.get(c)), !d)) return;
                var h = d.getBoundingClientRect();
                (v = h.left - m + a), (_ = v + h.width);
              }
              var S = a - s.props.offset;
              (g = S >= Math.floor(v) && S < Math.floor(_)),
                (y = S < Math.floor(v) || S >= Math.floor(_));
            } else {
              var E = 0,
                P = 0,
                k = 0;
              if (u.getBoundingClientRect) {
                var T = u.getBoundingClientRect();
                k = T.top;
              }
              if (!d || s.props.isDynamic) {
                if (((d = n.get(c)), !d)) return;
                var R = d.getBoundingClientRect();
                (E = R.top - k + l), (P = E + R.height);
              }
              var A = l - s.props.offset;
              (g = A >= Math.floor(E) && A < Math.floor(P)),
                (y = A < Math.floor(E) || A >= Math.floor(P));
            }
            var ne = n.getActiveLink();
            if (y) {
              if (
                (c === ne && n.setActiveLink(void 0),
                s.props.hashSpy && Dt.default.getHash() === c)
              ) {
                var ae = s.props.saveHashHistory,
                  me = ae === void 0 ? !1 : ae;
                Dt.default.changeHash("", me);
              }
              s.props.spy &&
                s.state.active &&
                (s.setState({ active: !1 }),
                s.props.onSetInactive && s.props.onSetInactive(c, d));
            }
            if (g && (ne !== c || s.state.active === !1)) {
              n.setActiveLink(c);
              var re = s.props.saveHashHistory,
                st = re === void 0 ? !1 : re;
              s.props.hashSpy && Dt.default.changeHash(c, st),
                s.props.spy &&
                  (s.setState({ active: !0 }),
                  s.props.onSetActive && s.props.onSetActive(c, d));
            }
          }
        });
    };
  return (r.propTypes = td), (r.defaultProps = { offset: 0 }), r;
};
Object.defineProperty(tc, "__esModule", { value: !0 });
var iS = j,
  nd = tg(iS),
  oS = ki,
  sS = tg(oS);
function tg(e) {
  return e && e.__esModule ? e : { default: e };
}
function aS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function rd(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function lS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var uS = (function (e) {
  lS(t, e);
  function t() {
    var n, r, i, o;
    aS(this, t);
    for (var s = arguments.length, a = Array(s), l = 0; l < s; l++)
      a[l] = arguments[l];
    return (
      (o =
        ((r =
          ((i = rd(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(a)
            )
          )),
          i)),
        (i.render = function () {
          return nd.default.createElement("a", i.props, i.props.children);
        }),
        r)),
      rd(i, o)
    );
  }
  return t;
})(nd.default.Component);
tc.default = (0, sS.default)(uS);
var sc = {};
Object.defineProperty(sc, "__esModule", { value: !0 });
var cS = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  fS = j,
  id = ng(fS),
  dS = ki,
  pS = ng(dS);
function ng(e) {
  return e && e.__esModule ? e : { default: e };
}
function hS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function mS(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function gS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var yS = (function (e) {
  gS(t, e);
  function t() {
    return (
      hS(this, t),
      mS(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    cS(t, [
      {
        key: "render",
        value: function () {
          return id.default.createElement(
            "button",
            this.props,
            this.props.children
          );
        },
      },
    ]),
    t
  );
})(id.default.Component);
sc.default = (0, pS.default)(yS);
var ac = {},
  Ms = {};
Object.defineProperty(Ms, "__esModule", { value: !0 });
var vS =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  wS = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  SS = j,
  od = Ds(SS),
  xS = $m;
Ds(xS);
var _S = _r,
  sd = Ds(_S),
  ES = As,
  ad = Ds(ES);
function Ds(e) {
  return e && e.__esModule ? e : { default: e };
}
function PS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function TS(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function kS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
Ms.default = function (e) {
  var t = (function (n) {
    kS(r, n);
    function r(i) {
      PS(this, r);
      var o = TS(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
      return (o.childBindings = { domNode: null }), o;
    }
    return (
      wS(r, [
        {
          key: "componentDidMount",
          value: function () {
            if (typeof window > "u") return !1;
            this.registerElems(this.props.name);
          },
        },
        {
          key: "componentDidUpdate",
          value: function (o) {
            this.props.name !== o.name && this.registerElems(this.props.name);
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            if (typeof window > "u") return !1;
            sd.default.unregister(this.props.name);
          },
        },
        {
          key: "registerElems",
          value: function (o) {
            sd.default.register(o, this.childBindings.domNode);
          },
        },
        {
          key: "render",
          value: function () {
            return od.default.createElement(
              e,
              vS({}, this.props, { parentBindings: this.childBindings })
            );
          },
        },
      ]),
      r
    );
  })(od.default.Component);
  return (t.propTypes = { name: ad.default.string, id: ad.default.string }), t;
};
Object.defineProperty(ac, "__esModule", { value: !0 });
var ld =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  CS = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })(),
  jS = j,
  ud = lc(jS),
  NS = Ms,
  OS = lc(NS),
  RS = As,
  cd = lc(RS);
function lc(e) {
  return e && e.__esModule ? e : { default: e };
}
function AS(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function LS(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function MS(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var rg = (function (e) {
  MS(t, e);
  function t() {
    return (
      AS(this, t),
      LS(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
    );
  }
  return (
    CS(t, [
      {
        key: "render",
        value: function () {
          var r = this,
            i = ld({}, this.props);
          return (
            delete i.name,
            i.parentBindings && delete i.parentBindings,
            ud.default.createElement(
              "div",
              ld({}, i, {
                ref: function (s) {
                  r.props.parentBindings.domNode = s;
                },
              }),
              this.props.children
            )
          );
        },
      },
    ]),
    t
  );
})(ud.default.Component);
rg.propTypes = { name: cd.default.string, id: cd.default.string };
ac.default = (0, OS.default)(rg);
var Ta =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  fd = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function dd(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function pd(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function hd(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var lo = j,
  mn = Ci,
  ka = _r,
  Y = As,
  Vt = Ls,
  md = {
    to: Y.string.isRequired,
    containerId: Y.string,
    container: Y.object,
    activeClass: Y.string,
    spy: Y.bool,
    smooth: Y.oneOfType([Y.bool, Y.string]),
    offset: Y.number,
    delay: Y.number,
    isDynamic: Y.bool,
    onClick: Y.func,
    duration: Y.oneOfType([Y.number, Y.func]),
    absolute: Y.bool,
    onSetActive: Y.func,
    onSetInactive: Y.func,
    ignoreCancelEvents: Y.bool,
    hashSpy: Y.bool,
    spyThrottle: Y.number,
  },
  DS = {
    Scroll: function (t, n) {
      console.warn("Helpers.Scroll is deprecated since v1.7.0");
      var r = n || ka,
        i = (function (s) {
          hd(a, s);
          function a(l) {
            dd(this, a);
            var u = pd(
              this,
              (a.__proto__ || Object.getPrototypeOf(a)).call(this, l)
            );
            return o.call(u), (u.state = { active: !1 }), u;
          }
          return (
            fd(a, [
              {
                key: "getScrollSpyContainer",
                value: function () {
                  var u = this.props.containerId,
                    f = this.props.container;
                  return u
                    ? document.getElementById(u)
                    : f && f.nodeType
                    ? f
                    : document;
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  if (this.props.spy || this.props.hashSpy) {
                    var u = this.getScrollSpyContainer();
                    mn.isMounted(u) || mn.mount(u, this.props.spyThrottle),
                      this.props.hashSpy &&
                        (Vt.isMounted() || Vt.mount(r),
                        Vt.mapContainer(this.props.to, u)),
                      this.props.spy && mn.addStateHandler(this.stateHandler),
                      mn.addSpyHandler(this.spyHandler, u),
                      this.setState({ container: u });
                  }
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  mn.unmount(this.stateHandler, this.spyHandler);
                },
              },
              {
                key: "render",
                value: function () {
                  var u = "";
                  this.state && this.state.active
                    ? (u = (
                        (this.props.className || "") +
                        " " +
                        (this.props.activeClass || "active")
                      ).trim())
                    : (u = this.props.className);
                  var f = Ta({}, this.props);
                  for (var c in md) f.hasOwnProperty(c) && delete f[c];
                  return (
                    (f.className = u),
                    (f.onClick = this.handleClick),
                    lo.createElement(t, f)
                  );
                },
              },
            ]),
            a
          );
        })(lo.Component),
        o = function () {
          var a = this;
          (this.scrollTo = function (l, u) {
            r.scrollTo(l, Ta({}, a.state, u));
          }),
            (this.handleClick = function (l) {
              a.props.onClick && a.props.onClick(l),
                l.stopPropagation && l.stopPropagation(),
                l.preventDefault && l.preventDefault(),
                a.scrollTo(a.props.to, a.props);
            }),
            (this.stateHandler = function () {
              r.getActiveLink() !== a.props.to &&
                (a.state !== null &&
                  a.state.active &&
                  a.props.onSetInactive &&
                  a.props.onSetInactive(),
                a.setState({ active: !1 }));
            }),
            (this.spyHandler = function (l) {
              var u = a.getScrollSpyContainer();
              if (!(Vt.isMounted() && !Vt.isInitialized())) {
                var f = a.props.to,
                  c = null,
                  d = 0,
                  g = 0,
                  y = 0;
                if (u.getBoundingClientRect) {
                  var v = u.getBoundingClientRect();
                  y = v.top;
                }
                if (!c || a.props.isDynamic) {
                  if (((c = r.get(f)), !c)) return;
                  var _ = c.getBoundingClientRect();
                  (d = _.top - y + l), (g = d + _.height);
                }
                var m = l - a.props.offset,
                  p = m >= Math.floor(d) && m < Math.floor(g),
                  h = m < Math.floor(d) || m >= Math.floor(g),
                  S = r.getActiveLink();
                if (h)
                  return (
                    f === S && r.setActiveLink(void 0),
                    a.props.hashSpy && Vt.getHash() === f && Vt.changeHash(),
                    a.props.spy &&
                      a.state.active &&
                      (a.setState({ active: !1 }),
                      a.props.onSetInactive && a.props.onSetInactive()),
                    mn.updateStates()
                  );
                if (p && S !== f)
                  return (
                    r.setActiveLink(f),
                    a.props.hashSpy && Vt.changeHash(f),
                    a.props.spy &&
                      (a.setState({ active: !0 }),
                      a.props.onSetActive && a.props.onSetActive(f)),
                    mn.updateStates()
                  );
              }
            });
        };
      return (i.propTypes = md), (i.defaultProps = { offset: 0 }), i;
    },
    Element: function (t) {
      console.warn("Helpers.Element is deprecated since v1.7.0");
      var n = (function (r) {
        hd(i, r);
        function i(o) {
          dd(this, i);
          var s = pd(
            this,
            (i.__proto__ || Object.getPrototypeOf(i)).call(this, o)
          );
          return (s.childBindings = { domNode: null }), s;
        }
        return (
          fd(i, [
            {
              key: "componentDidMount",
              value: function () {
                if (typeof window > "u") return !1;
                this.registerElems(this.props.name);
              },
            },
            {
              key: "componentDidUpdate",
              value: function (s) {
                this.props.name !== s.name &&
                  this.registerElems(this.props.name);
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                if (typeof window > "u") return !1;
                ka.unregister(this.props.name);
              },
            },
            {
              key: "registerElems",
              value: function (s) {
                ka.register(s, this.childBindings.domNode);
              },
            },
            {
              key: "render",
              value: function () {
                return lo.createElement(
                  t,
                  Ta({}, this.props, { parentBindings: this.childBindings })
                );
              },
            },
          ]),
          i
        );
      })(lo.Component);
      return (n.propTypes = { name: Y.string, id: Y.string }), n;
    },
  },
  VS = DS;
Object.defineProperty(ee, "__esModule", { value: !0 });
ee.Helpers =
  ee.ScrollElement =
  ee.ScrollLink =
  hg =
  ee.animateScroll =
  ee.scrollSpy =
  ee.Events =
  ee.scroller =
  ee.Element =
  ee.Button =
  gi =
  ee.Link =
    void 0;
var FS = tc,
  ig = yt(FS),
  IS = sc,
  og = yt(IS),
  zS = ac,
  sg = yt(zS),
  BS = _r,
  ag = yt(BS),
  bS = Oi,
  lg = yt(bS),
  US = Ci,
  ug = yt(US),
  HS = Ns,
  cg = yt(HS),
  $S = ki,
  fg = yt($S),
  WS = Ms,
  dg = yt(WS),
  KS = VS,
  pg = yt(KS);
function yt(e) {
  return e && e.__esModule ? e : { default: e };
}
var gi = (ee.Link = ig.default);
ee.Button = og.default;
ee.Element = sg.default;
ee.scroller = ag.default;
ee.Events = lg.default;
ee.scrollSpy = ug.default;
var hg = (ee.animateScroll = cg.default);
ee.ScrollLink = fg.default;
ee.ScrollElement = dg.default;
ee.Helpers = pg.default;
ee.default = {
  Link: ig.default,
  Button: og.default,
  Element: sg.default,
  scroller: ag.default,
  Events: lg.default,
  scrollSpy: ug.default,
  animateScroll: cg.default,
  ScrollLink: fg.default,
  ScrollElement: dg.default,
  Helpers: pg.default,
};
const QS = () => {
    let e = "light-theme";
    return (
      localStorage.getItem("theme") && (e = localStorage.getItem("theme")), e
    );
  },
  GS = () => {
    const [e, t] = j.useState(!1),
      [n, r] = j.useState(QS()),
      [i, o] = j.useState(!1),
      s = () => {
        r(n === "light-theme" ? "dark-theme" : "light-theme");
      },
      a = () => {
        hg.scrollToTop();
      },
      l = () => {
        window.scrollY >= 80 ? o(!0) : o(!1);
      };
    return (
      j.useEffect(() => {
        (document.documentElement.className = n),
          localStorage.setItem("theme", n);
      }, [n]),
      j.useEffect(() => {
        window.addEventListener("scroll", l);
      }, []),
      j.useEffect(() => {
        document.body.classList.toggle("no-scroll", e);
      }, [e]),
      w.jsx("header", {
        className: `${i ? "scroll-header" : ""} header`,
        children: w.jsxs("nav", {
          className: "nav",
          children: [
            w.jsx(gi, {
              to: "/",
              onClick: a,
              className: "nav__logo text-cs",
              children: "Negin",
            }),
            w.jsxs("div", {
              className: `${e ? "nav__menu show-menu" : "nav__menu"}`,
              children: [
                w.jsxs("div", {
                  className: "nav__data",
                  children: [
                    w.jsx("ul", {
                      className: "nav__list",
                      children: U1.map(({ name: u, path: f }, c) =>
                        w.jsx(
                          "li",
                          {
                            className: "nav__item",
                            children: w.jsx(gi, {
                              className: "nav__link text-cs",
                              to: f,
                              spy: !0,
                              hashSpy: !0,
                              smooth: !0,
                              offset: -150,
                              duration: 500,
                              onClick: () => t(!e),
                              children: u,
                            }),
                          },
                          c
                        )
                      ),
                    }),
                    w.jsxs("div", {
                      className: "header__socials",
                      children: [
                        w.jsx("a", {
                          href: "https://www.linkedin.com/in/negin-heidari/",
                          target: "_blank",
                          className: "home__social-link",
                          rel: "noreferrer",
                          children: w.jsx(Zu, {}),
                        }),
                        w.jsx("a", {
                          href: "https://github.com/neginheidarii",
                          target: "_blank",
                          className: "home__social-link",
                          rel: "noreferrer",
                          children: w.jsx(Ju, {}),
                        }),
                        w.jsx("a", {
                          href: "https://twitter.com/NeginHeidarii",
                          target: "_blank",
                          className: "home__social-link",
                          rel: "noreferrer",
                          children: w.jsx(ec, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                w.jsx("div", {
                  className: "section__deco header__deco deco__left",
                  children: w.jsx("img", {
                    src: Mn,
                    alt: "",
                    className: "shape",
                  }),
                }),
              ],
            }),
            w.jsxs("div", {
              className: "nav__btns",
              children: [
                w.jsx("div", {
                  className: "theme__toggler",
                  onClick: s,
                  children: n === "light-theme" ? w.jsx(V1, {}) : w.jsx(F1, {}),
                }),
                w.jsxs("div", {
                  className: `${
                    e ? "nav__toggle animate-toggle" : "nav__toggle"
                  }`,
                  onClick: () => t(!e),
                  children: [w.jsx("span", {}), w.jsx("span", {})],
                }),
              ],
            }),
          ],
        }),
      })
    );
  },
  YS = "/assets/profile-img-DiTzTqgO.png",
  zl = "/assets/shape-2-Cce34aYI.png",
  XS = "/assets/Negin-Heidari-CV-Dl6gJqMM.pdf",
  qS = () =>
    w.jsxs("section", {
      className: "home",
      id: "home",
      children: [
        w.jsxs("div", {
          className: "home__wrapper",
          children: [
            w.jsxs("div", {
              className: "home__container container",
              children: [
                w.jsxs("p", {
                  className: "home__subtitle text-cs",
                  children: [
                    "Hello, ",
                    w.jsx("span", { children: "My Name Is" }),
                  ],
                }),
                w.jsxs("h1", {
                  className: "home__title text-cs",
                  children: [w.jsx("span", { children: "NEGIN" }), " HEIDARI"],
                }),
                w.jsxs("p", {
                  className: "home__job",
                  children: [
                    w.jsx("span", { className: "text-cs", children: "I Am" }),
                    " ",
                    w.jsx("b", { children: " a Software Developer" }),
                  ],
                }),
                w.jsxs("div", {
                  className: "home__img-wrapper",
                  children: [
                    w.jsx("div", {
                      className: "home__banner",
                      children: w.jsx("img", {
                        src: YS,
                        alt: "",
                        className: "home__profile",
                      }),
                    }),
                    w.jsxs("p", {
                      className: "home__data home__data-one",
                      children: [
                        w.jsxs("span", {
                          className: "text-lg",
                          children: ["3 ", w.jsx("b", { children: "+" })],
                        }),
                        w.jsxs("span", {
                          className: "text-sm text-cs",
                          children: [
                            "Years of ",
                            w.jsx("span", { children: "Experience" }),
                          ],
                        }),
                      ],
                    }),
                    w.jsxs("p", {
                      className: "home__data home__data-two",
                      children: [
                        w.jsx("span", {
                          className: "text-lg",
                          children: "10+",
                        }),
                        w.jsxs("span", {
                          className: "text-sm text-cs",
                          children: [
                            "Completed ",
                            w.jsx("span", { children: "Projects" }),
                          ],
                        }),
                      ],
                    }),
                    w.jsx("img", {
                      src: Mn,
                      alt: "",
                      className: "shape shape__1",
                    }),
                    w.jsx("img", {
                      src: zl,
                      alt: "",
                      className: "shape shape__2",
                    }),
                    w.jsx("img", {
                      src: zl,
                      alt: "",
                      className: "shape shape__3",
                    }),
                  ],
                }),
                w.jsx("p", {
                  className: "home__text",
                  children:
                    "Welcome to my digital realm! I'm Negin Heidari, a coding virtuoso on a mission to transform ideas into dynamic digital realities. With over 3 years of programming prowess, I've mastered the art of crafting innovative and efficient software solutions. My portfolio isn't just a showcase of projects; it's a journey through a world where lines of code weave tales of creativity and problem-solving. Join me as we embark on a thrilling exploration of my coding escapades—where every click unveils a story of passion, precision, and the relentless pursuit of excellence. Ready to turn your digital dreams into code-powered wonders? Let's make it happen!",
                }),
                w.jsxs("div", {
                  className: "home__socials",
                  children: [
                    w.jsx("a", {
                      href: "https://www.linkedin.com/in/negin-heidari/",
                      target: "_blank",
                      className: "home__social-link",
                      rel: "noreferrer",
                      children: w.jsx(Zu, {}),
                    }),
                    w.jsx("a", {
                      href: "https://github.com/neginheidarii",
                      target: "_blank",
                      className: "home__social-link",
                      rel: "noreferrer",
                      children: w.jsx(Ju, {}),
                    }),
                    w.jsx("a", {
                      href: "https://twitter.com/NeginHeidarii",
                      target: "_blank",
                      className: "home__social-link",
                      rel: "noreferrer",
                      children: w.jsx(ec, {}),
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "home__btns",
                  children: [
                    w.jsx("a", {
                      download: "",
                      href: XS,
                      className: "btn text-cs",
                      children: "Download CV",
                    }),
                    w.jsx(gi, {
                      className: "hero__link text-cs",
                      to: "skills",
                      spy: !0,
                      hashSpy: !0,
                      smooth: !0,
                      offset: -150,
                      duration: 500,
                      children: "My Skills",
                    }),
                  ],
                }),
              ],
            }),
            w.jsx("div", {
              className: "section__deco deco__left",
              children: w.jsx("img", { src: Mn, alt: "", className: "shape" }),
            }),
          ],
        }),
        w.jsx("div", {
          className: "section__bg-wrapper",
          children: w.jsx("span", {
            className: "bg__title",
            children: "Negin",
          }),
        }),
      ],
    }),
  JS = () =>
    w.jsxs("section", {
      className: "skills section",
      id: "skills",
      children: [
        w.jsx("h2", {
          className: "section__title text-cs",
          children: "Professional Skills",
        }),
        w.jsxs("p", {
          className: "section__subtitle",
          children: ["My ", w.jsx("span", { children: "Talent" })],
        }),
        w.jsx("div", {
          className: "skills__container container grid",
          children: H1.map(({ name: e, percentage: t, description: n }, r) =>
            w.jsxs(
              "div",
              {
                className: "skills__item",
                children: [
                  w.jsxs("div", {
                    className: "skills__titles",
                    children: [
                      w.jsx("h3", { className: "skills__name", children: e }),
                      w.jsxs("span", {
                        className: "skills__number",
                        children: [t, " ", w.jsx("span", { children: "%" })],
                      }),
                    ],
                  }),
                  w.jsx("p", { className: "skills__description", children: n }),
                  w.jsx("div", {
                    className: "skills__bar",
                    children: w.jsx("span", {
                      className: "skills__percentage",
                      style: { width: `${t}%` },
                      children: w.jsx("span", {}),
                    }),
                  }),
                ],
              },
              r
            )
          ),
        }),
        w.jsx("div", {
          className: "section__deco deco__left",
          children: w.jsx("img", { src: Mn, alt: "", className: "shape" }),
        }),
        w.jsx("div", {
          className: "section__bg-wrapper",
          children: w.jsx("span", {
            className: "bg__title",
            children: "Skills",
          }),
        }),
      ],
    }),
  ZS = ({ list: e, filterItems: t }) => {
    const [n, r] = j.useState(0);
    return w.jsx("div", {
      className: "portfolio__list",
      children: e.map((i, o) =>
        w.jsx(
          "button",
          {
            className: `${
              n === o ? "active-work" : ""
            } portfolio__list-item text-cs`,
            onClick: () => {
              r(o), t(i);
            },
            children: i,
          },
          o
        )
      ),
    });
  },
  mg = j.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  Vs = j.createContext({}),
  Fs = j.createContext(null),
  Is = typeof document < "u",
  uc = Is ? j.useLayoutEffect : j.useEffect,
  gg = j.createContext({ strict: !1 }),
  cc = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
  ex = "framerAppearId",
  yg = "data-" + cc(ex);
function tx(e, t, n, r) {
  const { visualElement: i } = j.useContext(Vs),
    o = j.useContext(gg),
    s = j.useContext(Fs),
    a = j.useContext(mg).reducedMotion,
    l = j.useRef();
  (r = r || o.renderer),
    !l.current &&
      r &&
      (l.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: s,
        blockInitialAnimation: s ? s.initial === !1 : !1,
        reducedMotionConfig: a,
      }));
  const u = l.current;
  j.useInsertionEffect(() => {
    u && u.update(n, s);
  });
  const f = j.useRef(!!(n[yg] && !window.HandoffComplete));
  return (
    uc(() => {
      u &&
        (u.render(),
        f.current && u.animationState && u.animationState.animateChanges());
    }),
    j.useEffect(() => {
      u &&
        (u.updateFeatures(),
        !f.current && u.animationState && u.animationState.animateChanges(),
        f.current && ((f.current = !1), (window.HandoffComplete = !0)));
    }),
    u
  );
}
function Zn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function nx(e, t, n) {
  return j.useCallback(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Zn(n) && (n.current = r));
    },
    [t]
  );
}
function yi(e) {
  return typeof e == "string" || Array.isArray(e);
}
function zs(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const fc = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  dc = ["initial", ...fc];
function Bs(e) {
  return zs(e.animate) || dc.some((t) => yi(e[t]));
}
function vg(e) {
  return !!(Bs(e) || e.variants);
}
function rx(e, t) {
  if (Bs(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || yi(n) ? n : void 0,
      animate: yi(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function ix(e) {
  const { initial: t, animate: n } = rx(e, j.useContext(Vs));
  return j.useMemo(() => ({ initial: t, animate: n }), [gd(t), gd(n)]);
}
function gd(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const yd = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  vi = {};
for (const e in yd) vi[e] = { isEnabled: (t) => yd[e].some((n) => !!t[n]) };
function ox(e) {
  for (const t in e) vi[t] = { ...vi[t], ...e[t] };
}
const pc = j.createContext({}),
  wg = j.createContext({}),
  sx = Symbol.for("motionComponentSymbol");
function ax({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: i,
}) {
  e && ox(e);
  function o(a, l) {
    let u;
    const f = { ...j.useContext(mg), ...a, layoutId: lx(a) },
      { isStatic: c } = f,
      d = ix(a),
      g = r(a, c);
    if (!c && Is) {
      d.visualElement = tx(i, g, f, t);
      const y = j.useContext(wg),
        v = j.useContext(gg).strict;
      d.visualElement && (u = d.visualElement.loadFeatures(f, v, e, y));
    }
    return j.createElement(
      Vs.Provider,
      { value: d },
      u && d.visualElement
        ? j.createElement(u, { visualElement: d.visualElement, ...f })
        : null,
      n(i, a, nx(g, d.visualElement, l), g, c, d.visualElement)
    );
  }
  const s = j.forwardRef(o);
  return (s[sx] = i), s;
}
function lx({ layoutId: e }) {
  const t = j.useContext(pc).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function ux(e) {
  function t(r, i = {}) {
    return ax(e(r, i));
  }
  if (typeof Proxy > "u") return t;
  const n = new Map();
  return new Proxy(t, {
    get: (r, i) => (n.has(i) || n.set(i, t(i)), n.get(i)),
  });
}
const cx = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function hc(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(cx.indexOf(e) > -1 || /[A-Z]/.test(e));
}
const is = {};
function fx(e) {
  Object.assign(is, e);
}
const Li = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Fn = new Set(Li);
function Sg(e, { layout: t, layoutId: n }) {
  return (
    Fn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!is[e] || e === "opacity"))
  );
}
const Me = (e) => !!(e && e.getVelocity),
  dx = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  px = Li.length;
function hx(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  i
) {
  let o = "";
  for (let s = 0; s < px; s++) {
    const a = Li[s];
    if (e[a] !== void 0) {
      const l = dx[a] || a;
      o += `${l}(${e[a]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    i ? (o = i(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const xg = (e) => (t) => typeof t == "string" && t.startsWith(e),
  _g = xg("--"),
  Bl = xg("var(--"),
  mx =
    /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,
  gx = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  on = (e, t, n) => Math.min(Math.max(n, e), t),
  In = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Yr = { ...In, transform: (e) => on(0, 1, e) },
  uo = { ...In, default: 1 },
  Xr = (e) => Math.round(e * 1e5) / 1e5,
  bs = /(-)?([\d]*\.?[\d])+/g,
  Eg =
    /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
  yx =
    /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Mi(e) {
  return typeof e == "string";
}
const Di = (e) => ({
    test: (t) => Mi(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  It = Di("deg"),
  gt = Di("%"),
  L = Di("px"),
  vx = Di("vh"),
  wx = Di("vw"),
  vd = {
    ...gt,
    parse: (e) => gt.parse(e) / 100,
    transform: (e) => gt.transform(e * 100),
  },
  wd = { ...In, transform: Math.round },
  Pg = {
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    size: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    rotate: It,
    rotateX: It,
    rotateY: It,
    rotateZ: It,
    scale: uo,
    scaleX: uo,
    scaleY: uo,
    scaleZ: uo,
    skew: It,
    skewX: It,
    skewY: It,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: Yr,
    originX: vd,
    originY: vd,
    originZ: L,
    zIndex: wd,
    fillOpacity: Yr,
    strokeOpacity: Yr,
    numOctaves: wd,
  };
function mc(e, t, n, r) {
  const { style: i, vars: o, transform: s, transformOrigin: a } = e;
  let l = !1,
    u = !1,
    f = !0;
  for (const c in t) {
    const d = t[c];
    if (_g(c)) {
      o[c] = d;
      continue;
    }
    const g = Pg[c],
      y = gx(d, g);
    if (Fn.has(c)) {
      if (((l = !0), (s[c] = y), !f)) continue;
      d !== (g.default || 0) && (f = !1);
    } else c.startsWith("origin") ? ((u = !0), (a[c] = y)) : (i[c] = y);
  }
  if (
    (t.transform ||
      (l || r
        ? (i.transform = hx(e.transform, n, f, r))
        : i.transform && (i.transform = "none")),
    u)
  ) {
    const { originX: c = "50%", originY: d = "50%", originZ: g = 0 } = a;
    i.transformOrigin = `${c} ${d} ${g}`;
  }
}
const gc = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Tg(e, t, n) {
  for (const r in t) !Me(t[r]) && !Sg(r, n) && (e[r] = t[r]);
}
function Sx({ transformTemplate: e }, t, n) {
  return j.useMemo(() => {
    const r = gc();
    return (
      mc(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function xx(e, t, n) {
  const r = e.style || {},
    i = {};
  return (
    Tg(i, r, e),
    Object.assign(i, Sx(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
  );
}
function _x(e, t, n) {
  const r = {},
    i = xx(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none"),
      (i.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = i),
    r
  );
}
const Ex = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function os(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    Ex.has(e)
  );
}
let kg = (e) => !os(e);
function Px(e) {
  e && (kg = (t) => (t.startsWith("on") ? !os(t) : e(t)));
}
try {
  Px(require("@emotion/is-prop-valid").default);
} catch {}
function Tx(e, t, n) {
  const r = {};
  for (const i in e)
    (i === "values" && typeof e.values == "object") ||
      ((kg(i) ||
        (n === !0 && os(i)) ||
        (!t && !os(i)) ||
        (e.draggable && i.startsWith("onDrag"))) &&
        (r[i] = e[i]));
  return r;
}
function Sd(e, t, n) {
  return typeof e == "string" ? e : L.transform(t + n * e);
}
function kx(e, t, n) {
  const r = Sd(t, e.x, e.width),
    i = Sd(n, e.y, e.height);
  return `${r} ${i}`;
}
const Cx = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  jx = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Nx(e, t, n = 1, r = 0, i = !0) {
  e.pathLength = 1;
  const o = i ? Cx : jx;
  e[o.offset] = L.transform(-r);
  const s = L.transform(t),
    a = L.transform(n);
  e[o.array] = `${s} ${a}`;
}
function yc(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: i,
    originY: o,
    pathLength: s,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...u
  },
  f,
  c,
  d
) {
  if ((mc(e, u, f, d), c)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: g, style: y, dimensions: v } = e;
  g.transform && (v && (y.transform = g.transform), delete g.transform),
    v &&
      (i !== void 0 || o !== void 0 || y.transform) &&
      (y.transformOrigin = kx(
        v,
        i !== void 0 ? i : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (g.x = t),
    n !== void 0 && (g.y = n),
    r !== void 0 && (g.scale = r),
    s !== void 0 && Nx(g, s, a, l, !1);
}
const Cg = () => ({ ...gc(), attrs: {} }),
  vc = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Ox(e, t, n, r) {
  const i = j.useMemo(() => {
    const o = Cg();
    return (
      yc(o, t, { enableHardwareAcceleration: !1 }, vc(r), e.transformTemplate),
      { ...o.attrs, style: { ...o.style } }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    Tg(o, e.style, e), (i.style = { ...o, ...i.style });
  }
  return i;
}
function Rx(e = !1) {
  return (n, r, i, { latestValues: o }, s) => {
    const l = (hc(n) ? Ox : _x)(r, o, s, n),
      f = { ...Tx(r, typeof n == "string", e), ...l, ref: i },
      { children: c } = r,
      d = j.useMemo(() => (Me(c) ? c.get() : c), [c]);
    return j.createElement(n, { ...f, children: d });
  };
}
function jg(e, { style: t, vars: n }, r, i) {
  Object.assign(e.style, t, i && i.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const Ng = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function Og(e, t, n, r) {
  jg(e, t, void 0, r);
  for (const i in t.attrs) e.setAttribute(Ng.has(i) ? i : cc(i), t.attrs[i]);
}
function wc(e, t) {
  const { style: n } = e,
    r = {};
  for (const i in n)
    (Me(n[i]) || (t.style && Me(t.style[i])) || Sg(i, e)) && (r[i] = n[i]);
  return r;
}
function Rg(e, t) {
  const n = wc(e, t);
  for (const r in e)
    if (Me(e[r]) || Me(t[r])) {
      const i =
        Li.indexOf(r) !== -1
          ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
          : r;
      n[i] = e[r];
    }
  return n;
}
function Sc(e, t, n, r = {}, i = {}) {
  return (
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
  );
}
function Ag(e) {
  const t = j.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const ss = (e) => Array.isArray(e),
  Ax = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  Lx = (e) => (ss(e) ? e[e.length - 1] || 0 : e);
function jo(e) {
  const t = Me(e) ? e.get() : e;
  return Ax(t) ? t.toValue() : t;
}
function Mx(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  i,
  o
) {
  const s = { latestValues: Dx(r, i, o, e), renderState: t() };
  return n && (s.mount = (a) => n(r, a, s)), s;
}
const Lg = (e) => (t, n) => {
  const r = j.useContext(Vs),
    i = j.useContext(Fs),
    o = () => Mx(e, t, r, i);
  return n ? o() : Ag(o);
};
function Dx(e, t, n, r) {
  const i = {},
    o = r(e, {});
  for (const d in o) i[d] = jo(o[d]);
  let { initial: s, animate: a } = e;
  const l = Bs(e),
    u = vg(e);
  t &&
    u &&
    !l &&
    e.inherit !== !1 &&
    (s === void 0 && (s = t.initial), a === void 0 && (a = t.animate));
  let f = n ? n.initial === !1 : !1;
  f = f || s === !1;
  const c = f ? a : s;
  return (
    c &&
      typeof c != "boolean" &&
      !zs(c) &&
      (Array.isArray(c) ? c : [c]).forEach((g) => {
        const y = Sc(e, g);
        if (!y) return;
        const { transitionEnd: v, transition: _, ...m } = y;
        for (const p in m) {
          let h = m[p];
          if (Array.isArray(h)) {
            const S = f ? h.length - 1 : 0;
            h = h[S];
          }
          h !== null && (i[p] = h);
        }
        for (const p in v) i[p] = v[p];
      }),
    i
  );
}
const se = (e) => e;
class xd {
  constructor() {
    (this.order = []), (this.scheduled = new Set());
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    (this.order.length = 0), this.scheduled.clear();
  }
}
function Vx(e) {
  let t = new xd(),
    n = new xd(),
    r = 0,
    i = !1,
    o = !1;
  const s = new WeakSet(),
    a = {
      schedule: (l, u = !1, f = !1) => {
        const c = f && i,
          d = c ? t : n;
        return u && s.add(l), d.add(l) && c && i && (r = t.order.length), l;
      },
      cancel: (l) => {
        n.remove(l), s.delete(l);
      },
      process: (l) => {
        if (i) {
          o = !0;
          return;
        }
        if (((i = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let u = 0; u < r; u++) {
            const f = t.order[u];
            f(l), s.has(f) && (a.schedule(f), e());
          }
        (i = !1), o && ((o = !1), a.process(l));
      },
    };
  return a;
}
const co = ["prepare", "read", "update", "preRender", "render", "postRender"],
  Fx = 40;
function Ix(e, t) {
  let n = !1,
    r = !0;
  const i = { delta: 0, timestamp: 0, isProcessing: !1 },
    o = co.reduce((c, d) => ((c[d] = Vx(() => (n = !0))), c), {}),
    s = (c) => o[c].process(i),
    a = () => {
      const c = performance.now();
      (n = !1),
        (i.delta = r ? 1e3 / 60 : Math.max(Math.min(c - i.timestamp, Fx), 1)),
        (i.timestamp = c),
        (i.isProcessing = !0),
        co.forEach(s),
        (i.isProcessing = !1),
        n && t && ((r = !1), e(a));
    },
    l = () => {
      (n = !0), (r = !0), i.isProcessing || e(a);
    };
  return {
    schedule: co.reduce((c, d) => {
      const g = o[d];
      return (c[d] = (y, v = !1, _ = !1) => (n || l(), g.schedule(y, v, _))), c;
    }, {}),
    cancel: (c) => co.forEach((d) => o[d].cancel(c)),
    state: i,
    steps: o,
  };
}
const {
    schedule: U,
    cancel: At,
    state: xe,
    steps: Ca,
  } = Ix(typeof requestAnimationFrame < "u" ? requestAnimationFrame : se, !0),
  zx = {
    useVisualState: Lg({
      scrapeMotionValuesFromProps: Rg,
      createRenderState: Cg,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        U.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = { x: 0, y: 0, width: 0, height: 0 };
          }
        }),
          U.render(() => {
            yc(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              vc(t.tagName),
              e.transformTemplate
            ),
              Og(t, n);
          });
      },
    }),
  },
  Bx = {
    useVisualState: Lg({
      scrapeMotionValuesFromProps: wc,
      createRenderState: gc,
    }),
  };
function bx(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(hc(e) ? zx : Bx),
    preloadedFeatures: n,
    useRender: Rx(t),
    createVisualElement: r,
    Component: e,
  };
}
function Et(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const Mg = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Us(e, t = "page") {
  return { point: { x: e[t + "X"], y: e[t + "Y"] } };
}
const Ux = (e) => (t) => Mg(t) && e(t, Us(t));
function Tt(e, t, n, r) {
  return Et(e, t, Ux(n), r);
}
const Hx = (e, t) => (n) => t(e(n)),
  tn = (...e) => e.reduce(Hx);
function Dg(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const _d = Dg("dragHorizontal"),
  Ed = Dg("dragVertical");
function Vg(e) {
  let t = !1;
  if (e === "y") t = Ed();
  else if (e === "x") t = _d();
  else {
    const n = _d(),
      r = Ed();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Fg() {
  const e = Vg(!0);
  return e ? (e(), !1) : !0;
}
class fn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function Pd(e, t) {
  const n = "pointer" + (t ? "enter" : "leave"),
    r = "onHover" + (t ? "Start" : "End"),
    i = (o, s) => {
      if (o.pointerType === "touch" || Fg()) return;
      const a = e.getProps();
      e.animationState &&
        a.whileHover &&
        e.animationState.setActive("whileHover", t),
        a[r] && U.update(() => a[r](o, s));
    };
  return Tt(e.current, n, i, { passive: !e.getProps()[r] });
}
class $x extends fn {
  mount() {
    this.unmount = tn(Pd(this.node, !0), Pd(this.node, !1));
  }
  unmount() {}
}
class Wx extends fn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = tn(
      Et(this.node.current, "focus", () => this.onFocus()),
      Et(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Ig = (e, t) => (t ? (e === t ? !0 : Ig(e, t.parentElement)) : !1);
function ja(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, Us(n));
}
class Kx extends fn {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = se),
      (this.removeEndListeners = se),
      (this.removeAccessibleListeners = se),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = Tt(
            window,
            "pointerup",
            (a, l) => {
              if (!this.checkPressEnd()) return;
              const {
                onTap: u,
                onTapCancel: f,
                globalTapTarget: c,
              } = this.node.getProps();
              U.update(() => {
                !c && !Ig(this.node.current, a.target)
                  ? f && f(a, l)
                  : u && u(a, l);
              });
            },
            { passive: !(r.onTap || r.onPointerUp) }
          ),
          s = Tt(window, "pointercancel", (a, l) => this.cancelPress(a, l), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = tn(o, s)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const s = (a) => {
              a.key !== "Enter" ||
                !this.checkPressEnd() ||
                ja("up", (l, u) => {
                  const { onTap: f } = this.node.getProps();
                  f && U.update(() => f(l, u));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = Et(this.node.current, "keyup", s)),
              ja("down", (a, l) => {
                this.startPress(a, l);
              });
          },
          n = Et(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && ja("cancel", (o, s) => this.cancelPress(o, s));
          },
          i = Et(this.node.current, "blur", r);
        this.removeAccessibleListeners = tn(n, i);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: i } = this.node.getProps();
    i &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && U.update(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Fg()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && U.update(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = Tt(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        { passive: !(t.onTapStart || t.onPointerStart) }
      ),
      r = Et(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = tn(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const bl = new WeakMap(),
  Na = new WeakMap(),
  Qx = (e) => {
    const t = bl.get(e.target);
    t && t(e);
  },
  Gx = (e) => {
    e.forEach(Qx);
  };
function Yx({ root: e, ...t }) {
  const n = e || document;
  Na.has(n) || Na.set(n, {});
  const r = Na.get(n),
    i = JSON.stringify(t);
  return r[i] || (r[i] = new IntersectionObserver(Gx, { root: e, ...t })), r[i];
}
function Xx(e, t, n) {
  const r = Yx(t);
  return (
    bl.set(e, n),
    r.observe(e),
    () => {
      bl.delete(e), r.unobserve(e);
    }
  );
}
const qx = { some: 0, all: 1 };
class Jx extends fn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: i = "some", once: o } = t,
      s = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof i == "number" ? i : qx[i],
      },
      a = (l) => {
        const { isIntersecting: u } = l;
        if (
          this.isInView === u ||
          ((this.isInView = u), o && !u && this.hasEnteredView)
        )
          return;
        u && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", u);
        const { onViewportEnter: f, onViewportLeave: c } = this.node.getProps(),
          d = u ? f : c;
        d && d(l);
      };
    return Xx(this.node.current, s, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Zx(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Zx({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const e2 = {
  inView: { Feature: Jx },
  tap: { Feature: Kx },
  focus: { Feature: Wx },
  hover: { Feature: $x },
};
function zg(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function t2(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.get())), t;
}
function n2(e) {
  const t = {};
  return e.values.forEach((n, r) => (t[r] = n.getVelocity())), t;
}
function Hs(e, t, n) {
  const r = e.getProps();
  return Sc(r, t, n !== void 0 ? n : r.custom, t2(e), n2(e));
}
let xc = se;
const jn = (e) => e * 1e3,
  kt = (e) => e / 1e3,
  r2 = { current: !1 },
  Bg = (e) => Array.isArray(e) && typeof e[0] == "number";
function bg(e) {
  return !!(
    !e ||
    (typeof e == "string" && Ug[e]) ||
    Bg(e) ||
    (Array.isArray(e) && e.every(bg))
  );
}
const zr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  Ug = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: zr([0, 0.65, 0.55, 1]),
    circOut: zr([0.55, 0, 1, 0.45]),
    backIn: zr([0.31, 0.01, 0.66, -0.59]),
    backOut: zr([0.33, 1.53, 0.69, 0.99]),
  };
function Hg(e) {
  if (e) return Bg(e) ? zr(e) : Array.isArray(e) ? e.map(Hg) : Ug[e];
}
function i2(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: i,
    repeat: o = 0,
    repeatType: s = "loop",
    ease: a,
    times: l,
  } = {}
) {
  const u = { [t]: n };
  l && (u.offset = l);
  const f = Hg(a);
  return (
    Array.isArray(f) && (u.easing = f),
    e.animate(u, {
      delay: r,
      duration: i,
      easing: Array.isArray(f) ? "linear" : f,
      fill: "both",
      iterations: o + 1,
      direction: s === "reverse" ? "alternate" : "normal",
    })
  );
}
function o2(e, { repeat: t, repeatType: n = "loop" }) {
  const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[r];
}
const $g = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  s2 = 1e-7,
  a2 = 12;
function l2(e, t, n, r, i) {
  let o,
    s,
    a = 0;
  do (s = t + (n - t) / 2), (o = $g(s, r, i) - e), o > 0 ? (n = s) : (t = s);
  while (Math.abs(o) > s2 && ++a < a2);
  return s;
}
function Vi(e, t, n, r) {
  if (e === t && n === r) return se;
  const i = (o) => l2(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : $g(i(o), t, r));
}
const u2 = Vi(0.42, 0, 1, 1),
  c2 = Vi(0, 0, 0.58, 1),
  Wg = Vi(0.42, 0, 0.58, 1),
  f2 = (e) => Array.isArray(e) && typeof e[0] != "number",
  Kg = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Qg = (e) => (t) => 1 - e(1 - t),
  _c = (e) => 1 - Math.sin(Math.acos(e)),
  Gg = Qg(_c),
  d2 = Kg(_c),
  Yg = Vi(0.33, 1.53, 0.69, 0.99),
  Ec = Qg(Yg),
  p2 = Kg(Ec),
  h2 = (e) =>
    (e *= 2) < 1 ? 0.5 * Ec(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  m2 = {
    linear: se,
    easeIn: u2,
    easeInOut: Wg,
    easeOut: c2,
    circIn: _c,
    circInOut: d2,
    circOut: Gg,
    backIn: Ec,
    backInOut: p2,
    backOut: Yg,
    anticipate: h2,
  },
  Td = (e) => {
    if (Array.isArray(e)) {
      xc(e.length === 4);
      const [t, n, r, i] = e;
      return Vi(t, n, r, i);
    } else if (typeof e == "string") return m2[e];
    return e;
  },
  Pc = (e, t) => (n) =>
    !!(
      (Mi(n) && yx.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Xg = (e, t, n) => (r) => {
    if (!Mi(r)) return r;
    const [i, o, s, a] = r.match(bs);
    return {
      [e]: parseFloat(i),
      [t]: parseFloat(o),
      [n]: parseFloat(s),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  g2 = (e) => on(0, 255, e),
  Oa = { ...In, transform: (e) => Math.round(g2(e)) },
  Tn = {
    test: Pc("rgb", "red"),
    parse: Xg("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Oa.transform(e) +
      ", " +
      Oa.transform(t) +
      ", " +
      Oa.transform(n) +
      ", " +
      Xr(Yr.transform(r)) +
      ")",
  };
function y2(e) {
  let t = "",
    n = "",
    r = "",
    i = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (i = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (i = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (i += i)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: i ? parseInt(i, 16) / 255 : 1,
    }
  );
}
const Ul = { test: Pc("#"), parse: y2, transform: Tn.transform },
  er = {
    test: Pc("hsl", "hue"),
    parse: Xg("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      gt.transform(Xr(t)) +
      ", " +
      gt.transform(Xr(n)) +
      ", " +
      Xr(Yr.transform(r)) +
      ")",
  },
  Pe = {
    test: (e) => Tn.test(e) || Ul.test(e) || er.test(e),
    parse: (e) =>
      Tn.test(e) ? Tn.parse(e) : er.test(e) ? er.parse(e) : Ul.parse(e),
    transform: (e) =>
      Mi(e) ? e : e.hasOwnProperty("red") ? Tn.transform(e) : er.transform(e),
  },
  q = (e, t, n) => -n * e + n * t + e;
function Ra(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function v2({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let i = 0,
    o = 0,
    s = 0;
  if (!t) i = o = s = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (i = Ra(l, a, e + 1 / 3)), (o = Ra(l, a, e)), (s = Ra(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(o * 255),
    blue: Math.round(s * 255),
    alpha: r,
  };
}
const Aa = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r));
  },
  w2 = [Ul, Tn, er],
  S2 = (e) => w2.find((t) => t.test(e));
function kd(e) {
  const t = S2(e);
  let n = t.parse(e);
  return t === er && (n = v2(n)), n;
}
const qg = (e, t) => {
  const n = kd(e),
    r = kd(t),
    i = { ...n };
  return (o) => (
    (i.red = Aa(n.red, r.red, o)),
    (i.green = Aa(n.green, r.green, o)),
    (i.blue = Aa(n.blue, r.blue, o)),
    (i.alpha = q(n.alpha, r.alpha, o)),
    Tn.transform(i)
  );
};
function x2(e) {
  var t, n;
  return (
    isNaN(e) &&
    Mi(e) &&
    (((t = e.match(bs)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Eg)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Jg = { regex: mx, countKey: "Vars", token: "${v}", parse: se },
  Zg = { regex: Eg, countKey: "Colors", token: "${c}", parse: Pe.parse },
  ey = { regex: bs, countKey: "Numbers", token: "${n}", parse: In.parse };
function La(e, { regex: t, countKey: n, token: r, parse: i }) {
  const o = e.tokenised.match(t);
  o &&
    ((e["num" + n] = o.length),
    (e.tokenised = e.tokenised.replace(t, r)),
    e.values.push(...o.map(i)));
}
function as(e) {
  const t = e.toString(),
    n = {
      value: t,
      tokenised: t,
      values: [],
      numVars: 0,
      numColors: 0,
      numNumbers: 0,
    };
  return n.value.includes("var(--") && La(n, Jg), La(n, Zg), La(n, ey), n;
}
function ty(e) {
  return as(e).values;
}
function ny(e) {
  const { values: t, numColors: n, numVars: r, tokenised: i } = as(e),
    o = t.length;
  return (s) => {
    let a = i;
    for (let l = 0; l < o; l++)
      l < r
        ? (a = a.replace(Jg.token, s[l]))
        : l < r + n
        ? (a = a.replace(Zg.token, Pe.transform(s[l])))
        : (a = a.replace(ey.token, Xr(s[l])));
    return a;
  };
}
const _2 = (e) => (typeof e == "number" ? 0 : e);
function E2(e) {
  const t = ty(e);
  return ny(e)(t.map(_2));
}
const sn = {
    test: x2,
    parse: ty,
    createTransformer: ny,
    getAnimatableNone: E2,
  },
  ry = (e, t) => (n) => `${n > 0 ? t : e}`;
function iy(e, t) {
  return typeof e == "number"
    ? (n) => q(e, t, n)
    : Pe.test(e)
    ? qg(e, t)
    : e.startsWith("var(")
    ? ry(e, t)
    : sy(e, t);
}
const oy = (e, t) => {
    const n = [...e],
      r = n.length,
      i = e.map((o, s) => iy(o, t[s]));
    return (o) => {
      for (let s = 0; s < r; s++) n[s] = i[s](o);
      return n;
    };
  },
  P2 = (e, t) => {
    const n = { ...e, ...t },
      r = {};
    for (const i in n)
      e[i] !== void 0 && t[i] !== void 0 && (r[i] = iy(e[i], t[i]));
    return (i) => {
      for (const o in r) n[o] = r[o](i);
      return n;
    };
  },
  sy = (e, t) => {
    const n = sn.createTransformer(t),
      r = as(e),
      i = as(t);
    return r.numVars === i.numVars &&
      r.numColors === i.numColors &&
      r.numNumbers >= i.numNumbers
      ? tn(oy(r.values, i.values), n)
      : ry(e, t);
  },
  wi = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Cd = (e, t) => (n) => q(e, t, n);
function T2(e) {
  return typeof e == "number"
    ? Cd
    : typeof e == "string"
    ? Pe.test(e)
      ? qg
      : sy
    : Array.isArray(e)
    ? oy
    : typeof e == "object"
    ? P2
    : Cd;
}
function k2(e, t, n) {
  const r = [],
    i = n || T2(e[0]),
    o = e.length - 1;
  for (let s = 0; s < o; s++) {
    let a = i(e[s], e[s + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[s] || se : t;
      a = tn(l, a);
    }
    r.push(a);
  }
  return r;
}
function ay(e, t, { clamp: n = !0, ease: r, mixer: i } = {}) {
  const o = e.length;
  if ((xc(o === t.length), o === 1)) return () => t[0];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const s = k2(t, r, i),
    a = s.length,
    l = (u) => {
      let f = 0;
      if (a > 1) for (; f < e.length - 2 && !(u < e[f + 1]); f++);
      const c = wi(e[f], e[f + 1], u);
      return s[f](c);
    };
  return n ? (u) => l(on(e[0], e[o - 1], u)) : l;
}
function C2(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const i = wi(0, t, r);
    e.push(q(n, 1, i));
  }
}
function j2(e) {
  const t = [0];
  return C2(t, e.length - 1), t;
}
function N2(e, t) {
  return e.map((n) => n * t);
}
function O2(e, t) {
  return e.map(() => t || Wg).splice(0, e.length - 1);
}
function ls({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const i = f2(r) ? r.map(Td) : Td(r),
    o = { done: !1, value: t[0] },
    s = N2(n && n.length === t.length ? n : j2(t), e),
    a = ay(s, t, { ease: Array.isArray(i) ? i : O2(t, i) });
  return {
    calculatedDuration: e,
    next: (l) => ((o.value = a(l)), (o.done = l >= e), o),
  };
}
function ly(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const R2 = 5;
function uy(e, t, n) {
  const r = Math.max(t - R2, 0);
  return ly(n - e(r), t - r);
}
const Ma = 0.001,
  A2 = 0.01,
  L2 = 10,
  M2 = 0.05,
  D2 = 1;
function V2({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let i,
    o,
    s = 1 - t;
  (s = on(M2, D2, s)),
    (e = on(A2, L2, kt(e))),
    s < 1
      ? ((i = (u) => {
          const f = u * s,
            c = f * e,
            d = f - n,
            g = Hl(u, s),
            y = Math.exp(-c);
          return Ma - (d / g) * y;
        }),
        (o = (u) => {
          const c = u * s * e,
            d = c * n + n,
            g = Math.pow(s, 2) * Math.pow(u, 2) * e,
            y = Math.exp(-c),
            v = Hl(Math.pow(u, 2), s);
          return ((-i(u) + Ma > 0 ? -1 : 1) * ((d - g) * y)) / v;
        }))
      : ((i = (u) => {
          const f = Math.exp(-u * e),
            c = (u - n) * e + 1;
          return -Ma + f * c;
        }),
        (o = (u) => {
          const f = Math.exp(-u * e),
            c = (n - u) * (e * e);
          return f * c;
        }));
  const a = 5 / e,
    l = I2(i, o, a);
  if (((e = jn(e)), isNaN(l)))
    return { stiffness: 100, damping: 10, duration: e };
  {
    const u = Math.pow(l, 2) * r;
    return { stiffness: u, damping: s * 2 * Math.sqrt(r * u), duration: e };
  }
}
const F2 = 12;
function I2(e, t, n) {
  let r = n;
  for (let i = 1; i < F2; i++) r = r - e(r) / t(r);
  return r;
}
function Hl(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const z2 = ["duration", "bounce"],
  B2 = ["stiffness", "damping", "mass"];
function jd(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function b2(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!jd(e, B2) && jd(e, z2)) {
    const n = V2(e);
    (t = { ...t, ...n, mass: 1 }), (t.isResolvedFromDuration = !0);
  }
  return t;
}
function cy({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const i = e[0],
    o = e[e.length - 1],
    s = { done: !1, value: i },
    {
      stiffness: a,
      damping: l,
      mass: u,
      duration: f,
      velocity: c,
      isResolvedFromDuration: d,
    } = b2({ ...r, velocity: -kt(r.velocity || 0) }),
    g = c || 0,
    y = l / (2 * Math.sqrt(a * u)),
    v = o - i,
    _ = kt(Math.sqrt(a / u)),
    m = Math.abs(v) < 5;
  n || (n = m ? 0.01 : 2), t || (t = m ? 0.005 : 0.5);
  let p;
  if (y < 1) {
    const h = Hl(_, y);
    p = (S) => {
      const E = Math.exp(-y * _ * S);
      return (
        o - E * (((g + y * _ * v) / h) * Math.sin(h * S) + v * Math.cos(h * S))
      );
    };
  } else if (y === 1) p = (h) => o - Math.exp(-_ * h) * (v + (g + _ * v) * h);
  else {
    const h = _ * Math.sqrt(y * y - 1);
    p = (S) => {
      const E = Math.exp(-y * _ * S),
        P = Math.min(h * S, 300);
      return (
        o - (E * ((g + y * _ * v) * Math.sinh(P) + h * v * Math.cosh(P))) / h
      );
    };
  }
  return {
    calculatedDuration: (d && f) || null,
    next: (h) => {
      const S = p(h);
      if (d) s.done = h >= f;
      else {
        let E = g;
        h !== 0 && (y < 1 ? (E = uy(p, h, S)) : (E = 0));
        const P = Math.abs(E) <= n,
          k = Math.abs(o - S) <= t;
        s.done = P && k;
      }
      return (s.value = s.done ? o : S), s;
    },
  };
}
function Nd({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: o = 500,
  modifyTarget: s,
  min: a,
  max: l,
  restDelta: u = 0.5,
  restSpeed: f,
}) {
  const c = e[0],
    d = { done: !1, value: c },
    g = (T) => (a !== void 0 && T < a) || (l !== void 0 && T > l),
    y = (T) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - T) < Math.abs(l - T)
        ? a
        : l;
  let v = n * t;
  const _ = c + v,
    m = s === void 0 ? _ : s(_);
  m !== _ && (v = m - c);
  const p = (T) => -v * Math.exp(-T / r),
    h = (T) => m + p(T),
    S = (T) => {
      const R = p(T),
        A = h(T);
      (d.done = Math.abs(R) <= u), (d.value = d.done ? m : A);
    };
  let E, P;
  const k = (T) => {
    g(d.value) &&
      ((E = T),
      (P = cy({
        keyframes: [d.value, y(d.value)],
        velocity: uy(h, T, d.value),
        damping: i,
        stiffness: o,
        restDelta: u,
        restSpeed: f,
      })));
  };
  return (
    k(0),
    {
      calculatedDuration: null,
      next: (T) => {
        let R = !1;
        return (
          !P && E === void 0 && ((R = !0), S(T), k(T)),
          E !== void 0 && T > E ? P.next(T - E) : (!R && S(T), d)
        );
      },
    }
  );
}
const U2 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => U.update(t, !0),
      stop: () => At(t),
      now: () => (xe.isProcessing ? xe.timestamp : performance.now()),
    };
  },
  Od = 2e4;
function Rd(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < Od; ) (t += n), (r = e.next(t));
  return t >= Od ? 1 / 0 : t;
}
const H2 = { decay: Nd, inertia: Nd, tween: ls, keyframes: ls, spring: cy };
function us({
  autoplay: e = !0,
  delay: t = 0,
  driver: n = U2,
  keyframes: r,
  type: i = "keyframes",
  repeat: o = 0,
  repeatDelay: s = 0,
  repeatType: a = "loop",
  onPlay: l,
  onStop: u,
  onComplete: f,
  onUpdate: c,
  ...d
}) {
  let g = 1,
    y = !1,
    v,
    _;
  const m = () => {
    _ = new Promise((D) => {
      v = D;
    });
  };
  m();
  let p;
  const h = H2[i] || ls;
  let S;
  h !== ls &&
    typeof r[0] != "number" &&
    ((S = ay([0, 100], r, { clamp: !1 })), (r = [0, 100]));
  const E = h({ ...d, keyframes: r });
  let P;
  a === "mirror" &&
    (P = h({
      ...d,
      keyframes: [...r].reverse(),
      velocity: -(d.velocity || 0),
    }));
  let k = "idle",
    T = null,
    R = null,
    A = null;
  E.calculatedDuration === null && o && (E.calculatedDuration = Rd(E));
  const { calculatedDuration: ne } = E;
  let ae = 1 / 0,
    me = 1 / 0;
  ne !== null && ((ae = ne + s), (me = ae * (o + 1) - s));
  let re = 0;
  const st = (D) => {
      if (R === null) return;
      g > 0 && (R = Math.min(R, D)),
        g < 0 && (R = Math.min(D - me / g, R)),
        T !== null ? (re = T) : (re = Math.round(D - R) * g);
      const W = re - t * (g >= 0 ? 1 : -1),
        dn = g >= 0 ? W < 0 : W > me;
      (re = Math.max(W, 0)), k === "finished" && T === null && (re = me);
      let at = re,
        zn = E;
      if (o) {
        const Ys = Math.min(re, me) / ae;
        let zi = Math.floor(Ys),
          hn = Ys % 1;
        !hn && Ys >= 1 && (hn = 1),
          hn === 1 && zi--,
          (zi = Math.min(zi, o + 1)),
          !!(zi % 2) &&
            (a === "reverse"
              ? ((hn = 1 - hn), s && (hn -= s / ae))
              : a === "mirror" && (zn = P)),
          (at = on(0, 1, hn) * ae);
      }
      const De = dn ? { done: !1, value: r[0] } : zn.next(at);
      S && (De.value = S(De.value));
      let { done: pn } = De;
      !dn && ne !== null && (pn = g >= 0 ? re >= me : re <= 0);
      const ov = T === null && (k === "finished" || (k === "running" && pn));
      return c && c(De.value), ov && N(), De;
    },
    ie = () => {
      p && p.stop(), (p = void 0);
    },
    He = () => {
      (k = "idle"), ie(), v(), m(), (R = A = null);
    },
    N = () => {
      (k = "finished"), f && f(), ie(), v();
    },
    M = () => {
      if (y) return;
      p || (p = n(st));
      const D = p.now();
      l && l(),
        T !== null ? (R = D - T) : (!R || k === "finished") && (R = D),
        k === "finished" && m(),
        (A = R),
        (T = null),
        (k = "running"),
        p.start();
    };
  e && M();
  const V = {
    then(D, W) {
      return _.then(D, W);
    },
    get time() {
      return kt(re);
    },
    set time(D) {
      (D = jn(D)),
        (re = D),
        T !== null || !p || g === 0 ? (T = D) : (R = p.now() - D / g);
    },
    get duration() {
      const D = E.calculatedDuration === null ? Rd(E) : E.calculatedDuration;
      return kt(D);
    },
    get speed() {
      return g;
    },
    set speed(D) {
      D === g || !p || ((g = D), (V.time = kt(re)));
    },
    get state() {
      return k;
    },
    play: M,
    pause: () => {
      (k = "paused"), (T = re);
    },
    stop: () => {
      (y = !0), k !== "idle" && ((k = "idle"), u && u(), He());
    },
    cancel: () => {
      A !== null && st(A), He();
    },
    complete: () => {
      k = "finished";
    },
    sample: (D) => ((R = 0), st(D)),
  };
  return V;
}
function $2(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const W2 = $2(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  K2 = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  fo = 10,
  Q2 = 2e4,
  G2 = (e, t) => t.type === "spring" || e === "backgroundColor" || !bg(t.ease);
function Y2(e, t, { onUpdate: n, onComplete: r, ...i }) {
  if (
    !(
      W2() &&
      K2.has(t) &&
      !i.repeatDelay &&
      i.repeatType !== "mirror" &&
      i.damping !== 0 &&
      i.type !== "inertia"
    )
  )
    return !1;
  let s = !1,
    a,
    l,
    u = !1;
  const f = () => {
    l = new Promise((h) => {
      a = h;
    });
  };
  f();
  let { keyframes: c, duration: d = 300, ease: g, times: y } = i;
  if (G2(t, i)) {
    const h = us({ ...i, repeat: 0, delay: 0 });
    let S = { done: !1, value: c[0] };
    const E = [];
    let P = 0;
    for (; !S.done && P < Q2; ) (S = h.sample(P)), E.push(S.value), (P += fo);
    (y = void 0), (c = E), (d = P - fo), (g = "linear");
  }
  const v = i2(e.owner.current, t, c, { ...i, duration: d, ease: g, times: y }),
    _ = () => {
      (u = !1), v.cancel();
    },
    m = () => {
      (u = !0), U.update(_), a(), f();
    };
  return (
    (v.onfinish = () => {
      u || (e.set(o2(c, i)), r && r(), m());
    }),
    {
      then(h, S) {
        return l.then(h, S);
      },
      attachTimeline(h) {
        return (v.timeline = h), (v.onfinish = null), se;
      },
      get time() {
        return kt(v.currentTime || 0);
      },
      set time(h) {
        v.currentTime = jn(h);
      },
      get speed() {
        return v.playbackRate;
      },
      set speed(h) {
        v.playbackRate = h;
      },
      get duration() {
        return kt(d);
      },
      play: () => {
        s || (v.play(), At(_));
      },
      pause: () => v.pause(),
      stop: () => {
        if (((s = !0), v.playState === "idle")) return;
        const { currentTime: h } = v;
        if (h) {
          const S = us({ ...i, autoplay: !1 });
          e.setWithVelocity(S.sample(h - fo).value, S.sample(h).value, fo);
        }
        m();
      },
      complete: () => {
        u || v.finish();
      },
      cancel: m,
    }
  );
}
function X2({ keyframes: e, delay: t, onUpdate: n, onComplete: r }) {
  const i = () => (
    n && n(e[e.length - 1]),
    r && r(),
    {
      time: 0,
      speed: 1,
      duration: 0,
      play: se,
      pause: se,
      stop: se,
      then: (o) => (o(), Promise.resolve()),
      cancel: se,
      complete: se,
    }
  );
  return t
    ? us({ keyframes: [0, 1], duration: 0, delay: t, onComplete: i })
    : i();
}
const q2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  J2 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  Z2 = { type: "keyframes", duration: 0.8 },
  e_ = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  t_ = (e, { keyframes: t }) =>
    t.length > 2
      ? Z2
      : Fn.has(e)
      ? e.startsWith("scale")
        ? J2(t[1])
        : q2
      : e_,
  $l = (e, t) =>
    e === "zIndex"
      ? !1
      : !!(
          typeof t == "number" ||
          Array.isArray(t) ||
          (typeof t == "string" &&
            (sn.test(t) || t === "0") &&
            !t.startsWith("url("))
        ),
  n_ = new Set(["brightness", "contrast", "saturate", "opacity"]);
function r_(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(bs) || [];
  if (!r) return e;
  const i = n.replace(r, "");
  let o = n_.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + i + ")";
}
const i_ = /([a-z-]*)\(.*?\)/g,
  Wl = {
    ...sn,
    getAnimatableNone: (e) => {
      const t = e.match(i_);
      return t ? t.map(r_).join(" ") : e;
    },
  },
  o_ = {
    ...Pg,
    color: Pe,
    backgroundColor: Pe,
    outlineColor: Pe,
    fill: Pe,
    stroke: Pe,
    borderColor: Pe,
    borderTopColor: Pe,
    borderRightColor: Pe,
    borderBottomColor: Pe,
    borderLeftColor: Pe,
    filter: Wl,
    WebkitFilter: Wl,
  },
  Tc = (e) => o_[e];
function fy(e, t) {
  let n = Tc(e);
  return (
    n !== Wl && (n = sn), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const dy = (e) => /^0[^.\s]+$/.test(e);
function s_(e) {
  if (typeof e == "number") return e === 0;
  if (e !== null) return e === "none" || e === "0" || dy(e);
}
function a_(e, t, n, r) {
  const i = $l(t, n);
  let o;
  Array.isArray(n) ? (o = [...n]) : (o = [null, n]);
  const s = r.from !== void 0 ? r.from : e.get();
  let a;
  const l = [];
  for (let u = 0; u < o.length; u++)
    o[u] === null && (o[u] = u === 0 ? s : o[u - 1]),
      s_(o[u]) && l.push(u),
      typeof o[u] == "string" && o[u] !== "none" && o[u] !== "0" && (a = o[u]);
  if (i && l.length && a)
    for (let u = 0; u < l.length; u++) {
      const f = l[u];
      o[f] = fy(t, a);
    }
  return o;
}
function l_({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: i,
  repeat: o,
  repeatType: s,
  repeatDelay: a,
  from: l,
  elapsed: u,
  ...f
}) {
  return !!Object.keys(f).length;
}
function kc(e, t) {
  return e[t] || e.default || e;
}
const u_ = { skipAnimations: !1 },
  Cc =
    (e, t, n, r = {}) =>
    (i) => {
      const o = kc(r, e) || {},
        s = o.delay || r.delay || 0;
      let { elapsed: a = 0 } = r;
      a = a - jn(s);
      const l = a_(t, e, n, o),
        u = l[0],
        f = l[l.length - 1],
        c = $l(e, u),
        d = $l(e, f);
      let g = {
        keyframes: l,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...o,
        delay: -a,
        onUpdate: (y) => {
          t.set(y), o.onUpdate && o.onUpdate(y);
        },
        onComplete: () => {
          i(), o.onComplete && o.onComplete();
        },
      };
      if (
        (l_(o) || (g = { ...g, ...t_(e, g) }),
        g.duration && (g.duration = jn(g.duration)),
        g.repeatDelay && (g.repeatDelay = jn(g.repeatDelay)),
        !c || !d || r2.current || o.type === !1 || u_.skipAnimations)
      )
        return X2(g);
      if (
        !r.isHandoff &&
        t.owner &&
        t.owner.current instanceof HTMLElement &&
        !t.owner.getProps().onUpdate
      ) {
        const y = Y2(t, e, g);
        if (y) return y;
      }
      return us(g);
    };
function cs(e) {
  return !!(Me(e) && e.add);
}
const py = (e) => /^\-?\d*\.?\d+$/.test(e);
function jc(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Nc(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Oc {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return jc(this.subscriptions, t), () => Nc(this.subscriptions, t);
  }
  notify(t, n, r) {
    const i = this.subscriptions.length;
    if (i)
      if (i === 1) this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < i; o++) {
          const s = this.subscriptions[o];
          s && s(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const c_ = (e) => !isNaN(parseFloat(e));
class f_ {
  constructor(t, n = {}) {
    (this.version = "10.18.0"),
      (this.timeDelta = 0),
      (this.lastUpdated = 0),
      (this.canTrackVelocity = !1),
      (this.events = {}),
      (this.updateAndNotify = (r, i = !0) => {
        (this.prev = this.current), (this.current = r);
        const { delta: o, timestamp: s } = xe;
        this.lastUpdated !== s &&
          ((this.timeDelta = o),
          (this.lastUpdated = s),
          U.postRender(this.scheduleVelocityCheck)),
          this.prev !== this.current &&
            this.events.change &&
            this.events.change.notify(this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()),
          i &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.scheduleVelocityCheck = () => U.postRender(this.velocityCheck)),
      (this.velocityCheck = ({ timestamp: r }) => {
        r !== this.lastUpdated &&
          ((this.prev = this.current),
          this.events.velocityChange &&
            this.events.velocityChange.notify(this.getVelocity()));
      }),
      (this.hasAnimated = !1),
      (this.prev = this.current = t),
      (this.canTrackVelocity = c_(this.current)),
      (this.owner = n.owner);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Oc());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            U.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), (this.prev = t), (this.timeDelta = r);
  }
  jump(t) {
    this.updateAndNotify(t),
      (this.prev = t),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    return this.canTrackVelocity
      ? ly(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
      : 0;
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function gr(e, t) {
  return new f_(e, t);
}
const hy = (e) => (t) => t.test(e),
  d_ = { test: (e) => e === "auto", parse: (e) => e },
  my = [In, L, gt, It, wx, vx, d_],
  Ar = (e) => my.find(hy(e)),
  p_ = [...my, Pe, sn],
  h_ = (e) => p_.find(hy(e));
function m_(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, gr(n));
}
function g_(e, t) {
  const n = Hs(e, t);
  let {
    transitionEnd: r = {},
    transition: i = {},
    ...o
  } = n ? e.makeTargetAnimatable(n, !1) : {};
  o = { ...o, ...r };
  for (const s in o) {
    const a = Lx(o[s]);
    m_(e, s, a);
  }
}
function y_(e, t, n) {
  var r, i;
  const o = Object.keys(t).filter((a) => !e.hasValue(a)),
    s = o.length;
  if (s)
    for (let a = 0; a < s; a++) {
      const l = o[a],
        u = t[l];
      let f = null;
      Array.isArray(u) && (f = u[0]),
        f === null &&
          (f =
            (i = (r = n[l]) !== null && r !== void 0 ? r : e.readValue(l)) !==
              null && i !== void 0
              ? i
              : t[l]),
        f != null &&
          (typeof f == "string" && (py(f) || dy(f))
            ? (f = parseFloat(f))
            : !h_(f) && sn.test(u) && (f = fy(l, u)),
          e.addValue(l, gr(f, { owner: e })),
          n[l] === void 0 && (n[l] = f),
          f !== null && e.setBaseTarget(l, f));
    }
}
function v_(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function w_(e, t, n) {
  const r = {};
  for (const i in e) {
    const o = v_(i, t);
    if (o !== void 0) r[i] = o;
    else {
      const s = n.getValue(i);
      s && (r[i] = s.get());
    }
  }
  return r;
}
function S_({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function x_(e, t) {
  const n = e.get();
  if (Array.isArray(t)) {
    for (let r = 0; r < t.length; r++) if (t[r] !== n) return !0;
  } else return n !== t;
}
function gy(e, t, { delay: n = 0, transitionOverride: r, type: i } = {}) {
  let {
    transition: o = e.getDefaultTransition(),
    transitionEnd: s,
    ...a
  } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  r && (o = r);
  const u = [],
    f = i && e.animationState && e.animationState.getState()[i];
  for (const c in a) {
    const d = e.getValue(c),
      g = a[c];
    if (!d || g === void 0 || (f && S_(f, c))) continue;
    const y = { delay: n, elapsed: 0, ...kc(o || {}, c) };
    if (window.HandoffAppearAnimations) {
      const m = e.getProps()[yg];
      if (m) {
        const p = window.HandoffAppearAnimations(m, c, d, U);
        p !== null && ((y.elapsed = p), (y.isHandoff = !0));
      }
    }
    let v = !y.isHandoff && !x_(d, g);
    if (
      (y.type === "spring" && (d.getVelocity() || y.velocity) && (v = !1),
      d.animation && (v = !1),
      v)
    )
      continue;
    d.start(Cc(c, d, g, e.shouldReduceMotion && Fn.has(c) ? { type: !1 } : y));
    const _ = d.animation;
    cs(l) && (l.add(c), _.then(() => l.remove(c))), u.push(_);
  }
  return (
    s &&
      Promise.all(u).then(() => {
        s && g_(e, s);
      }),
    u
  );
}
function Kl(e, t, n = {}) {
  const r = Hs(e, t, n.custom);
  let { transition: i = e.getDefaultTransition() || {} } = r || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = r ? () => Promise.all(gy(e, r, n)) : () => Promise.resolve(),
    s =
      e.variantChildren && e.variantChildren.size
        ? (l = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: f,
              staggerDirection: c,
            } = i;
            return __(e, t, u + l, f, c, n);
          }
        : () => Promise.resolve(),
    { when: a } = i;
  if (a) {
    const [l, u] = a === "beforeChildren" ? [o, s] : [s, o];
    return l().then(() => u());
  } else return Promise.all([o(), s(n.delay)]);
}
function __(e, t, n = 0, r = 0, i = 1, o) {
  const s = [],
    a = (e.variantChildren.size - 1) * r,
    l = i === 1 ? (u = 0) => u * r : (u = 0) => a - u * r;
  return (
    Array.from(e.variantChildren)
      .sort(E_)
      .forEach((u, f) => {
        u.notify("AnimationStart", t),
          s.push(
            Kl(u, t, { ...o, delay: n + l(f) }).then(() =>
              u.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(s)
  );
}
function E_(e, t) {
  return e.sortNodePosition(t);
}
function P_(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const i = t.map((o) => Kl(e, o, n));
    r = Promise.all(i);
  } else if (typeof t == "string") r = Kl(e, t, n);
  else {
    const i = typeof t == "function" ? Hs(e, t, n.custom) : t;
    r = Promise.all(gy(e, i, n));
  }
  return r.then(() => e.notify("AnimationComplete", t));
}
const T_ = [...fc].reverse(),
  k_ = fc.length;
function C_(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => P_(e, n, r)));
}
function j_(e) {
  let t = C_(e);
  const n = O_();
  let r = !0;
  const i = (l, u) => {
    const f = Hs(e, u);
    if (f) {
      const { transition: c, transitionEnd: d, ...g } = f;
      l = { ...l, ...g, ...d };
    }
    return l;
  };
  function o(l) {
    t = l(e);
  }
  function s(l, u) {
    const f = e.getProps(),
      c = e.getVariantContext(!0) || {},
      d = [],
      g = new Set();
    let y = {},
      v = 1 / 0;
    for (let m = 0; m < k_; m++) {
      const p = T_[m],
        h = n[p],
        S = f[p] !== void 0 ? f[p] : c[p],
        E = yi(S),
        P = p === u ? h.isActive : null;
      P === !1 && (v = m);
      let k = S === c[p] && S !== f[p] && E;
      if (
        (k && r && e.manuallyAnimateOnMount && (k = !1),
        (h.protectedKeys = { ...y }),
        (!h.isActive && P === null) ||
          (!S && !h.prevProp) ||
          zs(S) ||
          typeof S == "boolean")
      )
        continue;
      let R =
          N_(h.prevProp, S) ||
          (p === u && h.isActive && !k && E) ||
          (m > v && E),
        A = !1;
      const ne = Array.isArray(S) ? S : [S];
      let ae = ne.reduce(i, {});
      P === !1 && (ae = {});
      const { prevResolvedValues: me = {} } = h,
        re = { ...me, ...ae },
        st = (ie) => {
          (R = !0),
            g.has(ie) && ((A = !0), g.delete(ie)),
            (h.needsAnimating[ie] = !0);
        };
      for (const ie in re) {
        const He = ae[ie],
          N = me[ie];
        if (y.hasOwnProperty(ie)) continue;
        let M = !1;
        ss(He) && ss(N) ? (M = !zg(He, N)) : (M = He !== N),
          M
            ? He !== void 0
              ? st(ie)
              : g.add(ie)
            : He !== void 0 && g.has(ie)
            ? st(ie)
            : (h.protectedKeys[ie] = !0);
      }
      (h.prevProp = S),
        (h.prevResolvedValues = ae),
        h.isActive && (y = { ...y, ...ae }),
        r && e.blockInitialAnimation && (R = !1),
        R &&
          (!k || A) &&
          d.push(
            ...ne.map((ie) => ({ animation: ie, options: { type: p, ...l } }))
          );
    }
    if (g.size) {
      const m = {};
      g.forEach((p) => {
        const h = e.getBaseTarget(p);
        h !== void 0 && (m[p] = h);
      }),
        d.push({ animation: m });
    }
    let _ = !!d.length;
    return (
      r &&
        (f.initial === !1 || f.initial === f.animate) &&
        !e.manuallyAnimateOnMount &&
        (_ = !1),
      (r = !1),
      _ ? t(d) : Promise.resolve()
    );
  }
  function a(l, u, f) {
    var c;
    if (n[l].isActive === u) return Promise.resolve();
    (c = e.variantChildren) === null ||
      c === void 0 ||
      c.forEach((g) => {
        var y;
        return (y = g.animationState) === null || y === void 0
          ? void 0
          : y.setActive(l, u);
      }),
      (n[l].isActive = u);
    const d = s(f, l);
    for (const g in n) n[g].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: s,
    setActive: a,
    setAnimateFunction: o,
    getState: () => n,
  };
}
function N_(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !zg(t, e) : !1;
}
function gn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function O_() {
  return {
    animate: gn(!0),
    whileInView: gn(),
    whileHover: gn(),
    whileTap: gn(),
    whileDrag: gn(),
    whileFocus: gn(),
    exit: gn(),
  };
}
class R_ extends fn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = j_(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), zs(t) && (this.unmount = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {}
}
let A_ = 0;
class L_ extends fn {
  constructor() {
    super(...arguments), (this.id = A_++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const {
        isPresent: t,
        onExitComplete: n,
        custom: r,
      } = this.node.presenceContext,
      { isPresent: i } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === i) return;
    const o = this.node.animationState.setActive("exit", !t, {
      custom: r ?? this.node.getProps().custom,
    });
    n && !t && o.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const M_ = { animation: { Feature: R_ }, exit: { Feature: L_ } },
  Ad = (e, t) => Math.abs(e - t);
function D_(e, t) {
  const n = Ad(e.x, t.x),
    r = Ad(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class yy {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: i, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const c = Va(this.lastMoveEventInfo, this.history),
          d = this.startEvent !== null,
          g = D_(c.offset, { x: 0, y: 0 }) >= 3;
        if (!d && !g) return;
        const { point: y } = c,
          { timestamp: v } = xe;
        this.history.push({ ...y, timestamp: v });
        const { onStart: _, onMove: m } = this.handlers;
        d ||
          (_ && _(this.lastMoveEvent, c),
          (this.startEvent = this.lastMoveEvent)),
          m && m(this.lastMoveEvent, c);
      }),
      (this.handlePointerMove = (c, d) => {
        (this.lastMoveEvent = c),
          (this.lastMoveEventInfo = Da(d, this.transformPagePoint)),
          U.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (c, d) => {
        this.end();
        const { onEnd: g, onSessionEnd: y, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const _ = Va(
          c.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Da(d, this.transformPagePoint),
          this.history
        );
        this.startEvent && g && g(c, _), y && y(c, _);
      }),
      !Mg(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = i || window);
    const s = Us(t),
      a = Da(s, this.transformPagePoint),
      { point: l } = a,
      { timestamp: u } = xe;
    this.history = [{ ...l, timestamp: u }];
    const { onSessionStart: f } = n;
    f && f(t, Va(a, this.history)),
      (this.removeListeners = tn(
        Tt(this.contextWindow, "pointermove", this.handlePointerMove),
        Tt(this.contextWindow, "pointerup", this.handlePointerUp),
        Tt(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), At(this.updatePoint);
  }
}
function Da(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Ld(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Va({ point: e }, t) {
  return {
    point: e,
    delta: Ld(e, vy(t)),
    offset: Ld(e, V_(t)),
    velocity: F_(t, 0.1),
  };
}
function V_(e) {
  return e[0];
}
function vy(e) {
  return e[e.length - 1];
}
function F_(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const i = vy(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > jn(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = kt(i.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const s = { x: (i.x - r.x) / o, y: (i.y - r.y) / o };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Be(e) {
  return e.max - e.min;
}
function Ql(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Md(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = q(t.min, t.max, e.origin)),
    (e.scale = Be(n) / Be(t)),
    (Ql(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = q(n.min, n.max, e.origin) - e.originPoint),
    (Ql(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function qr(e, t, n, r) {
  Md(e.x, t.x, n.x, r ? r.originX : void 0),
    Md(e.y, t.y, n.y, r ? r.originY : void 0);
}
function Dd(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Be(t));
}
function I_(e, t, n) {
  Dd(e.x, t.x, n.x), Dd(e.y, t.y, n.y);
}
function Vd(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Be(t));
}
function Jr(e, t, n) {
  Vd(e.x, t.x, n.x), Vd(e.y, t.y, n.y);
}
function z_(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? q(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? q(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Fd(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function B_(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: Fd(e.x, n, i), y: Fd(e.y, t, r) };
}
function Id(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function b_(e, t) {
  return { x: Id(e.x, t.x), y: Id(e.y, t.y) };
}
function U_(e, t) {
  let n = 0.5;
  const r = Be(e),
    i = Be(t);
  return (
    i > r
      ? (n = wi(t.min, t.max - r, e.min))
      : r > i && (n = wi(e.min, e.max - i, t.min)),
    on(0, 1, n)
  );
}
function H_(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const Gl = 0.35;
function $_(e = Gl) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = Gl),
    { x: zd(e, "left", "right"), y: zd(e, "top", "bottom") }
  );
}
function zd(e, t, n) {
  return { min: Bd(e, t), max: Bd(e, n) };
}
function Bd(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const bd = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  tr = () => ({ x: bd(), y: bd() }),
  Ud = () => ({ min: 0, max: 0 }),
  le = () => ({ x: Ud(), y: Ud() });
function We(e) {
  return [e("x"), e("y")];
}
function wy({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function W_({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function K_(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Fa(e) {
  return e === void 0 || e === 1;
}
function Yl({ scale: e, scaleX: t, scaleY: n }) {
  return !Fa(e) || !Fa(t) || !Fa(n);
}
function wn(e) {
  return Yl(e) || Sy(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Sy(e) {
  return Hd(e.x) || Hd(e.y);
}
function Hd(e) {
  return e && e !== "0%";
}
function fs(e, t, n) {
  const r = e - n,
    i = t * r;
  return n + i;
}
function $d(e, t, n, r, i) {
  return i !== void 0 && (e = fs(e, i, r)), fs(e, n, r) + t;
}
function Xl(e, t = 0, n = 1, r, i) {
  (e.min = $d(e.min, t, n, r, i)), (e.max = $d(e.max, t, n, r, i));
}
function xy(e, { x: t, y: n }) {
  Xl(e.x, t.translate, t.scale, t.originPoint),
    Xl(e.y, n.translate, n.scale, n.originPoint);
}
function Q_(e, t, n, r = !1) {
  const i = n.length;
  if (!i) return;
  t.x = t.y = 1;
  let o, s;
  for (let a = 0; a < i; a++) {
    (o = n[a]), (s = o.projectionDelta);
    const l = o.instance;
    (l && l.style && l.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        nr(e, { x: -o.scroll.offset.x, y: -o.scroll.offset.y }),
      s && ((t.x *= s.x.scale), (t.y *= s.y.scale), xy(e, s)),
      r && wn(o.latestValues) && nr(e, o.latestValues));
  }
  (t.x = Wd(t.x)), (t.y = Wd(t.y));
}
function Wd(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function bt(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Kd(e, t, [n, r, i]) {
  const o = t[i] !== void 0 ? t[i] : 0.5,
    s = q(e.min, e.max, o);
  Xl(e, t[n], t[r], s, t.scale);
}
const G_ = ["x", "scaleX", "originX"],
  Y_ = ["y", "scaleY", "originY"];
function nr(e, t) {
  Kd(e.x, t, G_), Kd(e.y, t, Y_);
}
function _y(e, t) {
  return wy(K_(e.getBoundingClientRect(), t));
}
function X_(e, t, n) {
  const r = _y(e, n),
    { scroll: i } = t;
  return i && (bt(r.x, i.offset.x), bt(r.y, i.offset.y)), r;
}
const Ey = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  q_ = new WeakMap();
class J_ {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = le()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const i = (f) => {
        const { dragSnapToOrigin: c } = this.getProps();
        c ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(Us(f, "page").point);
      },
      o = (f, c) => {
        const { drag: d, dragPropagation: g, onDragStart: y } = this.getProps();
        if (
          d &&
          !g &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = Vg(d)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          We((_) => {
            let m = this.getAxisMotionValue(_).get() || 0;
            if (gt.test(m)) {
              const { projection: p } = this.visualElement;
              if (p && p.layout) {
                const h = p.layout.layoutBox[_];
                h && (m = Be(h) * (parseFloat(m) / 100));
              }
            }
            this.originPoint[_] = m;
          }),
          y && U.update(() => y(f, c), !1, !0);
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      s = (f, c) => {
        const {
          dragPropagation: d,
          dragDirectionLock: g,
          onDirectionLock: y,
          onDrag: v,
        } = this.getProps();
        if (!d && !this.openGlobalLock) return;
        const { offset: _ } = c;
        if (g && this.currentDirection === null) {
          (this.currentDirection = Z_(_)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", c.point, _),
          this.updateAxis("y", c.point, _),
          this.visualElement.render(),
          v && v(f, c);
      },
      a = (f, c) => this.stop(f, c),
      l = () =>
        We((f) => {
          var c;
          return (
            this.getAnimationState(f) === "paused" &&
            ((c = this.getAxisMotionValue(f).animation) === null || c === void 0
              ? void 0
              : c.play())
          );
        }),
      { dragSnapToOrigin: u } = this.getProps();
    this.panSession = new yy(
      t,
      {
        onSessionStart: i,
        onStart: o,
        onMove: s,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: u,
        contextWindow: Ey(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: i } = n;
    this.startAnimation(i);
    const { onDragEnd: o } = this.getProps();
    o && U.update(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: i } = this.getProps();
    if (!r || !po(t, i, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let s = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (s = z_(s, this.constraints[t], this.elastic[t])),
      o.set(s);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      i =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && Zn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && i
      ? (this.constraints = B_(i.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = $_(r)),
      o !== this.constraints &&
        i &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        We((s) => {
          this.getAxisMotionValue(s) &&
            (this.constraints[s] = H_(i.layoutBox[s], this.constraints[s]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Zn(t)) return !1;
    const r = t.current,
      { projection: i } = this.visualElement;
    if (!i || !i.layout) return !1;
    const o = X_(r, i.root, this.visualElement.getTransformPagePoint());
    let s = b_(i.layout.layoutBox, o);
    if (n) {
      const a = n(W_(s));
      (this.hasMutatedConstraints = !!a), a && (s = wy(a));
    }
    return s;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: i,
        dragTransition: o,
        dragSnapToOrigin: s,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      u = We((f) => {
        if (!po(f, n, this.currentDirection)) return;
        let c = (l && l[f]) || {};
        s && (c = { min: 0, max: 0 });
        const d = i ? 200 : 1e6,
          g = i ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[f] : 0,
            bounceStiffness: d,
            bounceDamping: g,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...c,
          };
        return this.startAxisValueAnimation(f, y);
      });
    return Promise.all(u).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Cc(t, r, 0, n));
  }
  stopAnimation() {
    We((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    We((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = "_drag" + t.toUpperCase(),
      r = this.visualElement.getProps(),
      i = r[n];
    return (
      i ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    We((n) => {
      const { drag: r } = this.getProps();
      if (!po(n, r, this.currentDirection)) return;
      const { projection: i } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (i && i.layout) {
        const { min: s, max: a } = i.layout.layoutBox[n];
        o.set(t[n] - q(s, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Zn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const i = { x: 0, y: 0 };
    We((s) => {
      const a = this.getAxisMotionValue(s);
      if (a) {
        const l = a.get();
        i[s] = U_({ min: l, max: l }, this.constraints[s]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      We((s) => {
        if (!po(s, t, null)) return;
        const a = this.getAxisMotionValue(s),
          { min: l, max: u } = this.constraints[s];
        a.set(q(l, u, i[s]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    q_.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Tt(t, "pointerdown", (l) => {
        const { drag: u, dragListener: f = !0 } = this.getProps();
        u && f && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Zn(l) && (this.constraints = this.resolveRefConstraints());
      },
      { projection: i } = this.visualElement,
      o = i.addEventListener("measure", r);
    i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()), r();
    const s = Et(window, "resize", () => this.scalePositionWithinConstraints()),
      a = i.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: u }) => {
          this.isDragging &&
            u &&
            (We((f) => {
              const c = this.getAxisMotionValue(f);
              c &&
                ((this.originPoint[f] += l[f].translate),
                c.set(c.get() + l[f].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      s(), n(), o(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: i = !1,
        dragConstraints: o = !1,
        dragElastic: s = Gl,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: i,
      dragConstraints: o,
      dragElastic: s,
      dragMomentum: a,
    };
  }
}
function po(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Z_(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class eE extends fn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = se),
      (this.removeListeners = se),
      (this.controls = new J_(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || se);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Qd = (e) => (t, n) => {
  e && U.update(() => e(t, n));
};
class tE extends fn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = se);
  }
  onPointerDown(t) {
    this.session = new yy(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Ey(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: i,
    } = this.node.getProps();
    return {
      onSessionStart: Qd(t),
      onStart: Qd(n),
      onMove: r,
      onEnd: (o, s) => {
        delete this.session, i && U.update(() => i(o, s));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Tt(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function nE() {
  const e = j.useContext(Fs);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    i = j.useId();
  return j.useEffect(() => r(i), []), !t && n ? [!1, () => n && n(i)] : [!0];
}
const No = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function Gd(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const Lr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (L.test(e)) e = parseFloat(e);
        else return e;
      const n = Gd(e, t.target.x),
        r = Gd(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  rE = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        i = sn.parse(e);
      if (i.length > 5) return r;
      const o = sn.createTransformer(e),
        s = typeof i[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (i[0 + s] /= a), (i[1 + s] /= l);
      const u = q(a, l, 0.5);
      return (
        typeof i[2 + s] == "number" && (i[2 + s] /= u),
        typeof i[3 + s] == "number" && (i[3 + s] /= u),
        o(i)
      );
    },
  };
class iE extends pt.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: i,
      } = this.props,
      { projection: o } = t;
    fx(oE),
      o &&
        (n.group && n.group.add(o),
        r && r.register && i && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (No.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: i,
        isPresent: o,
      } = this.props,
      s = r.projection;
    return (
      s &&
        ((s.isPresent = o),
        i || t.layoutDependency !== n || n === void 0
          ? s.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? s.promote()
            : s.relegate() ||
              U.postRender(() => {
                const a = s.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      queueMicrotask(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: i } = t;
    i &&
      (i.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(i),
      r && r.deregister && r.deregister(i));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function Py(e) {
  const [t, n] = nE(),
    r = j.useContext(pc);
  return pt.createElement(iE, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: j.useContext(wg),
    isPresent: t,
    safeToRemove: n,
  });
}
const oE = {
    borderRadius: {
      ...Lr,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Lr,
    borderTopRightRadius: Lr,
    borderBottomLeftRadius: Lr,
    borderBottomRightRadius: Lr,
    boxShadow: rE,
  },
  Ty = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  sE = Ty.length,
  Yd = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Xd = (e) => typeof e == "number" || L.test(e);
function aE(e, t, n, r, i, o) {
  i
    ? ((e.opacity = q(0, n.opacity !== void 0 ? n.opacity : 1, lE(r))),
      (e.opacityExit = q(t.opacity !== void 0 ? t.opacity : 1, 0, uE(r))))
    : o &&
      (e.opacity = q(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let s = 0; s < sE; s++) {
    const a = `border${Ty[s]}Radius`;
    let l = qd(t, a),
      u = qd(n, a);
    if (l === void 0 && u === void 0) continue;
    l || (l = 0),
      u || (u = 0),
      l === 0 || u === 0 || Xd(l) === Xd(u)
        ? ((e[a] = Math.max(q(Yd(l), Yd(u), r), 0)),
          (gt.test(u) || gt.test(l)) && (e[a] += "%"))
        : (e[a] = u);
  }
  (t.rotate || n.rotate) && (e.rotate = q(t.rotate || 0, n.rotate || 0, r));
}
function qd(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const lE = ky(0, 0.5, Gg),
  uE = ky(0.5, 0.95, se);
function ky(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(wi(e, t, r)));
}
function Jd(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function $e(e, t) {
  Jd(e.x, t.x), Jd(e.y, t.y);
}
function Zd(e, t, n, r, i) {
  return (
    (e -= t), (e = fs(e, 1 / n, r)), i !== void 0 && (e = fs(e, 1 / i, r)), e
  );
}
function cE(e, t = 0, n = 1, r = 0.5, i, o = e, s = e) {
  if (
    (gt.test(t) &&
      ((t = parseFloat(t)), (t = q(s.min, s.max, t / 100) - s.min)),
    typeof t != "number")
  )
    return;
  let a = q(o.min, o.max, r);
  e === o && (a -= t),
    (e.min = Zd(e.min, t, n, a, i)),
    (e.max = Zd(e.max, t, n, a, i));
}
function ep(e, t, [n, r, i], o, s) {
  cE(e, t[n], t[r], t[i], t.scale, o, s);
}
const fE = ["x", "scaleX", "originX"],
  dE = ["y", "scaleY", "originY"];
function tp(e, t, n, r) {
  ep(e.x, t, fE, n ? n.x : void 0, r ? r.x : void 0),
    ep(e.y, t, dE, n ? n.y : void 0, r ? r.y : void 0);
}
function np(e) {
  return e.translate === 0 && e.scale === 1;
}
function Cy(e) {
  return np(e.x) && np(e.y);
}
function pE(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function jy(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function rp(e) {
  return Be(e.x) / Be(e.y);
}
class hE {
  constructor() {
    this.members = [];
  }
  add(t) {
    jc(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (Nc(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((i) => t === i);
    if (n === 0) return !1;
    let r;
    for (let i = n; i >= 0; i--) {
      const o = this.members[i];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: i } = t.options;
      i === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function ip(e, t, n) {
  let r = "";
  const i = e.x.translate / t.x,
    o = e.y.translate / t.y;
  if (
    ((i || o) && (r = `translate3d(${i}px, ${o}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const { rotate: l, rotateX: u, rotateY: f } = n;
    l && (r += `rotate(${l}deg) `),
      u && (r += `rotateX(${u}deg) `),
      f && (r += `rotateY(${f}deg) `);
  }
  const s = e.x.scale * t.x,
    a = e.y.scale * t.y;
  return (s !== 1 || a !== 1) && (r += `scale(${s}, ${a})`), r || "none";
}
const mE = (e, t) => e.depth - t.depth;
class gE {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    jc(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    Nc(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(mE),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function yE(e, t) {
  const n = performance.now(),
    r = ({ timestamp: i }) => {
      const o = i - n;
      o >= t && (At(r), e(o - t));
    };
  return U.read(r, !0), () => At(r);
}
function vE(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function wE(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function SE(e, t, n) {
  const r = Me(e) ? e : gr(e);
  return r.start(Cc("", r, t, n)), r.animation;
}
const op = ["", "X", "Y", "Z"],
  xE = { visibility: "hidden" },
  sp = 1e3;
let _E = 0;
const Sn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Ny({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i,
}) {
  return class {
    constructor(s = {}, a = t == null ? void 0 : t()) {
      (this.id = _E++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (Sn.totalNodes =
              Sn.resolvedTargetDeltas =
              Sn.recalculatedProjection =
                0),
            this.nodes.forEach(TE),
            this.nodes.forEach(OE),
            this.nodes.forEach(RE),
            this.nodes.forEach(kE),
            vE(Sn);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = s),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new gE());
    }
    addEventListener(s, a) {
      return (
        this.eventHandlers.has(s) || this.eventHandlers.set(s, new Oc()),
        this.eventHandlers.get(s).add(a)
      );
    }
    notifyListeners(s, ...a) {
      const l = this.eventHandlers.get(s);
      l && l.notify(...a);
    }
    hasListeners(s) {
      return this.eventHandlers.has(s);
    }
    mount(s, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = wE(s)), (this.instance = s);
      const { layoutId: l, layout: u, visualElement: f } = this.options;
      if (
        (f && !f.current && f.mount(s),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (u || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let c;
        const d = () => (this.root.updateBlockedByResize = !1);
        e(s, () => {
          (this.root.updateBlockedByResize = !0),
            c && c(),
            (c = yE(d, 250)),
            No.hasAnimatedSinceResize &&
              ((No.hasAnimatedSinceResize = !1), this.nodes.forEach(lp));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          f &&
          (l || u) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: c,
              hasLayoutChanged: d,
              hasRelativeTargetChanged: g,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || f.getDefaultTransition() || VE,
                { onLayoutAnimationStart: _, onLayoutAnimationComplete: m } =
                  f.getProps(),
                p = !this.targetLayout || !jy(this.targetLayout, y) || g,
                h = !d && g;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                h ||
                (d && (p || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(c, h);
                const S = { ...kc(v, "layout"), onPlay: _, onComplete: m };
                (f.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                d || lp(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const s = this.getStack();
      s && s.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        At(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(AE),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: s } = this.options;
      return s && s.getProps().transformTemplate;
    }
    willUpdate(s = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let f = 0; f < this.path.length; f++) {
        const c = this.path[f];
        (c.shouldResetTransform = !0),
          c.updateScroll("snapshot"),
          c.options.layoutRoot && c.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const u = this.getTransformTemplate();
      (this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        s && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ap);
        return;
      }
      this.isUpdating || this.nodes.forEach(jE),
        (this.isUpdating = !1),
        this.nodes.forEach(NE),
        this.nodes.forEach(EE),
        this.nodes.forEach(PE),
        this.clearAllSnapshots();
      const a = performance.now();
      (xe.delta = on(0, 1e3 / 60, a - xe.timestamp)),
        (xe.timestamp = a),
        (xe.isProcessing = !0),
        Ca.update.process(xe),
        Ca.preRender.process(xe),
        Ca.render.process(xe),
        (xe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(CE), this.sharedNodes.forEach(LE);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        U.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      U.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const s = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = le()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          s ? s.layoutBox : void 0
        );
    }
    updateScroll(s = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === s &&
        (a = !1),
        a &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: s,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!i) return;
      const s = this.isLayoutDirty || this.shouldResetTransform,
        a = this.projectionDelta && !Cy(this.projectionDelta),
        l = this.getTransformTemplate(),
        u = l ? l(this.latestValues, "") : void 0,
        f = u !== this.prevTransformTemplateValue;
      s &&
        (a || wn(this.latestValues) || f) &&
        (i(this.instance, u),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(s = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        s && (l = this.removeTransform(l)),
        FE(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: s } = this.options;
      if (!s) return le();
      const a = s.measureViewportBox(),
        { scroll: l } = this.root;
      return l && (bt(a.x, l.offset.x), bt(a.y, l.offset.y)), a;
    }
    removeElementScroll(s) {
      const a = le();
      $e(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l],
          { scroll: f, options: c } = u;
        if (u !== this.root && f && c.layoutScroll) {
          if (f.isRoot) {
            $e(a, s);
            const { scroll: d } = this.root;
            d && (bt(a.x, -d.offset.x), bt(a.y, -d.offset.y));
          }
          bt(a.x, f.offset.x), bt(a.y, f.offset.y);
        }
      }
      return a;
    }
    applyTransform(s, a = !1) {
      const l = le();
      $e(l, s);
      for (let u = 0; u < this.path.length; u++) {
        const f = this.path[u];
        !a &&
          f.options.layoutScroll &&
          f.scroll &&
          f !== f.root &&
          nr(l, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
          wn(f.latestValues) && nr(l, f.latestValues);
      }
      return wn(this.latestValues) && nr(l, this.latestValues), l;
    }
    removeTransform(s) {
      const a = le();
      $e(a, s);
      for (let l = 0; l < this.path.length; l++) {
        const u = this.path[l];
        if (!u.instance || !wn(u.latestValues)) continue;
        Yl(u.latestValues) && u.updateSnapshot();
        const f = le(),
          c = u.measurePageBox();
        $e(f, c),
          tp(a, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, f);
      }
      return wn(this.latestValues) && tp(a, this.latestValues), a;
    }
    setTargetDelta(s) {
      (this.targetDelta = s),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(s) {
      this.options = {
        ...this.options,
        ...s,
        crossfade: s.crossfade !== void 0 ? s.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== xe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(s = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const u = !!this.resumingFrom || this !== l;
      if (
        !(
          s ||
          (u && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: c, layoutId: d } = this.options;
      if (!(!this.layout || !(c || d))) {
        if (
          ((this.resolvedRelativeTargetAt = xe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const g = this.getClosestProjectingParent();
          g && g.layout && this.animationProgress !== 1
            ? ((this.relativeParent = g),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = le()),
              (this.relativeTargetOrigin = le()),
              Jr(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                g.layout.layoutBox
              ),
              $e(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = le()), (this.targetWithTransforms = le())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                I_(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : $e(this.target, this.layout.layoutBox),
                xy(this.target, this.targetDelta))
              : $e(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const g = this.getClosestProjectingParent();
            g &&
            !!g.resumingFrom == !!this.resumingFrom &&
            !g.options.layoutScroll &&
            g.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = g),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = le()),
                (this.relativeTargetOrigin = le()),
                Jr(this.relativeTargetOrigin, this.target, g.target),
                $e(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          Sn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Yl(this.parent.latestValues) ||
          Sy(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var s;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let u = !0;
      if (
        ((this.isProjectionDirty ||
          (!((s = this.parent) === null || s === void 0) &&
            s.isProjectionDirty)) &&
          (u = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (u = !1),
        this.resolvedRelativeTargetAt === xe.timestamp && (u = !1),
        u)
      )
        return;
      const { layout: f, layoutId: c } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(f || c))
      )
        return;
      $e(this.layoutCorrected, this.layout.layoutBox);
      const d = this.treeScale.x,
        g = this.treeScale.y;
      Q_(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          (a.target = a.layout.layoutBox);
      const { target: y } = a;
      if (!y) {
        this.projectionTransform &&
          ((this.projectionDelta = tr()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = tr()),
        (this.projectionDeltaWithTransform = tr()));
      const v = this.projectionTransform;
      qr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.projectionTransform = ip(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== d ||
          this.treeScale.y !== g) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        Sn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(s = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), s)) {
        const a = this.getStack();
        a && a.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(s, a = !1) {
      const l = this.snapshot,
        u = l ? l.latestValues : {},
        f = { ...this.latestValues },
        c = tr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const d = le(),
        g = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        v = g !== y,
        _ = this.getStack(),
        m = !_ || _.members.length <= 1,
        p = !!(v && !m && this.options.crossfade === !0 && !this.path.some(DE));
      this.animationProgress = 0;
      let h;
      (this.mixTargetDelta = (S) => {
        const E = S / 1e3;
        up(c.x, s.x, E),
          up(c.y, s.y, E),
          this.setTargetDelta(c),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Jr(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            ME(this.relativeTarget, this.relativeTargetOrigin, d, E),
            h && pE(this.relativeTarget, h) && (this.isProjectionDirty = !1),
            h || (h = le()),
            $e(h, this.relativeTarget)),
          v &&
            ((this.animationValues = f), aE(f, u, this.latestValues, E, p, m)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = E);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(s) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (At(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = U.update(() => {
          (No.hasAnimatedSinceResize = !0),
            (this.currentAnimation = SE(0, sp, {
              ...s,
              onUpdate: (a) => {
                this.mixTargetDelta(a), s.onUpdate && s.onUpdate(a);
              },
              onComplete: () => {
                s.onComplete && s.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const s = this.getStack();
      s && s.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(sp),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const s = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: u,
        latestValues: f,
      } = s;
      if (!(!a || !l || !u)) {
        if (
          this !== s &&
          this.layout &&
          u &&
          Oy(this.options.animationType, this.layout.layoutBox, u.layoutBox)
        ) {
          l = this.target || le();
          const c = Be(this.layout.layoutBox.x);
          (l.x.min = s.target.x.min), (l.x.max = l.x.min + c);
          const d = Be(this.layout.layoutBox.y);
          (l.y.min = s.target.y.min), (l.y.max = l.y.min + d);
        }
        $e(a, l),
          nr(a, f),
          qr(this.projectionDeltaWithTransform, this.layoutCorrected, a, f);
      }
    }
    registerSharedNode(s, a) {
      this.sharedNodes.has(s) || this.sharedNodes.set(s, new hE()),
        this.sharedNodes.get(s).add(a);
      const u = a.options.initialPromotionConfig;
      a.promote({
        transition: u ? u.transition : void 0,
        preserveFollowOpacity:
          u && u.shouldPreserveFollowOpacity
            ? u.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const s = this.getStack();
      return s ? s.lead === this : !0;
    }
    getLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? ((s = this.getStack()) === null || s === void 0 ? void 0 : s.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var s;
      const { layoutId: a } = this.options;
      return a
        ? (s = this.getStack()) === null || s === void 0
          ? void 0
          : s.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: s } = this.options;
      if (s) return this.root.sharedNodes.get(s);
    }
    promote({ needsReset: s, transition: a, preserveFollowOpacity: l } = {}) {
      const u = this.getStack();
      u && u.promote(this, l),
        s && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const s = this.getStack();
      return s ? s.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: s } = this.options;
      if (!s) return;
      let a = !1;
      const { latestValues: l } = s;
      if (((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (a = !0), !a))
        return;
      const u = {};
      for (let f = 0; f < op.length; f++) {
        const c = "rotate" + op[f];
        l[c] && ((u[c] = l[c]), s.setStaticValue(c, 0));
      }
      s.render();
      for (const f in u) s.setStaticValue(f, u[f]);
      s.scheduleRender();
    }
    getProjectionStyles(s) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return xE;
      const u = { visibility: "" },
        f = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (u.opacity = ""),
          (u.pointerEvents = jo(s == null ? void 0 : s.pointerEvents) || ""),
          (u.transform = f ? f(this.latestValues, "") : "none"),
          u
        );
      const c = this.getLead();
      if (!this.projectionDelta || !this.layout || !c.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = jo(s == null ? void 0 : s.pointerEvents) || "")),
          this.hasProjected &&
            !wn(this.latestValues) &&
            ((v.transform = f ? f({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const d = c.animationValues || c.latestValues;
      this.applyTransformsToTarget(),
        (u.transform = ip(
          this.projectionDeltaWithTransform,
          this.treeScale,
          d
        )),
        f && (u.transform = f(d, u.transform));
      const { x: g, y } = this.projectionDelta;
      (u.transformOrigin = `${g.origin * 100}% ${y.origin * 100}% 0`),
        c.animationValues
          ? (u.opacity =
              c === this
                ? (l =
                    (a = d.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : d.opacityExit)
          : (u.opacity =
              c === this
                ? d.opacity !== void 0
                  ? d.opacity
                  : ""
                : d.opacityExit !== void 0
                ? d.opacityExit
                : 0);
      for (const v in is) {
        if (d[v] === void 0) continue;
        const { correct: _, applyTo: m } = is[v],
          p = u.transform === "none" ? d[v] : _(d[v], c);
        if (m) {
          const h = m.length;
          for (let S = 0; S < h; S++) u[m[S]] = p;
        } else u[v] = p;
      }
      return (
        this.options.layoutId &&
          (u.pointerEvents =
            c === this
              ? jo(s == null ? void 0 : s.pointerEvents) || ""
              : "none"),
        u
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((s) => {
        var a;
        return (a = s.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(ap),
        this.root.sharedNodes.clear();
    }
  };
}
function EE(e) {
  e.updateLayout();
}
function PE(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: i } = e.layout,
      { animationType: o } = e.options,
      s = n.source !== e.layout.source;
    o === "size"
      ? We((c) => {
          const d = s ? n.measuredBox[c] : n.layoutBox[c],
            g = Be(d);
          (d.min = r[c].min), (d.max = d.min + g);
        })
      : Oy(o, n.layoutBox, r) &&
        We((c) => {
          const d = s ? n.measuredBox[c] : n.layoutBox[c],
            g = Be(r[c]);
          (d.max = d.min + g),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[c].max = e.relativeTarget[c].min + g));
        });
    const a = tr();
    qr(a, r, n.layoutBox);
    const l = tr();
    s ? qr(l, e.applyTransform(i, !0), n.measuredBox) : qr(l, r, n.layoutBox);
    const u = !Cy(a);
    let f = !1;
    if (!e.resumeFrom) {
      const c = e.getClosestProjectingParent();
      if (c && !c.resumeFrom) {
        const { snapshot: d, layout: g } = c;
        if (d && g) {
          const y = le();
          Jr(y, n.layoutBox, d.layoutBox);
          const v = le();
          Jr(v, r, g.layoutBox),
            jy(y, v) || (f = !0),
            c.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = c));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: u,
      hasRelativeTargetChanged: f,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function TE(e) {
  Sn.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function kE(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function CE(e) {
  e.clearSnapshot();
}
function ap(e) {
  e.clearMeasurements();
}
function jE(e) {
  e.isLayoutDirty = !1;
}
function NE(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function lp(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function OE(e) {
  e.resolveTargetDelta();
}
function RE(e) {
  e.calcProjection();
}
function AE(e) {
  e.resetRotation();
}
function LE(e) {
  e.removeLeadSnapshot();
}
function up(e, t, n) {
  (e.translate = q(t.translate, 0, n)),
    (e.scale = q(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function cp(e, t, n, r) {
  (e.min = q(t.min, n.min, r)), (e.max = q(t.max, n.max, r));
}
function ME(e, t, n, r) {
  cp(e.x, t.x, n.x, r), cp(e.y, t.y, n.y, r);
}
function DE(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const VE = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  fp = (e) =>
    typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e),
  dp = fp("applewebkit/") && !fp("chrome/") ? Math.round : se;
function pp(e) {
  (e.min = dp(e.min)), (e.max = dp(e.max));
}
function FE(e) {
  pp(e.x), pp(e.y);
}
function Oy(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Ql(rp(t), rp(n), 0.2))
  );
}
const IE = Ny({
    attachResizeListener: (e, t) => Et(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Ia = { current: void 0 },
  Ry = Ny({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!Ia.current) {
        const e = new IE({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Ia.current = e);
      }
      return Ia.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  zE = {
    pan: { Feature: tE },
    drag: { Feature: eE, ProjectionNode: Ry, MeasureLayout: Py },
  },
  BE = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function bE(e) {
  const t = BE.exec(e);
  if (!t) return [,];
  const [, n, r] = t;
  return [n, r];
}
function ql(e, t, n = 1) {
  const [r, i] = bE(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const s = o.trim();
    return py(s) ? parseFloat(s) : s;
  } else return Bl(i) ? ql(i, t, n + 1) : i;
}
function UE(e, { ...t }, n) {
  const r = e.current;
  if (!(r instanceof Element)) return { target: t, transitionEnd: n };
  n && (n = { ...n }),
    e.values.forEach((i) => {
      const o = i.get();
      if (!Bl(o)) return;
      const s = ql(o, r);
      s && i.set(s);
    });
  for (const i in t) {
    const o = t[i];
    if (!Bl(o)) continue;
    const s = ql(o, r);
    s && ((t[i] = s), n || (n = {}), n[i] === void 0 && (n[i] = o));
  }
  return { target: t, transitionEnd: n };
}
const HE = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  Ay = (e) => HE.has(e),
  $E = (e) => Object.keys(e).some(Ay),
  hp = (e) => e === In || e === L,
  mp = (e, t) => parseFloat(e.split(", ")[t]),
  gp =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const i = r.match(/^matrix3d\((.+)\)$/);
      if (i) return mp(i[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/);
        return o ? mp(o[1], e) : 0;
      }
    },
  WE = new Set(["x", "y", "z"]),
  KE = Li.filter((e) => !WE.has(e));
function QE(e) {
  const t = [];
  return (
    KE.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t.length && e.render(),
    t
  );
}
const yr = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: gp(4, 13),
  y: gp(5, 14),
};
yr.translateX = yr.x;
yr.translateY = yr.y;
const GE = (e, t, n) => {
    const r = t.measureViewportBox(),
      i = t.current,
      o = getComputedStyle(i),
      { display: s } = o,
      a = {};
    s === "none" && t.setStaticValue("display", e.display || "block"),
      n.forEach((u) => {
        a[u] = yr[u](r, o);
      }),
      t.render();
    const l = t.measureViewportBox();
    return (
      n.forEach((u) => {
        const f = t.getValue(u);
        f && f.jump(a[u]), (e[u] = yr[u](l, o));
      }),
      e
    );
  },
  YE = (e, t, n = {}, r = {}) => {
    (t = { ...t }), (r = { ...r });
    const i = Object.keys(t).filter(Ay);
    let o = [],
      s = !1;
    const a = [];
    if (
      (i.forEach((l) => {
        const u = e.getValue(l);
        if (!e.hasValue(l)) return;
        let f = n[l],
          c = Ar(f);
        const d = t[l];
        let g;
        if (ss(d)) {
          const y = d.length,
            v = d[0] === null ? 1 : 0;
          (f = d[v]), (c = Ar(f));
          for (let _ = v; _ < y && d[_] !== null; _++)
            g ? xc(Ar(d[_]) === g) : (g = Ar(d[_]));
        } else g = Ar(d);
        if (c !== g)
          if (hp(c) && hp(g)) {
            const y = u.get();
            typeof y == "string" && u.set(parseFloat(y)),
              typeof d == "string"
                ? (t[l] = parseFloat(d))
                : Array.isArray(d) && g === L && (t[l] = d.map(parseFloat));
          } else
            c != null &&
            c.transform &&
            g != null &&
            g.transform &&
            (f === 0 || d === 0)
              ? f === 0
                ? u.set(g.transform(f))
                : (t[l] = c.transform(d))
              : (s || ((o = QE(e)), (s = !0)),
                a.push(l),
                (r[l] = r[l] !== void 0 ? r[l] : t[l]),
                u.jump(d));
      }),
      a.length)
    ) {
      const l = a.indexOf("height") >= 0 ? window.pageYOffset : null,
        u = GE(t, e, a);
      return (
        o.length &&
          o.forEach(([f, c]) => {
            e.getValue(f).set(c);
          }),
        e.render(),
        Is && l !== null && window.scrollTo({ top: l }),
        { target: u, transitionEnd: r }
      );
    } else return { target: t, transitionEnd: r };
  };
function XE(e, t, n, r) {
  return $E(t) ? YE(e, t, n, r) : { target: t, transitionEnd: r };
}
const qE = (e, t, n, r) => {
    const i = UE(e, t, r);
    return (t = i.target), (r = i.transitionEnd), XE(e, t, n, r);
  },
  Jl = { current: null },
  Ly = { current: !1 };
function JE() {
  if (((Ly.current = !0), !!Is))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Jl.current = e.matches);
      e.addListener(t), t();
    } else Jl.current = !1;
}
function ZE(e, t, n) {
  const { willChange: r } = t;
  for (const i in t) {
    const o = t[i],
      s = n[i];
    if (Me(o)) e.addValue(i, o), cs(r) && r.add(i);
    else if (Me(s)) e.addValue(i, gr(o, { owner: e })), cs(r) && r.remove(i);
    else if (s !== o)
      if (e.hasValue(i)) {
        const a = e.getValue(i);
        !a.hasAnimated && a.set(o);
      } else {
        const a = e.getStaticValue(i);
        e.addValue(i, gr(a !== void 0 ? a : o, { owner: e }));
      }
  }
  for (const i in n) t[i] === void 0 && e.removeValue(i);
  return t;
}
const yp = new WeakMap(),
  My = Object.keys(vi),
  eP = My.length,
  vp = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  tP = dc.length;
class nP {
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: i,
      visualState: o,
    },
    s = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => U.render(this.render, !1, !0));
    const { latestValues: a, renderState: l } = o;
    (this.latestValues = a),
      (this.baseTarget = { ...a }),
      (this.initialValues = n.initial ? { ...a } : {}),
      (this.renderState = l),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = i),
      (this.options = s),
      (this.isControllingVariants = Bs(n)),
      (this.isVariantNode = vg(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: u, ...f } = this.scrapeMotionValuesFromProps(n, {});
    for (const c in f) {
      const d = f[c];
      a[c] !== void 0 && Me(d) && (d.set(a[c], !1), cs(u) && u.add(c));
    }
  }
  scrapeMotionValuesFromProps(t, n) {
    return {};
  }
  mount(t) {
    (this.current = t),
      yp.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Ly.current || JE(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Jl.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    yp.delete(this.current),
      this.projection && this.projection.unmount(),
      At(this.notifyUpdate),
      At(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Fn.has(t),
      i = n.on("change", (s) => {
        (this.latestValues[t] = s),
          this.props.onUpdate && U.update(this.notifyUpdate, !1, !0),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      i(), o();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...n }, r, i, o) {
    let s, a;
    for (let l = 0; l < eP; l++) {
      const u = My[l],
        {
          isEnabled: f,
          Feature: c,
          ProjectionNode: d,
          MeasureLayout: g,
        } = vi[u];
      d && (s = d),
        f(n) &&
          (!this.features[u] && c && (this.features[u] = new c(this)),
          g && (a = g));
    }
    if (
      (this.type === "html" || this.type === "svg") &&
      !this.projection &&
      s
    ) {
      this.projection = new s(
        this.latestValues,
        this.parent && this.parent.projection
      );
      const {
        layoutId: l,
        layout: u,
        drag: f,
        dragConstraints: c,
        layoutScroll: d,
        layoutRoot: g,
      } = n;
      this.projection.setOptions({
        layoutId: l,
        layout: u,
        alwaysMeasureLayout: !!f || (c && Zn(c)),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        animationType: typeof u == "string" ? u : "both",
        initialPromotionConfig: o,
        layoutScroll: d,
        layoutRoot: g,
      });
    }
    return a;
  }
  updateFeatures() {
    for (const t in this.features) {
      const n = this.features[t];
      n.isMounted ? n.update() : (n.mount(), (n.isMounted = !0));
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : le();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  makeTargetAnimatable(t, n = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, n);
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < vp.length; r++) {
      const i = vp[r];
      this.propEventSubscriptions[i] &&
        (this.propEventSubscriptions[i](),
        delete this.propEventSubscriptions[i]);
      const o = t["on" + i];
      o && (this.propEventSubscriptions[i] = this.on(i, o));
    }
    (this.prevMotionValues = ZE(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < tP; r++) {
      const i = dc[r],
        o = this.props[i];
      (yi(o) || o === !1) && (n[i] = o);
    }
    return n;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    n !== this.values.get(t) &&
      (this.removeValue(t), this.bindToMotionValue(t, n)),
      this.values.set(t, n),
      (this.latestValues[t] = n.get());
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = gr(n, { owner: this })), this.addValue(t, r)),
      r
    );
  }
  readValue(t) {
    var n;
    return this.latestValues[t] !== void 0 || !this.current
      ? this.latestValues[t]
      : (n = this.getBaseTargetFromProps(this.props, t)) !== null &&
        n !== void 0
      ? n
      : this.readValueFromInstance(this.current, t, this.options);
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props,
      i =
        typeof r == "string" || typeof r == "object"
          ? (n = Sc(this.props, r)) === null || n === void 0
            ? void 0
            : n[t]
          : void 0;
    if (r && i !== void 0) return i;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !Me(o)
      ? o
      : this.initialValues[t] !== void 0 && i === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Oc()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Dy extends nP {
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  makeTargetAnimatableFromInstance(
    { transition: t, transitionEnd: n, ...r },
    { transformValues: i },
    o
  ) {
    let s = w_(r, t || {}, this);
    if ((i && (n && (n = i(n)), r && (r = i(r)), s && (s = i(s))), o)) {
      y_(this, r, s);
      const a = qE(this, r, s, n);
      (n = a.transitionEnd), (r = a.target);
    }
    return { transition: t, transitionEnd: n, ...r };
  }
}
function rP(e) {
  return window.getComputedStyle(e);
}
class iP extends Dy {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (Fn.has(n)) {
      const r = Tc(n);
      return (r && r.default) || 0;
    } else {
      const r = rP(t),
        i = (_g(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof i == "string" ? i.trim() : i;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return _y(t, n);
  }
  build(t, n, r, i) {
    mc(t, n, r, i.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n) {
    return wc(t, n);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Me(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, i) {
    jg(t, n, r, i);
  }
}
class oP extends Dy {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Fn.has(n)) {
      const r = Tc(n);
      return (r && r.default) || 0;
    }
    return (n = Ng.has(n) ? n : cc(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return le();
  }
  scrapeMotionValuesFromProps(t, n) {
    return Rg(t, n);
  }
  build(t, n, r, i) {
    yc(t, n, r, this.isSVGTag, i.transformTemplate);
  }
  renderInstance(t, n, r, i) {
    Og(t, n, r, i);
  }
  mount(t) {
    (this.isSVGTag = vc(t.tagName)), super.mount(t);
  }
}
const sP = (e, t) =>
    hc(e)
      ? new oP(t, { enableHardwareAcceleration: !1 })
      : new iP(t, { enableHardwareAcceleration: !0 }),
  aP = { layout: { ProjectionNode: Ry, MeasureLayout: Py } },
  lP = { ...M_, ...e2, ...zE, ...aP },
  uP = ux((e, t) => bx(e, t, lP, sP));
function Vy() {
  const e = j.useRef(!1);
  return (
    uc(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function cP() {
  const e = Vy(),
    [t, n] = j.useState(0),
    r = j.useCallback(() => {
      e.current && n(t + 1);
    }, [t]);
  return [j.useCallback(() => U.postRender(r), [r]), t];
}
class fP extends j.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function dP({ children: e, isPresent: t }) {
  const n = j.useId(),
    r = j.useRef(null),
    i = j.useRef({ width: 0, height: 0, top: 0, left: 0 });
  return (
    j.useInsertionEffect(() => {
      const { width: o, height: s, top: a, left: l } = i.current;
      if (t || !r.current || !o || !s) return;
      r.current.dataset.motionPopId = n;
      const u = document.createElement("style");
      return (
        document.head.appendChild(u),
        u.sheet &&
          u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${s}px !important;
            top: ${a}px !important;
            left: ${l}px !important;
          }
        `),
        () => {
          document.head.removeChild(u);
        }
      );
    }, [t]),
    j.createElement(
      fP,
      { isPresent: t, childRef: r, sizeRef: i },
      j.cloneElement(e, { ref: r })
    )
  );
}
const za = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: o,
  mode: s,
}) => {
  const a = Ag(pP),
    l = j.useId(),
    u = j.useMemo(
      () => ({
        id: l,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: (f) => {
          a.set(f, !0);
          for (const c of a.values()) if (!c) return;
          r && r();
        },
        register: (f) => (a.set(f, !1), () => a.delete(f)),
      }),
      o ? void 0 : [n]
    );
  return (
    j.useMemo(() => {
      a.forEach((f, c) => a.set(c, !1));
    }, [n]),
    j.useEffect(() => {
      !n && !a.size && r && r();
    }, [n]),
    s === "popLayout" && (e = j.createElement(dP, { isPresent: n }, e)),
    j.createElement(Fs.Provider, { value: u }, e)
  );
};
function pP() {
  return new Map();
}
function hP(e) {
  return j.useEffect(() => () => e(), []);
}
const xn = (e) => e.key || "";
function mP(e, t) {
  e.forEach((n) => {
    const r = xn(n);
    t.set(r, n);
  });
}
function gP(e) {
  const t = [];
  return (
    j.Children.forEach(e, (n) => {
      j.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const yP = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    exitBeforeEnter: i,
    presenceAffectsLayout: o = !0,
    mode: s = "sync",
  }) => {
    const a = j.useContext(pc).forceRender || cP()[0],
      l = Vy(),
      u = gP(e);
    let f = u;
    const c = j.useRef(new Map()).current,
      d = j.useRef(f),
      g = j.useRef(new Map()).current,
      y = j.useRef(!0);
    if (
      (uc(() => {
        (y.current = !1), mP(u, g), (d.current = f);
      }),
      hP(() => {
        (y.current = !0), g.clear(), c.clear();
      }),
      y.current)
    )
      return j.createElement(
        j.Fragment,
        null,
        f.map((p) =>
          j.createElement(
            za,
            {
              key: xn(p),
              isPresent: !0,
              initial: n ? void 0 : !1,
              presenceAffectsLayout: o,
              mode: s,
            },
            p
          )
        )
      );
    f = [...f];
    const v = d.current.map(xn),
      _ = u.map(xn),
      m = v.length;
    for (let p = 0; p < m; p++) {
      const h = v[p];
      _.indexOf(h) === -1 && !c.has(h) && c.set(h, void 0);
    }
    return (
      s === "wait" && c.size && (f = []),
      c.forEach((p, h) => {
        if (_.indexOf(h) !== -1) return;
        const S = g.get(h);
        if (!S) return;
        const E = v.indexOf(h);
        let P = p;
        if (!P) {
          const k = () => {
            c.delete(h);
            const T = Array.from(g.keys()).filter((R) => !_.includes(R));
            if (
              (T.forEach((R) => g.delete(R)),
              (d.current = u.filter((R) => {
                const A = xn(R);
                return A === h || T.includes(A);
              })),
              !c.size)
            ) {
              if (l.current === !1) return;
              a(), r && r();
            }
          };
          (P = j.createElement(
            za,
            {
              key: xn(S),
              isPresent: !1,
              onExitComplete: k,
              custom: t,
              presenceAffectsLayout: o,
              mode: s,
            },
            S
          )),
            c.set(h, P);
        }
        f.splice(E, 0, P);
      }),
      (f = f.map((p) => {
        const h = p.key;
        return c.has(h)
          ? p
          : j.createElement(
              za,
              { key: xn(p), isPresent: !0, presenceAffectsLayout: o, mode: s },
              p
            );
      })),
      j.createElement(
        j.Fragment,
        null,
        c.size ? f : f.map((p) => j.cloneElement(p))
      )
    );
  },
  vP = ({ projectItems: e }) =>
    w.jsx(w.Fragment, {
      children: e.map((t) => {
        const {
          id: n,
          img: r,
          category: i,
          title: o,
          description: s,
          url: a,
        } = t;
        return w.jsxs(
          uP.div,
          {
            layout: !0,
            animate: { opacity: 1, scale: 1 },
            initial: { opacity: 0.8, scale: 0.6 },
            exit: { opacity: 0.8, scale: 0.6 },
            transition: { duration: 0.3 },
            className: "portfolio__items card card-two",
            children: [
              w.jsx("div", {
                className: "portfolio__img-wrapper",
                children: w.jsx("img", {
                  src: r,
                  alt: "",
                  className: "portfolio__img",
                }),
              }),
              w.jsx("span", {
                className: "portfolio__category text-cs",
                children: i,
              }),
              w.jsx("h3", { className: "portfolio__title", children: o }),
              w.jsx("p", { className: "portfolio__description", children: s }),
              w.jsxs(gi, {
                className: "btn pricing__btn text-cs",
                to: `${a}`,
                spy: !0,
                hashSpy: !0,
                smooth: !0,
                offset: -150,
                duration: 500,
                children: [
                  "Git Repositroy",
                  w.jsx(L1, { className: "pricing__btn-icon" }),
                ],
              }),
              w.jsx("img", { src: zl, alt: "", className: "shape c__shape" }),
            ],
          },
          n
        );
      }),
    }),
  Fy = ["all", ...new Set(ko.map((e) => e.category))];
console.log(Fy);
const wP = () => {
    const [e, t] = j.useState(ko),
      [n, r] = j.useState(Fy),
      i = (o) => {
        if (o === "all") {
          t(ko);
          return;
        }
        const s = ko.filter((a) => a.category === o);
        t(s);
      };
    return w.jsxs("section", {
      className: "portfolio section",
      id: "work",
      children: [
        w.jsx("h2", {
          className: "section__title text-cs",
          children: "Projects",
        }),
        w.jsxs("p", {
          className: "section__subtitle",
          children: ["My ", w.jsx("span", { children: "Portfolio" })],
        }),
        w.jsx(ZS, { list: n, filterItems: i }),
        w.jsx("div", {
          className: "portfolio__container container grid",
          children: w.jsx(yP, {
            initial: !1,
            children: w.jsx(vP, { projectItems: e }),
          }),
        }),
        w.jsx("div", {
          className: "section__deco deco__right",
          children: w.jsx("img", { src: Mn, alt: "", className: "shape" }),
        }),
        w.jsx("div", {
          className: "section__bg-wrapper",
          children: w.jsx("span", {
            className: "bg__title",
            children: "Portfolio",
          }),
        }),
      ],
    });
  },
  wp = (e) => {
    const [t, n] = j.useState(!1);
    return w.jsxs("div", {
      className: "resume__item",
      children: [
        w.jsxs("div", {
          className: "resume__header",
          onClick: () => n(!t),
          children: [
            w.jsx("h3", { className: "resume__subtitle", children: e.title }),
            w.jsx("span", {
              className: "resume__icon",
              children: t ? "-" : "+",
            }),
          ],
        }),
        w.jsxs("div", {
          className: `${t ? "show-content" : ""} resume__content`,
          children: [
            w.jsxs("div", {
              className: "resume__date-title",
              children: [
                w.jsx("h3", {
                  className: "resume__title",
                  children: e.subtitle,
                }),
                w.jsx("span", {
                  className: "resume__date text-cs",
                  children: e.date,
                }),
              ],
            }),
            w.jsx("p", {
              className: "resume__description",
              children: e.description,
            }),
          ],
        }),
      ],
    });
  },
  SP = () =>
    w.jsxs("section", {
      className: "resume section",
      id: "resume",
      children: [
        w.jsx("h2", {
          className: "section__title text-cs",
          children: "Resume",
        }),
        w.jsxs("p", {
          className: "section__subtitle",
          children: ["My ", w.jsx("span", { children: "Story" })],
        }),
        w.jsxs("div", {
          className: "resume__container container grid",
          children: [
            w.jsxs("div", {
              className: "resume__group",
              children: [
                w.jsx("h3", {
                  className: "resume__heading",
                  children: "Education",
                }),
                w.jsx("div", {
                  className: "resume__items",
                  children: Yf.map((e, t) => {
                    if (e.category === "education")
                      return w.jsx(
                        wp,
                        {
                          title: e.title,
                          subtitle: e.subtitle,
                          date: e.date,
                          description: e.description,
                        },
                        t
                      );
                  }),
                }),
              ],
            }),
            w.jsxs("div", {
              className: "resume__group",
              children: [
                w.jsx("h3", {
                  className: "resume__heading",
                  children: "Experience",
                }),
                w.jsx("div", {
                  className: "resume__items",
                  children: Yf.map((e, t) => {
                    if (e.category === "experience")
                      return w.jsx(
                        wp,
                        {
                          title: e.title,
                          subtitle: e.subtitle,
                          date: e.date,
                          description: e.description,
                        },
                        t
                      );
                  }),
                }),
              ],
            }),
          ],
        }),
        w.jsx("div", {
          className: "section__deco deco__left",
          children: w.jsx("img", { src: Mn, alt: "", className: "shape" }),
        }),
        w.jsx("div", {
          className: "section__bg-wrapper",
          children: w.jsx("span", {
            className: "bg__title",
            children: "History",
          }),
        }),
      ],
    });
function Iy(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: xP } = Object.prototype,
  { getPrototypeOf: Rc } = Object,
  $s = ((e) => (t) => {
    const n = xP.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  vt = (e) => ((e = e.toLowerCase()), (t) => $s(t) === e),
  Ws = (e) => (t) => typeof t === e,
  { isArray: Er } = Array,
  Si = Ws("undefined");
function _P(e) {
  return (
    e !== null &&
    !Si(e) &&
    e.constructor !== null &&
    !Si(e.constructor) &&
    Xe(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const zy = vt("ArrayBuffer");
function EP(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && zy(e.buffer)),
    t
  );
}
const PP = Ws("string"),
  Xe = Ws("function"),
  By = Ws("number"),
  Ks = (e) => e !== null && typeof e == "object",
  TP = (e) => e === !0 || e === !1,
  Oo = (e) => {
    if ($s(e) !== "object") return !1;
    const t = Rc(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  kP = vt("Date"),
  CP = vt("File"),
  jP = vt("Blob"),
  NP = vt("FileList"),
  OP = (e) => Ks(e) && Xe(e.pipe),
  RP = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Xe(e.append) &&
          ((t = $s(e)) === "formdata" ||
            (t === "object" &&
              Xe(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  AP = vt("URLSearchParams"),
  LP = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, i;
  if ((typeof e != "object" && (e = [e]), Er(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      s = o.length;
    let a;
    for (r = 0; r < s; r++) (a = o[r]), t.call(null, e[a], a, e);
  }
}
function by(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    i;
  for (; r-- > 0; ) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
const Uy =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Hy = (e) => !Si(e) && e !== Uy;
function Zl() {
  const { caseless: e } = (Hy(this) && this) || {},
    t = {},
    n = (r, i) => {
      const o = (e && by(t, i)) || i;
      Oo(t[o]) && Oo(r)
        ? (t[o] = Zl(t[o], r))
        : Oo(r)
        ? (t[o] = Zl({}, r))
        : Er(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Fi(arguments[r], n);
  return t;
}
const MP = (e, t, n, { allOwnKeys: r } = {}) => (
    Fi(
      t,
      (i, o) => {
        n && Xe(i) ? (e[o] = Iy(i, n)) : (e[o] = i);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  DP = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  VP = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  FP = (e, t, n, r) => {
    let i, o, s;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
        (s = i[o]), (!r || r(s, e, t)) && !a[s] && ((t[s] = e[s]), (a[s] = !0));
      e = n !== !1 && Rc(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  IP = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  zP = (e) => {
    if (!e) return null;
    if (Er(e)) return e;
    let t = e.length;
    if (!By(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  BP = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && Rc(Uint8Array)),
  bP = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let i;
    for (; (i = r.next()) && !i.done; ) {
      const o = i.value;
      t.call(e, o[0], o[1]);
    }
  },
  UP = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  HP = vt("HTMLFormElement"),
  $P = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) {
      return r.toUpperCase() + i;
    }),
  Sp = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  WP = vt("RegExp"),
  $y = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    Fi(n, (i, o) => {
      let s;
      (s = t(i, o, e)) !== !1 && (r[o] = s || i);
    }),
      Object.defineProperties(e, r);
  },
  KP = (e) => {
    $y(e, (t, n) => {
      if (Xe(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Xe(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  QP = (e, t) => {
    const n = {},
      r = (i) => {
        i.forEach((o) => {
          n[o] = !0;
        });
      };
    return Er(e) ? r(e) : r(String(e).split(t)), n;
  },
  GP = () => {},
  YP = (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
  Ba = "abcdefghijklmnopqrstuvwxyz",
  xp = "0123456789",
  Wy = { DIGIT: xp, ALPHA: Ba, ALPHA_DIGIT: Ba + Ba.toUpperCase() + xp },
  XP = (e = 16, t = Wy.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function qP(e) {
  return !!(
    e &&
    Xe(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const JP = (e) => {
    const t = new Array(10),
      n = (r, i) => {
        if (Ks(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[i] = r;
            const o = Er(r) ? [] : {};
            return (
              Fi(r, (s, a) => {
                const l = n(s, i + 1);
                !Si(l) && (o[a] = l);
              }),
              (t[i] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  ZP = vt("AsyncFunction"),
  eT = (e) => e && (Ks(e) || Xe(e)) && Xe(e.then) && Xe(e.catch),
  x = {
    isArray: Er,
    isArrayBuffer: zy,
    isBuffer: _P,
    isFormData: RP,
    isArrayBufferView: EP,
    isString: PP,
    isNumber: By,
    isBoolean: TP,
    isObject: Ks,
    isPlainObject: Oo,
    isUndefined: Si,
    isDate: kP,
    isFile: CP,
    isBlob: jP,
    isRegExp: WP,
    isFunction: Xe,
    isStream: OP,
    isURLSearchParams: AP,
    isTypedArray: BP,
    isFileList: NP,
    forEach: Fi,
    merge: Zl,
    extend: MP,
    trim: LP,
    stripBOM: DP,
    inherits: VP,
    toFlatObject: FP,
    kindOf: $s,
    kindOfTest: vt,
    endsWith: IP,
    toArray: zP,
    forEachEntry: bP,
    matchAll: UP,
    isHTMLForm: HP,
    hasOwnProperty: Sp,
    hasOwnProp: Sp,
    reduceDescriptors: $y,
    freezeMethods: KP,
    toObjectSet: QP,
    toCamelCase: $P,
    noop: GP,
    toFiniteNumber: YP,
    findKey: by,
    global: Uy,
    isContextDefined: Hy,
    ALPHABET: Wy,
    generateString: XP,
    isSpecCompliantForm: qP,
    toJSONObject: JP,
    isAsyncFn: ZP,
    isThenable: eT,
  };
function I(e, t, n, r, i) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    i && (this.response = i);
}
x.inherits(I, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: x.toJSONObject(this.config),
      code: this.code,
      status:
        this.response && this.response.status ? this.response.status : null,
    };
  },
});
const Ky = I.prototype,
  Qy = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Qy[e] = { value: e };
});
Object.defineProperties(I, Qy);
Object.defineProperty(Ky, "isAxiosError", { value: !0 });
I.from = (e, t, n, r, i, o) => {
  const s = Object.create(Ky);
  return (
    x.toFlatObject(
      e,
      s,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    I.call(s, e.message, t, n, r, i),
    (s.cause = e),
    (s.name = e.name),
    o && Object.assign(s, o),
    s
  );
};
const tT = null;
function eu(e) {
  return x.isPlainObject(e) || x.isArray(e);
}
function Gy(e) {
  return x.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function _p(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (i, o) {
          return (i = Gy(i)), !n && o ? "[" + i + "]" : i;
        })
        .join(n ? "." : "")
    : t;
}
function nT(e) {
  return x.isArray(e) && !e.some(eu);
}
const rT = x.toFlatObject(x, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function Qs(e, t, n) {
  if (!x.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = x.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (v, _) {
        return !x.isUndefined(_[v]);
      }
    ));
  const r = n.metaTokens,
    i = n.visitor || f,
    o = n.dots,
    s = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && x.isSpecCompliantForm(t);
  if (!x.isFunction(i)) throw new TypeError("visitor must be a function");
  function u(y) {
    if (y === null) return "";
    if (x.isDate(y)) return y.toISOString();
    if (!l && x.isBlob(y))
      throw new I("Blob is not supported. Use a Buffer instead.");
    return x.isArrayBuffer(y) || x.isTypedArray(y)
      ? l && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function f(y, v, _) {
    let m = y;
    if (y && !_ && typeof y == "object") {
      if (x.endsWith(v, "{}"))
        (v = r ? v : v.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (x.isArray(y) && nT(y)) ||
        ((x.isFileList(y) || x.endsWith(v, "[]")) && (m = x.toArray(y)))
      )
        return (
          (v = Gy(v)),
          m.forEach(function (h, S) {
            !(x.isUndefined(h) || h === null) &&
              t.append(
                s === !0 ? _p([v], S, o) : s === null ? v : v + "[]",
                u(h)
              );
          }),
          !1
        );
    }
    return eu(y) ? !0 : (t.append(_p(_, v, o), u(y)), !1);
  }
  const c = [],
    d = Object.assign(rT, {
      defaultVisitor: f,
      convertValue: u,
      isVisitable: eu,
    });
  function g(y, v) {
    if (!x.isUndefined(y)) {
      if (c.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      c.push(y),
        x.forEach(y, function (m, p) {
          (!(x.isUndefined(m) || m === null) &&
            i.call(t, m, x.isString(p) ? p.trim() : p, v, d)) === !0 &&
            g(m, v ? v.concat(p) : [p]);
        }),
        c.pop();
    }
  }
  if (!x.isObject(e)) throw new TypeError("data must be an object");
  return g(e), t;
}
function Ep(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function Ac(e, t) {
  (this._pairs = []), e && Qs(e, this, t);
}
const Yy = Ac.prototype;
Yy.append = function (t, n) {
  this._pairs.push([t, n]);
};
Yy.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ep);
      }
    : Ep;
  return this._pairs
    .map(function (i) {
      return n(i[0]) + "=" + n(i[1]);
    }, "")
    .join("&");
};
function iT(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Xy(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || iT,
    i = n && n.serialize;
  let o;
  if (
    (i
      ? (o = i(t, n))
      : (o = x.isURLSearchParams(t) ? t.toString() : new Ac(t, n).toString(r)),
    o)
  ) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Pp {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    x.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const qy = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  oT = typeof URLSearchParams < "u" ? URLSearchParams : Ac,
  sT = typeof FormData < "u" ? FormData : null,
  aT = typeof Blob < "u" ? Blob : null,
  lT = {
    isBrowser: !0,
    classes: { URLSearchParams: oT, FormData: sT, Blob: aT },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Jy = typeof window < "u" && typeof document < "u",
  uT = ((e) => Jy && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(
    typeof navigator < "u" && navigator.product
  ),
  cT =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  fT = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Jy,
        hasStandardBrowserEnv: uT,
        hasStandardBrowserWebWorkerEnv: cT,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  dt = { ...fT, ...lT };
function dT(e, t) {
  return Qs(
    e,
    new dt.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, i, o) {
          return dt.isNode && x.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function pT(e) {
  return x
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function hT(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function Zy(e) {
  function t(n, r, i, o) {
    let s = n[o++];
    if (s === "__proto__") return !0;
    const a = Number.isFinite(+s),
      l = o >= n.length;
    return (
      (s = !s && x.isArray(i) ? i.length : s),
      l
        ? (x.hasOwnProp(i, s) ? (i[s] = [i[s], r]) : (i[s] = r), !a)
        : ((!i[s] || !x.isObject(i[s])) && (i[s] = []),
          t(n, r, i[s], o) && x.isArray(i[s]) && (i[s] = hT(i[s])),
          !a)
    );
  }
  if (x.isFormData(e) && x.isFunction(e.entries)) {
    const n = {};
    return (
      x.forEachEntry(e, (r, i) => {
        t(pT(r), i, n, 0);
      }),
      n
    );
  }
  return null;
}
function mT(e, t, n) {
  if (x.isString(e))
    try {
      return (t || JSON.parse)(e), x.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (n || JSON.stringify)(e);
}
const Lc = {
  transitional: qy,
  adapter: ["xhr", "http"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        i = r.indexOf("application/json") > -1,
        o = x.isObject(t);
      if ((o && x.isHTMLForm(t) && (t = new FormData(t)), x.isFormData(t)))
        return i ? JSON.stringify(Zy(t)) : t;
      if (
        x.isArrayBuffer(t) ||
        x.isBuffer(t) ||
        x.isStream(t) ||
        x.isFile(t) ||
        x.isBlob(t)
      )
        return t;
      if (x.isArrayBufferView(t)) return t.buffer;
      if (x.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return dT(t, this.formSerializer).toString();
        if ((a = x.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return Qs(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return o || i ? (n.setContentType("application/json", !1), mT(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || Lc.transitional,
        r = n && n.forcedJSONParsing,
        i = this.responseType === "json";
      if (t && x.isString(t) && ((r && !this.responseType) || i)) {
        const s = !(n && n.silentJSONParsing) && i;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (s)
            throw a.name === "SyntaxError"
              ? I.from(a, I.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: dt.classes.FormData, Blob: dt.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
x.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Lc.headers[e] = {};
});
const Mc = Lc,
  gT = x.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  yT = (e) => {
    const t = {};
    let n, r, i;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (s) {
            (i = s.indexOf(":")),
              (n = s.substring(0, i).trim().toLowerCase()),
              (r = s.substring(i + 1).trim()),
              !(!n || (t[n] && gT[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Tp = Symbol("internals");
function Mr(e) {
  return e && String(e).trim().toLowerCase();
}
function Ro(e) {
  return e === !1 || e == null ? e : x.isArray(e) ? e.map(Ro) : String(e);
}
function vT(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const wT = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ba(e, t, n, r, i) {
  if (x.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), !!x.isString(t))) {
    if (x.isString(r)) return t.indexOf(r) !== -1;
    if (x.isRegExp(r)) return r.test(t);
  }
}
function ST(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function xT(e, t) {
  const n = x.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (i, o, s) {
        return this[r].call(this, t, i, o, s);
      },
      configurable: !0,
    });
  });
}
class Gs {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(a, l, u) {
      const f = Mr(l);
      if (!f) throw new Error("header name must be a non-empty string");
      const c = x.findKey(i, f);
      (!c || i[c] === void 0 || u === !0 || (u === void 0 && i[c] !== !1)) &&
        (i[c || l] = Ro(a));
    }
    const s = (a, l) => x.forEach(a, (u, f) => o(u, f, l));
    return (
      x.isPlainObject(t) || t instanceof this.constructor
        ? s(t, n)
        : x.isString(t) && (t = t.trim()) && !wT(t)
        ? s(yT(t), n)
        : t != null && o(n, t, r),
      this
    );
  }
  get(t, n) {
    if (((t = Mr(t)), t)) {
      const r = x.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n) return i;
        if (n === !0) return vT(i);
        if (x.isFunction(n)) return n.call(this, i, r);
        if (x.isRegExp(n)) return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = Mr(t)), t)) {
      const r = x.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || ba(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(s) {
      if (((s = Mr(s)), s)) {
        const a = x.findKey(r, s);
        a && (!n || ba(r, r[a], a, n)) && (delete r[a], (i = !0));
      }
    }
    return x.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || ba(this, this[o], o, t, !0)) && (delete this[o], (i = !0));
    }
    return i;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      x.forEach(this, (i, o) => {
        const s = x.findKey(r, o);
        if (s) {
          (n[s] = Ro(i)), delete n[o];
          return;
        }
        const a = t ? ST(o) : String(o).trim();
        a !== o && delete n[o], (n[a] = Ro(i)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      x.forEach(this, (r, i) => {
        r != null && r !== !1 && (n[i] = t && x.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Tp] = this[Tp] = { accessors: {} }).accessors,
      i = this.prototype;
    function o(s) {
      const a = Mr(s);
      r[a] || (xT(i, s), (r[a] = !0));
    }
    return x.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Gs.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
x.reduceDescriptors(Gs.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
x.freezeMethods(Gs);
const Ct = Gs;
function Ua(e, t) {
  const n = this || Mc,
    r = t || n,
    i = Ct.from(r.headers);
  let o = r.data;
  return (
    x.forEach(e, function (a) {
      o = a.call(n, o, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    o
  );
}
function ev(e) {
  return !!(e && e.__CANCEL__);
}
function Ii(e, t, n) {
  I.call(this, e ?? "canceled", I.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
x.inherits(Ii, I, { __CANCEL__: !0 });
function _T(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new I(
          "Request failed with status code " + n.status,
          [I.ERR_BAD_REQUEST, I.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
const ET = dt.hasStandardBrowserEnv
  ? {
      write(e, t, n, r, i, o) {
        const s = [e + "=" + encodeURIComponent(t)];
        x.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
          x.isString(r) && s.push("path=" + r),
          x.isString(i) && s.push("domain=" + i),
          o === !0 && s.push("secure"),
          (document.cookie = s.join("; "));
      },
      read(e) {
        const t = document.cookie.match(
          new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
        );
        return t ? decodeURIComponent(t[3]) : null;
      },
      remove(e) {
        this.write(e, "", Date.now() - 864e5);
      },
    }
  : {
      write() {},
      read() {
        return null;
      },
      remove() {},
    };
function PT(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function TT(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function tv(e, t) {
  return e && !PT(t) ? TT(e, t) : t;
}
const kT = dt.hasStandardBrowserEnv
  ? (function () {
      const t = /(msie|trident)/i.test(navigator.userAgent),
        n = document.createElement("a");
      let r;
      function i(o) {
        let s = o;
        return (
          t && (n.setAttribute("href", s), (s = n.href)),
          n.setAttribute("href", s),
          {
            href: n.href,
            protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
            host: n.host,
            search: n.search ? n.search.replace(/^\?/, "") : "",
            hash: n.hash ? n.hash.replace(/^#/, "") : "",
            hostname: n.hostname,
            port: n.port,
            pathname:
              n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
          }
        );
      }
      return (
        (r = i(window.location.href)),
        function (s) {
          const a = x.isString(s) ? i(s) : s;
          return a.protocol === r.protocol && a.host === r.host;
        }
      );
    })()
  : (function () {
      return function () {
        return !0;
      };
    })();
function CT(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function jT(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let i = 0,
    o = 0,
    s;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const u = Date.now(),
        f = r[o];
      s || (s = u), (n[i] = l), (r[i] = u);
      let c = o,
        d = 0;
      for (; c !== i; ) (d += n[c++]), (c = c % e);
      if (((i = (i + 1) % e), i === o && (o = (o + 1) % e), u - s < t)) return;
      const g = f && u - f;
      return g ? Math.round((d * 1e3) / g) : void 0;
    }
  );
}
function kp(e, t) {
  let n = 0;
  const r = jT(50, 250);
  return (i) => {
    const o = i.loaded,
      s = i.lengthComputable ? i.total : void 0,
      a = o - n,
      l = r(a),
      u = o <= s;
    n = o;
    const f = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: a,
      rate: l || void 0,
      estimated: l && s && u ? (s - o) / l : void 0,
      event: i,
    };
    (f[t ? "download" : "upload"] = !0), e(f);
  };
}
const NT = typeof XMLHttpRequest < "u",
  OT =
    NT &&
    function (e) {
      return new Promise(function (n, r) {
        let i = e.data;
        const o = Ct.from(e.headers).normalize();
        let { responseType: s, withXSRFToken: a } = e,
          l;
        function u() {
          e.cancelToken && e.cancelToken.unsubscribe(l),
            e.signal && e.signal.removeEventListener("abort", l);
        }
        let f;
        if (x.isFormData(i)) {
          if (dt.hasStandardBrowserEnv || dt.hasStandardBrowserWebWorkerEnv)
            o.setContentType(!1);
          else if ((f = o.getContentType()) !== !1) {
            const [v, ..._] = f
              ? f
                  .split(";")
                  .map((m) => m.trim())
                  .filter(Boolean)
              : [];
            o.setContentType([v || "multipart/form-data", ..._].join("; "));
          }
        }
        let c = new XMLHttpRequest();
        if (e.auth) {
          const v = e.auth.username || "",
            _ = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : "";
          o.set("Authorization", "Basic " + btoa(v + ":" + _));
        }
        const d = tv(e.baseURL, e.url);
        c.open(e.method.toUpperCase(), Xy(d, e.params, e.paramsSerializer), !0),
          (c.timeout = e.timeout);
        function g() {
          if (!c) return;
          const v = Ct.from(
              "getAllResponseHeaders" in c && c.getAllResponseHeaders()
            ),
            m = {
              data:
                !s || s === "text" || s === "json"
                  ? c.responseText
                  : c.response,
              status: c.status,
              statusText: c.statusText,
              headers: v,
              config: e,
              request: c,
            };
          _T(
            function (h) {
              n(h), u();
            },
            function (h) {
              r(h), u();
            },
            m
          ),
            (c = null);
        }
        if (
          ("onloadend" in c
            ? (c.onloadend = g)
            : (c.onreadystatechange = function () {
                !c ||
                  c.readyState !== 4 ||
                  (c.status === 0 &&
                    !(c.responseURL && c.responseURL.indexOf("file:") === 0)) ||
                  setTimeout(g);
              }),
          (c.onabort = function () {
            c &&
              (r(new I("Request aborted", I.ECONNABORTED, e, c)), (c = null));
          }),
          (c.onerror = function () {
            r(new I("Network Error", I.ERR_NETWORK, e, c)), (c = null);
          }),
          (c.ontimeout = function () {
            let _ = e.timeout
              ? "timeout of " + e.timeout + "ms exceeded"
              : "timeout exceeded";
            const m = e.transitional || qy;
            e.timeoutErrorMessage && (_ = e.timeoutErrorMessage),
              r(
                new I(
                  _,
                  m.clarifyTimeoutError ? I.ETIMEDOUT : I.ECONNABORTED,
                  e,
                  c
                )
              ),
              (c = null);
          }),
          dt.hasStandardBrowserEnv &&
            (a && x.isFunction(a) && (a = a(e)), a || (a !== !1 && kT(d))))
        ) {
          const v =
            e.xsrfHeaderName && e.xsrfCookieName && ET.read(e.xsrfCookieName);
          v && o.set(e.xsrfHeaderName, v);
        }
        i === void 0 && o.setContentType(null),
          "setRequestHeader" in c &&
            x.forEach(o.toJSON(), function (_, m) {
              c.setRequestHeader(m, _);
            }),
          x.isUndefined(e.withCredentials) ||
            (c.withCredentials = !!e.withCredentials),
          s && s !== "json" && (c.responseType = e.responseType),
          typeof e.onDownloadProgress == "function" &&
            c.addEventListener("progress", kp(e.onDownloadProgress, !0)),
          typeof e.onUploadProgress == "function" &&
            c.upload &&
            c.upload.addEventListener("progress", kp(e.onUploadProgress)),
          (e.cancelToken || e.signal) &&
            ((l = (v) => {
              c &&
                (r(!v || v.type ? new Ii(null, e, c) : v),
                c.abort(),
                (c = null));
            }),
            e.cancelToken && e.cancelToken.subscribe(l),
            e.signal &&
              (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
        const y = CT(d);
        if (y && dt.protocols.indexOf(y) === -1) {
          r(new I("Unsupported protocol " + y + ":", I.ERR_BAD_REQUEST, e));
          return;
        }
        c.send(i || null);
      });
    },
  tu = { http: tT, xhr: OT };
x.forEach(tu, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Cp = (e) => `- ${e}`,
  RT = (e) => x.isFunction(e) || e === null || e === !1,
  nv = {
    getAdapter: (e) => {
      e = x.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const i = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let s;
        if (
          ((r = n),
          !RT(n) && ((r = tu[(s = String(n)).toLowerCase()]), r === void 0))
        )
          throw new I(`Unknown adapter '${s}'`);
        if (r) break;
        i[s || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(i).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let s = t
          ? o.length > 1
            ? `since :
` +
              o.map(Cp).join(`
`)
            : " " + Cp(o[0])
          : "as no adapter specified";
        throw new I(
          "There is no suitable adapter to dispatch the request " + s,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: tu,
  };
function Ha(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new Ii(null, e);
}
function jp(e) {
  return (
    Ha(e),
    (e.headers = Ct.from(e.headers)),
    (e.data = Ua.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    nv
      .getAdapter(e.adapter || Mc.adapter)(e)
      .then(
        function (r) {
          return (
            Ha(e),
            (r.data = Ua.call(e, e.transformResponse, r)),
            (r.headers = Ct.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            ev(r) ||
              (Ha(e),
              r &&
                r.response &&
                ((r.response.data = Ua.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = Ct.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const Np = (e) => (e instanceof Ct ? e.toJSON() : e);
function vr(e, t) {
  t = t || {};
  const n = {};
  function r(u, f, c) {
    return x.isPlainObject(u) && x.isPlainObject(f)
      ? x.merge.call({ caseless: c }, u, f)
      : x.isPlainObject(f)
      ? x.merge({}, f)
      : x.isArray(f)
      ? f.slice()
      : f;
  }
  function i(u, f, c) {
    if (x.isUndefined(f)) {
      if (!x.isUndefined(u)) return r(void 0, u, c);
    } else return r(u, f, c);
  }
  function o(u, f) {
    if (!x.isUndefined(f)) return r(void 0, f);
  }
  function s(u, f) {
    if (x.isUndefined(f)) {
      if (!x.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, f);
  }
  function a(u, f, c) {
    if (c in t) return r(u, f);
    if (c in e) return r(void 0, u);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: a,
    headers: (u, f) => i(Np(u), Np(f), !0),
  };
  return (
    x.forEach(Object.keys(Object.assign({}, e, t)), function (f) {
      const c = l[f] || i,
        d = c(e[f], t[f], f);
      (x.isUndefined(d) && c !== a) || (n[f] = d);
    }),
    n
  );
}
const rv = "1.6.7",
  Dc = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    Dc[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Op = {};
Dc.transitional = function (t, n, r) {
  function i(o, s) {
    return (
      "[Axios v" +
      rv +
      "] Transitional option '" +
      o +
      "'" +
      s +
      (r ? ". " + r : "")
    );
  }
  return (o, s, a) => {
    if (t === !1)
      throw new I(
        i(s, " has been removed" + (n ? " in " + n : "")),
        I.ERR_DEPRECATED
      );
    return (
      n &&
        !Op[s] &&
        ((Op[s] = !0),
        console.warn(
          i(
            s,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, s, a) : !0
    );
  };
};
function AT(e, t, n) {
  if (typeof e != "object")
    throw new I("options must be an object", I.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i],
      s = t[o];
    if (s) {
      const a = e[o],
        l = a === void 0 || s(a, o, e);
      if (l !== !0)
        throw new I("option " + o + " must be " + l, I.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new I("Unknown option " + o, I.ERR_BAD_OPTION);
  }
}
const nu = { assertOptions: AT, validators: Dc },
  Ft = nu.validators;
class ds {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Pp(), response: new Pp() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace
          ? Error.captureStackTrace((i = {}))
          : (i = new Error());
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        r.stack
          ? o &&
            !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
            (r.stack +=
              `
` + o)
          : (r.stack = o);
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = vr(this.defaults, n));
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 &&
      nu.assertOptions(
        r,
        {
          silentJSONParsing: Ft.transitional(Ft.boolean),
          forcedJSONParsing: Ft.transitional(Ft.boolean),
          clarifyTimeoutError: Ft.transitional(Ft.boolean),
        },
        !1
      ),
      i != null &&
        (x.isFunction(i)
          ? (n.paramsSerializer = { serialize: i })
          : nu.assertOptions(
              i,
              { encode: Ft.function, serialize: Ft.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let s = o && x.merge(o.common, o[n.method]);
    o &&
      x.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete o[y];
        }
      ),
      (n.headers = Ct.concat(s, o));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (v) {
      (typeof v.runWhen == "function" && v.runWhen(n) === !1) ||
        ((l = l && v.synchronous), a.unshift(v.fulfilled, v.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (v) {
      u.push(v.fulfilled, v.rejected);
    });
    let f,
      c = 0,
      d;
    if (!l) {
      const y = [jp.bind(this), void 0];
      for (
        y.unshift.apply(y, a),
          y.push.apply(y, u),
          d = y.length,
          f = Promise.resolve(n);
        c < d;

      )
        f = f.then(y[c++], y[c++]);
      return f;
    }
    d = a.length;
    let g = n;
    for (c = 0; c < d; ) {
      const y = a[c++],
        v = a[c++];
      try {
        g = y(g);
      } catch (_) {
        v.call(this, _);
        break;
      }
    }
    try {
      f = jp.call(this, g);
    } catch (y) {
      return Promise.reject(y);
    }
    for (c = 0, d = u.length; c < d; ) f = f.then(u[c++], u[c++]);
    return f;
  }
  getUri(t) {
    t = vr(this.defaults, t);
    const n = tv(t.baseURL, t.url);
    return Xy(n, t.params, t.paramsSerializer);
  }
}
x.forEach(["delete", "get", "head", "options"], function (t) {
  ds.prototype[t] = function (n, r) {
    return this.request(
      vr(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
x.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, s, a) {
      return this.request(
        vr(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: s,
        })
      );
    };
  }
  (ds.prototype[t] = n()), (ds.prototype[t + "Form"] = n(!0));
});
const Ao = ds;
class Vc {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](i);
      r._listeners = null;
    }),
      (this.promise.then = (i) => {
        let o;
        const s = new Promise((a) => {
          r.subscribe(a), (o = a);
        }).then(i);
        return (
          (s.cancel = function () {
            r.unsubscribe(o);
          }),
          s
        );
      }),
      t(function (o, s, a) {
        r.reason || ((r.reason = new Ii(o, s, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  static source() {
    let t;
    return {
      token: new Vc(function (i) {
        t = i;
      }),
      cancel: t,
    };
  }
}
const LT = Vc;
function MT(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function DT(e) {
  return x.isObject(e) && e.isAxiosError === !0;
}
const ru = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ru).forEach(([e, t]) => {
  ru[t] = e;
});
const VT = ru;
function iv(e) {
  const t = new Ao(e),
    n = Iy(Ao.prototype.request, t);
  return (
    x.extend(n, Ao.prototype, t, { allOwnKeys: !0 }),
    x.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (i) {
      return iv(vr(e, i));
    }),
    n
  );
}
const ce = iv(Mc);
ce.Axios = Ao;
ce.CanceledError = Ii;
ce.CancelToken = LT;
ce.isCancel = ev;
ce.VERSION = rv;
ce.toFormData = Qs;
ce.AxiosError = I;
ce.Cancel = ce.CanceledError;
ce.all = function (t) {
  return Promise.all(t);
};
ce.spread = MT;
ce.isAxiosError = DT;
ce.mergeConfig = vr;
ce.AxiosHeaders = Ct;
ce.formToJSON = (e) => Zy(x.isHTMLForm(e) ? new FormData(e) : e);
ce.getAdapter = nv.getAdapter;
ce.HttpStatusCode = VT;
ce.default = ce;
const FT = () => {
    const [e, t] = j.useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      }),
      n = (i) => {
        const o = i.target.name,
          s = i.target.value;
        t({ ...e, [o]: s });
      },
      r = (i) => {
        i.preventDefault(),
          ce
            .post(
              "https://sheet.best/api/sheets/c096a9db-1748-41fe-bfc6-a32dbf50bc02",
              e
            )
            .then((o) => {
              console.log(o),
                t({ name: "", email: "", subject: "", message: "" });
            });
      };
    return w.jsxs("section", {
      className: "contact section",
      id: "contact",
      children: [
        w.jsx("h2", {
          className: "section__title text-cs",
          children: "Contact Me",
        }),
        w.jsxs("p", {
          className: "section__subtitle",
          children: ["Let's ", w.jsx("span", { children: "Talk About Ideas" })],
        }),
        w.jsxs("div", {
          className: "contact__container container grid",
          children: [
            w.jsxs("div", {
              className: "contact__content",
              children: [
                w.jsxs("div", {
                  className: "contact__card",
                  children: [
                    w.jsx("span", {
                      className: "contact__card-icon",
                      children: w.jsx(D1, {}),
                    }),
                    w.jsx("h3", {
                      className: "contact__card-title",
                      children: "Freelance",
                    }),
                    w.jsx("p", {
                      className: "contact__card-data",
                      children: "Available Right Now",
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "contact__card",
                  children: [
                    w.jsx("span", {
                      className: "contact__card-icon",
                      children: w.jsx(M1, {}),
                    }),
                    w.jsx("h3", {
                      className: "contact__card-title",
                      children: "Email Address",
                    }),
                    w.jsx("p", {
                      className: "contact__card-data",
                      children: "neginhd6@gmail.com",
                    }),
                  ],
                }),
              ],
            }),
            w.jsxs("form", {
              className: "contact__form",
              onSubmit: r,
              children: [
                w.jsxs("div", {
                  className: "contact__form-group grid",
                  children: [
                    w.jsxs("div", {
                      className: "contact__form-div",
                      children: [
                        w.jsxs("label", {
                          className: "contact__form-tag text-cs",
                          children: [
                            "Your Full Name ",
                            w.jsx("b", { children: "*" }),
                          ],
                        }),
                        w.jsx("input", {
                          type: "text",
                          name: "name",
                          onChange: n,
                          value: e.name,
                          className: "contact__form-input",
                        }),
                      ],
                    }),
                    w.jsxs("div", {
                      className: "contact__form-div",
                      children: [
                        w.jsxs("label", {
                          className: "contact__form-tag text-cs",
                          children: [
                            "Your Email Address ",
                            w.jsx("b", { children: "*" }),
                          ],
                        }),
                        w.jsx("input", {
                          type: "text",
                          name: "email",
                          onChange: n,
                          value: e.email,
                          className: "contact__form-input",
                        }),
                      ],
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "contact__form-div",
                  children: [
                    w.jsxs("label", {
                      className: "contact__form-tag text-cs",
                      children: [
                        "Your Subject ",
                        w.jsx("b", { children: "*" }),
                      ],
                    }),
                    w.jsx("input", {
                      type: "text",
                      name: "subject",
                      onChange: n,
                      value: e.subject,
                      className: "contact__form-input",
                    }),
                  ],
                }),
                w.jsxs("div", {
                  className: "contact__form-div contact__form-area",
                  children: [
                    w.jsxs("label", {
                      className: "contact__form-tag text-cs",
                      children: [
                        "Your Message ",
                        w.jsx("b", { children: "*" }),
                      ],
                    }),
                    w.jsx("textarea", {
                      name: "message",
                      onChange: n,
                      value: e.message,
                      className: "contact__form-input",
                    }),
                  ],
                }),
                w.jsx("div", {
                  className: "contact__submit",
                  children: w.jsx("button", {
                    type: "submit",
                    className: "btn contact__btn text-cs",
                    children: "Send Message",
                  }),
                }),
              ],
            }),
          ],
        }),
        w.jsx("div", {
          className: "section__deco deco__left",
          children: w.jsx("img", { src: Mn, alt: "", className: "shape" }),
        }),
        w.jsx("div", {
          className: "section__bg-wrapper",
          children: w.jsx("span", {
            className: "bg__title",
            children: "Contact Me",
          }),
        }),
      ],
    });
  },
  IT = () =>
    w.jsx("footer", {
      className: "footer",
      children: w.jsxs("div", {
        className: "footer__container container grid",
        children: [
          w.jsxs("div", {
            className: "footer__socials",
            children: [
              w.jsx("a", {
                href: "https://www.linkedin.com/in/negin-heidari/",
                target: "_blank",
                className: "home__social-link",
                rel: "noreferrer",
                children: w.jsx(Zu, {}),
              }),
              w.jsx("a", {
                href: "https://github.com/neginheidarii",
                target: "_blank",
                className: "home__social-link",
                rel: "noreferrer",
                children: w.jsx(Ju, {}),
              }),
              w.jsx("a", {
                href: "https://twitter.com/NeginHeidarii",
                target: "_blank",
                className: "home__social-link",
                rel: "noreferrer",
                children: w.jsx(ec, {}),
              }),
            ],
          }),
          w.jsxs("p", {
            className: "footer__copyright text-cs",
            children: [
              "Developed By ",
              w.jsx("span", { children: "Negin Heidari" }),
            ],
          }),
        ],
      }),
    });
function zT() {
  return w.jsxs("main", {
    className: "main",
    children: [
      w.jsx(GS, {}),
      w.jsx(qS, {}),
      w.jsx(JS, {}),
      w.jsx(wP, {}),
      w.jsx(SP, {}),
      w.jsx(FT, {}),
      w.jsx(IT, {}),
    ],
  });
}
$a.createRoot(document.getElementById("root")).render(
  w.jsx(pt.StrictMode, { children: w.jsx(zT, {}) })
);
