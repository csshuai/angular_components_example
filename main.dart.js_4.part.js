self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,d,e,f,g,h,i,j,k,l,m,$){var C={},H={},J={},P={},W={},G={},Y={},R={},K={},V={},S={},N={},E={},M={},B={},Q={
c_:function(n,o){var x,w
x=new Q.v5(P.e(P.c,null),n)
x.a=S.f(x,1,C.j,o)
w=document.createElement("material-toggle")
x.e=w
w.className="themeable"
w=$.a16
if(w==null){w=$.D
w=w.a2(null,C.p,$.$get$aim())
$.a16=w}x.a1(w)
return x},
aGT:function(n,o){var x=new Q.VL(P.e(P.c,null),n)
x.a=S.f(x,3,C.b,o)
x.d=$.a16
return x},
aGU:function(n,o){var x=new Q.VM(P.e(P.c,null),n)
x.a=S.f(x,3,C.k,o)
return x},
m_:function(){if($.ab3)return
$.ab3=!0
$.$get$F().u(0,C.o_,C.hK)
E.w()
V.fB()
K.cx()},
v5:function v5(n,o){var _=this
_.a=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null},
VL:function VL(n,o){var _=this
_.a=_.y=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null},
VM:function VM(n,o){var _=this
_.a=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null}},D={
bU:function(n,o){return new D.fV(n,!1,!1,new P.a_(null,null,0,[P.x]),1,!1,!1)},
fV:function fV(n,o,p,q,r,s,t){var _=this
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
GS:function GS(n){this.a=n}},L={},Z={},A={},U={},T={},O={},X={},F={}
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
D.fV.prototype={
scg:function(n,o){this.e=o
this.c0()},
gcg:function(n){return this.e},
sJi:function(n){this.z=n
this.Hl()},
sJC:function(n){this.Q=n
this.Hl()},
Hl:function(){if(this.Q)var x=3
else x=this.z?2:1
this.y=x},
nH:function(){if(!this.d){this.e=!this.e
this.c0()
this.f.S(0,this.e)
var x=this.a
if(!(x==null))x.$0()}},
hW:function(n){this.nH()
n.preventDefault()
n.stopPropagation()},
kN:function(n){if(n.keyCode===13||Z.je(n)){this.nH()
n.preventDefault()
n.stopPropagation()}},
c0:function(){var x=this.c
if(x==null)return
x.setAttribute("aria-pressed",H.u(this.e))},
i5:function(n,o){this.e=o
this.c0()
this.b.a.aN()},
i1:function(n){var x=this.f
new P.m(x,[H.i(x,0)]).B(new D.GS(n))},
k_:function(n){this.a=n},
h1:function(n){this.d=n
this.b.a.aN()},
gaO:function(n){return this.d},
gcW:function(n){return this.r},
sa6c:function(n){return this.c=n},
saO:function(n,o){return this.d=o},
scW:function(n,o){return this.r=o}}
Q.v5.prototype={
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
this.y=new K.z(new D.p(t,Q.ayU()),t,!1)
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
this.cj(this.cx,0)
t=this.r
s=W.B;(t&&C.t).a8(t,"blur",this.w(this.gOH(),s,s))
t=this.r;(t&&C.t).a8(t,"focus",this.w(this.gR4(),s,s))
t=this.r;(t&&C.t).a8(t,"mouseenter",this.w(this.gRQ(),s,s))
t=this.r;(t&&C.t).a8(t,"mouseleave",this.w(this.gRU(),s,s))
this.f.sa6c(this.r)
this.P(C.a,null)
t=J.J(w)
t.a8(w,"click",this.w(x.gdu(),s,W.a8))
t.a8(w,"keypress",this.w(x.gdq(),s,W.W))
return},
q:function(){var x,w,v,u,t,s,r,q,p,o
x=this.f
w=this.y
v=x.r
w.sY(v!=null&&v.length!==0)
this.x.G()
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
this.dx=s}r=Q.G(x.d)
w=this.dy
if(w!==r){w=this.r
v=J.bE(r)
this.a9(w,"aria-disabled",v)
this.dy=r}w=x.x
q=w==null?x.r:w
if(q==null)q=""
w=this.fr
if(w!==q){w=this.r
this.a9(w,"aria-label",q)
this.fr=q}p=Q.G(x.y)
w=this.fx
if(w!==p){w=this.Q
v=J.bE(p)
this.a9(w,"elevation",v)
this.fx=p}o=Q.G(x.y)
w=this.fy
if(w!==o){w=this.cx
v=J.bE(o)
this.a9(w,"elevation",v)
this.fy=o}},
v:function(){var x=this.x
if(!(x==null))x.F()},
OI:function(n){this.f.sJi(!1)},
R5:function(n){this.f.sJi(!0)},
RR:function(n){this.f.sJC(!0)},
RV:function(n){this.f.sJC(!1)},
$asb:function(){return[D.fV]}}
Q.VL.prototype={
p:function(){var x,w
x=document
w=x.createElement("div")
this.r=w
w.className="tgl-lbl"
this.h(w)
w=x.createTextNode("")
this.x=w
this.r.appendChild(w)
this.D(this.r)
return},
q:function(){var x,w
x=this.f.r
if(x==null)x=""
w=this.y
if(w!==x){this.x.textContent=x
this.y=x}},
$asb:function(){return[D.fV]}}
Q.VM.prototype={
p:function(){var x=Q.c_(this,0)
this.r=x
this.e=x.e
x=D.bU(x.a.b,null)
this.x=x
this.r.k(0,x,this.a.e)
this.D(this.e)
return new D.A(this,0,this.e,this.x,[D.fV])},
R:function(n,o,p){if(n===C.c&&0===o)return this.x
return p},
q:function(){var x=this.a.cy
this.r.j()
if(x===0)this.x.c0()},
v:function(){var x=this.r
if(!(x==null))x.i()},
$asb:function(){return[D.fV]}}
var y=i([{func:1,ret:-1,args:[,]},{func:1,ret:[S.b,D.fV],args:[[S.b,,],P.j]},{func:1,ret:-1,args:[W.a8]},{func:1,ret:-1,args:[W.W]},{func:1,ret:-1,args:[P.x]}])
D.GS.prototype={
$1:function(n){return this.a.$1(n)},
"call*":"$1",
$R:1};(function installTearOffs(){var x
f(x=D.fV.prototype,"gdu",0,0,0,null,["$1"],["hW"],2,0)
f(x,"gdq",0,0,0,null,["$1"],["kN"],3,0)
f(x,"gjZ",0,0,1,null,["$1"],["h1"],4,0)
f(Q,"ayU",1,0,0,null,["$2"],["aGT"],1,0)
f(Q,"ayV",1,0,0,null,["$2"],["aGU"],1,0)
f(x=Q.v5.prototype,"gOH",0,0,0,null,["$1"],["OI"],0,0)
f(x,"gR4",0,0,0,null,["$1"],["R5"],0,0)
f(x,"gRQ",0,0,0,null,["$1"],["RR"],0,0)
f(x,"gRU",0,0,0,null,["$1"],["RV"],0,0)})();(function inheritance(){a(D.fV,P.q)
a(D.GS,H.aF)
var x=S.b
a(Q.v5,x)
a(Q.VL,x)
a(Q.VM,x)})();(function constants(){C.hK=new D.v("material-toggle",Q.ayV(),[D.fV])
C.o_=H.t(D.fV)})();(function staticFields(){$.a16=null
$.ab3=!1})();(function lazyInitializers(){c($,"ajk","$get$ajk",function(){return['._nghost-%ID%{display:inline-block;text-align:initial;}.material-toggle._ngcontent-%ID%{display:inline-flex;align-items:center;justify-content:flex-end;cursor:pointer;outline:none;width:100%;}.material-toggle.disabled._ngcontent-%ID%{pointer-events:none;}.tgl-container._ngcontent-%ID%{display:inline-block;min-width:36px;position:relative;vertical-align:middle;width:36px;}.tgl-bar._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:rgba(0, 0, 0, 0.26);border-radius:8px;height:14px;margin:2px 0;width:100%;}.tgl-bar[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-bar[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:#009688;opacity:0.5;}.tgl-btn-container._ngcontent-%ID%{display:inline-flex;justify-content:flex-end;transition:width 130ms cubic-bezier(0.4, 0, 0.2, 1);margin-top:-2px;position:absolute;top:0;width:20px;}.material-toggle.checked._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%{width:36px;}.tgl-btn._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fafafa;border-radius:50%;height:20px;position:relative;width:20px;}.tgl-btn[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-btn[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#009688;}.tgl-lbl._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:2px 8px 2px 0;position:relative;vertical-align:middle;white-space:normal;}.material-toggle.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%{opacity:0.54;}.material-toggle.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#bdbdbd;}.material-toggle.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:rgba(0, 0, 0, 0.12);}']})
c($,"aim","$get$aim",function(){return[$.$get$ajk()]})})();(function nativeSupport(){j({})
k({})})()}
$__dart_deferred_initializers__["cagv3a+/bNdsMgu0rzLsnbrh53o="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_4.part.js.map
