self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,d,e,f,g,h,i,j,k,l,m,$){var C={},H={},J={},P={},W={},G={},R={},K={},V={},Y={},N={},E={},M={},B={},S={},Q={
cp:function(n,o){var y=new Q.v6(!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,P.d(),n,null,null,null)
y.a=S.c(y,1,C.i,o,null)
y.Nk(n,o)
return y},
ayL:function(n,o){var y=new Q.Tj(null,null,null,null,P.d(),n,null,null,null)
y.a=S.c(y,3,C.d,o,null)
y.d=$.ZA
return y},
ayM:function(n,o){var y=new Q.Tk(null,null,null,P.d(),n,null,null,null)
y.a=S.c(y,3,C.j,o,null)
return y},
qt:function(){if($.a7x)return
$.a7x=!0
$.$get$E().t(0,C.te,C.iP)
E.r()
V.fM()},
v6:function v6(n,o,p,q,r,s,t,u,v,w,x,y,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
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
Tj:function Tj(n,o,p,q,r,s,t,u,v){var _=this
_.r=n
_.x=o
_.y=p
_.a=q
_.b=r
_.c=s
_.d=t
_.e=u
_.f=v},
Tk:function Tk(n,o,p,q,r,s,t,u){var _=this
_.r=n
_.x=o
_.a=p
_.b=q
_.c=r
_.d=s
_.e=t
_.f=u}},D={bv:function bv(n,o,p,q,r,s,t,u,v){var _=this
_.a=n
_.b=o
_.c=p
_.d=q
_.e=r
_.f=s
_.r=t
_.x=u
_.y=v}},L={},Z={},A={},F={},T={},O={},U={},X={}
var z=[C,H,J,P,W,G,R,K,V,Y,N,E,M,B,S,Q,D,L,Z,A,F,T,O,U,X]
g([C,H,J,P,W,G,R,K,V,Y,N,E,M,B,S,Q,D,L,Z,A,F,T,O,U,X])
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
M=h(m[12],M)
B=h(m[13],B)
S=h(m[14],S)
Q=h(m[15],Q)
D=h(m[16],D)
L=h(m[17],L)
Z=h(m[18],Z)
A=h(m[19],A)
F=h(m[20],F)
T=h(m[21],T)
O=h(m[22],O)
U=h(m[23],U)
X=h(m[24],X)
D.bv.prototype={
scS:function(n,o){this.c=o
this.cK()},
sI9:function(n){this.x=n
this.Ga()},
sIw:function(n){this.y=n
this.Ga()},
Ga:function(){if(this.y)var y=3
else y=this.x?2:1
this.r=y},
nE:function(){if(!this.b){this.c=!this.c
this.cK()
this.d.N(0,this.c)}},
hb:function(n){this.nE()
n.preventDefault()
n.stopPropagation()},
kT:function(n){if(n.keyCode===13||Z.ie(n)){this.nE()
n.preventDefault()
n.stopPropagation()}},
cK:function(){var y=this.a
if(y==null)return
y.setAttribute("aria-pressed",H.n(this.c))},
gb1:function(n){return this.b},
gcW:function(n){return this.e},
sa5s:function(n){return this.a=n},
sb1:function(n,o){return this.b=o},
scW:function(n,o){return this.e=o}}
Q.v6.prototype={
Nk:function(n,o){var y=document.createElement("material-toggle")
this.e=y
y.className="themeable"
y=$.ZA
if(y==null){y=$.z.a3("",C.n,C.oB)
$.ZA=y}this.a2(y)},
p:function(){var y,x,w,v,u,t
y=this.f
x=this.e
w=this.a4(x)
v=document
u=S.l(v,w)
this.x=u
u.className="material-toggle"
u.setAttribute("role","button")
this.h(this.x)
t=$.$get$L().cloneNode(!1)
this.x.appendChild(t)
u=new V.m(1,0,this,t,null,null,null)
this.y=u
this.z=new K.C(new D.u(u,Q.art()),u,!1)
u=S.l(v,this.x)
this.Q=u
u.className="tgl-container"
this.h(u)
u=S.l(v,this.Q)
this.ch=u
u.setAttribute("animated","")
u=this.ch
u.className="tgl-bar"
this.h(u)
u=S.l(v,this.Q)
this.cx=u
u.className="tgl-btn-container"
this.h(u)
u=S.l(v,this.cx)
this.cy=u
u.setAttribute("animated","")
u=this.cy
u.className="tgl-btn"
this.h(u)
this.cJ(this.cy,0)
u=this.x;(u&&C.w).a6(u,"blur",this.A(this.gOX()))
u=this.x;(u&&C.w).a6(u,"focus",this.A(this.gRo()))
u=this.x;(u&&C.w).a6(u,"mouseenter",this.A(this.gS5()))
u=this.x;(u&&C.w).a6(u,"mouseleave",this.A(this.gS9()))
this.f.sa5s(this.x)
this.M(C.a,null)
u=J.F(x)
u.a6(x,"click",this.A(y.gdM()))
u.a6(x,"keypress",this.A(y.gdH()))
return},
q:function(){var y,x,w,v,u,t,s,r,q,p
y=this.f
x=this.z
w=y.e
x.sa1(w!=null&&w.length!==0)
this.y.I()
v=y.c
x=this.db
if(x==null?v!=null:x!==v){this.aG(this.x,"checked",v)
this.db=v}u=y.b
x=this.dx
if(x==null?u!=null:x!==u){this.aG(this.x,"disabled",u)
this.dx=u}t=y.b?"-1":"0"
if(this.dy!==t){x=this.x
this.aq(x,"tabindex",t)
this.dy=t}s=Q.K(y.b)
if(this.fr!==s){x=this.x
w=J.bc(s)
this.aq(x,"aria-disabled",w)
this.fr=s}x=y.f
r=x==null?y.e:x
if(r==null)r=""
if(this.fx!==r){x=this.x
this.aq(x,"aria-label",r)
this.fx=r}q=Q.K(y.r)
if(this.fy!==q){x=this.ch
w=J.bc(q)
this.aq(x,"elevation",w)
this.fy=q}p=Q.K(y.r)
if(this.go!==p){x=this.cy
w=J.bc(p)
this.aq(x,"elevation",w)
this.go=p}},
w:function(){var y=this.y
if(!(y==null))y.H()},
OY:function(n){this.f.sI9(!1)},
Rp:function(n){this.f.sI9(!0)},
S6:function(n){this.f.sIw(!0)},
Sa:function(n){this.f.sIw(!1)},
$asa:function(){return[D.bv]}}
Q.Tj.prototype={
p:function(){var y,x
y=document
x=y.createElement("div")
this.r=x
x.className="tgl-lbl"
this.h(x)
x=y.createTextNode("")
this.x=x
this.r.appendChild(x)
this.E(this.r)
return},
q:function(){var y=this.f.e
if(y==null)y=""
if(this.y!==y){this.x.textContent=y
this.y=y}},
$asa:function(){return[D.bv]}}
Q.Tk.prototype={
p:function(){var y,x
y=Q.cp(this,0)
this.r=y
this.e=y.e
x=new D.bv(null,!1,!1,new P.I(null,null,0,null,null,null,null,[P.x]),null,null,1,!1,!1)
this.x=x
y.k(0,x,this.a.e)
this.E(this.e)
return new D.y(this,0,this.e,this.x,[D.bv])},
q:function(){var y=this.a.cy
this.r.j()
if(y===0)this.x.cK()},
w:function(){var y=this.r
if(!(y==null))y.i()},
$asa:function(){}};(function installTearOffs(){var y
f(y=D.bv.prototype,"gdM",0,0,0,null,["$1"],["hb"],1)
f(y,"gdH",0,0,0,null,["$1"],["kT"],2)
f(Q,"art",1,0,0,null,["$2"],["ayL"],3)
f(Q,"aru",1,0,0,null,["$2"],["ayM"],4)
f(y=Q.v6.prototype,"gOX",0,0,0,null,["$1"],["OY"],0)
f(y,"gRo",0,0,0,null,["$1"],["Rp"],0)
f(y,"gS5",0,0,0,null,["$1"],["S6"],0)
f(y,"gS9",0,0,0,null,["$1"],["Sa"],0)})();(function inheritance(){a(D.bv,P.H)
var y=S.a
a(Q.v6,y)
a(Q.Tj,y)
a(Q.Tk,y)})();(function constants(){C.iP=new D.B("material-toggle",Q.aru(),C.a,[D.bv])
C.px=d(['._nghost-%COMP% { display:inline-block; text-align:initial; } .material-toggle._ngcontent-%COMP% { display:inline-flex; align-items:center; justify-content:flex-end; cursor:pointer; outline:none; width:100%; } .material-toggle.disabled._ngcontent-%COMP% { pointer-events:none; } .tgl-container._ngcontent-%COMP% { display:inline-block; min-width:36px; position:relative; vertical-align:middle; width:36px; } .tgl-bar._ngcontent-%COMP% { transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1); transition:opacity 130ms cubic-bezier(0.4, 0, 0.2, 1); background-color:rgba(0, 0, 0, 0.26); border-radius:8px; height:14px; margin:2px 0; width:100%; } .tgl-bar[animated]._ngcontent-%COMP% { transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1); } .tgl-bar[elevation="1"]._ngcontent-%COMP% { box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="2"]._ngcontent-%COMP% { box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="3"]._ngcontent-%COMP% { box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="4"]._ngcontent-%COMP% { box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="5"]._ngcontent-%COMP% { box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="6"]._ngcontent-%COMP% { box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2); } .material-toggle.checked._ngcontent-%COMP% .tgl-bar._ngcontent-%COMP% { background-color:#009688; opacity:0.5; } .tgl-btn-container._ngcontent-%COMP% { display:inline-flex; justify-content:flex-end; transition:width 130ms cubic-bezier(0.4, 0, 0.2, 1); margin-top:-2px; position:absolute; top:0; width:20px; } .material-toggle.checked._ngcontent-%COMP% .tgl-btn-container._ngcontent-%COMP% { width:36px; } .tgl-btn._ngcontent-%COMP% { transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1); background-color:#fafafa; border-radius:50%; height:20px; position:relative; width:20px; } .tgl-btn[animated]._ngcontent-%COMP% { transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1); } .tgl-btn[elevation="1"]._ngcontent-%COMP% { box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="2"]._ngcontent-%COMP% { box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="3"]._ngcontent-%COMP% { box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="4"]._ngcontent-%COMP% { box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="5"]._ngcontent-%COMP% { box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="6"]._ngcontent-%COMP% { box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2); } .material-toggle.checked._ngcontent-%COMP% .tgl-btn._ngcontent-%COMP% { background-color:#009688; } .tgl-lbl._ngcontent-%COMP% { flex-grow:1; display:inline-block; padding:2px 8px 2px 0; position:relative; vertical-align:middle; white-space:normal; } .material-toggle.disabled._ngcontent-%COMP% .tgl-lbl._ngcontent-%COMP% { opacity:0.54; } .material-toggle.disabled._ngcontent-%COMP% .tgl-btn._ngcontent-%COMP%,.material-toggle.checked.disabled._ngcontent-%COMP% .tgl-btn._ngcontent-%COMP% { background-color:#bdbdbd; } .material-toggle.disabled._ngcontent-%COMP% .tgl-bar._ngcontent-%COMP%,.material-toggle.checked.disabled._ngcontent-%COMP% .tgl-bar._ngcontent-%COMP% { background-color:rgba(0, 0, 0, 0.12); }'])
C.oB=d([C.px])
C.te=H.p("bv")})();(function staticFields(){$.ZA=null
$.a7x=!1})()
i([{func:1,v:true,args:[,]},{func:1,v:true,args:[W.aj]},{func:1,v:true,args:[W.ai]},{func:1,ret:[S.a,D.bv],args:[S.a,P.k]},{func:1,ret:S.a,args:[S.a,P.k]}]);(function nativeSupport(){j({})
k({})})()}
$__dart_deferred_initializers__["0tEAOj5PSDK0z37EwUI1L8d+CnA="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_4.part.js.map
