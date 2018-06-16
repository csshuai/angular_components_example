self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,d,e,f,g,h,i,j,k,l,m,$){var C={},H={},J={},P={},W={},G={},Y={},R={},K={},V={},S={},N={},E={},M={},B={},Q={
dg:function(n,o){var x=new Q.x2(!0,P.j(P.c,null),n)
x.a=S.k(x,1,C.j,o,D.bT)
x.Om(n,o)
return x},
aHD:function(n,o){var x=new Q.Wi(P.j(P.c,null),n)
x.a=S.k(x,3,C.d,o,D.bT)
x.d=$.a1W
return x},
aHE:function(n,o){var x=new Q.Wj(P.j(P.c,null),n)
x.a=S.k(x,3,C.k,o,null)
return x},
qf:function(){if($.abb)return
$.abb=!0
$.$get$S().q(0,C.py,C.j0)
E.H()
V.hv()},
x2:function x2(n,o,p){var _=this
_.r=n
_.a=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.b=o
_.c=p
_.f=_.e=_.d=null},
Wi:function Wi(n,o){var _=this
_.a=_.y=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null},
Wj:function Wj(n,o){var _=this
_.a=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null}},D={bT:function bT(n,o,p,q,r,s){var _=this
_.a=null
_.b=n
_.c=o
_.d=p
_.f=_.e=null
_.r=q
_.x=r
_.y=s}},L={},Z={},A={},T={},O={},U={},X={},F={}
var z=[C,H,J,P,W,G,Y,R,K,V,S,N,E,M,B,Q,D,L,Z,A,T,O,U,X,F]
g([C,H,J,P,W,G,Y,R,K,V,S,N,E,M,B,Q,D,L,Z,A,T,O,U,X,F])
C=h(m[0],C)
H=h(m[1],H)
J=h(m[2],J)
P=h(m[3],P)
W=h(m[4],W)
G=h(m[5],G)
Y=h(m[6],Y)
R=h(m[7],R)
K=h(m[8],K)
V=h(m[9],V)
S=h(m[10],S)
N=h(m[11],N)
E=h(m[12],E)
M=h(m[13],M)
B=h(m[14],B)
Q=h(m[15],Q)
D=h(m[16],D)
L=h(m[17],L)
Z=h(m[18],Z)
A=h(m[19],A)
T=h(m[20],T)
O=h(m[21],O)
U=h(m[22],U)
X=h(m[23],X)
F=h(m[24],F)
D.bT.prototype={
scv:function(n,o){this.c=o
this.cu()},
gcv:function(n){return this.c},
sJa:function(n){this.x=n
this.Hb()},
sJw:function(n){this.y=n
this.Hb()},
Hb:function(){if(this.y)var x=3
else x=this.x?2:1
this.r=x},
nG:function(){if(!this.b){this.c=!this.c
this.cu()
this.d.R(0,this.c)}},
hY:function(n){H.a(n,"$isab")
this.nG()
n.preventDefault()
n.stopPropagation()},
kS:function(n){H.a(n,"$isY")
if(n.keyCode===13||Z.km(n)){this.nG()
n.preventDefault()
n.stopPropagation()}},
cu:function(){var x=this.a
if(x==null)return
x.setAttribute("aria-pressed",H.E(this.c))},
gaT:function(n){return this.b},
gd5:function(n){return this.e},
sa7z:function(n){return this.a=n},
saT:function(n,o){return this.b=o},
sd5:function(n,o){return this.e=o}}
Q.x2.prototype={
Om:function(n,o){var x=document.createElement("material-toggle")
H.a(x,"$isA")
this.e=x
x.className="themeable"
x=$.a1W
if(x==null){x=$.O
x=x.a3(null,C.o,$.$get$ajH())
$.a1W=x}this.a2(x)},
p:function(){var x,w,v,u,t,s
x=this.f
w=this.e
v=this.a4(w)
u=document
t=S.v(u,v)
this.x=t
t.className="material-toggle"
t.setAttribute("role","button")
this.h(this.x)
t=H.i($.$get$Z().cloneNode(!1),W.a_)
this.x.appendChild(t)
t=new V.u(1,0,this,t)
this.y=t
this.z=new K.N(new D.B(t,Q.azP()),t,!1)
t=S.v(u,this.x)
this.Q=t
t.className="tgl-container"
this.h(t)
t=S.v(u,this.Q)
this.ch=t
t.setAttribute("animated","")
t=this.ch
t.className="tgl-bar"
this.h(t)
t=S.v(u,this.Q)
this.cx=t
t.className="tgl-btn-container"
this.h(t)
t=S.v(u,this.cx)
this.cy=t
t.setAttribute("animated","")
t=this.cy
t.className="tgl-btn"
this.h(t)
this.cE(this.cy,0)
t=this.x
s=W.I;(t&&C.u).a5(t,"blur",this.w(this.gQ5(),s,s))
t=this.x;(t&&C.u).a5(t,"focus",this.w(this.gSx(),s,s))
t=this.x;(t&&C.u).a5(t,"mouseenter",this.w(this.gTm(),s,s))
t=this.x;(t&&C.u).a5(t,"mouseleave",this.w(this.gTq(),s,s))
this.f.sa7z(this.x)
this.N(C.a,null)
t=J.X(w)
t.a5(w,"click",this.w(x.gdI(),s,W.ab))
t.a5(w,"keypress",this.w(x.gdB(),s,W.Y))
return},
t:function(){var x,w,v,u,t,s,r,q,p,o
x=this.f
w=this.z
v=x.e
w.sX(v!=null&&v.length!==0)
this.y.H()
u=x.c
w=this.db
if(w==null?u!=null:w!==u){this.aF(this.x,"checked",u)
this.db=u}t=x.b
w=this.dx
if(w==null?t!=null:w!==t){this.aF(this.x,"disabled",t)
this.dx=t}s=x.b?"-1":"0"
w=this.dy
if(w!==s){w=this.x
this.ab(w,"tabindex",s)
this.dy=s}r=Q.W(x.b)
w=this.fr
if(w!==r){w=this.x
v=J.cy(r)
this.ab(w,"aria-disabled",v)
this.fr=r}w=x.f
q=w==null?x.e:w
if(q==null)q=""
w=this.fx
if(w!==q){w=this.x
this.ab(w,"aria-label",q)
this.fx=q}p=Q.W(x.r)
w=this.fy
if(w!==p){w=this.ch
v=J.cy(p)
this.ab(w,"elevation",v)
this.fy=p}o=Q.W(x.r)
w=this.go
if(w!==o){w=this.cy
v=J.cy(o)
this.ab(w,"elevation",v)
this.go=o}},
v:function(){var x=this.y
if(!(x==null))x.G()},
Q6:function(n){this.f.sJa(!1)},
Sy:function(n){this.f.sJa(!0)},
Tn:function(n){this.f.sJw(!0)},
Tr:function(n){this.f.sJw(!1)},
$asd:function(){return[D.bT]}}
Q.Wi.prototype={
p:function(){var x,w
x=document
w=x.createElement("div")
H.a(w,"$isK")
this.r=w
w.className="tgl-lbl"
this.h(w)
w=x.createTextNode("")
this.x=w
this.r.appendChild(w)
this.F(this.r)
return},
t:function(){var x,w
x=this.f.e
if(x==null)x=""
w=this.y
if(w!==x){this.x.textContent=x
this.y=x}},
$asd:function(){return[D.bT]}}
Q.Wj.prototype={
p:function(){var x,w
x=Q.dg(this,0)
this.r=x
this.e=x.e
w=new D.bT(!1,!1,new P.a1(null,null,0,[P.r]),1,!1,!1)
this.x=w
x.k(0,w,this.a.e)
this.F(this.e)
return new D.L(this,0,this.e,this.x,[D.bT])},
O:function(n,o,p){if(n===C.e&&0===o)return this.x
return p},
t:function(){var x=this.a.cy
this.r.j()
if(x===0)this.x.cu()},
v:function(){var x=this.r
if(!(x==null))x.i()},
$asd:function(){}}
var y=i([{func:1,ret:-1,args:[,]},{func:1,ret:-1,args:[W.ab]},{func:1,ret:-1,args:[W.Y]},{func:1,ret:[S.d,D.bT],args:[S.d,P.p]},{func:1,ret:S.d,args:[S.d,P.p]}]);(function installTearOffs(){var x
f(x=D.bT.prototype,"gdI",0,0,0,null,["$1"],["hY"],1,0)
f(x,"gdB",0,0,0,null,["$1"],["kS"],2,0)
f(Q,"azP",1,0,0,null,["$2"],["aHD"],3,0)
f(Q,"azQ",1,0,0,null,["$2"],["aHE"],4,0)
f(x=Q.x2.prototype,"gQ5",0,0,0,null,["$1"],["Q6"],0,0)
f(x,"gSx",0,0,0,null,["$1"],["Sy"],0,0)
f(x,"gTm",0,0,0,null,["$1"],["Tn"],0,0)
f(x,"gTq",0,0,0,null,["$1"],["Tr"],0,0)})();(function inheritance(){a(D.bT,P.w)
var x=S.d
a(Q.x2,x)
a(Q.Wi,x)
a(Q.Wj,x)})();(function constants(){C.j0=new D.F("material-toggle",Q.azQ(),C.a,[D.bT])
C.py=H.C("bT")})();(function staticFields(){$.a1W=null
$.abb=!1})();(function lazyInitializers(){c($,"akE","$get$akE",function(){return['._nghost-%ID%{display:inline-block;text-align:initial;}.material-toggle._ngcontent-%ID%{display:inline-flex;align-items:center;justify-content:flex-end;cursor:pointer;outline:none;width:100%;}.material-toggle.disabled._ngcontent-%ID%{pointer-events:none;}.tgl-container._ngcontent-%ID%{display:inline-block;min-width:36px;position:relative;vertical-align:middle;width:36px;}.tgl-bar._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:rgba(0, 0, 0, 0.26);border-radius:8px;height:14px;margin:2px 0;width:100%;}.tgl-bar[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-bar[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:#009688;opacity:0.5;}.tgl-btn-container._ngcontent-%ID%{display:inline-flex;justify-content:flex-end;transition:width 130ms cubic-bezier(0.4, 0, 0.2, 1);margin-top:-2px;position:absolute;top:0;width:20px;}.material-toggle.checked._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%{width:36px;}.tgl-btn._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fafafa;border-radius:50%;height:20px;position:relative;width:20px;}.tgl-btn[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-btn[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#009688;}.tgl-lbl._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:2px 8px 2px 0;position:relative;vertical-align:middle;white-space:normal;}.material-toggle.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%{opacity:0.54;}.material-toggle.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#bdbdbd;}.material-toggle.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:rgba(0, 0, 0, 0.12);}']})
c($,"ajH","$get$ajH",function(){return[$.$get$akE()]})})();(function nativeSupport(){j({})
k({})})()}
$__dart_deferred_initializers__["4NwDM3u4QM25d1Vw0m4TcC9A3Ms="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_42.part.js.map
