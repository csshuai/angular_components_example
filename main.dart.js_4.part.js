self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,d,e,f,g,h,i,j,k,l,m,$){var C={},H={},J={},P={},W={},G={},Y={},R={},K={},V={},S={},N={},E={},M={},B={},Q={
c1:function(n,o){var x,w
x=new Q.va(P.e(P.c,null),n)
x.a=S.f(x,1,C.j,o)
w=document.createElement("material-toggle")
x.e=w
w.className="themeable"
w=$.a1c
if(w==null){w=$.D
w=w.a2(null,C.p,$.$get$aix())
$.a1c=w}x.a1(w)
return x},
aH7:function(n,o){var x=new Q.VR(P.e(P.c,null),n)
x.a=S.f(x,3,C.b,o)
x.d=$.a1c
return x},
aH8:function(n,o){var x=new Q.VS(P.e(P.c,null),n)
x.a=S.f(x,3,C.k,o)
return x},
m1:function(){if($.aba)return
$.aba=!0
$.$get$F().u(0,C.o1,C.hN)
E.w()
V.fF()
K.cD()},
va:function va(n,o){var _=this
_.a=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null},
VR:function VR(n,o){var _=this
_.a=_.y=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null},
VS:function VS(n,o){var _=this
_.a=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null}},D={
bW:function(n,o){return new D.fZ(n,!1,!1,new P.a0(null,null,0,[P.x]),1,!1,!1)},
fZ:function fZ(n,o,p,q,r,s,t){var _=this
_.a=null
_.b=n
_.c=null
_.d=o
_.e=p
_.f=q
_.x=_.r=null
_.y=r
_.z=s
_.Q=t},
GX:function GX(n){this.a=n}},L={},Z={},A={},U={},T={},O={},X={},F={}
var z=[C,H,J,P,W,G,Y,R,K,V,S,N,E,M,B,Q,D,L,Z,A,U,T,O,X,F]
g([C,H,J,P,W,G,Y,R,K,V,S,N,E,M,B,Q,D,L,Z,A,U,T,O,X,F])
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
U=h(m[20],U)
T=h(m[21],T)
O=h(m[22],O)
X=h(m[23],X)
F=h(m[24],F)
D.fZ.prototype={
scu:function(n,o){this.e=o
this.cc()},
gcu:function(n){return this.e},
sJl:function(n){this.z=n
this.Ho()},
sJF:function(n){this.Q=n
this.Ho()},
Ho:function(){if(this.Q)var x=3
else x=this.z?2:1
this.y=x},
nK:function(){if(!this.d){this.e=!this.e
this.cc()
this.f.S(0,this.e)
var x=this.a
if(!(x==null))x.$0()}},
hX:function(n){this.nK()
n.preventDefault()
n.stopPropagation()},
kO:function(n){if(n.keyCode===13||Z.ji(n)){this.nK()
n.preventDefault()
n.stopPropagation()}},
cc:function(){var x=this.c
if(x==null)return
x.setAttribute("aria-pressed",H.u(this.e))},
i6:function(n,o){this.e=o
this.cc()
this.b.a.aR()},
i2:function(n){var x=this.f
new P.l(x,[H.i(x,0)]).B(new D.GX(n))},
k0:function(n){this.a=n},
h2:function(n){this.d=n
this.b.a.aR()},
gaS:function(n){return this.d},
gd_:function(n){return this.r},
sa74:function(n){return this.c=n},
saS:function(n,o){return this.d=o},
sd_:function(n,o){return this.r=o}}
Q.va.prototype={
p:function(){var x,w,v,u,t,s
x=this.f
w=this.e
v=this.a3(w)
u=document
t=S.o(u,v)
this.r=t
t.className="material-toggle"
t.setAttribute("role","button")
this.h(this.r)
t=$.$get$I().cloneNode(!1)
this.r.appendChild(t)
t=new V.n(1,0,this,t)
this.x=t
this.y=new K.A(new D.p(t,Q.az6()),t,!1)
t=S.o(u,this.r)
this.z=t
t.className="tgl-container"
this.h(t)
t=S.o(u,this.z)
this.Q=t
t.setAttribute("animated","")
t=this.Q
t.className="tgl-bar"
this.h(t)
t=S.o(u,this.z)
this.ch=t
t.className="tgl-btn-container"
this.h(t)
t=S.o(u,this.ch)
this.cx=t
t.setAttribute("animated","")
t=this.cx
t.className="tgl-btn"
this.h(t)
this.cD(this.cx,0)
t=this.r
s=W.B;(t&&C.u).a8(t,"blur",this.w(this.gOO(),s,s))
t=this.r;(t&&C.u).a8(t,"focus",this.w(this.gRb(),s,s))
t=this.r;(t&&C.u).a8(t,"mouseenter",this.w(this.gRZ(),s,s))
t=this.r;(t&&C.u).a8(t,"mouseleave",this.w(this.gS2(),s,s))
this.f.sa74(this.r)
this.P(C.a,null)
t=J.J(w)
t.a8(w,"click",this.w(x.gdH(),s,W.a8))
t.a8(w,"keypress",this.w(x.gdD(),s,W.W))
return},
q:function(){var x,w,v,u,t,s,r,q,p,o
x=this.f
w=this.y
v=x.r
w.sY(v!=null&&v.length!==0)
this.x.H()
u=x.e
w=this.cy
if(w==null?u!=null:w!==u){this.aE(this.r,"checked",u)
this.cy=u}t=x.d
w=this.db
if(w==null?t!=null:w!==t){this.aE(this.r,"disabled",t)
this.db=t}s=x.d?"-1":"0"
w=this.dx
if(w!==s){w=this.r
this.a9(w,"tabindex",s)
this.dx=s}r=Q.H(x.d)
w=this.dy
if(w!==r){w=this.r
v=J.bG(r)
this.a9(w,"aria-disabled",v)
this.dy=r}w=x.x
q=w==null?x.r:w
if(q==null)q=""
w=this.fr
if(w!==q){w=this.r
this.a9(w,"aria-label",q)
this.fr=q}p=Q.H(x.y)
w=this.fx
if(w!==p){w=this.Q
v=J.bG(p)
this.a9(w,"elevation",v)
this.fx=p}o=Q.H(x.y)
w=this.fy
if(w!==o){w=this.cx
v=J.bG(o)
this.a9(w,"elevation",v)
this.fy=o}},
v:function(){var x=this.x
if(!(x==null))x.G()},
OP:function(n){this.f.sJl(!1)},
Rc:function(n){this.f.sJl(!0)},
S_:function(n){this.f.sJF(!0)},
S3:function(n){this.f.sJF(!1)},
$asb:function(){return[D.fZ]}}
Q.VR.prototype={
p:function(){var x,w
x=document
w=x.createElement("div")
this.r=w
w.className="tgl-lbl"
this.h(w)
w=x.createTextNode("")
this.x=w
this.r.appendChild(w)
this.E(this.r)
return},
q:function(){var x,w
x=this.f.r
if(x==null)x=""
w=this.y
if(w!==x){this.x.textContent=x
this.y=x}},
$asb:function(){return[D.fZ]}}
Q.VS.prototype={
p:function(){var x=Q.c1(this,0)
this.r=x
this.e=x.e
x=D.bW(x.a.b,null)
this.x=x
this.r.k(0,x,this.a.e)
this.E(this.e)
return new D.z(this,0,this.e,this.x,[D.fZ])},
R:function(n,o,p){if(n===C.c&&0===o)return this.x
return p},
q:function(){var x=this.a.cy
this.r.j()
if(x===0)this.x.cc()},
v:function(){var x=this.r
if(!(x==null))x.i()},
$asb:function(){return[D.fZ]}}
var y=i([{func:1,ret:-1,args:[,]},{func:1,ret:[S.b,D.fZ],args:[[S.b,,],P.j]},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[W.W]},{func:1,ret:-1,args:[P.x]}])
D.GX.prototype={
$1:function(n){return this.a.$1(n)},
"call*":"$1",
$R:1};(function installTearOffs(){var x
f(x=D.fZ.prototype,"gdH",0,0,0,null,["$1"],["hX"],2,0)
f(x,"gdD",0,0,0,null,["$1"],["kO"],3,0)
f(x,"gk_",0,0,1,null,["$1"],["h2"],4,0)
f(Q,"az6",1,0,0,null,["$2"],["aH7"],1,0)
f(Q,"az7",1,0,0,null,["$2"],["aH8"],1,0)
f(x=Q.va.prototype,"gOO",0,0,0,null,["$1"],["OP"],0,0)
f(x,"gRb",0,0,0,null,["$1"],["Rc"],0,0)
f(x,"gRZ",0,0,0,null,["$1"],["S_"],0,0)
f(x,"gS2",0,0,0,null,["$1"],["S3"],0,0)})();(function inheritance(){a(D.fZ,P.q)
a(D.GX,H.aB)
var x=S.b
a(Q.va,x)
a(Q.VR,x)
a(Q.VS,x)})();(function constants(){C.hN=new D.v("material-toggle",Q.az7(),[D.fZ])
C.o1=H.r(D.fZ)})();(function staticFields(){$.a1c=null
$.aba=!1})();(function lazyInitializers(){c($,"ajw","$get$ajw",function(){return['._nghost-%ID%{display:inline-block;text-align:initial;}.material-toggle._ngcontent-%ID%{display:inline-flex;align-items:center;justify-content:flex-end;cursor:pointer;outline:none;width:100%;}.material-toggle.disabled._ngcontent-%ID%{pointer-events:none;}.tgl-container._ngcontent-%ID%{display:inline-block;min-width:36px;position:relative;vertical-align:middle;width:36px;}.tgl-bar._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:rgba(0, 0, 0, 0.26);border-radius:8px;height:14px;margin:2px 0;width:100%;}.tgl-bar[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-bar[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:#009688;opacity:0.5;}.tgl-btn-container._ngcontent-%ID%{display:inline-flex;justify-content:flex-end;transition:width 130ms cubic-bezier(0.4, 0, 0.2, 1);margin-top:-2px;position:absolute;top:0;width:20px;}.material-toggle.checked._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%{width:36px;}.tgl-btn._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fafafa;border-radius:50%;height:20px;position:relative;width:20px;}.tgl-btn[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-btn[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#009688;}.tgl-lbl._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:2px 8px 2px 0;position:relative;vertical-align:middle;white-space:normal;}.material-toggle.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%{opacity:0.54;}.material-toggle.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#bdbdbd;}.material-toggle.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:rgba(0, 0, 0, 0.12);}']})
c($,"aix","$get$aix",function(){return[$.$get$ajw()]})})();(function nativeSupport(){j({})
k({})})()}
$__dart_deferred_initializers__["GMKBtW2/XjozP93Ltmfow747vt0="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_4.part.js.map
