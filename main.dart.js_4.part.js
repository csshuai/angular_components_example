self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,d,e,f,g,h,i,j,k,l,m,$){var C={},H={},J={},P={},W={},G={},R={},K={},V={},Y={},N={},E={},B={},S={},Q={
c6:function(n,o){var y=new Q.tj(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,P.c(),n,null,null,null)
y.a=S.d(y,1,C.h,o)
y.GP(n,o)
return y},
alY:function(n,o){var y=new Q.Mb(null,null,null,null,P.c(),n,null,null,null)
y.a=S.d(y,3,C.d,o)
y.d=$.SH
return y},
alZ:function(n,o){var y=new Q.Mc(null,null,null,P.c(),n,null,null,null)
y.a=S.d(y,3,C.i,o)
return y},
v1:function(){if($.a_g)return
$.a_g=!0
$.$get$D().u(0,C.pT,C.iu)
E.t()
V.eF()},
tj:function tj(n,o,p,q,r,s,t,u,v,w,x,y,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
_.r=n
_.x=o
_.y=p
_.z=q
_.Q=r
_.ch=s
_.cx=t
_.cy=u
_.db=v
_.dx=w
_.dy=x
_.fr=y
_.fx=a0
_.fy=a1
_.go=a2
_.a=a3
_.b=a4
_.c=a5
_.d=a6
_.e=a7
_.f=a8},
Mb:function Mb(n,o,p,q,r,s,t,u,v){var _=this
_.r=n
_.x=o
_.y=p
_.a=q
_.b=r
_.c=s
_.d=t
_.e=u
_.f=v},
Mc:function Mc(n,o,p,q,r,s,t,u){var _=this
_.r=n
_.x=o
_.a=p
_.b=q
_.c=r
_.d=s
_.e=t
_.f=u}},D={bf:function bf(n,o,p,q,r,s,t,u){var _=this
_.a=n
_.b=o
_.c=p
_.d=q
_.e=r
_.f=s
_.r=t
_.x=u}},M={},L={},Z={},A={},F={},T={},O={},U={},X={}
var z=[C,H,J,P,W,G,R,K,V,Y,N,E,B,S,Q,D,M,L,Z,A,F,T,O,U,X]
g([C,H,J,P,W,G,R,K,V,Y,N,E,B,S,Q,D,M,L,Z,A,F,T,O,U,X])
C=h(m[0],C)
H=h(m[1],H)
J=h(m[2],J)
P=h(m[3],P)
W=h(m[4],W)
G=h(m[5],G)
R=h(m[6],R)
K=h(m[7],K)
V=h(m[8],V)
Y=h(m[9],Y)
N=h(m[10],N)
E=h(m[11],E)
B=h(m[12],B)
S=h(m[13],S)
Q=h(m[14],Q)
D=h(m[15],D)
M=h(m[16],M)
L=h(m[17],L)
Z=h(m[18],Z)
A=h(m[19],A)
F=h(m[20],F)
T=h(m[21],T)
O=h(m[22],O)
U=h(m[23],U)
X=h(m[24],X)
D.bf.prototype={
sCU:function(n){var y
this.r=n
if(this.x)y=3
else y=n?2:1
this.f=y},
sDd:function(n){var y
this.x=n
if(n)y=3
else y=this.r?2:1
this.f=y},
md:function(){var y,x
if(!this.a){y=!this.b
this.b=y
x=this.c
if(!x.ga1())H.v(x.a0())
x.X(y)}},
hd:function(n){this.md()
n.preventDefault()
n.stopPropagation()},
jK:function(n){if(n.keyCode===13||Z.h0(n)){this.md()
n.preventDefault()
n.stopPropagation()}},
gbo:function(n){return this.a},
gcA:function(n){return this.d},
sbo:function(n,o){return this.a=o},
scR:function(n,o){return this.b=o},
scA:function(n,o){return this.d=o}}
Q.tj.prototype={
GP:function(n,o){var y=document.createElement("material-toggle")
this.e=y
y.className="themeable"
y=$.SH
if(y==null){y=$.z.Y("",C.m,C.nl)
$.SH=y}this.W(y)},
h:function(){var y,x,w,v,u,t
y=this.f
x=this.e
w=this.Z(x)
v=document
u=S.l(v,w)
this.r=u
u.className="material-toggle"
u.setAttribute("role","button")
this.i(this.r)
t=$.$get$L().cloneNode(!1)
this.r.appendChild(t)
u=new V.m(1,0,this,t,null,null,null)
this.x=u
this.y=new K.C(new D.u(u,Q.agb()),u,!1)
u=S.l(v,this.r)
this.z=u
u.className="tgl-container"
this.i(u)
u=S.l(v,this.z)
this.Q=u
u.setAttribute("animated","")
u=this.Q
u.className="tgl-bar"
this.i(u)
u=S.l(v,this.z)
this.ch=u
u.className="tgl-btn-container"
this.i(u)
u=S.l(v,this.ch)
this.cx=u
u.setAttribute("animated","")
u=this.cx
u.className="tgl-btn"
this.i(u)
this.cB(this.cx,0)
u=this.r;(u&&C.G).a5(u,"blur",this.A(this.gI6()),null)
u=this.r;(u&&C.G).a5(u,"focus",this.A(this.gJR()),null)
u=this.r;(u&&C.G).a5(u,"mouseenter",this.A(this.gKu()),null)
u=this.r;(u&&C.G).a5(u,"mouseleave",this.A(this.gKy()),null)
this.L(C.a,null)
u=J.H(x)
u.a5(x,"click",this.A(y.gdB()),null)
u.a5(x,"keypress",this.A(y.gdF()),null)
return},
p:function(){var y,x,w,v,u,t,s,r,q,p,o
y=this.f
x=this.y
w=y.d
x.sa2(w!=null&&w.length!==0)
this.x.I()
v=y.b
x=this.cy
if(x==null?v!=null:x!==v){this.aM(this.r,"checked",v)
this.cy=v}u=y.a
x=this.db
if(x==null?u!=null:x!==u){this.aM(this.r,"disabled",u)
this.db=u}t=y.a?"-1":"0"
if(this.dx!==t){x=this.r
this.as(x,"tabindex",t)
this.dx=t}s=Q.M(y.b)
if(this.dy!==s){x=this.r
w=J.aY(s)
this.as(x,"aria-pressed",w)
this.dy=s}r=Q.M(y.a)
if(this.fr!==r){x=this.r
w=J.aY(r)
this.as(x,"aria-disabled",w)
this.fr=r}q=y.d
if(q==null)q=""
if(this.fx!==q){x=this.r
this.as(x,"aria-label",q)
this.fx=q}p=Q.M(y.f)
if(this.fy!==p){x=this.Q
w=J.aY(p)
this.as(x,"elevation",w)
this.fy=p}o=Q.M(y.f)
if(this.go!==o){x=this.cx
w=J.aY(o)
this.as(x,"elevation",w)
this.go=o}},
v:function(){var y=this.x
if(!(y==null))y.H()},
I7:function(n){this.f.sCU(!1)},
JS:function(n){this.f.sCU(!0)},
Kv:function(n){this.f.sDd(!0)},
Kz:function(n){this.f.sDd(!1)},
$asa:function(){return[D.bf]}}
Q.Mb.prototype={
h:function(){var y,x
y=document
x=y.createElement("div")
this.r=x
x.className="tgl-lbl"
this.i(x)
x=y.createTextNode("")
this.x=x
this.r.appendChild(x)
this.E(this.r)
return},
p:function(){var y=this.f.d
if(y==null)y=""
if(this.y!==y){this.x.textContent=y
this.y=y}},
$asa:function(){return[D.bf]}}
Q.Mc.prototype={
h:function(){var y,x,w
y=Q.c6(this,0)
this.r=y
this.e=y.e
x=new D.bf(!1,!1,new P.K(null,null,0,null,null,null,null,[P.w]),null,null,1,!1,!1)
this.x=x
w=this.a.e
y.f=x
y.a.e=w
y.h()
this.E(this.e)
return new D.x(this,0,this.e,this.x)},
p:function(){this.r.k()},
v:function(){var y=this.r
if(!(y==null))y.j()},
$asa:function(){}};(function installTearOffs(){var y
f(y=D.bf.prototype,"gdB",0,0,0,null,["$1"],["hd"],1)
f(y,"gdF",0,0,0,null,["$1"],["jK"],2)
f(Q,"agb",1,0,0,null,["$2"],["alY"],3)
f(Q,"agc",1,0,0,null,["$2"],["alZ"],4)
f(y=Q.tj.prototype,"gI6",0,0,0,null,["$1"],["I7"],0)
f(y,"gJR",0,0,0,null,["$1"],["JS"],0)
f(y,"gKu",0,0,0,null,["$1"],["Kv"],0)
f(y,"gKy",0,0,0,null,["$1"],["Kz"],0)})();(function inheritance(){a(D.bf,P.F)
var y=S.a
a(Q.tj,y)
a(Q.Mb,y)
a(Q.Mc,y)})();(function constants(){C.iu=new D.A("material-toggle",Q.agc(),C.a,[D.bf])
C.o5=d(['._nghost-%COMP% { display:inline-block; text-align:initial; } .material-toggle._ngcontent-%COMP% { display:inline-flex; align-items:center; justify-content:flex-end; cursor:pointer; outline:none; width:100%; } .material-toggle.disabled._ngcontent-%COMP% { pointer-events:none; } .tgl-container._ngcontent-%COMP% { display:inline-block; min-width:36px; position:relative; vertical-align:middle; width:36px; } .tgl-bar._ngcontent-%COMP% { transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1); transition:opacity 130ms cubic-bezier(0.4, 0, 0.2, 1); background-color:rgba(0, 0, 0, 0.26); border-radius:8px; height:14px; margin:2px 0; width:100%; } .tgl-bar[animated]._ngcontent-%COMP% { transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1); } .tgl-bar[elevation="1"]._ngcontent-%COMP% { box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="2"]._ngcontent-%COMP% { box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="3"]._ngcontent-%COMP% { box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="4"]._ngcontent-%COMP% { box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="5"]._ngcontent-%COMP% { box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="6"]._ngcontent-%COMP% { box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2); } .material-toggle.checked._ngcontent-%COMP% .tgl-bar._ngcontent-%COMP% { background-color:#009688; opacity:0.5; } .tgl-btn-container._ngcontent-%COMP% { display:inline-flex; justify-content:flex-end; transition:width 130ms cubic-bezier(0.4, 0, 0.2, 1); margin-top:-2px; position:absolute; top:0; width:20px; } .material-toggle.checked._ngcontent-%COMP% .tgl-btn-container._ngcontent-%COMP% { width:36px; } .tgl-btn._ngcontent-%COMP% { transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1); background-color:#fafafa; border-radius:50%; height:20px; position:relative; width:20px; } .tgl-btn[animated]._ngcontent-%COMP% { transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1); } .tgl-btn[elevation="1"]._ngcontent-%COMP% { box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="2"]._ngcontent-%COMP% { box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="3"]._ngcontent-%COMP% { box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="4"]._ngcontent-%COMP% { box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="5"]._ngcontent-%COMP% { box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="6"]._ngcontent-%COMP% { box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2); } .material-toggle.checked._ngcontent-%COMP% .tgl-btn._ngcontent-%COMP% { background-color:#009688; } .tgl-lbl._ngcontent-%COMP% { flex-grow:1; display:inline-block; padding:2px 8px 2px 0; position:relative; vertical-align:middle; white-space:normal; } .material-toggle.disabled._ngcontent-%COMP% .tgl-lbl._ngcontent-%COMP% { opacity:0.54; } .material-toggle.disabled._ngcontent-%COMP% .tgl-btn._ngcontent-%COMP%,.material-toggle.checked.disabled._ngcontent-%COMP% .tgl-btn._ngcontent-%COMP% { background-color:#bdbdbd; } .material-toggle.disabled._ngcontent-%COMP% .tgl-bar._ngcontent-%COMP%,.material-toggle.checked.disabled._ngcontent-%COMP% .tgl-bar._ngcontent-%COMP% { background-color:rgba(0, 0, 0, 0.12); }'])
C.nl=d([C.o5])
C.pT=H.o("bf")})();(function staticFields(){$.SH=null
$.a_g=!1})()
i([{func:1,v:true,args:[,]},{func:1,v:true,args:[W.a8]},{func:1,v:true,args:[W.ab]},{func:1,ret:[S.a,D.bf],args:[S.a,P.k]},{func:1,ret:S.a,args:[S.a,P.k]}]);(function nativeSupport(){j({})
k({})})()}
$__dart_deferred_initializers__["4rcKtAMvBQZhB/0h4hnvIdkpWG0="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_4.part.js.map
