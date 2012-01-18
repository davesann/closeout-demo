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
function da() {
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
function ea(a) {
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
;var pa = {"\x00":"\\0", "\u0008":"\\b", "\u000c":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\u000b":"\\x0B", '"':'\\"', "\\":"\\\\"}, qa = {"'":"\\'"};
function ra(a) {
  var q;
  a = "" + a;
  if(a.quote) {
    return a.quote()
  }
  for(var c = ['"'], d = 0;d < a.length;d++) {
    var e = a.charAt(d), f = e.charCodeAt(0), h = c, i = d + 1, k;
    if(!(k = pa[e])) {
      if(!(31 < f && 127 > f)) {
        if(e in qa) {
          e = qa[e]
        }else {
          if(e in pa) {
            q = qa[e] = pa[e], e = q
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
            e = qa[e] = f
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
function sa(a) {
  return("" + a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
}
function ta(a, c) {
  for(var d = 0, e = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), f = ("" + c).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), h = Math.max(e.length, f.length), i = 0;0 == d && i < h;i++) {
    var k = e[i] || "", q = f[i] || "", t = RegExp("(\\d*)(\\D*)", "g"), I = RegExp("(\\d*)(\\D*)", "g");
    do {
      var A = t.exec(k) || ["", "", ""], O = I.exec(q) || ["", "", ""];
      if(0 == A[0].length && 0 == O[0].length) {
        break
      }
      d = ((0 == A[1].length ? 0 : parseInt(A[1], 10)) < (0 == O[1].length ? 0 : parseInt(O[1], 10)) ? -1 : (0 == A[1].length ? 0 : parseInt(A[1], 10)) > (0 == O[1].length ? 0 : parseInt(O[1], 10)) ? 1 : 0) || ((0 == A[2].length) < (0 == O[2].length) ? -1 : (0 == A[2].length) > (0 == O[2].length) ? 1 : 0) || (A[2] < O[2] ? -1 : A[2] > O[2] ? 1 : 0)
    }while(0 == d)
  }
  return d
}
function ua(a) {
  for(var c = 0, d = 0;d < a.length;++d) {
    c = 31 * c + a.charCodeAt(d), c %= 4294967296
  }
  return c
}
var va = {};
function wa(a) {
  return va[a] || (va[a] = ("" + a).replace(/([A-Z])/g, "-$1").toLowerCase())
}
;var xa, ya, za, Aa, Ba, Ca = (Ba = "ScriptEngine" in o && "JScript" == o.ScriptEngine()) ? o.ScriptEngineMajorVersion() + "." + o.ScriptEngineMinorVersion() + "." + o.ScriptEngineBuildVersion() : "0";
function Da(a, c) {
  this.i = Ba ? [] : "";
  a != j && this.append.apply(this, arguments)
}
Ba ? (Da.prototype.ea = 0, Da.prototype.append = function(a, c, d) {
  c == j ? this.i[this.ea++] = a : (this.i.push.apply(this.i, arguments), this.ea = this.i.length);
  return this
}) : Da.prototype.append = function(a, c, d) {
  this.i += a;
  if(c != j) {
    for(var e = 1;e < arguments.length;e++) {
      this.i += arguments[e]
    }
  }
  return this
};
Da.prototype.clear = function() {
  Ba ? this.ea = this.i.length = 0 : this.i = ""
};
Da.prototype.toString = function() {
  if(Ba) {
    var a = this.i.join("");
    this.clear();
    a && this.append(a);
    return a
  }
  return this.i
};
function Ea() {
}
Ea.prototype.Fa = l;
Ea.prototype.$ = function() {
  if(!this.Fa) {
    this.Fa = g, this.o()
  }
};
Ea.prototype.o = function() {
};
var Fa = Array.prototype, Ga = Fa.indexOf ? function(a, c, d) {
  return Fa.indexOf.call(a, c, d)
} : function(a, c, d) {
  d = d == j ? 0 : 0 > d ? Math.max(0, a.length + d) : d;
  if(ea(a)) {
    return!ea(c) || 1 != c.length ? -1 : a.indexOf(c, d)
  }
  for(;d < a.length;d++) {
    if(d in a && a[d] === c) {
      return d
    }
  }
  return-1
}, Ha = Fa.filter ? function(a, c, d) {
  return Fa.filter.call(a, c, d)
} : function(a, c, d) {
  for(var e = a.length, f = [], h = 0, i = ea(a) ? a.split("") : a, k = 0;k < e;k++) {
    if(k in i) {
      var q = i[k];
      c.call(d, q, k, a) && (f[h++] = q)
    }
  }
  return f
};
function Ia(a, c, d, e) {
  Fa.splice.apply(a, Ja(arguments, 1))
}
function Ja(a, c, d) {
  return 2 >= arguments.length ? Fa.slice.call(a, c) : Fa.slice.call(a, c, d)
}
function Ka(a, c) {
  Fa.sort.call(a, c || La)
}
function Ma(a, c) {
  for(var d = 0;d < a.length;d++) {
    a[d] = {index:d, value:a[d]}
  }
  var e = c || La;
  Ka(a, function(a, c) {
    return e(a.value, c.value) || a.index - c.index
  });
  for(d = 0;d < a.length;d++) {
    a[d] = a[d].value
  }
}
function La(a, c) {
  return a > c ? 1 : a < c ? -1 : 0
}
;function Na() {
  return o.navigator ? o.navigator.userAgent : j
}
Aa = za = ya = xa = l;
var Oa;
if(Oa = Na()) {
  var Pa = o.navigator;
  xa = 0 == Oa.indexOf("Opera");
  ya = !xa && -1 != Oa.indexOf("MSIE");
  za = !xa && -1 != Oa.indexOf("WebKit");
  Aa = !xa && !za && "Gecko" == Pa.product
}
var Qa = ya, Ra = Aa, Sa = za, Ta = o.navigator, Ua = -1 != (Ta && Ta.platform || "").indexOf("Mac"), Va;
a: {
  var Wa = "", Xa;
  if(xa && o.opera) {
    var Ya = o.opera.version, Wa = "function" == typeof Ya ? Ya() : Ya
  }else {
    if(Ra ? Xa = /rv\:([^\);]+)(\)|;)/ : Qa ? Xa = /MSIE\s+([^\);]+)(\)|;)/ : Sa && (Xa = /WebKit\/(\S+)/), Xa) {
      var Za = Xa.exec(Na()), Wa = Za ? Za[1] : ""
    }
  }
  if(Qa) {
    var $a, ab = o.document;
    $a = ab ? ab.documentMode : aa;
    if($a > parseFloat(Wa)) {
      Va = "" + $a;
      break a
    }
  }
  Va = Wa
}
var bb = {};
function cb(a) {
  return bb[a] || (bb[a] = 0 <= ta(Va, a))
}
;var db;
!Qa || cb("9");
var eb = Qa && !cb("8");
function fb(a, c) {
  this.type = a;
  this.currentTarget = this.target = c
}
oa(fb, Ea);
n = fb.prototype;
n.o = function() {
  delete this.type;
  delete this.target;
  delete this.currentTarget
};
n.N = l;
n.Y = g;
n.stopPropagation = function() {
  this.N = g
};
n.preventDefault = function() {
  this.Y = l
};
var gb = new Function("a", "return a");
function hb(a, c) {
  a && this.ba(a, c)
}
oa(hb, fb);
n = hb.prototype;
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
n.Ya = l;
n.P = j;
n.ba = function(a, c) {
  var d = this.type = a.type;
  fb.call(this, d);
  this.target = a.target || a.srcElement;
  this.currentTarget = c;
  var e = a.relatedTarget;
  if(e) {
    if(Ra) {
      try {
        gb(e.nodeName)
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
  this.Ya = Ua ? a.metaKey : a.ctrlKey;
  this.state = a.state;
  this.P = a;
  delete this.Y;
  delete this.N
};
n.stopPropagation = function() {
  hb.h.stopPropagation.call(this);
  this.P.stopPropagation ? this.P.stopPropagation() : this.P.cancelBubble = g
};
n.preventDefault = function() {
  hb.h.preventDefault.call(this);
  var a = this.P;
  if(a.preventDefault) {
    a.preventDefault()
  }else {
    if(a.returnValue = l, eb) {
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
  hb.h.o.call(this);
  this.relatedTarget = this.currentTarget = this.target = this.P = j
};
function ib() {
}
var jb = 0;
n = ib.prototype;
n.key = 0;
n.R = l;
n.qa = l;
n.ba = function(a, c, d, e, f, h) {
  ga(a) ? this.Oa = g : a && a.handleEvent && ga(a.handleEvent) ? this.Oa = l : b(Error("Invalid listener argument"));
  this.X = a;
  this.Ra = c;
  this.src = d;
  this.type = e;
  this.capture = !!f;
  this.ia = h;
  this.qa = l;
  this.key = ++jb;
  this.R = l
};
n.handleEvent = function(a) {
  return this.Oa ? this.X.call(this.ia || this.src, a) : this.X.handleEvent.call(this.X, a)
};
function kb(a, c) {
  this.Pa = c;
  this.L = [];
  a > this.Pa && b(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
  for(var d = 0;d < a;d++) {
    this.L.push(this.B ? this.B() : {})
  }
}
oa(kb, Ea);
kb.prototype.B = j;
kb.prototype.Ea = j;
function lb(a) {
  return a.L.length ? a.L.pop() : a.B ? a.B() : {}
}
function mb(a, c) {
  a.L.length < a.Pa ? a.L.push(c) : nb(a, c)
}
function nb(a, c) {
  if(a.Ea) {
    a.Ea(c)
  }else {
    var d = p(c);
    if("object" == d || "array" == d || "function" == d) {
      if(ga(c.$)) {
        c.$()
      }else {
        for(var e in c) {
          delete c[e]
        }
      }
    }
  }
}
kb.prototype.o = function() {
  kb.h.o.call(this);
  for(var a = this.L;a.length;) {
    nb(this, a.pop())
  }
  delete this.L
};
var ob, pb, qb, rb, sb, tb, ub, vb, wb, xb, yb;
(function() {
  function a() {
    return{v:0, t:0}
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
    return new ib
  }
  function f() {
    return new hb
  }
  var h = Ba && !(0 <= ta(Ca, "5.7")), i;
  tb = function(a) {
    i = a
  };
  if(h) {
    ob = function() {
      return lb(k)
    };
    pb = function(a) {
      mb(k, a)
    };
    qb = function() {
      return lb(q)
    };
    rb = function(a) {
      mb(q, a)
    };
    sb = function() {
      return lb(t)
    };
    ub = function() {
      mb(t, d())
    };
    vb = function() {
      return lb(I)
    };
    wb = function(a) {
      mb(I, a)
    };
    xb = function() {
      return lb(A)
    };
    yb = function(a) {
      mb(A, a)
    };
    var k = new kb(0, 600);
    k.B = a;
    var q = new kb(0, 600);
    q.B = c;
    var t = new kb(0, 600);
    t.B = d;
    var I = new kb(0, 600);
    I.B = e;
    var A = new kb(0, 600);
    A.B = f
  }else {
    ob = a, pb = da, qb = c, rb = da, sb = d, ub = da, vb = e, wb = da, xb = f, yb = da
  }
})();
function zb(a, c, d) {
  for(var e in a) {
    c.call(d, a[e], e, a)
  }
}
function Ab() {
  var a = Bb, c;
  for(c in a) {
    return l
  }
  return g
}
function Cb(a) {
  var c = {}, d;
  for(d in a) {
    c[d] = a[d]
  }
  return c
}
var Db = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
function Eb(a, c) {
  for(var d, e, f = 1;f < arguments.length;f++) {
    e = arguments[f];
    for(d in e) {
      a[d] = e[d]
    }
    for(var h = 0;h < Db.length;h++) {
      d = Db[h], Object.prototype.hasOwnProperty.call(e, d) && (a[d] = e[d])
    }
  }
}
;var Fb = {}, s = {}, Gb = {}, Hb = {};
function u(a, c, d, e, f) {
  if(c) {
    if("array" == p(c)) {
      for(var h = 0;h < c.length;h++) {
        u(a, c[h], d, e, f)
      }
      return j
    }
    var e = !!e, i = s;
    c in i || (i[c] = ob());
    i = i[c];
    e in i || (i[e] = ob(), i.v++);
    var i = i[e], k = ha(a), q;
    i.t++;
    if(i[k]) {
      q = i[k];
      for(h = 0;h < q.length;h++) {
        if(i = q[h], i.X == d && i.ia == f) {
          if(i.R) {
            break
          }
          return q[h].key
        }
      }
    }else {
      q = i[k] = qb(), i.v++
    }
    h = sb();
    h.src = a;
    i = vb();
    i.ba(d, h, a, c, e, f);
    d = i.key;
    h.key = d;
    q.push(i);
    Fb[d] = i;
    Gb[k] || (Gb[k] = qb());
    Gb[k].push(i);
    a.addEventListener ? (a == o || !a.Da) && a.addEventListener(c, h, e) : a.attachEvent(c in Hb ? Hb[c] : Hb[c] = "on" + c, h);
    return d
  }
  b(Error("Invalid event type"))
}
function Ib(a, c, d, e, f) {
  if("array" == p(c)) {
    for(var h = 0;h < c.length;h++) {
      Ib(a, c[h], d, e, f)
    }
  }else {
    e = !!e;
    a: {
      h = s;
      if(c in h && (h = h[c], e in h && (h = h[e], a = ha(a), h[a]))) {
        a = h[a];
        break a
      }
      a = j
    }
    if(a) {
      for(h = 0;h < a.length;h++) {
        if(a[h].X == d && a[h].capture == e && a[h].ia == f) {
          Jb(a[h].key);
          break
        }
      }
    }
  }
}
function Jb(a) {
  if(Fb[a]) {
    var c = Fb[a];
    if(!c.R) {
      var d = c.src, e = c.type, f = c.Ra, h = c.capture;
      d.removeEventListener ? (d == o || !d.Da) && d.removeEventListener(e, f, h) : d.detachEvent && d.detachEvent(e in Hb ? Hb[e] : Hb[e] = "on" + e, f);
      d = ha(d);
      f = s[e][h][d];
      if(Gb[d]) {
        var i = Gb[d], k = Ga(i, c);
        0 <= k && Fa.splice.call(i, k, 1);
        0 == i.length && delete Gb[d]
      }
      c.R = g;
      f.Qa = g;
      Kb(e, h, d, f);
      delete Fb[a]
    }
  }
}
function Kb(a, c, d, e) {
  if(!e.ca && e.Qa) {
    for(var f = 0, h = 0;f < e.length;f++) {
      if(e[f].R) {
        var i = e[f].Ra;
        i.src = j;
        ub(i);
        wb(e[f])
      }else {
        f != h && (e[h] = e[f]), h++
      }
    }
    e.length = h;
    e.Qa = l;
    0 == h && (rb(e), delete s[a][c][d], s[a][c].v--, 0 == s[a][c].v && (pb(s[a][c]), delete s[a][c], s[a].v--), 0 == s[a].v && (pb(s[a]), delete s[a]))
  }
}
function Lb(a, c, d) {
  var e = 0, f = c == j, h = d == j, d = !!d;
  if(a == j) {
    zb(Gb, function(a) {
      for(var i = a.length - 1;0 <= i;i--) {
        var k = a[i];
        if((f || c == k.type) && (h || d == k.capture)) {
          Jb(k.key), e++
        }
      }
    })
  }else {
    if(a = ha(a), Gb[a]) {
      for(var a = Gb[a], i = a.length - 1;0 <= i;i--) {
        var k = a[i];
        if((f || c == k.type) && (h || d == k.capture)) {
          Jb(k.key), e++
        }
      }
    }
  }
  return e
}
function Mb(a, c, d, e, f) {
  var h = 1, c = ha(c);
  if(a[c]) {
    a.t--;
    a = a[c];
    a.ca ? a.ca++ : a.ca = 1;
    try {
      for(var i = a.length, k = 0;k < i;k++) {
        var q = a[k];
        q && !q.R && (h &= Nb(q, f) !== l)
      }
    }finally {
      a.ca--, Kb(d, e, c, a)
    }
  }
  return Boolean(h)
}
function Nb(a, c) {
  var d = a.handleEvent(c);
  a.qa && Jb(a.key);
  return d
}
tb(function(a, c) {
  if(!Fb[a]) {
    return g
  }
  var d = Fb[a], e = d.type, f = s;
  if(!(e in f)) {
    return g
  }
  var f = f[e], h, i;
  db === aa && (db = Qa && !o.addEventListener);
  if(db) {
    var k;
    if(!(k = c)) {
      a: {
        k = "window.event".split(".");
        for(var q = o;h = k.shift();) {
          if(q[h] != j) {
            q = q[h]
          }else {
            k = j;
            break a
          }
        }
        k = q
      }
    }
    h = k;
    k = g in f;
    q = l in f;
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
          }catch(I) {
            t = g
          }
        }
        if(t || h.returnValue == aa) {
          h.returnValue = g
        }
      }
    }
    t = xb();
    t.ba(h, this);
    h = g;
    try {
      if(k) {
        for(var A = qb(), O = t.currentTarget;O;O = O.parentNode) {
          A.push(O)
        }
        i = f[g];
        i.t = i.v;
        for(var X = A.length - 1;!t.N && 0 <= X && i.t;X--) {
          t.currentTarget = A[X], h &= Mb(i, A[X], e, g, t)
        }
        if(q) {
          i = f[l];
          i.t = i.v;
          for(X = 0;!t.N && X < A.length && i.t;X++) {
            t.currentTarget = A[X], h &= Mb(i, A[X], e, l, t)
          }
        }
      }else {
        h = Nb(d, t)
      }
    }finally {
      if(A) {
        A.length = 0, rb(A)
      }
      t.$();
      yb(t)
    }
    return h
  }
  e = new hb(c, this);
  try {
    h = Nb(d, e)
  }finally {
    e.$()
  }
  return h
});
function Ob() {
}
oa(Ob, Ea);
n = Ob.prototype;
n.Da = g;
n.ma = j;
n.addEventListener = function(a, c, d, e) {
  u(this, a, c, d, e)
};
n.removeEventListener = function(a, c, d, e) {
  Ib(this, a, c, d, e)
};
n.dispatchEvent = function(a) {
  var c = a.type || a, d = s;
  if(c in d) {
    if(ea(a)) {
      a = new fb(a, this)
    }else {
      if(a instanceof fb) {
        a.target = a.target || this
      }else {
        var e = a, a = new fb(c, this);
        Eb(a, e)
      }
    }
    var e = 1, f, d = d[c], c = g in d, h;
    if(c) {
      f = [];
      for(h = this;h;h = h.ma) {
        f.push(h)
      }
      h = d[g];
      h.t = h.v;
      for(var i = f.length - 1;!a.N && 0 <= i && h.t;i--) {
        a.currentTarget = f[i], e &= Mb(h, f[i], a.type, g, a) && a.Y != l
      }
    }
    if(l in d) {
      if(h = d[l], h.t = h.v, c) {
        for(i = 0;!a.N && i < f.length && h.t;i++) {
          a.currentTarget = f[i], e &= Mb(h, f[i], a.type, l, a) && a.Y != l
        }
      }else {
        for(f = this;!a.N && f && h.t;f = f.ma) {
          a.currentTarget = f, e &= Mb(h, f, a.type, l, a) && a.Y != l
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
  Ob.h.o.call(this);
  Lb(this);
  this.ma = j
};
var Pb = o.window;
function Qb(a, c, d, e) {
  ("array" != p(a) || "array" != p(c)) && b(Error("Start and end parameters must be arrays"));
  a.length != c.length && b(Error("Start and end points must be the same length"));
  this.Z = a;
  this.Wa = c;
  this.duration = d;
  this.pa = e;
  this.coords = []
}
oa(Qb, Ob);
var Bb = {}, Rb = j;
function Sb() {
  Pb.clearTimeout(Rb);
  var a = na(), c;
  for(c in Bb) {
    Tb(Bb[c], a)
  }
  Rb = Ab() ? j : Pb.setTimeout(Sb, 20)
}
function Ub(a) {
  a = ha(a);
  delete Bb[a];
  Rb && Ab() && (Pb.clearTimeout(Rb), Rb = j)
}
n = Qb.prototype;
n.z = 0;
n.Ma = 0;
n.g = 0;
n.startTime = j;
n.La = j;
n.ja = j;
n.play = function(a) {
  if(a || 0 == this.z) {
    this.g = 0, this.coords = this.Z
  }else {
    if(1 == this.z) {
      return l
    }
  }
  Ub(this);
  this.startTime = na();
  -1 == this.z && (this.startTime -= this.duration * this.g);
  this.La = this.startTime + this.duration;
  this.ja = this.startTime;
  this.g || this.M();
  Vb(this, "play");
  -1 == this.z && Vb(this, "resume");
  this.z = 1;
  a = ha(this);
  a in Bb || (Bb[a] = this);
  Rb || (Rb = Pb.setTimeout(Sb, 20));
  Tb(this, this.startTime);
  return g
};
n.stop = function(a) {
  Ub(this);
  this.z = 0;
  if(a) {
    this.g = 1
  }
  Wb(this, this.g);
  Vb(this, "stop");
  this.Q()
};
n.o = function() {
  0 != this.z && this.stop(l);
  Vb(this, "destroy");
  Qb.h.o.call(this)
};
function Tb(a, c) {
  a.g = (c - a.startTime) / (a.La - a.startTime);
  if(1 <= a.g) {
    a.g = 1
  }
  a.Ma = 1E3 / (c - a.ja);
  a.ja = c;
  ga(a.pa) ? Wb(a, a.pa(a.g)) : Wb(a, a.g);
  1 == a.g ? (a.z = 0, Ub(a), Vb(a, "finish"), a.Q()) : 1 == a.z && a.la()
}
function Wb(a, c) {
  a.coords = Array(a.Z.length);
  for(var d = 0;d < a.Z.length;d++) {
    a.coords[d] = (a.Wa[d] - a.Z[d]) * c + a.Z[d]
  }
}
n.la = function() {
  Vb(this, "animate")
};
n.M = function() {
  Vb(this, "begin")
};
n.Q = function() {
  Vb(this, "end")
};
function Vb(a, c) {
  a.dispatchEvent(new Xb(c, a))
}
function Xb(a, c) {
  fb.call(this, a);
  this.coords = c.coords;
  this.x = c.coords[0];
  this.y = c.coords[1];
  this.cb = c.coords[2];
  this.duration = c.duration;
  this.g = c.g;
  this.ab = c.Ma;
  this.state = c.z;
  this.$a = c
}
oa(Xb, fb);
!Qa || cb("9");
var Yb = !Ra && !Qa || Qa && cb("9") || Ra && cb("1.9.1");
Qa && cb("9");
function Zb(a) {
  return(a = a.className) && "function" == typeof a.split ? a.split(/\s+/) : []
}
function $b(a, c) {
  var d = Zb(a), e = Ja(arguments, 1), f;
  f = d;
  for(var h = 0, i = 0;i < e.length;i++) {
    0 <= Ga(f, e[i]) || (f.push(e[i]), h++)
  }
  f = h == e.length;
  a.className = d.join(" ");
  return f
}
function ac(a, c) {
  var d = Zb(a), e = Ja(arguments, 1), f;
  f = d;
  for(var h = 0, i = 0;i < f.length;i++) {
    0 <= Ga(e, f[i]) && (Ia(f, i--, 1), h++)
  }
  f = h == e.length;
  a.className = d.join(" ");
  return f
}
function bc(a, c) {
  return 0 <= Ga(Zb(a), c)
}
;function cc(a) {
  return ea(a) ? document.getElementById(a) : a
}
function dc(a, c) {
  var d = c || document;
  return ec(d) ? d.querySelectorAll("." + a) : d.getElementsByClassName ? d.getElementsByClassName(a) : fc(a, c)
}
function gc(a, c) {
  var d = c || document, e = j;
  return(e = ec(d) ? d.querySelector("." + a) : dc(a, c)[0]) || j
}
function ec(a) {
  return a.querySelectorAll && a.querySelector && (!Sa || "CSS1Compat" == document.compatMode || cb("528"))
}
function fc(a, c) {
  var d, e, f, h;
  d = c || document;
  if(ec(d) && a) {
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
      "function" == typeof k.split && 0 <= Ga(k.split(/\s+/), a) && (h[f++] = d)
    }
    h.length = f;
    return h
  }
  return i
}
function hc(a) {
  return document.createTextNode(a)
}
function ic(a, c) {
  a.appendChild(c)
}
function jc(a, c, d) {
  a.insertBefore(c, a.childNodes[d] || j)
}
function kc(a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : j
}
function lc(a, c) {
  var d = c.parentNode;
  d && d.replaceChild(a, c)
}
function mc(a) {
  return Yb && a.children != aa ? a.children : Ha(a.childNodes, function(a) {
    return 1 == a.nodeType
  })
}
function nc(a, c) {
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
;function oc(a) {
  return"none" != a.style.display
}
;function pc(a, c, d, e, f) {
  Qb.call(this, c, d, e, f);
  this.element = a
}
oa(pc, Qb);
pc.prototype.da = da;
pc.prototype.la = function() {
  this.da();
  pc.h.la.call(this)
};
pc.prototype.Q = function() {
  this.da();
  pc.h.Q.call(this)
};
pc.prototype.M = function() {
  this.da();
  pc.h.M.call(this)
};
function qc(a, c, d, e, f) {
  fa(c) && (c = [c]);
  fa(d) && (d = [d]);
  pc.call(this, a, c, d, e, f);
  (1 != c.length || 1 != d.length) && b(Error("Start and end points must be 1D"))
}
oa(qc, pc);
qc.prototype.da = function() {
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
qc.prototype.show = function() {
  this.element.style.display = ""
};
function rc(a, c, d) {
  qc.call(this, a, 1, 0, c, d)
}
oa(rc, qc);
rc.prototype.M = function() {
  this.show();
  rc.h.M.call(this)
};
rc.prototype.Q = function() {
  this.element.style.display = "none";
  rc.h.Q.call(this)
};
function sc(a, c, d) {
  qc.call(this, a, 0, 1, c, d)
}
oa(sc, qc);
sc.prototype.M = function() {
  this.show();
  sc.h.M.call(this)
};
function tc(a, c, d) {
  this.ka = a;
  this.Xa = c || 0;
  this.Na = d;
  this.Sa = ma(this.Va, this)
}
oa(tc, Ea);
n = tc.prototype;
n.W = 0;
n.o = function() {
  tc.h.o.call(this);
  this.stop();
  delete this.ka;
  delete this.Na
};
n.start = function(a) {
  this.stop();
  var c = this.Sa, a = r(a) ? a : this.Xa;
  ga(c) || (c && "function" == typeof c.handleEvent ? c = ma(c.handleEvent, c) : b(Error("Invalid listener argument")));
  this.W = 2147483647 < a ? -1 : Pb.setTimeout(c, a || 0)
};
n.stop = function() {
  0 != this.W && Pb.clearTimeout(this.W);
  this.W = 0
};
n.Va = function() {
  this.W = 0;
  this.ka && this.ka.call(this.Na)
};
function uc(a, c) {
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
        if(ea(c)) {
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
        ea(d) && (d = [d]);
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
;function vc(a, c, d) {
  a.dataset ? a.dataset[c] = d : a.setAttribute("data-" + wa(c), d)
}
function wc(a, c) {
  return a.dataset ? a.dataset[c] : a.getAttribute("data-" + wa(c))
}
function xc(a, c) {
  a.dataset ? delete a.dataset[c] : a.removeAttribute("data-" + wa(c))
}
;function v(a) {
  return a != j && a !== l
}
function yc(a, c) {
  var d = a[p.call(j, c)];
  if(v(d)) {
    return d
  }
  d = a._;
  return v(d) ? d : l
}
function w(a, c) {
  return Error.call(j, "No protocol method " + a + " defined for type " + p.call(j, c) + ": " + c)
}
function zc(a) {
  return Array.prototype.slice.call(a)
}
function Ac(a) {
  return Array.prototype.slice.call(arguments)
}
function x(a) {
  if(v(v(a) ? a.u : a)) {
    a = a.u(a)
  }else {
    var c;
    var d = x[p.call(j, a)];
    v(d) ? c = d : (d = x._, v(d) ? c = d : b(w.call(j, "ICounted.-count", a)));
    a = c.call(j, a)
  }
  return a
}
var Bc = {};
function Cc(a, c) {
  var d;
  if(v(v(a) ? a.j : a)) {
    d = a.j(a, c)
  }else {
    var e = Cc[p.call(j, a)];
    v(e) ? d = e : (e = Cc._, v(e) ? d = e : b(w.call(j, "ICollection.-conj", a)));
    d = d.call(j, a, c)
  }
  return d
}
var y = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(v(v(a) ? a.H : a)) {
          e = a.H(a, c)
        }else {
          var f = y[p.call(j, a)];
          v(f) ? e = f : (f = y._, v(f) ? e = f : b(w.call(j, "IIndexed.-nth", a)));
          e = e.call(j, a, c)
        }
        return e;
      case 3:
        return v(v(a) ? a.H : a) ? e = a.H(a, c, d) : (e = y[p.call(j, a)], v(e) ? f = e : (e = y._, v(e) ? f = e : b(w.call(j, "IIndexed.-nth", a))), e = f.call(j, a, c, d)), e
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Dc = {};
function Ec(a) {
  if(v(v(a) ? a.J : a)) {
    a = a.J(a)
  }else {
    var c;
    var d = Ec[p.call(j, a)];
    v(d) ? c = d : (d = Ec._, v(d) ? c = d : b(w.call(j, "ISeq.-first", a)));
    a = c.call(j, a)
  }
  return a
}
function Fc(a) {
  if(v(v(a) ? a.K : a)) {
    a = a.K(a)
  }else {
    var c;
    var d = Fc[p.call(j, a)];
    v(d) ? c = d : (d = Fc._, v(d) ? c = d : b(w.call(j, "ISeq.-rest", a)));
    a = c.call(j, a)
  }
  return a
}
var z = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(v(v(a) ? a.D : a)) {
          e = a.D(a, c)
        }else {
          var f = z[p.call(j, a)];
          v(f) ? e = f : (f = z._, v(f) ? e = f : b(w.call(j, "ILookup.-lookup", a)));
          e = e.call(j, a, c)
        }
        return e;
      case 3:
        return v(v(a) ? a.D : a) ? e = a.D(a, c, d) : (e = z[p.call(j, a)], v(e) ? f = e : (e = z._, v(e) ? f = e : b(w.call(j, "ILookup.-lookup", a))), e = f.call(j, a, c, d)), e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Gc(a, c) {
  var d;
  if(v(v(a) ? a.fa : a)) {
    d = a.fa(a, c)
  }else {
    var e = Gc[p.call(j, a)];
    v(e) ? d = e : (e = Gc._, v(e) ? d = e : b(w.call(j, "IAssociative.-contains-key?", a)));
    d = d.call(j, a, c)
  }
  return d
}
function Hc(a, c, d) {
  if(v(v(a) ? a.U : a)) {
    a = a.U(a, c, d)
  }else {
    var e;
    var f = Hc[p.call(j, a)];
    v(f) ? e = f : (f = Hc._, v(f) ? e = f : b(w.call(j, "IAssociative.-assoc", a)));
    a = e.call(j, a, c, d)
  }
  return a
}
var Ic = {};
function Jc(a, c) {
  var d;
  if(v(v(a) ? a.ga : a)) {
    d = a.ga(a, c)
  }else {
    var e = Jc[p.call(j, a)];
    v(e) ? d = e : (e = Jc._, v(e) ? d = e : b(w.call(j, "IMap.-dissoc", a)));
    d = d.call(j, a, c)
  }
  return d
}
var Kc = {}, Lc = {};
function Mc(a, c, d) {
  if(v(v(a) ? a.ha : a)) {
    a = a.ha(a, c, d)
  }else {
    var e;
    var f = Mc[p.call(j, a)];
    v(f) ? e = f : (f = Mc._, v(f) ? e = f : b(w.call(j, "IVector.-assoc-n", a)));
    a = e.call(j, a, c, d)
  }
  return a
}
function Nc(a) {
  if(v(v(a) ? a.Ta : a)) {
    a = a.state
  }else {
    var c;
    var d = Nc[p.call(j, a)];
    v(d) ? c = d : (d = Nc._, v(d) ? c = d : b(w.call(j, "IDeref.-deref", a)));
    a = c.call(j, a)
  }
  return a
}
var Oc = {};
function Pc(a) {
  if(v(v(a) ? a.q : a)) {
    a = a.c
  }else {
    var c;
    var d = Pc[p.call(j, a)];
    v(d) ? c = d : (d = Pc._, v(d) ? c = d : b(w.call(j, "IMeta.-meta", a)));
    a = c.call(j, a)
  }
  return a
}
function Qc(a, c) {
  var d;
  if(v(v(a) ? a.r : a)) {
    d = a.r(a, c)
  }else {
    var e = Qc[p.call(j, a)];
    v(e) ? d = e : (e = Qc._, v(e) ? d = e : b(w.call(j, "IWithMeta.-with-meta", a)));
    d = d.call(j, a, c)
  }
  return d
}
var Rc = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(v(v(a) ? a.I : a)) {
          e = a.I(a, c)
        }else {
          var f = Rc[p.call(j, a)];
          v(f) ? e = f : (f = Rc._, v(f) ? e = f : b(w.call(j, "IReduce.-reduce", a)));
          e = e.call(j, a, c)
        }
        return e;
      case 3:
        return v(v(a) ? a.I : a) ? e = a.I(a, c, d) : (e = Rc[p.call(j, a)], v(e) ? f = e : (e = Rc._, v(e) ? f = e : b(w.call(j, "IReduce.-reduce", a))), e = f.call(j, a, c, d)), e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Sc(a, c) {
  var d;
  if(v(v(a) ? a.d : a)) {
    d = a.d(a, c)
  }else {
    var e = Sc[p.call(j, a)];
    v(e) ? d = e : (e = Sc._, v(e) ? d = e : b(w.call(j, "IEquiv.-equiv", a)));
    d = d.call(j, a, c)
  }
  return d
}
function Tc(a) {
  if(v(v(a) ? a.k : a)) {
    a = a.k(a)
  }else {
    var c;
    var d = Tc[p.call(j, a)];
    v(d) ? c = d : (d = Tc._, v(d) ? c = d : b(w.call(j, "IHash.-hash", a)));
    a = c.call(j, a)
  }
  return a
}
function Uc(a) {
  if(v(v(a) ? a.n : a)) {
    a = a.n(a)
  }else {
    var c;
    var d = Uc[p.call(j, a)];
    v(d) ? c = d : (d = Uc._, v(d) ? c = d : b(w.call(j, "ISeqable.-seq", a)));
    a = c.call(j, a)
  }
  return a
}
var Vc = {}, Wc = {};
function Xc(a, c) {
  var d;
  if(v(v(a) ? a.f : a)) {
    d = a.f(a, c)
  }else {
    var e = Xc[p.call(j, a)];
    v(e) ? d = e : (e = Xc._, v(e) ? d = e : b(w.call(j, "IPrintable.-pr-seq", a)));
    d = d.call(j, a, c)
  }
  return d
}
function Yc(a, c, d) {
  if(v(v(a) ? a.ua : a)) {
    a = a.ua(a, c, d)
  }else {
    var e;
    var f = Yc[p.call(j, a)];
    v(f) ? e = f : (f = Yc._, v(f) ? e = f : b(w.call(j, "IWatchable.-notify-watches", a)));
    a = e.call(j, a, c, d)
  }
  return a
}
function Zc(a, c, d) {
  if(v(v(a) ? a.ta : a)) {
    a = a.ta(a, c, d)
  }else {
    var e;
    var f = Zc[p.call(j, a)];
    v(f) ? e = f : (f = Zc._, v(f) ? e = f : b(w.call(j, "IWatchable.-add-watch", a)));
    a = e.call(j, a, c, d)
  }
  return a
}
function B(a, c) {
  return Sc.call(j, a, c)
}
function C(a) {
  return a === j
}
Tc["null"] = ca(0);
z["null"] = function() {
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
Hc["null"] = function(a, c, d) {
  return $c.call(j, c, d)
};
Bc["null"] = g;
Cc["null"] = function(a, c) {
  return D.call(j, c)
};
Rc["null"] = function() {
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
Wc["null"] = g;
Xc["null"] = function() {
  return D.call(j, "nil")
};
Kc["null"] = g;
x["null"] = ca(0);
Dc["null"] = g;
Ec["null"] = ca(j);
Fc["null"] = function() {
  return D.call(j)
};
Sc["null"] = function(a, c) {
  return C.call(j, c)
};
Qc["null"] = ca(j);
Oc["null"] = g;
Pc["null"] = ca(j);
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
Ic["null"] = g;
Jc["null"] = ca(j);
Date.prototype.d = function(a, c) {
  return a.toString() === c.toString()
};
Tc.number = ba();
Sc.number = function(a, c) {
  return a === c
};
Tc["boolean"] = function(a) {
  return a === g ? 1 : 0
};
Tc["function"] = function(a) {
  return ha.call(j, a)
};
function ad(a) {
  return a + 1
}
var bd = function() {
  return function(a, c, d, e) {
    switch(arguments.length) {
      case 2:
        var f;
        a: {
          if(v(B.call(j, 0, x.call(j, a)))) {
            f = c.call(j)
          }else {
            for(var h = y.call(j, a, 0), i = 1;;) {
              if(v(i < x.call(j, a))) {
                h = c.call(j, h, y.call(j, a, i)), i += 1
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
            if(v(i < x.call(j, a))) {
              f = c.call(j, f, y.call(j, a, i)), i += 1
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
            if(v(h < x.call(j, a))) {
              f = c.call(j, f, y.call(j, a, h)), h += 1
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
function cd(a, c) {
  this.A = a;
  this.C = c
}
n = cd.prototype;
n.k = function(a) {
  return dd.call(j, a)
};
n.I = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return bd.call(j, a, c, this.A[this.C], this.C + 1);
      case 3:
        return bd.call(j, a, c, d, this.C)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.p = g;
n.j = function(a, c) {
  return E.call(j, c, a)
};
n.d = function(a, c) {
  return ed.call(j, a, c)
};
n.F = g;
n.H = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e = c + this.C;
        return v(e < this.A.length) ? this.A[e] : j;
      case 3:
        return e = c + this.C, v(e < this.A.length) ? this.A[e] : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.u = function() {
  return this.A.length - this.C
};
n.O = g;
n.J = function() {
  return this.A[this.C]
};
n.K = function() {
  return v(this.C + 1 < this.A.length) ? new cd(this.A, this.C + 1) : D.call(j)
};
n.n = ba();
function fd(a, c) {
  return v(B.call(j, 0, a.length)) ? j : new cd(a, c)
}
function F(a, c) {
  return fd.call(j, a, c)
}
Rc.array = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return bd.call(j, a, c);
      case 3:
        return bd.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
z.array = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a[c];
      case 3:
        return y.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
y.array = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return v(c < a.length) ? a[c] : j;
      case 3:
        return v(c < a.length) ? a[c] : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
x.array = function(a) {
  return a.length
};
Uc.array = function(a) {
  return F.call(j, a, 0)
};
function G(a) {
  return v(a) ? Uc.call(j, a) : j
}
function H(a) {
  a = G.call(j, a);
  return v(a) ? Ec.call(j, a) : j
}
function J(a) {
  return Fc.call(j, G.call(j, a))
}
function K(a) {
  return v(a) ? G.call(j, J.call(j, a)) : j
}
function gd(a) {
  return H.call(j, K.call(j, a))
}
function hd(a) {
  return K.call(j, K.call(j, a))
}
function id(a) {
  for(;;) {
    if(v(K.call(j, a))) {
      a = K.call(j, a)
    }else {
      return H.call(j, a)
    }
  }
}
x._ = function(a) {
  for(var a = G.call(j, a), c = 0;;) {
    if(v(a)) {
      a = K.call(j, a), c += 1
    }else {
      return c
    }
  }
};
Sc._ = function(a, c) {
  return a === c
};
function L(a) {
  return v(a) ? l : g
}
var M = function() {
  var a = j, c = function() {
    function c(a, d, i) {
      var k = j;
      r(i) && (k = F(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, a, d, k)
    }
    function e(c, d, e) {
      for(;;) {
        if(v(e)) {
          c = a.call(j, c, d), d = H.call(j, e), e = K.call(j, e)
        }else {
          return a.call(j, c, d)
        }
      }
    }
    c.b = 2;
    c.a = function(a) {
      var c = H(a), d = H(K(a)), a = J(K(a));
      return e.call(this, c, d, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return Cc.call(j, a, e);
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}();
function N(a) {
  return x.call(j, a)
}
var P = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, a, Math.floor(c));
      case 3:
        return y.call(j, a, Math.floor(c), d)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Q = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return z.call(j, a, c);
      case 3:
        return z.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), jd = function() {
  var a = j, c = function() {
    function c(a, d, i, k) {
      var q = j;
      r(k) && (q = F(Array.prototype.slice.call(arguments, 3), 0));
      return e.call(this, a, d, i, q)
    }
    function e(c, d, e, k) {
      for(;;) {
        if(c = a.call(j, c, d, e), v(k)) {
          d = H.call(j, k), e = gd.call(j, k), k = hd.call(j, k)
        }else {
          return c
        }
      }
    }
    c.b = 3;
    c.a = function(a) {
      var c = H(a), d = H(K(a)), k = H(K(K(a))), a = J(K(K(a)));
      return e.call(this, c, d, k, a)
    };
    return c
  }(), a = function(a, e, f, h) {
    switch(arguments.length) {
      case 3:
        return Hc.call(j, a, e, f);
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 3;
  a.a = c.a;
  return a
}(), kd = function() {
  var a = j, c = function() {
    function c(a, d, i) {
      var k = j;
      r(i) && (k = F(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, a, d, k)
    }
    function e(c, d, e) {
      for(;;) {
        if(c = a.call(j, c, d), v(e)) {
          d = H.call(j, e), e = K.call(j, e)
        }else {
          return c
        }
      }
    }
    c.b = 2;
    c.a = function(a) {
      var c = H(a), d = H(K(a)), a = J(K(a));
      return e.call(this, c, d, a)
    };
    return c
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return a;
      case 2:
        return Jc.call(j, a, e);
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}();
function ld(a, c) {
  return Qc.call(j, a, c)
}
function md(a) {
  var c;
  v(a) ? (c = a.l, c = v(c) ? L.call(j, a.hasOwnProperty("cljs$core$IMeta$")) : c) : c = a;
  c = v(c) ? g : yc.call(j, Oc, a);
  return v(c) ? Pc.call(j, a) : j
}
function nd(a) {
  return Tc.call(j, a)
}
function od(a) {
  return L.call(j, G.call(j, a))
}
function pd(a) {
  if(v(C.call(j, a))) {
    a = l
  }else {
    var c;
    v(a) ? (c = a.p, c = v(c) ? L.call(j, a.hasOwnProperty("cljs$core$ICollection$")) : c) : c = a;
    a = v(c) ? g : yc.call(j, Bc, a)
  }
  return a
}
function qd(a) {
  if(v(C.call(j, a))) {
    a = l
  }else {
    var c;
    v(a) ? (c = a.Ua, c = v(c) ? L.call(j, a.hasOwnProperty("cljs$core$ISet$")) : c) : c = a;
    a = v(c) ? g : yc.call(j, Kc, a)
  }
  return a
}
function rd(a) {
  var c;
  v(a) ? (c = a.F, c = v(c) ? L.call(j, a.hasOwnProperty("cljs$core$ISequential$")) : c) : c = a;
  return v(c) ? g : yc.call(j, Vc, a)
}
function sd(a) {
  if(v(C.call(j, a))) {
    a = l
  }else {
    var c;
    v(a) ? (c = a.ra, c = v(c) ? L.call(j, a.hasOwnProperty("cljs$core$IMap$")) : c) : c = a;
    a = v(c) ? g : yc.call(j, Ic, a)
  }
  return a
}
function td(a) {
  var c;
  v(a) ? (c = a.sa, c = v(c) ? L.call(j, a.hasOwnProperty("cljs$core$IVector$")) : c) : c = a;
  return v(c) ? g : yc.call(j, Lc, a)
}
function ud() {
  return{}
}
function vd(a) {
  var c = Ac.call(j);
  zb.call(j, a, function(a, e) {
    return c.push(e)
  });
  return c
}
function wd(a, c) {
  return delete a[c]
}
var xd = ud.call(j);
function yd(a) {
  return aa === a
}
function zd(a) {
  if(v(C.call(j, a))) {
    a = l
  }else {
    var c;
    v(a) ? (c = a.O, c = v(c) ? L.call(j, a.hasOwnProperty("cljs$core$ISeq$")) : c) : c = a;
    a = v(c) ? g : yc.call(j, Dc, a)
  }
  return a
}
function Ad(a) {
  return v(a) ? g : l
}
function Bd(a) {
  var c = ea.call(j, a);
  return v(c) ? L.call(j, function() {
    var c = B.call(j, a.charAt(0), "\ufdd0");
    return v(c) ? c : B.call(j, a.charAt(0), "\ufdd1")
  }()) : c
}
function Cd(a) {
  var c = ea.call(j, a);
  return v(c) ? B.call(j, a.charAt(0), "\ufdd0") : c
}
function Dd(a) {
  var c = ea.call(j, a);
  return v(c) ? B.call(j, a.charAt(0), "\ufdd1") : c
}
function Ed(a) {
  return fa.call(j, a)
}
function Fd(a, c) {
  return v(z.call(j, a, c, xd) === xd) ? l : g
}
function Gd(a, c) {
  return La.call(j, a, c)
}
function Hd(a) {
  return v(B.call(j, a, Gd)) ? Gd : function(c, d) {
    var e = a.call(j, c, d);
    return v(Ed.call(j, e)) ? e : v(e) ? -1 : v(a.call(j, d, c)) ? 1 : 0
  }
}
var Kd = function() {
  var a = j;
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        return a.call(j, Gd, c);
      case 2:
        var e;
        v(G.call(j, d)) ? (e = Id.call(j, d), Ma.call(j, e, Hd.call(j, c)), e = G.call(j, e)) : e = Jd;
        return e
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Ld = function() {
  function a(a, c, f) {
    return Kd.call(j, function(f, i) {
      return Hd.call(j, c).call(j, a.call(j, f), a.call(j, i))
    }, f)
  }
  var c = j;
  return c = function(d, e, f) {
    switch(arguments.length) {
      case 2:
        return c.call(j, d, Gd, e);
      case 3:
        return a.call(this, d, e, f)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Md = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Rc.call(j, c, a);
      case 3:
        return Rc.call(j, d, a, c)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Nd = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e = G.call(j, c);
        return v(e) ? Md.call(j, a, H.call(j, e), K.call(j, e)) : a.call(j);
      case 3:
        a: {
          for(var f = c, h = G.call(j, d);;) {
            if(v(h)) {
              f = a.call(j, f, H.call(j, h)), h = K.call(j, h)
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
Rc._ = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Nd.call(j, c, a);
      case 3:
        return Nd.call(j, c, d, a)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var Od = function() {
  var a = j, c = function() {
    function c(a, d, i) {
      var k = j;
      r(i) && (k = F(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, a, d, k)
    }
    function e(c, d, e) {
      for(;;) {
        if(v(a.call(j, c, d))) {
          if(v(K.call(j, e))) {
            c = d, d = H.call(j, e), e = K.call(j, e)
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
      var c = H(a), d = H(K(a)), a = J(K(a));
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
}(), Pd = function() {
  var a = j, c = function() {
    function c(a, d, i) {
      var k = j;
      r(i) && (k = F(Array.prototype.slice.call(arguments, 2), 0));
      return e.call(this, a, d, k)
    }
    function e(c, d, e) {
      for(;;) {
        if(v(a.call(j, c, d))) {
          if(v(K.call(j, e))) {
            c = d, d = H.call(j, e), e = K.call(j, e)
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
      var c = H(a), d = H(K(a)), a = J(K(a));
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
}(), Qd = function() {
  var a = j, c = function() {
    function c(d, f, h) {
      var i = j;
      r(h) && (i = F(Array.prototype.slice.call(arguments, 2), 0));
      return Md.call(j, a, a.call(j, d, f), i)
    }
    c.b = 2;
    c.a = function(c) {
      var d = H(c), h = H(K(c)), c = J(K(c));
      return Md.call(j, a, a.call(j, d, h), c)
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
function R(a, c) {
  for(var d = c, e = G.call(j, a);;) {
    var f = e;
    if(v(v(f) ? 0 < d : f)) {
      d -= 1, e = K.call(j, e)
    }else {
      return e
    }
  }
}
y._ = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        var f = R.call(j, a, c);
        v(f) ? e = H.call(j, f) : b(Error("Index out of bounds"));
        return e;
      case 3:
        return e = R.call(j, a, c), v(e) ? H.call(j, e) : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var Rd = function() {
  var a = j, c = function() {
    function c(a, d) {
      var i = j;
      r(d) && (i = F(Array.prototype.slice.call(arguments, 1), 0));
      return e.call(this, a, i)
    }
    function e(c, d) {
      return function(c, d) {
        for(;;) {
          if(v(d)) {
            var e = c.append(a.call(j, H.call(j, d))), f = K.call(j, d), c = e, d = f
          }else {
            return a.call(j, c)
          }
        }
      }.call(j, new Da(a.call(j, c)), d)
    }
    c.b = 1;
    c.a = function(a) {
      var c = H(a), a = J(a);
      return e.call(this, c, a)
    };
    return c
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return v(C.call(j, a)) ? "" : v("\ufdd0'else") ? a.toString() : j;
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 1;
  a.a = c.a;
  return a
}(), T = function() {
  var a = j, c = function() {
    function a(c, d) {
      var h = j;
      r(d) && (h = F(Array.prototype.slice.call(arguments, 1), 0));
      return S.call(j, Rd, c, h)
    }
    a.b = 1;
    a.a = function(a) {
      var c = H(a), a = J(a);
      return S.call(j, Rd, c, a)
    };
    return a
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 0:
        return"";
      case 1:
        return v(Dd.call(j, a)) ? a.substring(2, a.length) : v(Cd.call(j, a)) ? Rd.call(j, ":", a.substring(2, a.length)) : v(C.call(j, a)) ? "" : v("\ufdd0'else") ? a.toString() : j;
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 1;
  a.a = c.a;
  return a
}(), Sd = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), Td = function() {
  var a = j;
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        return v(Cd.call(j, c)) ? c : v(Dd.call(j, c)) ? Rd.call(j, "\ufdd0", "'", Sd.call(j, c, 2)) : v("\ufdd0'else") ? Rd.call(j, "\ufdd0", "'", c) : j;
      case 2:
        return a.call(j, Rd.call(j, c, "/", d))
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function ed(a, c) {
  return Ad.call(j, v(rd.call(j, c)) ? function() {
    for(var d = G.call(j, a), e = G.call(j, c);;) {
      if(v(C.call(j, d))) {
        return C.call(j, e)
      }
      if(v(C.call(j, e))) {
        return l
      }
      if(v(B.call(j, H.call(j, d), H.call(j, e)))) {
        d = K.call(j, d), e = K.call(j, e)
      }else {
        return v("\ufdd0'else") ? l : j
      }
    }
  }() : j)
}
function Ud(a, c) {
  return a ^ c + 2654435769 + (a << 6) + (a >> 2)
}
function dd(a) {
  return Md.call(j, function(a, d) {
    return Ud.call(j, a, nd.call(j, d))
  }, nd.call(j, H.call(j, a)), K.call(j, a))
}
function Vd(a, c, d, e) {
  this.c = a;
  this.V = c;
  this.S = d;
  this.s = e
}
n = Vd.prototype;
n.k = function(a) {
  return dd.call(j, a)
};
n.F = g;
n.p = g;
n.j = function(a, c) {
  return new Vd(this.c, c, a, this.s + 1)
};
n.n = ba();
n.u = m("s");
n.O = g;
n.J = m("V");
n.K = m("S");
n.d = function(a, c) {
  return ed.call(j, a, c)
};
n.r = function(a, c) {
  return new Vd(c, this.V, this.S, this.s)
};
n.l = g;
n.q = m("c");
function Wd(a) {
  this.c = a
}
n = Wd.prototype;
n.k = function(a) {
  return dd.call(j, a)
};
n.F = g;
n.p = g;
n.j = function(a, c) {
  return new Vd(this.c, c, j, 1)
};
n.n = ca(j);
n.u = ca(0);
n.O = g;
n.J = ca(j);
n.K = ca(j);
n.d = function(a, c) {
  return ed.call(j, a, c)
};
n.r = function(a, c) {
  return new Wd(c)
};
n.l = g;
n.q = m("c");
var Jd = new Wd(j);
function Xd(a) {
  return Md.call(j, M, Jd, a)
}
var D = function() {
  function a(a) {
    var d = j;
    r(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return Md.call(j, M, Jd, Xd.call(j, d))
  }
  a.b = 0;
  a.a = function(a) {
    a = G(a);
    return Md.call(j, M, Jd, Xd.call(j, a))
  };
  return a
}();
function Yd(a, c, d) {
  this.c = a;
  this.V = c;
  this.S = d
}
n = Yd.prototype;
n.n = ba();
n.k = function(a) {
  return dd.call(j, a)
};
n.d = function(a, c) {
  return ed.call(j, a, c)
};
n.F = g;
n.p = g;
n.j = function(a, c) {
  return new Yd(j, c, a)
};
n.O = g;
n.J = m("V");
n.K = function() {
  return v(C.call(j, this.S)) ? Jd : this.S
};
n.l = g;
n.q = m("c");
n.r = function(a, c) {
  return new Yd(c, this.V, this.S)
};
function E(a, c) {
  return new Yd(j, a, c)
}
Rc.string = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return bd.call(j, a, c);
      case 3:
        return bd.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
z.string = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, a, c);
      case 3:
        return y.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
y.string = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return v(c < x.call(j, a)) ? a.charAt(c) : j;
      case 3:
        return v(c < x.call(j, a)) ? a.charAt(c) : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
x.string = function(a) {
  return a.length
};
Uc.string = function(a) {
  return fd.call(j, a, 0)
};
Tc.string = function(a) {
  return ua.call(j, a)
};
String.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Q.call(j, c, this.toString());
      case 3:
        return Q.call(j, c, this.toString(), d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
String.prototype.apply = function(a, c) {
  return v(2 > N.call(j, c)) ? Q.call(j, c[0], a) : Q.call(j, c[0], a, c[1])
};
function Zd(a) {
  var c = a.x;
  if(v(a.na)) {
    return c
  }
  a.x = c.call(j);
  a.na = g;
  return a.x
}
function U(a, c, d) {
  this.c = a;
  this.na = c;
  this.x = d
}
n = U.prototype;
n.n = function(a) {
  return G.call(j, Zd.call(j, a))
};
n.k = function(a) {
  return dd.call(j, a)
};
n.d = function(a, c) {
  return ed.call(j, a, c)
};
n.F = g;
n.p = g;
n.j = function(a, c) {
  return E.call(j, c, a)
};
n.O = g;
n.J = function(a) {
  return H.call(j, Zd.call(j, a))
};
n.K = function(a) {
  return J.call(j, Zd.call(j, a))
};
n.l = g;
n.q = m("c");
n.r = function(a, c) {
  return new U(c, this.na, this.x)
};
function Id(a) {
  for(var c = Ac.call(j);;) {
    if(v(G.call(j, a))) {
      c.push(H.call(j, a)), a = K.call(j, a)
    }else {
      return c
    }
  }
}
function $d(a, c) {
  for(var d = a, e = c, f = 0;;) {
    var h;
    h = 0 < e;
    h = v(h) ? G.call(j, d) : h;
    if(v(h)) {
      d = K.call(j, d), e -= 1, f += 1
    }else {
      return f
    }
  }
}
var be = function ae(c) {
  return v(C.call(j, c)) ? j : v(C.call(j, K.call(j, c))) ? G.call(j, H.call(j, c)) : v("\ufdd0'else") ? E.call(j, H.call(j, c), ae.call(j, K.call(j, c))) : j
}, ce = function() {
  function a(a, c) {
    return new U(j, l, function() {
      var d = G.call(j, a);
      return v(d) ? E.call(j, H.call(j, d), e.call(j, J.call(j, d), c)) : c
    })
  }
  function c(a) {
    return new U(j, l, function() {
      return a
    })
  }
  function d() {
    return new U(j, l, ca(j))
  }
  var e = j, f = function() {
    function a(d, e, f) {
      var h = j;
      r(f) && (h = F(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, d, e, h)
    }
    function c(a, d, f) {
      return function A(a, c) {
        return new U(j, l, function() {
          var d = G.call(j, a);
          return v(d) ? E.call(j, H.call(j, d), A.call(j, J.call(j, d), c)) : v(c) ? A.call(j, H.call(j, c), K.call(j, c)) : j
        })
      }.call(j, e.call(j, a, d), f)
    }
    a.b = 2;
    a.a = function(a) {
      var d = H(a), e = H(K(a)), a = J(K(a));
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
}(), de = function() {
  var a = j, c = function() {
    function a(d, h, i, k, q) {
      var t = j;
      r(q) && (t = F(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, d, h, i, k, t)
    }
    function c(a, d, e, k, q) {
      return E.call(j, a, E.call(j, d, E.call(j, e, E.call(j, k, be.call(j, q)))))
    }
    a.b = 4;
    a.a = function(a) {
      var d = H(a), i = H(K(a)), k = H(K(K(a))), q = H(K(K(K(a)))), a = J(K(K(K(a))));
      return c.call(this, d, i, k, q, a)
    };
    return a
  }(), a = function(a, e, f, h, i) {
    switch(arguments.length) {
      case 1:
        return G.call(j, a);
      case 2:
        return E.call(j, a, e);
      case 3:
        return E.call(j, a, E.call(j, e, f));
      case 4:
        return E.call(j, a, E.call(j, e, E.call(j, f, h)));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 4;
  a.a = c.a;
  return a
}(), S = function() {
  var a = j, c = function() {
    function a(d, h, i, k, q, t) {
      var I = j;
      r(t) && (I = F(Array.prototype.slice.call(arguments, 5), 0));
      return c.call(this, d, h, i, k, q, I)
    }
    function c(a, d, e, k, q, t) {
      d = E.call(j, d, E.call(j, e, E.call(j, k, E.call(j, q, be.call(j, t)))));
      e = a.b;
      return v(a.a) ? v($d.call(j, d, e) <= e) ? a.apply(a, Id.call(j, d)) : a.a(d) : a.apply(a, Id.call(j, d))
    }
    a.b = 5;
    a.a = function(a) {
      var d = H(a), i = H(K(a)), k = H(K(K(a))), q = H(K(K(K(a)))), t = H(K(K(K(K(a))))), a = J(K(K(K(K(a)))));
      return c.call(this, d, i, k, q, t, a)
    };
    return a
  }(), a = function(a, e, f, h, i, k) {
    switch(arguments.length) {
      case 2:
        var q = a, t = e, I = q.b;
        return v(q.a) ? v($d.call(j, t, I + 1) <= I) ? q.apply(q, Id.call(j, t)) : q.a(t) : q.apply(q, Id.call(j, t));
      case 3:
        return q = a, t = de.call(j, e, f), I = q.b, v(q.a) ? v($d.call(j, t, I) <= I) ? q.apply(q, Id.call(j, t)) : q.a(t) : q.apply(q, Id.call(j, t));
      case 4:
        return q = a, t = de.call(j, e, f, h), I = q.b, v(q.a) ? v($d.call(j, t, I) <= I) ? q.apply(q, Id.call(j, t)) : q.a(t) : q.apply(q, Id.call(j, t));
      case 5:
        return q = a, t = de.call(j, e, f, h, i), I = q.b, v(q.a) ? v($d.call(j, t, I) <= I) ? q.apply(q, Id.call(j, t)) : q.a(t) : q.apply(q, Id.call(j, t));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 5;
  a.a = c.a;
  return a
}(), ee = function() {
  var a = j, c = function() {
    function a(c, d, h) {
      var i = j;
      r(h) && (i = F(Array.prototype.slice.call(arguments, 2), 0));
      return L.call(j, S.call(j, B, c, d, i))
    }
    a.b = 2;
    a.a = function(a) {
      var c = H(a), d = H(K(a)), a = J(K(a));
      return L.call(j, S.call(j, B, c, d, a))
    };
    return a
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 1:
        return l;
      case 2:
        return L.call(j, B.call(j, a, e));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}();
function fe(a, c) {
  for(;;) {
    if(v(C.call(j, G.call(j, c)))) {
      return g
    }
    if(v(a.call(j, H.call(j, c)))) {
      var d = a, e = K.call(j, c), a = d, c = e
    }else {
      return v("\ufdd0'else") ? l : j
    }
  }
}
function ge(a, c) {
  for(;;) {
    if(v(G.call(j, c))) {
      var d = a.call(j, H.call(j, c));
      if(v(d)) {
        return d
      }
      var d = a, e = K.call(j, c), a = d, c = e
    }else {
      return j
    }
  }
}
function he(a) {
  return a
}
function ie(a) {
  return function() {
    var c = j, d = function() {
      function c(d, e, i) {
        var k = j;
        r(i) && (k = F(Array.prototype.slice.call(arguments, 2), 0));
        return L.call(j, S.call(j, a, d, e, k))
      }
      c.b = 2;
      c.a = function(c) {
        var d = H(c), e = H(K(c)), c = J(K(c));
        return L.call(j, S.call(j, a, d, e, c))
      };
      return c
    }(), c = function(c, f, h) {
      switch(arguments.length) {
        case 0:
          return L.call(j, a.call(j));
        case 1:
          return L.call(j, a.call(j, c));
        case 2:
          return L.call(j, a.call(j, c, f));
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
var je = function() {
  function a(a, c, d, e) {
    return function() {
      function f(t) {
        var A = j;
        r(t) && (A = F(Array.prototype.slice.call(arguments, 0), 0));
        return S.call(j, a, c, d, e, A)
      }
      f.b = 0;
      f.a = function(f) {
        f = G(f);
        return S.call(j, a, c, d, e, f)
      };
      return f
    }()
  }
  function c(a, c, d) {
    return function() {
      function e(f) {
        var q = j;
        r(f) && (q = F(Array.prototype.slice.call(arguments, 0), 0));
        return S.call(j, a, c, d, q)
      }
      e.b = 0;
      e.a = function(e) {
        e = G(e);
        return S.call(j, a, c, d, e)
      };
      return e
    }()
  }
  function d(a, c) {
    return function() {
      function d(e) {
        var f = j;
        r(e) && (f = F(Array.prototype.slice.call(arguments, 0), 0));
        return S.call(j, a, c, f)
      }
      d.b = 0;
      d.a = function(d) {
        d = G(d);
        return S.call(j, a, c, d)
      };
      return d
    }()
  }
  var e = j, f = function() {
    function a(d, e, f, h, A) {
      var O = j;
      r(A) && (O = F(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, d, e, f, h, O)
    }
    function c(a, d, e, f, h) {
      return function() {
        function c(a) {
          var d = j;
          r(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
          return i.call(this, d)
        }
        function i(c) {
          return S.call(j, a, d, e, f, ce.call(j, h, c))
        }
        c.b = 0;
        c.a = function(a) {
          a = G(a);
          return i.call(this, a)
        };
        return c
      }()
    }
    a.b = 4;
    a.a = function(a) {
      var d = H(a), e = H(K(a)), f = H(K(K(a))), h = H(K(K(K(a)))), a = J(K(K(K(a))));
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
function ke(a, c) {
  return function e(c, h) {
    return new U(j, l, function() {
      var i = G.call(j, h);
      return v(i) ? E.call(j, a.call(j, c, H.call(j, i)), e.call(j, c + 1, J.call(j, i))) : j
    })
  }.call(j, 0, c)
}
var V = function() {
  function a(a, c, d, f) {
    return new U(j, l, function() {
      var t = G.call(j, c), I = G.call(j, d), A = G.call(j, f);
      return v(v(t) ? v(I) ? A : I : t) ? E.call(j, a.call(j, H.call(j, t), H.call(j, I), H.call(j, A)), e.call(j, a, J.call(j, t), J.call(j, I), J.call(j, A))) : j
    })
  }
  function c(a, c, d) {
    return new U(j, l, function() {
      var f = G.call(j, c), t = G.call(j, d);
      return v(v(f) ? t : f) ? E.call(j, a.call(j, H.call(j, f), H.call(j, t)), e.call(j, a, J.call(j, f), J.call(j, t))) : j
    })
  }
  function d(a, c) {
    return new U(j, l, function() {
      var d = G.call(j, c);
      return v(d) ? E.call(j, a.call(j, H.call(j, d)), e.call(j, a, J.call(j, d))) : j
    })
  }
  var e = j, f = function() {
    function a(d, e, f, h, A) {
      var O = j;
      r(A) && (O = F(Array.prototype.slice.call(arguments, 4), 0));
      return c.call(this, d, e, f, h, O)
    }
    function c(a, d, f, h, i) {
      return e.call(j, function(c) {
        return S.call(j, a, c)
      }, function X(a) {
        return new U(j, l, function() {
          var c = e.call(j, G, a);
          return v(fe.call(j, he, c)) ? E.call(j, e.call(j, H, c), X.call(j, e.call(j, J, c))) : j
        })
      }.call(j, M.call(j, i, h, f, d)))
    }
    a.b = 4;
    a.a = function(a) {
      var d = H(a), e = H(K(a)), f = H(K(K(a))), h = H(K(K(K(a)))), a = J(K(K(K(a))));
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
}(), me = function le(c, d) {
  return new U(j, l, function() {
    if(v(0 < c)) {
      var e = G.call(j, d);
      return v(e) ? E.call(j, H.call(j, e), le.call(j, c - 1, J.call(j, e))) : j
    }
    return j
  })
};
function ne(a, c) {
  function d(a, c) {
    for(;;) {
      var d = G.call(j, c), i = 0 < a;
      if(v(v(i) ? d : i)) {
        i = a - 1, d = J.call(j, d), a = i, c = d
      }else {
        return d
      }
    }
  }
  return new U(j, l, function() {
    return d.call(j, a, c)
  })
}
function oe(a, c) {
  function d(a, c) {
    for(;;) {
      var d = G.call(j, c), i;
      i = d;
      i = v(i) ? a.call(j, H.call(j, d)) : i;
      if(v(i)) {
        i = a, d = J.call(j, d), a = i, c = d
      }else {
        return d
      }
    }
  }
  return new U(j, l, function() {
    return d.call(j, a, c)
  })
}
var pe = function() {
  function a(a) {
    return new U(j, l, function() {
      return E.call(j, a, c.call(j, a))
    })
  }
  var c = j;
  return c = function(d, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, d);
      case 2:
        return me.call(j, d, c.call(j, e))
    }
    b("Invalid arity: " + arguments.length)
  }
}(), qe = function() {
  function a(a, d) {
    return new U(j, l, function() {
      var h = G.call(j, a), i = G.call(j, d);
      return v(v(h) ? i : h) ? E.call(j, H.call(j, h), E.call(j, H.call(j, i), c.call(j, J.call(j, h), J.call(j, i)))) : j
    })
  }
  var c = j, d = function() {
    function a(c, e, k) {
      var q = j;
      r(k) && (q = F(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, c, e, q)
    }
    function d(a, e, f) {
      return new U(j, l, function() {
        var d = V.call(j, G, M.call(j, f, e, a));
        return v(fe.call(j, he, d)) ? ce.call(j, V.call(j, H, d), S.call(j, c, V.call(j, J, d))) : j
      })
    }
    a.b = 2;
    a.a = function(a) {
      var c = H(a), e = H(K(a)), a = J(K(a));
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
function re(a, c) {
  return ne.call(j, 1, qe.call(j, pe.call(j, a), c))
}
function se(a) {
  return function d(a, f) {
    return new U(j, l, function() {
      var h = G.call(j, a);
      return v(h) ? E.call(j, H.call(j, h), d.call(j, J.call(j, h), f)) : v(G.call(j, f)) ? d.call(j, H.call(j, f), J.call(j, f)) : j
    })
  }.call(j, j, a)
}
var te = function() {
  var a = j, c = function() {
    function a(c, d, h) {
      var i = j;
      r(h) && (i = F(Array.prototype.slice.call(arguments, 2), 0));
      return se.call(j, S.call(j, V, c, d, i))
    }
    a.b = 2;
    a.a = function(a) {
      var c = H(a), d = H(K(a)), a = J(K(a));
      return se.call(j, S.call(j, V, c, d, a))
    };
    return a
  }(), a = function(a, e, f) {
    switch(arguments.length) {
      case 2:
        return se.call(j, V.call(j, a, e));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 2;
  a.a = c.a;
  return a
}(), ve = function ue(c, d) {
  return new U(j, l, function() {
    var e = G.call(j, d);
    if(v(e)) {
      var f = H.call(j, e), e = J.call(j, e);
      return v(c.call(j, f)) ? E.call(j, f, ue.call(j, c, e)) : ue.call(j, c, e)
    }
    return j
  })
};
function we(a, c) {
  return ve.call(j, ie.call(j, a), c)
}
function xe(a, c) {
  return Md.call(j, Cc, a, c)
}
var ye = function() {
  function a(a, c, h, i) {
    return new U(j, l, function() {
      var k = G.call(j, i);
      if(v(k)) {
        var q = me.call(j, a, k);
        return v(B.call(j, a, N.call(j, q))) ? E.call(j, q, d.call(j, a, c, h, ne.call(j, c, k))) : D.call(j, me.call(j, a, ce.call(j, q, h)))
      }
      return j
    })
  }
  function c(a, c, h) {
    return new U(j, l, function() {
      var i = G.call(j, h);
      if(v(i)) {
        var k = me.call(j, a, i);
        return v(B.call(j, a, N.call(j, k))) ? E.call(j, k, d.call(j, a, c, ne.call(j, c, i))) : j
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
}(), W = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Md.call(j, Q, a, c);
      case 3:
        var e;
        a: {
          for(var f = xd, h = a, i = G.call(j, c);;) {
            if(v(i)) {
              h = Q.call(j, h, H.call(j, i), f);
              if(v(f === h)) {
                e = d;
                break a
              }
              i = K.call(j, i)
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
}(), Ae = function ze(c, d, e) {
  var f = P.call(j, d, 0, j), d = R.call(j, d, 1);
  return v(d) ? jd.call(j, c, f, ze.call(j, Q.call(j, c, f), d, e)) : jd.call(j, c, f, e)
}, Be = function() {
  function a(a, e, f, h) {
    var i = j;
    r(h) && (i = F(Array.prototype.slice.call(arguments, 3), 0));
    return c.call(this, a, e, f, i)
  }
  function c(c, e, f, h) {
    var i = P.call(j, e, 0, j), e = R.call(j, e, 1);
    return v(e) ? jd.call(j, c, i, S.call(j, a, Q.call(j, c, i), e, f, h)) : jd.call(j, c, i, S.call(j, f, Q.call(j, c, i), h))
  }
  a.b = 3;
  a.a = function(a) {
    var e = H(a), f = H(K(a)), h = H(K(K(a))), a = J(K(K(a)));
    return c.call(this, e, f, h, a)
  };
  return a
}();
function Ce(a, c) {
  this.c = a;
  this.e = c
}
n = Ce.prototype;
n.k = function(a) {
  return dd.call(j, a)
};
n.D = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, a, c, j);
      case 3:
        return y.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.U = function(a, c, d) {
  a = zc.call(j, this.e);
  a[c] = d;
  return new Ce(this.c, a)
};
n.F = g;
n.p = g;
n.j = function(a, c) {
  var d = zc.call(j, this.e);
  d.push(c);
  return new Ce(this.c, d)
};
n.I = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return bd.call(j, this.e, c);
      case 3:
        return bd.call(j, this.e, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.n = function() {
  var a = this;
  return v(0 < a.e.length) ? function d(e) {
    return new U(j, l, function() {
      return v(e < a.e.length) ? E.call(j, a.e[e], d.call(j, e + 1)) : j
    })
  }.call(j, 0) : j
};
n.u = function() {
  return this.e.length
};
n.sa = g;
n.ha = function(a, c, d) {
  return Hc.call(j, a, c, d)
};
n.d = function(a, c) {
  return ed.call(j, a, c)
};
n.r = function(a, c) {
  return new Ce(c, this.e)
};
n.l = g;
n.q = m("c");
n.H = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e = 0 <= c;
        return v(v(e) ? c < this.e.length : e) ? this.e[c] : j;
      case 3:
        return e = 0 <= c, v(v(e) ? c < this.e.length : e) ? this.e[c] : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var De = new Ce(j, Ac.call(j));
function Y(a) {
  return new Ce(j, a)
}
Ce.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return z.call(j, this, c);
      case 3:
        return z.call(j, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Z(a) {
  return Md.call(j, M, De, a)
}
var Ee = function() {
  function a(a) {
    var d = j;
    r(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return Z.call(j, d)
  }
  a.b = 0;
  a.a = function(a) {
    a = G(a);
    return Z.call(j, a)
  };
  return a
}();
function Fe(a, c, d, e) {
  this.c = a;
  this.T = c;
  this.start = d;
  this.end = e
}
n = Fe.prototype;
n.k = function(a) {
  return dd.call(j, a)
};
n.D = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, a, c, j);
      case 3:
        return y.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.U = function(a, c, d) {
  a = this.start + c;
  return new Fe(this.c, Hc.call(j, this.T, a, d), this.start, this.end > a + 1 ? this.end : a + 1)
};
n.F = g;
n.p = g;
n.j = function(a, c) {
  return new Fe(this.c, Mc.call(j, this.T, this.end, c), this.start, this.end + 1)
};
n.I = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return bd.call(j, a, c);
      case 3:
        return bd.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.n = function() {
  var a = this;
  return function d(e) {
    return v(B.call(j, e, a.end)) ? j : E.call(j, y.call(j, a.T, e), new U(j, l, function() {
      return d.call(j, e + 1)
    }))
  }.call(j, a.start)
};
n.u = function() {
  return this.end - this.start
};
n.sa = g;
n.ha = function(a, c, d) {
  return Hc.call(j, a, c, d)
};
n.d = function(a, c) {
  return ed.call(j, a, c)
};
n.r = function(a, c) {
  return new Fe(c, this.T, this.start, this.end)
};
n.l = g;
n.q = m("c");
n.H = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return y.call(j, this.T, this.start + c);
      case 3:
        return y.call(j, this.T, this.start + c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var Ge = function() {
  var a = j;
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(j, c, d, N.call(j, c));
      case 3:
        return new Fe(j, c, d, e)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
Fe.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return z.call(j, this, c);
      case 3:
        return z.call(j, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function He() {
}
He.prototype.d = ca(l);
var Ie = new He;
function Je(a, c) {
  return Ad.call(j, v(sd.call(j, c)) ? v(B.call(j, N.call(j, a), N.call(j, c))) ? fe.call(j, he, V.call(j, function(a) {
    return B.call(j, Q.call(j, c, H.call(j, a), Ie), gd.call(j, a))
  }, a)) : j : j)
}
function Ke(a, c, d) {
  for(var e = d.length, f = 0;;) {
    if(v(f < e)) {
      if(v(B.call(j, c, d[f]))) {
        return f
      }
      f += a
    }else {
      return j
    }
  }
}
var Le = function() {
  var a = j;
  return a = function(c, d, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(j, c, d, g, l);
      case 4:
        var h = ea.call(j, c);
        return v(v(h) ? d.hasOwnProperty(c) : h) ? e : f
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Me(a, c, d) {
  this.c = a;
  this.keys = c;
  this.G = d
}
n = Me.prototype;
n.k = function(a) {
  return dd.call(j, a)
};
n.D = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return z.call(j, a, c, j);
      case 3:
        return Le.call(j, c, this.G, this.G[c], d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.U = function(a, c, d) {
  if(v(ea.call(j, c))) {
    var a = Cb.call(j, this.G), e = a.hasOwnProperty(c);
    a[c] = d;
    if(v(e)) {
      return new Me(this.c, this.keys, a)
    }
    d = zc.call(j, this.keys);
    d.push(c);
    return new Me(this.c, d, a)
  }
  return ld.call(j, xe.call(j, $c.call(j, c, d), G.call(j, a)), this.c)
};
n.fa = function(a, c) {
  return Le.call(j, c, this.G)
};
n.p = g;
n.j = function(a, c) {
  return v(td.call(j, c)) ? Hc.call(j, a, y.call(j, c, 0), y.call(j, c, 1)) : Md.call(j, Cc, a, c)
};
n.n = function() {
  var a = this;
  return v(0 < a.keys.length) ? V.call(j, function(c) {
    return Ee.call(j, c, a.G[c])
  }, a.keys) : j
};
n.u = function() {
  return this.keys.length
};
n.d = function(a, c) {
  return Je.call(j, a, c)
};
n.r = function(a, c) {
  return new Me(c, this.keys, this.G)
};
n.l = g;
n.q = m("c");
n.ra = g;
n.ga = function(a, c) {
  var d = ea.call(j, c);
  if(v(v(d) ? this.G.hasOwnProperty(c) : d)) {
    var d = zc.call(j, this.keys), e = Cb.call(j, this.G);
    d.splice(Ke.call(j, 1, c, d), 1);
    wd.call(j, e, c);
    return new Me(this.c, d, e)
  }
  return a
};
Ac.call(j);
function $(a, c) {
  return new Me(j, a, c)
}
Me.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return z.call(j, this, c);
      case 3:
        return z.call(j, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Ne(a, c, d) {
  this.c = a;
  this.s = c;
  this.w = d
}
n = Ne.prototype;
n.k = function(a) {
  return dd.call(j, a)
};
n.D = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return z.call(j, a, c, j);
      case 3:
        var e = this.w[nd.call(j, c)], f = v(e) ? Ke.call(j, 2, c, e) : j;
        return v(f) ? e[f + 1] : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.U = function(a, c, d) {
  var a = nd.call(j, c), e = this.w[a];
  if(v(e)) {
    var e = zc.call(j, e), f = Cb.call(j, this.w);
    f[a] = e;
    a = Ke.call(j, 2, c, e);
    if(v(a)) {
      return e[a + 1] = d, new Ne(this.c, this.s, f)
    }
    e.push(c, d);
    return new Ne(this.c, this.s + 1, f)
  }
  e = Cb.call(j, this.w);
  e[a] = Ac.call(j, c, d);
  return new Ne(this.c, this.s + 1, e)
};
n.fa = function(a, c) {
  var d = this.w[nd.call(j, c)], d = v(d) ? Ke.call(j, 2, c, d) : j;
  return v(d) ? g : l
};
n.p = g;
n.j = function(a, c) {
  return v(td.call(j, c)) ? Hc.call(j, a, y.call(j, c, 0), y.call(j, c, 1)) : Md.call(j, Cc, a, c)
};
n.n = function() {
  var a = this;
  if(v(0 < a.s)) {
    var c = vd.call(j, a.w);
    return te.call(j, function(c) {
      return V.call(j, Z, ye.call(j, 2, a.w[c]))
    }, c)
  }
  return j
};
n.u = m("s");
n.d = function(a, c) {
  return Je.call(j, a, c)
};
n.r = function(a, c) {
  return new Ne(c, this.s, this.w)
};
n.l = g;
n.q = m("c");
n.ra = g;
n.ga = function(a, c) {
  var d = nd.call(j, c), e = this.w[d], f = v(e) ? Ke.call(j, 2, c, e) : j;
  if(v(L.call(j, f))) {
    return a
  }
  var h = Cb.call(j, this.w);
  v(3 > e.length) ? wd.call(j, h, d) : (e = zc.call(j, e), e.splice(f, 2), h[d] = e);
  return new Ne(this.c, this.s - 1, h)
};
var Oe = new Ne(j, 0, ud.call(j));
Ne.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return z.call(j, this, c);
      case 3:
        return z.call(j, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var $c = function() {
  function a(a) {
    var e = j;
    r(a) && (e = F(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, e)
  }
  function c(a) {
    for(var a = G.call(j, a), c = Oe;;) {
      if(v(a)) {
        var f = hd.call(j, a), c = jd.call(j, c, H.call(j, a), gd.call(j, a)), a = f
      }else {
        return c
      }
    }
  }
  a.b = 0;
  a.a = function(a) {
    a = G(a);
    return c.call(this, a)
  };
  return a
}();
function Pe(a) {
  return G.call(j, V.call(j, H, a))
}
function Qe(a) {
  return G.call(j, V.call(j, gd, a))
}
var Re = function() {
  function a(a) {
    var e = j;
    r(a) && (e = F(Array.prototype.slice.call(arguments, 0), 0));
    return c.call(this, e)
  }
  function c(a) {
    return v(ge.call(j, he, a)) ? Md.call(j, function(a, c) {
      return M.call(j, v(a) ? a : $([], {}), c)
    }, a) : j
  }
  a.b = 0;
  a.a = function(a) {
    a = G(a);
    return c.call(this, a)
  };
  return a
}();
function Se(a, c) {
  this.c = a;
  this.aa = c
}
n = Se.prototype;
n.k = function(a) {
  return dd.call(j, a)
};
n.D = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return z.call(j, a, c, j);
      case 3:
        return v(Gc.call(j, this.aa, c)) ? c : d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.p = g;
n.j = function(a, c) {
  return new Se(this.c, jd.call(j, this.aa, c, j))
};
n.n = function() {
  return Pe.call(j, this.aa)
};
n.Ua = g;
n.u = function(a) {
  return N.call(j, G.call(j, a))
};
n.d = function(a, c) {
  var d = qd.call(j, c);
  return v(d) ? (d = B.call(j, N.call(j, a), N.call(j, c)), v(d) ? fe.call(j, function(c) {
    return Fd.call(j, a, c)
  }, c) : d) : d
};
n.r = function(a, c) {
  return new Se(c, this.aa)
};
n.l = g;
n.q = m("c");
var Te = new Se(j, $c.call(j));
Se.prototype.call = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return z.call(j, this, c);
      case 3:
        return z.call(j, this, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Ue(a) {
  for(var a = G.call(j, a), c = Te;;) {
    if(v(L.call(j, od.call(j, a)))) {
      var d = J.call(j, a), c = M.call(j, c, H.call(j, a)), a = d
    }else {
      return c
    }
  }
}
function Ve(a) {
  for(var c = Y([]);;) {
    if(v(K.call(j, a))) {
      c = M.call(j, c, H.call(j, a)), a = K.call(j, a)
    }else {
      return G.call(j, c)
    }
  }
}
function We(a) {
  if(v(Bd.call(j, a))) {
    return a
  }
  var c;
  c = Cd.call(j, a);
  c = v(c) ? c : Dd.call(j, a);
  if(v(c)) {
    return c = a.lastIndexOf("/"), v(0 > c) ? Sd.call(j, a, 2) : Sd.call(j, a, c + 1)
  }
  v("\ufdd0'else") && b(Error(T.call(j, "Doesn't support name: ", a)));
  return j
}
function Xe(a) {
  var c;
  c = Cd.call(j, a);
  c = v(c) ? c : Dd.call(j, a);
  if(v(c)) {
    return c = a.lastIndexOf("/"), v(-1 < c) ? Sd.call(j, a, 2, c) : j
  }
  b(Error(T.call(j, "Doesn't support namespace: ", a)))
}
function Ye(a, c, d, e) {
  this.c = a;
  this.start = c;
  this.end = d;
  this.step = e
}
n = Ye.prototype;
n.k = function(a) {
  return dd.call(j, a)
};
n.F = g;
n.p = g;
n.j = function(a, c) {
  return E.call(j, c, a)
};
n.I = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return bd.call(j, a, c);
      case 3:
        return bd.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
n.n = function(a) {
  return v((v(0 < this.step) ? Od : Pd).call(j, this.start, this.end)) ? a : j
};
n.u = function(a) {
  return v(L.call(j, Uc.call(j, a))) ? 0 : Math.ceil.call(j, (this.end - this.start) / this.step)
};
n.O = g;
n.J = m("start");
n.K = function(a) {
  return v(Uc.call(j, a)) ? new Ye(this.c, this.start + this.step, this.end, this.step) : D.call(j)
};
n.d = function(a, c) {
  return ed.call(j, a, c)
};
n.r = function(a, c) {
  return new Ye(c, this.start, this.end, this.step)
};
n.l = g;
n.q = m("c");
n.H = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        var e;
        if(v(c < x.call(j, a))) {
          e = this.start + c * this.step
        }else {
          var f;
          f = this.start > this.end;
          f = v(f) ? B.call(j, this.step, 0) : f;
          v(f) ? e = this.start : b(Error("Index out of bounds"))
        }
        return e;
      case 3:
        return v(c < x.call(j, a)) ? e = this.start + c * this.step : (e = this.start > this.end, e = v(e) ? B.call(j, this.step, 0) : e, e = v(e) ? this.start : d), e
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var Ze = function() {
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
        return new Ye(j, c, d, e)
    }
    b("Invalid arity: " + arguments.length)
  }
}(), $e = function() {
  return function(a, c) {
    switch(arguments.length) {
      case 1:
        var d;
        a: {
          for(var e = a;;) {
            if(v(G.call(j, e))) {
              e = K.call(j, e)
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
            var h = G.call(j, f);
            if(v(v(h) ? 0 < d : h)) {
              d -= 1, f = K.call(j, f)
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
}(), af = function() {
  return function(a, c) {
    switch(arguments.length) {
      case 1:
        return $e.call(j, a), a;
      case 2:
        return $e.call(j, a, c), c
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function bf(a, c) {
  var d = a.exec(c);
  return v(B.call(j, H.call(j, d), c)) ? v(B.call(j, N.call(j, d), 1)) ? H.call(j, d) : Z.call(j, d) : j
}
function cf(a, c) {
  var d = a.exec(c);
  return v(C.call(j, d)) ? j : v(B.call(j, N.call(j, d), 1)) ? H.call(j, d) : Z.call(j, d)
}
function df(a, c, d, e, f, h) {
  return ce.call(j, Y([c]), se.call(j, re.call(j, Y([d]), V.call(j, function(c) {
    return a.call(j, c, f)
  }, h))), Y([e]))
}
var ff = function ef(c, d) {
  return v(C.call(j, c)) ? D.call(j, "nil") : v(yd.call(j, c)) ? D.call(j, "#<undefined>") : v("\ufdd0'else") ? ce.call(j, v(function() {
    var e = Q.call(j, d, "\ufdd0'meta");
    return v(e) ? (v(c) ? (e = c.l, e = v(e) ? L.call(j, c.hasOwnProperty("cljs$core$IMeta$")) : e) : e = c, e = v(e) ? g : yc.call(j, Oc, c), v(e) ? md.call(j, c) : e) : e
  }()) ? ce.call(j, Y(["^"]), ef.call(j, md.call(j, c), d), Y([" "])) : j, v(function() {
    var d;
    v(c) ? (d = c.m, d = v(d) ? L.call(j, c.hasOwnProperty("cljs$core$IPrintable$")) : d) : d = c;
    return v(d) ? g : yc.call(j, Wc, c)
  }()) ? Xc.call(j, c, d) : D.call(j, "#<", T.call(j, c), ">")) : j
};
function gf(a, c) {
  var d = H.call(j, a), e = new Da, f = G.call(j, a);
  if(v(f)) {
    for(var h = H.call(j, f);;) {
      v(h === d) || e.append(" ");
      var i = G.call(j, ff.call(j, h, c));
      if(v(i)) {
        for(h = H.call(j, i);;) {
          if(e.append(h), h = K.call(j, i), v(h)) {
            i = h, h = H.call(j, i)
          }else {
            break
          }
        }
      }
      f = K.call(j, f);
      if(v(f)) {
        h = f, f = H.call(j, h), i = h, h = f, f = i
      }else {
        break
      }
    }
  }
  return T.call(j, e)
}
function hf() {
  return $(["\ufdd0'flush-on-newline", "\ufdd0'readably", "\ufdd0'meta", "\ufdd0'dup"], {"\ufdd0'flush-on-newline":g, "\ufdd0'readably":g, "\ufdd0'meta":l, "\ufdd0'dup":l})
}
var jf = function() {
  function a(a) {
    var d = j;
    r(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return gf.call(j, d, hf.call(j))
  }
  a.b = 0;
  a.a = function(a) {
    a = G(a);
    return gf.call(j, a, hf.call(j))
  };
  return a
}();
Ne.prototype.m = g;
Ne.prototype.f = function(a, c) {
  return df.call(j, function(a) {
    return df.call(j, ff, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
Wc.number = g;
Xc.number = function(a) {
  return D.call(j, T.call(j, a))
};
cd.prototype.m = g;
cd.prototype.f = function(a, c) {
  return df.call(j, ff, "(", " ", ")", c, a)
};
Fe.prototype.m = g;
Fe.prototype.f = function(a, c) {
  return df.call(j, ff, "[", " ", "]", c, a)
};
U.prototype.m = g;
U.prototype.f = function(a, c) {
  return df.call(j, ff, "(", " ", ")", c, a)
};
Wc["boolean"] = g;
Xc["boolean"] = function(a) {
  return D.call(j, T.call(j, a))
};
Se.prototype.m = g;
Se.prototype.f = function(a, c) {
  return df.call(j, ff, "#{", " ", "}", c, a)
};
Wc.string = g;
Xc.string = function(a, c) {
  return v(Cd.call(j, a)) ? D.call(j, T.call(j, ":", function() {
    var c = Xe.call(j, a);
    return v(c) ? T.call(j, c, "/") : j
  }(), We.call(j, a))) : v(Dd.call(j, a)) ? D.call(j, T.call(j, function() {
    var c = Xe.call(j, a);
    return v(c) ? T.call(j, c, "/") : j
  }(), We.call(j, a))) : v("\ufdd0'else") ? D.call(j, v("\ufdd0'readably".call(j, c)) ? ra.call(j, a) : a) : j
};
Ce.prototype.m = g;
Ce.prototype.f = function(a, c) {
  return df.call(j, ff, "[", " ", "]", c, a)
};
Vd.prototype.m = g;
Vd.prototype.f = function(a, c) {
  return df.call(j, ff, "(", " ", ")", c, a)
};
Wc.array = g;
Xc.array = function(a, c) {
  return df.call(j, ff, "#<Array [", ", ", "]>", c, a)
};
Wd.prototype.m = g;
Wd.prototype.f = function() {
  return D.call(j, "()")
};
Yd.prototype.m = g;
Yd.prototype.f = function(a, c) {
  return df.call(j, ff, "(", " ", ")", c, a)
};
Ye.prototype.m = g;
Ye.prototype.f = function(a, c) {
  return df.call(j, ff, "(", " ", ")", c, a)
};
Me.prototype.m = g;
Me.prototype.f = function(a, c) {
  return df.call(j, function(a) {
    return df.call(j, ff, "", " ", "", c, a)
  }, "{", ", ", "}", c, a)
};
function kf(a, c, d, e) {
  this.state = a;
  this.c = c;
  this.Za = d;
  this.oa = e
}
n = kf.prototype;
n.ua = function(a, c, d) {
  var e = G.call(j, this.oa);
  if(v(e)) {
    var f = H.call(j, e);
    P.call(j, f, 0, j);
    for(P.call(j, f, 1, j);;) {
      var h = f, f = P.call(j, h, 0, j), h = P.call(j, h, 1, j);
      h.call(j, f, a, c, d);
      e = K.call(j, e);
      if(v(e)) {
        f = e, e = H.call(j, f), h = f, f = e, e = h
      }else {
        return j
      }
    }
  }else {
    return j
  }
};
n.ta = function(a, c, d) {
  return a.oa = jd.call(j, this.oa, c, d)
};
n.m = g;
n.f = function(a, c) {
  return ce.call(j, Y(["#<Atom: "]), Xc.call(j, this.state, c), ">")
};
n.l = g;
n.q = m("c");
n.Ta = m("state");
n.d = function(a, c) {
  return a === c
};
var lf = function() {
  var a = j, c = function() {
    function a(d, h) {
      var i = j;
      r(h) && (i = F(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, d, i)
    }
    function c(a, d) {
      var e = v(zd.call(j, d)) ? S.call(j, $c, d) : d, k = Q.call(j, e, "\ufdd0'validator"), e = Q.call(j, e, "\ufdd0'meta");
      return new kf(a, e, k, j)
    }
    a.b = 1;
    a.a = function(a) {
      var d = H(a), a = J(a);
      return c.call(this, d, a)
    };
    return a
  }(), a = function(a, e) {
    switch(arguments.length) {
      case 1:
        return new kf(a, j, j, j);
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 1;
  a.a = c.a;
  return a
}();
function mf(a, c) {
  var d = a.Za;
  v(d) && !v(d.call(j, c)) && b(Error(T.call(j, "Assert failed: ", "Validator rejected reference state", "\n", jf.call(j, ld(D("\ufdd1'validate", "\ufdd1'new-value"), $c("\ufdd0'line", 3019))))));
  d = a.state;
  a.state = c;
  Yc.call(j, a, d, c);
  return c
}
var nf = function() {
  var a = j, c = function() {
    function a(c, d, h, i, k, q) {
      var t = j;
      r(q) && (t = F(Array.prototype.slice.call(arguments, 5), 0));
      return mf.call(j, c, S.call(j, d, c.state, h, i, k, t))
    }
    a.b = 5;
    a.a = function(a) {
      var c = H(a), d = H(K(a)), i = H(K(K(a))), k = H(K(K(K(a)))), q = H(K(K(K(K(a))))), a = J(K(K(K(K(a)))));
      return mf.call(j, c, S.call(j, d, c.state, i, k, q, a))
    };
    return a
  }(), a = function(a, e, f, h, i, k) {
    switch(arguments.length) {
      case 2:
        return mf.call(j, a, e.call(j, a.state));
      case 3:
        return mf.call(j, a, e.call(j, a.state, f));
      case 4:
        return mf.call(j, a, e.call(j, a.state, f, h));
      case 5:
        return mf.call(j, a, e.call(j, a.state, f, h, i));
      default:
        return c.apply(this, arguments)
    }
    b("Invalid arity: " + arguments.length)
  };
  a.b = 5;
  a.a = c.a;
  return a
}();
function of(a) {
  return Nc.call(j, a)
}
function pf(a, c, d) {
  return Zc.call(j, a, c, d)
}
lf.call(j, function() {
  return $(["\ufdd0'parents", "\ufdd0'descendants", "\ufdd0'ancestors"], {"\ufdd0'parents":$([], {}), "\ufdd0'descendants":$([], {}), "\ufdd0'ancestors":$([], {})})
}.call(j));
function qf(a) {
  var c = ud.call(j), a = G.call(j, a);
  if(v(a)) {
    var d = H.call(j, a);
    P.call(j, d, 0, j);
    for(P.call(j, d, 1, j);;) {
      var e = d, d = P.call(j, e, 0, j), e = P.call(j, e, 1, j);
      c[We.call(j, d)] = e;
      a = K.call(j, a);
      if(v(a)) {
        d = a, a = H.call(j, d), e = d, d = a, a = e
      }else {
        break
      }
    }
  }
  return c
}
var rf = function() {
  var a = j;
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        var e = v(sd.call(j, c)) ? qf.call(j, c) : c;
        console.log(e);
        return c;
      case 2:
        return a.call(j, $(["\ufdd0'msg", "\ufdd0'data"], {"\ufdd0'msg":c, "\ufdd0'data":d})), d
    }
    b("Invalid arity: " + arguments.length)
  }
}(), sf = function() {
  var a = j;
  return a = function(c, d) {
    switch(arguments.length) {
      case 1:
        return rf.call(j, jf.call(j, c)), c;
      case 2:
        return a.call(j, $(["\ufdd0'msg", "\ufdd0'data"], {"\ufdd0'msg":c, "\ufdd0'data":d})), d
    }
    b("Invalid arity: " + arguments.length)
  }
}();
var tf = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return he.call(j, c), W.call(j, a, c);
      case 3:
        return he.call(j, c), W.call(j, a, c, d)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function uf(a) {
  if(v(v(a) ? a.za : a)) {
    a = a.za(a)
  }else {
    var c;
    var d = uf[p.call(j, a)];
    v(d) ? c = d : (d = uf._, v(d) ? c = d : b(w.call(j, "TemplateBinding.name", a)));
    a = c.call(j, a)
  }
  return a
}
function vf(a, c) {
  var d;
  if(v(v(a) ? a.va : a)) {
    d = a.va(a, c)
  }else {
    var e = vf[p.call(j, a)];
    v(e) ? d = e : (e = vf._, v(e) ? d = e : b(w.call(j, "TemplateBinding.bound-path", a)));
    d = d.call(j, a, c)
  }
  return d
}
function wf(a) {
  if(v(v(a) ? a.Aa : a)) {
    a = a.Aa(a)
  }else {
    var c;
    var d = wf[p.call(j, a)];
    v(d) ? c = d : (d = wf._, v(d) ? c = d : b(w.call(j, "TemplateBinding.placeholder?", a)));
    a = c.call(j, a)
  }
  return a
}
function xf(a) {
  if(v(v(a) ? a.xa : a)) {
    a = a.xa(a)
  }else {
    var c;
    var d = xf[p.call(j, a)];
    v(d) ? c = d : (d = xf._, v(d) ? c = d : b(w.call(j, "TemplateBinding.find-placeholders", a)));
    a = c.call(j, a)
  }
  return a
}
function yf(a, c) {
  var d;
  if(v(v(a) ? a.Ba : a)) {
    d = a.Ba(a, c)
  }else {
    var e = yf[p.call(j, a)];
    v(e) ? d = e : (e = yf._, v(e) ? d = e : b(w.call(j, "TemplateBinding.render", a)));
    d = d.call(j, a, c)
  }
  return d
}
function zf(a) {
  if(v(v(a) ? a.ya : a)) {
    a = a.ya(a)
  }else {
    var c;
    var d = zf[p.call(j, a)];
    v(d) ? c = d : (d = zf._, v(d) ? c = d : b(w.call(j, "TemplateBinding.find-templates", a)));
    a = c.call(j, a)
  }
  return a
}
function Af(a, c) {
  var d;
  if(v(v(a) ? a.wa : a)) {
    d = a.wa(a, c)
  }else {
    var e = Af[p.call(j, a)];
    v(e) ? d = e : (e = Af._, v(e) ? d = e : b(w.call(j, "TemplateBinding.deactivate!", a)));
    d = d.call(j, a, c)
  }
  return d
}
function Bf(a, c, d) {
  if(v(v(a) ? a.Ca : a)) {
    a = a.Ca(a, c, d)
  }else {
    var e;
    var f = Bf[p.call(j, a)];
    v(f) ? e = f : (f = Bf._, v(f) ? e = f : b(w.call(j, "TemplateBinding.updated!", a)));
    a = e.call(j, a, c, d)
  }
  return a
}
;function Cf(a, c) {
  var d;
  if(v(v(a) ? a.Ha : a)) {
    d = a.Ha(a, c)
  }else {
    var e = Cf[p.call(j, a)];
    v(e) ? d = e : (e = Cf._, v(e) ? d = e : b(w.call(j, "MutableTree.append!", a)));
    d = d.call(j, a, c)
  }
  return d
}
function Df(a, c, d) {
  if(v(v(a) ? a.Ka : a)) {
    a = a.Ka(a, c, d)
  }else {
    var e;
    var f = Df[p.call(j, a)];
    v(f) ? e = f : (f = Df._, v(f) ? e = f : b(w.call(j, "MutableTree.insert-at!", a)));
    a = e.call(j, a, c, d)
  }
  return a
}
function Ef(a) {
  if(v(v(a) ? a.Ja : a)) {
    a = a.Ja(a)
  }else {
    var c;
    var d = Ef[p.call(j, a)];
    v(d) ? c = d : (d = Ef._, v(d) ? c = d : b(w.call(j, "MutableTree.get-children", a)));
    a = c.call(j, a)
  }
  return a
}
function Ff(a) {
  if(v(v(a) ? a.Ia : a)) {
    a = a.Ia(a)
  }else {
    var c;
    var d = Ff[p.call(j, a)];
    v(d) ? c = d : (d = Ff._, v(d) ? c = d : b(w.call(j, "MutableTree.child-count", a)));
    a = c.call(j, a)
  }
  return a
}
;var Gf = function() {
  function a(a, d, e) {
    var f = j;
    r(e) && (f = F(Array.prototype.slice.call(arguments, 2), 0));
    return we.call(j, a, S.call(j, je.call(j, V, d), f))
  }
  a.b = 2;
  a.a = function(a) {
    var d = H(a), e = H(K(a)), a = J(K(a));
    return we.call(j, d, S.call(j, je.call(j, V, e), a))
  };
  return a
}(), Hf = function() {
  function a(a, d, e) {
    var f = j;
    r(e) && (f = F(Array.prototype.slice.call(arguments, 2), 0));
    return S.call(j, ce, S.call(j, je.call(j, Gf, a, d), f))
  }
  a.b = 2;
  a.a = function(a) {
    var d = H(a), e = H(K(a)), a = J(K(a));
    return S.call(j, ce, S.call(j, je.call(j, Gf, d, e), a))
  };
  return a
}();
function If(a, c, d) {
  return we.call(j, a, ke.call(j, c, d))
}
function Jf(a, c) {
  for(;;) {
    if(v(L.call(j, G.call(j, c)))) {
      return g
    }
    var d = H.call(j, a), e = H.call(j, c);
    if(v(B.call(j, d, e))) {
      d = J.call(j, a), e = J.call(j, c), a = d, c = e
    }else {
      return l
    }
  }
}
function Kf(a, c) {
  return If.call(j, C, function(c, e) {
    return v(a.call(j, c)) ? e : j
  }, c)
}
function Lf(a, c) {
  return Kf.call(j, ie.call(j, a), c)
}
function Mf(a, c) {
  return Lf.call(j, function(c) {
    return a.call(j, c)
  }, c)
}
;function Nf(a, c, d) {
  if(v(Bd.call(j, c))) {
    return a.replace(RegExp(sa.call(j, c), "g"), d)
  }
  if(v(c.hasOwnProperty("source"))) {
    return a.replace(RegExp(c.source, "g"), d)
  }
  v("\ufdd0'else") && b(T.call(j, "Invalid match arg: ", c));
  return j
}
var Of = function() {
  return function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Z.call(j, T.call(j, a).split(c));
      case 3:
        var e;
        a: {
          if(v(1 > d)) {
            e = Z.call(j, T.call(j, a).split(c))
          }else {
            for(var f = a, h = d, i = Y([]);;) {
              if(v(B.call(j, h, 1))) {
                e = M.call(j, i, f);
                break a
              }
              var k = cf.call(j, c, f);
              if(v(k)) {
                var q = k, k = f.indexOf(q), q = f.substring(k + N.call(j, q)), h = h - 1, i = M.call(j, i, f.substring(0, k)), f = q
              }else {
                e = M.call(j, i, f);
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
function Pf(a, c) {
  return xe.call(j, $([], {}), V.call(j, function(c) {
    var e = P.call(j, c, 0, j), c = P.call(j, c, 1, j);
    return Y([e, a.call(j, c)])
  }, c))
}
function Qf(a, c) {
  return v(sd.call(j, a)) ? kd.call(j, a, c) : v(td.call(j, a)) ? Z.call(j, ce.call(j, Ge.call(j, a, 0, c), Ge.call(j, a, c + 1))) : v(zd.call(j, a)) ? ce.call(j, me.call(j, c, a), ne.call(j, c + 1, a)) : j
}
var Sf = function Rf(c, d) {
  var e = P.call(j, d, 0, j), f = R.call(j, d, 1);
  if(v(f)) {
    var h = Q.call(j, c, e);
    return v(h) ? (f = Rf.call(j, h, f), v(G.call(j, f)) ? jd.call(j, c, e, f) : Qf.call(j, c, e)) : c
  }
  return Qf.call(j, c, e)
};
var Tf = function() {
  function a(a, c, f) {
    for(;;) {
      if(v(L.call(j, G.call(j, a)))) {
        return Pf.call(j, Xd, f)
      }
      var h = a, i = P.call(j, h, 0, j), h = R.call(j, h, 1), a = Be.call(j, f, Y([i]), function(a, c) {
        return function(a) {
          return v(C.call(j, a)) ? D.call(j, c) : E.call(j, c, a)
        }
      }(a, c, f)), c = c + 1, f = a, a = h
    }
  }
  var c = j;
  return c = function(d, e, f) {
    switch(arguments.length) {
      case 1:
        return c.call(j, d, 0, $([], {}));
      case 3:
        return a.call(this, d, e, f)
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function Uf(a, c, d, e) {
  for(;;) {
    if(v(L.call(j, G.call(j, a)))) {
      return $(["\ufdd0'new-list-changes", "\ufdd0'old-list-deletes"], {"\ufdd0'new-list-changes":e, "\ufdd0'old-list-deletes":te.call(j, gd, d)})
    }
    var f = P.call(j, a, 0, j), a = R.call(j, a, 1), h = Q.call(j, d, f);
    if(v(h)) {
      var i = h, h = P.call(j, i, 0, j), i = R.call(j, i, 1), e = jd.call(j, e, c, Y([v(B.call(j, h, c)) ? "\ufdd0'unchanged" : "\ufdd0'move", h])), d = jd.call(j, d, f, i)
    }else {
      e = jd.call(j, e, c, Y(["\ufdd0'insert", f]))
    }
    c += 1
  }
}
function Vf(a, c) {
  var d = Tf.call(j, a);
  return Uf.call(j, c, 0, d, $([], {}))
}
;function Wf(a, c, d) {
  return L.call(j, B.call(j, W.call(j, a, c), d))
}
function Xf(a, c) {
  return $(["\ufdd0'result", "\ufdd0'removed-indices"], {"\ufdd0'result":Mf.call(j, a, c), "\ufdd0'removed-indices":a})
}
function Yf(a, c, d, e) {
  return ld.call(j, S.call(j, je.call(j, Be, a, c, d), e), $(["\ufdd0'update-path", "\ufdd0'action", "\ufdd0'update-by"], {"\ufdd0'update-path":c, "\ufdd0'action":"\ufdd0'update", "\ufdd0'update-by":"\ufdd0'user/unspecified"}))
}
function Zf(a, c, d) {
  return ld.call(j, Ae.call(j, a, c, d), $(["\ufdd0'update-path", "\ufdd0'action", "\ufdd0'update-by"], {"\ufdd0'update-path":c, "\ufdd0'action":"\ufdd0'set", "\ufdd0'update-by":"\ufdd0'user/unspecified"}))
}
function $f(a, c, d, e) {
  var f = W.call(j, a, c), d = d.call(j, e, f), e = v(zd.call(j, d)) ? S.call(j, $c, d) : d, d = Q.call(j, e, "\ufdd0'removed-indices"), e = Q.call(j, e, "\ufdd0'result");
  return ld.call(j, Ae.call(j, a, c, Z.call(j, e)), $(["\ufdd0'update-path", "\ufdd0'action", "\ufdd0'removed-indices", "\ufdd0'update-by"], {"\ufdd0'update-path":c, "\ufdd0'action":"\ufdd0'list-remove", "\ufdd0'removed-indices":d, "\ufdd0'update-by":"\ufdd0'user/unspecified"}))
}
var ag = function() {
  function a(a, d, e, f) {
    var h = j;
    r(f) && (h = F(Array.prototype.slice.call(arguments, 3), 0));
    return nf.call(j, a, Yf, d, e, h)
  }
  a.b = 3;
  a.a = function(a) {
    var d = H(a), e = H(K(a)), f = H(K(K(a))), a = J(K(K(a)));
    return nf.call(j, d, Yf, e, f, a)
  };
  return a
}();
function bg(a, c, d) {
  return nf.call(j, a, Zf, c, d)
}
function cg(a, c, d) {
  return v(Wf.call(j, of.call(j, a), c, d)) ? nf.call(j, a, Zf, c, d) : j
}
function dg(a, c, d) {
  return nf.call(j, a, $f, c, Xf, d)
}
;var fg = function eg(c, d, e, f) {
  var h = uf.call(j, c), e = vf.call(j, c, e);
  if(!v(L.call(j, wf.call(j, c)))) {
    var i = yf.call(j, c, d);
    Bf.call(j, c, i, d);
    c = i
  }
  h = "\ufdd0'node-updater!".call(j, "\ufdd0'templates".call(j, d).call(j, h));
  v(h) && h.call(j, c, d, e, f);
  c = G.call(j, xf.call(j, c));
  if(v(c)) {
    for(h = H.call(j, c);;) {
      if(eg.call(j, h, d, e, f), h = K.call(j, c), v(h)) {
        c = h, h = H.call(j, c)
      }else {
        return j
      }
    }
  }else {
    return j
  }
};
function gg(a) {
  if(v(v(a) ? a.Ga : a)) {
    a = a.Ga(a)
  }else {
    var c;
    var d = gg[p.call(j, a)];
    v(d) ? c = d : (d = gg._, v(d) ? c = d : b(w.call(j, "Identifiable.id", a)));
    a = c.call(j, a)
  }
  return a
}
;function hg(a, c) {
  return W.call(j, a, Y(["\ufdd0'node-paths", c]))
}
function ig(a, c) {
  return Be.call(j, a, Y(["\ufdd0'node-paths"]), kd, c)
}
function jg(a, c) {
  var d = W.call(j, a, Y(["\ufdd0'updaters", "\ufdd0'data-paths", "\ufdd0'ANY"]));
  return Hf.call(j, C, function(a) {
    var d = P.call(j, a, 0, j), a = P.call(j, a, 1, j);
    return v(Jf.call(j, c, d)) ? Qe.call(j, a) : j
  }, d)
}
function kg(a, c) {
  var d = W.call(j, a, Y(["\ufdd0'updaters", "\ufdd0'data-paths", "\ufdd0'EXACT", c]));
  return v(d) ? Qe.call(j, d) : j
}
function lg(a, c) {
  return ce.call(j, kg.call(j, a, c), jg.call(j, a, c))
}
function mg(a, c) {
  return W.call(j, a, Y(["\ufdd0'updaters", "\ufdd0'node-paths", c, "\ufdd0'primary-data-path"]))
}
function ng(a, c, d) {
  return Sf.call(j, Sf.call(j, a, Y(["\ufdd0'data-paths", "\ufdd0'EXACT", c, d])), Y(["\ufdd0'data-paths", "\ufdd0'ANY", c, d]))
}
function og(a, c) {
  var d = gg.call(j, c), e = hg.call(j, a, d);
  if(v(e)) {
    var f = ig.call(j, a, d), e = "\ufdd0'data-paths".call(j, e);
    P.call(j, e, 0, j);
    R.call(j, e, 1);
    for(var h = e, e = f;;) {
      f = P.call(j, h, 0, j);
      h = R.call(j, h, 1);
      if(v(C.call(j, f))) {
        return e
      }
      e = f = ng.call(j, e, f, d)
    }
  }else {
    return a
  }
}
function pg(a, c, d, e, f) {
  for(;;) {
    var h = P.call(j, d, 0, j), d = R.call(j, d, 1);
    if(v(C.call(j, h))) {
      return a
    }
    a = Ae.call(j, a, Y(["\ufdd0'data-paths", c, h, e]), f)
  }
}
function qg(a, c, d, e, f, h) {
  d = gg.call(j, d);
  h = $(["\ufdd0'lookup-type", "\ufdd0'data-paths", "\ufdd0'primary-data-path", "\ufdd0'update-fn!"], {"\ufdd0'lookup-type":e, "\ufdd0'data-paths":f, "\ufdd0'primary-data-path":H.call(j, f), "\ufdd0'update-fn!":h});
  a = Ae.call(j, og.call(j, a, c), Y(["\ufdd0'node-paths", d]), h);
  return pg.call(j, a, e, f, d, h)
}
function rg(a, c, d) {
  var e = gg.call(j, c), f = "\ufdd0'data-paths".call(j, W.call(j, a, Y(["\ufdd0'node-paths", e]))), h = P.call(j, f, 0, j), f = R.call(j, f, 1), i = N.call(j, h), h = E.call(j, d, V.call(j, function(a) {
    return Z.call(j, ce.call(j, d, ne.call(j, i, a)))
  }, f)), f = hg.call(j, a, e), e = "\ufdd0'lookup-type".call(j, f), f = "\ufdd0'update-fn!".call(j, f);
  return qg.call(j, a, c, c, e, h, f)
}
function sg(a, c, d, e, f, h, i) {
  h = E.call(j, f, V.call(j, function(a) {
    return Z.call(j, ce.call(j, f, a))
  }, h));
  return ag.call(j, a, Y(["\ufdd0'updaters"]), qg, c, d, e, h, i)
}
function tg(a, c, d) {
  return ag.call(j, a, Y(["\ufdd0'updaters"]), rg, c, d)
}
function ug(a, c) {
  return ag.call(j, a, Y(["\ufdd0'updaters"]), og, c)
}
function vg(a, c, d) {
  var e = of.call(j, "\ufdd0'mirror-state".call(j, a)), a = "\ufdd0'update-path".call(j, md.call(j, d)), e = lg.call(j, e, a);
  if(v(e)) {
    if(a = G.call(j, e), v(a)) {
      var e = H.call(j, a), f = v(zd.call(j, e)) ? S.call(j, $c, e) : e;
      Q.call(j, f, "\ufdd0'primary-data-path");
      for(Q.call(j, f, "\ufdd0'update-fn!");;) {
        if(f = v(zd.call(j, e)) ? S.call(j, $c, e) : e, e = Q.call(j, f, "\ufdd0'primary-data-path"), f = Q.call(j, f, "\ufdd0'update-fn!"), f.call(j, e, c, d), a = K.call(j, a), v(a)) {
          e = a, a = H.call(j, e), f = e, e = a, a = f
        }else {
          return j
        }
      }
    }else {
      return j
    }
  }else {
    return sf.call(j, "No update-functions for updated path: ", a)
  }
}
;function wg(a, c, d, e) {
  var d = M.call(j, d, e), e = N.call(j, d), f = G.call(j, zf.call(j, c));
  if(v(f)) {
    for(var h = H.call(j, f);;) {
      var i = gg.call(j, h), i = mg.call(j, of.call(j, a), i), i = ne.call(j, e, i), i = v(G.call(j, i)) ? S.call(j, je.call(j, M, d), i) : d;
      tg.call(j, a, h, i);
      h = K.call(j, f);
      if(v(h)) {
        f = h, h = H.call(j, f)
      }else {
        break
      }
    }
  }
  return c
}
function xg(a, c, d, e) {
  if(v(e)) {
    var f = S.call(j, Qd, e), h = Ef.call(j, d), i = function() {
      for(var a = f, c = f, d = ne.call(j, f, h), i = Y([]);;) {
        if(v(L.call(j, G.call(j, d)))) {
          return Xd.call(j, i)
        }
        var k = d, d = P.call(j, k, 0, j), X = R.call(j, k, 1);
        v(e.call(j, a)) ? (k = X, i = E.call(j, Y(["\ufdd0'remove", d, a]), i), a += 1, d = k) : (k = c + 1, i = E.call(j, Y(["\ufdd0'path-change", d, c]), i), a += 1, c = k, d = X)
      }
    }(), d = function(d) {
      var e = P.call(j, d, 0, j), f = P.call(j, d, 1, j), d = P.call(j, d, 2, j);
      return v(B.call(j, "\ufdd0'remove", e)) ? Af.call(j, f, a) : v(B.call(j, "\ufdd0'path-change", e)) ? wg.call(j, "\ufdd0'mirror-state".call(j, a), f, c, d) : j
    }, k = G.call(j, i);
    if(v(k)) {
      for(i = H.call(j, k);;) {
        if(d.call(j, i), i = K.call(j, k), v(i)) {
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
function yg(a, c, d, e, f, h) {
  var i = Ff.call(j, e), i = G.call(j, Ze.call(j, i, i + h));
  if(v(i)) {
    for(h = H.call(j, i);;) {
      if(h = a.call(j, c, d, f, h), Cf.call(j, e, h), h = K.call(j, i), v(h)) {
        i = h, h = H.call(j, i)
      }else {
        return j
      }
    }
  }else {
    return j
  }
}
function zg(a, c, d, e, f, h) {
  function i(f) {
    var i = P.call(j, f, 0, j), k = P.call(j, f, 1, j), f = P.call(j, k, 0, j), q = P.call(j, k, 1, j), k = t.call(j, i), f = v(B.call(j, f, "\ufdd0'insert")) ? function() {
      var e = a.call(j, c, d, h, i);
      fg.call(j, e, c, d, h);
      return e
    }() : v(B.call(j, f, "\ufdd0'move")) ? function() {
      var a = t.call(j, q);
      wg.call(j, "\ufdd0'mirror-state".call(j, c), a, d, i);
      return a
    }() : v(B.call(j, f, "\ufdd0'unchanged")) ? k : j;
    return v(L.call(j, k)) ? Cf.call(j, e, f) : v(ee.call(j, k, f)) ? Df.call(j, e, f, i) : j
  }
  var k = W.call(j, h, d), f = W.call(j, f, d), q = Ef.call(j, e), t = Z.call(j, q), k = Vf.call(j, f, k), k = v(zd.call(j, k)) ? S.call(j, $c, k) : k, f = Q.call(j, k, "\ufdd0'old-list-deletes"), k = Q.call(j, k, "\ufdd0'new-list-changes"), q = G.call(j, f);
  if(v(q)) {
    for(f = H.call(j, q);;) {
      if(f = t.call(j, f), Af.call(j, f, c), f = K.call(j, q), v(f)) {
        q = f, f = H.call(j, q)
      }else {
        break
      }
    }
  }
  k = oe.call(j, function(a) {
    return B.call(j, "\ufdd0'unchanged", H.call(j, gd.call(j, a)))
  }, Ld.call(j, H, k));
  f = G.call(j, k);
  if(v(f)) {
    for(k = H.call(j, f);;) {
      if(i.call(j, k), k = K.call(j, f), v(k)) {
        f = k, k = H.call(j, f)
      }else {
        return j
      }
    }
  }else {
    return j
  }
}
function Ag(a, c, d, e, f, h) {
  var i = md.call(j, h), k = "\ufdd0'action".call(j, i);
  v(B.call(j, k, "\ufdd0'list-remove")) ? (a = "\ufdd0'removed-indices".call(j, md.call(j, h)), xg.call(j, c, e, d, a)) : v(B.call(j, k, "\ufdd0'list-append")) ? (f = N.call(j, "\ufdd0'appended".call(j, i)), yg.call(j, a, c, e, d, h, f)) : v("\ufdd0'else") && zg.call(j, a, c, e, d, f, h);
  return d
}
;var Cg = function Bg(c, d, e, f, h, i, k, q) {
  k = c.call(j, d, i, k, q);
  c = je.call(j, Bg, c, k, e, f, h);
  sg.call(j, "\ufdd0'mirror-state".call(j, h), d, k, e, i, f, c);
  Bf.call(j, d, k, h);
  return k
}, Eg = function Dg(c, d, e, f, h, i) {
  h = Ag.call(j, c, e, d, f, h, i);
  c = je.call(j, Dg, c, h, e);
  sg.call(j, "\ufdd0'mirror-state".call(j, e), d, h, "\ufdd0'EXACT", f, j, c);
  Bf.call(j, d, h, e);
  return h
};
function Fg(a, c, d, e, f, h, i) {
  return Cg.call(j, a, c, d, j, e, f, h, i)
}
;function Gg(a) {
  return function(c, d, e, f) {
    return Fg.call(j, a, c, "\ufdd0'ANY", d, e, j, f)
  }
}
function Hg(a, c, d, e) {
  var f = $(["\ufdd0'app-state", "\ufdd0'mirror-state", "\ufdd0'templates"], {"\ufdd0'app-state":c, "\ufdd0'mirror-state":lf.call(j, $([], {})), "\ufdd0'templates":e});
  fg.call(j, d, f, Y([]), of.call(j, c));
  return pf.call(j, c, a, function(a, c, d, e) {
    return vg.call(j, f, d, e)
  })
}
;function Ig(a, c) {
  return(new tc(a, c)).start()
}
var Kg = function Jg(c, d) {
  var e = c.call(j);
  return v(L.call(j, B.call(j, "\ufdd0'stop", e))) ? Ig.call(j, function() {
    return Jg.call(j, c, d)
  }, d) : j
};
function Lg(a, c) {
  if(v(c)) {
    var d = G.call(j, Ze.call(j, c.length));
    if(v(d)) {
      for(var e = H.call(j, d);;) {
        if(a.call(j, c[e]), e = K.call(j, d), v(e)) {
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
function Mg(a, c) {
  return v(c) ? function e(f) {
    return new U(j, l, function() {
      for(;;) {
        if(v(G.call(j, f))) {
          var h = H.call(j, f);
          return E.call(j, a.call(j, c[h]), e.call(j, J.call(j, f)))
        }
        return j
      }
    })
  }.call(j, Ze.call(j, c.length)) : j
}
function Ng(a) {
  return af.call(j, Mg.call(j, he, a))
}
var Og = function() {
  var a = j;
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 2:
        return a.call(j, c, d, 0);
      case 3:
        var f;
        a: {
          for(var h = e;;) {
            if(v(h < d.length)) {
              var i = d[h];
              if(v(c.call(j, i))) {
                f = Y([h, i]);
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
function Pg(a, c) {
  var d = Og.call(j, a, c);
  return v(d) ? gd.call(j, d) : j
}
;function Qg(a) {
  return v(pd.call(j, a)) ? a : Y([a])
}
var Rg = function() {
  var a = j;
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 2:
        var f;
        if(v(L.call(j, sd.call(j, d)))) {
          f = c.getAttribute(We.call(j, d))
        }else {
          f = G.call(j, d);
          if(v(f)) {
            var h = H.call(j, f);
            P.call(j, h, 0, j);
            for(P.call(j, h, 1, j);;) {
              var i = h, h = P.call(j, i, 0, j), i = P.call(j, i, 1, j);
              a.call(j, c, h, i);
              f = K.call(j, f);
              if(v(f)) {
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
        h = G.call(j, Qg.call(j, c));
        if(v(h)) {
          for(f = H.call(j, h);;) {
            if(f.setAttribute(We.call(j, d), e), f = K.call(j, h), v(f)) {
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
var Sg = $(["\ufdd0'xhtml", "\ufdd0'svg"], {"\ufdd0'xhtml":"http://www.w3.org/1999/xhtml", "\ufdd0'svg":"http://www.w3.org/2000/svg"}), Tg = lf.call(j, 0);
lf.call(j, 0);
var Wg = function Ug(c, d) {
  var e = G.call(j, d);
  if(v(e)) {
    for(var f = H.call(j, e);;) {
      if(v(C.call(j, f)) ? f = j : (v(sd.call(j, f)) && b("Maps cannot be used as content"), f = v(Bd.call(j, f)) ? hc.call(j, f) : v(td.call(j, f)) ? Vg.call(j, f) : v(zd.call(j, f)) ? Ug.call(j, c, f) : v(f.nodeName) ? f : j), v(f) && ic.call(j, c, f), f = K.call(j, e), v(f)) {
        e = f, f = H.call(j, e)
      }else {
        return j
      }
    }
  }else {
    return j
  }
}, Xg = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
function Yg(a) {
  var c = P.call(j, a, 0, j), a = R.call(j, a, 1);
  v(L.call(j, function() {
    var a = Cd.call(j, c);
    if(v(a)) {
      return a
    }
    a = Dd.call(j, c);
    return v(a) ? a : Bd.call(j, c)
  }())) && b(T.call(j, c, " is not a valid tag name."));
  var d = bf.call(j, Xg, We.call(j, c));
  P.call(j, d, 0, j);
  var e = P.call(j, d, 1, j), f = P.call(j, d, 2, j), h = P.call(j, d, 3, j), i = function() {
    var a = Of.call(j, e, /:/), c = P.call(j, a, 0, j), a = P.call(j, a, 1, j), d = Sg.call(j, Td.call(j, c));
    return v(a) ? Y([v(d) ? d : c, a]) : Y(["\ufdd0'xhtml".call(j, Sg), c])
  }(), d = P.call(j, i, 0, j), i = P.call(j, i, 1, j), f = xe.call(j, $([], {}), ve.call(j, function(a) {
    return L.call(j, C.call(j, gd.call(j, a)))
  }, $(["\ufdd0'id", "\ufdd0'class"], {"\ufdd0'id":v(f) ? f : j, "\ufdd0'class":v(h) ? Nf.call(j, h, /\./, " ") : j}))), h = H.call(j, a);
  return v(sd.call(j, h)) ? Y([d, i, Re.call(j, f, h), K.call(j, a)]) : Y([d, i, f, a])
}
function Zg(a, c) {
  return document.createElementNS(a, c)
}
function Vg(a) {
  var c = Yg.call(j, a), d = P.call(j, c, 0, j), e = P.call(j, c, 1, j), a = P.call(j, c, 2, j), c = P.call(j, c, 3, j), d = Zg.call(j, d, e);
  Rg.call(j, d, Re.call(j, a, $(["\ufdd0'puid"], {"\ufdd0'puid":nf.call(j, Tg, ad)})));
  Wg.call(j, d, c);
  return d
}
var $g = function() {
  function a(a) {
    var d = j;
    r(a) && (d = F(Array.prototype.slice.call(arguments, 0), 0));
    return V.call(j, Vg, d)
  }
  a.b = 0;
  a.a = function(a) {
    a = G(a);
    return V.call(j, Vg, a)
  };
  return a
}();
var ah = $(["\ufdd0'main", "\ufdd0'clock"], {"\ufdd0'main":$(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":Y(["\ufdd0'div.clock-app", Y(["\ufdd0'div.title", "Clock"]), Y(["\ufdd0'div.placeholder", $(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], {"\ufdd0'data-template-name":"clock", "\ufdd0'data-template-bind-kw":"time"})])]), "\ufdd0'node-updater!":j, "\ufdd0'behaviour-fn!":j}), "\ufdd0'clock":$(["\ufdd0'static-template", "\ufdd0'node-updater!", 
"\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":Y(["\ufdd0'div.clock"]), "\ufdd0'node-updater!":Gg.call(j, function(a, c, d, e) {
  c = W.call(j, e, c);
  nc.call(j, a, c);
  return a
}), "\ufdd0'behaviour-fn!":j})});
Node.prototype.Ha = function(a, c) {
  return ic.call(j, a, c)
};
Node.prototype.Ka = function(a, c, d) {
  return jc.call(j, a, c, d)
};
Node.prototype.Ja = function(a) {
  return Ng.call(j, mc.call(j, a))
};
Node.prototype.Ia = function(a) {
  return mc.call(j, a).length
};
function bh(a, c) {
  return Ng.call(j, dc.call(j, a, c))
}
function ch(a, c) {
  var d = bh.call(j, a, c);
  return v(bc.call(j, c, a)) ? E.call(j, c, d) : d
}
function dh(a, c) {
  return gc.call(j, a, c)
}
function eh(a) {
  return wc.call(j, a, "bindId")
}
function fh(a) {
  return dc.call(j, "bind", a)
}
function gh(a, c) {
  var d = fh.call(j, c);
  return Pg.call(j, function(c) {
    return B.call(j, a, eh.call(j, c))
  }, d)
}
;function hh(a, c) {
  return v(L.call(j, a)) ? j : (v(c) ? c - a : new Date - a) / 1E3
}
function ih(a) {
  var c = "\ufdd0'start-time".call(j, a);
  return v(c) ? L.call(j, "\ufdd0'stop-time".call(j, a)) : c
}
function jh(a, c) {
  var d = W.call(j, of.call(j, a), c), e = "\ufdd0'start-time".call(j, d), f = "\ufdd0'stop-time".call(j, d), d = Re.call(j, d, v(v(e) ? f : e) ? $(["\ufdd0'start-time", "\ufdd0'stop-time", "\ufdd0'lap-time", "\ufdd0'next-state"], {"\ufdd0'start-time":new Date, "\ufdd0'stop-time":j, "\ufdd0'lap-time":j, "\ufdd0'next-state":"\ufdd0'stop"}) : v(e) ? $(["\ufdd0'stop-time", "\ufdd0'next-state"], {"\ufdd0'stop-time":new Date, "\ufdd0'next-state":"\ufdd0'start"}) : v("\ufdd0'else") ? $(["\ufdd0'start-time", 
  "\ufdd0'next-state"], {"\ufdd0'start-time":new Date, "\ufdd0'next-state":"\ufdd0'stop"}) : j);
  return bg.call(j, a, c, d)
}
function kh(a, c) {
  var d = W.call(j, of.call(j, a), c);
  return v(ih.call(j, d)) ? (d = "\ufdd0'start-time".call(j, d), bg.call(j, a, M.call(j, c, "\ufdd0'lap-time"), hh.call(j, d, new Date))) : j
}
;var lh = $(["\ufdd0'main", "\ufdd0'clock", "\ufdd0'stopwatch"], {"\ufdd0'main":$(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":Y(["\ufdd0'div.clock-app", Y(["\ufdd0'div.title", "Simple stopwatch"]), Y(["\ufdd0'div.placeholder", $(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], {"\ufdd0'data-template-name":"stopwatch", "\ufdd0'data-template-bind-kw":"stopwatch"})])]), "\ufdd0'node-updater!":j, "\ufdd0'behaviour-fn!":j}), "\ufdd0'clock":$(["\ufdd0'static-template", 
"\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":Y(["\ufdd0'div.clock"]), "\ufdd0'node-updater!":Gg.call(j, function(a, c, d, e) {
  c = W.call(j, e, c);
  nc.call(j, a, c);
  return a
}), "\ufdd0'behaviour-fn!":j}), "\ufdd0'stopwatch":$(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":Y(["\ufdd0'div.stopwatch", Y(["\ufdd0'div.placeholder", $(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], {"\ufdd0'data-template-name":"clock", "\ufdd0'data-template-bind-kw":"time"})]), Y(["\ufdd0'div.hbox", Y(["\ufdd0'div.pad1"]), Y(["\ufdd0'div.button.start-stop", "Start"]), Y(["\ufdd0'div.button.lap", "Lap"]), Y(["\ufdd0'div.pad1"])]), 
Y(["\ufdd0'div.timing", Y(["\ufdd0'table", Y(["\ufdd0'tr", Y(["\ufdd0'td.label", "start time: "]), Y(["\ufdd0'td.start-time"])]), Y(["\ufdd0'tr", Y(["\ufdd0'td.label", "stop time: "]), Y(["\ufdd0'td.stop-time"])]), Y(["\ufdd0'tr", Y(["\ufdd0'td.label", "elapsed time: "]), Y(["\ufdd0'td.elapsed-time"])]), Y(["\ufdd0'tr", Y(["\ufdd0'td.label", "lap time: "]), Y(["\ufdd0'td.lap-time"])])])])]), "\ufdd0'node-updater!":Gg.call(j, function(a, c, d, e) {
  var e = W.call(j, e, c), f = "\ufdd0'start-time".call(j, e), h = "\ufdd0'stop-time".call(j, e), e = jd.call(j, e, "\ufdd0'elapsed-time", hh.call(j, f, h)), h = G.call(j, Y(["\ufdd0'start-time", "\ufdd0'stop-time", "\ufdd0'elapsed-time", "\ufdd0'lap-time"]));
  if(v(h)) {
    for(f = H.call(j, h);;) {
      var i = dh.call(j, We.call(j, f), a);
      nc.call(j, i, f.call(j, e));
      f = K.call(j, h);
      if(v(f)) {
        h = f, f = H.call(j, h)
      }else {
        break
      }
    }
  }
  d = W.call(j, d, c);
  c = "\ufdd0'next-state".call(j, e, "\ufdd0'start");
  d = "\ufdd0'next-state".call(j, d, "\ufdd0'start");
  v(B.call(j, c, d)) || (f = dh.call(j, "start-stop", a), h = v(B.call(j, "\ufdd0'start", c)) ? "Start!" : v(B.call(j, "\ufdd0'stop", c)) ? "Stop!" : v(B.call(j, "\ufdd0'reset", c)) ? "Reset!" : j, nc.call(j, f, h), ac.call(j, f, We.call(j, d)), $b.call(j, f, We.call(j, c)));
  c = dh.call(j, "lap", a);
  v(ih.call(j, e)) ? ac.call(j, c, "inactive") : $b.call(j, c, "inactive");
  return a
}), "\ufdd0'behaviour-fn!":function(a, c) {
  var d = "\ufdd0'mirror-state".call(j, a), e = "\ufdd0'app-state".call(j, a), f = gg.call(j, c), h = dh.call(j, "start-stop", c);
  u.call(j, h, "click", function(a) {
    var c = mg.call(j, of.call(j, d), f);
    jh.call(j, e, c);
    a.stopPropagation();
    return l
  });
  u.call(j, h, "selectstart", function(a) {
    a.preventDefault();
    return l
  });
  h = dh.call(j, "lap", c);
  u.call(j, h, "click", function(a) {
    var c = mg.call(j, of.call(j, d), f);
    kh.call(j, e, c);
    a.stopPropagation();
    return l
  });
  return u.call(j, h, "selectstart", function(a) {
    a.preventDefault();
    return l
  })
}})});
var mh = function() {
  var a = j;
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 1:
        return a.call(j, c, 100, j);
      case 2:
        return a.call(j, c, d, j);
      case 3:
        return v(oc.call(j, c)) ? (new rc(c, d)).play() : j
    }
    b("Invalid arity: " + arguments.length)
  }
}(), nh = function() {
  var a = j;
  return a = function(c, d, e) {
    switch(arguments.length) {
      case 1:
        return a.call(j, c, 100, j);
      case 2:
        return a.call(j, c, d, j);
      case 3:
        return v(L.call(j, oc.call(j, c))) ? (new sc(c, d)).play() : j
    }
    b("Invalid arity: " + arguments.length)
  }
}();
function oh(a) {
  var c = N.call(j, a), a = N.call(j, ve.call(j, "\ufdd0'done?", a));
  return $(["\ufdd0'total", "\ufdd0'done", "\ufdd0'remaining"], {"\ufdd0'total":c, "\ufdd0'done":a, "\ufdd0'remaining":c - a})
}
function ph(a) {
  var c = v(zd.call(j, a)) ? S.call(j, $c, a) : a, a = Q.call(j, c, "\ufdd0'done"), d = Q.call(j, c, "\ufdd0'remaining"), c = Q.call(j, c, "\ufdd0'total");
  return Y(["\ufdd0'div.todo-stats-box", Y(["\ufdd0'div.todo-stats", we.call(j, C, v(0 < c) ? D.call(j, Y(["\ufdd0'span.todo-count", Y(["\ufdd0'span.number", T.call(j, d, " ")]), Y(["\ufdd0'span.word", v(B.call(j, 1, d)) ? "item" : "items"]), " left."]), v(0 < a) ? Y(["\ufdd0'span.todo-clear", Y(["\ufdd0'a", $(["\ufdd0'href"], {"\ufdd0'href":"#"}), "Clear ", Y(["\ufdd0'span.number-done", T.call(j, a)]), " completed ", Y(["\ufdd0'span.word-done", v(B.call(j, a, 1)) ? "item" : "items"])])]) : j) : 
  j)]), v(15 <= d) ? Y(["\ufdd0'div.comment", Y(["\ufdd0'em", "Its going to be a very busy day :!"])]) : v(7 <= d) ? Y(["\ufdd0'div.comment", "Its going to be a busy day..."]) : j, Y(["\ufdd0'div.last-update", "Last-update: ", Y(["\ufdd0'span", T.call(j, new Date)])])])
}
;var qh = $(["\ufdd0'main", "\ufdd0'todo", "\ufdd0'todo-stats", "\ufdd0'todo-list"], {"\ufdd0'main":$(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":Y(["\ufdd0'div", Y(["\ufdd0'div.todoapp", Y(["\ufdd0'div.title", Y(["\ufdd0'h1", "Todos"])]), Y(["\ufdd0'div.content", Y(["\ufdd0'div.create-todo", Y(["\ufdd0'div", Y(["\ufdd0'input.new-todo", $(["\ufdd0'placeholder", "\ufdd0'type"], {"\ufdd0'placeholder":"What needs to be done?", "\ufdd0'type":"text"})])]), 
Y(["\ufdd0'span.ui-tooltip-top", $(["\ufdd0'style"], {"\ufdd0'style":"display:none;"}), "Press Enter to save this task"])]), Y(["\ufdd0'div.placeholder", $(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], {"\ufdd0'data-template-name":"todo-stats", "\ufdd0'data-template-bind-kw":"todos"})]), Y(["\ufdd0'div.placeholder", $(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], {"\ufdd0'data-template-name":"todo-list", "\ufdd0'data-template-bind-kw":"todos"})])])]), Y(["\ufdd0'div.postscript", 
"This example is a close replica of this ", Y(["\ufdd0'a", $(["\ufdd0'href"], {"\ufdd0'href":"http://documentcloud.github.com/backbone/examples/todos/"}), "backbone example application"])])]), "\ufdd0'node-updater!":j, "\ufdd0'behaviour-fn!":function(a, c) {
  var d = dh.call(j, "create-todo", c), e = dh.call(j, "new-todo", d), f = dh.call(j, "ui-tooltip-top", d), h = "\ufdd0'mirror-state".call(j, a), i = "\ufdd0'app-state".call(j, a), k = gg.call(j, c);
  u.call(j, e, "keypress", function(a) {
    if(v(B.call(j, a.keyCode, 13))) {
      var a = $(["\ufdd0'desc", "\ufdd0'done?"], {"\ufdd0'desc":e.value, "\ufdd0'done?":l}), c = mg.call(j, of.call(j, h), k);
      ag.call(j, i, M.call(j, c, "\ufdd0'todos"), M, a);
      return e.value = ""
    }
    return j
  });
  return u.call(j, e, "keyup", function() {
    var a = lf.call(j, j);
    return function() {
      mh.call(j, f);
      nf.call(j, a, function(a) {
        return v(a) ? clearTimeout.call(j, a) : j
      });
      var c = e.value;
      return v(L.call(j, function() {
        var a = B.call(j, c, "");
        return v(a) ? a : B.call(j, c, "placeholder")
      }())) ? mf.call(j, a, setTimeout.call(j, function() {
        return nh.call(j, f)
      }, 1E3)) : j
    }
  }())
}}), "\ufdd0'todo":$(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":Y(["\ufdd0'div", Y(["\ufdd0'div.display", Y(["\ufdd0'input.check.bind", $(["\ufdd0'type", "\ufdd0'data-bind-id"], {"\ufdd0'type":"checkbox", "\ufdd0'data-bind-id":"check"})]), Y(["\ufdd0'div.todo-text.bind", $(["\ufdd0'data-bind-id"], {"\ufdd0'data-bind-id":"todo-text"})]), Y(["\ufdd0'span.todo-destroy"])]), Y(["\ufdd0'div.edit", Y(["\ufdd0'input.todo-input.bind", $(["\ufdd0'type", 
"\ufdd0'value", "\ufdd0'data-bind-id"], {"\ufdd0'type":"text", "\ufdd0'value":"", "\ufdd0'data-bind-id":"todo-input"})])]), Y(["\ufdd0'div.last-update", "Last-update: ", Y(["\ufdd0'span.bind", $(["\ufdd0'data-bind-id"], {"\ufdd0'data-bind-id":"last-update"})])])]), "\ufdd0'node-updater!":Gg.call(j, function(a, c, d, e) {
  var d = W.call(j, d, c), c = W.call(j, e, c), e = tf.call(j, c, Y(["\ufdd0'done?"])), c = tf.call(j, c, Y(["\ufdd0'desc"])), f = gh.call(j, "check", a);
  v(e) ? ($b.call(j, a, "done"), uc.call(j, f, "checked")) : (ac.call(j, a, "done"), uc.call(j, f));
  v(ee.call(j, "\ufdd0'desc".call(j, d), c)) && (d = gh.call(j, "todo-text", a), e = gh.call(j, "todo-input", a), nc.call(j, d, c), uc.call(j, e, c));
  d = gh.call(j, "last-update", a);
  nc.call(j, d, new Date);
  return a
}), "\ufdd0'behaviour-fn!":function(a, c) {
  var d = "\ufdd0'mirror-state".call(j, a), e = "\ufdd0'app-state".call(j, a), f = gg.call(j, c), h = dh.call(j, "check", c);
  v(h) ? u.call(j, h, "click", function() {
    var a = mg.call(j, of.call(j, d), f);
    return ag.call(j, e, M.call(j, a, "\ufdd0'done?"), L)
  }) : sf.call(j, "Warning", "check");
  h = dh.call(j, "todo-destroy", c);
  v(h) && u.call(j, h, "click", function() {
    var a = mg.call(j, of.call(j, d), f), c = id.call(j, a);
    return dg.call(j, e, Z.call(j, Ve.call(j, a)), Ue([c]))
  });
  var h = dh.call(j, "todo-text", c), i = dh.call(j, "todo-input", c);
  u.call(j, h, "dblclick", function() {
    $b.call(j, c, "editing");
    return i.focus()
  });
  var k = dh.call(j, "todo-input", c);
  return v(k) ? (u.call(j, k, "keypress", function(a) {
    return v(B.call(j, a.keyCode, 13)) ? k.blur() : j
  }), u.call(j, k, "blur", function() {
    var a = mg.call(j, of.call(j, d), f), a = M.call(j, a, "\ufdd0'desc"), h = k.value;
    ac.call(j, c, "editing");
    return cg.call(j, e, a, h)
  })) : j
}}), "\ufdd0'todo-stats":$(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":j, "\ufdd0'node-updater!":Gg.call(j, function(a, c, d, e) {
  a = W.call(j, e, c);
  return H.call(j, $g.call(j, ph.call(j, oh.call(j, a))))
}), "\ufdd0'behaviour-fn!":function(a, c) {
  var d = "\ufdd0'mirror-state".call(j, a), e = "\ufdd0'app-state".call(j, a), f = gg.call(j, c), h = dh.call(j, "todo-clear", c);
  return v(h) ? u.call(j, h, "click", function() {
    var a = mg.call(j, of.call(j, d), f);
    return ag.call(j, e, a, function(a) {
      return Z.call(j, we.call(j, "\ufdd0'done?", a))
    })
  }) : j
}}), "\ufdd0'todo-list":$(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":Y(["\ufdd0'ol.todo-list"]), "\ufdd0'node-updater!":function(a) {
  return function(c, d, e, f) {
    return Eg.call(j, a, c, d, e, j, f)
  }
}.call(j, function(a) {
  return function(c, d, e, f) {
    return H.call(j, $g.call(j, Y(["\ufdd0'li", Y(["\ufdd0'div.placeholder", $(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-int"], {"\ufdd0'data-template-name":a, "\ufdd0'data-template-bind-int":f})])])))
  }
}.call(j, "\ufdd0'todo")), "\ufdd0'behaviour-fn!":j})});
var sh = function rh(c, d) {
  return v(c) ? (d.call(j, c), Lg.call(j, function(c) {
    return rh.call(j, c, d)
  }, mc.call(j, c))) : j
};
function th(a) {
  a = wc.call(j, a, "templateName");
  return v(a) ? Td.call(j, a) : j
}
function uh(a, c) {
  $b.call(j, a, "template");
  return vc.call(j, a, "templateName", We.call(j, c))
}
function vh(a, c) {
  var d = th.call(j, a), e = "\ufdd0'static-template".call(j, "\ufdd0'templates".call(j, c).call(j, d)), e = H.call(j, $g.call(j, v(e) ? e : Y(["\ufdd0'div"])));
  $b.call(j, e, "template");
  vc.call(j, e, "templateName", d);
  return e
}
function wh(a, c) {
  var d = wc.call(j, a, "templateBindKw");
  if(v(d)) {
    return M.call(j, c, Td.call(j, d))
  }
  d = wc.call(j, a, "templateBindInt");
  if(v(d)) {
    return M.call(j, c, parseInt.call(j, d, 10))
  }
  d = wc.call(j, a, "templateBindStr");
  if(v(d)) {
    return M.call(j, c, d)
  }
  d = wc.call(j, a, "templateBindSeq");
  return v(d) ? S.call(j, je.call(j, M, c), reader.bb.call(j, d)) : c
}
function xh(a, c) {
  var d = th.call(j, a);
  return v(d) && (d = "\ufdd0'behaviour-fn!".call(j, "\ufdd0'templates".call(j, c).call(j, d)), v(d)) ? (d.call(j, c, a), vc.call(j, a, "behaviourActive", "true")) : j
}
function yh(a, c) {
  var d = G.call(j, ch.call(j, "template", a));
  if(v(d)) {
    for(var e = H.call(j, d);;) {
      if(v(wc.call(j, e, "behaviourActive")) || xh.call(j, e, c), e = K.call(j, d), v(e)) {
        d = e, e = H.call(j, d)
      }else {
        return j
      }
    }
  }else {
    return j
  }
}
function zh(a, c) {
  Lb.call(j, c);
  xc.call(j, c, "behaviourActive");
  return ug.call(j, a, c)
}
function Ah(a, c) {
  var d = "\ufdd0'mirror-state".call(j, c);
  sh.call(j, a, je.call(j, zh, d));
  return kc.call(j, a)
}
n = Node.prototype;
n.za = function(a) {
  return th.call(j, a)
};
n.va = function(a, c) {
  return wh.call(j, a, c)
};
n.Aa = function(a) {
  return bc.call(j, a, "placeholder")
};
n.xa = function(a) {
  return bh.call(j, "placeholder", a)
};
n.Ba = function(a, c) {
  return vh.call(j, a, c)
};
n.ya = function(a) {
  return ch.call(j, "template", a)
};
n.wa = function(a, c) {
  return Ah.call(j, a, c)
};
n.Ca = function(a, c, d) {
  return v(ee.call(j, a, c)) ? (uh.call(j, c, th.call(j, a)), lc.call(j, c, a), Ah.call(j, a, d), yh.call(j, c, d)) : j
};
Node.prototype.Ga = function(a) {
  var c = a.getAttribute("puid");
  return v(c) ? c : a.id
};
function Bh(a, c, d, e) {
  c = W.call(j, e, c);
  nc.call(j, a, c);
  return a
}
var Ch = $(["\ufdd0'main", "\ufdd0'clock", "\ufdd0'clock2"], {"\ufdd0'main":$(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":Y(["\ufdd0'div.clock-app", Y(["\ufdd0'div.title", "2 Clocks"]), Y(["\ufdd0'div.placeholder", $(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], {"\ufdd0'data-template-name":"clock", "\ufdd0'data-template-bind-kw":"time"})]), Y(["\ufdd0'div.placeholder", $(["\ufdd0'data-template-name", "\ufdd0'data-template-bind-kw"], 
{"\ufdd0'data-template-name":"clock2", "\ufdd0'data-template-bind-kw":"time"})])]), "\ufdd0'node-updater!":j, "\ufdd0'behaviour-fn!":j}), "\ufdd0'clock":$(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":Y(["\ufdd0'div.clock"]), "\ufdd0'node-updater!":Gg.call(j, Bh), "\ufdd0'behaviour-fn!":j}), "\ufdd0'clock2":$(["\ufdd0'static-template", "\ufdd0'node-updater!", "\ufdd0'behaviour-fn!"], {"\ufdd0'static-template":Y(["\ufdd0'div.clock.red"]), "\ufdd0'node-updater!":Gg.call(j, 
Bh), "\ufdd0'behaviour-fn!":j})});
var Dh = $(["\ufdd0'clock", "\ufdd0'clock2", "\ufdd0'stopwatch", "\ufdd0'todos"], {"\ufdd0'clock":function() {
  var a = lf.call(j, $(["\ufdd0'time"], {"\ufdd0'time":new Date}));
  Hg.call(j, "\ufdd0'user/app", a, cc.call(j, "app"), ah);
  return Kg.call(j, function() {
    return bg.call(j, a, Y(["\ufdd0'time"]), new Date)
  }, 1E3)
}, "\ufdd0'clock2":function() {
  var a = lf.call(j, $(["\ufdd0'time"], {"\ufdd0'time":new Date}));
  Hg.call(j, "\ufdd0'user/app", a, cc.call(j, "app"), Ch);
  return Kg.call(j, function() {
    return bg.call(j, a, Y(["\ufdd0'time"]), new Date)
  }, 1E3)
}, "\ufdd0'stopwatch":function() {
  var a = lf.call(j, $([], {}));
  Hg.call(j, "\ufdd0'user/app", a, cc.call(j, "app"), lh);
  return Kg.call(j, function() {
    return bg.call(j, a, Y(["\ufdd0'stopwatch", "\ufdd0'time"]), new Date)
  }, 100)
}, "\ufdd0'todos":function() {
  var a = $(["\ufdd0'todos"], {"\ufdd0'todos":Z.call(j, function() {
    return function d(a) {
      return new U(j, l, function() {
        for(;;) {
          if(v(G.call(j, a))) {
            var f = H.call(j, a);
            return E.call(j, $(["\ufdd0'id", "\ufdd0'desc", "\ufdd0'done?"], {"\ufdd0'id":f, "\ufdd0'desc":T.call(j, "do something: ", f), "\ufdd0'done?":l}), d.call(j, J.call(j, a)))
          }
          return j
        }
      })
    }.call(j, Ze.call(j, 2))
  }())}), a = lf.call(j, a);
  return Hg.call(j, "\ufdd0'user/app", a, cc.call(j, "app"), qh)
}}), Eh = wc.call(j, document.body, "appChoice");
if(v(Eh)) {
  var Fh = Td.call(j, Eh).call(j, Dh);
  v(Fh) && Fh.call(j)
}
;