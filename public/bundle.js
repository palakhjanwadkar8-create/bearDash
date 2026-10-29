var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// ../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/dist/preact.module.js
var n;
var l;
var u;
var t;
var i;
var r;
var o;
var e;
var f;
var c;
var s;
var a;
var h;
var p = {};
var v = [];
var y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
var w = Array.isArray;
function d(n2, l3) {
  for (var u4 in l3) n2[u4] = l3[u4];
  return n2;
}
function g(n2) {
  n2 && n2.parentNode && n2.parentNode.removeChild(n2);
}
function _(l3, u4, t3) {
  var i3, r3, o3, e3 = {};
  for (o3 in u4) "key" == o3 ? i3 = u4[o3] : "ref" == o3 ? r3 = u4[o3] : e3[o3] = u4[o3];
  if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : t3), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
  return m(l3, e3, i3, r3, null);
}
function m(n2, t3, i3, r3, o3) {
  var e3 = { type: n2, props: t3, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++u : o3, __i: -1, __u: 0 };
  return null == o3 && null != l.vnode && l.vnode(e3), e3;
}
function k(n2) {
  return n2.children;
}
function x(n2, l3) {
  this.props = n2, this.context = l3;
}
function S(n2, l3) {
  if (null == l3) return n2.__ ? S(n2.__, n2.__i + 1) : null;
  for (var u4; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) return u4.__e;
  return "function" == typeof n2.type ? S(n2) : null;
}
function C(n2) {
  var l3, u4;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (u4 = n2.__k[l3]) && null != u4.__e) {
      n2.__e = n2.__c.base = u4.__e;
      break;
    }
    return C(n2);
  }
}
function M(n2) {
  (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r != l.debounceRendering) && ((r = l.debounceRendering) || o)($);
}
function $() {
  for (var n2, u4, t3, r3, o3, f4, c3, s3 = 1; i.length; ) i.length > s3 && i.sort(e), n2 = i.shift(), s3 = i.length, n2.__d && (t3 = void 0, r3 = void 0, o3 = (r3 = (u4 = n2).__v).__e, f4 = [], c3 = [], u4.__P && ((t3 = d({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(t3), O(u4.__P, t3, r3, u4.__n, u4.__P.namespaceURI, 32 & r3.__u ? [o3] : null, f4, null == o3 ? S(r3) : o3, !!(32 & r3.__u), c3), t3.__v = r3.__v, t3.__.__k[t3.__i] = t3, N(f4, t3, c3), r3.__e = r3.__ = null, t3.__e != o3 && C(t3)));
  $.__r = 0;
}
function I(n2, l3, u4, t3, i3, r3, o3, e3, f4, c3, s3) {
  var a3, h3, y3, w3, d3, g4, _3, m3 = t3 && t3.__k || v, b2 = l3.length;
  for (f4 = P(u4, l3, m3, f4, b2), a3 = 0; a3 < b2; a3++) null != (y3 = u4.__k[a3]) && (h3 = -1 == y3.__i ? p : m3[y3.__i] || p, y3.__i = a3, g4 = O(n2, y3, h3, i3, r3, o3, e3, f4, c3, s3), w3 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && B(h3.ref, null, y3), s3.push(y3.ref, y3.__c || w3, y3)), null == d3 && null != w3 && (d3 = w3), (_3 = !!(4 & y3.__u)) || h3.__k === y3.__k ? f4 = A(y3, f4, n2, _3) : "function" == typeof y3.type && void 0 !== g4 ? f4 = g4 : w3 && (f4 = w3.nextSibling), y3.__u &= -7);
  return u4.__e = d3, f4;
}
function P(n2, l3, u4, t3, i3) {
  var r3, o3, e3, f4, c3, s3 = u4.length, a3 = s3, h3 = 0;
  for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? (f4 = r3 + h3, (o3 = n2.__k[r3] = "string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? m(null, o3, null, null, null) : w(o3) ? m(k, { children: o3 }, null, null, null) : null == o3.constructor && o3.__b > 0 ? m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : o3).__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 != (c3 = o3.__i = L(o3, u4, f4, a3)) && (a3--, (e3 = u4[c3]) && (e3.__u |= 2)), null == e3 || null == e3.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f4 && (c3 == f4 - 1 ? h3-- : c3 == f4 + 1 ? h3++ : (c3 > f4 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
  if (a3) for (r3 = 0; r3 < s3; r3++) null != (e3 = u4[r3]) && 0 == (2 & e3.__u) && (e3.__e == t3 && (t3 = S(e3)), D(e3, e3));
  return t3;
}
function A(n2, l3, u4, t3) {
  var i3, r3;
  if ("function" == typeof n2.type) {
    for (i3 = n2.__k, r3 = 0; i3 && r3 < i3.length; r3++) i3[r3] && (i3[r3].__ = n2, l3 = A(i3[r3], l3, u4, t3));
    return l3;
  }
  n2.__e != l3 && (t3 && (l3 && n2.type && !l3.parentNode && (l3 = S(n2)), u4.insertBefore(n2.__e, l3 || null)), l3 = n2.__e);
  do {
    l3 = l3 && l3.nextSibling;
  } while (null != l3 && 8 == l3.nodeType);
  return l3;
}
function H(n2, l3) {
  return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (w(n2) ? n2.some(function(n3) {
    H(n3, l3);
  }) : l3.push(n2)), l3;
}
function L(n2, l3, u4, t3) {
  var i3, r3, o3, e3 = n2.key, f4 = n2.type, c3 = l3[u4], s3 = null != c3 && 0 == (2 & c3.__u);
  if (null === c3 && null == n2.key || s3 && e3 == c3.key && f4 == c3.type) return u4;
  if (t3 > (s3 ? 1 : 0)) {
    for (i3 = u4 - 1, r3 = u4 + 1; i3 >= 0 || r3 < l3.length; ) if (null != (c3 = l3[o3 = i3 >= 0 ? i3-- : r3++]) && 0 == (2 & c3.__u) && e3 == c3.key && f4 == c3.type) return o3;
  }
  return -1;
}
function T(n2, l3, u4) {
  "-" == l3[0] ? n2.setProperty(l3, null == u4 ? "" : u4) : n2[l3] = null == u4 ? "" : "number" != typeof u4 || y.test(l3) ? u4 : u4 + "px";
}
function j(n2, l3, u4, t3, i3) {
  var r3, o3;
  n: if ("style" == l3) if ("string" == typeof u4) n2.style.cssText = u4;
  else {
    if ("string" == typeof t3 && (n2.style.cssText = t3 = ""), t3) for (l3 in t3) u4 && l3 in u4 || T(n2.style, l3, "");
    if (u4) for (l3 in u4) t3 && u4[l3] == t3[l3] || T(n2.style, l3, u4[l3]);
  }
  else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(f, "$1")), o3 = l3.toLowerCase(), l3 = o3 in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? o3.slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u4, u4 ? t3 ? u4.u = t3.u : (u4.u = c, n2.addEventListener(l3, r3 ? a : s, r3)) : n2.removeEventListener(l3, r3 ? a : s, r3);
  else {
    if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
      n2[l3] = null == u4 ? "" : u4;
      break n;
    } catch (n3) {
    }
    "function" == typeof u4 || (null == u4 || false === u4 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == u4 ? "" : u4));
  }
}
function F(n2) {
  return function(u4) {
    if (this.l) {
      var t3 = this.l[u4.type + n2];
      if (null == u4.t) u4.t = c++;
      else if (u4.t < t3.u) return;
      return t3(l.event ? l.event(u4) : u4);
    }
  };
}
function O(n2, u4, t3, i3, r3, o3, e3, f4, c3, s3) {
  var a3, h3, p3, v3, y3, _3, m3, b2, S2, C3, M2, $2, P4, A4, H3, L2, T4, j4 = u4.type;
  if (null != u4.constructor) return null;
  128 & t3.__u && (c3 = !!(32 & t3.__u), o3 = [f4 = u4.__e = t3.__e]), (a3 = l.__b) && a3(u4);
  n: if ("function" == typeof j4) try {
    if (b2 = u4.props, S2 = "prototype" in j4 && j4.prototype.render, C3 = (a3 = j4.contextType) && i3[a3.__c], M2 = a3 ? C3 ? C3.props.value : a3.__ : i3, t3.__c ? m3 = (h3 = u4.__c = t3.__c).__ = h3.__E : (S2 ? u4.__c = h3 = new j4(b2, M2) : (u4.__c = h3 = new x(b2, M2), h3.constructor = j4, h3.render = E), C3 && C3.sub(h3), h3.props = b2, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), S2 && null == h3.__s && (h3.__s = h3.state), S2 && null != j4.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = d({}, h3.__s)), d(h3.__s, j4.getDerivedStateFromProps(b2, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = u4, p3) S2 && null == j4.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), S2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
    else {
      if (S2 && null == j4.getDerivedStateFromProps && b2 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b2, M2), !h3.__e && null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b2, h3.__s, M2) || u4.__v == t3.__v) {
        for (u4.__v != t3.__v && (h3.props = b2, h3.state = h3.__s, h3.__d = false), u4.__e = t3.__e, u4.__k = t3.__k, u4.__k.some(function(n3) {
          n3 && (n3.__ = u4);
        }), $2 = 0; $2 < h3._sb.length; $2++) h3.__h.push(h3._sb[$2]);
        h3._sb = [], h3.__h.length && e3.push(h3);
        break n;
      }
      null != h3.componentWillUpdate && h3.componentWillUpdate(b2, h3.__s, M2), S2 && null != h3.componentDidUpdate && h3.__h.push(function() {
        h3.componentDidUpdate(v3, y3, _3);
      });
    }
    if (h3.context = M2, h3.props = b2, h3.__P = n2, h3.__e = false, P4 = l.__r, A4 = 0, S2) {
      for (h3.state = h3.__s, h3.__d = false, P4 && P4(u4), a3 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++) h3.__h.push(h3._sb[H3]);
      h3._sb = [];
    } else do {
      h3.__d = false, P4 && P4(u4), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
    } while (h3.__d && ++A4 < 25);
    h3.state = h3.__s, null != h3.getChildContext && (i3 = d(d({}, i3), h3.getChildContext())), S2 && !p3 && null != h3.getSnapshotBeforeUpdate && (_3 = h3.getSnapshotBeforeUpdate(v3, y3)), L2 = a3, null != a3 && a3.type === k && null == a3.key && (L2 = V(a3.props.children)), f4 = I(n2, w(L2) ? L2 : [L2], u4, t3, i3, r3, o3, e3, f4, c3, s3), h3.base = u4.__e, u4.__u &= -161, h3.__h.length && e3.push(h3), m3 && (h3.__E = h3.__ = null);
  } catch (n3) {
    if (u4.__v = null, c3 || null != o3) if (n3.then) {
      for (u4.__u |= c3 ? 160 : 128; f4 && 8 == f4.nodeType && f4.nextSibling; ) f4 = f4.nextSibling;
      o3[o3.indexOf(f4)] = null, u4.__e = f4;
    } else {
      for (T4 = o3.length; T4--; ) g(o3[T4]);
      z(u4);
    }
    else u4.__e = t3.__e, u4.__k = t3.__k, n3.then || z(u4);
    l.__e(n3, u4, t3);
  }
  else null == o3 && u4.__v == t3.__v ? (u4.__k = t3.__k, u4.__e = t3.__e) : f4 = u4.__e = q(t3.__e, u4, t3, i3, r3, o3, e3, c3, s3);
  return (a3 = l.diffed) && a3(u4), 128 & u4.__u ? void 0 : f4;
}
function z(n2) {
  n2 && n2.__c && (n2.__c.__e = true), n2 && n2.__k && n2.__k.forEach(z);
}
function N(n2, u4, t3) {
  for (var i3 = 0; i3 < t3.length; i3++) B(t3[i3], t3[++i3], t3[++i3]);
  l.__c && l.__c(u4, n2), n2.some(function(u5) {
    try {
      n2 = u5.__h, u5.__h = [], n2.some(function(n3) {
        n3.call(u5);
      });
    } catch (n3) {
      l.__e(n3, u5.__v);
    }
  });
}
function V(n2) {
  return "object" != typeof n2 || null == n2 || n2.__b && n2.__b > 0 ? n2 : w(n2) ? n2.map(V) : d({}, n2);
}
function q(u4, t3, i3, r3, o3, e3, f4, c3, s3) {
  var a3, h3, v3, y3, d3, _3, m3, b2 = i3.props, k3 = t3.props, x3 = t3.type;
  if ("svg" == x3 ? o3 = "http://www.w3.org/2000/svg" : "math" == x3 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
    for (a3 = 0; a3 < e3.length; a3++) if ((d3 = e3[a3]) && "setAttribute" in d3 == !!x3 && (x3 ? d3.localName == x3 : 3 == d3.nodeType)) {
      u4 = d3, e3[a3] = null;
      break;
    }
  }
  if (null == u4) {
    if (null == x3) return document.createTextNode(k3);
    u4 = document.createElementNS(o3, x3, k3.is && k3), c3 && (l.__m && l.__m(t3, e3), c3 = false), e3 = null;
  }
  if (null == x3) b2 === k3 || c3 && u4.data == k3 || (u4.data = k3);
  else {
    if (e3 = e3 && n.call(u4.childNodes), b2 = i3.props || p, !c3 && null != e3) for (b2 = {}, a3 = 0; a3 < u4.attributes.length; a3++) b2[(d3 = u4.attributes[a3]).name] = d3.value;
    for (a3 in b2) if (d3 = b2[a3], "children" == a3) ;
    else if ("dangerouslySetInnerHTML" == a3) v3 = d3;
    else if (!(a3 in k3)) {
      if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3) continue;
      j(u4, a3, null, d3, o3);
    }
    for (a3 in k3) d3 = k3[a3], "children" == a3 ? y3 = d3 : "dangerouslySetInnerHTML" == a3 ? h3 = d3 : "value" == a3 ? _3 = d3 : "checked" == a3 ? m3 = d3 : c3 && "function" != typeof d3 || b2[a3] === d3 || j(u4, a3, d3, b2[a3], o3);
    if (h3) c3 || v3 && (h3.__html == v3.__html || h3.__html == u4.innerHTML) || (u4.innerHTML = h3.__html), t3.__k = [];
    else if (v3 && (u4.innerHTML = ""), I("template" == t3.type ? u4.content : u4, w(y3) ? y3 : [y3], t3, i3, r3, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o3, e3, f4, e3 ? e3[0] : i3.__k && S(i3, 0), c3, s3), null != e3) for (a3 = e3.length; a3--; ) g(e3[a3]);
    c3 || (a3 = "value", "progress" == x3 && null == _3 ? u4.removeAttribute("value") : null != _3 && (_3 !== u4[a3] || "progress" == x3 && !_3 || "option" == x3 && _3 != b2[a3]) && j(u4, a3, _3, b2[a3], o3), a3 = "checked", null != m3 && m3 != u4[a3] && j(u4, a3, m3, b2[a3], o3));
  }
  return u4;
}
function B(n2, u4, t3) {
  try {
    if ("function" == typeof n2) {
      var i3 = "function" == typeof n2.__u;
      i3 && n2.__u(), i3 && null == u4 || (n2.__u = n2(u4));
    } else n2.current = u4;
  } catch (n3) {
    l.__e(n3, t3);
  }
}
function D(n2, u4, t3) {
  var i3, r3;
  if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current != n2.__e || B(i3, null, u4)), null != (i3 = n2.__c)) {
    if (i3.componentWillUnmount) try {
      i3.componentWillUnmount();
    } catch (n3) {
      l.__e(n3, u4);
    }
    i3.base = i3.__P = null;
  }
  if (i3 = n2.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && D(i3[r3], u4, t3 || "function" != typeof n2.type);
  t3 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
}
function E(n2, l3, u4) {
  return this.constructor(n2, u4);
}
function G(u4, t3, i3) {
  var r3, o3, e3, f4;
  t3 == document && (t3 = document.documentElement), l.__ && l.__(u4, t3), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || t3.__k, e3 = [], f4 = [], O(t3, u4 = (!r3 && i3 || t3).__k = _(k, null, [u4]), o3 || p, p, t3.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : t3.firstChild ? n.call(t3.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : t3.firstChild, r3, f4), N(e3, u4, f4);
}
n = v.slice, l = { __e: function(n2, l3, u4, t3) {
  for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
    if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, t3 || {}), o3 = i3.__d), o3) return i3.__E = i3;
  } catch (l4) {
    n2 = l4;
  }
  throw n2;
} }, u = 0, t = function(n2) {
  return null != n2 && null == n2.constructor;
}, x.prototype.setState = function(n2, l3) {
  var u4;
  u4 = null != this.__s && this.__s != this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n2 && (n2 = n2(d({}, u4), this.props)), n2 && d(u4, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
}, x.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
}, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
  return n2.__v.__b - l3.__v.__b;
}, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;

// ../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/hooks/dist/hooks.module.js
var t2;
var r2;
var u2;
var i2;
var o2 = 0;
var f2 = [];
var c2 = l;
var e2 = c2.__b;
var a2 = c2.__r;
var v2 = c2.diffed;
var l2 = c2.__c;
var m2 = c2.unmount;
var s2 = c2.__;
function p2(n2, t3) {
  c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
  var u4 = r2.__H || (r2.__H = { __: [], __h: [] });
  return n2 >= u4.__.length && u4.__.push({}), u4.__[n2];
}
function d2(n2) {
  return o2 = 1, h2(D2, n2);
}
function h2(n2, u4, i3) {
  var o3 = p2(t2++, 2);
  if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u4) : D2(void 0, u4), function(n3) {
    var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
    t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
  }], o3.__c = r2, !r2.__f)) {
    var f4 = function(n3, t3, r3) {
      if (!o3.__c.__H) return true;
      var u5 = o3.__c.__H.__.filter(function(n4) {
        return !!n4.__c;
      });
      if (u5.every(function(n4) {
        return !n4.__N;
      })) return !c3 || c3.call(this, n3, t3, r3);
      var i4 = o3.__c.props !== n3;
      return u5.forEach(function(n4) {
        if (n4.__N) {
          var t4 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
        }
      }), c3 && c3.call(this, n3, t3, r3) || i4;
    };
    r2.__f = true;
    var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
    r2.componentWillUpdate = function(n3, t3, r3) {
      if (this.__e) {
        var u5 = c3;
        c3 = void 0, f4(n3, t3, r3), c3 = u5;
      }
      e3 && e3.call(this, n3, t3, r3);
    }, r2.shouldComponentUpdate = f4;
  }
  return o3.__N || o3.__;
}
function y2(n2, u4) {
  var i3 = p2(t2++, 3);
  !c2.__s && C2(i3.__H, u4) && (i3.__ = n2, i3.u = u4, r2.__H.__h.push(i3));
}
function A2(n2) {
  return o2 = 5, T2(function() {
    return { current: n2 };
  }, []);
}
function T2(n2, r3) {
  var u4 = p2(t2++, 7);
  return C2(u4.__H, r3) && (u4.__ = n2(), u4.__H = r3, u4.__h = n2), u4.__;
}
function q2(n2, t3) {
  return o2 = 8, T2(function() {
    return n2;
  }, t3);
}
function j2() {
  for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
    n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
  } catch (t3) {
    n2.__H.__h = [], c2.__e(t3, n2.__v);
  }
}
c2.__b = function(n2) {
  r2 = null, e2 && e2(n2);
}, c2.__ = function(n2, t3) {
  n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
}, c2.__r = function(n2) {
  a2 && a2(n2), t2 = 0;
  var i3 = (r2 = n2.__c).__H;
  i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
  })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
}, c2.diffed = function(n2) {
  v2 && v2(n2);
  var t3 = n2.__c;
  t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
    n3.u && (n3.__H = n3.u), n3.u = void 0;
  })), u2 = r2 = null;
}, c2.__c = function(n2, t3) {
  t3.some(function(n3) {
    try {
      n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
        return !n4.__ || B2(n4);
      });
    } catch (r3) {
      t3.some(function(n4) {
        n4.__h && (n4.__h = []);
      }), t3 = [], c2.__e(r3, n3.__v);
    }
  }), l2 && l2(n2, t3);
}, c2.unmount = function(n2) {
  m2 && m2(n2);
  var t3, r3 = n2.__c;
  r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
    try {
      z2(n3);
    } catch (n4) {
      t3 = n4;
    }
  }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
};
var k2 = "function" == typeof requestAnimationFrame;
function w2(n2) {
  var t3, r3 = function() {
    clearTimeout(u4), k2 && cancelAnimationFrame(t3), setTimeout(n2);
  }, u4 = setTimeout(r3, 35);
  k2 && (t3 = requestAnimationFrame(r3));
}
function z2(n2) {
  var t3 = r2, u4 = n2.__c;
  "function" == typeof u4 && (n2.__c = void 0, u4()), r2 = t3;
}
function B2(n2) {
  var t3 = r2;
  n2.__c = n2.__(), r2 = t3;
}
function C2(n2, t3) {
  return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
    return t4 !== n2[r3];
  });
}
function D2(n2, t3) {
  return "function" == typeof t3 ? t3(n2) : t3;
}

// ../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/compat/dist/compat.module.js
function g3(n2, t3) {
  for (var e3 in t3) n2[e3] = t3[e3];
  return n2;
}
function E2(n2, t3) {
  for (var e3 in n2) if ("__source" !== e3 && !(e3 in t3)) return true;
  for (var r3 in t3) if ("__source" !== r3 && n2[r3] !== t3[r3]) return true;
  return false;
}
function N2(n2, t3) {
  this.props = n2, this.context = t3;
}
(N2.prototype = new x()).isPureReactComponent = true, N2.prototype.shouldComponentUpdate = function(n2, t3) {
  return E2(this.props, n2) || E2(this.state, t3);
};
var T3 = l.__b;
l.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), T3 && T3(n2);
};
var A3 = "undefined" != typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.forward_ref") || 3911;
var F3 = l.__e;
l.__e = function(n2, t3, e3, r3) {
  if (n2.then) {
    for (var u4, o3 = t3; o3 = o3.__; ) if ((u4 = o3.__c) && u4.__c) return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u4.__c(n2, t3);
  }
  F3(n2, t3, e3, r3);
};
var U = l.unmount;
function V2(n2, t3, e3) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c.__e = true, n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return V2(n3, t3, e3);
  })), n2;
}
function W(n2, t3, e3) {
  return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return W(n3, t3, e3);
  }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e3)), n2;
}
function P3() {
  this.__u = 0, this.o = null, this.__b = null;
}
function j3(n2) {
  var t3 = n2.__.__c;
  return t3 && t3.__a && t3.__a(n2);
}
function B3() {
  this.i = null, this.l = null;
}
l.unmount = function(n2) {
  var t3 = n2.__c;
  t3 && t3.__R && t3.__R(), t3 && 32 & n2.__u && (n2.type = null), U && U(n2);
}, (P3.prototype = new x()).__c = function(n2, t3) {
  var e3 = t3.__c, r3 = this;
  null == r3.o && (r3.o = []), r3.o.push(e3);
  var u4 = j3(r3.__v), o3 = false, i3 = function() {
    o3 || (o3 = true, e3.__R = null, u4 ? u4(l3) : l3());
  };
  e3.__R = i3;
  var l3 = function() {
    if (!--r3.__u) {
      if (r3.state.__a) {
        var n3 = r3.state.__a;
        r3.__v.__k[0] = W(n3, n3.__c.__P, n3.__c.__O);
      }
      var t4;
      for (r3.setState({ __a: r3.__b = null }); t4 = r3.o.pop(); ) t4.forceUpdate();
    }
  };
  r3.__u++ || 32 & t3.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
}, P3.prototype.componentWillUnmount = function() {
  this.o = [];
}, P3.prototype.render = function(n2, e3) {
  if (this.__b) {
    if (this.__v.__k) {
      var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
      this.__v.__k[0] = V2(this.__b, r3, o3.__O = o3.__P);
    }
    this.__b = null;
  }
  var i3 = e3.__a && _(k, null, n2.fallback);
  return i3 && (i3.__u &= -33), [_(k, null, e3.__a ? null : n2.children), i3];
};
var H2 = function(n2, t3, e3) {
  if (++e3[1] === e3[0] && n2.l.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.l.size)) for (e3 = n2.i; e3; ) {
    for (; e3.length > 3; ) e3.pop()();
    if (e3[1] < e3[0]) break;
    n2.i = e3 = e3[2];
  }
};
(B3.prototype = new x()).__a = function(n2) {
  var t3 = this, e3 = j3(t3.__v), r3 = t3.l.get(n2);
  return r3[0]++, function(u4) {
    var o3 = function() {
      t3.props.revealOrder ? (r3.push(u4), H2(t3, n2, r3)) : u4();
    };
    e3 ? e3(o3) : o3();
  };
}, B3.prototype.render = function(n2) {
  this.i = null, this.l = /* @__PURE__ */ new Map();
  var t3 = H(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
  for (var e3 = t3.length; e3--; ) this.l.set(t3[e3], this.i = [1, 0, this.i]);
  return n2.children;
}, B3.prototype.componentDidUpdate = B3.prototype.componentDidMount = function() {
  var n2 = this;
  this.l.forEach(function(t3, e3) {
    H2(n2, e3, t3);
  });
};
var q3 = "undefined" != typeof Symbol && Symbol.for && /* @__PURE__ */ Symbol.for("react.element") || 60103;
var G2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
var J2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
var K2 = /[A-Z0-9]/g;
var Q2 = "undefined" != typeof document;
var X = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof /* @__PURE__ */ Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
function nn(n2, t3, e3) {
  return null == t3.__k && (t3.textContent = ""), G(n2, t3), "function" == typeof e3 && e3(), n2 ? n2.__c : null;
}
x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
  Object.defineProperty(x.prototype, t3, { configurable: true, get: function() {
    return this["UNSAFE_" + t3];
  }, set: function(n2) {
    Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
  } });
});
var en = l.event;
function rn() {
}
function un() {
  return this.cancelBubble;
}
function on() {
  return this.defaultPrevented;
}
l.event = function(n2) {
  return en && (n2 = en(n2)), n2.persist = rn, n2.isPropagationStopped = un, n2.isDefaultPrevented = on, n2.nativeEvent = n2;
};
var ln;
var cn = { enumerable: false, configurable: true, get: function() {
  return this.class;
} };
var fn = l.vnode;
l.vnode = function(n2) {
  "string" == typeof n2.type && (function(n3) {
    var t3 = n3.props, e3 = n3.type, u4 = {}, o3 = -1 === e3.indexOf("-");
    for (var i3 in t3) {
      var l3 = t3[i3];
      if (!("value" === i3 && "defaultValue" in t3 && null == l3 || Q2 && "children" === i3 && "noscript" === e3 || "class" === i3 || "className" === i3)) {
        var c3 = i3.toLowerCase();
        "defaultValue" === i3 && "value" in t3 && null == t3.value ? i3 = "value" : "download" === i3 && true === l3 ? l3 = "" : "translate" === c3 && "no" === l3 ? l3 = false : "o" === c3[0] && "n" === c3[1] ? "ondoubleclick" === c3 ? i3 = "ondblclick" : "onchange" !== c3 || "input" !== e3 && "textarea" !== e3 || X(t3.type) ? "onfocus" === c3 ? i3 = "onfocusin" : "onblur" === c3 ? i3 = "onfocusout" : J2.test(i3) && (i3 = c3) : c3 = i3 = "oninput" : o3 && G2.test(i3) ? i3 = i3.replace(K2, "-$&").toLowerCase() : null === l3 && (l3 = void 0), "oninput" === c3 && u4[i3 = c3] && (i3 = "oninputCapture"), u4[i3] = l3;
      }
    }
    "select" == e3 && u4.multiple && Array.isArray(u4.value) && (u4.value = H(t3.children).forEach(function(n4) {
      n4.props.selected = -1 != u4.value.indexOf(n4.props.value);
    })), "select" == e3 && null != u4.defaultValue && (u4.value = H(t3.children).forEach(function(n4) {
      n4.props.selected = u4.multiple ? -1 != u4.defaultValue.indexOf(n4.props.value) : u4.defaultValue == n4.props.value;
    })), t3.class && !t3.className ? (u4.class = t3.class, Object.defineProperty(u4, "className", cn)) : (t3.className && !t3.class || t3.class && t3.className) && (u4.class = u4.className = t3.className), n3.props = u4;
  })(n2), n2.$$typeof = q3, fn && fn(n2);
};
var an = l.__r;
l.__r = function(n2) {
  an && an(n2), ln = n2.__c;
};
var sn = l.diffed;
l.diffed = function(n2) {
  sn && sn(n2);
  var t3 = n2.props, e3 = n2.__e;
  null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), ln = null;
};
function bn(n2) {
  return !!n2.__k && (G(null, n2), true);
}

