function b(a) {
  throw a;
}
var aa = void 0, g = !0, j = null, l = !1;
function ba() {
  return function(a) {
    return a
  }
}
function m(a) {
  return function() {
    return this[a]
  }
}
function ca(a) {
  return function() {
    return a
  }
}
var n, o = this;
function da(a) {
  for(var a = a.split("."), c = o, d;d = a.shift();) {
    if(c[d] != j) {
      c = c[d]
    }else {
      return j
    }
  }
  return c
}
function ea() {
}
function p(a) {
  var c = typeof a;
  if("object" == c) {
    if(a) {
      if(a instanceof Array) {
        return"array"
      }
      if(a instanceof Object) {
        return c
      }
      var d = Object.prototype.toString.call(a);
      if("[object Window]" == d) {
        return"object"
      }
      if("[object Array]" == d || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return"array"
      }
      if("[object Function]" == d || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return"function"
      }
    }else {
      return"null"
    }
  }else {
    if("function" == c && "undefined" == typeof a.call) {
      return"object"
    }
  }
  return c
}
function r(a) {
  return a !== aa
}
function s(a) {
  return"string" == typeof a
}
function fa(a) {
  return"number" == typeof a
}
function ga(a) {
  return"function" == p(a)
}
function ha(a) {
  return a[ia] || (a[ia] = ++ja)
}
var ia = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36), ja = 0;
function ka(a, c, d) {
  return a.call.apply(a.bind, arguments)
}
function la(a, c, d) {
  var e = c || o;
  if(2 < arguments.length) {
    var f = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, f);
      return a.apply(e, c)
    }
  }
  return function() {
    return a.apply(e, arguments)
  }
}
function ma(a, c, d) {
  ma = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ka : la;
  return ma.apply(j, arguments)
}
var na = Date.now || function() {
  return+new Date
};
function oa(a, c) {
  function d() {
  }
  d.prototype = c.prototype;
  a.h = c.prototype;
  a.prototype = new d
}
;function pa(a, c) {
  for(var d = 1;d < arguments.length;d++) {
    var e = ("" + arguments[d]).replace(/\$/g, "$$$$"), a = a.replace(/\%s/, e)
  }
  return a
}
function qa(a) {
  return!/[^\t\n\r ]/.test(a)
}
function ra(a) {
  return!/[^0-9]/.test(a)
}
function sa(a) {
  if(!ta.test(a)) {
    return a
  }
  -1 != a.indexOf("&") && (a = a.replace(ua, "&amp;"));
  -1 != a.indexOf("<") && (a = a.replace(va, "&lt;"));
  -1 != a.indexOf(">") && (a = a.replace(wa, "&gt;"));
  -1 != a.indexOf('"') && (a = a.replace(xa, "&quot;"));
  return a
}
var ua = /&/g, va = /</g, wa = />/g, xa = /\"/g, ta = /[&<>\"]/, ya = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\x0B", '"':'\\"', "\\":"\\\\"}, za = {"'":"\\'"};
function Aa(a) {
  var q;
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0), h = c, i = d + 1, k;
    if(!(k = ya[e])) {
      if(!(31 < f && 127 > f)) {
        if(e in za) {
          e = za[e]
        }else {
          if(e in ya) {
            q = za[e] = ya[e], e = q
          }else {
            f = e;
            k = e.charCodeAt(0);
            if(31 < k && 127 > k) {
              f = e
            }else {
              if(256 > k) {
                if(f = "\\x", 16 > k || 256 < k) {
                  f += "0"
                }
              }else {
                f = "\\u", 4096 > k && (f += "0")
              }
              f += k.toString(16).toUpperCase()
            }
            e = za[e] = f
          }
        }
      }
      k = e
    }
    h[i] = k
  }
  c.push('"');
  return c.join("")
}
function Ba(a, c) {
  return-1 != a.indexOf(c)
}
function Ca(a) {
  return("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
function Da(a, c) {
  for(var d = 0, e = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = ("" + c).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), h = Math.max(e.length, f.length), i = 0;0 == d && i < h;i++) {
    var k = e[i] || "", q = f[i] || "", t = RegExp("(\\d*)(\\D*)", "g"), G = RegExp("(\\d*)(\\D*)", "g");
    do {
      var C = t.exec(k) || ["", "", ""], P = G.exec(q) || ["", "", ""];
      if(0 == C[0].length && 0 == P[0].length) {
        break
      }
      d = ((0 == C[1].length ? 0 : parseInt(C[1], 10)) < (0 == P[1].length ? 0 : parseInt(P[1], 10)) ? -1 : (0 == C[1].length ? 0 : parseInt(C[1], 10)) > (0 == P[1].length ? 0 : parseInt(P[1], 10)) ? 1 : 0) || ((0 == C[2].length) < (0 == P[2].length) ? -1 : (0 == C[2].length) > (0 == P[2].length) ? 1 : 0) || (C[2] < P[2] ? -1 : C[2] > P[2] ? 1 : 0)
    }while(0 == d)
  }
  return d
}
function Ea(a) {
  for(var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= 4294967296
  }
  return c
}
var Fa = {};
function Ga(a) {
  return Fa[a] || (Fa[a] = ("" + a).replace(/([A-Z])/g, "-$1").toLowerCase())
}
;var Ha, Ia, Ja, Ka, La, Ma = (La = "ScriptEngine" in o && "JScript" == o.ScriptEngine()) ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
function Na(a, c) {
  this.i = La ? [] : "";
  a != j && this.append.apply(this, arguments)
}
La ? (Na.prototype.ia = 0, Na.prototype.append = function(a, c, d) {
  c == j ? this.i[this.ia++] = a : (this.i.push.apply(this.i, arguments), this.ia = this.i.length);
  return this
}) : Na.prototype.append = function(a, c, d) {
  this.i += a;
  if(c != j) {
    for(var e = 1;e < arguments.length;e++) {
      this.i += arguments[e]
    }
  }
  return this
};
Na.prototype.clear = function() {
  La ? this.ia = this.i.length = 0 : this.i = ""
};
Na.prototype.toString = function() {
  if(La) {
    var a = this.i.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.i
};
function Oa(a) {
  this.stack = Error().stack || "";
  if(a) {
    this.message = "" + a
  }
}
oa(Oa, Error);
Oa.prototype.name = "CustomError";
function Pa(a, c) {
  c.unshift(a);
  Oa.call(this, pa.apply(j, c));
  c.shift();
  this.vb = a
}
oa(Pa, Oa);
Pa.prototype.name = "AssertionError";
function Qa(a, c) {
  b(new Pa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)))
}
;function Ra() {
}
Ra.prototype.Ma = l;
Ra.prototype.ca = function() {
  if(!this.Ma) {
    this.Ma = g, this.o()
  }
};
Ra.prototype.o = function() {
};
var Sa = Array.prototype, Ta = Sa.indexOf ? function(a, c, d) {
  return Sa.indexOf.call(a, c, d)
} : function(a, c, d) {
  d = d == j ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if(s(a)) {
    return!s(c) || 1 != c.length ? -1 : a.indexOf(c, d)
  }
  for(;d < a.length;d++) {
    if(d in a && a[d] === c) {
      return d
    }
  }
  return-1
}, Ua = Sa.filter ? function(a, c, d) {
  return Sa.filter.call(a, c, d)
} : function(a, c, d) {
  for(var e = a.length, f = [], h = 0, i = s(a) ? a.split("") : a, k = 0;k < e;k++) {
    if(k in i) {
      var q = i[k];
      c.call(d, q, k, a) && (f[h++] = q)
    }
  }
  return f
};
function Va(a, c, d, e) {
  Sa.splice.apply(a, Wa(arguments, 1))
}
function Wa(a, c, d) {
  return 2 >= arguments.length ? Sa.slice.call(a, c) : Sa.slice.call(a, c, d)
}
function Xa(a, c) {
  Sa.sort.call(a, c || Ya)
}
function Za(a, c) {
  for(var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]}
  }
  var e = c || Ya;
  Xa(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index
  });
  for(d = 0;d < a.length;d++) {
    a[d] = a[d].value
  }
}
function Ya(a, c) {
  return a > c ? 1 : a < c ? -1 : 0
}
;function $a() {
  return o.navigator ? o.navigator.userAgent : j
}
Ka = Ja = Ia = Ha = l;
var ab;
if(ab = $a()) {
  var bb = o.navigator;
  Ha = 0 == ab.indexOf("Opera");
  Ia = !Ha && -1 != ab.indexOf("MSIE");
  Ja = !Ha && -1 != ab.indexOf("WebKit");
  Ka = !Ha && !Ja && "Gecko" == bb.product
}
var cb = Ia, db = Ka, eb = Ja, fb = o.navigator, gb = Ba(fb && fb.platform || "", "Mac"), hb;
a: {
  var ib = "", jb;
  if(Ha && o.opera) {
    var kb = o.opera.version, ib = "function" == typeof kb ? kb() : kb
  }else {
    if(db ? jb = /rv\:([^\);]+)(\)|;)/ : cb ? jb = /MSIE\s+([^\);]+)(\)|;)/ : eb && (jb = /WebKit\/(\S+)/), jb) {
      var lb = jb.exec($a()), ib = lb ? lb[1] : ""
    }
  }
  if(cb) {
    var mb, nb = o.document;
    mb = nb ? nb.documentMode : aa;
    if(mb > parseFloat(ib)) {
      hb = "" + mb;
      break a
    }
  }
  hb = ib
}
var ob = {};
function pb(a) {
  return ob[a] || (ob[a] = 0 <= Da(hb, a))
}
;var qb;
!cb || pb("9");
var rb = cb && !pb("8");
function sb(a, c) {
  this.type = a;
  this.currentTarget = this.target = c
}
oa(sb, Ra);
n = sb.prototype;
n.o = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
n.O = l;
n.$ = g;
n.stopPropagation = function() {
  this.O = g
};
n.preventDefault = function() {
  this.$ = l
};
var tb = new Function("a", "return a");
function ub(a, c) {
  a && this.ea(a, c)
}
oa(ub, sb);
n = ub.prototype;
n.target = j;
n.relatedTarget = j;
n.offsetX = 0;
n.offsetY = 0;
n.clientX = 0;
n.clientY = 0;
n.screenX = 0;
n.screenY = 0;
n.button = 0;
n.keyCode = 0;
n.charCode = 0;
n.ctrlKey = l;
n.altKey = l;
n.shiftKey = l;
n.metaKey = l;
n.nb = l;
n.Q = j;
n.ea = function(a, c) {
  var d = this.type = a.type;
  sb.call(this, d);
  this.target = a.target || a.srcElement;
  this.currentTarget = c;
  var e = a.relatedTarget;
  if(e) {
    if(db) {
      try {
        tb(e.nodeName)
      }catch(f) {
        e = j
      }
    }
  }else {
    if("mouseover" == d) {
      e = a.fromElement
    }else {
      if("mouseout" == d) {
        e = a.toElement
      }
    }
  }
  this.relatedTarget = e;
  this.offsetX = a.offsetX !== aa ? a.offsetX : a.layerX;
  this.offsetY = a.offsetY !== aa ? a.offsetY : a.layerY;
  this.clientX = a.clientX !== aa ? a.clientX : a.pageX;
  this.clientY = a.clientY !== aa ? a.clientY : a.pageY;
  this.screenX = a.screenX || 0;
  this.screenY = a.screenY || 0;
  this.button = a.button;
  this.keyCode = a.keyCode || 0;
  this.charCode = a.charCode || ("keypress" == d ? a.keyCode : 0);
  this.ctrlKey = a.ctrlKey;
  this.altKey = a.altKey;
  this.shiftKey = a.shiftKey;
  this.metaKey = a.metaKey;
  this.nb = gb ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.Q = a;
  delete this.$;
  delete this.O
};
n.stopPropagation = function() {
  ub.h.stopPropagation.call(this);
  this.Q.stopPropagation ? this.Q.stopPropagation() : this.Q.cancelBubble = g
};
n.preventDefault = function() {
  ub.h.preventDefault.call(this);
  var a = this.Q;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = l, rb) {
      try {
        if(a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) {
          a.keyCode = -1
        }
      }catch(c) {
      }
    }
  }
};
n.o = function() {
  ub.h.o.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.Q = j
};
function vb() {
}
var wb = 0;
n = vb.prototype;
n.key = 0;
n.S = l;
n.va = l;
n.ea = function(a, c, d, e, f, h) {
  ga(a) ? this.Za = g : a && a.handleEvent && ga(a.handleEvent) ? this.Za = l : b(Error("Invalid listener argument"));
  this.Z = a;
  this.bb = c;
  this.src = d;
  this.type = e;
  this.capture = !!f;
  this.na = h;
  this.va = l;
  this.key = ++wb;
  this.S = l
};
n.handleEvent = function(a) {
  return this.Za ? this.Z.call(this.na || this.src, a) : this.Z.handleEvent.call(this.Z, a)
};
function xb(a, c) {
  this.$a = c;
  this.M = [];
  a > this.$a && b(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var d = 0;d < a;d++) {
    this.M.push(this.C ? this.C() : {})
  }
}
oa(xb, Ra);
xb.prototype.C = j;
xb.prototype.La = j;
function yb(a) {
  return a.M.length ? a.M.pop() : a.C ? a.C() : {}
}
function zb(a, c) {
  a.M.length < a.$a ? a.M.push(c) : Ab(a, c)
}
function Ab(a, c) {
  if(a.La) {
    a.La(c)
  }else {
    var d = p(c);
    if("object" == d || "array" == d || "function" == d) {
      if(ga(c.ca)) {
        c.ca()
      }else {
        for(var e in c) {
          delete c[e]
        }
      }
    }
  }
}
xb.prototype.o = function() {
  xb.h.o.call(this);
  for(var a = this.M;a.length;) {
    Ab(this, a.pop())
  }
  delete this.M
};
var Bb, Cb, Db, Eb, Fb, Gb, Hb, Ib, Jb, Kb, Lb;
(function() {
  function a() {
    return{w:0, t:0}
  }
  function c() {
    return[]
  }
  function d() {
    function a(c) {
      return i.call(a.src, a.key, c)
    }
    return a
  }
  function e() {
    return new vb
  }
  function f() {
    return new ub
  }
  var h = La && !(0 <= Da(Ma, "5.7")), i;
  Gb = function(a) {
    i = a
  };
  if(h) {
    Bb = function() {
      return yb(k)
    };
    Cb = function(a) {
      zb(k, a)
    };
    Db = function() {
      return yb(q)
    };
    Eb = function(a) {
      zb(q, a)
    };
    Fb = function() {
      return yb(t)
    };
    Hb = function() {
      zb(t, d())
    };
    Ib = function() {
      return yb(G)
    };
    Jb = function(a) {
      zb(G, a)
    };
    Kb = function() {
      return yb(C)
    };
    Lb = function(a) {
      zb(C, a)
    };
    var k = new xb(0, 600);
    k.C = a;
    var q = new xb(0, 600);
    q.C = c;
    var t = new xb(0, 600);
    t.C = d;
    var G = new xb(0, 600);
    G.C = e;
    var C = new xb(0, 600);
    C.C = f
  }else {
    Bb = a, Cb = ea, Db = c, Eb = ea, Fb = d, Hb = ea, Ib = e, Jb = ea, Kb = f, Lb = ea
  }
})();
function Mb(a, c, d) {
  for(var e in a) {
    c.call(d, a[e], e, a)
  }
}
function Nb() {
  var a = Ob, c;
  for(c in a) {
    return l
  }
  return g
}
function Pb(a) {
  var c = {}, d;
  for(d in a) {
    c[d] = a[d]
  }
  return c
}
var Qb = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function Rb(a, c) {
  for(var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for(d in e) {
      a[d] = e[d]
    }
    for(var h = 0;h < Qb.length;h++) {
      d = Qb[h], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d])
    }
  }
}
;var Sb = {}, Tb = {}, Ub = {}, Vb = {};
function Wb(a, c, d, e, f) {
  if(c) {
    if("array" == p(c)) {
      for(var h = 0;h < c.length;h++) {
        Wb(a, c[h], d, e, f)
      }
      return j
    }
    var e = !!e, i = Tb;
    c in i || (i[c] = Bb());
    i = i[c];
    e in i || (i[e] = Bb(), i.w++);
    var i = i[e], k = ha(a), q;
    i.t++;
    if(i[k]) {
      q = i[k];
      for(h = 0;h < q.length;h++) {
        if(i = q[h], i.Z == d && i.na == f) {
          if(i.S) {
            break
          }
          return q[h].key
        }
      }
    }else {
      q = i[k] = Db(), i.w++
    }
    h = Fb();
    h.src = a;
    i = Ib();
    i.ea(d, h, a, c, e, f);
    d = i.key;
    h.key = d;
    q.push(i);
    Sb[d] = i;
    Ub[k] || (Ub[k] = Db());
    Ub[k].push(i);
    a.addEventListener ? (a == o || !a.Ka) && a.addEventListener(c, h, e) : a.attachEvent(c in Vb ? Vb[c] : Vb[c] = "on" + c, h);
    return d
  }
  b(Error("Invalid event type"))
}
function Xb(a, c, d, e, f) {
  if("array" == p(c)) {
    for(var h = 0;h < c.length;h++) {
      Xb(a, c[h], d, e, f)
    }
  }else {
    e = !!e;
    a: {
      h = Tb;
      if(c in h && (h = h[c], e in h && (h = h[e], a = ha(a), h[a]))) {
        a = h[a];
        break a
      }
      a = j
    }
    if(a) {
      for(h = 0;h < a.length;h++) {
        if(a[h].Z == d && a[h].capture == e && a[h].na == f) {
          Yb(a[h].key);
          break
        }
      }
    }
  }
}
function Yb(a) {
  if(Sb[a]) {
    var c = Sb[a];
    if(!c.S) {
      var d = c.src, e = c.type, f = c.bb, h = c.capture;
      d.removeEventListener ? (d == o || !d.Ka) && d.removeEventListener(e, f, h) : d.detachEvent && d.detachEvent(e in Vb ? Vb[e] : Vb[e] = "on" + e, f);
      d = ha(d);
      f = Tb[e][h][d];
      if(Ub[d]) {
        var i = Ub[d], k = Ta(i, c);
        0 <= k && Sa.splice.call(i, k, 1);
        0 == i.length && delete Ub[d]
      }
      c.S = g;
      f.ab = g;
      Zb(e, h, d, f);
      delete Sb[a]
    }
  }
}
function Zb(a, c, d, e) {
  if(!e.fa && e.ab) {
    for(var f = 0, h = 0;f < e.length;f++) {
      if(e[f].S) {
        var i = e[f].bb;
        i.src = j;
        Hb(i);
        Jb(e[f])
      }else {
        f != h && (e[h] = e[f]), h++
      }
    }
    e.length = h;
    e.ab = l;
    0 == h && (Eb(e), delete Tb[a][c][d], Tb[a][c].w--, 0 == Tb[a][c].w && (Cb(Tb[a][c]), delete Tb[a][c], Tb[a].w--), 0 == Tb[a].w && (Cb(Tb[a]), delete Tb[a]))
  }
}
function $b(a, c, d) {
  var e = 0, f = c == j, h = d == j, d = !!d;
  if(a == j) {
    Mb(Ub, function(a) {
      for(var i = a.length - 1;0 <= i;i--) {
        var k = a[i];
        if((f || c == k.type) && (h || d == k.capture)) {
          Yb(k.key), e++
        }
      }
    })
  }else {
    if(a = ha(a), Ub[a]) {
      for(var a = Ub[a], i = a.length - 1;0 <= i;i--) {
        var k = a[i];
        if((f || c == k.type) && (h || d == k.capture)) {
          Yb(k.key), e++
        }
      }
    }
  }
  return e
}
function ac(a, c, d, e, f) {
  var h = 1, c = ha(c);
  if(a[c]) {
    a.t--;
    a = a[c];
    a.fa ? a.fa++ : a.fa = 1;
    try {
      for(var i = a.length, k = 0;k < i;k++) {
        var q = a[k];
        q && !q.S && (h &= bc(q, f) !== l)
      }
    }finally {
      a.fa--, Zb(d, e, c, a)
    }
  }
  return Boolean(h)
}
function bc(a, c) {
  var d = a.handleEvent(c);
  a.va && Yb(a.key);
  return d
}
Gb(function(a, c) {
  if(!Sb[a]) {
    return g
  }
  var d = Sb[a], e = d.type, f = Tb;
  if(!(e in f)) {
    return g
  }
  var f = f[e], h, i;
  qb === aa && (qb = cb && !o.addEventListener);
  if(qb) {
    h = c || da("window.event");
    var k = g in f, q = l in f;
    if(k) {
      if(0 > h.keyCode || h.returnValue != aa) {
        return g
      }
      a: {
        var t = l;
        if(0 == h.keyCode) {
          try {
            h.keyCode = -1;
            break a
          }catch(G) {
            t = g
          }
        }
        if(t || h.returnValue == aa) {
          h.returnValue = g
        }
      }
    }
    t = Kb();
    t.ea(h, this);
    h = g;
    try {
      if(k) {
        for(var C = Db(), P = t.currentTarget;P;P = P.parentNode) {
          C.push(P)
        }
        i = f[g];
        i.t = i.w;
        for(var W = C.length - 1;!t.O && 0 <= W && i.t;W--) {
          t.currentTarget = C[W], h &= ac(i, C[W], e, g, t)
        }
        if(q) {
          i = f[l];
          i.t = i.w;
          for(W = 0;!t.O && W < C.length && i.t;W++) {
            t.currentTarget = C[W], h &= ac(i, C[W], e, l, t)
          }
        }
      }else {
        h = bc(d, t)
      }
    }finally {
      if(C) {
        C.length = 0, Eb(C)
      }
      t.ca();
      Lb(t)
    }
    return h
  }
  e = new ub(c, this);
  try {
    h = bc(d, e)
  }finally {
    e.ca()
  }
  return h
});
function cc() {
}
oa(cc, Ra);
n = cc.prototype;
n.Ka = g;
n.ra = j;
n.addEventListener = function(a, c, d, e) {
  Wb(this, a, c, d, e)
};
n.removeEventListener = function(a, c, d, e) {
  Xb(this, a, c, d, e)
};
n.dispatchEvent = function(a) {
  var c = a.type || a, d = Tb;
  if(c in d) {
    if(s(a)) {
      a = new sb(a, this)
    }else {
      if(a instanceof sb) {
        a.target = a.target || this
      }else {
        var e = a, a = new sb(c, this);
        Rb(a, e)
      }
    }
    var e = 1, f, d = d[c], c = g in d, h;
    if(c) {
      f = [];
      for(h = this;h;h = h.ra) {
        f.push(h)
      }
      h = d[g];
      h.t = h.w;
      for(var i = f.length - 1;!a.O && 0 <= i && h.t;i--) {
        a.currentTarget = f[i], e &= ac(h, f[i], a.type, g, a) && a.$ != l
      }
    }
    if(l in d) {
      if(h = d[l], h.t = h.w, c) {
        for(i = 0;!a.O && i < f.length && h.t;i++) {
          a.currentTarget = f[i], e &= ac(h, f[i], a.type, l, a) && a.$ != l
        }
      }else {
        for(f = this;!a.O && f && h.t;f = f.ra) {
          a.currentTarget = f, e &= ac(h, f, a.type, l, a) && a.$ != l
        }
      }
    }
    a = Boolean(e)
  }else {
    a = g
  }
  return a
};
n.o = function() {
  cc.h.o.call(this);
  $b(this);
  this.ra = j
};
var dc = o.window;
function ec(a, c, d, e) {
  ("array" != p(a) || "array" != p(c)) && b(Error("Start and end parameters must be arrays"));
  a.length != c.length && b(Error("Start and end points must be the same length"));
  this.aa = a;
  this.ib = c;
  this.duration = d;
  this.ua = e;
  this.coords = []
}
oa(ec, cc);
var Ob = {}, fc = j;
function gc() {
  dc.clearTimeout(fc);
  var a = na(), c;
  for(c in Ob) {
    hc(Ob[c], a)
  }
  fc = Nb() ? j : dc.setTimeout(gc, 20)
}
function ic(a) {
  a = ha(a);
  delete Ob[a];
  fc && Nb() && (dc.clearTimeout(fc), fc = j)
}
n = ec.prototype;
n.A = 0;
n.Va = 0;
n.g = 0;
n.startTime = j;
n.Sa = j;
n.oa = j;
n.play = function(a) {
  if(a || 0 == this.A) {
    this.g = 0, this.coords = this.aa
  }else {
    if(1 == this.A) {
      return l
    }
  }
  ic(this);
  this.startTime = na();
  -1 == this.A && (this.startTime -= this.duration * this.g);
  this.Sa = this.startTime + this.duration;
  this.oa = this.startTime;
  this.g || this.N();
  jc(this, "play");
  -1 == this.A && jc(this, "resume");
  this.A = 1;
  a = ha(this);
  a in Ob || (Ob[a] = this);
  fc || (fc = dc.setTimeout(gc, 20));
  hc(this, this.startTime);
  return g
};
n.stop = function(a) {
  ic(this);
  this.A = 0;
  if(a) {
    this.g = 1
  }
  kc(this, this.g);
  jc(this, "stop");
  this.R()
};
n.o = function() {
  0 != this.A && this.stop(l);
  jc(this, "destroy");
  ec.h.o.call(this)
};
function hc(a, c) {
  a.g = (c - a.startTime) / (a.Sa - a.startTime);
  if(1 <= a.g) {
    a.g = 1
  }
  a.Va = 1E3 / (c - a.oa);
  a.oa = c;
  ga(a.ua) ? kc(a, a.ua(a.g)) : kc(a, a.g);
  1 == a.g ? (a.A = 0, ic(a), jc(a, "finish"), a.R()) : 1 == a.A && a.qa()
}
function kc(a, c) {
  a.coords = Array(a.aa.length);
  for(var d = 0;d < a.aa.length;d++) {
    a.coords[d] = (a.ib[d] - a.aa[d]) * c + a.aa[d]
  }
}
n.qa = function() {
  jc(this, "animate")
};
n.N = function() {
  jc(this, "begin")
};
n.R = function() {
  jc(this, "end")
};
function jc(a, c) {
  a.dispatchEvent(new lc(c, a))
}
function lc(a, c) {
  sb.call(this, a);
  this.coords = c.coords;
  this.x = c.coords[0];
  this.y = c.coords[1];
  this.zb = c.coords[2];
  this.duration = c.duration;
  this.g = c.g;
  this.sb = c.Va;
  this.state = c.A;
  this.rb = c
}
oa(lc, sb);
!cb || pb("9");
var mc = !db && !cb || cb && pb("9") || db && pb("1.9.1");
cb && pb("9");
function nc(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function oc(a, c) {
  var d = nc(a), e = Wa(arguments, 1), f;
  f = d;
  for(var h = 0, i = 0;i < e.length;i++) {
    0 <= Ta(f, e[i]) || (f.push(e[i]), h++)
  }
  f = h == e.length;
  a.className = d.join(" ");
  return f
}
function pc(a, c) {
  var d = nc(a), e = Wa(arguments, 1), f;
  f = d;
  for(var h = 0, i = 0;i < f.length;i++) {
    0 <= Ta(e, f[i]) && (Va(f, i--, 1), h++)
  }
  f = h == e.length;
  a.className = d.join(" ");
  return f
}
function qc(a, c) {
  return 0 <= Ta(nc(a), c)
}
;function rc(a) {
  return s(a) ? document.getElementById(a) : a
}
function sc(a, c) {
  var d = c || document;
  return tc(d) ? d.querySelectorAll("." + a) : d.getElementsByClassName ? d.getElementsByClassName(a) : uc(a, c)
}
function vc(a, c) {
  var d = c || document, e = j;
  return(e = tc(d) ? d.querySelector("." + a) : sc(a, c)[0]) || j
}
function tc(a) {
  return a.querySelectorAll && a.querySelector && (!eb || "CSS1Compat" == document.compatMode || pb("528"))
}
function uc(a, c) {
  var d, e, f, h;
  d = c || document;
  if(tc(d) && a) {
    return d.querySelectorAll("" + (a ? "." + a : ""))
  }
  if(a && d.getElementsByClassName) {
    var i = d.getElementsByClassName(a);
    return i
  }
  i = d.getElementsByTagName("*");
  if(a) {
    h = {};
    for(e = f = 0;d = i[e];e++) {
      var k = d.className;
      "function" == typeof k.split && 0 <= Ta(k.split(/\s+/), a) && (h[f++] = d)
    }
    h.length = f;
    return h
  }
  return i
}
function wc(a) {
  return document.createTextNode(a)
}
function xc(a, c) {
  a.appendChild(c)
}
function yc(a, c, d) {
  a.insertBefore(c, a.childNodes[d] || j)
}
function zc(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : j
}
function Ac(a, c) {
  var d = c.parentNode;
  d && d.replaceChild(a, c)
}
function Bc(a) {
  return mc && a.children != aa ? a.children : Ua(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
}
function Cc(a, c) {
  if("textContent" in a) {
    a.textContent = c
  }else {
    if(a.firstChild && 3 == a.firstChild.nodeType) {
      for(;a.lastChild != a.firstChild;) {
        a.removeChild(a.lastChild)
      }
      a.firstChild.data = c
    }else {
      for(var d;d = a.firstChild;) {
        a.removeChild(d)
      }
      a.appendChild((9 == a.nodeType ? a : a.ownerDocument || a.document).createTextNode(c))
    }
  }
}
;function Dc(a) {
  return Ec(a || arguments.callee.caller, [])
}
function Ec(a, c) {
  var d = [];
  if(0 <= Ta(c, a)) {
    d.push("[...circular reference...]")
  }else {
    if(a && 50 > c.length) {
      d.push(Fc(a) + "(");
      for(var e = a.arguments, f = 0;f < e.length;f++) {
        0 < f && d.push(", ");
        var h;
        h = e[f];
        switch(typeof h) {
          case "object":
            h = h ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            h = "" + h;
            break;
          case "boolean":
            h = h ? "true" : "false";
            break;
          case "function":
            h = (h = Fc(h)) ? h : "[fn]";
            break;
          default:
            h = typeof h
        }
        40 < h.length && (h = h.substr(0, 40) + "...");
        d.push(h)
      }
      c.push(a);
      d.push(")\n");
      try {
        d.push(Ec(a.caller, c))
      }catch(i) {
        d.push("[exception trying to get caller]\n")
      }
    }else {
      a ? d.push("[...long stack...]") : d.push("[end]")
    }
  }
  return d.join("")
}
function Fc(a) {
  a = "" + a;
  if(!Gc[a]) {
    var c = /function ([^\(]+)/.exec(a);
    Gc[a] = c ? c[1] : "[Anonymous]"
  }
  return Gc[a]
}
var Gc = {};
function Hc(a, c, d, e, f) {
  this.reset(a, c, d, e, f)
}
Hc.prototype.pb = 0;
Hc.prototype.Ua = j;
Hc.prototype.Ta = j;
var Ic = 0;
Hc.prototype.reset = function(a, c, d, e, f) {
  this.pb = "number" == typeof f ? f : Ic++;
  this.yb = e || na();
  this.Y = a;
  this.lb = c;
  this.ub = d;
  delete this.Ua;
  delete this.Ta
};
Hc.prototype.cb = function(a) {
  this.Y = a
};
function Jc(a) {
  this.mb = a
}
Jc.prototype.ga = j;
Jc.prototype.Y = j;
Jc.prototype.ja = j;
Jc.prototype.Xa = j;
function Kc(a, c) {
  this.name = a;
  this.value = c
}
Kc.prototype.toString = m("name");
var Lc = new Kc("CONFIG", 700);
Jc.prototype.getParent = m("ga");
Jc.prototype.cb = function(a) {
  this.Y = a
};
function Mc(a) {
  if(a.Y) {
    return a.Y
  }
  if(a.ga) {
    return Mc(a.ga)
  }
  Qa("Root logger has no level set.");
  return j
}
Jc.prototype.log = function(a, c, d) {
  if(a.value >= Mc(this).value) {
    a = this.jb(a, c, d);
    o.console && o.console.markTimeline && o.console.markTimeline("log:" + a.lb);
    for(c = this;c;) {
      var d = c, e = a;
      if(d.Xa) {
        for(var f = 0, h = aa;h = d.Xa[f];f++) {
          h(e)
        }
      }
      c = c.getParent()
    }
  }
};
Jc.prototype.jb = function(a, c, d) {
  var e = new Hc(a, "" + c, this.mb);
  if(d) {
    e.Ua = d;
    var f;
    var h = arguments.callee.caller;
    try {
      var i;
      var k = da("window.location.href");
      if(s(d)) {
        i = {message:d, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"}
      }else {
        var q, t, G = l;
        try {
          q = d.lineNumber || d.tb || "Not available"
        }catch(C) {
          q = "Not available", G = g
        }
        try {
          t = d.fileName || d.filename || d.sourceURL || k
        }catch(P) {
          t = "Not available", G = g
        }
        i = G || !d.lineNumber || !d.fileName || !d.stack ? {message:d.message, name:d.name, lineNumber:q, fileName:t, stack:d.stack || "Not available"} : d
      }
      f = "Message: " + sa(i.message) + '\nUrl: <a href="view-source:' + i.fileName + '" target="_new">' + i.fileName + "</a>\nLine: " + i.lineNumber + "\n\nBrowser stack:\n" + sa(i.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + sa(Dc(h) + "-> ")
    }catch(W) {
      f = "Exception trying to expose exception! You win, we lose. " + W
    }
    e.Ta = f
  }
  return e
};
var Nc = {}, Oc = j;
function Pc(a) {
  Oc || (Oc = new Jc(""), Nc[""] = Oc, Oc.cb(Lc));
  var c;
  if(!(c = Nc[a])) {
    c = new Jc(a);
    var d = a.lastIndexOf("."), e = a.substr(d + 1), d = Pc(a.substr(0, d));
    if(!d.ja) {
      d.ja = {}
    }
    d.ja[e] = c;
    c.ga = d;
    Nc[a] = c
  }
  return c
}
;Pc("goog.dom.SavedRange");
function Qc(a) {
  return"none" != a.style.display
}
;function Rc(a, c, d, e, f) {
  ec.call(this, c, d, e, f);
  this.element = a
}
oa(Rc, ec);
Rc.prototype.ha = ea;
Rc.prototype.qa = function() {
  this.ha();
  Rc.h.qa.call(this)
};
Rc.prototype.R = function() {
  this.ha();
  Rc.h.R.call(this)
};
Rc.prototype.N = function() {
  this.ha();
  Rc.h.N.call(this)
};
function Sc(a, c, d, e, f) {
  fa(c) && (c = [c]);
  fa(d) && (d = [d]);
  Rc.call(this, a, c, d, e, f);
  (1 != c.length || 1 != d.length) && b(Error("Start and end points must be 1D"))
}
oa(Sc, Rc);
Sc.prototype.ha = function() {
  var a = this.coords[0], c = this.element.style;
  if("opacity" in c) {
    c.opacity = a
  }else {
    if("MozOpacity" in c) {
      c.MozOpacity = a
    }else {
      if("filter" in c) {
        c.filter = "" === a ? "" : "alpha(opacity=" + 100 * a + ")"
      }
    }
  }
};
Sc.prototype.show = function() {
  this.element.style.display = ""
};
function Tc(a, c, d) {
  Sc.call(this, a, 1, 0, c, d)
}
oa(Tc, Sc);
Tc.prototype.N = function() {
  this.show();
  Tc.h.N.call(this)
};
Tc.prototype.R = function() {
  this.element.style.display = "none";
  Tc.h.R.call(this)
};
function Uc(a, c, d) {
  Sc.call(this, a, 0, 1, c, d)
}
oa(Uc, Sc);
Uc.prototype.N = function() {
  this.show();
  Uc.h.N.call(this)
};
Pc("goog.dom.browserrange.IeRange");
function Vc(a, c, d) {
  this.pa = a;
  this.kb = c || 0;
  this.Wa = d;
  this.eb = ma(this.hb, this)
}
oa(Vc, Ra);
n = Vc.prototype;
n.X = 0;
n.o = function() {
  Vc.h.o.call(this);
  this.stop();
  delete this.pa;
  delete this.Wa
};
n.start = function(a) {
  this.stop();
  var c = this.eb, a = r(a) ? a : this.kb;
  ga(c) || (c && "function" == typeof c.handleEvent ? c = ma(c.handleEvent, c) : b(Error("Invalid listener argument")));
  this.X = 2147483647 < a ? -1 : dc.setTimeout(c, a || 0)
};
n.stop = function() {
  0 != this.X && dc.clearTimeout(this.X);
  this.X = 0
};
n.hb = function() {
  this.X = 0;
  this.pa && this.pa.call(this.Wa)
};
function Wc(a, c) {
  var d = a.type;
  if(r(d)) {
    switch(d.toLowerCase()) {
      case "checkbox":
      ;
      case "radio":
        a.checked = c ? "checked" : j;
        break;
      case "select-one":
        a.selectedIndex = -1;
        if(s(c)) {
          for(var e = 0;d = a.options[e];e++) {
            if(d.value == c) {
              d.selected = g;
              break
            }
          }
        }
        break;
      case "select-multiple":
        d = c;
        s(d) && (d = [d]);
        for(var f = 0;e = a.options[f];f++) {
          if(e.selected = l, d) {
            for(var h, i = 0;h = d[i];i++) {
              if(e.value == h) {
                e.selected = g
              }
            }
          }
        }
        break;
      default:
        a.value = c != j ? c : ""
    }
  }
}
;function Xc(a, c, d) {
  a.dataset ? a.dataset[c] = d : a.setAttribute("data-" + Ga(c), d)
}
function Yc(a, c) {
  return a.dataset ? a.dataset[c] : a.getAttribute("data-" + Ga(c))
}
function Zc(a, c) {
  a.dataset ? delete a.dataset[c] : a.removeAttribute("data-" + Ga(c))
}
;function u(a) {
  return a != j && a !== l
}
function $c(a, c) {
  var d = a[p.call(j, c)];
  if(u(d)) {
    return d
  }
  d = a._;
  return u(d) ? d : l
}
function v(a, c) {
  return Error.call(j, "No protocol method " + a + " defined for type " + p.call(j, c) + ": " + c)
}
function ad(a) {
  return Array.prototype.slice.call(a)
}
function bd(a) {
  return Array.prototype.slice.call(arguments)
}
function w(a) {
  if(u(u(a) ? a.u : a)) {
    a = a.u(a)
  }else {
    var c;
    var d = w[p.call(j, a)];
    u(d) ? c = d : (d = w._, u(d) ? c = d : b(v.call(j, "ICounted.-count", a)));
    a = c.call(j, a)
  }
  return a
}
var cd = {};
function dd(a, c) {
  var d;
  if(u(u(a) ? a.j : a)) {
    d = a.j(a, c)
  }else {
    var e = dd[p.call(j, a)];
    u(e) ? d = e : (e = dd._, u(e) ? d = e : b(v.call(j, "ICollection.-conj", a)));
    d = d.call(j, a, c)
  }
  return d
}
var x = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(u(u(a) ? a.I : a)) {
          e = a.I(a, c)
        }else {
          var f = x[p.call(j, a)];
          u(f) ? e = f : (f = x._, u(f) ? e = f : b(v.call(j, "IIndexed.-nth", a)));
          e = e.call(j, a, c)
        }
        return e;
      case 3:
        return u(u(a) ? a.I : a) ? e = a.I(a, c, d) : (e = x[p.call(j, a)], u(e) ? f = e : (e = x._, u(e) ? f = e : b(v.call(j, "IIndexed.-nth", a))), e = f.call(j, a, c, d)), e
    }
    b("Invalid arity: " + arguments.length)
  }
}(), ed = {};
function fd(a) {
  if(u(u(a) ? a.K : a)) {
    a = a.K(a)
  }else {
    var c;
    var d = fd[p.call(j, a)];
    u(d) ? c = d : (d = fd._, u(d) ? c = d : b(v.call(j, "ISeq.-first", a)));
    a = c.call(j, a)
  }
  return a
}
function gd(a) {
  if(u(u(a) ? a.L : a)) {
    a = a.L(a)
  }else {
    var c;
    var d = gd[p.call(j, a)];
    u(d) ? c = d : (d = gd._, u(d) ? c = d : b(v.call(j, "ISeq.-rest", a)));
    a = c.call(j, a)
  }
  return a
}
var y = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(u(u(a) ? a.F : a)) {
          e = a.F(a, c)
        }else {
          var f = y[p.call(j, a)];
          u(f) ? e = f : (f = y._, u(f) ? e = f : b(v.call(j, "ILookup.-lookup", a)));
          e = e.call(j, a, c)
        }
        return e;
      case 3:
        return u(u(a) ? a.F : a) ? e = a.F(a, c, d) : (e = y[p.call(j, a)], u(e) ? f = e : (e = y._, u(e) ? f = e : b(v.call(j, "ILookup.-lookup", a))), e = f.call(j, a, c, d)), e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function hd(a, c) {
  var d;
  if(u(u(a) ? a.ka : a)) {
    d = a.ka(a, c)
  }else {
    var e = hd[p.call(j, a)];
    u(e) ? d = e : (e = hd._, u(e) ? d = e : b(v.call(j, "IAssociative.-contains-key?", a)));
    d = d.call(j, a, c)
  }
  return d
}
function id(a, c, d) {
  if(u(u(a) ? a.V : a)) {
    a = a.V(a, c, d)
  }else {
    var e;
    var f = id[p.call(j, a)];
    u(f) ? e = f : (f = id._, u(f) ? e = f : b(v.call(j, "IAssociative.-assoc", a)));
    a = e.call(j, a, c, d)
  }
  return a
}
var jd = {};
function kd(a, c) {
  var d;
  if(u(u(a) ? a.la : a)) {
    d = a.la(a, c)
  }else {
    var e = kd[p.call(j, a)];
    u(e) ? d = e : (e = kd._, u(e) ? d = e : b(v.call(j, "IMap.-dissoc", a)));
    d = d.call(j, a, c)
  }
  return d
}
var ld = {}, md = {};
function nd(a, c, d) {
  if(u(u(a) ? a.ma : a)) {
    a = a.ma(a, c, d)
  }else {
    var e;
    var f = nd[p.call(j, a)];
    u(f) ? e = f : (f = nd._, u(f) ? e = f : b(v.call(j, "IVector.-assoc-n", a)));
    a = e.call(j, a, c, d)
  }
  return a
}
function od(a) {
  if(u(u(a) ? a.fb : a)) {
    a = a.state
  }else {
    var c;
    var d = od[p.call(j, a)];
    u(d) ? c = d : (d = od._, u(d) ? c = d : b(v.call(j, "IDeref.-deref", a)));
    a = c.call(j, a)
  }
  return a
}
var pd = {};
function qd(a) {
  if(u(u(a) ? a.q : a)) {
    a = a.c
  }else {
    var c;
    var d = qd[p.call(j, a)];
    u(d) ? c = d : (d = qd._, u(d) ? c = d : b(v.call(j, "IMeta.-meta", a)));
    a = c.call(j, a)
  }
  return a
}
var rd = {};
function sd(a, c) {
  var d;
  if(u(u(a) ? a.r : a)) {
    d = a.r(a, c)
  }else {
    var e = sd[p.call(j, a)];
    u(e) ? d = e : (e = sd._, u(e) ? d = e : b(v.call(j, "IWithMeta.-with-meta", a)));
    d = d.call(j, a, c)
  }
  return d
}
var td = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(u(u(a) ? a.J : a)) {
          e = a.J(a, c)
        }else {
          var f = td[p.call(j, a)];
          u(f) ? e = f : (f = td._, u(f) ? e = f : b(v.call(j, "IReduce.-reduce", a)));
          e = e.call(j, a, c)
        }
        return e;
      case 3:
        return u(u(a) ? a.J : a) ? e = a.J(a, c, d) : (e = td[p.call(j, a)], u(e) ? f = e : (e = td._, u(e) ? f = e : b(v.call(j, "IReduce.-reduce", a))), e = f.call(j, a, c, d)), e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function ud(a, c) {
  var d;
  if(u(u(a) ? a.d : a)) {
    d = a.d(a, c)
  }else {
    var e = ud[p.call(j, a)];
    u(e) ? d = e : (e = ud._, u(e) ? d = e : b(v.call(j, "IEquiv.-equiv", a)));
    d = d.call(j, a, c)
  }
  return d
}
function vd(a) {
  if(u(u(a) ? a.k : a)) {
    a = a.k(a)
  }else {
    var c;
    var d = vd[p.call(j, a)];
    u(d) ? c = d : (d = vd._, u(d) ? c = d : b(v.call(j, "IHash.-hash", a)));
    a = c.call(j, a)
  }
  return a
}
function wd(a) {
  if(u(u(a) ? a.n : a)) {
    a = a.n(a)
  }else {
    var c;
    var d = wd[p.call(j, a)];
    u(d) ? c = d : (d = wd._, u(d) ? c = d : b(v.call(j, "ISeqable.-seq", a)));
    a = c.call(j, a)
  }
  return a
}
var xd = {}, yd = {};
function zd(a, c) {
  var d;
  if(u(u(a) ? a.f : a)) {
    d = a.f(a, c)
  }else {
    var e = zd[p.call(j, a)];
    u(e) ? d = e : (e = zd._, u(e) ? d = e : b(v.call(j, "IPrintable.-pr-seq", a)));
    d = d.call(j, a, c)
  }
  return d
}
function Ad(a, c, d) {
  if(u(u(a) ? a.za : a)) {
    a = a.za(a, c, d)
  }else {
    var e;
    var f = Ad[p.call(j, a)];
    u(f) ? e = f : (f = Ad._, u(f) ? e = f : b(v.call(j, "IWatchable.-notify-watches", a)));
    a = e.call(j, a, c, d)
  }
  return a
}
function Bd(a, c, d) {
  if(u(u(a) ? a.ya : a)) {
    a = a.ya(a, c, d)
  }else {
    var e;
    var f = Bd[p.call(j, a)];
    u(f) ? e = f : (f = Bd._, u(f) ? e = f : b(v.call(j, "IWatchable.-add-watch", a)));
    a = e.call(j, a, c, d)
  }
  return a
}
function z(a, c) {
  return ud.call(j, a, c)
}
function A(a) {
  return a === j
}
vd["null"] = ca(0);
y["null"] = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return j;
      case 3:
        return d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
id["null"] = function(a, c, d) {
  return Cd.call(j, c, d)
};
cd["null"] = g;
dd["null"] = function(a, c) {
  return B.call(j, c)
};
td["null"] = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return c.call(j);
      case 3:
        return d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
yd["null"] = g;
zd["null"] = function() {
  return B.call(j, "nil")
};
ld["null"] = g;
w["null"] = ca(0);
ed["null"] = g;
fd["null"] = ca(j);
gd["null"] = function() {
  return B.call(j)
};
ud["null"] = function(a, c) {
  return A.call(j, c)
};
rd["null"] = g;
sd["null"] = ca(j);
pd["null"] = g;
qd["null"] = ca(j);
x["null"] = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return j;
      case 3:
        return d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
jd["null"] = g;
kd["null"] = ca(j);
Date.prototype.d = function(a, c) {
  return a.toString() === c.toString()
};
vd.number = ba();
ud.number = function(a, c) {
  return a === c
};
vd["boolean"] = function(a) {
  return a === g ? 1 : 0
};
vd["function"] = function(a) {
  return ha.call(j, a)
};
function Dd(a) {
  return a + 1
}
var Ed = function() {
  return function(a, c, d, e) {
    switch(arguments.length) {
      case 2:
        var f;
        a: {
          if(u(z.call(j, 0, w.call(j, a)))) {
            f = c.call(j)
          }else {
            for(var h = x.call(j, a, 0), i = 1;;) {
              if(u(i < w.call(j, a))) {
                h = c.call(j, h, x.call(j, a, i)), i += 1
              }else {
                f = h;
                break a
              }
            }
          }
        }
        return f;
      case 3:
        a: {
          f = d;
          for(i = 0;;) {
            if(u(i < w.call(j, a))) {
              f = c.call(j, f, x.call(j, a, i)), i += 1
            }else {
              h = f;
              break a
            }
          }
        }
        return h;
      case 4:
        a: {
          f = d;
          for(h = e;;) {
            if(u(h < w.call(j, a))) {
              f = c.call(j, f, x.call(j, a, h)), h += 1
            }else {
              i = f;
              break a
            }
          }
        }
        return i
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Fd(a, c) {
  this.B = a;
  this.D = c
}
n = Fd.prototype;
n.k = function(a) {
  return Gd.call(j, a)
};
n.J = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ed.call(j, a, c, this.B[this.D], this.D + 1);
      case 3:
        return Ed.call(j, a, c, d, this.D)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.p = g;
n.j = function(a, c) {
  return D.call(j, c, a)
};
n.d = function(a, c) {
  return Hd.call(j, a, c)
};
n.G = g;
n.I = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e = c + this.D;
        return u(e < this.B.length) ? this.B[e] : j;
      case 3:
        return e = c + this.D, u(e < this.B.length) ? this.B[e] : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.u = function() {
  return this.B.length - this.D
};
n.P = g;
n.K = function() {
  return this.B[this.D]
};
n.L = function() {
  return u(this.D + 1 < this.B.length) ? new Fd(this.B, this.D + 1) : B.call(j)
};
n.n = ba();
function Id(a, c) {
  return u(z.call(j, 0, a.length)) ? j : new Fd(a, c)
}
function E(a, c) {
  return Id.call(j, a, c)
}
td.array = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ed.call(j, a, c);
      case 3:
        return Ed.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
y.array = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a[c];
      case 3:
        return x.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
x.array = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return u(c < a.length) ? a[c] : j;
      case 3:
        return u(c < a.length) ? a[c] : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
w.array = function(a) {
  return a.length
};
wd.array = function(a) {
  return E.call(j, a, 0)
};
function F(a) {
  return u(a) ? wd.call(j, a) : j
}
function H(a) {
  a = F.call(j, a);
  return u(a) ? fd.call(j, a) : j
}
function I(a) {
  return gd.call(j, F.call(j, a))
}
function J(a) {
  return u(a) ? F.call(j, I.call(j, a)) : j
}
function Jd(a) {
  return H.call(j, J.call(j, a))
}
function Kd(a) {
  return J.call(j, J.call(j, a))
}
function Ld(a) {
  for(;;) {
    if(u(J.call(j, a))) {
      a = J.call(j, a)
    }else {
      return H.call(j, a)
    }
  }
}
w._ = function(a) {
  for(var a = F.call(j, a), c = 0;;) {
    if(u(a)) {
      a = J.call(j, a), c += 1
    }else {
      return c
    }
  }
};
ud._ = function(a, c) {
  return a === c
};
function K(a) {
  return u(a) ? l : g
}
var L = function() {
  var a = j, c = function() {
    function c(a, d, i) {
      var k = j;
      r(i) && (k = E(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, a, d, k)
    }
    function e(c, d, e) {
      for(;;) {
        if(u(e)) {
          c = a.call(j, c, d), d = H.call(j, e), e = J.call(j, e)
        }else {
          return a.call(j, c, d)
        }
      }
    }
    c.b = 2;
    c.a = function(a) {
      var c = H(a), d = H(J(a)), a = I(J(a));
      return e.call(this, c, d, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return dd.call(j, a, e);
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}();
function M(a) {
  return w.call(j, a)
}
var N = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return x.call(j, a, Math.floor(c));
      case 3:
        return x.call(j, a, Math.floor(c), d)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), O = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, a, c);
      case 3:
        return y.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Md = function() {
  var a = j, c = function() {
    function c(a, d, i, k) {
      var q = j;
      r(k) && (q = E(Array.prototype.slice.call(arguments, 3), 0));
      return e.call(this, a, d, i, q)
    }
    function e(c, d, e, k) {
      for(;;) {
        if(c = a.call(j, c, d, e), u(k)) {
          d = H.call(j, k), e = Jd.call(j, k), k = Kd.call(j, k)
        }else {
          return c
        }
      }
    }
    c.b = 3;
    c.a = function(a) {
      var c = H(a), d = H(J(a)), k = H(J(J(a))), a = I(J(J(a)));
      return e.call(this, c, d, k, a)
    };
    return c
  }(), a = function(a, e, f, h) {
    switch(arguments.length) {
      case 3:
        return id.call(j, a, e, f);
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 3;
  a.a = c.a;
  return a
}(), Nd = function() {
  var a = j, c = function() {
    function c(a, d, i) {
      var k = j;
      r(i) && (k = E(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, a, d, k)
    }
    function e(c, d, e) {
      for(;;) {
        if(c = a.call(j, c, d), u(e)) {
          d = H.call(j, e), e = J.call(j, e)
        }else {
          return c
        }
      }
    }
    c.b = 2;
    c.a = function(a) {
      var c = H(a), d = H(J(a)), a = I(J(a));
      return e.call(this, c, d, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return kd.call(j, a, e);
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}();
function Od(a, c) {
  return sd.call(j, a, c)
}
function Pd(a) {
  var c;
  u(a) ? (c = a.l, c = u(c) ? K.call(j, a.hasOwnProperty("cljs$core$IMeta$")) : c) : c = a;
  c = u(c) ? g : $c.call(j, pd, a);
  return u(c) ? qd.call(j, a) : j
}
function Qd(a) {
  return vd.call(j, a)
}
function Rd(a) {
  return K.call(j, F.call(j, a))
}
function Sd(a) {
  if(u(A.call(j, a))) {
    a = l
  }else {
    var c;
    u(a) ? (c = a.p, c = u(c) ? K.call(j, a.hasOwnProperty("cljs$core$ICollection$")) : c) : c = a;
    a = u(c) ? g : $c.call(j, cd, a)
  }
  return a
}
function Td(a) {
  if(u(A.call(j, a))) {
    a = l
  }else {
    var c;
    u(a) ? (c = a.gb, c = u(c) ? K.call(j, a.hasOwnProperty("cljs$core$ISet$")) : c) : c = a;
    a = u(c) ? g : $c.call(j, ld, a)
  }
  return a
}
function Ud(a) {
  var c;
  u(a) ? (c = a.G, c = u(c) ? K.call(j, a.hasOwnProperty("cljs$core$ISequential$")) : c) : c = a;
  return u(c) ? g : $c.call(j, xd, a)
}
function Vd(a) {
  if(u(A.call(j, a))) {
    a = l
  }else {
    var c;
    u(a) ? (c = a.wa, c = u(c) ? K.call(j, a.hasOwnProperty("cljs$core$IMap$")) : c) : c = a;
    a = u(c) ? g : $c.call(j, jd, a)
  }
  return a
}
function Wd(a) {
  var c;
  u(a) ? (c = a.xa, c = u(c) ? K.call(j, a.hasOwnProperty("cljs$core$IVector$")) : c) : c = a;
  return u(c) ? g : $c.call(j, md, a)
}
function Xd() {
  return{}
}
function Yd(a) {
  var c = bd.call(j);
  Mb.call(j, a, function(a, e) {
    return c.push(e)
  });
  return c
}
function Zd(a, c) {
  return delete a[c]
}
var $d = Xd.call(j);
function ae(a) {
  return aa === a
}
function be(a) {
  if(u(A.call(j, a))) {
    a = l
  }else {
    var c;
    u(a) ? (c = a.P, c = u(c) ? K.call(j, a.hasOwnProperty("cljs$core$ISeq$")) : c) : c = a;
    a = u(c) ? g : $c.call(j, ed, a)
  }
  return a
}
function ce(a) {
  return u(a) ? g : l
}
function de(a) {
  var c = s.call(j, a);
  return u(c) ? K.call(j, function() {
    var c = z.call(j, a.charAt(0), "\ufdd0");
    return u(c) ? c : z.call(j, a.charAt(0), "\ufdd1")
  }()) : c
}
function ee(a) {
  var c = s.call(j, a);
  return u(c) ? z.call(j, a.charAt(0), "\ufdd0") : c
}
function fe(a) {
  var c = s.call(j, a);
  return u(c) ? z.call(j, a.charAt(0), "\ufdd1") : c
}
function ge(a) {
  return fa.call(j, a)
}
function he(a) {
  var c = ge.call(j, a);
  return u(c) ? a == a.toFixed() : c
}
function ie(a, c) {
  return u(y.call(j, a, c, $d) === $d) ? l : g
}
function je(a, c) {
  return Ya.call(j, a, c)
}
function ke(a) {
  return u(z.call(j, a, je)) ? je : function(c, d) {
    var e = a.call(j, c, d);
    return u(ge.call(j, e)) ? e : u(e) ? -1 : u(a.call(j, d, c)) ? 1 : 0
  }
}
var ne = function() {
  var a = j;
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        return a.call(j, je, c);
      case 2:
        var e;
        u(F.call(j, d)) ? (e = le.call(j, d), Za.call(j, e, ke.call(j, c)), e = F.call(j, e)) : e = me;
        return e
    }
    b("Invalid arity: " + arguments.length)
  }
}(), oe = function() {
  function a(a, c, f) {
    return ne.call(j, function(f, i) {
      return ke.call(j, c).call(j, a.call(j, f), a.call(j, i))
    }, f)
  }
  var c = j;
  return c = function(d, e, f) {
    switch(arguments.length) {
      case 2:
        return c.call(j, d, je, e);
      case 3:
        return a.call(this, d, e, f)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), pe = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return td.call(j, c, a);
      case 3:
        return td.call(j, d, a, c)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), qe = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e = F.call(j, c);
        return u(e) ? pe.call(j, a, H.call(j, e), J.call(j, e)) : a.call(j);
      case 3:
        a: {
          for(var f = c, h = F.call(j, d);;) {
            if(u(h)) {
              f = a.call(j, f, H.call(j, h)), h = J.call(j, h)
            }else {
              e = f;
              break a
            }
          }
        }
        return e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
td._ = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return qe.call(j, c, a);
      case 3:
        return qe.call(j, c, d, a)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var re = function() {
  var a = j, c = function() {
    function c(a, d, i) {
      var k = j;
      r(i) && (k = E(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, a, d, k)
    }
    function e(c, d, e) {
      for(;;) {
        if(u(a.call(j, c, d))) {
          if(u(J.call(j, e))) {
            c = d, d = H.call(j, e), e = J.call(j, e)
          }else {
            return a.call(j, d, H.call(j, e))
          }
        }else {
          return l
        }
      }
    }
    c.b = 2;
    c.a = function(a) {
      var c = H(a), d = H(J(a)), a = I(J(a));
      return e.call(this, c, d, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return g;
      case 2:
        return a < e;
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}(), se = function() {
  var a = j, c = function() {
    function c(a, d, i) {
      var k = j;
      r(i) && (k = E(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, a, d, k)
    }
    function e(c, d, e) {
      for(;;) {
        if(u(a.call(j, c, d))) {
          if(u(J.call(j, e))) {
            c = d, d = H.call(j, e), e = J.call(j, e)
          }else {
            return a.call(j, d, H.call(j, e))
          }
        }else {
          return l
        }
      }
    }
    c.b = 2;
    c.a = function(a) {
      var c = H(a), d = H(J(a)), a = I(J(a));
      return e.call(this, c, d, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return g;
      case 2:
        return a > e;
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}(), te = function() {
  var a = j, c = function() {
    function c(d, f, h) {
      var i = j;
      r(h) && (i = E(Array.prototype.slice.call(arguments, 2), 0));
      return pe.call(j, a, a.call(j, d, f), i)
    }
    c.b = 2;
    c.a = function(c) {
      var d = H(c), h = H(J(c)), c = I(J(c));
      return pe.call(j, a, a.call(j, d, h), c)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return a < e ? a : e;
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}();
function ue(a, c) {
  for(var d = c, e = F.call(j, a);;) {
    var f = e;
    if(u(u(f) ? 0 < d : f)) {
      d -= 1, e = J.call(j, e)
    }else {
      return e
    }
  }
}
x._ = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        var f = ue.call(j, a, c);
        u(f) ? e = H.call(j, f) : b(Error("Index out of bounds"));
        return e;
      case 3:
        return e = ue.call(j, a, c), u(e) ? H.call(j, e) : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var ve = function() {
  var a = j, c = function() {
    function c(a, d) {
      var i = j;
      r(d) && (i = E(Array.prototype.slice.call(arguments, 1), 0));
      return e.call(this, a, i)
    }
    function e(c, d) {
      return function(c, d) {
        for(;;) {
          if(u(d)) {
            var e = c.append(a.call(j, H.call(j, d))), f = J.call(j, d), c = e, d = f
          }else {
            return a.call(j, c)
          }
        }
      }.call(j, new Na(a.call(j, c)), d)
    }
    c.b = 1;
    c.a = function(a) {
      var c = H(a), a = I(a);
      return e.call(this, c, a)
    };
    return c
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return u(A.call(j, a)) ? "" : u("\ufdd0'else") ? a.toString() : j;
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 1;
  a.a = c.a;
  return a
}(), R = function() {
  var a = j, c = function() {
    function a(c, d) {
      var h = j;
      r(d) && (h = E(Array.prototype.slice.call(arguments, 1), 0));
      return Q.call(j, ve, c, h)
    }
    a.b = 1;
    a.a = function(a) {
      var c = H(a), a = I(a);
      return Q.call(j, ve, c, a)
    };
    return a
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return u(fe.call(j, a)) ? a.substring(2, a.length) : u(ee.call(j, a)) ? ve.call(j, ":", a.substring(2, a.length)) : u(A.call(j, a)) ? "" : u("\ufdd0'else") ? a.toString() : j;
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 1;
  a.a = c.a;
  return a
}(), we = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), xe = function() {
  var a = j;
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        return u(fe.call(j, c)) || u(ee.call(j, c)) && ve.call(j, "\ufdd1", "'", we.call(j, c, 2)), ve.call(j, "\ufdd1", "'", c);
      case 2:
        return a.call(j, ve.call(j, c, "/", d))
    }
    b("Invalid arity: " + arguments.length)
  }
}(), ye = function() {
  var a = j;
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        return u(ee.call(j, c)) ? c : u(fe.call(j, c)) ? ve.call(j, "\ufdd0", "'", we.call(j, c, 2)) : u("\ufdd0'else") ? ve.call(j, "\ufdd0", "'", c) : j;
      case 2:
        return a.call(j, ve.call(j, c, "/", d))
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Hd(a, c) {
  return ce.call(j, u(Ud.call(j, c)) ? function() {
    for(var d = F.call(j, a), e = F.call(j, c);;) {
      if(u(A.call(j, d))) {
        return A.call(j, e)
      }
      if(u(A.call(j, e))) {
        return l
      }
      if(u(z.call(j, H.call(j, d), H.call(j, e)))) {
        d = J.call(j, d), e = J.call(j, e)
      }else {
        return u("\ufdd0'else") ? l : j
      }
    }
  }() : j)
}
function ze(a, c) {
  return a ^ c + 2654435769 + (a << 6) + (a >> 2)
}
function Gd(a) {
  return pe.call(j, function(a, d) {
    return ze.call(j, a, Qd.call(j, d))
  }, Qd.call(j, H.call(j, a)), J.call(j, a))
}
function Ae(a, c, d, e) {
  this.c = a;
  this.W = c;
  this.T = d;
  this.s = e
}
n = Ae.prototype;
n.k = function(a) {
  return Gd.call(j, a)
};
n.G = g;
n.p = g;
n.j = function(a, c) {
  return new Ae(this.c, c, a, this.s + 1)
};
n.n = ba();
n.u = m("s");
n.P = g;
n.K = m("W");
n.L = m("T");
n.d = function(a, c) {
  return Hd.call(j, a, c)
};
n.v = g;
n.r = function(a, c) {
  return new Ae(c, this.W, this.T, this.s)
};
n.l = g;
n.q = m("c");
function Be(a) {
  this.c = a
}
n = Be.prototype;
n.k = function(a) {
  return Gd.call(j, a)
};
n.G = g;
n.p = g;
n.j = function(a, c) {
  return new Ae(this.c, c, j, 1)
};
n.n = ca(j);
n.u = ca(0);
n.P = g;
n.K = ca(j);
n.L = ca(j);
n.d = function(a, c) {
  return Hd.call(j, a, c)
};
n.v = g;
n.r = function(a, c) {
  return new Be(c)
};
n.l = g;
n.q = m("c");
var me = new Be(j);
function Ce(a) {
  return pe.call(j, L, me, a)
}
var B = function() {
  function a(a) {
    var d = j;
    r(a) && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return pe.call(j, L, me, Ce.call(j, d))
  }
  a.b = 0;
  a.a = function(a) {
    a = F(a);
    return pe.call(j, L, me, Ce.call(j, a))
  };
  return a
}();
function De(a, c, d) {
  this.c = a;
  this.W = c;
  this.T = d
}
n = De.prototype;
n.n = ba();
n.k = function(a) {
  return Gd.call(j, a)
};
n.d = function(a, c) {
  return Hd.call(j, a, c)
};
n.G = g;
n.p = g;
n.j = function(a, c) {
  return new De(j, c, a)
};
n.P = g;
n.K = m("W");
n.L = function() {
  return u(A.call(j, this.T)) ? me : this.T
};
n.l = g;
n.q = m("c");
n.v = g;
n.r = function(a, c) {
  return new De(c, this.W, this.T)
};
function D(a, c) {
  return new De(j, a, c)
}
td.string = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ed.call(j, a, c);
      case 3:
        return Ed.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
y.string = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return x.call(j, a, c);
      case 3:
        return x.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
x.string = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return u(c < w.call(j, a)) ? a.charAt(c) : j;
      case 3:
        return u(c < w.call(j, a)) ? a.charAt(c) : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
w.string = function(a) {
  return a.length
};
wd.string = function(a) {
  return Id.call(j, a, 0)
};
vd.string = function(a) {
  return Ea.call(j, a)
};
String.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return O.call(j, c, this.toString());
      case 3:
        return O.call(j, c, this.toString(), d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
String.prototype.apply = function(a, c) {
  return u(2 > M.call(j, c)) ? O.call(j, c[0], a) : O.call(j, c[0], a, c[1])
};
function Ee(a) {
  var c = a.x;
  if(u(a.sa)) {
    return c
  }
  a.x = c.call(j);
  a.sa = g;
  return a.x
}
function S(a, c, d) {
  this.c = a;
  this.sa = c;
  this.x = d
}
n = S.prototype;
n.n = function(a) {
  return F.call(j, Ee.call(j, a))
};
n.k = function(a) {
  return Gd.call(j, a)
};
n.d = function(a, c) {
  return Hd.call(j, a, c)
};
n.G = g;
n.p = g;
n.j = function(a, c) {
  return D.call(j, c, a)
};
n.P = g;
n.K = function(a) {
  return H.call(j, Ee.call(j, a))
};
n.L = function(a) {
  return I.call(j, Ee.call(j, a))
};
n.l = g;
n.q = m("c");
n.v = g;
n.r = function(a, c) {
  return new S(c, this.sa, this.x)
};
function le(a) {
  for(var c = bd.call(j);;) {
    if(u(F.call(j, a))) {
      c.push(H.call(j, a)), a = J.call(j, a)
    }else {
      return c
    }
  }
}
function Fe(a, c) {
  for(var d = a, e = c, f = 0;;) {
    var h;
    h = 0 < e;
    h = u(h) ? F.call(j, d) : h;
    if(u(h)) {
      d = J.call(j, d), e -= 1, f += 1
    }else {
      return f
    }
  }
}
var He = function Ge(c) {
  return u(A.call(j, c)) ? j : u(A.call(j, J.call(j, c))) ? F.call(j, H.call(j, c)) : u("\ufdd0'else") ? D.call(j, H.call(j, c), Ge.call(j, J.call(j, c))) : j
}, Ie = function() {
  function a(a, c) {
    return new S(j, l, function() {
      var d = F.call(j, a);
      return u(d) ? D.call(j, H.call(j, d), e.call(j, I.call(j, d), c)) : c
    })
  }
  function c(a) {
    return new S(j, l, function() {
      return a
    })
  }
  function d() {
    return new S(j, l, ca(j))
  }
  var e = j, f = function() {
    function a(d, e, f) {
      var h = j;
      r(f) && (h = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, d, e, h)
    }
    function c(a, d, f) {
      return function C(a, c) {
        return new S(j, l, function() {
          var d = F.call(j, a);
          return u(d) ? D.call(j, H.call(j, d), C.call(j, I.call(j, d), c)) : u(c) ? C.call(j, H.call(j, c), J.call(j, c)) : j
        })
      }.call(j, e.call(j, a, d), f)
    }
    a.b = 2;
    a.a = function(a) {
      var d = H(a), e = H(J(a)), a = I(J(a));
      return c.call(this, d, e, a)
    };
    return a
  }(), e = function(e, i, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return a.call(this, e, i);
      default:
        return f.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  e.b = 2;
  e.a = f.a;
  return e
}(), Je = function() {
  var a = j, c = function() {
    function a(d, h, i, k, q) {
      var t = j;
      r(q) && (t = E(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, d, h, i, k, t)
    }
    function c(a, d, e, k, q) {
      return D.call(j, a, D.call(j, d, D.call(j, e, D.call(j, k, He.call(j, q)))))
    }
    a.b = 4;
    a.a = function(a) {
      var d = H(a), i = H(J(a)), k = H(J(J(a))), q = H(J(J(J(a)))), a = I(J(J(J(a))));
      return c.call(this, d, i, k, q, a)
    };
    return a
  }(), a = function(a, e, f, h, i) {
    switch(arguments.length) {
      case 1:
        return F.call(j, a);
      case 2:
        return D.call(j, a, e);
      case 3:
        return D.call(j, a, D.call(j, e, f));
      case 4:
        return D.call(j, a, D.call(j, e, D.call(j, f, h)));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 4;
  a.a = c.a;
  return a
}(), Q = function() {
  var a = j, c = function() {
    function a(d, h, i, k, q, t) {
      var G = j;
      r(t) && (G = E(Array.prototype.slice.call(arguments, 5), 0));
      return c.call(this, d, h, i, k, q, G)
    }
    function c(a, d, e, k, q, t) {
      d = D.call(j, d, D.call(j, e, D.call(j, k, D.call(j, q, He.call(j, t)))));
      e = a.b;
      return u(a.a) ? u(Fe.call(j, d, e) <= e) ? a.apply(a, le.call(j, d)) : a.a(d) : a.apply(a, le.call(j, d))
    }
    a.b = 5;
    a.a = function(a) {
      var d = H(a), i = H(J(a)), k = H(J(J(a))), q = H(J(J(J(a)))), t = H(J(J(J(J(a))))), a = I(J(J(J(J(a)))));
      return c.call(this, d, i, k, q, t, a)
    };
    return a
  }(), a = function(a, e, f, h, i, k) {
    switch(arguments.length) {
      case 2:
        var q = a, t = e, G = q.b;
        return u(q.a) ? u(Fe.call(j, t, G + 1) <= G) ? q.apply(q, le.call(j, t)) : q.a(t) : q.apply(q, le.call(j, t));
      case 3:
        return q = a, t = Je.call(j, e, f), G = q.b, u(q.a) ? u(Fe.call(j, t, G) <= G) ? q.apply(q, le.call(j, t)) : q.a(t) : q.apply(q, le.call(j, t));
      case 4:
        return q = a, t = Je.call(j, e, f, h), G = q.b, u(q.a) ? u(Fe.call(j, t, G) <= G) ? q.apply(q, le.call(j, t)) : q.a(t) : q.apply(q, le.call(j, t));
      case 5:
        return q = a, t = Je.call(j, e, f, h, i), G = q.b, u(q.a) ? u(Fe.call(j, t, G) <= G) ? q.apply(q, le.call(j, t)) : q.a(t) : q.apply(q, le.call(j, t));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 5;
  a.a = c.a;
  return a
}(), Ke = function() {
  var a = j, c = function() {
    function a(c, d, h) {
      var i = j;
      r(h) && (i = E(Array.prototype.slice.call(arguments, 2), 0));
      return K.call(j, Q.call(j, z, c, d, i))
    }
    a.b = 2;
    a.a = function(a) {
      var c = H(a), d = H(J(a)), a = I(J(a));
      return K.call(j, Q.call(j, z, c, d, a))
    };
    return a
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return l;
      case 2:
        return K.call(j, z.call(j, a, e));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}();
function Le(a, c) {
  for(;;) {
    if(u(A.call(j, F.call(j, c)))) {
      return g
    }
    if(u(a.call(j, H.call(j, c)))) {
      var d = a, e = J.call(j, c), a = d, c = e
    }else {
      return u("\ufdd0'else") ? l : j
    }
  }
}
function Me(a, c) {
  for(;;) {
    if(u(F.call(j, c))) {
      var d = a.call(j, H.call(j, c));
      if(u(d)) {
        return d
      }
      var d = a, e = J.call(j, c), a = d, c = e
    }else {
      return j
    }
  }
}
function Ne(a) {
  if(u(he.call(j, a))) {
    return 0 === (a & 1)
  }
  b(Error(R.call(j, "Argument must be an integer: ", a)))
}
function Oe(a) {
  return K.call(j, Ne.call(j, a))
}
function Pe(a) {
  return a
}
function Qe(a) {
  return function() {
    var c = j, d = function() {
      function c(d, e, i) {
        var k = j;
        r(i) && (k = E(Array.prototype.slice.call(arguments, 2), 0));
        return K.call(j, Q.call(j, a, d, e, k))
      }
      c.b = 2;
      c.a = function(c) {
        var d = H(c), e = H(J(c)), c = I(J(c));
        return K.call(j, Q.call(j, a, d, e, c))
      };
      return c
    }(), c = function(c, f, h) {
      switch(arguments.length) {
        case 0:
          return K.call(j, a.call(j));
        case 1:
          return K.call(j, a.call(j, c));
        case 2:
          return K.call(j, a.call(j, c, f));
        default:
          return d.apply(this, arguments)
      }
      b("Invalid arity: " + arguments.length)
    };
    c.b = 2;
    c.a = d.a;
    return c
  }()
}
var Re = function() {
  function a(a, c, d, e) {
    return function() {
      function f(t) {
        var C = j;
        r(t) && (C = E(Array.prototype.slice.call(arguments, 0), 0));
        return Q.call(j, a, c, d, e, C)
      }
      f.b = 0;
      f.a = function(f) {
        f = F(f);
        return Q.call(j, a, c, d, e, f)
      };
      return f
    }()
  }
  function c(a, c, d) {
    return function() {
      function e(f) {
        var q = j;
        r(f) && (q = E(Array.prototype.slice.call(arguments, 0), 0));
        return Q.call(j, a, c, d, q)
      }
      e.b = 0;
      e.a = function(e) {
        e = F(e);
        return Q.call(j, a, c, d, e)
      };
      return e
    }()
  }
  function d(a, c) {
    return function() {
      function d(e) {
        var f = j;
        r(e) && (f = E(Array.prototype.slice.call(arguments, 0), 0));
        return Q.call(j, a, c, f)
      }
      d.b = 0;
      d.a = function(d) {
        d = F(d);
        return Q.call(j, a, c, d)
      };
      return d
    }()
  }
  var e = j, f = function() {
    function a(d, e, f, h, C) {
      var P = j;
      r(C) && (P = E(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, d, e, f, h, P)
    }
    function c(a, d, e, f, h) {
      return function() {
        function c(a) {
          var d = j;
          r(a) && (d = E(Array.prototype.slice.call(arguments, 0), 0));
          return i.call(this, d)
        }
        function i(c) {
          return Q.call(j, a, d, e, f, Ie.call(j, h, c))
        }
        c.b = 0;
        c.a = function(a) {
          a = F(a);
          return i.call(this, a)
        };
        return c
      }()
    }
    a.b = 4;
    a.a = function(a) {
      var d = H(a), e = H(J(a)), f = H(J(J(a))), h = H(J(J(J(a)))), a = I(J(J(J(a))));
      return c.call(this, d, e, f, h, a)
    };
    return a
  }(), e = function(e, i, k, q, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, i);
      case 3:
        return c.call(this, e, i, k);
      case 4:
        return a.call(this, e, i, k, q);
      default:
        return f.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  e.b = 4;
  e.a = f.a;
  return e
}();
function Se(a, c) {
  return function e(c, h) {
    return new S(j, l, function() {
      var i = F.call(j, h);
      return u(i) ? D.call(j, a.call(j, c, H.call(j, i)), e.call(j, c + 1, I.call(j, i))) : j
    })
  }.call(j, 0, c)
}
var T = function() {
  function a(a, c, d, f) {
    return new S(j, l, function() {
      var t = F.call(j, c), G = F.call(j, d), C = F.call(j, f);
      return u(u(t) ? u(G) ? C : G : t) ? D.call(j, a.call(j, H.call(j, t), H.call(j, G), H.call(j, C)), e.call(j, a, I.call(j, t), I.call(j, G), I.call(j, C))) : j
    })
  }
  function c(a, c, d) {
    return new S(j, l, function() {
      var f = F.call(j, c), t = F.call(j, d);
      return u(u(f) ? t : f) ? D.call(j, a.call(j, H.call(j, f), H.call(j, t)), e.call(j, a, I.call(j, f), I.call(j, t))) : j
    })
  }
  function d(a, c) {
    return new S(j, l, function() {
      var d = F.call(j, c);
      return u(d) ? D.call(j, a.call(j, H.call(j, d)), e.call(j, a, I.call(j, d))) : j
    })
  }
  var e = j, f = function() {
    function a(d, e, f, h, C) {
      var P = j;
      r(C) && (P = E(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, d, e, f, h, P)
    }
    function c(a, d, f, h, i) {
      return e.call(j, function(c) {
        return Q.call(j, a, c)
      }, function W(a) {
        return new S(j, l, function() {
          var c = e.call(j, F, a);
          return u(Le.call(j, Pe, c)) ? D.call(j, e.call(j, H, c), W.call(j, e.call(j, I, c))) : j
        })
      }.call(j, L.call(j, i, h, f, d)))
    }
    a.b = 4;
    a.a = function(a) {
      var d = H(a), e = H(J(a)), f = H(J(J(a))), h = H(J(J(J(a)))), a = I(J(J(J(a))));
      return c.call(this, d, e, f, h, a)
    };
    return a
  }(), e = function(e, i, k, q, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, i);
      case 3:
        return c.call(this, e, i, k);
      case 4:
        return a.call(this, e, i, k, q);
      default:
        return f.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  e.b = 4;
  e.a = f.a;
  return e
}(), Ue = function Te(c, d) {
  return new S(j, l, function() {
    if(u(0 < c)) {
      var e = F.call(j, d);
      return u(e) ? D.call(j, H.call(j, e), Te.call(j, c - 1, I.call(j, e))) : j
    }
    return j
  })
};
function Ve(a, c) {
  function d(a, c) {
    for(;;) {
      var d = F.call(j, c), i = 0 < a;
      if(u(u(i) ? d : i)) {
        i = a - 1, d = I.call(j, d), a = i, c = d
      }else {
        return d
      }
    }
  }
  return new S(j, l, function() {
    return d.call(j, a, c)
  })
}
function We(a, c) {
  function d(a, c) {
    for(;;) {
      var d = F.call(j, c), i;
      i = d;
      i = u(i) ? a.call(j, H.call(j, d)) : i;
      if(u(i)) {
        i = a, d = I.call(j, d), a = i, c = d
      }else {
        return d
      }
    }
  }
  return new S(j, l, function() {
    return d.call(j, a, c)
  })
}
var Xe = function() {
  function a(a) {
    return new S(j, l, function() {
      return D.call(j, a, c.call(j, a))
    })
  }
  var c = j;
  return c = function(d, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, d);
      case 2:
        return Ue.call(j, d, c.call(j, e))
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Ye = function() {
  function a(a, d) {
    return new S(j, l, function() {
      var h = F.call(j, a), i = F.call(j, d);
      return u(u(h) ? i : h) ? D.call(j, H.call(j, h), D.call(j, H.call(j, i), c.call(j, I.call(j, h), I.call(j, i)))) : j
    })
  }
  var c = j, d = function() {
    function a(c, e, k) {
      var q = j;
      r(k) && (q = E(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, c, e, q)
    }
    function d(a, e, f) {
      return new S(j, l, function() {
        var d = T.call(j, F, L.call(j, f, e, a));
        return u(Le.call(j, Pe, d)) ? Ie.call(j, T.call(j, H, d), Q.call(j, c, T.call(j, I, d))) : j
      })
    }
    a.b = 2;
    a.a = function(a) {
      var c = H(a), e = H(J(a)), a = I(J(a));
      return d.call(this, c, e, a)
    };
    return a
  }(), c = function(c, f, h) {
    switch(arguments.length) {
      case 2:
        return a.call(this, c, f);
      default:
        return d.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  c.b = 2;
  c.a = d.a;
  return c
}();
function Ze(a, c) {
  return Ve.call(j, 1, Ye.call(j, Xe.call(j, a), c))
}
function $e(a) {
  return function d(a, f) {
    return new S(j, l, function() {
      var h = F.call(j, a);
      return u(h) ? D.call(j, H.call(j, h), d.call(j, I.call(j, h), f)) : u(F.call(j, f)) ? d.call(j, H.call(j, f), I.call(j, f)) : j
    })
  }.call(j, j, a)
}
var af = function() {
  var a = j, c = function() {
    function a(c, d, h) {
      var i = j;
      r(h) && (i = E(Array.prototype.slice.call(arguments, 2), 0));
      return $e.call(j, Q.call(j, T, c, d, i))
    }
    a.b = 2;
    a.a = function(a) {
      var c = H(a), d = H(J(a)), a = I(J(a));
      return $e.call(j, Q.call(j, T, c, d, a))
    };
    return a
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return $e.call(j, T.call(j, a, e));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}(), cf = function bf(c, d) {
  return new S(j, l, function() {
    var e = F.call(j, d);
    if(u(e)) {
      var f = H.call(j, e), e = I.call(j, e);
      return u(c.call(j, f)) ? D.call(j, f, bf.call(j, c, e)) : bf.call(j, c, e)
    }
    return j
  })
};
function df(a, c) {
  return cf.call(j, Qe.call(j, a), c)
}
function ef(a, c) {
  return pe.call(j, dd, a, c)
}
var ff = function() {
  function a(a, c, h, i) {
    return new S(j, l, function() {
      var k = F.call(j, i);
      if(u(k)) {
        var q = Ue.call(j, a, k);
        return u(z.call(j, a, M.call(j, q))) ? D.call(j, q, d.call(j, a, c, h, Ve.call(j, c, k))) : B.call(j, Ue.call(j, a, Ie.call(j, q, h)))
      }
      return j
    })
  }
  function c(a, c, h) {
    return new S(j, l, function() {
      var i = F.call(j, h);
      if(u(i)) {
        var k = Ue.call(j, a, i);
        return u(z.call(j, a, M.call(j, k))) ? D.call(j, k, d.call(j, a, c, Ve.call(j, c, i))) : j
      }
      return j
    })
  }
  var d = j;
  return d = function(e, f, h, i) {
    switch(arguments.length) {
      case 2:
        return d.call(j, e, e, f);
      case 3:
        return c.call(this, e, f, h);
      case 4:
        return a.call(this, e, f, h, i)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), U = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return pe.call(j, O, a, c);
      case 3:
        var e;
        a: {
          for(var f = $d, h = a, i = F.call(j, c);;) {
            if(u(i)) {
              h = O.call(j, h, H.call(j, i), f);
              if(u(f === h)) {
                e = d;
                break a
              }
              i = J.call(j, i)
            }else {
              e = h;
              break a
            }
          }
        }
        return e
    }
    b("Invalid arity: " + arguments.length)
  }
}(), hf = function gf(c, d, e) {
  var f = N.call(j, d, 0, j), d = ue.call(j, d, 1);
  return u(d) ? Md.call(j, c, f, gf.call(j, O.call(j, c, f), d, e)) : Md.call(j, c, f, e)
}, jf = function() {
  function a(a, e, f, h) {
    var i = j;
    r(h) && (i = E(Array.prototype.slice.call(arguments, 3), 0));
    return c.call(this, a, e, f, i)
  }
  function c(c, e, f, h) {
    var i = N.call(j, e, 0, j), e = ue.call(j, e, 1);
    return u(e) ? Md.call(j, c, i, Q.call(j, a, O.call(j, c, i), e, f, h)) : Md.call(j, c, i, Q.call(j, f, O.call(j, c, i), h))
  }
  a.b = 3;
  a.a = function(a) {
    var e = H(a), f = H(J(a)), h = H(J(J(a))), a = I(J(J(a)));
    return c.call(this, e, f, h, a)
  };
  return a
}();
function kf(a, c) {
  this.c = a;
  this.e = c
}
n = kf.prototype;
n.k = function(a) {
  return Gd.call(j, a)
};
n.F = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return x.call(j, a, c, j);
      case 3:
        return x.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.V = function(a, c, d) {
  a = ad.call(j, this.e);
  a[c] = d;
  return new kf(this.c, a)
};
n.G = g;
n.p = g;
n.j = function(a, c) {
  var d = ad.call(j, this.e);
  d.push(c);
  return new kf(this.c, d)
};
n.J = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ed.call(j, this.e, c);
      case 3:
        return Ed.call(j, this.e, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.n = function() {
  var a = this;
  return u(0 < a.e.length) ? function d(e) {
    return new S(j, l, function() {
      return u(e < a.e.length) ? D.call(j, a.e[e], d.call(j, e + 1)) : j
    })
  }.call(j, 0) : j
};
n.u = function() {
  return this.e.length
};
n.xa = g;
n.ma = function(a, c, d) {
  return id.call(j, a, c, d)
};
n.d = function(a, c) {
  return Hd.call(j, a, c)
};
n.v = g;
n.r = function(a, c) {
  return new kf(c, this.e)
};
n.l = g;
n.q = m("c");
n.I = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e = 0 <= c;
        return u(u(e) ? c < this.e.length : e) ? this.e[c] : j;
      case 3:
        return e = 0 <= c, u(u(e) ? c < this.e.length : e) ? this.e[c] : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var lf = new kf(j, bd.call(j));
function V(a) {
  return new kf(j, a)
}
kf.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, this, c);
      case 3:
        return y.call(j, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function X(a) {
  return pe.call(j, L, lf, a)
}
var mf = function() {
  function a(a) {
    var d = j;
    r(a) && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return X.call(j, d)
  }
  a.b = 0;
  a.a = function(a) {
    a = F(a);
    return X.call(j, a)
  };
  return a
}();
function nf(a, c, d, e) {
  this.c = a;
  this.U = c;
  this.start = d;
  this.end = e
}
n = nf.prototype;
n.k = function(a) {
  return Gd.call(j, a)
};
n.F = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return x.call(j, a, c, j);
      case 3:
        return x.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.V = function(a, c, d) {
  a = this.start + c;
  return new nf(this.c, id.call(j, this.U, a, d), this.start, this.end > a + 1 ? this.end : a + 1)
};
n.G = g;
n.p = g;
n.j = function(a, c) {
  return new nf(this.c, nd.call(j, this.U, this.end, c), this.start, this.end + 1)
};
n.J = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ed.call(j, a, c);
      case 3:
        return Ed.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.n = function() {
  var a = this;
  return function d(e) {
    return u(z.call(j, e, a.end)) ? j : D.call(j, x.call(j, a.U, e), new S(j, l, function() {
      return d.call(j, e + 1)
    }))
  }.call(j, a.start)
};
n.u = function() {
  return this.end - this.start
};
n.xa = g;
n.ma = function(a, c, d) {
  return id.call(j, a, c, d)
};
n.d = function(a, c) {
  return Hd.call(j, a, c)
};
n.v = g;
n.r = function(a, c) {
  return new nf(c, this.U, this.start, this.end)
};
n.l = g;
n.q = m("c");
n.I = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return x.call(j, this.U, this.start + c);
      case 3:
        return x.call(j, this.U, this.start + c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var of = function() {
  var a = j;
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(j, c, d, M.call(j, c));
      case 3:
        return new nf(j, c, d, e)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
nf.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, this, c);
      case 3:
        return y.call(j, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function pf() {
}
pf.prototype.d = ca(l);
var qf = new pf;
function rf(a, c) {
  return ce.call(j, u(Vd.call(j, c)) ? u(z.call(j, M.call(j, a), M.call(j, c))) ? Le.call(j, Pe, T.call(j, function(a) {
    return z.call(j, O.call(j, c, H.call(j, a), qf), Jd.call(j, a))
  }, a)) : j : j)
}
function sf(a, c, d) {
  for(var e = d.length, f = 0;;) {
    if(u(f < e)) {
      if(u(z.call(j, c, d[f]))) {
        return f
      }
      f += a
    }else {
      return j
    }
  }
}
var tf = function() {
  var a = j;
  return a = function(c, d, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(j, c, d, g, l);
      case 4:
        var h = s.call(j, c);
        return u(u(h) ? d.hasOwnProperty(c) : h) ? e : f
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function uf(a, c, d) {
  this.c = a;
  this.keys = c;
  this.H = d
}
n = uf.prototype;
n.k = function(a) {
  return Gd.call(j, a)
};
n.F = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, a, c, j);
      case 3:
        return tf.call(j, c, this.H, this.H[c], d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.V = function(a, c, d) {
  if(u(s.call(j, c))) {
    var a = Pb.call(j, this.H), e = a.hasOwnProperty(c);
    a[c] = d;
    if(u(e)) {
      return new uf(this.c, this.keys, a)
    }
    d = ad.call(j, this.keys);
    d.push(c);
    return new uf(this.c, d, a)
  }
  return Od.call(j, ef.call(j, Cd.call(j, c, d), F.call(j, a)), this.c)
};
n.ka = function(a, c) {
  return tf.call(j, c, this.H)
};
n.p = g;
n.j = function(a, c) {
  return u(Wd.call(j, c)) ? id.call(j, a, x.call(j, c, 0), x.call(j, c, 1)) : pe.call(j, dd, a, c)
};
n.n = function() {
  var a = this;
  return u(0 < a.keys.length) ? T.call(j, function(c) {
    return mf.call(j, c, a.H[c])
  }, a.keys) : j
};
n.u = function() {
  return this.keys.length
};
n.d = function(a, c) {
  return rf.call(j, a, c)
};
n.v = g;
n.r = function(a, c) {
  return new uf(c, this.keys, this.H)
};
n.l = g;
n.q = m("c");
n.wa = g;
n.la = function(a, c) {
  var d = s.call(j, c);
  if(u(u(d) ? this.H.hasOwnProperty(c) : d)) {
    var d = ad.call(j, this.keys), e = Pb.call(j, this.H);
    d.splice(sf.call(j, 1, c, d), 1);
    Zd.call(j, e, c);
    return new uf(this.c, d, e)
  }
  return a
};
bd.call(j);
function Y(a, c) {
  return new uf(j, a, c)
}
uf.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, this, c);
      case 3:
        return y.call(j, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function vf(a, c, d) {
  this.c = a;
  this.s = c;
  this.z = d
}
n = vf.prototype;
n.k = function(a) {
  return Gd.call(j, a)
};
n.F = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, a, c, j);
      case 3:
        var e = this.z[Qd.call(j, c)], f = u(e) ? sf.call(j, 2, c, e) : j;
        return u(f) ? e[f + 1] : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.V = function(a, c, d) {
  var a = Qd.call(j, c), e = this.z[a];
  if(u(e)) {
    var e = ad.call(j, e), f = Pb.call(j, this.z);
    f[a] = e;
    a = sf.call(j, 2, c, e);
    if(u(a)) {
      return e[a + 1] = d, new vf(this.c, this.s, f)
    }
    e.push(c, d);
    return new vf(this.c, this.s + 1, f)
  }
  e = Pb.call(j, this.z);
  e[a] = bd.call(j, c, d);
  return new vf(this.c, this.s + 1, e)
};
n.ka = function(a, c) {
  var d = this.z[Qd.call(j, c)], d = u(d) ? sf.call(j, 2, c, d) : j;
  return u(d) ? g : l
};
n.p = g;
n.j = function(a, c) {
  return u(Wd.call(j, c)) ? id.call(j, a, x.call(j, c, 0), x.call(j, c, 1)) : pe.call(j, dd, a, c)
};
n.n = function() {
  var a = this;
  if(u(0 < a.s)) {
    var c = Yd.call(j, a.z);
    return af.call(j, function(c) {
      return T.call(j, X, ff.call(j, 2, a.z[c]))
    }, c)
  }
  return j
};
n.u = m("s");
n.d = function(a, c) {
  return rf.call(j, a, c)
};
n.v = g;
n.r = function(a, c) {
  return new vf(c, this.s, this.z)
};
n.l = g;
n.q = m("c");
n.wa = g;
n.la = function(a, c) {
  var d = Qd.call(j, c), e = this.z[d], f = u(e) ? sf.call(j, 2, c, e) : j;
  if(u(K.call(j, f))) {
    return a
  }
  var h = Pb.call(j, this.z);
  u(3 > e.length) ? Zd.call(j, h, d) : (e = ad.call(j, e), e.splice(f, 2), h[d] = e);
  return new vf(this.c, this.s - 1, h)
};
var wf = new vf(j, 0, Xd.call(j));
function xf(a, c) {
  for(var d = a.length, e = 0, f = wf;;) {
    if(u(e < d)) {
      var h = e + 1, f = Md.call(j, f, a[e], c[e]), e = h
    }else {
      return f
    }
  }
}
vf.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, this, c);
      case 3:
        return y.call(j, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var Cd = function() {
  function a(a) {
    var e = j;
    r(a) && (e = E(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, e)
  }
  function c(a) {
    for(var a = F.call(j, a), c = wf;;) {
      if(u(a)) {
        var f = Kd.call(j, a), c = Md.call(j, c, H.call(j, a), Jd.call(j, a)), a = f
      }else {
        return c
      }
    }
  }
  a.b = 0;
  a.a = function(a) {
    a = F(a);
    return c.call(this, a)
  };
  return a
}();
function yf(a) {
  return F.call(j, T.call(j, H, a))
}
function zf(a) {
  return F.call(j, T.call(j, Jd, a))
}
var Af = function() {
  function a(a) {
    var e = j;
    r(a) && (e = E(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, e)
  }
  function c(a) {
    return u(Me.call(j, Pe, a)) ? pe.call(j, function(a, c) {
      return L.call(j, u(a) ? a : Y([], {}), c)
    }, a) : j
  }
  a.b = 0;
  a.a = function(a) {
    a = F(a);
    return c.call(this, a)
  };
  return a
}();
function Bf(a, c) {
  this.c = a;
  this.da = c
}
n = Bf.prototype;
n.k = function(a) {
  return Gd.call(j, a)
};
n.F = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, a, c, j);
      case 3:
        return u(hd.call(j, this.da, c)) ? c : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.p = g;
n.j = function(a, c) {
  return new Bf(this.c, Md.call(j, this.da, c, j))
};
n.n = function() {
  return yf.call(j, this.da)
};
n.gb = g;
n.u = function(a) {
  return M.call(j, F.call(j, a))
};
n.d = function(a, c) {
  var d = Td.call(j, c);
  return u(d) ? (d = z.call(j, M.call(j, a), M.call(j, c)), u(d) ? Le.call(j, function(c) {
    return ie.call(j, a, c)
  }, c) : d) : d
};
n.v = g;
n.r = function(a, c) {
  return new Bf(c, this.da)
};
n.l = g;
n.q = m("c");
var Cf = new Bf(j, Cd.call(j));
Bf.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, this, c);
      case 3:
        return y.call(j, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Df(a) {
  for(var a = F.call(j, a), c = Cf;;) {
    if(u(K.call(j, Rd.call(j, a)))) {
      var d = I.call(j, a), c = L.call(j, c, H.call(j, a)), a = d
    }else {
      return c
    }
  }
}
function Ef(a) {
  for(var c = V([]);;) {
    if(u(J.call(j, a))) {
      c = L.call(j, c, H.call(j, a)), a = J.call(j, a)
    }else {
      return F.call(j, c)
    }
  }
}
function Ff(a) {
  if(u(de.call(j, a))) {
    return a
  }
  var c;
  c = ee.call(j, a);
  c = u(c) ? c : fe.call(j, a);
  if(u(c)) {
    return c = a.lastIndexOf("/"), u(0 > c) ? we.call(j, a, 2) : we.call(j, a, c + 1)
  }
  u("\ufdd0'else") && b(Error(R.call(j, "Doesn't support name: ", a)));
  return j
}
function Gf(a) {
  var c;
  c = ee.call(j, a);
  c = u(c) ? c : fe.call(j, a);
  if(u(c)) {
    return c = a.lastIndexOf("/"), u(-1 < c) ? we.call(j, a, 2, c) : j
  }
  b(Error(R.call(j, "Doesn't support namespace: ", a)))
}
var If = function Hf(c, d) {
  return new S(j, l, function() {
    var e = F.call(j, d);
    return u(e) ? u(c.call(j, H.call(j, e))) ? D.call(j, H.call(j, e), Hf.call(j, c, I.call(j, e))) : j : j
  })
};
function Jf(a, c, d, e) {
  this.c = a;
  this.start = c;
  this.end = d;
  this.step = e
}
n = Jf.prototype;
n.k = function(a) {
  return Gd.call(j, a)
};
n.G = g;
n.p = g;
n.j = function(a, c) {
  return D.call(j, c, a)
};
n.J = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ed.call(j, a, c);
      case 3:
        return Ed.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.n = function(a) {
  return u((u(0 < this.step) ? re : se).call(j, this.start, this.end)) ? a : j
};
n.u = function(a) {
  return u(K.call(j, wd.call(j, a))) ? 0 : Math.ceil.call(j, (this.end - this.start) / this.step)
};
n.P = g;
n.K = m("start");
n.L = function(a) {
  return u(wd.call(j, a)) ? new Jf(this.c, this.start + this.step, this.end, this.step) : B.call(j)
};
n.d = function(a, c) {
  return Hd.call(j, a, c)
};
n.v = g;
n.r = function(a, c) {
  return new Jf(c, this.start, this.end, this.step)
};
n.l = g;
n.q = m("c");
n.I = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(u(c < w.call(j, a))) {
          e = this.start + c * this.step
        }else {
          var f;
          f = this.start > this.end;
          f = u(f) ? z.call(j, this.step, 0) : f;
          u(f) ? e = this.start : b(Error("Index out of bounds"))
        }
        return e;
      case 3:
        return u(c < w.call(j, a)) ? e = this.start + c * this.step : (e = this.start > this.end, e = u(e) ? z.call(j, this.step, 0) : e, e = u(e) ? this.start : d), e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var Kf = function() {
  var a = j;
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 0:
        return a.call(j, 0, Number.MAX_VALUE, 1);
      case 1:
        return a.call(j, 0, c, 1);
      case 2:
        return a.call(j, c, d, 1);
      case 3:
        return new Jf(j, c, d, e)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Lf = function() {
  return function(a, c) {
    switch(arguments.length) {
      case 1:
        var d;
        a: {
          for(var e = a;;) {
            if(u(F.call(j, e))) {
              e = J.call(j, e)
            }else {
              d = j;
              break a
            }
          }
        }
        return d;
      case 2:
        a: {
          d = a;
          for(var f = c;;) {
            var h = F.call(j, f);
            if(u(u(h) ? 0 < d : h)) {
              d -= 1, f = J.call(j, f)
            }else {
              e = j;
              break a
            }
          }
        }
        return e
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Mf = function() {
  return function(a, c) {
    switch(arguments.length) {
      case 1:
        return Lf.call(j, a), a;
      case 2:
        return Lf.call(j, a, c), c
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Nf(a, c) {
  var d = a.exec(c);
  return u(z.call(j, H.call(j, d), c)) ? u(z.call(j, M.call(j, d), 1)) ? H.call(j, d) : X.call(j, d) : j
}
function Of(a, c) {
  var d = a.exec(c);
  return u(A.call(j, d)) ? j : u(z.call(j, M.call(j, d), 1)) ? H.call(j, d) : X.call(j, d)
}
function Pf(a) {
  return RegExp(a)
}
function Qf(a, c, d, e, f, h) {
  return Ie.call(j, V([c]), $e.call(j, Ze.call(j, V([d]), T.call(j, function(c) {
    return a.call(j, c, f)
  }, h))), V([e]))
}
var Sf = function Rf(c, d) {
  return u(A.call(j, c)) ? B.call(j, "nil") : u(ae.call(j, c)) ? B.call(j, "#<undefined>") : u("\ufdd0'else") ? Ie.call(j, u(function() {
    var e = O.call(j, d, "\ufdd0'meta");
    return u(e) ? (u(c) ? (e = c.l, e = u(e) ? K.call(j, c.hasOwnProperty("cljs$core$IMeta$")) : e) : e = c, e = u(e) ? g : $c.call(j, pd, c), u(e) ? Pd.call(j, c) : e) : e
  }()) ? Ie.call(j, V(["^"]), Rf.call(j, Pd.call(j, c), d), V([" "])) : j, u(function() {
    var d;
    u(c) ? (d = c.m, d = u(d) ? K.call(j, c.hasOwnProperty("cljs$core$IPrintable$")) : d) : d = c;
    return u(d) ? g : $c.call(j, yd, c)
  }()) ? zd.call(j, c, d) : B.call(j, "#<", R.call(j, c), ">")) : j
};
function Tf(a, c) {
  var d = H.call(j, a), e = new Na, f = F.call(j, a);
  if(u(f)) {
    for(var h = H.call(j, f);;) {
      u(h === d) || e.append(" ");
      var i = F.call(j, Sf.call(j, h, c));
      if(u(i)) {
        for(h = H.call(j, i);;) {
          if(e.append(h), h = J.call(j, i), u(h)) {
            i = h, h = H.call(j, i)
          }else {
            break
          }
        }
      }
      f = J.call(j, f);
      if(u(f)) {
        h = f, f = H.call(j, h), i = h, h = f, f = i
      }else {
        break
      }
    }
  }
  return R.call(j, e)
}
function Uf() {
  return Y(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":g, "\ufdd0'readably":g, "\ufdd0'meta":l, "\ufdd0'dup":l})
}
var Vf = function() {
  function a(a) {
    var d = j;
    r(a) && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return Tf.call(j, d, Uf.call(j))
  }
  a.b = 0;
  a.a = function(a) {
    a = F(a);
    return Tf.call(j, a, Uf.call(j))
  };
  return a
}();
vf.prototype.m = g;
vf.prototype.f = function(a, c) {
  return Qf.call(j, function(a) {
    return Qf.call(j, Sf, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
yd.number = g;
zd.number = function(a) {
  return B.call(j, R.call(j, a))
};
Fd.prototype.m = g;
Fd.prototype.f = function(a, c) {
  return Qf.call(j, Sf, "(", " ", ")", c, a)
};
nf.prototype.m = g;
nf.prototype.f = function(a, c) {
  return Qf.call(j, Sf, "[", " ", "]", c, a)
};
S.prototype.m = g;
S.prototype.f = function(a, c) {
  return Qf.call(j, Sf, "(", " ", ")", c, a)
};
yd["boolean"] = g;
zd["boolean"] = function(a) {
  return B.call(j, R.call(j, a))
};
Bf.prototype.m = g;
Bf.prototype.f = function(a, c) {
  return Qf.call(j, Sf, "#{", " ", "}", c, a)
};
yd.string = g;
zd.string = function(a, c) {
  return u(ee.call(j, a)) ? B.call(j, R.call(j, ":", function() {
    var c = Gf.call(j, a);
    return u(c) ? R.call(j, c, "/") : j
  }(), Ff.call(j, a))) : u(fe.call(j, a)) ? B.call(j, R.call(j, function() {
    var c = Gf.call(j, a);
    return u(c) ? R.call(j, c, "/") : j
  }(), Ff.call(j, a))) : u("\ufdd0'else") ? B.call(j, u("\ufdd0'readably".call(j, c)) ? Aa.call(j, a) : a) : j
};
kf.prototype.m = g;
kf.prototype.f = function(a, c) {
  return Qf.call(j, Sf, "[", " ", "]", c, a)
};
Ae.prototype.m = g;
Ae.prototype.f = function(a, c) {
  return Qf.call(j, Sf, "(", " ", ")", c, a)
};
yd.array = g;
zd.array = function(a, c) {
  return Qf.call(j, Sf, "#<Array [", ", ", "]>", c, a)
};
Be.prototype.m = g;
Be.prototype.f = function() {
  return B.call(j, "()")
};
De.prototype.m = g;
De.prototype.f = function(a, c) {
  return Qf.call(j, Sf, "(", " ", ")", c, a)
};
Jf.prototype.m = g;
Jf.prototype.f = function(a, c) {
  return Qf.call(j, Sf, "(", " ", ")", c, a)
};
uf.prototype.m = g;
uf.prototype.f = function(a, c) {
  return Qf.call(j, function(a) {
    return Qf.call(j, Sf, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
function Wf(a, c, d, e) {
  this.state = a;
  this.c = c;
  this.qb = d;
  this.ta = e
}
n = Wf.prototype;
n.za = function(a, c, d) {
  var e = F.call(j, this.ta);
  if(u(e)) {
    var f = H.call(j, e);
    N.call(j, f, 0, j);
    for(N.call(j, f, 1, j);;) {
      var h = f, f = N.call(j, h, 0, j), h = N.call(j, h, 1, j);
      h.call(j, f, a, c, d);
      e = J.call(j, e);
      if(u(e)) {
        f = e, e = H.call(j, f), h = f, f = e, e = h
      }else {
        return j
      }
    }
  }else {
    return j
  }
};
n.ya = function(a, c, d) {
  return a.ta = Md.call(j, this.ta, c, d)
};
n.m = g;
n.f = function(a, c) {
  return Ie.call(j, V(["#<Atom: "]), zd.call(j, this.state, c), ">")
};
n.l = g;
n.q = m("c");
n.fb = m("state");
n.d = function(a, c) {
  return a === c
};
var Xf = function() {
  var a = j, c = function() {
    function a(d, h) {
      var i = j;
      r(h) && (i = E(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, d, i)
    }
    function c(a, d) {
      var e = u(be.call(j, d)) ? Q.call(j, Cd, d) : d, k = O.call(j, e, "\ufdd0'validator"), e = O.call(j, e, "\ufdd0'meta");
      return new Wf(a, e, k, j)
    }
    a.b = 1;
    a.a = function(a) {
      var d = H(a), a = I(a);
      return c.call(this, d, a)
    };
    return a
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return new Wf(a, j, j, j);
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 1;
  a.a = c.a;
  return a
}();
function Yf(a, c) {
  var d = a.qb;
  u(d) && !u(d.call(j, c)) && b(Error(R.call(j, "Assert failed: ", "Validator rejected reference state", "\n", Vf.call(j, Od(B("\ufdd1'validate", "\ufdd1'new-value"), Cd("\ufdd0'line", 3019))))));
  d = a.state;
  a.state = c;
  Ad.call(j, a, d, c);
  return c
}
var Zf = function() {
  var a = j, c = function() {
    function a(c, d, h, i, k, q) {
      var t = j;
      r(q) && (t = E(Array.prototype.slice.call(arguments, 5), 0));
      return Yf.call(j, c, Q.call(j, d, c.state, h, i, k, t))
    }
    a.b = 5;
    a.a = function(a) {
      var c = H(a), d = H(J(a)), i = H(J(J(a))), k = H(J(J(J(a)))), q = H(J(J(J(J(a))))), a = I(J(J(J(J(a)))));
      return Yf.call(j, c, Q.call(j, d, c.state, i, k, q, a))
    };
    return a
  }(), a = function(a, e, f, h, i, k) {
    switch(arguments.length) {
      case 2:
        return Yf.call(j, a, e.call(j, a.state));
      case 3:
        return Yf.call(j, a, e.call(j, a.state, f));
      case 4:
        return Yf.call(j, a, e.call(j, a.state, f, h));
      case 5:
        return Yf.call(j, a, e.call(j, a.state, f, h, i));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 5;
  a.a = c.a;
  return a
}();
function Z(a) {
  return od.call(j, a)
}
function $f(a, c, d) {
  return Bd.call(j, a, c, d)
}
Xf.call(j, function() {
  return Y(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":Y([], {}), "\ufdd0'descendants":Y([], {}), "\ufdd0'ancestors":Y([], {})})
}.call(j));
function ag(a) {
  var c = Xd.call(j), a = F.call(j, a);
  if(u(a)) {
    var d = H.call(j, a);
    N.call(j, d, 0, j);
    for(N.call(j, d, 1, j);;) {
      var e = d, d = N.call(j, e, 0, j), e = N.call(j, e, 1, j);
      c[Ff.call(j, d)] = e;
      a = J.call(j, a);
      if(u(a)) {
        d = a, a = H.call(j, d), e = d, d = a, a = e
      }else {
        break
      }
    }
  }
  return c
}
var bg = function() {
  var a = j;
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        var e = u(Vd.call(j, c)) ? ag.call(j, c) : c;
        console.log(e);
        return c;
      case 2:
        return a.call(j, Y(["\ufdd0'msg", "\ufdd0'data"], {"\ufdd0'msg":c, "\ufdd0'data":d})), d
    }
    b("Invalid arity: " + arguments.length)
  }
}(), cg = function() {
  var a = j;
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        return bg.call(j, Vf.call(j, c)), c;
      case 2:
        return a.call(j, Y(["\ufdd0'msg", "\ufdd0'data"], {"\ufdd0'msg":c, "\ufdd0'data":d})), d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var dg = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Pe.call(j, c), U.call(j, a, c);
      case 3:
        return Pe.call(j, c), U.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function eg(a) {
  if(u(u(a) ? a.Ga : a)) {
    a = a.Ga(a)
  }else {
    var c;
    var d = eg[p.call(j, a)];
    u(d) ? c = d : (d = eg._, u(d) ? c = d : b(v.call(j, "TemplateBinding.name", a)));
    a = c.call(j, a)
  }
  return a
}
function fg(a, c) {
  var d;
  if(u(u(a) ? a.Ca : a)) {
    d = a.Ca(a, c)
  }else {
    var e = fg[p.call(j, a)];
    u(e) ? d = e : (e = fg._, u(e) ? d = e : b(v.call(j, "TemplateBinding.bound-path", a)));
    d = d.call(j, a, c)
  }
  return d
}
function gg(a) {
  if(u(u(a) ? a.Ha : a)) {
    a = a.Ha(a)
  }else {
    var c;
    var d = gg[p.call(j, a)];
    u(d) ? c = d : (d = gg._, u(d) ? c = d : b(v.call(j, "TemplateBinding.placeholder?", a)));
    a = c.call(j, a)
  }
  return a
}
function hg(a) {
  if(u(u(a) ? a.Ea : a)) {
    a = a.Ea(a)
  }else {
    var c;
    var d = hg[p.call(j, a)];
    u(d) ? c = d : (d = hg._, u(d) ? c = d : b(v.call(j, "TemplateBinding.find-placeholders", a)));
    a = c.call(j, a)
  }
  return a
}
function ig(a, c) {
  var d;
  if(u(u(a) ? a.Ia : a)) {
    d = a.Ia(a, c)
  }else {
    var e = ig[p.call(j, a)];
    u(e) ? d = e : (e = ig._, u(e) ? d = e : b(v.call(j, "TemplateBinding.render", a)));
    d = d.call(j, a, c)
  }
  return d
}
function jg(a) {
  if(u(u(a) ? a.Fa : a)) {
    a = a.Fa(a)
  }else {
    var c;
    var d = jg[p.call(j, a)];
    u(d) ? c = d : (d = jg._, u(d) ? c = d : b(v.call(j, "TemplateBinding.find-templates", a)));
    a = c.call(j, a)
  }
  return a
}
function kg(a, c) {
  var d;
  if(u(u(a) ? a.Da : a)) {
    d = a.Da(a, c)
  }else {
    var e = kg[p.call(j, a)];
    u(e) ? d = e : (e = kg._, u(e) ? d = e : b(v.call(j, "TemplateBinding.deactivate!", a)));
    d = d.call(j, a, c)
  }
  return d
}
function lg(a, c, d) {
  if(u(u(a) ? a.Ja : a)) {
    a = a.Ja(a, c, d)
  }else {
    var e;
    var f = lg[p.call(j, a)];
    u(f) ? e = f : (f = lg._, u(f) ? e = f : b(v.call(j, "TemplateBinding.updated!", a)));
    a = e.call(j, a, c, d)
  }
  return a
}
;function mg(a, c) {
  var d;
  if(u(u(a) ? a.Oa : a)) {
    d = a.Oa(a, c)
  }else {
    var e = mg[p.call(j, a)];
    u(e) ? d = e : (e = mg._, u(e) ? d = e : b(v.call(j, "MutableTree.append!", a)));
    d = d.call(j, a, c)
  }
  return d
}
function ng(a, c, d) {
  if(u(u(a) ? a.Ra : a)) {
    a = a.Ra(a, c, d)
  }else {
    var e;
    var f = ng[p.call(j, a)];
    u(f) ? e = f : (f = ng._, u(f) ? e = f : b(v.call(j, "MutableTree.insert-at!", a)));
    a = e.call(j, a, c, d)
  }
  return a
}
function og(a) {
  if(u(u(a) ? a.Qa : a)) {
    a = a.Qa(a)
  }else {
    var c;
    var d = og[p.call(j, a)];
    u(d) ? c = d : (d = og._, u(d) ? c = d : b(v.call(j, "MutableTree.get-children", a)));
    a = c.call(j, a)
  }
  return a
}
function pg(a) {
  if(u(u(a) ? a.Pa : a)) {
    a = a.Pa(a)
  }else {
    var c;
    var d = pg[p.call(j, a)];
    u(d) ? c = d : (d = pg._, u(d) ? c = d : b(v.call(j, "MutableTree.child-count", a)));
    a = c.call(j, a)
  }
  return a
}
;var qg = function() {
  function a(a, d, e) {
    var f = j;
    r(e) && (f = E(Array.prototype.slice.call(arguments, 2), 0));
    return df.call(j, a, Q.call(j, Re.call(j, T, d), f))
  }
  a.b = 2;
  a.a = function(a) {
    var d = H(a), e = H(J(a)), a = I(J(a));
    return df.call(j, d, Q.call(j, Re.call(j, T, e), a))
  };
  return a
}(), rg = function() {
  function a(a, d, e) {
    var f = j;
    r(e) && (f = E(Array.prototype.slice.call(arguments, 2), 0));
    return Q.call(j, Ie, Q.call(j, Re.call(j, qg, a, d), f))
  }
  a.b = 2;
  a.a = function(a) {
    var d = H(a), e = H(J(a)), a = I(J(a));
    return Q.call(j, Ie, Q.call(j, Re.call(j, qg, d, e), a))
  };
  return a
}();
function sg(a, c, d) {
  return df.call(j, a, Se.call(j, c, d))
}
function tg(a, c) {
  for(;;) {
    if(u(K.call(j, F.call(j, c)))) {
      return g
    }
    var d = H.call(j, a), e = H.call(j, c);
    if(u(z.call(j, d, e))) {
      d = I.call(j, a), e = I.call(j, c), a = d, c = e
    }else {
      return l
    }
  }
}
function ug(a, c) {
  return sg.call(j, A, function(c, e) {
    return u(a.call(j, c)) ? e : j
  }, c)
}
function vg(a, c) {
  return ug.call(j, Qe.call(j, a), c)
}
function wg(a, c) {
  return vg.call(j, function(c) {
    return a.call(j, c)
  }, c)
}
;function xg(a, c, d) {
  if(u(de.call(j, c))) {
    return a.replace(RegExp(Ca.call(j, c), "g"), d)
  }
  if(u(c.hasOwnProperty("source"))) {
    return a.replace(RegExp(c.source, "g"), d)
  }
  u("\ufdd0'else") && b(R.call(j, "Invalid match arg: ", c));
  return j
}
var yg = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return X.call(j, R.call(j, a).split(c));
      case 3:
        var e;
        a: {
          if(u(1 > d)) {
            e = X.call(j, R.call(j, a).split(c))
          }else {
            for(var f = a, h = d, i = V([]);;) {
              if(u(z.call(j, h, 1))) {
                e = L.call(j, i, f);
                break a
              }
              var k = Of.call(j, c, f);
              if(u(k)) {
                var q = k, k = f.indexOf(q), q = f.substring(k + M.call(j, q)), h = h - 1, i = L.call(j, i, f.substring(0, k)), f = q
              }else {
                e = L.call(j, i, f);
                break a
              }
            }
          }
        }
        return e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function zg(a, c) {
  return ef.call(j, Y([], {}), T.call(j, function(c) {
    var e = N.call(j, c, 0, j), c = N.call(j, c, 1, j);
    return V([e, a.call(j, c)])
  }, c))
}
function Ag(a, c) {
  return u(Vd.call(j, a)) ? Nd.call(j, a, c) : u(Wd.call(j, a)) ? X.call(j, Ie.call(j, of.call(j, a, 0, c), of.call(j, a, c + 1))) : u(be.call(j, a)) ? Ie.call(j, Ue.call(j, c, a), Ve.call(j, c + 1, a)) : j
}
var Cg = function Bg(c, d) {
  var e = N.call(j, d, 0, j), f = ue.call(j, d, 1);
  if(u(f)) {
    var h = O.call(j, c, e);
    return u(h) ? (f = Bg.call(j, h, f), u(F.call(j, f)) ? Md.call(j, c, e, f) : Ag.call(j, c, e)) : c
  }
  return Ag.call(j, c, e)
};
var Dg = function() {
  function a(a, c, f) {
    for(;;) {
      if(u(K.call(j, F.call(j, a)))) {
        return zg.call(j, Ce, f)
      }
      var h = a, i = N.call(j, h, 0, j), h = ue.call(j, h, 1), a = jf.call(j, f, V([i]), function(a, c) {
        return function(a) {
          return u(A.call(j, a)) ? B.call(j, c) : D.call(j, c, a)
        }
      }(a, c, f)), c = c + 1, f = a, a = h
    }
  }
  var c = j;
  return c = function(d, e, f) {
    switch(arguments.length) {
      case 1:
        return c.call(j, d, 0, Y([], {}));
      case 3:
        return a.call(this, d, e, f)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Eg(a, c, d, e) {
  for(;;) {
    if(u(K.call(j, F.call(j, a)))) {
      return Y(["\ufdd0'new-list-changes", "\ufdd0'old-list-deletes"], {"\ufdd0'new-list-changes":e, "\ufdd0'old-list-deletes":af.call(j, Jd, d)})
    }
    var f = N.call(j, a, 0, j), a = ue.call(j, a, 1), h = O.call(j, d, f);
    if(u(h)) {
      var i = h, h = N.call(j, i, 0, j), i = ue.call(j, i, 1), e = Md.call(j, e, c, V([u(z.call(j, h, c)) ? "\ufdd0'unchanged" : "\ufdd0'move", h])), d = Md.call(j, d, f, i)
    }else {
      e = Md.call(j, e, c, V(["\ufdd0'insert", f]))
    }
    c += 1
  }
}
function Fg(a, c) {
  var d = Dg.call(j, a);
  return Eg.call(j, c, 0, d, Y([], {}))
}
;function Gg(a, c, d) {
  return K.call(j, z.call(j, U.call(j, a, c), d))
}
function Hg(a, c) {
  return Y(["\ufdd0'result", "\ufdd0'removed-indices"], {"\ufdd0'result":wg.call(j, a, c), "\ufdd0'removed-indices":a})
}
function Ig(a, c, d, e) {
  return Od.call(j, Q.call(j, Re.call(j, jf, a, c, d), e), Y(["\ufdd0'update-path", "\ufdd0'action", "\ufdd0'update-by"], {"\ufdd0'update-path":c, "\ufdd0'action":"\ufdd0'update", "\ufdd0'update-by":"\ufdd0'user/unspecified"}))
}
function Jg(a, c, d) {
  return Od.call(j, hf.call(j, a, c, d), Y(["\ufdd0'update-path", "\ufdd0'action", "\ufdd0'update-by"], {"\ufdd0'update-path":c, "\ufdd0'action":"\ufdd0'set", "\ufdd0'update-by":"\ufdd0'user/unspecified"}))
}
function Kg(a, c, d, e) {
  var f = U.call(j, a, c), d = d.call(j, e, f), e = u(be.call(j, d)) ? Q.call(j, Cd, d) : d, d = O.call(j, e, "\ufdd0'removed-indices"), e = O.call(j, e, "\ufdd0'result");
  return Od.call(j, hf.call(j, a, c, X.call(j, e)), Y(["\ufdd0'update-path", "\ufdd0'action", "\ufdd0'removed-indices", "\ufdd0'update-by"], {"\ufdd0'update-path":c, "\ufdd0'action":"\ufdd0'list-remove", "\ufdd0'removed-indices":d, "\ufdd0'update-by":"\ufdd0'user/unspecified"}))
}
var Lg = function() {
  function a(a, d, e, f) {
    var h = j;
    r(f) && (h = E(Array.prototype.slice.call(arguments, 3), 0));
    return Zf.call(j, a, Ig, d, e, h)
  }
  a.b = 3;
  a.a = function(a) {
    var d = H(a), e = H(J(a)), f = H(J(J(a))), a = I(J(J(a)));
    return Zf.call(j, d, Ig, e, f, a)
  };
  return a
}();
function Mg(a, c, d) {
  return Zf.call(j, a, Jg, c, d)
}
function Ng(a, c, d) {
  return u(Gg.call(j, Z.call(j, a), c, d)) ? Zf.call(j, a, Jg, c, d) : j
}
function Og(a, c, d) {
  return Zf.call(j, a, Kg, c, Hg, d)
}
;var Qg = function Pg(c, d, e, f) {
  var h = eg.call(j, c), e = fg.call(j, c, e);
  if(!u(K.call(j, gg.call(j, c)))) {
    var i = ig.call(j, c, d);
    lg.call(j, c, i, d);
    c = i
  }
  h = "\ufdd0'node-updater!".call(j, "\ufdd0'templates".call(j, d).call(j, h));
  u(h) && h.call(j, c, d, e, f);
  c = F.call(j, hg.call(j, c));
  if(u(c)) {
    for(h = H.call(j, c);;) {
      if(Pg.call(j, h, d, e, f), h = J.call(j, c), u(h)) {
        c = h, h = H.call(j, c)
      }else {
        return j
      }
    }
  }else {
    return j
  }
};
function Rg(a) {
  if(u(u(a) ? a.Na : a)) {
    a = a.Na(a)
  }else {
    var c;
    var d = Rg[p.call(j, a)];
    u(d) ? c = d : (d = Rg._, u(d) ? c = d : b(v.call(j, "Identifiable.id", a)));
    a = c.call(j, a)
  }
  return a
}
;function Sg(a, c) {
  return U.call(j, a, V(["\ufdd0'node-paths", c]))
}
function Tg(a, c) {
  return jf.call(j, a, V(["\ufdd0'node-paths"]), Nd, c)
}
function Ug(a, c) {
  var d = U.call(j, a, V(["\ufdd0'updaters", "\ufdd0'data-paths", "\ufdd0'ANY"]));
  return rg.call(j, A, function(a) {
    var d = N.call(j, a, 0, j), a = N.call(j, a, 1, j);
    return u(tg.call(j, c, d)) ? zf.call(j, a) : j
  }, d)
}
function Vg(a, c) {
  var d = U.call(j, a, V(["\ufdd0'updaters", "\ufdd0'data-paths", "\ufdd0'EXACT", c]));
  return u(d) ? zf.call(j, d) : j
}
function Wg(a, c) {
  return Ie.call(j, Vg.call(j, a, c), Ug.call(j, a, c))
}
function Xg(a, c) {
  return U.call(j, a, V(["\ufdd0'updaters", "\ufdd0'node-paths", c, "\ufdd0'primary-data-path"]))
}
function Yg(a, c, d) {
  return Cg.call(j, Cg.call(j, a, V(["\ufdd0'data-paths", "\ufdd0'EXACT", c, d])), V(["\ufdd0'data-paths", "\ufdd0'ANY", c, d]))
}
function Zg(a, c) {
  var d = Rg.call(j, c), e = Sg.call(j, a, d);
  if(u(e)) {
    var f = Tg.call(j, a, d), e = "\ufdd0'data-paths".call(j, e);
    N.call(j, e, 0, j);
    ue.call(j, e, 1);
    for(var h = e, e = f;;) {
      f = N.call(j, h, 0, j);
      h = ue.call(j, h, 1);
      if(u(A.call(j, f))) {
        return e
      }
      e = f = Yg.call(j, e, f, d)
    }
  }else {
    return a
  }
}
function $g(a, c, d, e, f) {
  for(;;) {
    var h = N.call(j, d, 0, j), d = ue.call(j, d, 1);
    if(u(A.call(j, h))) {
      return a
    }
    a = hf.call(j, a, V(["\ufdd0'data-paths", c, h, e]), f)
  }
}
function ah(a, c, d, e, f, h) {
  d = Rg.call(j, d);
  h = Y(["\ufdd0'lookup-type", "\ufdd0'data-paths", "\ufdd0'primary-data-path", "\ufdd0'update-fn!"], {"\ufdd0'lookup-type":e, "\ufdd0'data-paths":f, "\ufdd0'primary-data-path":H.call(j, f), "\ufdd0'update-fn!":h});
  a = hf.call(j, Zg.call(j, a, c), V(["\ufdd0'node-paths", d]), h);
  return $g.call(j, a, e, f, d, h)
}
function bh(a, c, d) {
  var e = Rg.call(j, c), f = "\ufdd0'data-paths".call(j, U.call(j, a, V(["\ufdd0'node-paths", e]))), h = N.call(j, f, 0, j), f = ue.call(j, f, 1), i = M.call(j, h), h = D.call(j, d, T.call(j, function(a) {
    return X.call(j, Ie.call(j, d, Ve.call(j, i, a)))
  }, f)), f = Sg.call(j, a, e), e = "\ufdd0'lookup-type".call(j, f), f = "\ufdd0'update-fn!".call(j, f);
  return ah.call(j, a, c, c, e, h, f)
}
function ch(a, c, d, e, f, h, i) {
  h = D.call(j, f, T.call(j, function(a) {
    return X.call(j, Ie.call(j, f, a))
  }, h));
  return Lg.call(j, a, V(["\ufdd0'updaters"]), ah, c, d, e, h, i)
}
function dh(a, c, d) {
  return Lg.call(j, a, V(["\ufdd0'updaters"]), bh, c, d)
}
function eh(a, c) {
  return Lg.call(j, a, V(["\ufdd0'updaters"]), Zg, c)
}
function fh(a, c, d) {
  var e = Z.call(j, "\ufdd0'mirror-state".call(j, a)), a = "\ufdd0'update-path".call(j, Pd.call(j, d)), e = Wg.call(j, e, a);
  if(u(e)) {
    if(a = F.call(j, e), u(a)) {
      var e = H.call(j, a), f = u(be.call(j, e)) ? Q.call(j, Cd, e) : e;
      O.call(j, f, "\ufdd0'primary-data-path");
      for(O.call(j, f, "\ufdd0'update-fn!");;) {
        if(f = u(be.call(j, e)) ? Q.call(j, Cd, e) : e, e = O.call(j, f, "\ufdd0'primary-data-path"), f = O.call(j, f, "\ufdd0'update-fn!"), f.call(j, e, c, d), a = J.call(j, a), u(a)) {
          e = a, a = H.call(j, e), f = e, e = a, a = f
        }else {
          return j
        }
      }
    }else {
      return j
    }
  }else {
    return cg.call(j, "No update-functions for updated path: ", a)
  }
}
;function gh(a, c, d, e) {
  var d = L.call(j, d, e), e = M.call(j, d), f = F.call(j, jg.call(j, c));
  if(u(f)) {
    for(var h = H.call(j, f);;) {
      var i = Rg.call(j, h), i = Xg.call(j, Z.call(j, a), i), i = Ve.call(j, e, i), i = u(F.call(j, i)) ? Q.call(j, Re.call(j, L, d), i) : d;
      dh.call(j, a, h, i);
      h = J.call(j, f);
      if(u(h)) {
        f = h, h = H.call(j, f)
      }else {
        break
      }
    }
  }
  return c
}
function hh(a, c, d, e) {
  if(u(e)) {
    var f = Q.call(j, te, e), h = og.call(j, d), i = function() {
      for(var a = f, c = f, d = Ve.call(j, f, h), i = V([]);;) {
        if(u(K.call(j, F.call(j, d)))) {
          return Ce.call(j, i)
        }
        var k = d, d = N.call(j, k, 0, j), W = ue.call(j, k, 1);
        u(e.call(j, a)) ? (k = W, i = D.call(j, V(["\ufdd0'remove", d, a]), i), a += 1, d = k) : (k = c + 1, i = D.call(j, V(["\ufdd0'path-change", d, c]), i), a += 1, c = k, d = W)
      }
    }(), d = function(d) {
      var e = N.call(j, d, 0, j), f = N.call(j, d, 1, j), d = N.call(j, d, 2, j);
      return u(z.call(j, "\ufdd0'remove", e)) ? kg.call(j, f, a) : u(z.call(j, "\ufdd0'path-change", e)) ? gh.call(j, "\ufdd0'mirror-state".call(j, a), f, c, d) : j
    }, k = F.call(j, i);
    if(u(k)) {
      for(i = H.call(j, k);;) {
        if(d.call(j, i), i = J.call(j, k), u(i)) {
          k = i, i = H.call(j, k)
        }else {
          return j
        }
      }
    }else {
      return j
    }
  }else {
    return j
  }
}
function ih(a, c, d, e, f, h) {
  var i = pg.call(j, e), i = F.call(j, Kf.call(j, i, i + h));
  if(u(i)) {
    for(h = H.call(j, i);;) {
      if(h = a.call(j, c, d, f, h), mg.call(j, e, h), h = J.call(j, i), u(h)) {
        i = h, h = H.call(j, i)
      }else {
        return j
      }
    }
  }else {
    return j
  }
}
function jh(a, c, d, e, f, h) {
  function i(f) {
    var i = N.call(j, f, 0, j), k = N.call(j, f, 1, j), f = N.call(j, k, 0, j), q = N.call(j, k, 1, j), k = t.call(j, i), f = u(z.call(j, f, "\ufdd0'insert")) ? function() {
      var e = a.call(j, c, d, h, i);
      Qg.call(j, e, c, d, h);
      return e
    }() : u(z.call(j, f, "\ufdd0'move")) ? function() {
      var a = t.call(j, q);
      gh.call(j, "\ufdd0'mirror-state".call(j, c), a, d, i);
      return a
    }() : u(z.call(j, f, "\ufdd0'unchanged")) ? k : j;
    return u(K.call(j, k)) ? mg.call(j, e, f) : u(Ke.call(j, k, f)) ? ng.call(j, e, f, i) : j
  }
  var k = U.call(j, h, d), f = U.call(j, f, d), q = og.call(j, e), t = X.call(j, q), k = Fg.call(j, f, k), k = u(be.call(j, k)) ? Q.call(j, Cd, k) : k, f = O.call(j, k, "\ufdd0'old-list-deletes"), k = O.call(j, k, "\ufdd0'new-list-changes"), q = F.call(j, f);
  if(u(q)) {
    for(f = H.call(j, q);;) {
      if(f = t.call(j, f), kg.call(j, f, c), f = J.call(j, q), u(f)) {
        q = f, f = H.call(j, q)
      }else {
        break
      }
    }
  }
  k = We.call(j, function(a) {
    return z.call(j, "\ufdd0'unchanged", H.call(j, Jd.call(j, a)))
  }, oe.call(j, H, k));
  f = F.call(j, k);
  if(u(f)) {
    for(k = H.call(j, f);;) {
      if(i.call(j, k), k = J.call(j, f), u(k)) {
        f = k, k = H.call(j, f)
      }else {
        return j
      }
    }
  }else {
    return j
  }
}
function kh(a, c, d, e, f, h) {
  var i = Pd.call(j, h), k = "\ufdd0'action".call(j, i);
  u(z.call(j, k, "\ufdd0'list-remove")) ? (a = "\ufdd0'removed-indices".call(j, Pd.call(j, h)), hh.call(j, c, e, d, a)) : u(z.call(j, k, "\ufdd0'list-append")) ? (f = M.call(j, "\ufdd0'appended".call(j, i)), ih.call(j, a, c, e, d, h, f)) : u("\ufdd0'else") && jh.call(j, a, c, e, d, f, h);
  return d
}
;var mh = function lh(c, d, e, f, h, i, k, q) {
  k = c.call(j, d, i, k, q);
  c = Re.call(j, lh, c, k, e, f, h);
  ch.call(j, "\ufdd0'mirror-state".call(j, h), d, k, e, i, f, c);
  lg.call(j, d, k, h);
  return k
}, oh = function nh(c, d, e, f, h, i) {
  h = kh.call(j, c, e, d, f, h, i);
  c = Re.call(j, nh, c, h, e);
  ch.call(j, "\ufdd0'mirror-state".call(j, e), d, h, "\ufdd0'EXACT", f, j, c);
  lg.call(j, d, h, e);
  return h
};
function qh(a, c, d, e, f, h, i) {
  return mh.call(j, a, c, d, j, e, f, h, i)
}
;function rh(a) {
  return function(c, d, e, f) {
    return qh.call(j, a, c, "\ufdd0'ANY", d, e, j, f)
  }
}
function sh(a, c, d, e) {
  var f = Y(["\ufdd0'app-state", "\ufdd0'mirror-state", "\ufdd0'templates"], {"\ufdd0'app-state":c, "\ufdd0'mirror-state":Xf.call(j, Y([], {})), "\ufdd0'templates":e});
  Qg.call(j, d, f, V([]), Z.call(j, c));
  return $f.call(j, c, a, function(a, c, d, e) {
    return fh.call(j, f, d, e)
  })
}
;function th(a, c) {
  return(new Vc(a, c)).start()
}
var vh = function uh(c, d) {
  var e = c.call(j);
  return u(K.call(j, z.call(j, "\ufdd0'stop", e))) ? th.call(j, function() {
    return uh.call(j, c, d)
  }, d) : j
};
function wh(a, c) {
  if(u(c)) {
    var d = F.call(j, Kf.call(j, c.length));
    if(u(d)) {
      for(var e = H.call(j, d);;) {
        if(a.call(j, c[e]), e = J.call(j, d), u(e)) {
          d = e, e = H.call(j, d)
        }else {
          return j
        }
      }
    }else {
      return j
    }
  }else {
    return j
  }
}
function xh(a, c) {
  return u(c) ? function e(f) {
    return new S(j, l, function() {
      for(;;) {
        if(u(F.call(j, f))) {
          var h = H.call(j, f);
          return D.call(j, a.call(j, c[h]), e.call(j, I.call(j, f)))
        }
        return j
      }
    })
  }.call(j, Kf.call(j, c.length)) : j
}
function yh(a) {
  return Mf.call(j, xh.call(j, Pe, a))
}
var zh = function() {
  var a = j;
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(j, c, d, 0);
      case 3:
        var f;
        a: {
          for(var h = e;;) {
            if(u(h < d.length)) {
              var i = d[h];
              if(u(c.call(j, i))) {
                f = V([h, i]);
                break a
              }
              h += 1
            }else {
              f = j;
              break a
            }
          }
        }
        return f
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Ah(a, c) {
  var d = zh.call(j, a, c);
  return u(d) ? Jd.call(j, d) : j
}
;function Bh(a, c) {
  return yh.call(j, sc.call(j, a, c))
}
function Ch(a, c) {
  var d = Bh.call(j, a, c);
  return u(qc.call(j, c, a)) ? D.call(j, c, d) : d
}
function Dh(a, c) {
  return vc.call(j, a, c)
}
function Eh(a) {
  return Yc.call(j, a, "bindId")
}
function Fh(a) {
  return sc.call(j, "bind", a)
}
function Gh(a, c) {
  var d = Fh.call(j, c);
  return Ah.call(j, function(c) {
    return z.call(j, a, Eh.call(j, c))
  }, d)
}
;function Hh(a) {
  return u(Sd.call(j, a)) ? a : V([a])
}
var Ih = function() {
  var a = j;
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 2:
        var f;
        if(u(K.call(j, Vd.call(j, d)))) {
          f = c.getAttribute(Ff.call(j, d))
        }else {
          f = F.call(j, d);
          if(u(f)) {
            var h = H.call(j, f);
            N.call(j, h, 0, j);
            for(N.call(j, h, 1, j);;) {
              var i = h, h = N.call(j, i, 0, j), i = N.call(j, i, 1, j);
              a.call(j, c, h, i);
              f = J.call(j, f);
              if(u(f)) {
                h = f, f = H.call(j, h), i = h, h = f, f = i
              }else {
                break
              }
            }
          }
          f = c
        }
        return f;
      case 3:
        h = F.call(j, Hh.call(j, c));
        if(u(h)) {
          for(f = H.call(j, h);;) {
            if(f.setAttribute(Ff.call(j, d), e), f = J.call(j, h), u(f)) {
              h = f, f = H.call(j, h)
            }else {
              break
            }
          }
        }
        return c
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var Jh = Y(["\ufdd0'xhtml", "\ufdd0'svg"], {"\ufdd0'xhtml":"http://www.w3.org/1999/xhtml", "\ufdd0'svg":"http://www.w3.org/2000/svg"}), Kh = Xf.call(j, 0);
Xf.call(j, 0);
var Nh = function Lh(c, d) {
  var e = F.call(j, d);
  if(u(e)) {
    for(var f = H.call(j, e);;) {
      if(u(A.call(j, f)) ? f = j : (u(Vd.call(j, f)) && b("Maps cannot be used as content"), f = u(de.call(j, f)) ? wc.call(j, f) : u(Wd.call(j, f)) ? Mh.call(j, f) : u(be.call(j, f)) ? Lh.call(j, c, f) : u(f.nodeName) ? f : j), u(f) && xc.call(j, c, f), f = J.call(j, e), u(f)) {
        e = f, f = H.call(j, e)
      }else {
        return j
      }
    }
  }else {
    return j
  }
}, Oh = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function Ph(a) {
  var c = N.call(j, a, 0, j), a = ue.call(j, a, 1);
  u(K.call(j, function() {
    var a = ee.call(j, c);
    if(u(a)) {
      return a
    }
    a = fe.call(j, c);
    return u(a) ? a : de.call(j, c)
  }())) && b(R.call(j, c, " is not a valid tag name."));
  var d = Nf.call(j, Oh, Ff.call(j, c));
  N.call(j, d, 0, j);
  var e = N.call(j, d, 1, j), f = N.call(j, d, 2, j), h = N.call(j, d, 3, j), i = function() {
    var a = yg.call(j, e, /:/), c = N.call(j, a, 0, j), a = N.call(j, a, 1, j), d = Jh.call(j, ye.call(j, c));
    return u(a) ? V([u(d) ? d : c, a]) : V(["\ufdd0'xhtml".call(j, Jh), c])
  }(), d = N.call(j, i, 0, j), i = N.call(j, i, 1, j), f = ef.call(j, Y([], {}), cf.call(j, function(a) {
    return K.call(j, A.call(j, Jd.call(j, a)))
  }, Y(["\ufdd0'id", "\ufdd0'class"], {"\ufdd0'id":u(f) ? f : j, "\ufdd0'class":u(h) ? xg.call(j, h, /\./, " ") : j}))), h = H.call(j, a);
  return u(Vd.call(j, h)) ? V([d, i, Af.call(j, f, h), J.call(j, a)]) : V([d, i, f, a])
}
function Qh(a, c) {
  return document.createElementNS(a, c)
}
function Mh(a) {
  var c = Ph.call(j, a), d = N.call(j, c, 0, j), e = N.call(j, c, 1, j), a = N.call(j, c, 2, j), c = N.call(j, c, 3, j), d = Qh.call(j, d, e);
  Ih.call(j, d, Af.call(j, a, Y(["\ufdd0'puid"], {"\ufdd0'puid":Zf.call(j, Kh, Dd)})));
  Nh.call(j, d, c);
  return d
}
var Rh = function() {
  function a(a) {
    var d = j;
    r(a) && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return T.call(j, Mh, d)
  }
  a.b = 0;
  a.a = function(a) {
    a = F(a);
    return T.call(j, Mh, a)
  };
  return a
}();
function Sh(a, c, d, e) {
  c = U.call(j, e, c);
  Cc.call(j, a, c);
  return a
}
var Th = Y(["\ufdd0'main", "\ufdd0'clock", "\ufdd0'clock2"], {"\ufdd0'main":Y(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":V(["\ufdd0'div.clock-app", V(["\ufdd0'div.title", "2 Clocks"]), V(["\ufdd0'div.placeholder", Y(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], {"\ufdd0'data-template-name":"clock", "\ufdd0'data-template-bind-kw":"time"})]), V(["\ufdd0'div.placeholder", Y(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], 
{"\ufdd0'data-template-name":"clock2", "\ufdd0'data-template-bind-kw":"time"})])]), "\ufdd0'node-updater!":j, "\ufdd0'behaviour-fn!":j}), "\ufdd0'clock":Y(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":V(["\ufdd0'div.clock"]), "\ufdd0'node-updater!":rh.call(j, Sh), "\ufdd0'behaviour-fn!":j}), "\ufdd0'clock2":Y(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":V(["\ufdd0'div.clock.red"]), "\ufdd0'node-updater!":rh.call(j, 
Sh), "\ufdd0'behaviour-fn!":j})});
function Uh(a, c) {
  return u(K.call(j, a)) ? j : (u(c) ? c - a : new Date - a) / 1E3
}
function Vh(a) {
  var c = "\ufdd0'start-time".call(j, a);
  return u(c) ? K.call(j, "\ufdd0'stop-time".call(j, a)) : c
}
function Wh(a, c) {
  var d = U.call(j, Z.call(j, a), c), e = "\ufdd0'start-time".call(j, d), f = "\ufdd0'stop-time".call(j, d), d = Af.call(j, d, u(u(e) ? f : e) ? Y(["\ufdd0'start-time", "\ufdd0'stop-time", "\ufdd0'lap-time", "\ufdd0'next-state"], {"\ufdd0'start-time":new Date, "\ufdd0'stop-time":j, "\ufdd0'lap-time":j, "\ufdd0'next-state":"\ufdd0'stop"}) : u(e) ? Y(["\ufdd0'stop-time", "\ufdd0'next-state"], {"\ufdd0'stop-time":new Date, "\ufdd0'next-state":"\ufdd0'start"}) : u("\ufdd0'else") ? Y(["\ufdd0'start-time", 
  "\ufdd0'next-state"], {"\ufdd0'start-time":new Date, "\ufdd0'next-state":"\ufdd0'stop"}) : j);
  return Mg.call(j, a, c, d)
}
function Xh(a, c) {
  var d = U.call(j, Z.call(j, a), c);
  return u(Vh.call(j, d)) ? (d = "\ufdd0'start-time".call(j, d), Mg.call(j, a, L.call(j, c, "\ufdd0'lap-time"), Uh.call(j, d, new Date))) : j
}
;function Yh(a) {
  var c = M.call(j, a), a = M.call(j, cf.call(j, "\ufdd0'done?", a));
  return Y(["\ufdd0'total", "\ufdd0'done", "\ufdd0'remaining"], {"\ufdd0'total":c, "\ufdd0'done":a, "\ufdd0'remaining":c - a})
}
function Zh(a) {
  var c = u(be.call(j, a)) ? Q.call(j, Cd, a) : a, a = O.call(j, c, "\ufdd0'done"), d = O.call(j, c, "\ufdd0'remaining"), c = O.call(j, c, "\ufdd0'total");
  return V(["\ufdd0'div.todo-stats-box", V(["\ufdd0'div.todo-stats", df.call(j, A, u(0 < c) ? B.call(j, V(["\ufdd0'span.todo-count", V(["\ufdd0'span.number", R.call(j, d, " ")]), V(["\ufdd0'span.word", u(z.call(j, 1, d)) ? "item" : "items"]), " left."]), u(0 < a) ? V(["\ufdd0'span.todo-clear", V(["\ufdd0'a", Y(["\ufdd0'href"], {"\ufdd0'href":"#"}), "Clear ", V(["\ufdd0'span.number-done", R.call(j, a)]), " completed ", V(["\ufdd0'span.word-done", u(z.call(j, a, 1)) ? "item" : "items"])])]) : j) : 
  j)]), u(15 <= d) ? V(["\ufdd0'div.comment", V(["\ufdd0'em", "Its going to be a very busy day :!"])]) : u(7 <= d) ? V(["\ufdd0'div.comment", "Its going to be a busy day..."]) : j, V(["\ufdd0'div.last-update", "Last-update: ", V(["\ufdd0'span", R.call(j, new Date)])])])
}
;var $h = function() {
  var a = j;
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 1:
        return a.call(j, c, 100, j);
      case 2:
        return a.call(j, c, d, j);
      case 3:
        return u(Qc.call(j, c)) ? (new Tc(c, d)).play() : j
    }
    b("Invalid arity: " + arguments.length)
  }
}(), ai = function() {
  var a = j;
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 1:
        return a.call(j, c, 100, j);
      case 2:
        return a.call(j, c, d, j);
      case 3:
        return u(K.call(j, Qc.call(j, c))) ? (new Uc(c, d)).play() : j
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var bi = Y(["\ufdd0'main", "\ufdd0'todo", "\ufdd0'todo-stats", "\ufdd0'todo-list"], {"\ufdd0'main":Y(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":V(["\ufdd0'div", V(["\ufdd0'div.todoapp", V(["\ufdd0'div.title", V(["\ufdd0'h1", "Todos"])]), V(["\ufdd0'div.content", V(["\ufdd0'div.create-todo", V(["\ufdd0'div", V(["\ufdd0'input.new-todo", Y(["\ufdd0'placeholder", "\ufdd0'type"], {"\ufdd0'placeholder":"What needs to be done?", "\ufdd0'type":"text"})])]), 
V(["\ufdd0'span.ui-tooltip-top", Y(["\ufdd0'style"], {"\ufdd0'style":"display:none;"}), "Press Enter to save this task"])]), V(["\ufdd0'div.placeholder", Y(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], {"\ufdd0'data-template-name":"todo-stats", "\ufdd0'data-template-bind-kw":"todos"})]), V(["\ufdd0'div.placeholder", Y(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], {"\ufdd0'data-template-name":"todo-list", "\ufdd0'data-template-bind-kw":"todos"})])])]), V(["\ufdd0'div.postscript", 
"This example is a close replica of this ", V(["\ufdd0'a", Y(["\ufdd0'href"], {"\ufdd0'href":"http://documentcloud.github.com/backbone/examples/todos/"}), "backbone example application"])])]), "\ufdd0'node-updater!":j, "\ufdd0'behaviour-fn!":function(a, c) {
  var d = Dh.call(j, "create-todo", c), e = Dh.call(j, "new-todo", d), f = Dh.call(j, "ui-tooltip-top", d), h = "\ufdd0'mirror-state".call(j, a), i = "\ufdd0'app-state".call(j, a), k = Rg.call(j, c);
  Wb.call(j, e, "keypress", function(a) {
    if(u(z.call(j, a.keyCode, 13))) {
      var a = Y(["\ufdd0'desc", "\ufdd0'done?"], {"\ufdd0'desc":e.value, "\ufdd0'done?":l}), c = Xg.call(j, Z.call(j, h), k);
      Lg.call(j, i, L.call(j, c, "\ufdd0'todos"), L, a);
      return e.value = ""
    }
    return j
  });
  return Wb.call(j, e, "keyup", function() {
    var a = Xf.call(j, j);
    return function() {
      $h.call(j, f);
      Zf.call(j, a, function(a) {
        return u(a) ? clearTimeout.call(j, a) : j
      });
      var c = e.value;
      return u(K.call(j, function() {
        var a = z.call(j, c, "");
        return u(a) ? a : z.call(j, c, "placeholder")
      }())) ? Yf.call(j, a, setTimeout.call(j, function() {
        return ai.call(j, f)
      }, 1E3)) : j
    }
  }())
}}), "\ufdd0'todo":Y(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":V(["\ufdd0'div", V(["\ufdd0'div.display", V(["\ufdd0'input.check.bind", Y(["\ufdd0'type", "\ufdd0'data-bind-id"], {"\ufdd0'type":"checkbox", "\ufdd0'data-bind-id":"check"})]), V(["\ufdd0'div.todo-text.bind", Y(["\ufdd0'data-bind-id"], {"\ufdd0'data-bind-id":"todo-text"})]), V(["\ufdd0'span.todo-destroy"])]), V(["\ufdd0'div.edit", V(["\ufdd0'input.todo-input.bind", Y(["\ufdd0'type", 
"\ufdd0'value", "\ufdd0'data-bind-id"], {"\ufdd0'type":"text", "\ufdd0'value":"", "\ufdd0'data-bind-id":"todo-input"})])]), V(["\ufdd0'div.last-update", "Last-update: ", V(["\ufdd0'span.bind", Y(["\ufdd0'data-bind-id"], {"\ufdd0'data-bind-id":"last-update"})])])]), "\ufdd0'node-updater!":rh.call(j, function(a, c, d, e) {
  var d = U.call(j, d, c), c = U.call(j, e, c), e = dg.call(j, c, V(["\ufdd0'done?"])), c = dg.call(j, c, V(["\ufdd0'desc"])), f = Gh.call(j, "check", a);
  u(e) ? (oc.call(j, a, "done"), Wc.call(j, f, "checked")) : (pc.call(j, a, "done"), Wc.call(j, f));
  u(Ke.call(j, "\ufdd0'desc".call(j, d), c)) && (d = Gh.call(j, "todo-text", a), e = Gh.call(j, "todo-input", a), Cc.call(j, d, c), Wc.call(j, e, c));
  d = Gh.call(j, "last-update", a);
  Cc.call(j, d, new Date);
  return a
}), "\ufdd0'behaviour-fn!":function(a, c) {
  var d = "\ufdd0'mirror-state".call(j, a), e = "\ufdd0'app-state".call(j, a), f = Rg.call(j, c), h = Dh.call(j, "check", c);
  u(h) ? Wb.call(j, h, "click", function() {
    var a = Xg.call(j, Z.call(j, d), f);
    return Lg.call(j, e, L.call(j, a, "\ufdd0'done?"), K)
  }) : cg.call(j, "Warning", "check");
  h = Dh.call(j, "todo-destroy", c);
  u(h) && Wb.call(j, h, "click", function() {
    var a = Xg.call(j, Z.call(j, d), f), c = Ld.call(j, a);
    return Og.call(j, e, X.call(j, Ef.call(j, a)), Df([c]))
  });
  var h = Dh.call(j, "todo-text", c), i = Dh.call(j, "todo-input", c);
  Wb.call(j, h, "dblclick", function() {
    oc.call(j, c, "editing");
    return i.focus()
  });
  var k = Dh.call(j, "todo-input", c);
  return u(k) ? (Wb.call(j, k, "keypress", function(a) {
    return u(z.call(j, a.keyCode, 13)) ? k.blur() : j
  }), Wb.call(j, k, "blur", function() {
    var a = Xg.call(j, Z.call(j, d), f), a = L.call(j, a, "\ufdd0'desc"), h = k.value;
    pc.call(j, c, "editing");
    return Ng.call(j, e, a, h)
  })) : j
}}), "\ufdd0'todo-stats":Y(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":j, "\ufdd0'node-updater!":rh.call(j, function(a, c, d, e) {
  a = U.call(j, e, c);
  return H.call(j, Rh.call(j, Zh.call(j, Yh.call(j, a))))
}), "\ufdd0'behaviour-fn!":function(a, c) {
  var d = "\ufdd0'mirror-state".call(j, a), e = "\ufdd0'app-state".call(j, a), f = Rg.call(j, c), h = Dh.call(j, "todo-clear", c);
  return u(h) ? Wb.call(j, h, "click", function() {
    var a = Xg.call(j, Z.call(j, d), f);
    return Lg.call(j, e, a, function(a) {
      return X.call(j, df.call(j, "\ufdd0'done?", a))
    })
  }) : j
}}), "\ufdd0'todo-list":Y(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":V(["\ufdd0'ol.todo-list"]), "\ufdd0'node-updater!":function(a) {
  return function(c, d, e, f) {
    return oh.call(j, a, c, d, e, j, f)
  }
}.call(j, function(a) {
  return function(c, d, e, f) {
    return H.call(j, Rh.call(j, V(["\ufdd0'li", V(["\ufdd0'div.placeholder", Y(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-int"], {"\ufdd0'data-template-name":a, "\ufdd0'data-template-bind-int":f})])])))
  }
}.call(j, "\ufdd0'todo")), "\ufdd0'behaviour-fn!":j})});
var ci = Y(["\ufdd0'main", "\ufdd0'clock", "\ufdd0'stopwatch"], {"\ufdd0'main":Y(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":V(["\ufdd0'div.clock-app", V(["\ufdd0'div.title", "Simple stopwatch"]), V(["\ufdd0'div.placeholder", Y(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], {"\ufdd0'data-template-name":"stopwatch", "\ufdd0'data-template-bind-kw":"stopwatch"})])]), "\ufdd0'node-updater!":j, "\ufdd0'behaviour-fn!":j}), "\ufdd0'clock":Y(["\ufdd0'static-template", 
"\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":V(["\ufdd0'div.clock"]), "\ufdd0'node-updater!":rh.call(j, function(a, c, d, e) {
  c = U.call(j, e, c);
  Cc.call(j, a, c);
  return a
}), "\ufdd0'behaviour-fn!":j}), "\ufdd0'stopwatch":Y(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":V(["\ufdd0'div.stopwatch", V(["\ufdd0'div.placeholder", Y(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], {"\ufdd0'data-template-name":"clock", "\ufdd0'data-template-bind-kw":"time"})]), V(["\ufdd0'div.hbox", V(["\ufdd0'div.pad1"]), V(["\ufdd0'div.button.start-stop", "Start"]), V(["\ufdd0'div.button.lap", "Lap"]), V(["\ufdd0'div.pad1"])]), 
V(["\ufdd0'div.timing", V(["\ufdd0'table", V(["\ufdd0'tr", V(["\ufdd0'td.label", "start time: "]), V(["\ufdd0'td.start-time"])]), V(["\ufdd0'tr", V(["\ufdd0'td.label", "stop time: "]), V(["\ufdd0'td.stop-time"])]), V(["\ufdd0'tr", V(["\ufdd0'td.label", "elapsed time: "]), V(["\ufdd0'td.elapsed-time"])]), V(["\ufdd0'tr", V(["\ufdd0'td.label", "lap time: "]), V(["\ufdd0'td.lap-time"])])])])]), "\ufdd0'node-updater!":rh.call(j, function(a, c, d, e) {
  var e = U.call(j, e, c), f = "\ufdd0'start-time".call(j, e), h = "\ufdd0'stop-time".call(j, e), e = Md.call(j, e, "\ufdd0'elapsed-time", Uh.call(j, f, h)), h = F.call(j, V(["\ufdd0'start-time", "\ufdd0'stop-time", "\ufdd0'elapsed-time", "\ufdd0'lap-time"]));
  if(u(h)) {
    for(f = H.call(j, h);;) {
      var i = Dh.call(j, Ff.call(j, f), a);
      Cc.call(j, i, f.call(j, e));
      f = J.call(j, h);
      if(u(f)) {
        h = f, f = H.call(j, h)
      }else {
        break
      }
    }
  }
  d = U.call(j, d, c);
  c = "\ufdd0'next-state".call(j, e, "\ufdd0'start");
  d = "\ufdd0'next-state".call(j, d, "\ufdd0'start");
  u(z.call(j, c, d)) || (f = Dh.call(j, "start-stop", a), h = u(z.call(j, "\ufdd0'start", c)) ? "Start!" : u(z.call(j, "\ufdd0'stop", c)) ? "Stop!" : u(z.call(j, "\ufdd0'reset", c)) ? "Reset!" : j, Cc.call(j, f, h), pc.call(j, f, Ff.call(j, d)), oc.call(j, f, Ff.call(j, c)));
  c = Dh.call(j, "lap", a);
  u(Vh.call(j, e)) ? pc.call(j, c, "inactive") : oc.call(j, c, "inactive");
  return a
}), "\ufdd0'behaviour-fn!":function(a, c) {
  var d = "\ufdd0'mirror-state".call(j, a), e = "\ufdd0'app-state".call(j, a), f = Rg.call(j, c), h = Dh.call(j, "start-stop", c);
  Wb.call(j, h, "click", function(a) {
    var c = Xg.call(j, Z.call(j, d), f);
    Wh.call(j, e, c);
    a.stopPropagation();
    return l
  });
  Wb.call(j, h, "selectstart", function(a) {
    a.preventDefault();
    return l
  });
  h = Dh.call(j, "lap", c);
  Wb.call(j, h, "click", function(a) {
    var c = Xg.call(j, Z.call(j, d), f);
    Xh.call(j, e, c);
    a.stopPropagation();
    return l
  });
  return Wb.call(j, h, "selectstart", function(a) {
    a.preventDefault();
    return l
  })
}})});
var di = Y(["\ufdd0'main", "\ufdd0'clock"], {"\ufdd0'main":Y(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":V(["\ufdd0'div.clock-app", V(["\ufdd0'div.title", "Clock"]), V(["\ufdd0'div.placeholder", Y(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], {"\ufdd0'data-template-name":"clock", "\ufdd0'data-template-bind-kw":"time"})])]), "\ufdd0'node-updater!":j, "\ufdd0'behaviour-fn!":j}), "\ufdd0'clock":Y(["\ufdd0'static-template", "\ufdd0'node-updater!", 
"\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":V(["\ufdd0'div.clock"]), "\ufdd0'node-updater!":rh.call(j, function(a, c, d, e) {
  c = U.call(j, e, c);
  Cc.call(j, a, c);
  return a
}), "\ufdd0'behaviour-fn!":j})});
var fi = function ei(c, d) {
  return u(c) ? (d.call(j, c), wh.call(j, function(c) {
    return ei.call(j, c, d)
  }, Bc.call(j, c))) : j
};
var gi = {};
function $(a) {
  if(u(u(a) ? a.Aa : a)) {
    a = a.Aa()
  }else {
    var c;
    var d = $[p.call(j, a)];
    u(d) ? c = d : (d = $._, u(d) ? c = d : b(v.call(j, "PushbackReader.read-char", a)));
    a = c.call(j, a)
  }
  return a
}
function hi(a, c) {
  var d;
  if(u(u(a) ? a.Ba : a)) {
    d = a.Ba(0, c)
  }else {
    var e = hi[p.call(j, a)];
    u(e) ? d = e : (e = hi._, u(e) ? d = e : b(v.call(j, "PushbackReader.unread", a)));
    d = d.call(j, a, c)
  }
  return d
}
function ii(a, c, d) {
  this.ob = a;
  this.Ya = c;
  this.ba = d
}
ii.prototype.Aa = function() {
  if(u(Rd.call(j, Z.call(j, this.ba)))) {
    var a = Z.call(j, this.Ya);
    Zf.call(j, this.Ya, Dd);
    return N.call(j, this.ob, a)
  }
  a = Z.call(j, this.ba);
  Zf.call(j, this.ba, I);
  return H.call(j, a)
};
ii.prototype.Ba = function(a, c) {
  return Zf.call(j, this.ba, function(a) {
    return D.call(j, c, a)
  })
};
function ji(a) {
  return new ii(a, Xf.call(j, 0), Xf.call(j, j))
}
function ki(a) {
  var c = qa.call(j, a);
  return u(c) ? c : z.call(j, ",", a)
}
function li(a) {
  return ra.call(j, a)
}
function mi(a) {
  return z.call(j, ";", a)
}
function ni(a, c) {
  var d = li.call(j, c);
  if(u(d)) {
    return d
  }
  d = function() {
    var a = z.call(j, "+", c);
    return u(a) ? a : z.call(j, "-", c)
  }();
  return u(d) ? li.call(j, function() {
    var c = $.call(j, a);
    hi.call(j, a, c);
    return c
  }()) : d
}
var oi = function() {
  function a(a, d) {
    var e = j;
    r(d) && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    b(Q.call(j, R, e))
  }
  a.b = 1;
  a.a = function(a) {
    H(a);
    a = I(a);
    b(Q.call(j, R, a))
  };
  return a
}();
function pi(a) {
  var c = Ke.call(j, a, "#");
  return u(c) && (c = Ke.call(j, a, "'"), u(c)) ? (c = Ke.call(j, a, ":"), u(c) ? ie.call(j, qi, a) : c) : c
}
function ri(a, c) {
  for(var d = new Na(c), e = $.call(j, a);;) {
    var f;
    f = A.call(j, e);
    u(f) || (f = ki.call(j, e), f = u(f) ? f : pi.call(j, e));
    if(u(f)) {
      return hi.call(j, a, e), d.toString()
    }
    d.append(e);
    e = $.call(j, a)
  }
}
var si = Pf.call(j, "([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?"), ti = Pf.call(j, "([-+]?[0-9]+)/([0-9]+)"), ui = Pf.call(j, "([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?"), vi = Pf.call(j, "[:]?([^0-9/].*/)?([^0-9/][^/]*)");
function wi(a) {
  var c = Of.call(j, si, a), a = N.call(j, c, 2), d = ae.call(j, a);
  if(u(K.call(j, u(d) ? d : 1 > a.length))) {
    return 0
  }
  a = u(z.call(j, "-", N.call(j, c, 1))) ? -1 : 1;
  d = u(N.call(j, c, 3)) ? V([N.call(j, c, 3), 10]) : u(N.call(j, c, 4)) ? V([N.call(j, c, 4), 16]) : u(N.call(j, c, 5)) ? V([N.call(j, c, 5), 8]) : u(N.call(j, c, 7)) ? V([N.call(j, c, 7), parseInt.call(j, N.call(j, c, 7))]) : u("\ufdd0'default") ? V([j, j]) : j;
  c = N.call(j, d, 0, j);
  d = N.call(j, d, 1, j);
  return u(A.call(j, c)) ? j : a * parseInt.call(j, c, d)
}
function xi(a) {
  var c = Of.call(j, ti, a), a = N.call(j, c, 1), c = N.call(j, c, 2);
  return parseInt.call(j, a) / parseInt.call(j, c)
}
function yi(a) {
  return parseFloat.call(j, a)
}
function zi(a) {
  return u(Nf.call(j, si, a)) ? wi.call(j, a) : u(Nf.call(j, ti, a)) ? xi.call(j, a) : u(Nf.call(j, ui, a)) ? yi.call(j, a) : j
}
var Ai = xf('t,r,n,\\,",b,f'.split(","), '\t,\r,\n,\\,",\u0008,\u000c'.split(","));
function Bi(a) {
  return oi.call(j, a, "Unicode characters not supported by reader (yet)")
}
function Ci(a, c) {
  var d = $.call(j, c), e = O.call(j, Ai, d);
  u(e) ? d = e : (e = z.call(j, "u", d), d = u(u(e) ? e : li.call(j, d)) ? Bi.call(j, c) : oi.call(j, c, "Unsupported escape charater: \\", d));
  return d
}
function Di(a, c) {
  for(var d = $.call(j, c);;) {
    if(u(a.call(j, d))) {
      d = $.call(j, c)
    }else {
      return d
    }
  }
}
function Ei(a, c) {
  for(var d = V([]);;) {
    var e = Di.call(j, ki, c);
    u(e) || oi.call(j, c, "EOF");
    if(u(z.call(j, a, e))) {
      return d
    }
    var f = O.call(j, qi, e);
    u(f) ? e = f.call(j, c, e) : (hi.call(j, c, e), e = Fi.call(j, c, g, j));
    d = u(z.call(j, e, c)) ? d : L.call(j, d, e)
  }
}
function Gi(a, c) {
  return oi.call(j, a, "Reader for ", c, " not implemented yet")
}
function Hi(a, c) {
  return oi.call(j, a, "Unmached delimiter ", c)
}
function Ii(a) {
  for(;;) {
    var c = $.call(j, a);
    var d = z.call(j, c, "n");
    u(d) ? c = d : (d = z.call(j, c, "r"), c = u(d) ? d : A.call(j, c));
    if(u(c)) {
      return a
    }
  }
}
function Ji(a, c) {
  for(var d = new Na(c), e = $.call(j, a);;) {
    var f;
    f = A.call(j, e);
    u(f) || (f = ki.call(j, e), f = u(f) ? f : ie.call(j, qi, e));
    if(u(f)) {
      return hi.call(j, a, e), d = d.toString(), e = zi.call(j, d), u(e) ? e : oi.call(j, a, "Invalid number format [", d, "]")
    }
    d.append(e);
    e = $.call(j, a)
  }
}
function Ki(a) {
  for(var c = new Na, d = $.call(j, a);;) {
    if(u(A.call(j, d))) {
      return oi.call(j, a, "EOF while reading string")
    }
    if(u(z.call(j, "\\", d))) {
      c.append(Ci.call(j, 0, a)), d = $.call(j, a)
    }else {
      if(u(z.call(j, '"', d))) {
        return c.toString()
      }
      if(u("\ufdd0'default")) {
        c.append(d), d = $.call(j, a)
      }else {
        return j
      }
    }
  }
}
var Li = Y(["nil", "true", "false"], {nil:j, "true":g, "false":l});
function Mi(a, c) {
  var d = ri.call(j, a, c);
  return u(Ba.call(j, d, "/")) ? xe.call(j, we.call(j, d, 0, d.indexOf("/")), we.call(j, d, d.indexOf("/") + 1, d.length)) : O.call(j, Li, d, xe.call(j, d))
}
function Ni(a) {
  return u(fe.call(j, a)) ? Y(["\ufdd0'tag"], {"\ufdd0'tag":a}) : u(de.call(j, a)) ? Y(["\ufdd0'tag"], {"\ufdd0'tag":a}) : u(ee.call(j, a)) ? xf([a], [g]) : u("\ufdd0'else") ? a : j
}
function Oi(a) {
  return function(c) {
    return B.call(j, a, Fi.call(j, c, g, j))
  }
}
var qi = xf("@,`,\",#,%,',(,),:,;,[,{,\\,],},^,~".split(","), [Oi.call(j, "\ufdd1'deref"), Gi, Ki, function(a, c) {
  var d = $.call(j, a), e = O.call(j, Pi, d);
  return u(e) ? e.call(j, a, c) : oi.call(j, a, "No dispatch macro for ", d)
}, Gi, Oi.call(j, "\ufdd1'quote"), function(a) {
  return Q.call(j, B, Ei.call(j, ")", a))
}, Hi, function(a) {
  var c = ri.call(j, a, $.call(j, a)), d = Nf.call(j, vi, c), c = N.call(j, d, 0, j), e = N.call(j, d, 1, j), d = N.call(j, d, 2, j), f;
  f = K.call(j, ae.call(j, e));
  f = u(f) ? ":/" === e.substring(e.length - 2, e.length) : f;
  u(f) || (f = ":" === d[d.length - 1], f = u(f) ? f : K.call(j, -1 === c.indexOf("::", 1)));
  return u(f) ? oi.call(j, a, "Invalid token: ", c) : u(gi.wb) ? ye.call(j, e.substring(0, e.indexOf("/")), d) : ye.call(j, c)
}, Gi, function(a) {
  return Ei.call(j, "]", a)
}, function(a) {
  var c = Ei.call(j, "}", a);
  u(Oe.call(j, M.call(j, c))) && oi.call(j, a, "Map literal must contain an even number of forms");
  return Q.call(j, Cd, c)
}, $, Hi, Hi, function(a) {
  var c = Ni.call(j, Fi.call(j, a, g, j));
  u(Vd.call(j, c)) || oi.call(j, a, "Metadata must be Symbol,Keyword,String or Map");
  var d = Fi.call(j, a, g, j), e;
  u(d) ? (e = d.v, e = u(e) ? K.call(j, d.hasOwnProperty("cljs$core$IWithMeta$")) : e) : e = d;
  e = u(e) ? g : $c.call(j, rd, d);
  return u(e) ? Od.call(j, d, Af.call(j, Pd.call(j, d), c)) : oi.call(j, a, "Metadata can only be applied to IWithMetas")
}, Gi]), Pi = Y(["{", "<", '"', "!", "_"], {"{":function(a) {
  return Df.call(j, Ei.call(j, "}", a))
}, "<":function(a) {
  return function(c) {
    return oi.call(j, c, a)
  }
}.call(j, "Unreadable form"), '"':function(a, c) {
  return Pf.call(j, Ki.call(j, a, c))
}, "!":Ii, _:function(a) {
  Fi.call(j, a, g, j);
  return a
}});
function Fi(a, c, d) {
  for(;;) {
    var e = $.call(j, a);
    if(u(A.call(j, e))) {
      return u(c) ? oi.call(j, a, "EOF") : d
    }
    if(!u(ki.call(j, e))) {
      if(u(mi.call(j, e))) {
        a = Ii.call(j, a)
      }else {
        if(u("\ufdd0'else")) {
          if(e = u(qi.call(j, e)) ? qi.call(j, e).call(j, a, e) : u(ni.call(j, a, e)) ? Ji.call(j, a, e) : u("\ufdd0'else") ? Mi.call(j, a, e) : j, !u(z.call(j, e, a))) {
            return e
          }
        }else {
          return j
        }
      }
    }
  }
}
Ki = function(a) {
  a = ji.call(j, a);
  return Fi.call(j, a, g, j)
};
Node.prototype.Oa = function(a, c) {
  return xc.call(j, a, c)
};
Node.prototype.Ra = function(a, c, d) {
  return yc.call(j, a, c, d)
};
Node.prototype.Qa = function(a) {
  return yh.call(j, Bc.call(j, a))
};
Node.prototype.Pa = function(a) {
  return Bc.call(j, a).length
};
function Qi(a) {
  a = Yc.call(j, a, "templateName");
  return u(a) ? ye.call(j, a) : j
}
function Ri(a, c) {
  oc.call(j, a, "template");
  return Xc.call(j, a, "templateName", Ff.call(j, c))
}
function Si(a, c) {
  var d = Qi.call(j, a), e = "\ufdd0'static-template".call(j, "\ufdd0'templates".call(j, c).call(j, d)), e = H.call(j, Rh.call(j, u(e) ? e : V(["\ufdd0'div"])));
  oc.call(j, e, "template");
  Xc.call(j, e, "templateName", d);
  return e
}
function Ti(a, c) {
  var d = Yc.call(j, a, "templateBindKw");
  if(u(d)) {
    return L.call(j, c, ye.call(j, d))
  }
  d = Yc.call(j, a, "templateBindInt");
  if(u(d)) {
    return L.call(j, c, parseInt.call(j, d, 10))
  }
  d = Yc.call(j, a, "templateBindStr");
  if(u(d)) {
    return L.call(j, c, d)
  }
  d = Yc.call(j, a, "templateBindSeq");
  return u(d) ? Q.call(j, Re.call(j, L, c), reader.xb.call(j, d)) : c
}
function Ui(a, c) {
  var d = Qi.call(j, a);
  return u(d) && (d = "\ufdd0'behaviour-fn!".call(j, "\ufdd0'templates".call(j, c).call(j, d)), u(d)) ? (d.call(j, c, a), Xc.call(j, a, "behaviourActive", "true")) : j
}
function Vi(a, c) {
  var d = F.call(j, Ch.call(j, "template", a));
  if(u(d)) {
    for(var e = H.call(j, d);;) {
      if(u(Yc.call(j, e, "behaviourActive")) || Ui.call(j, e, c), e = J.call(j, d), u(e)) {
        d = e, e = H.call(j, d)
      }else {
        return j
      }
    }
  }else {
    return j
  }
}
function Wi(a, c) {
  $b.call(j, c);
  Zc.call(j, c, "behaviourActive");
  return eh.call(j, a, c)
}
function Xi(a, c) {
  var d = "\ufdd0'mirror-state".call(j, c);
  fi.call(j, a, Re.call(j, Wi, d));
  return zc.call(j, a)
}
n = Node.prototype;
n.Ga = function(a) {
  return Qi.call(j, a)
};
n.Ca = function(a, c) {
  return Ti.call(j, a, c)
};
n.Ha = function(a) {
  return qc.call(j, a, "placeholder")
};
n.Ea = function(a) {
  return Bh.call(j, "placeholder", a)
};
n.Ia = function(a, c) {
  return Si.call(j, a, c)
};
n.Fa = function(a) {
  return Ch.call(j, "template", a)
};
n.Da = function(a, c) {
  return Xi.call(j, a, c)
};
n.Ja = function(a, c, d) {
  return u(Ke.call(j, a, c)) ? (Ri.call(j, c, Qi.call(j, a)), Ac.call(j, c, a), Xi.call(j, a, d), Vi.call(j, c, d)) : j
};
Node.prototype.Na = function(a) {
  var c = a.getAttribute("puid");
  return u(c) ? c : a.id
};
Re.call(j, function Yi(c, d) {
  return new S(j, l, function() {
    var e = F.call(j, d);
    if(u(e)) {
      var f = H.call(j, e), h = c.call(j, f), f = D.call(j, f, If.call(j, function(d) {
        return z.call(j, h, c.call(j, d))
      }, J.call(j, e)));
      return D.call(j, f, Yi.call(j, c, F.call(j, Ve.call(j, M.call(j, f), e))))
    }
    return j
  })
}, Pe);
var Zi = Y(["\ufdd0'clock", "\ufdd0'clock2", "\ufdd0'stopwatch", "\ufdd0'todos"], {"\ufdd0'clock":function() {
  var a = Xf.call(j, Y(["\ufdd0'time"], {"\ufdd0'time":new Date}));
  sh.call(j, "\ufdd0'user/app", a, rc.call(j, "app"), di);
  return vh.call(j, function() {
    return Mg.call(j, a, V(["\ufdd0'time"]), new Date)
  }, 1E3)
}, "\ufdd0'clock2":function() {
  var a = Xf.call(j, Y(["\ufdd0'time"], {"\ufdd0'time":new Date}));
  sh.call(j, "\ufdd0'user/app", a, rc.call(j, "app"), Th);
  return vh.call(j, function() {
    return Mg.call(j, a, V(["\ufdd0'time"]), new Date)
  }, 1E3)
}, "\ufdd0'stopwatch":function() {
  var a = Xf.call(j, Y([], {}));
  sh.call(j, "\ufdd0'user/app", a, rc.call(j, "app"), ci);
  return vh.call(j, function() {
    return Mg.call(j, a, V(["\ufdd0'stopwatch", "\ufdd0'time"]), new Date)
  }, 100)
}, "\ufdd0'todos":function() {
  var a = Y(["\ufdd0'todos"], {"\ufdd0'todos":X.call(j, function() {
    return function d(a) {
      return new S(j, l, function() {
        for(;;) {
          if(u(F.call(j, a))) {
            var f = H.call(j, a);
            return D.call(j, Y(["\ufdd0'id", "\ufdd0'desc", "\ufdd0'done?"], {"\ufdd0'id":f, "\ufdd0'desc":R.call(j, "do something: ", f), "\ufdd0'done?":l}), d.call(j, I.call(j, a)))
          }
          return j
        }
      })
    }.call(j, Kf.call(j, 2))
  }())}), a = Xf.call(j, a);
  return sh.call(j, "\ufdd0'user/app", a, rc.call(j, "app"), bi)
}}), $i = Yc.call(j, document.body, "appChoice");
if(u($i)) {
  var aj = ye.call(j, $i).call(j, Zi);
  u(aj) && aj.call(j)
}
;