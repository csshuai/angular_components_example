self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,d,e,f,g,h,i,j,k,l,m,$){var C={},H={},J={},P={},W={},G={},R={},K={},V={},Y={},N={},E={},B={},S={},Q={
cr:function(n,o){var y=new Q.v4(!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,P.d(),n,null,null,null)
y.a=S.c(y,1,C.i,o,null)
y.Ns(n,o)
return y},
aya:function(n,o){var y=new Q.SQ(null,null,null,null,P.d(),n,null,null,null)
y.a=S.c(y,3,C.d,o,null)
y.d=$.Z8
return y},
ayb:function(n,o){var y=new Q.SR(null,null,null,P.d(),n,null,null,null)
y.a=S.c(y,3,C.j,o,null)
return y},
qB:function(){if($.a73)return
$.a73=!0
$.$get$E().t(0,C.tF,C.jB)
E.q()
V.fK()},
v4:function v4(n,o,p,q,r,s,t,u,v,w,x,y,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
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
SQ:function SQ(n,o,p,q,r,s,t,u,v){var _=this
_.r=n
_.x=o
_.y=p
_.a=q
_.b=r
_.c=s
_.d=t
_.e=u
_.f=v},
SR:function SR(n,o,p,q,r,s,t,u){var _=this
_.r=n
_.x=o
_.a=p
_.b=q
_.c=r
_.d=s
_.e=t
_.f=u}},D={bw:function bw(n,o,p,q,r,s,t,u,v){var _=this
_.a=n
_.b=o
_.c=p
_.d=q
_.e=r
_.f=s
_.r=t
_.x=u
_.y=v}},M={},L={},Z={},A={},F={},T={},O={},U={},X={}
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
D.bw.prototype={
scU:function(n,o){this.c=o
this.cL()},
sIh:function(n){this.x=n
this.Gi()},
sID:function(n){this.y=n
this.Gi()},
Gi:function(){if(this.y)var y=3
else y=this.x?2:1
this.r=y},
nJ:function(){if(!this.b){this.c=!this.c
this.cL()
this.d.O(0,this.c)}},
hc:function(n){this.nJ()
n.preventDefault()
n.stopPropagation()},
kT:function(n){if(n.keyCode===13||Z.ib(n)){this.nJ()
n.preventDefault()
n.stopPropagation()}},
cL:function(){var y=this.a
if(y==null)return
y.setAttribute("aria-pressed",H.o(this.c))},
gaX:function(n){return this.b},
gcM:function(n){return this.e},
sa5y:function(n){return this.a=n},
saX:function(n,o){return this.b=o},
scM:function(n,o){return this.e=o}}
Q.v4.prototype={
Ns:function(n,o){var y=document.createElement("material-toggle")
this.e=y
y.className="themeable"
y=$.Z8
if(y==null){y=$.z.a1("",C.n,C.pl)
$.Z8=y}this.a0(y)},
p:function(){var y,x,w,v,u,t
y=this.f
x=this.e
w=this.a2(x)
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
this.z=new K.C(new D.t(u,Q.aqU()),u,!1)
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
this.cK(this.cy,0)
u=this.x;(u&&C.z).a5(u,"blur",this.A(this.gP3()))
u=this.x;(u&&C.z).a5(u,"focus",this.A(this.gRv()))
u=this.x;(u&&C.z).a5(u,"mouseenter",this.A(this.gSc()))
u=this.x;(u&&C.z).a5(u,"mouseleave",this.A(this.gSg()))
this.f.sa5y(this.x)
this.N(C.a,null)
u=J.F(x)
u.a5(x,"click",this.A(y.gdN()))
u.a5(x,"keypress",this.A(y.gdG()))
return},
q:function(){var y,x,w,v,u,t,s,r,q,p
y=this.f
x=this.z
w=y.e
x.sa4(w!=null&&w.length!==0)
this.y.I()
v=y.c
x=this.db
if(x==null?v!=null:x!==v){this.aJ(this.x,"checked",v)
this.db=v}u=y.b
x=this.dx
if(x==null?u!=null:x!==u){this.aJ(this.x,"disabled",u)
this.dx=u}t=y.b?"-1":"0"
if(this.dy!==t){x=this.x
this.av(x,"tabindex",t)
this.dy=t}s=Q.J(y.b)
if(this.fr!==s){x=this.x
w=J.bq(s)
this.av(x,"aria-disabled",w)
this.fr=s}x=y.f
r=x==null?y.e:x
if(r==null)r=""
if(this.fx!==r){x=this.x
this.av(x,"aria-label",r)
this.fx=r}q=Q.J(y.r)
if(this.fy!==q){x=this.ch
w=J.bq(q)
this.av(x,"elevation",w)
this.fy=q}p=Q.J(y.r)
if(this.go!==p){x=this.cy
w=J.bq(p)
this.av(x,"elevation",w)
this.go=p}},
w:function(){var y=this.y
if(!(y==null))y.H()},
P4:function(n){this.f.sIh(!1)},
Rw:function(n){this.f.sIh(!0)},
Sd:function(n){this.f.sID(!0)},
Sh:function(n){this.f.sID(!1)},
$asa:function(){return[D.bw]}}
Q.SQ.prototype={
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
$asa:function(){return[D.bw]}}
Q.SR.prototype={
p:function(){var y,x
y=Q.cr(this,0)
this.r=y
this.e=y.e
x=new D.bw(null,!1,!1,new P.I(null,null,0,null,null,null,null,[P.x]),null,null,1,!1,!1)
this.x=x
y.k(x,this.a.e)
this.E(this.e)
return new D.y(this,0,this.e,this.x,[D.bw])},
q:function(){var y=this.a.cy
this.r.j()
if(y===0)this.x.cL()},
w:function(){var y=this.r
if(!(y==null))y.i()},
$asa:function(){}};(function installTearOffs(){var y
f(y=D.bw.prototype,"gdN",0,0,0,null,["$1"],["hc"],1)
f(y,"gdG",0,0,0,null,["$1"],["kT"],2)
f(Q,"aqU",1,0,0,null,["$2"],["aya"],3)
f(Q,"aqV",1,0,0,null,["$2"],["ayb"],4)
f(y=Q.v4.prototype,"gP3",0,0,0,null,["$1"],["P4"],0)
f(y,"gRv",0,0,0,null,["$1"],["Rw"],0)
f(y,"gSc",0,0,0,null,["$1"],["Sd"],0)
f(y,"gSg",0,0,0,null,["$1"],["Sh"],0)})();(function inheritance(){a(D.bw,P.G)
var y=S.a
a(Q.v4,y)
a(Q.SQ,y)
a(Q.SR,y)})();(function constants(){C.jB=new D.B("material-toggle",Q.aqV(),C.a,[D.bw])
C.qj=d(['._nghost-%COMP% { display:inline-block; text-align:initial; } .material-toggle._ngcontent-%COMP% { display:inline-flex; align-items:center; justify-content:flex-end; cursor:pointer; outline:none; width:100%; } .material-toggle.disabled._ngcontent-%COMP% { pointer-events:none; } .tgl-container._ngcontent-%COMP% { display:inline-block; min-width:36px; position:relative; vertical-align:middle; width:36px; } .tgl-bar._ngcontent-%COMP% { transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1); transition:opacity 130ms cubic-bezier(0.4, 0, 0.2, 1); background-color:rgba(0, 0, 0, 0.26); border-radius:8px; height:14px; margin:2px 0; width:100%; } .tgl-bar[animated]._ngcontent-%COMP% { transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1); } .tgl-bar[elevation="1"]._ngcontent-%COMP% { box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="2"]._ngcontent-%COMP% { box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="3"]._ngcontent-%COMP% { box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="4"]._ngcontent-%COMP% { box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="5"]._ngcontent-%COMP% { box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="6"]._ngcontent-%COMP% { box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2); } .material-toggle.checked._ngcontent-%COMP% .tgl-bar._ngcontent-%COMP% { background-color:#009688; opacity:0.5; } .tgl-btn-container._ngcontent-%COMP% { display:inline-flex; justify-content:flex-end; transition:width 130ms cubic-bezier(0.4, 0, 0.2, 1); margin-top:-2px; position:absolute; top:0; width:20px; } .material-toggle.checked._ngcontent-%COMP% .tgl-btn-container._ngcontent-%COMP% { width:36px; } .tgl-btn._ngcontent-%COMP% { transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1); background-color:#fafafa; border-radius:50%; height:20px; position:relative; width:20px; } .tgl-btn[animated]._ngcontent-%COMP% { transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1); } .tgl-btn[elevation="1"]._ngcontent-%COMP% { box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="2"]._ngcontent-%COMP% { box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="3"]._ngcontent-%COMP% { box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="4"]._ngcontent-%COMP% { box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="5"]._ngcontent-%COMP% { box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="6"]._ngcontent-%COMP% { box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2); } .material-toggle.checked._ngcontent-%COMP% .tgl-btn._ngcontent-%COMP% { background-color:#009688; } .tgl-lbl._ngcontent-%COMP% { flex-grow:1; display:inline-block; padding:2px 8px 2px 0; position:relative; vertical-align:middle; white-space:normal; } .material-toggle.disabled._ngcontent-%COMP% .tgl-lbl._ngcontent-%COMP% { opacity:0.54; } .material-toggle.disabled._ngcontent-%COMP% .tgl-btn._ngcontent-%COMP%,.material-toggle.checked.disabled._ngcontent-%COMP% .tgl-btn._ngcontent-%COMP% { background-color:#bdbdbd; } .material-toggle.disabled._ngcontent-%COMP% .tgl-bar._ngcontent-%COMP%,.material-toggle.checked.disabled._ngcontent-%COMP% .tgl-bar._ngcontent-%COMP% { background-color:rgba(0, 0, 0, 0.12); }'])
C.pl=d([C.qj])
C.tF=H.n("bw")})();(function staticFields(){$.Z8=null
$.a73=!1})()
i([{func:1,v:true,args:[,]},{func:1,v:true,args:[W.ak]},{func:1,v:true,args:[W.aj]},{func:1,ret:[S.a,D.bw],args:[S.a,P.k]},{func:1,ret:S.a,args:[S.a,P.k]}]);(function nativeSupport(){j({})
k({})})()}
$__dart_deferred_initializers__["sGxwS+QccG33lv7eO9i53kLtR38="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_4.part.js.map