// ../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/compat/client.mjs
function createRoot(container2) {
  return {
    // eslint-disable-next-line
    render: function(children) {
      nn(children, container2);
    },
    // eslint-disable-next-line
    unmount: function() {
      bn(container2);
    }
  };
}

// src/audio/SoundEngine.ts
var SoundEngine = class {
  constructor() {
    __publicField(this, "ctx", null);
    __publicField(this, "masterGain", null);
    __publicField(this, "bgmGain", null);
    __publicField(this, "sfxGain", null);
    __publicField(this, "settings", {
      masterVolume: 0.7,
      bgmVolume: 0.55,
      sfxVolume: 0.75,
      muted: false
    });
    __publicField(this, "isBgmPlaying", false);
    __publicField(this, "bgmTimer", null);
    __publicField(this, "currentStep", 0);
    __publicField(this, "tempo", 136);
    // Fast upbeat adventure tempo
    __publicField(this, "tempoMultiplier", 1);
    // Speeds up near finish!
    __publicField(this, "heartbeatNode", null);
    __publicField(this, "heartbeatGain", null);
    __publicField(this, "heartbeatInterval", null);
    __publicField(this, "gemStreak", 0);
    __publicField(this, "lastGemTime", 0);
  }
  init() {
    if (this.ctx) {
      if (this.ctx.state === "suspended") {
        this.ctx.resume();
      }
      return;
    }
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.bgmGain = this.ctx.createGain();
      this.sfxGain = this.ctx.createGain();
      this.bgmGain.connect(this.masterGain);
      this.sfxGain.connect(this.masterGain);
      this.masterGain.connect(this.ctx.destination);
      this.applySettings();
    } catch (e3) {
      console.warn("Web Audio not supported or blocked:", e3);
    }
  }
  updateSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    this.applySettings();
  }
  getSettings() {
    return { ...this.settings };
  }
  applySettings() {
    if (!this.masterGain || !this.bgmGain || !this.sfxGain) return;
    const now = this.ctx ? this.ctx.currentTime : 0;
    const isMuted = this.settings.muted;
    this.masterGain.gain.setValueAtTime(isMuted ? 0 : this.settings.masterVolume, now);
    this.bgmGain.gain.setValueAtTime(this.settings.bgmVolume, now);
    this.sfxGain.gain.setValueAtTime(this.settings.sfxVolume, now);
  }
  // --- Sound Effects (Synthesized with precise retro waveforms) ---
  // Jump - Cheerful Spring Boing
  playJump() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(150, now);
    osc.frequency.exponentialRampToValueAtTime(520, now + 0.16);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.19);
  }
  // Super Jump - High energetic boing
  playSuperJump() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.25);
    gain.gain.setValueAtTime(0.5, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.28);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.29);
  }
  // Dash - Air Whoosh
  playDash() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.18;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i3 = 0; i3 < bufferSize; i3++) {
      output[i3] = Math.random() * 2 - 1;
    }
    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;
    const filter = this.ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(800, now);
    filter.frequency.exponentialRampToValueAtTime(3200, now + 0.18);
    filter.Q.value = 3;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.45, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.18);
    whiteNoise.connect(filter);
    filter.connect(gain);
    gain.connect(this.sfxGain);
    whiteNoise.start(now);
  }
  // Gem Collection - Sparkly Chime with pitch ascension for combo streaks!
  playGemCollect() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;
    if (Date.now() - this.lastGemTime < 600) {
      this.gemStreak = Math.min(this.gemStreak + 1, 8);
    } else {
      this.gemStreak = 0;
    }
    this.lastGemTime = Date.now();
    const baseFreqs = [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98, 2093];
    const rootIndex = this.gemStreak % baseFreqs.length;
    const f1 = baseFreqs[rootIndex];
    const f22 = f1 * 1.5;
    [f1, f22].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now + idx * 0.05);
      gain.gain.setValueAtTime(0.35, now + idx * 0.05);
      gain.gain.exponentialRampToValueAtTime(1e-3, now + idx * 0.05 + 0.18);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + idx * 0.05);
      osc.stop(now + idx * 0.05 + 0.2);
    });
  }
  // Mystery Box Open - Triumphant Fanfare Sparkle
  playMysteryBox() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const notes = [440, 554.37, 659.25, 880, 1108.73];
    notes.forEach((freq, i3) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + i3 * 0.07);
      gain.gain.setValueAtTime(0.3, now + i3 * 0.07);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i3 * 0.07 + 0.25);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + i3 * 0.07);
      osc.stop(now + i3 * 0.07 + 0.26);
    });
  }
  // Obstacle Hit / Damage - Funny Baby Bear Squeak + Low Thud
  playDamage() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const squeak = this.ctx.createOscillator();
    const squeakGain = this.ctx.createGain();
    squeak.type = "sine";
    squeak.frequency.setValueAtTime(900, now);
    squeak.frequency.exponentialRampToValueAtTime(350, now + 0.22);
    squeakGain.gain.setValueAtTime(0.55, now);
    squeakGain.gain.exponentialRampToValueAtTime(0.01, now + 0.22);
    squeak.connect(squeakGain);
    squeakGain.connect(this.sfxGain);
    squeak.start(now);
    squeak.stop(now + 0.23);
    const thud = this.ctx.createOscillator();
    const thudGain = this.ctx.createGain();
    thud.type = "triangle";
    thud.frequency.setValueAtTime(140, now);
    thud.frequency.exponentialRampToValueAtTime(40, now + 0.25);
    thudGain.gain.setValueAtTime(0.6, now);
    thudGain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
    thud.connect(thudGain);
    thudGain.connect(this.sfxGain);
    thud.start(now);
    thud.stop(now + 0.26);
    if (typeof navigator !== "undefined" && "vibrate" in navigator) {
      navigator.vibrate([70, 40, 90]);
    }
  }
  // Heart Break Ping
  playHeartBreak() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.35);
    gain.gain.setValueAtTime(0.35, now);
    gain.gain.exponentialRampToValueAtTime(1e-3, now + 0.35);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.36);
  }
  // Powerup Pickup / Activation
  playPowerup() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const notes = [329.63, 440, 554.37, 659.25, 880];
    notes.forEach((n2, i3) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(n2, now + i3 * 0.05);
      gain.gain.setValueAtTime(0.28, now + i3 * 0.05);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i3 * 0.05 + 0.16);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + i3 * 0.05);
      osc.stop(now + i3 * 0.05 + 0.18);
    });
  }
  // Shield Break
  playShieldBreak() {
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(320, now);
    osc.frequency.exponentialRampToValueAtTime(100, now + 0.2);
    gain.gain.setValueAtTime(0.4, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
    osc.connect(gain);
    gain.connect(this.sfxGain);
    osc.start(now);
    osc.stop(now + 0.22);
  }
  // Heartbeat Loop (starts softly when lives === 1)
  startHeartbeat() {
    if (this.heartbeatInterval) return;
    this.init();
    this.heartbeatInterval = window.setInterval(() => {
      if (!this.ctx || !this.sfxGain || this.settings.muted) return;
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(75, now);
      osc1.frequency.exponentialRampToValueAtTime(45, now + 0.1);
      gain1.gain.setValueAtTime(0.3, now);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(this.sfxGain);
      osc1.start(now);
      osc1.stop(now + 0.13);
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(85, now + 0.18);
      osc2.frequency.exponentialRampToValueAtTime(50, now + 0.28);
      gain2.gain.setValueAtTime(0.38, now + 0.18);
      gain2.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
      osc2.connect(gain2);
      gain2.connect(this.sfxGain);
      osc2.start(now + 0.18);
      osc2.stop(now + 0.31);
    }, 850);
  }
  stopHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }
  // Elimination Wah-Wah
  playElimination() {
    this.stopHeartbeat();
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const notes = [350, 330, 311, 290];
    notes.forEach((freq, i3) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, now + i3 * 0.18);
      gain.gain.setValueAtTime(0.4, now + i3 * 0.18);
      gain.gain.exponentialRampToValueAtTime(0.01, now + i3 * 0.18 + 0.19);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(now + i3 * 0.18);
      osc.stop(now + i3 * 0.18 + 0.2);
    });
  }
  // Victory Fanfare
  playVictory() {
    this.stopHeartbeat();
    this.init();
    if (!this.ctx || !this.sfxGain || this.settings.muted) return;
    const now = this.ctx.currentTime;
    const fanfare = [
      { f: 523.25, d: 0.12 },
      // C5
      { f: 659.25, d: 0.12 },
      // E5
      { f: 783.99, d: 0.12 },
      // G5
      { f: 1046.5, d: 0.28 },
      // C6
      { f: 880, d: 0.14 },
      // A5
      { f: 1046.5, d: 0.4 }
      // C6
    ];
    let t3 = now;
    fanfare.forEach((n2) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(n2.f, t3);
      gain.gain.setValueAtTime(0.45, t3);
      gain.gain.exponentialRampToValueAtTime(0.01, t3 + n2.d);
      osc.connect(gain);
      gain.connect(this.sfxGain);
      osc.start(t3);
      osc.stop(t3 + n2.d + 0.05);
      t3 += n2.d + 0.03;
    });
  }
  // --- Dynamic Chiptune Background Music Engine ---
  // Catchy, joyful 16-bar loop inspired by Mario & Kirby adventure themes
  startBGM() {
    if (this.isBgmPlaying) return;
    this.init();
    this.isBgmPlaying = true;
    this.currentStep = 0;
    this.scheduleNextBgmBeat();
  }
  stopBGM() {
    this.isBgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
  }
  setDynamicTempo(multiplier) {
    this.tempoMultiplier = Math.max(0.8, Math.min(1.4, multiplier));
  }
  scheduleNextBgmBeat() {
    if (!this.isBgmPlaying) return;
    const melody = [
      523.25,
      0,
      659.25,
      783.99,
      0,
      659.25,
      523.25,
      0,
      587.33,
      0,
      659.25,
      587.33,
      523.25,
      0,
      440,
      0,
      392,
      0,
      523.25,
      659.25,
      783.99,
      0,
      880,
      783.99,
      659.25,
      523.25,
      587.33,
      0,
      523.25,
      0,
      0,
      0
    ];
    const bass = [
      130.81,
      0,
      130.81,
      0,
      164.81,
      0,
      196,
      0,
      146.83,
      0,
      146.83,
      0,
      196,
      0,
      130.81,
      0,
      174.61,
      0,
      174.61,
      0,
      196,
      0,
      196,
      0,
      130.81,
      0,
      196,
      0,
      130.81,
      0,
      0,
      0
    ];
    const step = this.currentStep % melody.length;
    const now = this.ctx ? this.ctx.currentTime : 0;
    if (this.ctx && this.bgmGain && !this.settings.muted) {
      const mNote = melody[step];
      if (mNote > 0) {
        const mOsc = this.ctx.createOscillator();
        const mGain = this.ctx.createGain();
        mOsc.type = "square";
        mOsc.frequency.setValueAtTime(mNote, now);
        mGain.gain.setValueAtTime(0.08, now);
        mGain.gain.exponentialRampToValueAtTime(1e-3, now + 0.14);
        mOsc.connect(mGain);
        mGain.connect(this.bgmGain);
        mOsc.start(now);
        mOsc.stop(now + 0.15);
      }
      const bNote = bass[step];
      if (bNote > 0) {
        const bOsc = this.ctx.createOscillator();
        const bGain = this.ctx.createGain();
        bOsc.type = "triangle";
        bOsc.frequency.setValueAtTime(bNote, now);
        bGain.gain.setValueAtTime(0.18, now);
        bGain.gain.exponentialRampToValueAtTime(0.01, now + 0.16);
        bOsc.connect(bGain);
        bGain.connect(this.bgmGain);
        bOsc.start(now);
        bOsc.stop(now + 0.17);
      }
      if (step % 8 === 4) {
        const bufferSize = Math.floor(this.ctx.sampleRate * 0.05);
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const out = buffer.getChannelData(0);
        for (let i3 = 0; i3 < bufferSize; i3++) out[i3] = (Math.random() * 2 - 1) * 0.3;
        const noise = this.ctx.createBufferSource();
        noise.buffer = buffer;
        const nGain = this.ctx.createGain();
        nGain.gain.setValueAtTime(0.12, now);
        nGain.gain.exponentialRampToValueAtTime(5e-3, now + 0.05);
        noise.connect(nGain);
        nGain.connect(this.bgmGain);
        noise.start(now);
      } else if (step % 2 === 0) {
        const hOsc = this.ctx.createOscillator();
        const hGain = this.ctx.createGain();
        hOsc.type = "sine";
        hOsc.frequency.setValueAtTime(6e3, now);
        hGain.gain.setValueAtTime(0.04, now);
        hGain.gain.exponentialRampToValueAtTime(1e-3, now + 0.03);
        hOsc.connect(hGain);
        hGain.connect(this.bgmGain);
        hOsc.start(now);
        hOsc.stop(now + 0.035);
      }
    }
    this.currentStep++;
    const stepDurationMs = 60 / this.tempo / 4 * 1e3 / this.tempoMultiplier;
    this.bgmTimer = window.setTimeout(() => this.scheduleNextBgmBeat(), stepDurationMs);
  }
};
var soundEngine = new SoundEngine();

// ../../AppData/Local/Programs/Antigravity IDE/resources/app/node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
var f3 = 0;
function u3(e3, t3, n2, o3, i3, u4) {
  t3 || (t3 = {});
  var a3, c3, p3 = t3;
  if ("ref" in p3) for (c3 in p3 = {}, t3) "ref" == c3 ? a3 = t3[c3] : p3[c3] = t3[c3];
  var l3 = { type: e3, props: p3, key: n2, ref: a3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --f3, __i: -1, __u: 0, __source: i3, __self: u4 };
  if ("function" == typeof e3 && (a3 = e3.defaultProps)) for (c3 in a3) void 0 === p3[c3] && (p3[c3] = a3[c3]);
  return l.vnode && l.vnode(l3), l3;
}

// src/components/Header.tsx
var Header = ({
  currentTab,
  setCurrentTab,
  customization,
  onOpenProfile,
  onOpenAchievements,
  onOpenSettings,
  isMuted,
  setIsMuted
}) => {
  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundEngine.updateSettings({ muted: next });
  };
  return /* @__PURE__ */ u3("header", { className: "sticky top-0 z-40 bg-[#1D1427]/90 backdrop-blur-md border-b-4 border-[#FF758F]/40 px-4 py-3", children: /* @__PURE__ */ u3("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [
    /* @__PURE__ */ u3(
      "div",
      {
        onClick: () => setCurrentTab("landing"),
        className: "flex items-center gap-3 cursor-pointer group select-none",
        children: [
          /* @__PURE__ */ u3("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF7B54] to-[#FFD166] flex items-center justify-center text-2xl shadow-md transform group-hover:scale-110 transition-transform", children: "\u{1F43B}" }),
          /* @__PURE__ */ u3("div", { children: [
            /* @__PURE__ */ u3("div", { className: "font-pixel text-xs sm:text-sm text-[#FFD166] tracking-wider flex items-center gap-2", children: [
              "BEAR DASH",
              /* @__PURE__ */ u3("span", { className: "text-[10px] bg-[#FF758F] text-white px-1.5 py-0.5 rounded font-mono", children: "HD PIXEL" })
            ] }),
            /* @__PURE__ */ u3("div", { className: "text-[11px] text-gray-300 font-fun hidden sm:block", children: "Pixel Adventure Racing" })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ u3("nav", { className: "flex items-center gap-1 sm:gap-2", children: [
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: () => setCurrentTab("landing"),
          className: `px-3 py-1.5 rounded-lg text-xs font-pixel transition-all ${currentTab === "landing" ? "bg-[#FF758F] text-white shadow-md" : "text-gray-300 hover:text-white hover:bg-white/10"}`,
          children: "Home"
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: () => setCurrentTab("wardrobe"),
          className: `px-3 py-1.5 rounded-lg text-xs font-pixel transition-all ${currentTab === "wardrobe" ? "bg-[#FF758F] text-white shadow-md" : "text-gray-300 hover:text-white hover:bg-white/10"}`,
          children: "Wardrobe \u{1F451}"
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: () => setCurrentTab("lobby"),
          className: `px-3 py-1.5 rounded-lg text-xs font-pixel transition-all ${currentTab === "lobby" || currentTab === "game" ? "bg-[#FFD166] text-[#381A00] font-bold shadow-md" : "text-gray-300 hover:text-white hover:bg-white/10"}`,
          children: "Play Now \u{1F3C1}"
        }
      )
    ] }),
    /* @__PURE__ */ u3("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: toggleMute,
          title: isMuted ? "Unmute Audio" : "Mute Audio",
          className: "w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition-all",
          children: isMuted ? "\u{1F507}" : "\u{1F50A}"
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: onOpenAchievements,
          title: "Achievements",
          className: "w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition-all",
          children: "\u{1F3C6}"
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: onOpenSettings,
          title: "Settings",
          className: "w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-sm transition-all",
          children: "\u2699\uFE0F"
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: onOpenProfile,
          className: "flex items-center gap-2 bg-[#2D1B3E] hover:bg-[#3D2554] border-2 border-[#FF758F]/60 px-2.5 py-1 rounded-xl transition-all",
          children: [
            /* @__PURE__ */ u3("div", { className: "w-6 h-6 rounded-full bg-[#FFB085] flex items-center justify-center text-xs", children: "\u{1F43B}" }),
            /* @__PURE__ */ u3("span", { className: "text-xs font-bold text-gray-200 hidden md:inline", children: customization.name })
          ]
        }
      )
    ] })
  ] }) });
};

// src/components/LandingHero.tsx
var LandingHero = ({
  customization,
  onPlaySinglePlayer,
  onPlayMultiplayer,
  onJoinRoomCode,
  onCustomize
}) => {
  const [joinCodeInput, setJoinCodeInput] = d2("");
  const [showCodeModal, setShowCodeModal] = d2(false);
  const handleJoin = (e3) => {
    e3.preventDefault();
    if (joinCodeInput.trim()) {
      onJoinRoomCode(joinCodeInput.trim().toUpperCase());
    }
  };
  return /* @__PURE__ */ u3("div", { className: "relative overflow-hidden pt-8 pb-16 px-4 bg-gradient-to-b from-[#2B1B3D] via-[#1F142B] to-[#160E1E]", children: [
    /* @__PURE__ */ u3("div", { className: "absolute top-10 left-10 text-3xl animate-float opacity-75", children: "\u2601\uFE0F" }),
    /* @__PURE__ */ u3("div", { className: "absolute top-20 right-16 text-3xl animate-float delay-1000 opacity-75", children: "\u{1F338}" }),
    /* @__PURE__ */ u3("div", { className: "absolute bottom-12 left-1/4 text-2xl animate-bounce-slow opacity-60", children: "\u{1F48E}" }),
    /* @__PURE__ */ u3("div", { className: "absolute top-36 right-1/3 text-2xl animate-float opacity-70", children: "\u2728" }),
    /* @__PURE__ */ u3("div", { className: "max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10", children: [
      /* @__PURE__ */ u3("div", { className: "flex-1 text-center lg:text-left space-y-6", children: [
        /* @__PURE__ */ u3("div", { className: "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF758F]/20 border border-[#FF758F]/50 text-[#FFD166] text-xs font-pixel", children: [
          /* @__PURE__ */ u3("span", { className: "w-2 h-2 rounded-full bg-[#70E000] animate-ping" }),
          "2\u20138 PLAYERS MULTIPLAYER RACING"
        ] }),
        /* @__PURE__ */ u3("h1", { className: "text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight", children: [
          "Survive. Race. ",
          /* @__PURE__ */ u3("br", {}),
          /* @__PURE__ */ u3("span", { className: "rainbow-text font-pixel text-3xl sm:text-5xl block mt-2", children: "BEAR DASH!" })
        ] }),
        /* @__PURE__ */ u3("p", { className: "text-gray-300 text-base sm:text-lg max-w-xl font-fun", children: "Take control of an adorable baby bear! Dodge spinning blades, hop on bouncing mushrooms, grab mystery power-ups, and sprint to the finish line in a magical Golden Hour adventure." }),
        /* @__PURE__ */ u3("div", { className: "grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0 py-2", children: [
          /* @__PURE__ */ u3("div", { className: "bg-[#2D1B3E]/80 border-2 border-[#FF758F]/30 p-2.5 rounded-xl text-center", children: [
            /* @__PURE__ */ u3("div", { className: "text-xl", children: "\u2764\uFE0F \u2764\uFE0F \u2764\uFE0F" }),
            /* @__PURE__ */ u3("div", { className: "text-[11px] text-gray-300 font-pixel mt-1", children: "3 LIVES" })
          ] }),
          /* @__PURE__ */ u3("div", { className: "bg-[#2D1B3E]/80 border-2 border-[#FFD166]/30 p-2.5 rounded-xl text-center", children: [
            /* @__PURE__ */ u3("div", { className: "text-xl", children: "\u{1F3DE}\uFE0F 6" }),
            /* @__PURE__ */ u3("div", { className: "text-[11px] text-gray-300 font-pixel mt-1", children: "BIOMES" })
          ] }),
          /* @__PURE__ */ u3("div", { className: "bg-[#2D1B3E]/80 border-2 border-[#4CC9F0]/30 p-2.5 rounded-xl text-center", children: [
            /* @__PURE__ */ u3("div", { className: "text-xl", children: "\u26A1 11" }),
            /* @__PURE__ */ u3("div", { className: "text-[11px] text-gray-300 font-pixel mt-1", children: "BOOSTERS" })
          ] })
        ] }),
        /* @__PURE__ */ u3("div", { className: "flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2", children: [
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: onPlayMultiplayer,
              className: "btn-pixel btn-pixel-gold px-8 py-4 rounded-2xl font-pixel text-sm sm:text-base flex items-center gap-3 shadow-lg",
              children: [
                /* @__PURE__ */ u3("span", { children: "\u{1F3C1}" }),
                " PLAY MULTIPLAYER"
              ]
            }
          ),
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: onPlaySinglePlayer,
              className: "btn-pixel btn-pixel-pink px-6 py-4 rounded-2xl font-pixel text-xs sm:text-sm flex items-center gap-2",
              children: [
                /* @__PURE__ */ u3("span", { children: "\u{1F916}" }),
                " PRACTICE VS BOTS"
              ]
            }
          ),
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: () => setShowCodeModal(true),
              className: "btn-pixel btn-pixel-purple px-5 py-4 rounded-2xl font-pixel text-xs flex items-center gap-2",
              children: [
                /* @__PURE__ */ u3("span", { children: "\u{1F511}" }),
                " ENTER ROOM CODE"
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { className: "w-full max-w-md", children: /* @__PURE__ */ u3("div", { className: "pixel-box p-6 relative", children: [
        /* @__PURE__ */ u3("div", { className: "flex items-center justify-between pb-4 border-b border-white/10", children: [
          /* @__PURE__ */ u3("div", { className: "flex items-center gap-2 font-pixel text-xs text-[#FFD166]", children: [
            /* @__PURE__ */ u3("span", { children: "\u{1F43B}" }),
            " CURRENT RACER"
          ] }),
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: onCustomize,
              className: "text-xs bg-[#FF758F] hover:bg-[#FF758F]/80 text-white font-pixel px-2.5 py-1 rounded transition-colors",
              children: "CUSTOMIZE"
            }
          )
        ] }),
        /* @__PURE__ */ u3("div", { className: "my-6 py-10 bg-gradient-to-b from-[#FFB085]/20 to-[#70E000]/20 rounded-xl flex flex-col items-center justify-center relative overflow-hidden border border-white/10", children: [
          /* @__PURE__ */ u3("div", { className: "w-48 h-5 bg-[#70E000] rounded-t-lg absolute bottom-4 border-t-2 border-[#A7FF00] shadow-md" }),
          /* @__PURE__ */ u3("div", { className: "w-48 h-4 bg-[#4A2810] absolute bottom-0" }),
          /* @__PURE__ */ u3("div", { className: "relative z-10 flex flex-col items-center animate-bounce-slow", children: [
            /* @__PURE__ */ u3("div", { className: "text-6xl drop-shadow-lg", children: "\u{1F43B}" }),
            /* @__PURE__ */ u3("div", { className: "text-xs font-pixel text-white mt-1 bg-black/50 px-2 py-0.5 rounded", children: customization.name })
          ] }),
          /* @__PURE__ */ u3("div", { className: "absolute top-4 right-6 text-xl animate-float", children: "\u{1F48E}" }),
          /* @__PURE__ */ u3("div", { className: "absolute top-6 left-6 text-xl animate-float delay-700", children: "\u{1F381}" })
        ] }),
        /* @__PURE__ */ u3("div", { className: "space-y-2 text-xs text-gray-300 font-fun", children: [
          /* @__PURE__ */ u3("div", { className: "flex justify-between py-1 border-b border-white/5", children: [
            /* @__PURE__ */ u3("span", { children: "Fur Style:" }),
            /* @__PURE__ */ u3("span", { className: "font-bold text-[#FFD166] capitalize", children: customization.fur })
          ] }),
          /* @__PURE__ */ u3("div", { className: "flex justify-between py-1 border-b border-white/5", children: [
            /* @__PURE__ */ u3("span", { children: "Hat Accessory:" }),
            /* @__PURE__ */ u3("span", { className: "font-bold text-[#FF758F] capitalize", children: customization.hat })
          ] }),
          /* @__PURE__ */ u3("div", { className: "flex justify-between py-1 border-b border-white/5", children: [
            /* @__PURE__ */ u3("span", { children: "Scarf Accessory:" }),
            /* @__PURE__ */ u3("span", { className: "font-bold text-[#4CC9F0] capitalize", children: customization.scarf })
          ] }),
          /* @__PURE__ */ u3("div", { className: "flex justify-between py-1", children: [
            /* @__PURE__ */ u3("span", { children: "Backpack:" }),
            /* @__PURE__ */ u3("span", { className: "font-bold text-[#70E000] capitalize", children: customization.backpack })
          ] })
        ] })
      ] }) })
    ] }),
    showCodeModal && /* @__PURE__ */ u3("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4", children: /* @__PURE__ */ u3("div", { className: "pixel-box-gold p-6 max-w-sm w-full space-y-4", children: [
      /* @__PURE__ */ u3("div", { className: "flex justify-between items-center", children: [
        /* @__PURE__ */ u3("h3", { className: "font-pixel text-xs text-[#FFD166]", children: "JOIN PRIVATE ROOM" }),
        /* @__PURE__ */ u3(
          "button",
          {
            onClick: () => setShowCodeModal(false),
            className: "text-gray-400 hover:text-white font-bold",
            children: "\u2715"
          }
        )
      ] }),
      /* @__PURE__ */ u3("p", { className: "text-xs text-gray-300", children: "Enter the room code shared by your friend (e.g. BEAR-7788):" }),
      /* @__PURE__ */ u3("form", { onSubmit: handleJoin, className: "space-y-3", children: [
        /* @__PURE__ */ u3(
          "input",
          {
            type: "text",
            placeholder: "BEAR-XXXX",
            value: joinCodeInput,
            onChange: (e3) => setJoinCodeInput(e3.target.value),
            className: "w-full bg-black/50 border-2 border-[#FFD166] rounded-xl px-3 py-2 text-center font-pixel text-base text-white tracking-widest uppercase focus:outline-none focus:ring-2 focus:ring-[#FFD166]",
            maxLength: 9,
            autoFocus: true
          }
        ),
        /* @__PURE__ */ u3("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ u3(
            "button",
            {
              type: "button",
              onClick: () => setShowCodeModal(false),
              className: "flex-1 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-xs font-pixel",
              children: "Cancel"
            }
          ),
          /* @__PURE__ */ u3(
            "button",
            {
              type: "submit",
              className: "flex-1 py-2 rounded-xl btn-pixel btn-pixel-gold text-xs font-pixel",
              children: "Join Room"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
};

// src/components/FeaturesSection.tsx
var FeaturesSection = () => {
  const features = [
    {
      icon: "\u{1F3C1}",
      title: "2\u20138 Player Multiplayer",
      desc: "Race in real time with private rooms, custom invite codes, or instant single-player practice with adorable AI baby bears.",
      color: "#FFD166"
    },
    {
      icon: "\u2764\uFE0F",
      title: "3-Heart Survival Drama",
      desc: "Start with 3 lives. Take a hit and your bear flashes red. At 1 life, your heart races and screen edges pulse red. Reach 0 to float as an angelic ghost spectator!",
      color: "#FF758F"
    },
    {
      icon: "\u{1F3DE}\uFE0F",
      title: "6 Seamless Biomes",
      desc: "Over 13,000 pixels of handcrafted adventure across Peach Forest, River Bridges, Crystal Caves, Snowy Peaks, Molten Castle, and Rainbow Clouds.",
      color: "#70E000"
    },
    {
      icon: "\u{1F381}",
      title: "11 Power-Ups & Mystery Boxes",
      desc: "Shatter glowing treasure chests to unleash Gem Magnets, Speed Boosts, Hoverboards, Invincibility, Super Jumps, Slow-Mo and Golden Bear mode!",
      color: "#4CC9F0"
    },
    {
      icon: "\u2728",
      title: "Modern HD Pixel Art",
      desc: "Alive with golden sunset lighting, swaying trees, fluttering butterflies, waterfalls, floating leaves, and pixel dust under little bear paws.",
      color: "#9D4EDD"
    },
    {
      icon: "\u{1F3B5}",
      title: "Dynamic Chiptune Audio",
      desc: "Energetic procedural 16-bit soundtracks inspired by Mario and Kirby that dynamically speed up when sprinting towards the finish line!",
      color: "#FF7B54"
    }
  ];
  return /* @__PURE__ */ u3("section", { className: "py-16 px-4 bg-[#1B1425]", children: /* @__PURE__ */ u3("div", { className: "max-w-6xl mx-auto space-y-12", children: [
    /* @__PURE__ */ u3("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ u3("div", { className: "font-pixel text-xs text-[#FF758F] tracking-widest uppercase", children: "WHY YOU WILL LOVE IT" }),
      /* @__PURE__ */ u3("h2", { className: "text-3xl sm:text-5xl font-extrabold text-white", children: "Designed for Pure Joy & Excitement" }),
      /* @__PURE__ */ u3("p", { className: "text-gray-400 max-w-2xl mx-auto text-sm sm:text-base font-fun", children: "Inspired by Subway Surfers, Mario, Crossy Road, Fall Guys, and Celeste \u2014 combining tight retro platforming with modern multiplayer racing." })
    ] }),
    /* @__PURE__ */ u3("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((feat, i3) => /* @__PURE__ */ u3(
      "div",
      {
        className: "pixel-box p-6 space-y-3 transition-transform hover:-translate-y-1",
        style: { borderColor: `${feat.color}60` },
        children: [
          /* @__PURE__ */ u3(
            "div",
            {
              className: "w-12 h-12 rounded-xl flex items-center justify-center text-2xl shadow-inner",
              style: { backgroundColor: `${feat.color}25` },
              children: feat.icon
            }
          ),
          /* @__PURE__ */ u3("h3", { className: "text-lg font-bold text-white font-fun", style: { color: feat.color }, children: feat.title }),
          /* @__PURE__ */ u3("p", { className: "text-gray-300 text-xs sm:text-sm font-fun leading-relaxed", children: feat.desc })
        ]
      },
      i3
    )) })
  ] }) });
};

// src/game/constants.ts
var GAME_CONSTANTS = {
  CANVAS_WIDTH: 960,
  CANVAS_HEIGHT: 540,
  WORLD_GRAVITY: 0.58,
  MAX_FALL_SPEED: 14,
  BASE_RUN_SPEED: 4.8,
  BASE_JUMP_FORCE: -11.5,
  SUPER_JUMP_FORCE: -16.5,
  DASH_IMPULSE: 12,
  DASH_COOLDOWN: 1.2,
  BOUNCE_PAD_FORCE: -17,
  PLAYER_WIDTH: 36,
  PLAYER_HEIGHT: 44,
  FINISH_X: 13200,
  // Total adventure map length in pixels
  HURT_INVULNERABLE_TIME: 1.6,
  // seconds of damage invincibility
  MAX_LIVES: 3
};
var FUR_COLORS = {
  brown: {
    name: "Honey Bear",
    primary: "#B86227",
    secondary: "#D97736",
    snout: "#FFE3C4",
    earInner: "#FFC899"
  },
  white: {
    name: "Polar Bear",
    primary: "#D6E2E9",
    secondary: "#FFFFFF",
    snout: "#EFF6F9",
    earInner: "#FFD6DE"
  },
  caramel: {
    name: "Caramel Chew",
    primary: "#9C5821",
    secondary: "#C97A34",
    snout: "#FDE4C3",
    earInner: "#FABD7A"
  },
  panda: {
    name: "Panda Cub",
    primary: "#2B2D42",
    secondary: "#F8F9FA",
    snout: "#FFFFFF",
    earInner: "#1E1F29"
  },
  pink: {
    name: "Berry Blush",
    primary: "#D94F70",
    secondary: "#FF758F",
    snout: "#FFE0E6",
    earInner: "#FFB3C1"
  },
  shadow: {
    name: "Midnight Cub",
    primary: "#3A2E59",
    secondary: "#5C4B82",
    snout: "#C4B5E8",
    earInner: "#8068A8"
  },
  golden: {
    name: "Golden Bear",
    primary: "#D49B00",
    secondary: "#FFD166",
    snout: "#FFF3B0",
    earInner: "#FFE66D"
  }
};
var HATS_CATALOG = {
  none: { name: "Bare Ears", icon: "\u{1F43B}", description: "Cute natural baby bear ears" },
  crown: { name: "Royal Crown", icon: "\u{1F451}", description: "Gleaming golden crown with jewels" },
  chef: { name: "Chef Toque", icon: "\u{1F468}\u200D\u{1F373}", description: "Fluffy white pastry chef hat" },
  strawberry: { name: "Berry Cap", icon: "\u{1F353}", description: "Delicious sweet strawberry beret" },
  propeller: { name: "Propeller Beanie", icon: "\u{1F681}", description: "Spins merrily in the wind" },
  wizard: { name: "Starry Wizard", icon: "\u{1F9D9}\u200D\u2642\uFE0F", description: "Pointy magical wizard hat" },
  viking: { name: "Viking Horns", icon: "\u2694\uFE0F", description: "Brave miniature horned helm" },
  flower: { name: "Rainbow Crown", icon: "\u{1F338}", description: "Woven blossoms from the magical forest" }
};
var SCARVES_CATALOG = {
  none: { name: "No Scarf", color: "transparent", description: "Clean cozy look" },
  red: { name: "Crimson Wool", color: "#E63946", description: "Warm hand-knitted red scarf" },
  rainbow: { name: "Rainbow Ribbon", color: "#FF758F", description: "Shimmers with all forest colors" },
  blue: { name: "Royal Silk", color: "#4CC9F0", description: "Soft flowing sky blue scarf" },
  emerald: { name: "Emerald Forest", color: "#52B788", description: "Infused with enchanted forest leaves" },
  gold_bowtie: { name: "Gentlebear Bowtie", color: "#FFD166", description: "Dapper golden bowtie" }
};
var BACKPACKS_CATALOG = {
  none: { name: "No Backpack", icon: "\u{1F392}", description: "Travel light and free" },
  honeypot: { name: "Honey Pot", icon: "\u{1F36F}", description: "Fresh golden wild honey jar" },
  rocket: { name: "Tiny Jetpack", icon: "\u{1F680}", description: "Cute twin booster rockets" },
  leaf: { name: "Sprout Satchel", icon: "\u{1F331}", description: "Made from giant forest leaves" },
  star: { name: "Star Bag", icon: "\u2B50", description: "Stores twinkling starlight" },
  mushroom: { name: "Shroom Pack", icon: "\u{1F344}", description: "Spotted mushroom cap pack" }
};
var POWERUPS_CONFIG = {
  magnet: {
    name: "Gem Magnet",
    icon: "\u{1F9F2}",
    duration: 8,
    description: "Automatically attracts all nearby gems!",
    color: "#FF758F"
  },
  speed_boost: {
    name: "Speed Boost",
    icon: "\u26A1",
    duration: 6,
    description: "Run twice as fast with a fiery trail!",
    color: "#FFD166"
  },
  hoverboard: {
    name: "Hoverboard",
    icon: "\u{1F6F9}",
    duration: 10,
    description: "Glide gracefully and absorb 1 obstacle hit!",
    color: "#4CC9F0"
  },
  invincibility: {
    name: "Invincibility",
    icon: "\u2B50",
    duration: 7,
    description: "Rainbow aura! Ignore all obstacles and hazards!",
    color: "#FFBE0B"
  },
  shield: {
    name: "Energy Shield",
    icon: "\u{1F6E1}\uFE0F",
    duration: 15,
    description: "Absorbs the next obstacle collision.",
    color: "#70E000"
  },
  slow_motion: {
    name: "Slow Motion",
    icon: "\u23F1\uFE0F",
    duration: 6.5,
    description: "Slows down spinning blades, logs and traps!",
    color: "#9D4EDD"
  },
  super_jump: {
    name: "Super Jump",
    icon: "\u{1F998}",
    duration: 8,
    description: "Leap soaring high above obstacles!",
    color: "#FB5607"
  },
  dash: {
    name: "Quick Dash",
    icon: "\u{1F300}",
    duration: 0.4,
    description: "Instant forward invulnerable warp burst!",
    color: "#3A86FF"
  },
  extra_life: {
    name: "Extra Life",
    icon: "\u2764\uFE0F",
    duration: 0,
    description: "Restores one lost heart immediately!",
    color: "#E63946"
  },
  gem_multiplier: {
    name: "Gem Multiplier",
    icon: "\u{1F48E}",
    duration: 10,
    description: "Doubles all collected gem points!",
    color: "#06D6A0"
  },
  golden_bear: {
    name: "Golden Bear Mode",
    icon: "\u{1F3C6}",
    duration: 9,
    description: "Supreme combo: Super speed + magnet + golden shine!",
    color: "#FFD700"
  }
};
var ACHIEVEMENTS_LIST = [
  { id: "first_race", name: "First Steps", icon: "\u{1F43E}", description: "Complete your first Bear Dash race", reward: 100 },
  { id: "gem_hoarder", name: "Gem Hoarder", icon: "\u{1F48E}", description: "Collect 100 total gems across races", reward: 250 },
  { id: "speed_demon", name: "Speed Demon", icon: "\u26A1", description: "Reach the finish line in under 75 seconds", reward: 400 },
  { id: "flawless", name: "Flawless Fur", icon: "\u{1F496}", description: "Finish a race with all 3 hearts intact", reward: 500 },
  { id: "daredevil", name: "Daredevil", icon: "\u{1F6F9}", description: "Survive with only 1 heart remaining", reward: 300 },
  { id: "power_hungry", name: "Power Packed", icon: "\u2B50", description: "Use 5 or more power-ups in a single race", reward: 200 },
  { id: "podium_champ", name: "Grand Champion", icon: "\u{1F3C6}", description: "Take 1st place in a multiplayer race", reward: 600 },
  { id: "fashion_bear", name: "Dressed to Impress", icon: "\u{1F451}", description: "Equip a custom hat, scarf and backpack", reward: 150 }
];

// src/components/PowerupsGuide.tsx
var PowerupsGuide = () => {
  return /* @__PURE__ */ u3("section", { className: "py-16 px-4 bg-[#231731] border-t border-b border-white/5", children: /* @__PURE__ */ u3("div", { className: "max-w-6xl mx-auto space-y-12", children: [
    /* @__PURE__ */ u3("div", { className: "text-center space-y-3", children: [
      /* @__PURE__ */ u3("div", { className: "font-pixel text-xs text-[#FFD166] tracking-widest uppercase", children: "COLLECTIBLES & BOOSTERS" }),
      /* @__PURE__ */ u3("h2", { className: "text-3xl sm:text-4xl font-extrabold text-white", children: "Power-Ups Catalog \u{1F381}" }),
      /* @__PURE__ */ u3("p", { className: "text-gray-300 max-w-2xl mx-auto text-sm font-fun", children: "Crack open glowing mystery chests along the course to turn the tide of the race." })
    ] }),
    /* @__PURE__ */ u3("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: Object.entries(POWERUPS_CONFIG).map(([key, p3]) => /* @__PURE__ */ u3(
      "div",
      {
        className: "bg-[#1C1229] border-2 rounded-2xl p-4 flex flex-col justify-between hover:border-white/40 transition-colors shadow-md",
        style: { borderColor: `${p3.color}50` },
        children: [
          /* @__PURE__ */ u3("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ u3(
              "div",
              {
                className: "w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0",
                style: { backgroundColor: `${p3.color}25` },
                children: p3.icon
              }
            ),
            /* @__PURE__ */ u3("div", { children: [
              /* @__PURE__ */ u3("h4", { className: "font-bold text-sm text-white font-fun", style: { color: p3.color }, children: p3.name }),
              /* @__PURE__ */ u3("div", { className: "text-[10px] text-gray-400 font-pixel mt-0.5", children: p3.duration > 0 ? `${p3.duration}s Active` : "Instant" })
            ] })
          ] }),
          /* @__PURE__ */ u3("p", { className: "text-xs text-gray-300 font-fun mt-3 leading-relaxed", children: p3.description })
        ]
      },
      key
    )) })
  ] }) });
};

// src/components/LeaderboardView.tsx
var LeaderboardView = () => {
  const [filter, setFilter] = d2("weekly");
  const racers = [
    { rank: 1, name: "Honey Bear \u{1F36F}", fur: "caramel", hat: "crown", time: "58.42s", score: 18450, gems: 84, wins: 42 },
    { rank: 2, name: "Bramble Dash \u{1F353}", fur: "brown", hat: "strawberry", time: "61.18s", score: 16920, gems: 76, wins: 38 },
    { rank: 3, name: "Pip The Panda \u{1F43C}", fur: "panda", hat: "propeller", time: "63.90s", score: 15400, gems: 71, wins: 31 },
    { rank: 4, name: "Waffles \u{1F9C7}", fur: "golden", hat: "chef", time: "65.20s", score: 14200, gems: 65, wins: 24 },
    { rank: 5, name: "Mochi \u{1F361}", fur: "pink", hat: "flower", time: "67.05s", score: 13100, gems: 58, wins: 19 },
    { rank: 6, name: "Barnaby \u{1F3A9}", fur: "shadow", hat: "wizard", time: "69.44s", score: 12500, gems: 52, wins: 16 },
    { rank: 7, name: "Frosty \u2744\uFE0F", fur: "white", hat: "viking", time: "72.30s", score: 11800, gems: 47, wins: 14 }
  ];
  return /* @__PURE__ */ u3("section", { className: "py-16 px-4 bg-[#1B1425]", children: /* @__PURE__ */ u3("div", { className: "max-w-4xl mx-auto space-y-8", children: [
    /* @__PURE__ */ u3("div", { className: "flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ u3("div", { children: [
        /* @__PURE__ */ u3("div", { className: "font-pixel text-xs text-[#FFD166] uppercase", children: "HALL OF FAME" }),
        /* @__PURE__ */ u3("h2", { className: "text-3xl font-extrabold text-white", children: "Global Leaderboard \u{1F3C6}" })
      ] }),
      /* @__PURE__ */ u3("div", { className: "flex bg-[#2B1B3D] p-1 rounded-xl border border-white/10", children: ["today", "weekly", "all"].map((t3) => /* @__PURE__ */ u3(
        "button",
        {
          onClick: () => setFilter(t3),
          className: `px-3 py-1.5 rounded-lg text-xs font-pixel capitalize transition-all ${filter === t3 ? "bg-[#FF758F] text-white shadow-sm" : "text-gray-400 hover:text-white"}`,
          children: t3
        },
        t3
      )) })
    ] }),
    /* @__PURE__ */ u3("div", { className: "grid grid-cols-3 gap-3 items-end pt-6 pb-4", children: [
      /* @__PURE__ */ u3("div", { className: "pixel-box p-4 text-center space-y-2 order-1 bg-[#231731] transform hover:-translate-y-1 transition-transform", children: [
        /* @__PURE__ */ u3("div", { className: "text-2xl", children: "\u{1F948}" }),
        /* @__PURE__ */ u3("div", { className: "text-4xl", children: "\u{1F43B}" }),
        /* @__PURE__ */ u3("div", { className: "font-bold text-xs truncate text-white", children: racers[1].name }),
        /* @__PURE__ */ u3("div", { className: "font-pixel text-[10px] text-[#4CC9F0]", children: racers[1].time }),
        /* @__PURE__ */ u3("div", { className: "text-[11px] text-gray-400 font-mono", children: [
          racers[1].score,
          " pts"
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { className: "pixel-box-gold p-5 text-center space-y-2 order-2 bg-[#2D2115] -translate-y-4 shadow-xl", children: [
        /* @__PURE__ */ u3("div", { className: "text-3xl animate-bounce-slow", children: "\u{1F451}" }),
        /* @__PURE__ */ u3("div", { className: "text-5xl", children: "\u{1F43B}" }),
        /* @__PURE__ */ u3("div", { className: "font-bold text-sm text-[#FFD166] truncate", children: racers[0].name }),
        /* @__PURE__ */ u3("div", { className: "font-pixel text-xs text-[#70E000]", children: racers[0].time }),
        /* @__PURE__ */ u3("div", { className: "text-xs text-yellow-200 font-mono font-bold", children: [
          racers[0].score,
          " pts"
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { className: "pixel-box p-4 text-center space-y-2 order-3 bg-[#231731] transform hover:-translate-y-1 transition-transform", children: [
        /* @__PURE__ */ u3("div", { className: "text-2xl", children: "\u{1F949}" }),
        /* @__PURE__ */ u3("div", { className: "text-4xl", children: "\u{1F43B}" }),
        /* @__PURE__ */ u3("div", { className: "font-bold text-xs truncate text-white", children: racers[2].name }),
        /* @__PURE__ */ u3("div", { className: "font-pixel text-[10px] text-[#FF758F]", children: racers[2].time }),
        /* @__PURE__ */ u3("div", { className: "text-[11px] text-gray-400 font-mono", children: [
          racers[2].score,
          " pts"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { className: "bg-[#241733] border-2 border-[#FF758F]/30 rounded-2xl overflow-hidden shadow-lg", children: [
      /* @__PURE__ */ u3("div", { className: "grid grid-cols-12 px-4 py-3 bg-[#1D122B] text-[10px] font-pixel text-gray-400 uppercase tracking-wider border-b border-white/5", children: [
        /* @__PURE__ */ u3("div", { className: "col-span-2 text-center", children: "Rank" }),
        /* @__PURE__ */ u3("div", { className: "col-span-4", children: "Racer" }),
        /* @__PURE__ */ u3("div", { className: "col-span-3 text-center", children: "Fastest Time" }),
        /* @__PURE__ */ u3("div", { className: "col-span-3 text-right", children: "Score" })
      ] }),
      /* @__PURE__ */ u3("div", { className: "divide-y divide-white/5", children: racers.map((r3) => /* @__PURE__ */ u3(
        "div",
        {
          className: "grid grid-cols-12 px-4 py-3 items-center hover:bg-white/5 transition-colors",
          children: [
            /* @__PURE__ */ u3("div", { className: "col-span-2 text-center font-pixel text-xs text-[#FFD166]", children: [
              "#",
              r3.rank
            ] }),
            /* @__PURE__ */ u3("div", { className: "col-span-4 flex items-center gap-2", children: [
              /* @__PURE__ */ u3("span", { className: "text-base", children: "\u{1F43B}" }),
              /* @__PURE__ */ u3("span", { className: "text-xs font-bold text-white truncate", children: r3.name })
            ] }),
            /* @__PURE__ */ u3("div", { className: "col-span-3 text-center font-pixel text-xs text-[#4CC9F0]", children: r3.time }),
            /* @__PURE__ */ u3("div", { className: "col-span-3 text-right font-mono text-xs text-yellow-300 font-bold", children: r3.score.toLocaleString() })
          ]
        },
        r3.rank
      )) })
    ] })
  ] }) });
};

// src/components/CharacterSelect.tsx
var CharacterSelect = ({
  customization,
  setCustomization,
  onSaveAndClose
}) => {
  const updateField = (field, val) => {
    const updated = { ...customization, [field]: val };
    setCustomization(updated);
    try {
      localStorage.setItem("bear_dash_racer", JSON.stringify(updated));
    } catch (e3) {
    }
  };
  return /* @__PURE__ */ u3("div", { className: "max-w-5xl mx-auto px-4 py-8", children: /* @__PURE__ */ u3("div", { className: "flex flex-col md:flex-row items-start justify-between gap-8", children: [
    /* @__PURE__ */ u3("div", { className: "w-full md:w-80 pixel-box p-6 flex flex-col items-center text-center", children: [
      /* @__PURE__ */ u3("div", { className: "font-pixel text-xs text-[#FFD166] mb-4", children: "BABY BEAR PREVIEW" }),
      /* @__PURE__ */ u3("div", { className: "w-48 h-56 bg-gradient-to-b from-[#2B1B3D] to-[#1F142B] rounded-2xl flex flex-col items-center justify-center relative border-2 border-white/10 shadow-inner mb-4 overflow-hidden", children: [
        /* @__PURE__ */ u3("div", { className: "w-full h-8 bg-[#70E000] absolute bottom-0 border-t-2 border-[#A7FF00]" }),
        /* @__PURE__ */ u3("div", { className: "relative z-10 flex flex-col items-center animate-bounce-slow", children: [
          customization.hat !== "none" && /* @__PURE__ */ u3("div", { className: "text-2xl -mb-3 z-20", children: HATS_CATALOG[customization.hat]?.icon || "\u{1F451}" }),
          /* @__PURE__ */ u3("div", { className: "text-6xl drop-shadow-md", children: "\u{1F43B}" }),
          /* @__PURE__ */ u3("div", { className: "flex gap-1 -mt-2", children: [
            customization.scarf !== "none" && /* @__PURE__ */ u3("span", { className: "text-sm", children: "\u{1F9E3}" }),
            customization.backpack !== "none" && /* @__PURE__ */ u3("span", { className: "text-sm", children: BACKPACKS_CATALOG[customization.backpack]?.icon || "\u{1F392}" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { className: "w-full space-y-3", children: [
        /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3("label", { className: "text-[11px] font-pixel text-gray-300 block mb-1", children: "RACER NAME" }),
          /* @__PURE__ */ u3(
            "input",
            {
              type: "text",
              value: customization.name,
              onChange: (e3) => updateField("name", e3.target.value.slice(0, 14)),
              placeholder: "Name your bear...",
              className: "w-full bg-black/40 border-2 border-[#FF758F] rounded-xl px-3 py-2 text-center font-bold text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD166]",
              maxLength: 14
            }
          )
        ] }),
        /* @__PURE__ */ u3(
          "button",
          {
            onClick: onSaveAndClose,
            className: "w-full btn-pixel btn-pixel-gold py-3 rounded-xl font-pixel text-xs mt-2",
            children: "SAVE RACER \u{1F43E}"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { className: "flex-1 space-y-6", children: [
      /* @__PURE__ */ u3("div", { className: "pixel-box p-5", children: [
        /* @__PURE__ */ u3("h3", { className: "font-pixel text-xs text-[#FFD166] mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ u3("span", { children: "\u{1F3A8}" }),
          " FUR COLOR"
        ] }),
        /* @__PURE__ */ u3("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5", children: Object.keys(FUR_COLORS).map((f4) => {
          const info = FUR_COLORS[f4];
          const isSelected = customization.fur === f4;
          return /* @__PURE__ */ u3(
            "button",
            {
              onClick: () => updateField("fur", f4),
              className: `p-2.5 rounded-xl border-2 transition-all flex items-center gap-2 text-left ${isSelected ? "border-[#FFD166] bg-[#FFD166]/20 shadow-md" : "border-white/10 hover:border-white/30 bg-black/20"}`,
              children: [
                /* @__PURE__ */ u3(
                  "div",
                  {
                    className: "w-6 h-6 rounded-full border border-white/40 shadow-sm",
                    style: { backgroundColor: info.primary }
                  }
                ),
                /* @__PURE__ */ u3("div", { className: "text-xs font-bold leading-tight truncate", children: info.name })
              ]
            },
            f4
          );
        }) })
      ] }),
      /* @__PURE__ */ u3("div", { className: "pixel-box p-5", children: [
        /* @__PURE__ */ u3("h3", { className: "font-pixel text-xs text-[#FF758F] mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ u3("span", { children: "\u{1F451}" }),
          " HATS & HELMETS"
        ] }),
        /* @__PURE__ */ u3("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-2.5", children: Object.keys(HATS_CATALOG).map((h3) => {
          const info = HATS_CATALOG[h3];
          const isSelected = customization.hat === h3;
          return /* @__PURE__ */ u3(
            "button",
            {
              onClick: () => updateField("hat", h3),
              className: `p-2.5 rounded-xl border-2 transition-all flex items-center gap-2 text-left ${isSelected ? "border-[#FF758F] bg-[#FF758F]/20 shadow-md" : "border-white/10 hover:border-white/30 bg-black/20"}`,
              children: [
                /* @__PURE__ */ u3("span", { className: "text-xl", children: info.icon }),
                /* @__PURE__ */ u3("div", { className: "truncate text-xs font-bold", children: info.name })
              ]
            },
            h3
          );
        }) })
      ] }),
      /* @__PURE__ */ u3("div", { className: "pixel-box p-5", children: [
        /* @__PURE__ */ u3("h3", { className: "font-pixel text-xs text-[#4CC9F0] mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ u3("span", { children: "\u{1F9E3}" }),
          " SCARVES & BOWS"
        ] }),
        /* @__PURE__ */ u3("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5", children: Object.keys(SCARVES_CATALOG).map((s3) => {
          const info = SCARVES_CATALOG[s3];
          const isSelected = customization.scarf === s3;
          return /* @__PURE__ */ u3(
            "button",
            {
              onClick: () => updateField("scarf", s3),
              className: `p-2.5 rounded-xl border-2 transition-all flex items-center gap-2 text-left ${isSelected ? "border-[#4CC9F0] bg-[#4CC9F0]/20 shadow-md" : "border-white/10 hover:border-white/30 bg-black/20"}`,
              children: [
                /* @__PURE__ */ u3(
                  "div",
                  {
                    className: "w-4 h-4 rounded-full border border-white/40",
                    style: { backgroundColor: info.color === "transparent" ? "#666" : info.color }
                  }
                ),
                /* @__PURE__ */ u3("div", { className: "truncate text-xs font-bold", children: info.name })
              ]
            },
            s3
          );
        }) })
      ] }),
      /* @__PURE__ */ u3("div", { className: "pixel-box p-5", children: [
        /* @__PURE__ */ u3("h3", { className: "font-pixel text-xs text-[#70E000] mb-3 flex items-center gap-2", children: [
          /* @__PURE__ */ u3("span", { children: "\u{1F392}" }),
          " BACKPACKS & GEAR"
        ] }),
        /* @__PURE__ */ u3("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5", children: Object.keys(BACKPACKS_CATALOG).map((bp) => {
          const info = BACKPACKS_CATALOG[bp];
          const isSelected = customization.backpack === bp;
          return /* @__PURE__ */ u3(
            "button",
            {
              onClick: () => updateField("backpack", bp),
              className: `p-2.5 rounded-xl border-2 transition-all flex items-center gap-2 text-left ${isSelected ? "border-[#70E000] bg-[#70E000]/20 shadow-md" : "border-white/10 hover:border-white/30 bg-black/20"}`,
              children: [
                /* @__PURE__ */ u3("span", { className: "text-xl", children: info.icon }),
                /* @__PURE__ */ u3("div", { className: "truncate text-xs font-bold", children: info.name })
              ]
            },
            bp
          );
        }) })
      ] })
    ] })
  ] }) });
};

// src/components/LobbyView.tsx
var LobbyView = ({
  roomCode,
  isHost,
  customization,
  botCount,
  setBotCount,
  onStartRace,
  onLeaveLobby,
  onCustomize
}) => {
  const [copied, setCopied] = d2(false);
  const copyCode = () => {
    navigator.clipboard?.writeText(roomCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2e3);
  };
  const botList = [
    { name: "Honey \u{1F36F}", fur: "caramel", hat: "crown" },
    { name: "Bramble \u{1F353}", fur: "brown", hat: "strawberry" },
    { name: "Waffles \u{1F9C7}", fur: "golden", hat: "chef" },
    { name: "Pip \u{1F43C}", fur: "panda", hat: "propeller" },
    { name: "Mochi \u{1F361}", fur: "pink", hat: "flower" },
    { name: "Barnaby \u{1F3A9}", fur: "shadow", hat: "wizard" },
    { name: "Frosty \u2744\uFE0F", fur: "white", hat: "viking" }
  ].slice(0, botCount);
  return /* @__PURE__ */ u3("div", { className: "max-w-4xl mx-auto px-4 py-8 space-y-6", children: [
    /* @__PURE__ */ u3("div", { className: "pixel-box-gold p-6 flex flex-col sm:flex-row items-center justify-between gap-4", children: [
      /* @__PURE__ */ u3("div", { children: [
        /* @__PURE__ */ u3("div", { className: "font-pixel text-[11px] text-[#FFD166] uppercase", children: "MULTIPLAYER ROOM" }),
        /* @__PURE__ */ u3("h2", { className: "text-2xl sm:text-3xl font-extrabold text-white mt-1", children: [
          "Lobby: ",
          /* @__PURE__ */ u3("span", { className: "font-pixel text-yellow-300", children: roomCode })
        ] }),
        /* @__PURE__ */ u3("p", { className: "text-xs text-gray-300 mt-1 font-fun", children: "Share this room code with friends to race together!" })
      ] }),
      /* @__PURE__ */ u3("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ u3(
          "button",
          {
            onClick: copyCode,
            className: "btn-pixel btn-pixel-gold px-4 py-2.5 rounded-xl text-xs font-pixel",
            children: copied ? "COPIED! \u2714" : "COPY CODE \u{1F4CB}"
          }
        ),
        /* @__PURE__ */ u3(
          "button",
          {
            onClick: onLeaveLobby,
            className: "bg-gray-700 hover:bg-gray-600 px-4 py-2.5 rounded-xl text-xs font-pixel text-gray-200",
            children: "LEAVE"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ u3("div", { className: "md:col-span-2 pixel-box p-6 space-y-4", children: [
        /* @__PURE__ */ u3("div", { className: "flex items-center justify-between pb-2 border-b border-white/10", children: [
          /* @__PURE__ */ u3("h3", { className: "font-pixel text-xs text-[#FF758F] flex items-center gap-2", children: [
            /* @__PURE__ */ u3("span", { children: "\u{1F43B}" }),
            " RACERS READY (",
            1 + botCount,
            " / 8)"
          ] }),
          /* @__PURE__ */ u3("span", { className: "text-[10px] font-pixel text-[#70E000]", children: "\u25CF LIVE SYNC" })
        ] }),
        /* @__PURE__ */ u3("div", { className: "space-y-2.5", children: [
          /* @__PURE__ */ u3("div", { className: "flex items-center justify-between p-3 rounded-xl bg-[#2D1A3D] border-2 border-[#FFD166]", children: [
            /* @__PURE__ */ u3("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ u3("div", { className: "w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF7B54] to-[#FFD166] flex items-center justify-center text-2xl shadow-sm", children: "\u{1F43B}" }),
              /* @__PURE__ */ u3("div", { children: [
                /* @__PURE__ */ u3("div", { className: "font-pixel text-xs text-white flex items-center gap-2", children: [
                  customization.name,
                  /* @__PURE__ */ u3("span", { className: "text-[9px] bg-[#FFD166] text-[#381A00] font-bold px-1.5 py-0.5 rounded", children: "HOST (YOU)" })
                ] }),
                /* @__PURE__ */ u3("div", { className: "text-[11px] text-gray-300 capitalize font-fun mt-0.5", children: [
                  customization.fur,
                  " bear \u2022 ",
                  customization.hat,
                  " hat"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ u3("span", { className: "text-xs font-pixel text-[#70E000]", children: "READY \u2714" })
          ] }),
          botList.map((b2, idx) => /* @__PURE__ */ u3(
            "div",
            {
              className: "flex items-center justify-between p-3 rounded-xl bg-black/20 border border-white/5",
              children: [
                /* @__PURE__ */ u3("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ u3("div", { className: "w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-2xl", children: "\u{1F43B}" }),
                  /* @__PURE__ */ u3("div", { children: [
                    /* @__PURE__ */ u3("div", { className: "font-pixel text-xs text-gray-200 flex items-center gap-2", children: [
                      b2.name,
                      /* @__PURE__ */ u3("span", { className: "text-[9px] bg-purple-600/50 text-purple-200 px-1.5 py-0.5 rounded font-mono", children: "AI BOT" })
                    ] }),
                    /* @__PURE__ */ u3("div", { className: "text-[11px] text-gray-400 capitalize font-fun mt-0.5", children: [
                      b2.fur,
                      " bear \u2022 ",
                      HATS_CATALOG[b2.hat]?.name || b2.hat
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ u3("span", { className: "text-xs font-pixel text-[#70E000]", children: "READY \u2714" })
              ]
            },
            idx
          ))
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { className: "pixel-box p-6 space-y-6 flex flex-col justify-between", children: [
        /* @__PURE__ */ u3("div", { className: "space-y-4", children: [
          /* @__PURE__ */ u3("h3", { className: "font-pixel text-xs text-[#FFD166]", children: "RACE SETTINGS" }),
          /* @__PURE__ */ u3("div", { children: [
            /* @__PURE__ */ u3("div", { className: "flex justify-between text-xs text-gray-300 font-fun mb-1", children: [
              /* @__PURE__ */ u3("span", { children: "AI Racers to Fill:" }),
              /* @__PURE__ */ u3("span", { className: "font-pixel text-[#FFD166]", children: [
                botCount,
                " Bots"
              ] })
            ] }),
            /* @__PURE__ */ u3(
              "input",
              {
                type: "range",
                min: "0",
                max: "7",
                value: botCount,
                onChange: (e3) => setBotCount(parseInt(e3.target.value, 10)),
                className: "w-full accent-[#FFD166]"
              }
            )
          ] }),
          /* @__PURE__ */ u3("div", { className: "p-3 bg-black/30 rounded-xl border border-white/5 space-y-1 text-xs text-gray-300 font-fun", children: [
            /* @__PURE__ */ u3("div", { className: "font-bold text-white", children: "Course Details:" }),
            /* @__PURE__ */ u3("div", { children: "\u2022 Biomes: 6 Distinct Zones" }),
            /* @__PURE__ */ u3("div", { children: "\u2022 Length: 13,200 Pixels" }),
            /* @__PURE__ */ u3("div", { children: "\u2022 Obstacles: High Danger" })
          ] }),
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: onCustomize,
              className: "w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/20 font-pixel text-xs text-gray-200",
              children: "CHANGE WARDROBE \u{1F451}"
            }
          )
        ] }),
        /* @__PURE__ */ u3(
          "button",
          {
            onClick: onStartRace,
            className: "w-full btn-pixel btn-pixel-gold py-4 rounded-2xl font-pixel text-sm tracking-wider shadow-lg",
            children: "START RACE NOW \u{1F3C1}"
          }
        )
      ] })
    ] })
  ] });
};

// src/game/ParticleSystem.ts
var ParticleSystem = class {
  constructor() {
    __publicField(this, "particles", []);
    __publicField(this, "floatingTexts", []);
  }
  update(dt) {
    for (let i3 = this.particles.length - 1; i3 >= 0; i3--) {
      const p3 = this.particles[i3];
      p3.x += p3.vx;
      p3.y += p3.vy;
      p3.rotation += p3.rotSpeed;
      p3.life -= dt;
      p3.alpha = Math.max(0, p3.life / p3.maxLife);
      if (p3.life <= 0) {
        this.particles.splice(i3, 1);
      }
    }
    for (let i3 = this.floatingTexts.length - 1; i3 >= 0; i3--) {
      const ft = this.floatingTexts[i3];
      ft.y += ft.vy;
      ft.life -= dt;
      ft.alpha = Math.max(0, ft.life / ft.maxLife);
      if (ft.life <= 0) {
        this.floatingTexts.splice(i3, 1);
      }
    }
  }
  // Dust puff emitted when bear is running on the ground
  emitRunDust(x3, y3, facingRight) {
    const count = 2;
    for (let i3 = 0; i3 < count; i3++) {
      this.particles.push({
        x: x3 + (facingRight ? -6 : 6) + (Math.random() * 6 - 3),
        y: y3 + Math.random() * 4 - 2,
        vx: (facingRight ? -1 : 1) * (0.8 + Math.random() * 1.2),
        vy: -0.4 - Math.random() * 0.8,
        size: 3 + Math.floor(Math.random() * 3),
        color: "#E8D5B5",
        alpha: 0.8,
        life: 0.35 + Math.random() * 0.15,
        maxLife: 0.45,
        shape: "square",
        rotation: 0,
        rotSpeed: 0
      });
    }
  }
  // Jump burst cloud
  emitJumpDust(x3, y3) {
    for (let i3 = 0; i3 < 6; i3++) {
      const angle = Math.PI / 6 + i3 / 5 * (Math.PI * 2 / 3);
      const speed = 1.2 + Math.random() * 1.8;
      this.particles.push({
        x: x3 + (Math.random() * 16 - 8),
        y: y3,
        vx: Math.cos(angle) * speed,
        vy: -Math.sin(angle) * speed * 0.5,
        size: 4 + Math.floor(Math.random() * 3),
        color: "#F4ECE1",
        alpha: 0.9,
        life: 0.4,
        maxLife: 0.4,
        shape: "circle",
        rotation: 0,
        rotSpeed: 0
      });
    }
  }
  // Gem sparkle explosion + floating score text
  emitGemCollect(x3, y3, color, value) {
    this.floatingTexts.push({
      id: `ft_${Date.now()}_${Math.random()}`,
      x: x3 - 10,
      y: y3 - 10,
      text: `+${value}`,
      color,
      alpha: 1,
      life: 0.85,
      maxLife: 0.85,
      vy: -1.2
    });
    for (let i3 = 0; i3 < 8; i3++) {
      const angle = i3 / 8 * Math.PI * 2 + Math.random() * 0.2;
      const speed = 1.5 + Math.random() * 2.2;
      this.particles.push({
        x: x3,
        y: y3,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 3 + Math.floor(Math.random() * 3),
        color,
        alpha: 1,
        life: 0.45 + Math.random() * 0.2,
        maxLife: 0.65,
        shape: "sparkle",
        rotation: Math.random() * Math.PI,
        rotSpeed: 0.1
      });
    }
  }
  // Heart break animation on taking damage
  emitHeartBreak(x3, y3) {
    this.floatingTexts.push({
      id: `ft_dmg_${Date.now()}`,
      x: x3 - 18,
      y: y3 - 20,
      text: "-1 \u2764\uFE0F",
      color: "#FF3366",
      alpha: 1,
      life: 1,
      maxLife: 1,
      vy: -1
    });
    for (let i3 = 0; i3 < 12; i3++) {
      const angle = i3 / 12 * Math.PI * 2;
      const speed = 2 + Math.random() * 2.5;
      this.particles.push({
        x: x3,
        y: y3 - 10,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.2,
        size: 4 + Math.floor(Math.random() * 3),
        color: i3 % 2 === 0 ? "#FF2A6D" : "#FF6584",
        alpha: 1,
        life: 0.65,
        maxLife: 0.65,
        shape: "heart",
        rotation: Math.random() * Math.PI,
        rotSpeed: 0.15
      });
    }
  }
  // Mystery Box burst fanfare particles
  emitMysteryBurst(x3, y3) {
    const rainbow = ["#FF758F", "#FFB085", "#FFD166", "#70E000", "#4CC9F0", "#9D4EDD"];
    for (let i3 = 0; i3 < 24; i3++) {
      const angle = i3 / 24 * Math.PI * 2;
      const speed = 2.5 + Math.random() * 3.5;
      this.particles.push({
        x: x3 + 16,
        y: y3 + 16,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        size: 5 + Math.floor(Math.random() * 4),
        color: rainbow[i3 % rainbow.length],
        alpha: 1,
        life: 0.8 + Math.random() * 0.3,
        maxLife: 1.1,
        shape: "star",
        rotation: Math.random() * Math.PI,
        rotSpeed: 0.2
      });
    }
  }
  // Elimination poof cloud & weeping tears
  emitElimination(x3, y3) {
    for (let i3 = 0; i3 < 20; i3++) {
      const angle = i3 / 20 * Math.PI * 2;
      const speed = 1 + Math.random() * 2.5;
      this.particles.push({
        x: x3 + 18,
        y: y3 + 20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        size: 6 + Math.floor(Math.random() * 5),
        color: "#D8D8E8",
        alpha: 0.85,
        life: 1.1,
        maxLife: 1.1,
        shape: "circle",
        rotation: 0,
        rotSpeed: 0
      });
    }
    for (let i3 = 0; i3 < 8; i3++) {
      this.particles.push({
        x: x3 + 10 + (i3 % 2 === 0 ? 4 : 14),
        y: y3 + 16,
        vx: Math.random() * 0.6 - 0.3,
        vy: 1.5 + Math.random() * 1.5,
        size: 4,
        color: "#4CC9F0",
        alpha: 0.9,
        life: 0.8,
        maxLife: 0.8,
        shape: "tear",
        rotation: 0,
        rotSpeed: 0
      });
    }
  }
  // Victory Confetti celebration cannons
  emitVictoryConfetti(x3, y3) {
    const rainbow = ["#FFD166", "#FF758F", "#4CC9F0", "#70E000", "#FF7B54", "#9D4EDD", "#FFFFFF"];
    for (let i3 = 0; i3 < 50; i3++) {
      const angle = -Math.PI / 2 + (Math.random() * 1.6 - 0.8);
      const speed = 4 + Math.random() * 6.5;
      this.particles.push({
        x: x3 + Math.random() * 40 - 20,
        y: y3,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: 4 + Math.floor(Math.random() * 4),
        color: rainbow[Math.floor(Math.random() * rainbow.length)],
        alpha: 1,
        life: 1.8 + Math.random() * 0.8,
        maxLife: 2.6,
        shape: Math.random() < 0.5 ? "square" : "star",
        rotation: Math.random() * Math.PI,
        rotSpeed: 0.25 * (Math.random() < 0.5 ? 1 : -1)
      });
    }
  }
  // Speed boost / Dash rainbow trail
  emitSpeedTrail(x3, y3, facingRight) {
    const trailColors = ["#FFD166", "#FF758F", "#4CC9F0", "#70E000"];
    const color = trailColors[Math.floor(Math.random() * trailColors.length)];
    this.particles.push({
      x: x3 + (facingRight ? -4 : 4),
      y: y3 + 12 + Math.random() * 16,
      vx: facingRight ? -2.5 : 2.5,
      vy: Math.random() * 0.8 - 0.4,
      size: 4 + Math.floor(Math.random() * 3),
      color,
      alpha: 0.75,
      life: 0.28,
      maxLife: 0.28,
      shape: "square",
      rotation: 0,
      rotSpeed: 0
    });
  }
  clear() {
    this.particles = [];
    this.floatingTexts = [];
  }
};

// src/game/BotManager.ts
var BotManager = class {
  constructor() {
    __publicField(this, "bots", []);
  }
  createBots(count) {
    const botProfiles = [
      { name: "Honey \u{1F36F}", fur: "caramel", hat: "crown", scarf: "red", backpack: "honeypot" },
      { name: "Bramble \u{1F353}", fur: "brown", hat: "strawberry", scarf: "rainbow", backpack: "leaf" },
      { name: "Waffles \u{1F9C7}", fur: "golden", hat: "chef", scarf: "gold_bowtie", backpack: "star" },
      { name: "Pip \u{1F43C}", fur: "panda", hat: "propeller", scarf: "blue", backpack: "rocket" },
      { name: "Mochi \u{1F361}", fur: "pink", hat: "flower", scarf: "rainbow", backpack: "mushroom" },
      { name: "Barnaby \u{1F3A9}", fur: "shadow", hat: "wizard", scarf: "emerald", backpack: "star" },
      { name: "Frosty \u2744\uFE0F", fur: "white", hat: "viking", scarf: "blue", backpack: "none" }
    ];
    this.bots = [];
    const actualCount = Math.min(count, botProfiles.length);
    for (let i3 = 0; i3 < actualCount; i3++) {
      const prof = botProfiles[i3];
      const bot = {
        id: `bot_${i3}_${Date.now()}`,
        name: prof.name,
        isBot: true,
        isLocal: false,
        x: 40 + i3 * 28,
        y: 380,
        vx: 0,
        vy: 0,
        width: GAME_CONSTANTS.PLAYER_WIDTH,
        height: GAME_CONSTANTS.PLAYER_HEIGHT,
        lives: 3,
        score: 0,
        gemsCollected: 0,
        powerupsUsed: 0,
        bonusScore: 0,
        isGrounded: true,
        canDoubleJump: true,
        facingRight: true,
        animState: "idle",
        animTimer: Math.random() * 5,
        hurtTimer: 0,
        isEliminated: false,
        isWinner: false,
        finishTime: null,
        finishRank: null,
        activePowerups: [],
        customization: {
          name: prof.name,
          fur: prof.fur,
          hat: prof.hat,
          scarf: prof.scarf,
          backpack: prof.backpack
        },
        spectatingIndex: 0,
        ghostX: 40 + i3 * 28,
        ghostY: 380
      };
      this.bots.push(bot);
    }
    return this.bots;
  }
  updateBots(dt, level) {
    for (const bot of this.bots) {
      if (bot.isEliminated || bot.isWinner) continue;
      const targetSpeed = GAME_CONSTANTS.BASE_RUN_SPEED * (0.88 + Math.sin(bot.animTimer * 0.4) * 0.18);
      bot.vx = targetSpeed;
      bot.facingRight = true;
      const lookAheadDist = 65 + Math.random() * 25;
      const scanX = bot.x + lookAheadDist;
      let shouldJump = false;
      for (const obs of level.obstacles) {
        if (obs.hazard && Math.abs(obs.x - scanX) < 40 && Math.abs(obs.y - bot.y) < 70) {
          shouldJump = true;
          break;
        }
      }
      let groundAhead = false;
      for (const plat of level.platforms) {
        if (scanX >= plat.x && scanX <= plat.x + plat.width && Math.abs(plat.y - 440) < 60) {
          groundAhead = true;
          break;
        }
      }
      if (!groundAhead && bot.isGrounded) {
        shouldJump = true;
      }
      if (shouldJump && bot.isGrounded) {
        bot.vy = GAME_CONSTANTS.BASE_JUMP_FORCE;
        bot.isGrounded = false;
      }
    }
  }
};

// src/game/InputManager.ts
var InputManager = class {
  constructor() {
    __publicField(this, "state", {
      left: false,
      right: false,
      up: false,
      down: false,
      jump: false,
      dash: false,
      usePowerup: false,
      pause: false
    });
    __publicField(this, "prevJump", false);
    __publicField(this, "prevDash", false);
    __publicField(this, "prevPause", false);
    __publicField(this, "prevUsePowerup", false);
    __publicField(this, "jumpJustPressed", false);
    __publicField(this, "dashJustPressed", false);
    __publicField(this, "pauseJustPressed", false);
    __publicField(this, "usePowerupJustPressed", false);
    __publicField(this, "activeKeys", /* @__PURE__ */ new Set());
    __publicField(this, "touchInputs", {});
    this.setupKeyboardListeners();
  }
  setupKeyboardListeners() {
    window.addEventListener("keydown", (e3) => {
      if (["Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e3.code)) {
        e3.preventDefault();
      }
      this.activeKeys.add(e3.code.toLowerCase());
      this.activeKeys.add(e3.key.toLowerCase());
    });
    window.addEventListener("keyup", (e3) => {
      this.activeKeys.delete(e3.code.toLowerCase());
      this.activeKeys.delete(e3.key.toLowerCase());
    });
    window.addEventListener("blur", () => {
      this.activeKeys.clear();
      this.touchInputs = {};
    });
  }
  setTouchInput(key, active) {
    this.touchInputs[key] = active;
  }
  update() {
    this.pollGamepad();
    const keys = this.activeKeys;
    const touches = this.touchInputs;
    const left = keys.has("arrowleft") || keys.has("keya") || keys.has("a") || !!touches.left;
    const right = keys.has("arrowright") || keys.has("keyd") || keys.has("d") || !!touches.right;
    const up = keys.has("arrowup") || keys.has("keyw") || keys.has("w") || !!touches.up;
    const down = keys.has("arrowdown") || keys.has("keys") || keys.has("s") || !!touches.down;
    const jump = keys.has("space") || keys.has(" ") || keys.has("arrowup") || keys.has("keyw") || keys.has("w") || !!touches.jump;
    const dash = keys.has("shiftleft") || keys.has("shiftright") || keys.has("shift") || keys.has("keyj") || !!touches.dash;
    const usePowerup = keys.has("keye") || keys.has("e") || keys.has("keyk") || !!touches.usePowerup;
    const pause = keys.has("escape") || keys.has("keyp") || keys.has("p") || !!touches.pause;
    this.state = { left, right, up, down, jump, dash, usePowerup, pause };
    this.jumpJustPressed = jump && !this.prevJump;
    this.dashJustPressed = dash && !this.prevDash;
    this.pauseJustPressed = pause && !this.prevPause;
    this.usePowerupJustPressed = usePowerup && !this.prevUsePowerup;
    this.prevJump = jump;
    this.prevDash = dash;
    this.prevPause = pause;
    this.prevUsePowerup = usePowerup;
  }
  pollGamepad() {
    if (typeof navigator === "undefined" || !navigator.getGamepads) return;
    const gamepads = navigator.getGamepads();
    if (!gamepads) return;
    for (const gp of gamepads) {
      if (!gp) continue;
      const stickX = gp.axes[0] || 0;
      if (stickX < -0.3 || gp.buttons[14] && gp.buttons[14].pressed) {
        this.activeKeys.add("arrowleft");
      }
      if (stickX > 0.3 || gp.buttons[15] && gp.buttons[15].pressed) {
        this.activeKeys.add("arrowright");
      }
      if (gp.buttons[0] && gp.buttons[0].pressed) this.activeKeys.add("space");
      if (gp.buttons[2] && gp.buttons[2].pressed) this.activeKeys.add("shiftleft");
      if (gp.buttons[1] && gp.buttons[1].pressed) this.activeKeys.add("keye");
      if (gp.buttons[9] && gp.buttons[9].pressed) this.activeKeys.add("escape");
    }
  }
};

// src/game/GameEngine.ts
var GameEngine = class {
  constructor(level, localCustomization, botCount = 3) {
    __publicField(this, "level");
    __publicField(this, "players", []);
    __publicField(this, "localPlayer");
    __publicField(this, "botManager");
    __publicField(this, "input");
    __publicField(this, "particles");
    __publicField(this, "isPaused", false);
    __publicField(this, "isGameOver", false);
    __publicField(this, "isRaceFinished", false);
    __publicField(this, "raceStartTime", 0);
    __publicField(this, "elapsedTimeMs", 0);
    // Camera & Screen Shake
    __publicField(this, "cameraX", 0);
    __publicField(this, "cameraY", 0);
    __publicField(this, "screenShake", 0);
    // Race Results & Winner tracking
    __publicField(this, "raceResults", []);
    __publicField(this, "onFinishCallback");
    __publicField(this, "onEliminatedCallback");
    this.level = level;
    this.botManager = new BotManager();
    this.input = new InputManager();
    this.particles = new ParticleSystem();
    this.localPlayer = {
      id: "local_player",
      name: localCustomization.name || "Baby Bear \u{1F43B}",
      isBot: false,
      isLocal: true,
      x: 60,
      y: 380,
      vx: 0,
      vy: 0,
      width: GAME_CONSTANTS.PLAYER_WIDTH,
      height: GAME_CONSTANTS.PLAYER_HEIGHT,
      lives: GAME_CONSTANTS.MAX_LIVES,
      score: 0,
      gemsCollected: 0,
      powerupsUsed: 0,
      bonusScore: 0,
      isGrounded: true,
      canDoubleJump: true,
      facingRight: true,
      animState: "idle",
      animTimer: 0,
      hurtTimer: 0,
      isEliminated: false,
      isWinner: false,
      finishTime: null,
      finishRank: null,
      activePowerups: [],
      customization: localCustomization,
      spectatingIndex: 0,
      ghostX: 60,
      ghostY: 380
    };
    this.players = [this.localPlayer];
    if (botCount > 0) {
      const bots = this.botManager.createBots(botCount);
      this.players.push(...bots);
    }
    this.raceStartTime = Date.now();
  }
  update(dt) {
    if (this.isPaused) return;
    this.elapsedTimeMs = Date.now() - this.raceStartTime;
    this.input.update();
    this.botManager.updateBots(dt, this.level);
    this.updateObstacles(dt);
    this.updatePlatforms(dt);
    for (const player of this.players) {
      this.updatePlayer(player, dt);
    }
    this.particles.update(dt);
    this.updateCamera(dt);
    const raceProgress = Math.min(1, this.localPlayer.x / this.level.finishX);
    if (raceProgress > 0.75) {
      soundEngine.setDynamicTempo(1.22);
    } else {
      soundEngine.setDynamicTempo(1);
    }
    if (this.screenShake > 0) {
      this.screenShake = Math.max(0, this.screenShake - dt * 25);
    }
  }
  updatePlayer(p3, dt) {
    p3.animTimer += dt;
    if (p3.isEliminated) {
      this.updateSpectatorGhost(p3, dt);
      return;
    }
    if (p3.isWinner) {
      p3.animState = "victory";
      p3.vx = 0;
      return;
    }
    this.updatePlayerPowerups(p3, dt);
    const hasSpeedBoost = p3.activePowerups.some((ap) => ap.type === "speed_boost" || ap.type === "golden_bear");
    const hasSuperJump = p3.activePowerups.some((ap) => ap.type === "super_jump");
    const hasHoverboard = p3.activePowerups.some((ap) => ap.type === "hoverboard");
    const speedMultiplier = hasSpeedBoost ? 1.85 : 1;
    const currentRunSpeed = GAME_CONSTANTS.BASE_RUN_SPEED * speedMultiplier;
    if (p3.hurtTimer > 0) {
      p3.hurtTimer = Math.max(0, p3.hurtTimer - dt);
    }
    if (p3.isLocal) {
      let moveDir = 0;
      if (this.input.state.left) moveDir -= 1;
      if (this.input.state.right) moveDir += 1;
      if (moveDir !== 0) {
        p3.vx = moveDir * currentRunSpeed;
        p3.facingRight = moveDir > 0;
      } else {
        p3.vx *= 0.72;
        if (Math.abs(p3.vx) < 0.1) p3.vx = 0;
      }
      if (this.input.jumpJustPressed) {
        if (p3.isGrounded) {
          p3.vy = hasSuperJump ? GAME_CONSTANTS.SUPER_JUMP_FORCE : GAME_CONSTANTS.BASE_JUMP_FORCE;
          p3.isGrounded = false;
          p3.canDoubleJump = true;
          soundEngine.playJump();
          this.particles.emitJumpDust(p3.x + p3.width / 2, p3.y + p3.height);
        } else if (p3.canDoubleJump) {
          p3.vy = GAME_CONSTANTS.BASE_JUMP_FORCE * 0.92;
          p3.canDoubleJump = false;
          soundEngine.playSuperJump();
          this.particles.emitJumpDust(p3.x + p3.width / 2, p3.y + p3.height);
        }
      }
      if (this.input.dashJustPressed && !p3.activePowerups.some((ap) => ap.type === "dash")) {
        this.activatePowerup(p3, "dash");
        p3.vx = (p3.facingRight ? 1 : -1) * GAME_CONSTANTS.DASH_IMPULSE;
        soundEngine.playDash();
      }
    }
    const gravity = hasHoverboard ? GAME_CONSTANTS.WORLD_GRAVITY * 0.6 : GAME_CONSTANTS.WORLD_GRAVITY;
    p3.vy = Math.min(GAME_CONSTANTS.MAX_FALL_SPEED, p3.vy + gravity);
    p3.x += p3.vx;
    p3.y += p3.vy;
    if (p3.isGrounded && Math.abs(p3.vx) > 1.5 && Math.random() < 0.4) {
      this.particles.emitRunDust(p3.x + p3.width / 2, p3.y + p3.height, p3.facingRight);
    }
    if (hasSpeedBoost && Math.random() < 0.6) {
      this.particles.emitSpeedTrail(p3.x + p3.width / 2, p3.y, p3.facingRight);
    }
    this.checkPlatformCollisions(p3);
    this.checkGemCollections(p3);
    this.checkMysteryBoxes(p3);
    this.checkObstacleCollisions(p3);
    if (p3.y > 600) {
      this.eliminatePlayer(p3);
      return;
    }
    if (p3.x >= this.level.finishX && !p3.isWinner && p3.lives > 0) {
      this.handlePlayerWin(p3);
    }
    if (p3.hurtTimer > 0) {
      p3.animState = "hurt";
    } else if (!p3.isGrounded) {
      p3.animState = p3.vy < 0 ? "jump" : "fall";
    } else if (Math.abs(p3.vx) > 0.4) {
      p3.animState = "running";
    } else {
      p3.animState = "idle";
    }
  }
  // Spectator mode for eliminated players: fly freely or watch alive players
  updateSpectatorGhost(p3, dt) {
    if (p3.isLocal) {
      const alivePlayers = this.players.filter((pl) => !pl.isEliminated);
      if (alivePlayers.length > 0) {
        const target = alivePlayers[p3.spectatingIndex % alivePlayers.length];
        p3.ghostX += (target.x - p3.ghostX) * 0.1;
        p3.ghostY += (target.y - 40 - p3.ghostY) * 0.1;
      } else {
        p3.ghostX += 2;
      }
    }
  }
  // --- Platform Collisions & Surface Mechanics ---
  checkPlatformCollisions(p3) {
    p3.isGrounded = false;
    for (const plat of this.level.platforms) {
      const isAbove = p3.y + p3.height - p3.vy <= plat.y + 12;
      const overlapsX = p3.x + p3.width - 6 >= plat.x && p3.x + 6 <= plat.x + plat.width;
      const overlapsY = p3.y + p3.height >= plat.y && p3.y + p3.height <= plat.y + plat.height + 10;
      if (isAbove && overlapsX && overlapsY && p3.vy >= 0) {
        p3.y = plat.y - p3.height;
        p3.vy = 0;
        p3.isGrounded = true;
        p3.canDoubleJump = true;
        if (plat.type === "ice") {
          p3.vx *= 0.96;
        }
        if (plat.type === "collapsing" && plat.collapseTimer !== void 0) {
          plat.collapseTimer -= 0.04;
          if (plat.collapseTimer <= 0) {
            plat.y += 15;
          }
        }
        break;
      }
    }
  }
  // --- Collectibles: Gems & Magnet Attraction ---
  checkGemCollections(p3) {
    const hasMagnet = p3.activePowerups.some((ap) => ap.type === "magnet" || ap.type === "golden_bear");
    const hasMultiplier = p3.activePowerups.some((ap) => ap.type === "gem_multiplier");
    const magnetRadius = 260;
    for (const gem of this.level.gems) {
      if (gem.collected) continue;
      const dx = gem.x - (p3.x + p3.width / 2);
      const dy = gem.y - (p3.y + p3.height / 2);
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (hasMagnet && dist < magnetRadius) {
        gem.x -= dx / dist * 9.5;
        gem.y -= dy / dist * 9.5;
      }
      if (dist < 32) {
        gem.collected = true;
        gem.collectedBy = p3.id;
        const val = hasMultiplier ? gem.value * 2 : gem.value;
        p3.gemsCollected += 1;
        p3.score += val;
        if (p3.isLocal) {
          soundEngine.playGemCollect();
          const gemColors = {
            blue: "#4CC9F0",
            green: "#70E000",
            pink: "#FF758F",
            purple: "#9D4EDD",
            yellow: "#FFD166",
            diamond: "#FFFFFF"
          };
          this.particles.emitGemCollect(gem.x, gem.y, gemColors[gem.type] || "#FFD166", val);
        }
      }
    }
  }
  // --- Mystery Boxes ---
  checkMysteryBoxes(p3) {
    for (const box of this.level.mysteryBoxes) {
      if (box.opened) continue;
      const overlapsX = p3.x + p3.width >= box.x && p3.x <= box.x + 32;
      const overlapsY = p3.y + p3.height >= box.y && p3.y <= box.y + 32;
      if (overlapsX && overlapsY) {
        box.opened = true;
        box.openedBy = p3.id;
        if (p3.isLocal) {
          soundEngine.playMysteryBox();
          this.particles.emitMysteryBurst(box.x, box.y);
          const powerupsList = [
            "magnet",
            "speed_boost",
            "hoverboard",
            "invincibility",
            "shield",
            "slow_motion",
            "super_jump",
            "extra_life",
            "gem_multiplier",
            "golden_bear"
          ];
          const chosen = powerupsList[Math.floor(Math.random() * powerupsList.length)];
          this.activatePowerup(p3, chosen);
        }
      }
    }
  }
  // --- Obstacle Collision & Damage Rules ---
  checkObstacleCollisions(p3) {
    if (p3.hurtTimer > 0 || p3.isEliminated || p3.isWinner) return;
    const isInvincible = p3.activePowerups.some(
      (ap) => ap.type === "invincibility" || ap.type === "golden_bear" || ap.type === "dash"
    );
    for (const obs of this.level.obstacles) {
      if (obs.type === "bouncing_mushroom") {
        const overlapsX = p3.x + p3.width >= obs.x && p3.x <= obs.x + obs.width;
        const overlapsY = p3.y + p3.height >= obs.y && p3.y + p3.height <= obs.y + obs.height + 12;
        if (overlapsX && overlapsY && p3.vy >= 0) {
          p3.vy = GAME_CONSTANTS.BOUNCE_PAD_FORCE * (obs.bounceMultiplier || 1);
          p3.isGrounded = false;
          p3.canDoubleJump = true;
          if (p3.isLocal) {
            soundEngine.playSuperJump();
            this.particles.emitJumpDust(obs.x + obs.width / 2, obs.y);
          }
          continue;
        }
      }
      if (obs.type === "water_current") {
        const overlapsX = p3.x + p3.width >= obs.x && p3.x <= obs.x + obs.width;
        const overlapsY = p3.y + p3.height >= obs.y && p3.y <= obs.y + obs.height;
        if (overlapsX && overlapsY) {
          p3.vx -= 1.8;
        }
        continue;
      }
      if (obs.hazard) {
        if (obs.type === "laser_beam" && obs.state === 0) {
          continue;
        }
        const hitBoxPad = 6;
        const overlapsX = p3.x + p3.width - hitBoxPad >= obs.x && p3.x + hitBoxPad <= obs.x + obs.width;
        const overlapsY = p3.y + p3.height - hitBoxPad >= obs.y && p3.y + hitBoxPad <= obs.y + obs.height;
        if (overlapsX && overlapsY) {
          if (isInvincible) {
            continue;
          }
          const shieldIdx = p3.activePowerups.findIndex((ap) => ap.type === "shield");
          const hoverIdx = p3.activePowerups.findIndex((ap) => ap.type === "hoverboard");
          if (shieldIdx !== -1) {
            p3.activePowerups.splice(shieldIdx, 1);
            p3.hurtTimer = 0.8;
            if (p3.isLocal) {
              soundEngine.playShieldBreak();
              this.screenShake = 6;
            }
            continue;
          }
          if (hoverIdx !== -1) {
            p3.activePowerups.splice(hoverIdx, 1);
            p3.hurtTimer = 0.8;
            if (p3.isLocal) {
              soundEngine.playShieldBreak();
              this.screenShake = 6;
            }
            continue;
          }
          this.damagePlayer(p3);
          break;
        }
      }
    }
  }
  // --- Damage System (3 -> 2 -> 1 -> 0 Elimination) ---
  damagePlayer(p3) {
    p3.lives = Math.max(0, p3.lives - 1);
    p3.hurtTimer = GAME_CONSTANTS.HURT_INVULNERABLE_TIME;
    p3.vy = -6.5;
    p3.vx = p3.facingRight ? -4 : 4;
    if (p3.isLocal) {
      soundEngine.playDamage();
      soundEngine.playHeartBreak();
      this.screenShake = 12;
      this.particles.emitHeartBreak(p3.x + p3.width / 2, p3.y + p3.height / 2);
      if (p3.lives === 1) {
        soundEngine.startHeartbeat();
      }
    }
    if (p3.lives <= 0) {
      this.eliminatePlayer(p3);
    }
  }
  // --- Elimination: "BABY BEAR ELIMINATED" ---
  eliminatePlayer(p3) {
    p3.isEliminated = true;
    p3.lives = 0;
    p3.ghostX = p3.x;
    p3.ghostY = p3.y;
    if (p3.isLocal) {
      soundEngine.playElimination();
      this.screenShake = 16;
      this.particles.emitElimination(p3.x, p3.y);
      if (this.onEliminatedCallback) {
        this.onEliminatedCallback();
      }
    }
  }
  // --- Win Condition: Finish Line Victory ---
  handlePlayerWin(p3) {
    p3.isWinner = true;
    p3.finishTime = this.elapsedTimeMs;
    p3.finishRank = this.raceResults.length + 1;
    const timeFormatted = `${(this.elapsedTimeMs / 1e3).toFixed(2)}s`;
    const bonus = p3.lives * 500 + p3.gemsCollected * 50;
    p3.bonusScore = bonus;
    p3.score += bonus;
    this.raceResults.push({
      playerId: p3.id,
      playerName: p3.name,
      isLocal: p3.isLocal,
      rank: p3.finishRank,
      timeFormatted,
      timeMs: this.elapsedTimeMs,
      livesRemaining: p3.lives,
      gemsCount: p3.gemsCollected,
      powerupsUsed: p3.powerupsUsed,
      totalScore: p3.score,
      customization: p3.customization
    });
    if (p3.isLocal) {
      soundEngine.playVictory();
      this.particles.emitVictoryConfetti(p3.x + 20, p3.y - 40);
      this.isRaceFinished = true;
      if (this.onFinishCallback) {
        this.onFinishCallback(this.raceResults);
      }
    }
  }
  // --- Power-Up System ---
  activatePowerup(p3, type) {
    p3.powerupsUsed += 1;
    const cfg = POWERUPS_CONFIG[type];
    if (type === "extra_life") {
      if (p3.lives < GAME_CONSTANTS.MAX_LIVES) {
        p3.lives += 1;
        if (p3.lives > 1 && p3.isLocal) {
          soundEngine.stopHeartbeat();
        }
      }
      this.particles.emitGemCollect(p3.x, p3.y - 20, "#FF3366", 100);
      return;
    }
    soundEngine.playPowerup();
    p3.activePowerups = p3.activePowerups.filter((ap) => ap.type !== type);
    p3.activePowerups.push({
      type,
      remainingDuration: cfg ? cfg.duration : 8,
      maxDuration: cfg ? cfg.duration : 8
    });
  }
  updatePlayerPowerups(p3, dt) {
    for (let i3 = p3.activePowerups.length - 1; i3 >= 0; i3--) {
      const ap = p3.activePowerups[i3];
      ap.remainingDuration -= dt;
      if (ap.remainingDuration <= 0) {
        p3.activePowerups.splice(i3, 1);
      }
    }
  }
  // --- Obstacle Animated Updates ---
  updateObstacles(dt) {
    const slowMoActive = this.localPlayer.activePowerups.some((ap) => ap.type === "slow_motion");
    const speedMult = slowMoActive ? 0.35 : 1;
    for (const obs of this.level.obstacles) {
      obs.timer = (obs.timer || 0) + dt * speedMult;
      switch (obs.type) {
        case "rolling_log":
        case "spinning_blade":
        case "moving_spikes":
        case "cannonball": {
          if (obs.vx !== void 0 && obs.minX !== void 0 && obs.maxX !== void 0) {
            obs.x += obs.vx * speedMult;
            if (obs.x < obs.minX || obs.x > obs.maxX) {
              obs.vx = -obs.vx;
            }
          }
          if (obs.angle !== void 0 && obs.rotSpeed !== void 0) {
            obs.angle += obs.rotSpeed * speedMult;
          }
          break;
        }
        case "rotating_windmill": {
          if (obs.angle !== void 0 && obs.rotSpeed !== void 0) {
            obs.angle += obs.rotSpeed * speedMult;
          }
          break;
        }
        case "fireball": {
          if (obs.vy !== void 0 && obs.minY !== void 0 && obs.maxY !== void 0) {
            obs.y += obs.vy * speedMult;
            obs.vy += 0.22 * speedMult;
            if (obs.y > obs.maxY) {
              obs.y = obs.maxY;
              obs.vy = -6.5;
            }
          }
          break;
        }
        case "laser_beam": {
          obs.state = Math.floor(obs.timer % 3.4) < 2.2 ? 1 : 0;
          break;
        }
        case "moving_platform": {
          if (obs.vy !== void 0 && obs.minY !== void 0 && obs.maxY !== void 0) {
            obs.y += obs.vy * speedMult;
            if (obs.y < obs.minY || obs.y > obs.maxY) {
              obs.vy = -obs.vy;
            }
          }
          break;
        }
        default:
          break;
      }
    }
  }
  updatePlatforms(dt) {
    for (const plat of this.level.platforms) {
      if (plat.vx !== void 0 && plat.minX !== void 0 && plat.maxX !== void 0) {
        plat.x += plat.vx;
        if (plat.x < plat.minX || plat.x > plat.maxX) {
          plat.vx = -plat.vx;
        }
      }
    }
  }
  // --- Camera Tracking ---
  updateCamera(dt) {
    let focusX = this.localPlayer.x;
    let focusY = this.localPlayer.y;
    if (this.localPlayer.isEliminated) {
      focusX = this.localPlayer.ghostX;
      focusY = this.localPlayer.ghostY;
    }
    const targetCameraX = focusX - GAME_CONSTANTS.CANVAS_WIDTH * 0.35;
    const targetCameraY = Math.max(0, focusY - GAME_CONSTANTS.CANVAS_HEIGHT * 0.55);
    this.cameraX += (targetCameraX - this.cameraX) * 0.12;
    this.cameraY += (targetCameraY - this.cameraY) * 0.1;
    if (this.screenShake > 0) {
      const shakeAmt = this.screenShake;
      this.cameraX += (Math.random() * 2 - 1) * shakeAmt;
      this.cameraY += (Math.random() * 2 - 1) * shakeAmt;
    }
  }
  cycleSpectator(direction) {
    const alivePlayers = this.players.filter((p3) => !p3.isEliminated);
    if (alivePlayers.length === 0) return;
    this.localPlayer.spectatingIndex = (this.localPlayer.spectatingIndex + direction + alivePlayers.length) % alivePlayers.length;
  }
};

// src/game/PixelRenderer.ts
var PixelRenderer = class {
  constructor(ctx, width, height) {
    __publicField(this, "ctx");
    __publicField(this, "width");
    __publicField(this, "height");
    __publicField(this, "worldTime", 0);
    // Background ambient animated elements
    __publicField(this, "birds", []);
    __publicField(this, "ambientLeaves", []);
    __publicField(this, "butterflies", []);
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    for (let i3 = 0; i3 < 6; i3++) {
      this.birds.push({
        x: Math.random() * 2e3,
        y: 60 + Math.random() * 90,
        speed: 1.2 + Math.random() * 0.8,
        flapTimer: Math.random() * 10
      });
    }
    const leafColors = ["#FF7B54", "#FFB085", "#E76F51", "#FFD166", "#F4A261"];
    for (let i3 = 0; i3 < 20; i3++) {
      this.ambientLeaves.push({
        x: Math.random() * width * 3,
        y: Math.random() * height,
        speedX: -0.8 - Math.random() * 0.9,
        speedY: 0.3 + Math.random() * 0.5,
        color: leafColors[Math.floor(Math.random() * leafColors.length)]
      });
    }
    const butterColors = ["#FF758F", "#4CC9F0", "#FFD166", "#B565F2"];
    for (let i3 = 0; i3 < 8; i3++) {
      const bx = 300 + i3 * 1400;
      this.butterflies.push({
        x: bx,
        y: 380,
        baseX: bx,
        timer: Math.random() * 10,
        color: butterColors[i3 % butterColors.length]
      });
    }
  }
  resize(width, height) {
    this.width = width;
    this.height = height;
  }
  render(dt, level, players, localPlayer, particles, cameraX, cameraY) {
    this.worldTime += dt;
    const ctx = this.ctx;
    ctx.imageSmoothingEnabled = false;
    const currentBiome = this.getCurrentBiome(level.biomes, cameraX + this.width / 2);
    this.renderParallaxSky(ctx, currentBiome, cameraX);
    ctx.save();
    ctx.translate(-Math.floor(cameraX), -Math.floor(cameraY));
    this.renderMidgroundScenery(ctx, cameraX, level);
    this.renderPlatforms(ctx, level.platforms, currentBiome, cameraX);
    this.renderObstacles(ctx, level.obstacles, cameraX);
    this.renderGems(ctx, level.gems, cameraX);
    this.renderMysteryBoxes(ctx, level.mysteryBoxes, cameraX);
    this.renderFinishLineArch(ctx, level.finishX);
    this.renderPlayers(ctx, players, localPlayer);
    this.renderParticles(ctx, particles);
    this.renderAmbientFlora(ctx, cameraX);
    ctx.restore();
    this.renderScreenVignette(ctx, localPlayer);
  }
  getCurrentBiome(biomes, worldX) {
    for (const b2 of biomes) {
      if (worldX >= b2.startX && worldX <= b2.endX) {
        return b2;
      }
    }
    return biomes[0];
  }
  // --- Parallax Golden Hour Sky & Mountains ---
  renderParallaxSky(ctx, biome, cameraX) {
    const skyGrad = ctx.createLinearGradient(0, 0, 0, this.height);
    skyGrad.addColorStop(0, biome.skyTopColor);
    skyGrad.addColorStop(0.55, biome.skyBottomColor);
    skyGrad.addColorStop(1, "#FFF2D8");
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, this.width, this.height);
    const sunX = this.width * 0.72 - cameraX * 0.03 % (this.width * 1.5);
    const sunY = 90;
    const sunGrad = ctx.createRadialGradient(sunX, sunY, 10, sunX, sunY, 140);
    sunGrad.addColorStop(0, "rgba(255, 238, 173, 0.9)");
    sunGrad.addColorStop(0.3, "rgba(255, 175, 122, 0.45)");
    sunGrad.addColorStop(1, "rgba(255, 117, 143, 0)");
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.arc(sunX, sunY, 140, 0, Math.PI * 2);
    ctx.fill();
    this.renderPixelClouds(ctx, cameraX * 0.08 + this.worldTime * 4, 45, 1.2, "rgba(255, 230, 220, 0.45)");
    this.renderPixelClouds(ctx, cameraX * 0.15 + this.worldTime * 8, 85, 1.6, "rgba(255, 255, 255, 0.65)");
    this.renderPixelMountains(ctx, cameraX * 0.18, 220, "#7B4268", "#A25984");
    this.renderPixelHills(ctx, cameraX * 0.35, 340, "#532B4C");
    ctx.fillStyle = "#4A2840";
    for (const bird of this.birds) {
      bird.x += bird.speed;
      if (bird.x > this.width + 100) bird.x = -60;
      bird.flapTimer += 0.2;
      const wingUp = Math.sin(bird.flapTimer) > 0;
      const bx = bird.x;
      const by = bird.y + Math.sin(bird.flapTimer * 0.5) * 4;
      ctx.fillRect(bx, by, 3, 2);
      if (wingUp) {
        ctx.fillRect(bx - 3, by - 2, 3, 2);
        ctx.fillRect(bx + 3, by - 2, 3, 2);
      } else {
        ctx.fillRect(bx - 3, by + 2, 3, 2);
        ctx.fillRect(bx + 3, by + 2, 3, 2);
      }
    }
  }
  renderPixelClouds(ctx, offset, baseY, scale, color) {
    ctx.fillStyle = color;
    const cloudWidth = 140 * scale;
    const spacing = 280 * scale;
    const startX = -(offset % spacing) - cloudWidth;
    for (let x3 = startX; x3 < this.width + cloudWidth; x3 += spacing) {
      const cy = baseY + Math.sin(x3 * 0.01) * 8;
      ctx.fillRect(x3 + 20 * scale, cy, 60 * scale, 18 * scale);
      ctx.fillRect(x3 + 10 * scale, cy + 6 * scale, 80 * scale, 16 * scale);
      ctx.fillRect(x3, cy + 12 * scale, 100 * scale, 14 * scale);
    }
  }
  renderPixelMountains(ctx, offset, baseY, peakColor, bodyColor) {
    const mountainWidth = 320;
    const startX = -(offset % mountainWidth) - mountainWidth;
    for (let mx = startX; mx < this.width + mountainWidth; mx += mountainWidth) {
      ctx.fillStyle = bodyColor;
      ctx.beginPath();
      ctx.moveTo(mx, baseY + 140);
      ctx.lineTo(mx + 160, baseY);
      ctx.lineTo(mx + 320, baseY + 140);
      ctx.fill();
      ctx.fillStyle = peakColor;
      ctx.beginPath();
      ctx.moveTo(mx + 120, baseY + 35);
      ctx.lineTo(mx + 160, baseY);
      ctx.lineTo(mx + 200, baseY + 35);
      ctx.lineTo(mx + 175, baseY + 45);
      ctx.lineTo(mx + 160, baseY + 40);
      ctx.lineTo(mx + 145, baseY + 45);
      ctx.fill();
    }
  }
  renderPixelHills(ctx, offset, baseY, color) {
    ctx.fillStyle = color;
    const step = 240;
    const startX = -(offset % step) - step;
    for (let x3 = startX; x3 < this.width + step; x3 += step) {
      ctx.beginPath();
      ctx.arc(x3 + 120, baseY + 90, 130, Math.PI, 0, false);
      ctx.fill();
      for (let p3 = 0; p3 < 3; p3++) {
        const px = x3 + 80 + p3 * 35;
        const py = baseY - 10;
        ctx.fillRect(px + 4, py + 8, 3, 10);
        ctx.fillStyle = "#32192F";
        ctx.beginPath();
        ctx.moveTo(px - 4, py + 8);
        ctx.lineTo(px + 5.5, py - 6);
        ctx.lineTo(px + 15, py + 8);
        ctx.fill();
        ctx.fillStyle = color;
      }
    }
  }
  // --- Midground Scenery (Waterfalls & Foliage) ---
  renderMidgroundScenery(ctx, cameraX, level) {
    if (cameraX + this.width > 2300 && cameraX < 4500) {
      const wfX = 3100;
      const flowOffset = this.worldTime * 60 % 20;
      ctx.fillStyle = "rgba(76, 201, 240, 0.7)";
      ctx.fillRect(wfX, 220, 65, 230);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      for (let y3 = 220 + flowOffset; y3 < 450; y3 += 20) {
        ctx.fillRect(wfX + 4, y3, 57, 5);
      }
      ctx.fillStyle = "#FFFFFF";
      for (let i3 = 0; i3 < 5; i3++) {
        const fx = wfX + (Math.sin(this.worldTime * 6 + i3) + 1) * 28;
        ctx.fillRect(fx, 435 + i3 % 3 * 3, 8, 6);
      }
    }
  }
  // --- Platforms & Terrain ---
  renderPlatforms(ctx, platforms, biome, cameraX) {
    const minVisX = cameraX - 100;
    const maxVisX = cameraX + this.width + 100;
    for (const plat of platforms) {
      if (plat.x + plat.width < minVisX || plat.x > maxVisX) continue;
      if (plat.type === "collapsing") {
        ctx.fillStyle = "#8B5A2B";
        ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
        ctx.fillStyle = "#653E17";
        ctx.fillRect(plat.x + 2, plat.y + 4, plat.width - 4, 3);
        ctx.fillStyle = "#D4A373";
        ctx.fillRect(plat.x + 3, plat.y + 2, 3, 3);
        ctx.fillRect(plat.x + plat.width - 6, plat.y + 2, 3, 3);
      } else if (plat.type === "ice") {
        ctx.fillStyle = "#BEE1E6";
        ctx.fillRect(plat.x, plat.y, plat.width, plat.height);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(plat.x, plat.y, plat.width, 4);
        ctx.fillStyle = "#89C2D9";
        ctx.fillRect(plat.x, plat.y + plat.height - 4, plat.width, 4);
      } else {
        ctx.fillStyle = biome.groundGrassColor;
        ctx.fillRect(plat.x, plat.y, plat.width, 10);
        const scallopW = 12;
        for (let sx = plat.x; sx < plat.x + plat.width - scallopW; sx += scallopW) {
          ctx.fillRect(sx + 3, plat.y + 10, 6, 4);
        }
        ctx.fillStyle = biome.groundColor;
        ctx.fillRect(plat.x, plat.y + 14, plat.width, plat.height - 14);
        ctx.fillStyle = biome.accentColor;
        const pebbleStep = 45;
        for (let px = plat.x + 15; px < plat.x + plat.width - 15; px += pebbleStep) {
          ctx.fillRect(px, plat.y + 22, 6, 4);
          ctx.fillRect(px + 20, plat.y + 36, 4, 4);
        }
        ctx.fillStyle = "#FF758F";
        for (let fx = plat.x + 20; fx < plat.x + plat.width - 25; fx += 80) {
          const sway = Math.sin(this.worldTime * 3 + fx) * 2;
          ctx.fillStyle = "#52B788";
          ctx.fillRect(fx + 2, plat.y - 6, 2, 6);
          ctx.fillStyle = fx % 160 === 0 ? "#FFD166" : "#FF758F";
          ctx.fillRect(fx + sway, plat.y - 10, 6, 5);
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(fx + sway + 2, plat.y - 8, 2, 2);
        }
      }
    }
  }
  // --- Obstacles ---
  renderObstacles(ctx, obstacles, cameraX) {
    const minVisX = cameraX - 100;
    const maxVisX = cameraX + this.width + 100;
    for (const obs of obstacles) {
      if (obs.x + obs.width < minVisX || obs.x > maxVisX) continue;
      ctx.save();
      ctx.translate(obs.x + obs.width / 2, obs.y + obs.height / 2);
      switch (obs.type) {
        case "rolling_log": {
          if (obs.angle !== void 0) ctx.rotate(obs.angle);
          ctx.fillStyle = "#8B4513";
          ctx.beginPath();
          ctx.arc(0, 0, obs.width / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "#D2691E";
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(0, 0, obs.width / 3, 0, Math.PI * 2);
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(-obs.width / 2, 0);
          ctx.lineTo(obs.width / 2, 0);
          ctx.moveTo(0, -obs.height / 2);
          ctx.lineTo(0, obs.height / 2);
          ctx.stroke();
          break;
        }
        case "spinning_blade": {
          if (obs.angle !== void 0) ctx.rotate(obs.angle);
          ctx.fillStyle = "#CED4DA";
          ctx.beginPath();
          ctx.arc(0, 0, obs.width / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#E9ECEF";
          for (let i3 = 0; i3 < 8; i3++) {
            ctx.rotate(Math.PI / 4);
            ctx.fillRect(obs.width / 2 - 3, -4, 7, 8);
          }
          ctx.fillStyle = "#495057";
          ctx.beginPath();
          ctx.arc(0, 0, 5, 0, Math.PI * 2);
          ctx.fill();
          break;
        }
        case "bouncing_mushroom": {
          const bounceSquash = (Math.sin(this.worldTime * 5) + 1) * 1.5;
          ctx.fillStyle = "#FF477E";
          ctx.beginPath();
          ctx.ellipse(0, 0 - bounceSquash, obs.width / 2, obs.height / 2, 0, Math.PI, 0);
          ctx.fill();
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(-8, -10 - bounceSquash, 5, 5);
          ctx.fillRect(5, -9 - bounceSquash, 4, 4);
          ctx.fillRect(-2, -14 - bounceSquash, 4, 4);
          ctx.fillStyle = "#FFE5EC";
          ctx.fillRect(-5, 0 - bounceSquash, 10, obs.height / 2);
          break;
        }
        case "angry_bee": {
          const wingFlap = Math.sin(this.worldTime * 25) * 4;
          ctx.fillStyle = "#FFD166";
          ctx.fillRect(-10, -8, 20, 16);
          ctx.fillStyle = "#222222";
          ctx.fillRect(-4, -8, 4, 16);
          ctx.fillRect(4, -8, 4, 16);
          ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
          ctx.fillRect(-6, -16 + wingFlap, 6, 8);
          ctx.fillRect(2, -16 + wingFlap, 6, 8);
          ctx.fillStyle = "#FF3366";
          ctx.fillRect(-8, -4, 3, 3);
          ctx.fillRect(10, 0, 4, 2);
          break;
        }
        case "swinging_hammer": {
          const angle = Math.sin((obs.timer || 0) * 2.2) * 0.9;
          ctx.rotate(angle);
          ctx.fillStyle = "#6C757D";
          ctx.fillRect(-2, -obs.height / 2, 4, obs.height - 20);
          ctx.fillStyle = "#343A40";
          ctx.fillRect(-18, obs.height / 2 - 24, 36, 24);
          ctx.fillStyle = "#CED4DA";
          ctx.fillRect(-16, obs.height / 2 - 22, 4, 20);
          break;
        }
        case "fireball": {
          ctx.fillStyle = "#FFBE0B";
          ctx.beginPath();
          ctx.arc(0, 0, obs.width / 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#FF006E";
          ctx.beginPath();
          ctx.arc(0, 3, obs.width / 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#FB5607";
          ctx.fillRect(-4, 10, 8, 8);
          break;
        }
        case "laser_beam": {
          const pulse = (Math.sin(this.worldTime * 8) + 1) * 0.5;
          ctx.fillStyle = `rgba(255, 0, 110, ${0.4 + pulse * 0.55})`;
          ctx.fillRect(-obs.width / 2, -obs.height / 2, obs.width, obs.height);
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(-2, -obs.height / 2, 4, obs.height);
          ctx.fillStyle = "#495057";
          ctx.fillRect(-8, -obs.height / 2 - 4, 16, 6);
          ctx.fillRect(-8, obs.height / 2 - 2, 16, 6);
          break;
        }
        case "exploding_barrel": {
          const isWarning = Math.sin(this.worldTime * 12) > 0;
          ctx.fillStyle = isWarning ? "#FF0054" : "#9E0031";
          ctx.fillRect(-obs.width / 2, -obs.height / 2, obs.width, obs.height);
          ctx.fillStyle = "#FFE600";
          ctx.fillRect(-obs.width / 2, -obs.height / 4, obs.width, 4);
          ctx.fillRect(-obs.width / 2, obs.height / 4, obs.width, 4);
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(-4, -4, 8, 8);
          break;
        }
        case "rotating_windmill": {
          if (obs.angle !== void 0) ctx.rotate(obs.angle);
          ctx.fillStyle = "#4A2810";
          ctx.beginPath();
          ctx.arc(0, 0, 10, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = "#E9D8A6";
          for (let i3 = 0; i3 < 4; i3++) {
            ctx.rotate(Math.PI / 2);
            ctx.fillRect(-6, 10, 12, obs.width / 2 - 10);
            ctx.fillStyle = "#9B2226";
            ctx.fillRect(-6, obs.width / 2 - 10, 12, 10);
            ctx.fillStyle = "#E9D8A6";
          }
          break;
        }
        case "jumping_frog": {
          ctx.fillStyle = "#38B000";
          ctx.fillRect(-12, -8, 24, 16);
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(-10, -14, 6, 6);
          ctx.fillRect(4, -14, 6, 6);
          ctx.fillStyle = "#000000";
          ctx.fillRect(-8, -12, 3, 3);
          ctx.fillRect(6, -12, 3, 3);
          ctx.fillStyle = "#FF758F";
          ctx.fillRect(-10, -2, 4, 3);
          ctx.fillRect(6, -2, 4, 3);
          break;
        }
        default: {
          ctx.fillStyle = "#E63946";
          ctx.fillRect(-obs.width / 2, -obs.height / 2, obs.width, obs.height);
          break;
        }
      }
      ctx.restore();
    }
  }
  // --- Collectibles: Gems & Mystery Boxes ---
  renderGems(ctx, gems, cameraX) {
    const minVisX = cameraX - 100;
    const maxVisX = cameraX + this.width + 100;
    for (const gem of gems) {
      if (gem.collected || gem.x < minVisX || gem.x > maxVisX) continue;
      const bobY = Math.sin(this.worldTime * 4 + gem.x * 0.1) * 4;
      const gx = gem.x;
      const gy = gem.y + bobY;
      ctx.save();
      ctx.translate(gx, gy);
      const gemColors = {
        blue: { main: "#4CC9F0", light: "#E0FAFF", dark: "#0077B6" },
        green: { main: "#70E000", light: "#D8F3DC", dark: "#38B000" },
        pink: { main: "#FF758F", light: "#FFE5EC", dark: "#C9184A" },
        purple: { main: "#9D4EDD", light: "#F3C4FB", dark: "#5A189A" },
        yellow: { main: "#FFD166", light: "#FFF3B0", dark: "#E76F51" },
        diamond: { main: "#FFFFFF", light: "#E0FAFF", dark: "#48CAE4" }
      };
      const pal = gemColors[gem.type] || gemColors.blue;
      ctx.fillStyle = pal.main;
      ctx.beginPath();
      ctx.moveTo(0, -9);
      ctx.lineTo(8, -3);
      ctx.lineTo(8, 3);
      ctx.lineTo(0, 9);
      ctx.lineTo(-8, 3);
      ctx.lineTo(-8, -3);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = pal.light;
      ctx.beginPath();
      ctx.moveTo(0, -9);
      ctx.lineTo(8, -3);
      ctx.lineTo(-8, -3);
      ctx.closePath();
      ctx.fill();
      if (Math.sin(this.worldTime * 8 + gem.x) > 0.6) {
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(-2, -5, 4, 4);
      }
      ctx.restore();
    }
  }
  renderMysteryBoxes(ctx, boxes, cameraX) {
    const minVisX = cameraX - 100;
    const maxVisX = cameraX + this.width + 100;
    for (const box of boxes) {
      if (box.x < minVisX || box.x > maxVisX) continue;
      const bobY = box.opened ? 0 : Math.sin(this.worldTime * 3 + box.x) * 4;
      const bx = box.x;
      const by = box.y + bobY;
      ctx.save();
      ctx.translate(bx, by);
      if (box.opened) {
        ctx.fillStyle = "#654321";
        ctx.fillRect(0, 10, 32, 22);
        ctx.fillStyle = "#D4AF37";
        ctx.fillRect(0, 8, 32, 4);
      } else {
        const glow = (Math.sin(this.worldTime * 6) + 1) * 0.5;
        ctx.fillStyle = `rgba(255, 209, 102, ${0.25 + glow * 0.35})`;
        ctx.fillRect(-4, -4, 40, 40);
        ctx.fillStyle = "#FFB703";
        ctx.fillRect(0, 0, 32, 32);
        ctx.fillStyle = "#FB8500";
        ctx.fillRect(0, 0, 32, 4);
        ctx.fillRect(0, 28, 32, 4);
        ctx.fillRect(0, 0, 4, 32);
        ctx.fillRect(28, 0, 4, 32);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = 'bold 16px "Press Start 2P", monospace';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("?", 16, 17);
      }
      ctx.restore();
    }
  }
  // --- Grand Finish Line Arch & Spectators ---
  renderFinishLineArch(ctx, finishX) {
    const archY = 240;
    ctx.fillStyle = "#E63946";
    ctx.fillRect(finishX - 120, 436, 240, 8);
    ctx.fillStyle = "#FFD166";
    ctx.fillRect(finishX - 120, 436, 240, 2);
    ctx.fillRect(finishX - 120, 442, 240, 2);
    ctx.fillStyle = "#FFD166";
    ctx.fillRect(finishX - 24, archY, 18, 200);
    ctx.fillStyle = "#E09F3E";
    ctx.fillRect(finishX - 24, archY, 4, 200);
    ctx.fillStyle = "#FFD166";
    ctx.fillRect(finishX + 46, archY, 18, 200);
    ctx.fillStyle = "#E09F3E";
    ctx.fillRect(finishX + 46, archY, 4, 200);
    ctx.fillStyle = "#FFD166";
    ctx.fillRect(finishX - 32, archY, 104, 28);
    const checkW = 10;
    for (let cx = finishX - 28; cx < finishX + 68; cx += checkW) {
      const isWhite = Math.floor((cx - (finishX - 28)) / checkW) % 2 === 0;
      ctx.fillStyle = isWhite ? "#FFFFFF" : "#222222";
      ctx.fillRect(cx, archY + 4, checkW, 10);
      ctx.fillStyle = isWhite ? "#222222" : "#FFFFFF";
      ctx.fillRect(cx, archY + 14, checkW, 10);
    }
    ctx.fillStyle = "#FFFFFF";
    ctx.font = 'bold 12px "Press Start 2P", monospace';
    ctx.textAlign = "center";
    ctx.fillText("FINISH", finishX + 20, archY - 10);
    ctx.fillStyle = "#FFF3B0";
    ctx.fillText("\u{1F3C6}", finishX + 20, archY - 26);
    const bulbColors = ["#FF758F", "#FFD166", "#70E000", "#4CC9F0", "#9D4EDD"];
    for (let b2 = 0; b2 < 6; b2++) {
      const color = bulbColors[(b2 + Math.floor(this.worldTime * 4)) % bulbColors.length];
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(finishX - 24 + b2 * 18, archY + 34, 4, 0, Math.PI * 2);
      ctx.fill();
    }
    this.renderSpectatorBear(ctx, finishX + 80, 440, "brown", true);
    this.renderSpectatorBear(ctx, finishX + 115, 440, "pink", false);
    this.renderSpectatorBear(ctx, finishX + 145, 440, "panda", true);
  }
  renderSpectatorBear(ctx, x3, y3, fur, waveUp) {
    const jumpY = Math.abs(Math.sin(this.worldTime * 4 + x3)) * 12;
    const by = y3 - 36 - jumpY;
    const pal = FUR_COLORS[fur] || FUR_COLORS.brown;
    ctx.fillStyle = pal.secondary;
    ctx.fillRect(x3, by, 22, 20);
    ctx.fillStyle = pal.primary;
    ctx.fillRect(x3 - 2, by - 4, 6, 6);
    ctx.fillRect(x3 + 18, by - 4, 6, 6);
    ctx.fillStyle = "#222";
    ctx.fillRect(x3 + 5, by + 6, 3, 3);
    ctx.fillRect(x3 + 14, by + 6, 3, 3);
    ctx.fillStyle = pal.primary;
    if (waveUp) {
      ctx.fillRect(x3 - 4, by + 2, 4, 6);
      ctx.fillRect(x3 + 22, by + 2, 4, 6);
      ctx.fillStyle = "#FF758F";
      ctx.fillRect(x3 + 24, by - 8, 10, 8);
    } else {
      ctx.fillRect(x3 - 4, by + 10, 4, 6);
      ctx.fillRect(x3 + 22, by + 10, 4, 6);
    }
  }
  // --- Players & AI Baby Bears ---
  renderPlayers(ctx, players, localPlayer) {
    for (const player of players) {
      this.renderSingleBear(ctx, player, player.id === localPlayer.id);
    }
  }
  renderSingleBear(ctx, p3, isLocal) {
    ctx.save();
    if (p3.isEliminated) {
      this.renderGhostBear(ctx, p3);
      ctx.restore();
      return;
    }
    ctx.fillStyle = "rgba(0, 0, 0, 0.28)";
    ctx.beginPath();
    ctx.ellipse(p3.x + p3.width / 2, p3.y + p3.height - 2, 16, 5, 0, 0, Math.PI * 2);
    ctx.fill();
    const isHurting = p3.hurtTimer > 0 && Math.floor(p3.hurtTimer * 14) % 2 === 0;
    this.renderActivePowerupAuras(ctx, p3);
    ctx.translate(p3.x + p3.width / 2, p3.y + p3.height / 2);
    if (!p3.facingRight) {
      ctx.scale(-1, 1);
    }
    const pal = FUR_COLORS[p3.customization.fur] || FUR_COLORS.brown;
    let headOffsetY = 0;
    let bodySquash = 1;
    let legOffset = 0;
    if (p3.animState === "running") {
      headOffsetY = Math.sin(p3.animTimer * 14) * 2.5;
      legOffset = Math.sin(p3.animTimer * 14) * 5;
    } else if (p3.animState === "jump") {
      headOffsetY = -4;
      bodySquash = 1.15;
    } else if (p3.animState === "fall") {
      headOffsetY = 2;
    } else if (p3.animState === "victory") {
      headOffsetY = -Math.abs(Math.sin(p3.animTimer * 8)) * 8;
    }
    ctx.fillStyle = isHurting ? "#FF3366" : pal.primary;
    ctx.fillRect(-10, -4 + headOffsetY, 20, 20 * bodySquash);
    ctx.fillStyle = isHurting ? "#FFA3B8" : pal.snout;
    ctx.fillRect(-6, 0 + headOffsetY, 12, 14 * bodySquash);
    ctx.fillStyle = isHurting ? "#FF3366" : pal.primary;
    if (p3.animState === "running") {
      ctx.fillRect(-9, 14 + legOffset, 7, 7);
      ctx.fillRect(2, 14 - legOffset, 7, 7);
    } else {
      ctx.fillRect(-9, 14, 7, 7);
      ctx.fillRect(2, 14, 7, 7);
    }
    ctx.fillStyle = isHurting ? "#FF3366" : pal.secondary;
    ctx.fillRect(-14, -26 + headOffsetY, 28, 24);
    ctx.fillStyle = isHurting ? "#FF3366" : pal.primary;
    ctx.fillRect(-16, -30 + headOffsetY, 8, 8);
    ctx.fillRect(8, -30 + headOffsetY, 8, 8);
    ctx.fillStyle = pal.earInner;
    ctx.fillRect(-14, -28 + headOffsetY, 4, 4);
    ctx.fillRect(10, -28 + headOffsetY, 4, 4);
    ctx.fillStyle = pal.snout;
    ctx.fillRect(-6, -14 + headOffsetY, 12, 10);
    ctx.fillStyle = "#22150C";
    ctx.fillRect(-3, -13 + headOffsetY, 6, 4);
    this.renderBearFacialExpression(ctx, p3, headOffsetY, isHurting);
    if (p3.customization.scarf !== "none") {
      this.renderScarf(ctx, p3.customization.scarf, headOffsetY);
    }
    if (p3.customization.backpack !== "none") {
      this.renderBackpack(ctx, p3.customization.backpack, headOffsetY);
    }
    if (p3.customization.hat !== "none") {
      this.renderHat(ctx, p3.customization.hat, headOffsetY);
    }
    ctx.restore();
    this.renderPlayerOverheadUI(ctx, p3, isLocal);
  }
  // Facial expressions: Cheerful (3 lives) -> Worried (2 lives) -> Exhausted (1 life) -> Victory
  renderBearFacialExpression(ctx, p3, headOffsetY, isHurting) {
    if (isHurting) {
      ctx.fillStyle = "#FFFFFF";
      ctx.font = "bold 9px monospace";
      ctx.fillText("x", -8, -16 + headOffsetY);
      ctx.fillText("x", 4, -16 + headOffsetY);
      return;
    }
    if (p3.animState === "victory") {
      ctx.fillStyle = "#1D1E2C";
      ctx.fillRect(-8, -16 + headOffsetY, 4, 2);
      ctx.fillRect(-9, -17 + headOffsetY, 2, 2);
      ctx.fillRect(4, -16 + headOffsetY, 4, 2);
      ctx.fillRect(7, -17 + headOffsetY, 2, 2);
      ctx.fillStyle = "#FF758F";
      ctx.fillRect(-3, -8 + headOffsetY, 6, 4);
      return;
    }
    if (p3.lives === 1) {
      ctx.fillStyle = "#22150C";
      ctx.fillRect(-8, -15 + headOffsetY, 5, 3);
      ctx.fillRect(3, -15 + headOffsetY, 5, 3);
      ctx.fillStyle = "#22150C";
      ctx.fillRect(-3, -8 + headOffsetY, 6, 3);
      ctx.fillStyle = "#FF758F";
      ctx.fillRect(-2, -6 + headOffsetY, 4, 5);
      ctx.fillStyle = "#4CC9F0";
      ctx.fillRect(12, -22 + headOffsetY, 3, 5);
      return;
    }
    if (p3.lives === 2) {
      ctx.fillStyle = "#22150C";
      ctx.fillRect(-8, -17 + headOffsetY, 5, 5);
      ctx.fillRect(3, -17 + headOffsetY, 5, 5);
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(-7, -16 + headOffsetY, 2, 2);
      ctx.fillRect(4, -16 + headOffsetY, 2, 2);
      ctx.fillStyle = "#22150C";
      ctx.fillRect(-3, -8 + headOffsetY, 6, 2);
      ctx.fillStyle = "#4CC9F0";
      ctx.fillRect(11, -20 + headOffsetY, 2, 3);
      return;
    }
    ctx.fillStyle = "#1D1E2C";
    ctx.fillRect(-8, -17 + headOffsetY, 5, 6);
    ctx.fillRect(3, -17 + headOffsetY, 5, 6);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(-7, -16 + headOffsetY, 2, 2);
    ctx.fillRect(4, -16 + headOffsetY, 2, 2);
    ctx.fillStyle = "#22150C";
    ctx.fillRect(-3, -8 + headOffsetY, 6, 2);
    ctx.fillStyle = "rgba(255, 117, 143, 0.7)";
    ctx.fillRect(-11, -12 + headOffsetY, 4, 3);
    ctx.fillRect(7, -12 + headOffsetY, 4, 3);
  }
  // Spectator Ghost form when eliminated
  renderGhostBear(ctx, p3) {
    const floatY = Math.sin(this.worldTime * 4 + p3.ghostX) * 6;
    const gx = p3.ghostX;
    const gy = p3.ghostY + floatY;
    ctx.save();
    ctx.translate(gx + p3.width / 2, gy + p3.height / 2);
    ctx.strokeStyle = "#FFD166";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.ellipse(0, -28, 14, 5, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "rgba(235, 240, 255, 0.75)";
    ctx.beginPath();
    ctx.arc(0, -8, 16, Math.PI, 0, false);
    ctx.lineTo(16, 12);
    ctx.lineTo(8, 6);
    ctx.lineTo(0, 12);
    ctx.lineTo(-8, 6);
    ctx.lineTo(-16, 12);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#4CC9F0";
    ctx.fillRect(-8, -10, 4, 6);
    ctx.fillRect(4, -10, 4, 6);
    ctx.fillStyle = "#2B2D42";
    ctx.fillRect(-6, -12, 3, 3);
    ctx.fillRect(6, -12, 3, 3);
    ctx.restore();
    ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
    ctx.font = 'bold 9px "Press Start 2P", monospace';
    ctx.textAlign = "center";
    ctx.fillText(`${p3.name} (\u{1F47B} Spectating)`, gx + p3.width / 2, gy - 20);
  }
  // Cosmetics rendering
  renderHat(ctx, hat, headOffsetY) {
    const hy = -26 + headOffsetY;
    switch (hat) {
      case "crown":
        ctx.fillStyle = "#FFD166";
        ctx.fillRect(-10, hy - 10, 20, 10);
        ctx.fillStyle = "#E63946";
        ctx.fillRect(-8, hy - 12, 3, 3);
        ctx.fillRect(-1, hy - 14, 3, 3);
        ctx.fillRect(6, hy - 12, 3, 3);
        break;
      case "chef":
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(-12, hy - 14, 24, 14);
        ctx.fillStyle = "#E9ECEF";
        ctx.fillRect(-10, hy - 18, 20, 6);
        break;
      case "strawberry":
        ctx.fillStyle = "#FF477E";
        ctx.beginPath();
        ctx.ellipse(0, hy - 6, 12, 8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#70E000";
        ctx.fillRect(-2, hy - 14, 4, 5);
        break;
      case "propeller":
        ctx.fillStyle = "#3A86FF";
        ctx.fillRect(-10, hy - 6, 20, 6);
        ctx.fillStyle = "#FFBE0B";
        const propW = Math.abs(Math.sin(this.worldTime * 20)) * 14;
        ctx.fillRect(-propW, hy - 10, propW * 2, 3);
        break;
      case "wizard":
        ctx.fillStyle = "#7209B7";
        ctx.beginPath();
        ctx.moveTo(-12, hy);
        ctx.lineTo(0, hy - 22);
        ctx.lineTo(12, hy);
        ctx.fill();
        ctx.fillStyle = "#FFD166";
        ctx.fillRect(-2, hy - 24, 4, 4);
        break;
      case "flower":
        ctx.fillStyle = "#52B788";
        ctx.fillRect(-12, hy - 4, 24, 3);
        const blossoms = ["#FF758F", "#FFD166", "#4CC9F0"];
        for (let i3 = 0; i3 < 3; i3++) {
          ctx.fillStyle = blossoms[i3];
          ctx.beginPath();
          ctx.arc(-8 + i3 * 8, hy - 6, 4, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      default:
        break;
    }
  }
  renderScarf(ctx, scarf, headOffsetY) {
    const sy = -4 + headOffsetY;
    const scarfColors = {
      red: "#E63946",
      rainbow: "#FF758F",
      blue: "#4CC9F0",
      emerald: "#52B788",
      gold_bowtie: "#FFD166"
    };
    const col = scarfColors[scarf] || "#E63946";
    if (scarf === "gold_bowtie") {
      ctx.fillStyle = col;
      ctx.fillRect(-5, sy, 10, 5);
      ctx.fillStyle = "#E09F3E";
      ctx.fillRect(-2, sy, 4, 5);
    } else {
      ctx.fillStyle = col;
      ctx.fillRect(-12, sy, 24, 5);
      const flutter = Math.sin(this.worldTime * 12) * 3;
      ctx.fillRect(-14, sy + 3, 5, 8 + flutter);
    }
  }
  renderBackpack(ctx, pack, headOffsetY) {
    const px = -15;
    const py = 0 + headOffsetY;
    switch (pack) {
      case "honeypot":
        ctx.fillStyle = "#E07A5F";
        ctx.fillRect(px, py, 6, 12);
        ctx.fillStyle = "#FFD166";
        ctx.fillRect(px - 1, py + 2, 7, 4);
        break;
      case "rocket":
        ctx.fillStyle = "#E63946";
        ctx.fillRect(px, py, 6, 14);
        ctx.fillStyle = "#FFBE0B";
        ctx.fillRect(px + 1, py + 14, 4, 4 + Math.random() * 3);
        break;
      default:
        ctx.fillStyle = "#81B29A";
        ctx.fillRect(px, py, 6, 10);
        break;
    }
  }
  renderActivePowerupAuras(ctx, p3) {
    for (const ap of p3.activePowerups) {
      if (ap.type === "shield") {
        ctx.strokeStyle = `rgba(76, 201, 240, ${0.7 + Math.sin(this.worldTime * 10) * 0.25})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(p3.x + p3.width / 2, p3.y + p3.height / 2, 28, 0, Math.PI * 2);
        ctx.stroke();
      } else if (ap.type === "invincibility" || ap.type === "golden_bear") {
        const rainbow = ["#FF758F", "#FFD166", "#70E000", "#4CC9F0", "#9D4EDD"];
        ctx.strokeStyle = rainbow[Math.floor(this.worldTime * 10) % rainbow.length];
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(p3.x + p3.width / 2, p3.y + p3.height / 2, 30, 0, Math.PI * 2);
        ctx.stroke();
      } else if (ap.type === "hoverboard") {
        ctx.fillStyle = "#4CC9F0";
        ctx.fillRect(p3.x - 4, p3.y + p3.height - 4, p3.width + 8, 5);
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(p3.x, p3.y + p3.height - 2, p3.width, 2);
      }
    }
  }
  renderPlayerOverheadUI(ctx, p3, isLocal) {
    const rx = p3.x + p3.width / 2;
    const ry = p3.y - 14;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = 'bold 9px "Press Start 2P", monospace';
    ctx.fillStyle = isLocal ? "#FFD166" : "#FFFFFF";
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.strokeText(p3.name, rx, ry);
    ctx.fillText(p3.name, rx, ry);
    let heartsStr = "";
    for (let h3 = 0; h3 < p3.lives; h3++) heartsStr += "\u2764\uFE0F";
    ctx.font = "8px sans-serif";
    ctx.fillText(heartsStr, rx, ry - 11);
  }
  // --- Particles & Floating Texts ---
  renderParticles(ctx, ps) {
    for (const p3 of ps.particles) {
      ctx.save();
      ctx.globalAlpha = p3.alpha;
      ctx.fillStyle = p3.color;
      ctx.translate(p3.x, p3.y);
      if (p3.rotation !== 0) ctx.rotate(p3.rotation);
      if (p3.shape === "circle") {
        ctx.beginPath();
        ctx.arc(0, 0, p3.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (p3.shape === "star" || p3.shape === "sparkle") {
        ctx.fillRect(-p3.size / 2, -1, p3.size, 2);
        ctx.fillRect(-1, -p3.size / 2, 2, p3.size);
      } else if (p3.shape === "heart") {
        ctx.fillText("\u2764\uFE0F", 0, 0);
      } else {
        ctx.fillRect(-p3.size / 2, -p3.size / 2, p3.size, p3.size);
      }
      ctx.restore();
    }
    for (const ft of ps.floatingTexts) {
      ctx.save();
      ctx.globalAlpha = ft.alpha;
      ctx.font = 'bold 11px "Press Start 2P", monospace';
      ctx.fillStyle = ft.color;
      ctx.strokeStyle = "#000000";
      ctx.lineWidth = 2;
      ctx.strokeText(ft.text, ft.x, ft.y);
      ctx.fillText(ft.text, ft.x, ft.y);
      ctx.restore();
    }
  }
  // --- Ambient Butterflies & Drifting Leaves ---
  renderAmbientFlora(ctx, cameraX) {
    for (const leaf of this.ambientLeaves) {
      leaf.x += leaf.speedX;
      leaf.y += leaf.speedY;
      if (leaf.x < cameraX - 100) leaf.x = cameraX + this.width + 100;
      if (leaf.y > this.height) leaf.y = -10;
      ctx.fillStyle = leaf.color;
      ctx.fillRect(leaf.x, leaf.y, 4, 3);
    }
    for (const bf of this.butterflies) {
      bf.timer += 0.05;
      const x3 = bf.baseX + Math.sin(bf.timer) * 40;
      const y3 = bf.y + Math.cos(bf.timer * 2) * 15;
      const flap = Math.sin(bf.timer * 15) * 4;
      ctx.fillStyle = bf.color;
      ctx.fillRect(x3 - 4, y3 - flap, 4, 5);
      ctx.fillRect(x3, y3 - flap, 4, 5);
      ctx.fillStyle = "#222";
      ctx.fillRect(x3 - 1, y3, 2, 4);
    }
  }
  // --- Screen Vignette (Warning when 1 life remains) ---
  renderScreenVignette(ctx, localPlayer) {
    if (localPlayer.lives === 1 && !localPlayer.isEliminated) {
      const pulse = (Math.sin(this.worldTime * 6) + 1) * 0.5;
      const grad = ctx.createRadialGradient(
        this.width / 2,
        this.height / 2,
        this.width * 0.35,
        this.width / 2,
        this.height / 2,
        this.width * 0.55
      );
      grad.addColorStop(0, "rgba(239, 68, 68, 0)");
      grad.addColorStop(1, `rgba(239, 68, 68, ${0.25 + pulse * 0.45})`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, this.width, this.height);
    }
  }
};

// src/game/LevelGenerator.ts
var LevelGenerator = class {
  static generateLevel() {
    const finishX = GAME_CONSTANTS.FINISH_X;
    const biomes = [
      {
        startX: 0,
        endX: 2300,
        type: "forest",
        name: "Enchanted Peach Forest",
        skyTopColor: "#FF7B54",
        skyBottomColor: "#FFB085",
        groundColor: "#4A2810",
        groundGrassColor: "#70E000",
        accentColor: "#FF758F"
      },
      {
        startX: 2300,
        endX: 4500,
        type: "river",
        name: "Whispering River Bridges",
        skyTopColor: "#FF758F",
        skyBottomColor: "#FFB085",
        groundColor: "#362419",
        groundGrassColor: "#52B788",
        accentColor: "#4CC9F0"
      },
      {
        startX: 4500,
        endX: 6800,
        type: "cave",
        name: "Luminescent Crystal Caves",
        skyTopColor: "#3A1C52",
        skyBottomColor: "#6B2D8C",
        groundColor: "#201633",
        groundGrassColor: "#9D4EDD",
        accentColor: "#E0AAFF"
      },
      {
        startX: 6800,
        endX: 9e3,
        type: "mountain",
        name: "Frosty Sunset Peaks",
        skyTopColor: "#7B2CBF",
        skyBottomColor: "#C77DFF",
        groundColor: "#3E4254",
        groundGrassColor: "#D8F3DC",
        accentColor: "#A0C4FF"
      },
      {
        startX: 9e3,
        endX: 11200,
        type: "castle",
        name: "Molten Castle Ramparts",
        skyTopColor: "#590D22",
        skyBottomColor: "#A4133C",
        groundColor: "#2B1116",
        groundGrassColor: "#FF4D6D",
        accentColor: "#FFB703"
      },
      {
        startX: 11200,
        endX: finishX + 800,
        type: "cloud",
        name: "Celestial Rainbow Clouds",
        skyTopColor: "#FF9E00",
        skyBottomColor: "#FFD166",
        groundColor: "#7209B7",
        groundGrassColor: "#F72585",
        accentColor: "#4CC9F0"
      }
    ];
    const platforms = [];
    const obstacles = [];
    const gems = [];
    const mysteryBoxes = [];
    const groundY = 440;
    let currX = 0;
    let gemId = 0;
    let boxId = 0;
    let obsId = 0;
    while (currX < finishX + 600) {
      const isPit = currX > 600 && currX < finishX - 500 && Math.random() < 0.22;
      const groundSegmentWidth = 350 + Math.floor(Math.random() * 450);
      if (isPit) {
        const gapSize = 130 + Math.floor(Math.random() * 110);
        const bridgeX = currX + 20;
        if (currX >= 2300 && currX < 4500) {
          const plankCount = 4;
          const plankW = (gapSize - 20) / plankCount;
          for (let p3 = 0; p3 < plankCount; p3++) {
            platforms.push({
              id: `plat_bridge_${currX}_${p3}`,
              x: bridgeX + p3 * (plankW + 4),
              y: groundY + 10,
              width: plankW,
              height: 18,
              type: "collapsing",
              collapseTimer: 0.65
            });
          }
        } else {
          platforms.push({
            id: `plat_float_${currX}`,
            x: bridgeX + 20,
            y: groundY - 50 - Math.floor(Math.random() * 40),
            width: gapSize - 40,
            height: 24,
            type: currX >= 6800 && currX < 9e3 ? "ice" : "floating"
          });
        }
        for (let g4 = 0; g4 < 4; g4++) {
          gems.push({
            id: `gem_${gemId++}`,
            x: bridgeX + g4 * (gapSize / 4) + 15,
            y: groundY - 60 - Math.sin(g4 / 3 * Math.PI) * 45,
            type: g4 === 2 ? "purple" : "blue",
            value: g4 === 2 ? 50 : 10,
            collected: false
          });
        }
        currX += gapSize;
      }
      platforms.push({
        id: `plat_ground_${currX}`,
        x: currX,
        y: groundY,
        width: groundSegmentWidth,
        height: 140,
        type: currX >= 6800 && currX < 9e3 ? "ice" : "ground"
      });
      if (Math.random() < 0.6) {
        const elevatedY = groundY - 90 - Math.floor(Math.random() * 60);
        const elevatedW = 120 + Math.floor(Math.random() * 140);
        const elevatedX = currX + 60;
        platforms.push({
          id: `plat_high_${elevatedX}`,
          x: elevatedX,
          y: elevatedY,
          width: elevatedW,
          height: 22,
          type: "floating"
        });
        for (let g4 = 0; g4 < 3; g4++) {
          gems.push({
            id: `gem_${gemId++}`,
            x: elevatedX + 25 + g4 * 35,
            y: elevatedY - 30,
            type: Math.random() < 0.3 ? "yellow" : "pink",
            value: 30,
            collected: false
          });
        }
        if (Math.random() < 0.45 && elevatedX > 500 && elevatedX < finishX - 300) {
          mysteryBoxes.push({
            id: `mbox_${boxId++}`,
            x: elevatedX + elevatedW / 2 - 16,
            y: elevatedY - 34,
            opened: false,
            burstAnim: 0
          });
        }
      }
      const gemCount = 2 + Math.floor(Math.random() * 3);
      for (let g4 = 0; g4 < gemCount; g4++) {
        const gx = currX + 50 + g4 * 55;
        if (gx < currX + groundSegmentWidth - 40) {
          const gemTypeRandom = Math.random();
          const gType = gemTypeRandom > 0.85 ? "yellow" : gemTypeRandom > 0.6 ? "green" : "blue";
          gems.push({
            id: `gem_${gemId++}`,
            x: gx,
            y: groundY - 26,
            type: gType,
            value: gType === "yellow" ? 75 : gType === "green" ? 20 : 10,
            collected: false
          });
        }
      }
      currX += groundSegmentWidth;
    }
    for (let x3 = 400; x3 < 2200; x3 += 220 + Math.floor(Math.random() * 150)) {
      const r3 = Math.random();
      if (r3 < 0.25) {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "bouncing_mushroom",
          x: x3,
          y: groundY - 32,
          width: 40,
          height: 32,
          bounceMultiplier: 1.45,
          hazard: false
        });
      } else if (r3 < 0.5) {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "rolling_log",
          x: x3,
          y: groundY - 28,
          width: 32,
          height: 28,
          vx: -1.8,
          minX: x3 - 180,
          maxX: x3 + 180,
          angle: 0,
          rotSpeed: 0.12,
          hazard: true
        });
      } else if (r3 < 0.75) {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "angry_bee",
          x: x3,
          y: groundY - 80,
          width: 28,
          height: 28,
          minY: groundY - 120,
          maxY: groundY - 40,
          vy: 1.5,
          timer: Math.random() * 10,
          hazard: true
        });
      } else {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "jumping_frog",
          x: x3,
          y: groundY - 24,
          width: 30,
          height: 24,
          timer: 0,
          hazard: true
        });
      }
    }
    for (let x3 = 2400; x3 < 4400; x3 += 240 + Math.floor(Math.random() * 160)) {
      const r3 = Math.random();
      if (r3 < 0.35) {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "swinging_hammer",
          x: x3,
          y: groundY - 140,
          width: 38,
          height: 120,
          angle: 0,
          timer: Math.random() * 5,
          hazard: true
        });
      } else if (r3 < 0.7) {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "spinning_blade",
          x: x3,
          y: groundY - 36,
          width: 36,
          height: 36,
          vx: 2,
          minX: x3 - 120,
          maxX: x3 + 120,
          angle: 0,
          rotSpeed: 0.22,
          hazard: true
        });
      } else {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "water_current",
          x: x3,
          y: groundY - 15,
          width: 90,
          height: 20,
          hazard: true
        });
      }
    }
    for (let x3 = 4600; x3 < 6700; x3 += 230 + Math.floor(Math.random() * 140)) {
      const r3 = Math.random();
      if (r3 < 0.3) {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "laser_beam",
          x: x3,
          y: groundY - 90,
          width: 14,
          height: 90,
          timer: Math.random() * 3,
          state: 1,
          // active / inactive cycle
          hazard: true
        });
      } else if (r3 < 0.6) {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "falling_rock",
          x: x3,
          y: groundY - 220,
          width: 30,
          height: 40,
          vy: 0,
          minY: groundY - 220,
          maxY: groundY - 20,
          isTriggered: false,
          timer: 0,
          hazard: true
        });
      } else if (r3 < 0.8) {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "moving_spikes",
          x: x3,
          y: groundY - 24,
          width: 48,
          height: 24,
          vx: 1.6,
          minX: x3 - 80,
          maxX: x3 + 80,
          hazard: true
        });
      } else {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "disappearing_block",
          x: x3,
          y: groundY - 70,
          width: 60,
          height: 20,
          timer: Math.random() * 4,
          state: 1,
          hazard: false
        });
      }
    }
    for (let x3 = 6900; x3 < 8900; x3 += 250 + Math.floor(Math.random() * 150)) {
      const r3 = Math.random();
      if (r3 < 0.35) {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "rotating_windmill",
          x: x3,
          y: groundY - 90,
          width: 90,
          height: 90,
          angle: 0,
          rotSpeed: 0.05,
          hazard: true
        });
      } else if (r3 < 0.7) {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "cannonball",
          x: x3 + 150,
          y: groundY - 45,
          width: 26,
          height: 26,
          vx: -3.6,
          minX: x3 - 180,
          maxX: x3 + 180,
          hazard: true
        });
      } else {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "ice_patch",
          x: x3,
          y: groundY - 8,
          width: 100,
          height: 12,
          hazard: false
        });
      }
    }
    for (let x3 = 9100; x3 < 11100; x3 += 240 + Math.floor(Math.random() * 150)) {
      const r3 = Math.random();
      if (r3 < 0.4) {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "fireball",
          x: x3,
          y: groundY - 10,
          width: 24,
          height: 24,
          minY: groundY - 160,
          maxY: groundY + 20,
          vy: -6,
          timer: Math.random() * 3,
          hazard: true
        });
      } else if (r3 < 0.7) {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "exploding_barrel",
          x: x3,
          y: groundY - 34,
          width: 32,
          height: 34,
          timer: 0,
          hazard: true
        });
      } else {
        obstacles.push({
          id: `obs_${obsId++}`,
          type: "moving_platform",
          x: x3,
          y: groundY - 60,
          width: 70,
          height: 18,
          minY: groundY - 140,
          maxY: groundY - 30,
          vy: 1.4,
          hazard: false
        });
      }
    }
    for (let x3 = 11300; x3 < finishX - 300; x3 += 220) {
      obstacles.push({
        id: `obs_${obsId++}`,
        type: "bouncing_mushroom",
        x: x3,
        y: groundY - 30,
        width: 44,
        height: 30,
        bounceMultiplier: 1.6,
        hazard: false
      });
      for (let g4 = 0; g4 < 4; g4++) {
        gems.push({
          id: `gem_${gemId++}`,
          x: x3 + g4 * 35,
          y: groundY - 80 - Math.sin(g4 / 3 * Math.PI) * 40,
          type: g4 === 1 ? "diamond" : "purple",
          value: g4 === 1 ? 150 : 50,
          collected: false
        });
      }
    }
    mysteryBoxes.push({
      id: `mbox_final`,
      x: finishX - 160,
      y: groundY - 34,
      opened: false,
      burstAnim: 0
    });
    gems.push({
      id: `gem_trophy_1`,
      x: finishX - 90,
      y: groundY - 45,
      type: "diamond",
      value: 150,
      collected: false
    });
    gems.push({
      id: `gem_trophy_2`,
      x: finishX - 45,
      y: groundY - 65,
      type: "diamond",
      value: 150,
      collected: false
    });
    return {
      finishX,
      biomes,
      platforms,
      obstacles,
      gems,
      mysteryBoxes
    };
  }
};

// src/components/VictoryModal.tsx
var VictoryModal = ({
  results,
  onPlayAgain,
  onReturnToLobby
}) => {
  const winner = results[0];
  return /* @__PURE__ */ u3("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4", children: /* @__PURE__ */ u3("div", { className: "pixel-box-gold max-w-lg w-full p-6 space-y-6 text-center animate-bounce-slow", children: [
    /* @__PURE__ */ u3("div", { className: "space-y-2", children: [
      /* @__PURE__ */ u3("div", { className: "text-5xl", children: "\u{1F3C6}" }),
      /* @__PURE__ */ u3("div", { className: "font-pixel text-xs text-[#FFD166] tracking-widest uppercase", children: "RACE WINNER" }),
      /* @__PURE__ */ u3("h2", { className: "text-2xl sm:text-3xl font-extrabold text-white", children: winner?.playerName || "Baby Bear \u{1F43B}" }),
      /* @__PURE__ */ u3("div", { className: "inline-block px-3 py-1 rounded-full bg-[#70E000]/20 text-[#70E000] text-xs font-pixel border border-[#70E000]/40", children: "CHAMPION FINISH!" })
    ] }),
    /* @__PURE__ */ u3("div", { className: "bg-[#1D1426] p-4 rounded-2xl border border-white/10 space-y-2.5 text-left text-xs font-fun", children: [
      /* @__PURE__ */ u3("div", { className: "flex justify-between items-center py-1 border-b border-white/5", children: [
        /* @__PURE__ */ u3("span", { className: "text-gray-300", children: "\u23F1\uFE0F Race Time:" }),
        /* @__PURE__ */ u3("span", { className: "font-mono font-bold text-[#4CC9F0] text-sm", children: winner?.timeFormatted || "00:00" })
      ] }),
      /* @__PURE__ */ u3("div", { className: "flex justify-between items-center py-1 border-b border-white/5", children: [
        /* @__PURE__ */ u3("span", { className: "text-gray-300", children: "\u2764\uFE0F Remaining Lives:" }),
        /* @__PURE__ */ u3("span", { className: "font-bold text-[#FF758F]", children: Array(winner?.livesRemaining || 0).fill("\u2764\uFE0F").join(" ") })
      ] }),
      /* @__PURE__ */ u3("div", { className: "flex justify-between items-center py-1 border-b border-white/5", children: [
        /* @__PURE__ */ u3("span", { className: "text-gray-300", children: "\u{1F48E} Total Gems Collected:" }),
        /* @__PURE__ */ u3("span", { className: "font-mono font-bold text-yellow-300", children: winner?.gemsCount || 0 })
      ] }),
      /* @__PURE__ */ u3("div", { className: "flex justify-between items-center py-1 border-b border-white/5", children: [
        /* @__PURE__ */ u3("span", { className: "text-gray-300", children: "\u26A1 Power-Ups Used:" }),
        /* @__PURE__ */ u3("span", { className: "font-mono font-bold text-purple-300", children: winner?.powerupsUsed || 0 })
      ] }),
      /* @__PURE__ */ u3("div", { className: "flex justify-between items-center py-1", children: [
        /* @__PURE__ */ u3("span", { className: "text-gray-300", children: "\u{1F31F} Bonus Survival Score:" }),
        /* @__PURE__ */ u3("span", { className: "font-mono font-bold text-[#70E000]", children: [
          "+",
          (winner?.livesRemaining || 0) * 500,
          " pts"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { className: "space-y-1.5 text-xs", children: [
      /* @__PURE__ */ u3("div", { className: "font-pixel text-[10px] text-gray-400 text-left uppercase", children: "FINAL PLACEMENTS" }),
      results.map((r3, idx) => /* @__PURE__ */ u3(
        "div",
        {
          className: `flex items-center justify-between p-2 rounded-xl ${r3.isLocal ? "bg-[#FF758F]/20 border border-[#FF758F]" : "bg-black/20"}`,
          children: [
            /* @__PURE__ */ u3("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ u3("span", { className: "font-pixel text-[11px] text-[#FFD166]", children: [
                "#",
                idx + 1
              ] }),
              /* @__PURE__ */ u3("span", { className: "font-bold text-white", children: r3.playerName }),
              r3.isLocal && /* @__PURE__ */ u3("span", { className: "text-[9px] bg-[#FF758F] text-white px-1.5 py-0.5 rounded font-mono", children: "YOU" })
            ] }),
            /* @__PURE__ */ u3("div", { className: "font-mono text-gray-300", children: r3.timeFormatted })
          ]
        },
        r3.playerId
      ))
    ] }),
    /* @__PURE__ */ u3("div", { className: "flex flex-col sm:flex-row gap-3 pt-2", children: [
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: onPlayAgain,
          className: "flex-1 btn-pixel btn-pixel-gold py-3.5 rounded-xl font-pixel text-xs",
          children: "PLAY AGAIN \u{1F504}"
        }
      ),
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: onReturnToLobby,
          className: "flex-1 btn-pixel btn-pixel-purple py-3.5 rounded-xl font-pixel text-xs",
          children: "LOBBY \u{1F3C1}"
        }
      )
    ] })
  ] }) });
};

// src/components/GameCanvas.tsx
var GameCanvas = ({
  customization,
  botCount,
  onExitToLobby,
  onOpenSettings,
  scanlinesEnabled
}) => {
  const canvasRef = A2(null);
  const engineRef = A2(null);
  const rendererRef = A2(null);
  const requestRef = A2(0);
  const lastTimeRef = A2(0);
  const [hudLives, setHudLives] = d2(3);
  const [hudGems, setHudGems] = d2(0);
  const [hudScore, setHudScore] = d2(0);
  const [hudPowerups, setHudPowerups] = d2([]);
  const [raceProgress, setRaceProgress] = d2(0);
  const [isEliminated, setIsEliminated] = d2(false);
  const [isPaused, setIsPaused] = d2(false);
  const [raceResults, setRaceResults] = d2(null);
  const initGame = q2(() => {
    const level = LevelGenerator.generateLevel();
    const engine = new GameEngine(level, customization, botCount);
    engineRef.current = engine;
    engine.onFinishCallback = (results) => {
      setRaceResults(results);
    };
    engine.onEliminatedCallback = () => {
      setIsEliminated(true);
    };
    setIsEliminated(false);
    setRaceResults(null);
    setIsPaused(false);
    soundEngine.startBGM();
  }, [customization, botCount]);
  y2(() => {
    initGame();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    rendererRef.current = new PixelRenderer(ctx, GAME_CONSTANTS.CANVAS_WIDTH, GAME_CONSTANTS.CANVAS_HEIGHT);
    const animate = (time) => {
      if (lastTimeRef.current === 0) lastTimeRef.current = time;
      const dt = Math.min(0.1, (time - lastTimeRef.current) / 1e3);
      lastTimeRef.current = time;
      const engine = engineRef.current;
      const renderer = rendererRef.current;
      if (engine && renderer && ctx) {
        if (!engine.isPaused) {
          engine.update(dt);
        }
        ctx.clearRect(0, 0, GAME_CONSTANTS.CANVAS_WIDTH, GAME_CONSTANTS.CANVAS_HEIGHT);
        renderer.render(
          dt,
          engine.level,
          engine.players,
          engine.localPlayer,
          engine.particles,
          engine.cameraX,
          engine.cameraY
        );
        setHudLives(engine.localPlayer.lives);
        setHudGems(engine.localPlayer.gemsCollected);
        setHudScore(engine.localPlayer.score);
        setHudPowerups(
          engine.localPlayer.activePowerups.map((ap) => ({
            type: ap.type,
            remaining: ap.remainingDuration,
            max: ap.maxDuration
          }))
        );
        setRaceProgress(Math.min(100, engine.localPlayer.x / engine.level.finishX * 100));
        if (engine.input.pauseJustPressed) {
          setIsPaused((prev) => !prev);
          engine.isPaused = !engine.isPaused;
        }
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(requestRef.current);
      soundEngine.stopBGM();
      soundEngine.stopHeartbeat();
    };
  }, [initGame]);
  const handleTouchDir = (key, active) => {
    if (engineRef.current) {
      engineRef.current.input.setTouchInput(key, active);
    }
  };
  const togglePause = () => {
    if (engineRef.current) {
      const next = !isPaused;
      engineRef.current.isPaused = next;
      setIsPaused(next);
    }
  };
  return /* @__PURE__ */ u3("div", { className: "relative w-full min-h-[calc(100vh-65px)] flex flex-col items-center justify-center p-2 sm:p-4 bg-[#140D1B] select-none", children: [
    /* @__PURE__ */ u3("div", { className: "relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border-4 border-[#FF758F]/50 shadow-2xl bg-black", children: [
      /* @__PURE__ */ u3(
        "canvas",
        {
          ref: canvasRef,
          width: GAME_CONSTANTS.CANVAS_WIDTH,
          height: GAME_CONSTANTS.CANVAS_HEIGHT,
          className: "w-full h-full object-contain pixel-canvas block"
        }
      ),
      scanlinesEnabled && /* @__PURE__ */ u3("div", { className: "absolute inset-0 scanlines pointer-events-none" }),
      /* @__PURE__ */ u3("div", { className: "absolute top-3 left-3 right-3 flex items-start justify-between pointer-events-none z-20", children: [
        /* @__PURE__ */ u3("div", { className: "space-y-2 pointer-events-auto", children: [
          /* @__PURE__ */ u3("div", { className: "flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10", children: [
            /* @__PURE__ */ u3("span", { className: "text-xs font-pixel text-gray-300", children: "LIVES:" }),
            /* @__PURE__ */ u3("div", { className: "flex gap-1 text-base", children: [1, 2, 3].map((heartIndex) => /* @__PURE__ */ u3(
              "span",
              {
                className: `transition-transform duration-200 ${heartIndex <= hudLives ? "opacity-100 scale-100" : "opacity-25 scale-75 grayscale"}`,
                children: "\u2764\uFE0F"
              },
              heartIndex
            )) })
          ] }),
          /* @__PURE__ */ u3("div", { className: "flex items-center gap-3 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-xl border border-white/10", children: [
            /* @__PURE__ */ u3("div", { className: "flex items-center gap-1.5 text-xs font-pixel text-yellow-300", children: [
              /* @__PURE__ */ u3("span", { children: "\u{1F48E}" }),
              /* @__PURE__ */ u3("span", { children: hudGems })
            ] }),
            /* @__PURE__ */ u3("div", { className: "h-3 w-px bg-white/20" }),
            /* @__PURE__ */ u3("div", { className: "text-xs font-mono font-bold text-gray-200", children: [
              hudScore.toLocaleString(),
              " pts"
            ] })
          ] }),
          hudPowerups.length > 0 && /* @__PURE__ */ u3("div", { className: "flex flex-col gap-1.5", children: hudPowerups.map((ap) => {
            const cfg = POWERUPS_CONFIG[ap.type];
            const pct = Math.max(0, ap.remaining / Math.max(1, ap.max) * 100);
            return /* @__PURE__ */ u3(
              "div",
              {
                className: "flex items-center gap-2 bg-black/70 backdrop-blur-sm px-2.5 py-1 rounded-lg border text-xs",
                style: { borderColor: cfg ? cfg.color : "#FFD166" },
                children: [
                  /* @__PURE__ */ u3("span", { children: cfg?.icon || "\u26A1" }),
                  /* @__PURE__ */ u3("span", { className: "font-pixel text-[10px] text-white", children: cfg?.name || ap.type }),
                  /* @__PURE__ */ u3("div", { className: "w-12 h-1.5 bg-gray-700 rounded-full overflow-hidden", children: /* @__PURE__ */ u3(
                    "div",
                    {
                      className: "h-full bg-gradient-to-r from-yellow-400 to-pink-500 transition-all duration-100",
                      style: { width: `${pct}%` }
                    }
                  ) })
                ]
              },
              ap.type
            );
          }) })
        ] }),
        /* @__PURE__ */ u3("div", { className: "flex flex-col items-end gap-2 pointer-events-auto", children: [
          /* @__PURE__ */ u3("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ u3(
            "button",
            {
              onClick: togglePause,
              className: "bg-black/60 hover:bg-black/80 px-2.5 py-1.5 rounded-xl border border-white/10 text-xs font-pixel text-gray-200",
              children: "\u23F8\uFE0F PAUSE"
            }
          ) }),
          /* @__PURE__ */ u3("div", { className: "bg-black/60 backdrop-blur-sm px-3 py-2 rounded-xl border border-white/10 w-44 sm:w-56 space-y-1", children: [
            /* @__PURE__ */ u3("div", { className: "flex justify-between text-[10px] font-pixel text-gray-300", children: [
              /* @__PURE__ */ u3("span", { children: "START" }),
              /* @__PURE__ */ u3("span", { className: "text-[#FFD166]", children: [
                "\u{1F3C1} ",
                Math.floor(raceProgress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ u3("div", { className: "relative w-full h-2.5 bg-gray-800 rounded-full overflow-hidden border border-white/10", children: /* @__PURE__ */ u3(
              "div",
              {
                className: "h-full bg-gradient-to-r from-[#FF7B54] via-[#FF758F] to-[#70E000] rounded-full transition-all duration-75",
                style: { width: `${raceProgress}%` }
              }
            ) })
          ] })
        ] })
      ] }),
      isEliminated && !raceResults && /* @__PURE__ */ u3("div", { className: "absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center space-y-4 z-30 animate-pulse-fast", children: [
        /* @__PURE__ */ u3("div", { className: "text-6xl animate-bounce", children: "\u{1F494}" }),
        /* @__PURE__ */ u3("h2", { className: "font-pixel text-lg sm:text-2xl text-[#FF3366] tracking-wider", children: "BABY BEAR ELIMINATED!" }),
        /* @__PURE__ */ u3("p", { className: "text-sm text-gray-300 font-fun max-w-sm", children: "All hearts lost! You have turned into an angelic spectator ghost. You can watch the remaining bears race to the finish line!" }),
        /* @__PURE__ */ u3("div", { className: "flex gap-3", children: [
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: () => engineRef.current?.cycleSpectator(-1),
              className: "btn-pixel btn-pixel-blue px-4 py-2 rounded-xl font-pixel text-xs",
              children: "\u25C0 Prev Bear"
            }
          ),
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: () => engineRef.current?.cycleSpectator(1),
              className: "btn-pixel btn-pixel-pink px-4 py-2 rounded-xl font-pixel text-xs",
              children: "Next Bear \u25B6"
            }
          ),
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: initGame,
              className: "btn-pixel btn-pixel-gold px-4 py-2 rounded-xl font-pixel text-xs",
              children: "Try Again \u{1F504}"
            }
          )
        ] })
      ] }),
      isPaused && /* @__PURE__ */ u3("div", { className: "absolute inset-0 bg-black/75 backdrop-blur-md flex flex-col items-center justify-center p-6 z-40", children: /* @__PURE__ */ u3("div", { className: "pixel-box max-w-xs w-full p-6 text-center space-y-4", children: [
        /* @__PURE__ */ u3("h3", { className: "font-pixel text-sm text-[#FFD166]", children: "GAME PAUSED" }),
        /* @__PURE__ */ u3("div", { className: "space-y-2.5 pt-2", children: [
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: togglePause,
              className: "w-full btn-pixel btn-pixel-gold py-2.5 rounded-xl font-pixel text-xs",
              children: "RESUME"
            }
          ),
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: initGame,
              className: "w-full btn-pixel btn-pixel-pink py-2.5 rounded-xl font-pixel text-xs",
              children: "RESTART RACE \u{1F504}"
            }
          ),
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: onOpenSettings,
              className: "w-full btn-pixel btn-pixel-purple py-2.5 rounded-xl font-pixel text-xs",
              children: "SETTINGS \u2699\uFE0F"
            }
          ),
          /* @__PURE__ */ u3(
            "button",
            {
              onClick: onExitToLobby,
              className: "w-full py-2.5 rounded-xl bg-gray-700 hover:bg-gray-600 font-pixel text-xs text-gray-200",
              children: "QUIT TO LOBBY"
            }
          )
        ] })
      ] }) }),
      raceResults && /* @__PURE__ */ u3(
        VictoryModal,
        {
          results: raceResults,
          onPlayAgain: initGame,
          onReturnToLobby: onExitToLobby
        }
      )
    ] }),
    /* @__PURE__ */ u3("div", { className: "w-full max-w-5xl mt-3 flex items-center justify-between px-2 sm:px-4 touch-control select-none md:hidden", children: [
      /* @__PURE__ */ u3("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ u3(
          "button",
          {
            onTouchStart: () => handleTouchDir("left", true),
            onTouchEnd: () => handleTouchDir("left", false),
            onMouseDown: () => handleTouchDir("left", true),
            onMouseUp: () => handleTouchDir("left", false),
            className: "w-14 h-14 rounded-2xl bg-white/15 active:bg-white/30 border-2 border-white/20 flex items-center justify-center text-xl font-bold shadow-md",
            children: "\u25C0"
          }
        ),
        /* @__PURE__ */ u3(
          "button",
          {
            onTouchStart: () => handleTouchDir("right", true),
            onTouchEnd: () => handleTouchDir("right", false),
            onMouseDown: () => handleTouchDir("right", true),
            onMouseUp: () => handleTouchDir("right", false),
            className: "w-14 h-14 rounded-2xl bg-white/15 active:bg-white/30 border-2 border-white/20 flex items-center justify-center text-xl font-bold shadow-md",
            children: "\u25B6"
          }
        )
      ] }),
      /* @__PURE__ */ u3("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ u3(
          "button",
          {
            onTouchStart: () => handleTouchDir("dash", true),
            onTouchEnd: () => handleTouchDir("dash", false),
            onMouseDown: () => handleTouchDir("dash", true),
            onMouseUp: () => handleTouchDir("dash", false),
            className: "w-14 h-14 rounded-2xl bg-[#4CC9F0]/30 active:bg-[#4CC9F0]/50 border-2 border-[#4CC9F0] flex items-center justify-center text-xs font-pixel text-[#4CC9F0] shadow-md",
            children: "DASH"
          }
        ),
        /* @__PURE__ */ u3(
          "button",
          {
            onTouchStart: () => handleTouchDir("jump", true),
            onTouchEnd: () => handleTouchDir("jump", false),
            onMouseDown: () => handleTouchDir("jump", true),
            onMouseUp: () => handleTouchDir("jump", false),
            className: "w-16 h-14 rounded-2xl bg-[#FF758F]/40 active:bg-[#FF758F]/60 border-2 border-[#FF758F] flex items-center justify-center text-xs font-pixel text-white shadow-lg",
            children: "JUMP"
          }
        )
      ] })
    ] })
  ] });
};

// src/components/ProfileModal.tsx
var ProfileModal = ({ customization, onClose }) => {
  const [stats, setStats] = d2({
    racesPlayed: 14,
    racesWon: 8,
    totalGems: 480,
    totalDistanceM: 184800,
    favoritePowerup: "Gem Magnet \u{1F9F2}"
  });
  const [dailyClaimed, setDailyClaimed] = d2(false);
  const [dailyReward, setDailyReward] = d2(null);
  y2(() => {
    try {
      const saved = localStorage.getItem("bear_dash_stats");
      if (saved) setStats(JSON.parse(saved));
      const claimedToday = localStorage.getItem("bear_dash_daily_" + (/* @__PURE__ */ new Date()).toDateString());
      if (claimedToday) setDailyClaimed(true);
    } catch (e3) {
    }
  }, []);
  const claimDailyReward = () => {
    if (dailyClaimed) return;
    const rewards = [100, 150, 250, 300, 500];
    const picked = rewards[Math.floor(Math.random() * rewards.length)];
    setDailyReward(picked);
    setDailyClaimed(true);
    soundEngine.playVictory();
    const newStats = { ...stats, totalGems: stats.totalGems + picked };
    setStats(newStats);
    try {
      localStorage.setItem("bear_dash_stats", JSON.stringify(newStats));
      localStorage.setItem("bear_dash_daily_" + (/* @__PURE__ */ new Date()).toDateString(), "true");
    } catch (e3) {
    }
  };
  const winRate = (stats.racesWon / Math.max(1, stats.racesPlayed) * 100).toFixed(0);
  return /* @__PURE__ */ u3("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4", children: /* @__PURE__ */ u3("div", { className: "pixel-box max-w-lg w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ u3("div", { className: "flex items-center justify-between pb-3 border-b border-white/10", children: [
      /* @__PURE__ */ u3("div", { className: "flex items-center gap-2 font-pixel text-xs text-[#FFD166]", children: [
        /* @__PURE__ */ u3("span", { children: "\u{1F43E}" }),
        " RACER PROFILE"
      ] }),
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: onClose,
          className: "text-gray-400 hover:text-white font-bold text-lg leading-none",
          children: "\u2715"
        }
      )
    ] }),
    /* @__PURE__ */ u3("div", { className: "flex items-center gap-4 bg-[#1E132B] p-4 rounded-xl border border-white/10", children: [
      /* @__PURE__ */ u3("div", { className: "w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF7B54] to-[#FFD166] flex items-center justify-center text-3xl shadow-md border-2 border-white/20", children: "\u{1F43B}" }),
      /* @__PURE__ */ u3("div", { children: [
        /* @__PURE__ */ u3("h3", { className: "font-pixel text-sm text-white", children: customization.name }),
        /* @__PURE__ */ u3("div", { className: "text-xs text-gray-400 font-fun mt-1 flex items-center gap-2", children: [
          /* @__PURE__ */ u3("span", { className: "bg-[#70E000]/20 text-[#70E000] px-2 py-0.5 rounded font-bold", children: "Level 6 Racer" }),
          /* @__PURE__ */ u3("span", { children: "\u2022" }),
          /* @__PURE__ */ u3("span", { className: "text-[#FF758F] font-bold", children: "Master Cub" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3 text-center", children: [
      /* @__PURE__ */ u3("div", { className: "bg-[#1C1227] p-3 rounded-xl border border-white/5", children: [
        /* @__PURE__ */ u3("div", { className: "text-[10px] font-pixel text-gray-400", children: "RACES" }),
        /* @__PURE__ */ u3("div", { className: "font-mono text-lg font-bold text-white mt-1", children: stats.racesPlayed })
      ] }),
      /* @__PURE__ */ u3("div", { className: "bg-[#1C1227] p-3 rounded-xl border border-white/5", children: [
        /* @__PURE__ */ u3("div", { className: "text-[10px] font-pixel text-gray-400", children: "VICTORIES \u{1F3C6}" }),
        /* @__PURE__ */ u3("div", { className: "font-mono text-lg font-bold text-[#FFD166] mt-1", children: stats.racesWon })
      ] }),
      /* @__PURE__ */ u3("div", { className: "bg-[#1C1227] p-3 rounded-xl border border-white/5", children: [
        /* @__PURE__ */ u3("div", { className: "text-[10px] font-pixel text-gray-400", children: "WIN RATE" }),
        /* @__PURE__ */ u3("div", { className: "font-mono text-lg font-bold text-[#70E000] mt-1", children: [
          winRate,
          "%"
        ] })
      ] }),
      /* @__PURE__ */ u3("div", { className: "bg-[#1C1227] p-3 rounded-xl border border-white/5", children: [
        /* @__PURE__ */ u3("div", { className: "text-[10px] font-pixel text-gray-400", children: "TOTAL GEMS \u{1F48E}" }),
        /* @__PURE__ */ u3("div", { className: "font-mono text-lg font-bold text-[#4CC9F0] mt-1", children: stats.totalGems })
      ] }),
      /* @__PURE__ */ u3("div", { className: "bg-[#1C1227] p-3 rounded-xl border border-white/5 col-span-2", children: [
        /* @__PURE__ */ u3("div", { className: "text-[10px] font-pixel text-gray-400", children: "FAVORITE BOOSTER" }),
        /* @__PURE__ */ u3("div", { className: "text-xs font-bold text-[#FF758F] mt-1 truncate", children: stats.favoritePowerup })
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { className: "pixel-box-gold p-4 space-y-3", children: [
      /* @__PURE__ */ u3("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ u3("div", { className: "font-pixel text-[11px] text-[#FFD166] flex items-center gap-2", children: [
          /* @__PURE__ */ u3("span", { children: "\u{1F381}" }),
          " DAILY HONEY REWARD"
        ] }),
        dailyClaimed && /* @__PURE__ */ u3("span", { className: "text-[10px] font-pixel bg-[#70E000] text-black px-2 py-0.5 rounded", children: "CLAIMED TODAY" })
      ] }),
      /* @__PURE__ */ u3("p", { className: "text-xs text-gray-300 font-fun", children: "Log in every 24 hours to collect bonus gems and unlock rare accessories!" }),
      dailyReward && /* @__PURE__ */ u3("div", { className: "p-2 bg-[#70E000]/20 border border-[#70E000] rounded-lg text-center text-xs font-bold text-[#70E000] animate-bounce-slow", children: [
        "\u{1F389} Claimed +",
        dailyReward,
        " Gems!"
      ] }),
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: claimDailyReward,
          disabled: dailyClaimed,
          className: `w-full py-2.5 rounded-xl font-pixel text-xs transition-all ${dailyClaimed ? "bg-gray-700 text-gray-400 cursor-not-allowed" : "btn-pixel btn-pixel-gold"}`,
          children: dailyClaimed ? "Check back tomorrow!" : "Claim Daily Reward \u{1F381}"
        }
      )
    ] }),
    /* @__PURE__ */ u3(
      "button",
      {
        onClick: onClose,
        className: "w-full py-3 rounded-xl bg-gray-700 hover:bg-gray-600 font-pixel text-xs",
        children: "Close"
      }
    )
  ] }) });
};

// src/components/AchievementsModal.tsx
var AchievementsModal = ({ onClose }) => {
  const [unlocked, setUnlocked] = d2(["first_race", "daredevil"]);
  const [claimed, setClaimed] = d2([]);
  const handleClaim = (id) => {
    setClaimed([...claimed, id]);
    soundEngine.playGemCollect();
  };
  return /* @__PURE__ */ u3("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4", children: /* @__PURE__ */ u3("div", { className: "pixel-box max-w-lg w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ u3("div", { className: "flex items-center justify-between pb-3 border-b border-white/10", children: [
      /* @__PURE__ */ u3("div", { className: "flex items-center gap-2 font-pixel text-xs text-[#FFD166]", children: [
        /* @__PURE__ */ u3("span", { children: "\u{1F3C6}" }),
        " TROPHIES & ACHIEVEMENTS"
      ] }),
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: onClose,
          className: "text-gray-400 hover:text-white font-bold text-lg leading-none",
          children: "\u2715"
        }
      )
    ] }),
    /* @__PURE__ */ u3("div", { className: "space-y-3", children: ACHIEVEMENTS_LIST.map((ach) => {
      const isUnlocked = unlocked.includes(ach.id);
      const isClaimed = claimed.includes(ach.id);
      return /* @__PURE__ */ u3(
        "div",
        {
          className: `p-3.5 rounded-xl border-2 flex items-center justify-between gap-3 transition-colors ${isUnlocked ? "bg-[#291A39] border-[#FFD166]/60 shadow-md" : "bg-[#181122] border-white/5 opacity-60"}`,
          children: [
            /* @__PURE__ */ u3("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ u3("div", { className: "w-10 h-10 rounded-xl bg-black/40 flex items-center justify-center text-2xl flex-shrink-0", children: ach.icon }),
              /* @__PURE__ */ u3("div", { children: [
                /* @__PURE__ */ u3(
                  "h4",
                  {
                    className: `text-xs font-pixel ${isUnlocked ? "text-[#FFD166]" : "text-gray-400"}`,
                    children: ach.name
                  }
                ),
                /* @__PURE__ */ u3("p", { className: "text-[11px] text-gray-300 font-fun mt-0.5", children: ach.description })
              ] })
            ] }),
            /* @__PURE__ */ u3("div", { className: "flex-shrink-0 text-right", children: isUnlocked ? isClaimed ? /* @__PURE__ */ u3("span", { className: "text-[10px] font-pixel text-gray-400", children: "Claimed \u2714" }) : /* @__PURE__ */ u3(
              "button",
              {
                onClick: () => handleClaim(ach.id),
                className: "btn-pixel btn-pixel-gold px-2.5 py-1 rounded-lg text-[10px] font-pixel",
                children: [
                  "+",
                  ach.reward,
                  " \u{1F48E}"
                ]
              }
            ) : /* @__PURE__ */ u3("span", { className: "text-[10px] font-pixel text-gray-500", children: "Locked \u{1F512}" }) })
          ]
        },
        ach.id
      );
    }) }),
    /* @__PURE__ */ u3(
      "button",
      {
        onClick: onClose,
        className: "w-full py-3 rounded-xl bg-gray-700 hover:bg-gray-600 font-pixel text-xs",
        children: "Close"
      }
    )
  ] }) });
};

// src/components/SettingsModal.tsx
var SettingsModal = ({
  onClose,
  screenShakeEnabled,
  setScreenShakeEnabled,
  scanlinesEnabled,
  setScanlinesEnabled,
  colorblindMode,
  setColorblindMode
}) => {
  const [audio, setAudio] = d2(soundEngine.getSettings());
  const handleAudioChange = (field, val) => {
    const updated = { ...audio, [field]: val };
    setAudio(updated);
    soundEngine.updateSettings({ [field]: val });
  };
  return /* @__PURE__ */ u3("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4", children: /* @__PURE__ */ u3("div", { className: "pixel-box max-w-lg w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ u3("div", { className: "flex items-center justify-between pb-3 border-b border-white/10", children: [
      /* @__PURE__ */ u3("div", { className: "flex items-center gap-2 font-pixel text-xs text-[#FFD166]", children: [
        /* @__PURE__ */ u3("span", { children: "\u2699\uFE0F" }),
        " GAME SETTINGS"
      ] }),
      /* @__PURE__ */ u3(
        "button",
        {
          onClick: onClose,
          className: "text-gray-400 hover:text-white font-bold text-lg leading-none",
          children: "\u2715"
        }
      )
    ] }),
    /* @__PURE__ */ u3("div", { className: "space-y-4 bg-[#1E132B] p-4 rounded-xl border border-white/5", children: [
      /* @__PURE__ */ u3("h4", { className: "font-pixel text-[11px] text-[#FF758F] flex items-center gap-2", children: [
        /* @__PURE__ */ u3("span", { children: "\u{1F50A}" }),
        " SOUND & MUSIC"
      ] }),
      /* @__PURE__ */ u3("div", { children: [
        /* @__PURE__ */ u3("div", { className: "flex justify-between text-xs font-fun text-gray-300 mb-1", children: [
          /* @__PURE__ */ u3("span", { children: "Master Volume" }),
          /* @__PURE__ */ u3("span", { className: "font-mono", children: [
            Math.round(audio.masterVolume * 100),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ u3(
          "input",
          {
            type: "range",
            min: "0",
            max: "1",
            step: "0.05",
            value: audio.masterVolume,
            onChange: (e3) => handleAudioChange("masterVolume", parseFloat(e3.target.value)),
            className: "w-full accent-[#FF758F]"
          }
        )
      ] }),
      /* @__PURE__ */ u3("div", { children: [
        /* @__PURE__ */ u3("div", { className: "flex justify-between text-xs font-fun text-gray-300 mb-1", children: [
          /* @__PURE__ */ u3("span", { children: "Music (BGM) Volume" }),
          /* @__PURE__ */ u3("span", { className: "font-mono", children: [
            Math.round(audio.bgmVolume * 100),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ u3(
          "input",
          {
            type: "range",
            min: "0",
            max: "1",
            step: "0.05",
            value: audio.bgmVolume,
            onChange: (e3) => handleAudioChange("bgmVolume", parseFloat(e3.target.value)),
            className: "w-full accent-[#FFD166]"
          }
        )
      ] }),
      /* @__PURE__ */ u3("div", { children: [
        /* @__PURE__ */ u3("div", { className: "flex justify-between text-xs font-fun text-gray-300 mb-1", children: [
          /* @__PURE__ */ u3("span", { children: "Sound Effects (SFX)" }),
          /* @__PURE__ */ u3("span", { className: "font-mono", children: [
            Math.round(audio.sfxVolume * 100),
            "%"
          ] })
        ] }),
        /* @__PURE__ */ u3(
          "input",
          {
            type: "range",
            min: "0",
            max: "1",
            step: "0.05",
            value: audio.sfxVolume,
            onChange: (e3) => handleAudioChange("sfxVolume", parseFloat(e3.target.value)),
            className: "w-full accent-[#4CC9F0]"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { className: "space-y-3 bg-[#1E132B] p-4 rounded-xl border border-white/5", children: [
      /* @__PURE__ */ u3("h4", { className: "font-pixel text-[11px] text-[#4CC9F0] flex items-center gap-2", children: [
        /* @__PURE__ */ u3("span", { children: "\u{1F5A5}\uFE0F" }),
        " GRAPHICS & CAMERA"
      ] }),
      /* @__PURE__ */ u3("label", { className: "flex items-center justify-between cursor-pointer py-1", children: [
        /* @__PURE__ */ u3("span", { className: "text-xs text-gray-300 font-fun", children: "Screen Shake on Impact" }),
        /* @__PURE__ */ u3(
          "input",
          {
            type: "checkbox",
            checked: screenShakeEnabled,
            onChange: (e3) => setScreenShakeEnabled(e3.target.checked),
            className: "w-4 h-4 accent-[#FF758F] rounded"
          }
        )
      ] }),
      /* @__PURE__ */ u3("label", { className: "flex items-center justify-between cursor-pointer py-1", children: [
        /* @__PURE__ */ u3("span", { className: "text-xs text-gray-300 font-fun", children: "Retro CRT Scanlines Overlay" }),
        /* @__PURE__ */ u3(
          "input",
          {
            type: "checkbox",
            checked: scanlinesEnabled,
            onChange: (e3) => setScanlinesEnabled(e3.target.checked),
            className: "w-4 h-4 accent-[#FFD166] rounded"
          }
        )
      ] }),
      /* @__PURE__ */ u3("div", { className: "pt-2", children: [
        /* @__PURE__ */ u3("span", { className: "text-xs text-gray-300 font-fun block mb-1", children: "Colorblind Accessibility" }),
        /* @__PURE__ */ u3(
          "select",
          {
            value: colorblindMode,
            onChange: (e3) => setColorblindMode(e3.target.value),
            className: "w-full bg-black/40 border border-white/20 rounded-lg px-2.5 py-1.5 text-xs text-white",
            children: [
              /* @__PURE__ */ u3("option", { value: "none", children: "Default (Rich Vibrant Palette)" }),
              /* @__PURE__ */ u3("option", { value: "protanopia", children: "Protanopia (Red-Green Friendly)" }),
              /* @__PURE__ */ u3("option", { value: "deuteranopia", children: "Deuteranopia" }),
              /* @__PURE__ */ u3("option", { value: "tritanopia", children: "Tritanopia (Blue-Yellow Friendly)" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ u3("div", { className: "bg-[#1E132B] p-4 rounded-xl border border-white/5 space-y-2", children: [
      /* @__PURE__ */ u3("h4", { className: "font-pixel text-[11px] text-[#70E000] flex items-center gap-2", children: [
        /* @__PURE__ */ u3("span", { children: "\u{1F3AE}" }),
        " CONTROLS"
      ] }),
      /* @__PURE__ */ u3("div", { className: "grid grid-cols-2 gap-2 text-xs text-gray-300 font-fun", children: [
        /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3("span", { className: "font-mono bg-black/40 px-1.5 py-0.5 rounded text-[#FFD166]", children: "A / D" }),
          " ",
          "or ",
          /* @__PURE__ */ u3("span", { className: "font-mono bg-black/40 px-1.5 py-0.5 rounded text-[#FFD166]", children: "\u2190 \u2192" }),
          " Run"
        ] }),
        /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3("span", { className: "font-mono bg-black/40 px-1.5 py-0.5 rounded text-[#FF758F]", children: "Space" }),
          " ",
          "or ",
          /* @__PURE__ */ u3("span", { className: "font-mono bg-black/40 px-1.5 py-0.5 rounded text-[#FF758F]", children: "W / \u2191" }),
          " Jump"
        ] }),
        /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3("span", { className: "font-mono bg-black/40 px-1.5 py-0.5 rounded text-[#4CC9F0]", children: "Shift" }),
          " ",
          "Quick Dash"
        ] }),
        /* @__PURE__ */ u3("div", { children: [
          /* @__PURE__ */ u3("span", { className: "font-mono bg-black/40 px-1.5 py-0.5 rounded text-[#70E000]", children: "Esc" }),
          " ",
          "Pause Menu"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ u3(
      "button",
      {
        onClick: onClose,
        className: "w-full py-3 rounded-xl bg-gray-700 hover:bg-gray-600 font-pixel text-xs",
        children: "Close"
      }
    )
  ] }) });
};

// src/components/Footer.tsx
var Footer = () => {
  const [openFaq, setOpenFaq] = d2(null);
  const faqs = [
    {
      q: "How does the survival rule work?",
      a: "Each baby bear starts with 3 lives (\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F). Touching hazardous obstacles (spinning blades, rolling logs, fireballs, spikes) costs 1 life. At 1 life remaining, your heartbeat accelerates and screen edges glow red. If you lose all 3 lives, you are eliminated and turn into a floating spectator ghost!"
    },
    {
      q: "What is required to win a race?",
      a: "To be crowned champion, you must physically reach the finish line with at least one life remaining! The fastest surviving baby bear takes 1st place on the victory podium."
    },
    {
      q: "Can I play with friends in private rooms?",
      a: "Yes! Create a private room from the Play menu to get a custom invite code (e.g. BEAR-7788). Friends can enter this code in the hero banner to join your lobby instantly."
    },
    {
      q: "How do power-ups work?",
      a: "Break open glowing golden mystery boxes on platforms to receive random boosters like Gem Magnets, 2x Speed, Hoverboards, Invincibility, Super Jumps, Slow-Motion, and Golden Bear Mode."
    },
    {
      q: "Does it work on mobile phones and tablets?",
      a: "Yes, full touch controls with responsive D-pad buttons, Jump, and Dash are provided for smartphones and tablets in both landscape and portrait orientations."
    }
  ];
  return /* @__PURE__ */ u3("footer", { className: "bg-[#150D1C] text-gray-400 border-t-4 border-[#FF758F]/30 pt-16 pb-12 px-4 font-fun", children: /* @__PURE__ */ u3("div", { className: "max-w-6xl mx-auto space-y-12", children: [
    /* @__PURE__ */ u3("div", { className: "max-w-3xl mx-auto space-y-6", children: [
      /* @__PURE__ */ u3("div", { className: "text-center space-y-2", children: [
        /* @__PURE__ */ u3("div", { className: "font-pixel text-xs text-[#FFD166]", children: "GOT QUESTIONS?" }),
        /* @__PURE__ */ u3("h3", { className: "text-2xl sm:text-3xl font-extrabold text-white", children: "Frequently Asked Questions" })
      ] }),
      /* @__PURE__ */ u3("div", { className: "space-y-3", children: faqs.map((faq, idx) => {
        const isOpen = openFaq === idx;
        return /* @__PURE__ */ u3(
          "div",
          {
            className: "bg-[#21152D] rounded-xl border border-white/5 overflow-hidden transition-all",
            children: [
              /* @__PURE__ */ u3(
                "button",
                {
                  onClick: () => setOpenFaq(isOpen ? null : idx),
                  className: "w-full px-5 py-4 text-left flex justify-between items-center text-sm font-bold text-gray-200 hover:text-white",
                  children: [
                    /* @__PURE__ */ u3("span", { children: faq.q }),
                    /* @__PURE__ */ u3("span", { className: "text-xs text-[#FF758F] font-pixel ml-2", children: isOpen ? "\u25B2" : "\u25BC" })
                  ]
                }
              ),
              isOpen && /* @__PURE__ */ u3("div", { className: "px-5 pb-4 text-xs sm:text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-3", children: faq.a })
            ]
          },
          idx
        );
      }) })
    ] }),
    /* @__PURE__ */ u3("div", { className: "pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400", children: [
      /* @__PURE__ */ u3("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ u3("span", { className: "text-xl", children: "\u{1F43B}" }),
        /* @__PURE__ */ u3("span", { className: "font-pixel text-[11px] text-[#FFD166]", children: "Bear Dash: Pixel Adventure" })
      ] }),
      /* @__PURE__ */ u3("div", { className: "text-center sm:text-right", children: "Crafted with \u2764\uFE0F for Pixel Game Enthusiasts worldwide." })
    ] })
  ] }) });
};

// src/network/NetworkClient.ts
var NetworkClient = class {
  constructor() {
    __publicField(this, "ws", null);
    __publicField(this, "isConnected", false);
    __publicField(this, "pingMs", 24);
    __publicField(this, "pingStartTime", 0);
    __publicField(this, "pingInterval", null);
    __publicField(this, "currentRoom", null);
    __publicField(this, "onRoomUpdate");
    __publicField(this, "onGameStart");
    __publicField(this, "onRemotePlayerUpdate");
    __publicField(this, "onEmoteReceived");
    this.connect();
  }
  connect() {
    const protocol = window.location.protocol === "https:" ? "wss:" : "ws:";
    const host = window.location.host || "localhost:3000";
    const wsUrl = `${protocol}//${host}/ws`;
    try {
      this.ws = new WebSocket(wsUrl);
      this.ws.onopen = () => {
        this.isConnected = true;
        this.startPingLoop();
      };
      this.ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          this.handleMessage(msg);
        } catch (e3) {
        }
      };
      this.ws.onclose = () => {
        this.isConnected = false;
        if (this.pingInterval) clearInterval(this.pingInterval);
        setTimeout(() => this.connect(), 3e3);
      };
      this.ws.onerror = () => {
        this.isConnected = false;
      };
    } catch (e3) {
      console.warn("Multiplayer server connection fallback to local mode:", e3);
    }
  }
  startPingLoop() {
    if (this.pingInterval) clearInterval(this.pingInterval);
    this.pingInterval = window.setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.pingStartTime = Date.now();
        this.send({ type: "ping" });
      }
    }, 4e3);
  }
  handleMessage(msg) {
    switch (msg.type) {
      case "pong":
        this.pingMs = Math.max(12, Date.now() - this.pingStartTime);
        break;
      case "room_update":
        this.currentRoom = msg.room;
        if (this.onRoomUpdate) this.onRoomUpdate(this.currentRoom);
        break;
      case "game_start":
        if (this.onGameStart) this.onGameStart();
        break;
      case "player_update":
        if (this.onRemotePlayerUpdate) {
          this.onRemotePlayerUpdate(
            msg
          );
        }
        break;
      case "emote":
        if (this.onEmoteReceived) {
          this.onEmoteReceived(msg);
        }
        break;
      default:
        break;
    }
  }
  createRoom(customization) {
    const code = `BEAR-${Math.floor(1e3 + Math.random() * 9e3)}`;
    this.currentRoom = {
      roomId: code,
      isHost: true,
      playerCount: 1,
      maxPlayers: 8,
      players: [{ id: "local_player", name: customization.name, isReady: true, customization }],
      status: "lobby"
    };
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.send({ type: "create_room", roomId: code, customization });
    }
    if (this.onRoomUpdate) this.onRoomUpdate(this.currentRoom);
    return code;
  }
  joinRoom(roomId, customization) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.send({ type: "join_room", roomId: roomId.toUpperCase(), customization });
    } else {
      this.currentRoom = {
        roomId: roomId.toUpperCase(),
        isHost: false,
        playerCount: 2,
        maxPlayers: 8,
        players: [{ id: "local_player", name: customization.name, isReady: true, customization }],
        status: "lobby"
      };
      if (this.onRoomUpdate) this.onRoomUpdate(this.currentRoom);
    }
  }
  startRace() {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.send({ type: "start_race" });
    } else {
      if (this.onGameStart) this.onGameStart();
    }
  }
  broadcastPlayerState(player) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.send({
        type: "player_update",
        id: player.id,
        x: Math.floor(player.x),
        y: Math.floor(player.y),
        vx: Number(player.vx.toFixed(2)),
        vy: Number(player.vy.toFixed(2)),
        lives: player.lives,
        animState: player.animState,
        facingRight: player.facingRight
      });
    }
  }
  sendEmote(emote) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.send({ type: "emote", emote });
    }
  }
  send(data) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify(data));
    }
  }
};
var networkClient = new NetworkClient();

// src/App.tsx
var App = () => {
  const [currentTab, setCurrentTab] = d2("landing");
  const [customization, setCustomization] = d2(() => {
    try {
      const saved = localStorage.getItem("bear_dash_racer");
      if (saved) return JSON.parse(saved);
    } catch (e3) {
    }
    return {
      name: "Baby Bear \u{1F43B}",
      fur: "brown",
      hat: "crown",
      scarf: "red",
      backpack: "honeypot"
    };
  });
  const [roomCode, setRoomCode] = d2("BEAR-7788");
  const [isHost, setIsHost] = d2(true);
  const [botCount, setBotCount] = d2(3);
  const [isMuted, setIsMuted] = d2(false);
  const [screenShakeEnabled, setScreenShakeEnabled] = d2(true);
  const [scanlinesEnabled, setScanlinesEnabled] = d2(false);
  const [colorblindMode, setColorblindMode] = d2("none");
  const [showProfile, setShowProfile] = d2(false);
  const [showAchievements, setShowAchievements] = d2(false);
  const [showSettings, setShowSettings] = d2(false);
  y2(() => {
    const handleFirstTouch = () => {
      soundEngine.init();
      window.removeEventListener("pointerdown", handleFirstTouch);
    };
    window.addEventListener("pointerdown", handleFirstTouch);
    return () => window.removeEventListener("pointerdown", handleFirstTouch);
  }, []);
  const handlePlaySinglePlayer = () => {
    setBotCount(3);
    setCurrentTab("game");
  };
  const handlePlayMultiplayer = () => {
    const code = networkClient.createRoom(customization);
    setRoomCode(code);
    setIsHost(true);
    setCurrentTab("lobby");
  };
  const handleJoinRoomCode = (code) => {
    networkClient.joinRoom(code, customization);
    setRoomCode(code);
    setIsHost(false);
    setCurrentTab("lobby");
  };
  return /* @__PURE__ */ u3(
    "div",
    {
      className: `min-h-screen flex flex-col bg-[#1A1224] text-white ${colorblindMode !== "none" ? `cb-${colorblindMode}` : ""}`,
      children: [
        /* @__PURE__ */ u3(
          Header,
          {
            currentTab,
            setCurrentTab,
            customization,
            onOpenProfile: () => setShowProfile(true),
            onOpenAchievements: () => setShowAchievements(true),
            onOpenSettings: () => setShowSettings(true),
            isMuted,
            setIsMuted
          }
        ),
        /* @__PURE__ */ u3("main", { className: "flex-1", children: [
          currentTab === "landing" && /* @__PURE__ */ u3(k, { children: [
            /* @__PURE__ */ u3(
              LandingHero,
              {
                customization,
                onPlaySinglePlayer: handlePlaySinglePlayer,
                onPlayMultiplayer: handlePlayMultiplayer,
                onJoinRoomCode: handleJoinRoomCode,
                onCustomize: () => setCurrentTab("wardrobe")
              }
            ),
            /* @__PURE__ */ u3(FeaturesSection, {}),
            /* @__PURE__ */ u3(PowerupsGuide, {}),
            /* @__PURE__ */ u3(LeaderboardView, {})
          ] }),
          currentTab === "wardrobe" && /* @__PURE__ */ u3(
            CharacterSelect,
            {
              customization,
              setCustomization,
              onSaveAndClose: () => setCurrentTab("landing")
            }
          ),
          currentTab === "lobby" && /* @__PURE__ */ u3(
            LobbyView,
            {
              roomCode,
              isHost,
              customization,
              botCount,
              setBotCount,
              onStartRace: () => setCurrentTab("game"),
              onLeaveLobby: () => setCurrentTab("landing"),
              onCustomize: () => setCurrentTab("wardrobe")
            }
          ),
          currentTab === "game" && /* @__PURE__ */ u3(
            GameCanvas,
            {
              customization,
              botCount,
              onExitToLobby: () => setCurrentTab("lobby"),
              onOpenSettings: () => setShowSettings(true),
              scanlinesEnabled
            }
          )
        ] }),
        (currentTab === "landing" || currentTab === "wardrobe") && /* @__PURE__ */ u3(Footer, {}),
        showProfile && /* @__PURE__ */ u3(
          ProfileModal,
          {
            customization,
            onClose: () => setShowProfile(false)
          }
        ),
        showAchievements && /* @__PURE__ */ u3(AchievementsModal, { onClose: () => setShowAchievements(false) }),
        showSettings && /* @__PURE__ */ u3(
          SettingsModal,
          {
            onClose: () => setShowSettings(false),
            screenShakeEnabled,
            setScreenShakeEnabled,
            scanlinesEnabled,
            setScanlinesEnabled,
            colorblindMode,
            setColorblindMode
          }
        )
      ]
    }
  );
};

// src/index.tsx
var container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(/* @__PURE__ */ u3(App, {}));
}
//# sourceMappingURL=bundle.js.map
