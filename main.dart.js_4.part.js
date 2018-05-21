self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,d,e,f,g,h,i,j,k,l,m,$){var C={},H={},J={},P={},W={},G={},Y={},R={},K={},V={},N={},E={},M={},B={},S={},Q={
cp:function(n,o){var y=new Q.v0(!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,P.c(),n,null,null,null)
y.a=S.d(y,1,C.j,o,null)
y.NR(n,o)
return y},
ayT:function(n,o){var y=new Q.Ts(null,null,null,null,P.c(),n,null,null,null)
y.a=S.d(y,3,C.e,o,null)
y.d=$.ZB
return y},
ayU:function(n,o){var y=new Q.Tt(null,null,null,P.c(),n,null,null,null)
y.a=S.d(y,3,C.k,o,null)
return y},
qb:function(){if($.a7q)return
$.a7q=!0
$.$get$D().u(0,C.t1,C.iM)
E.q()
V.fD()},
v0:function v0(n,o,p,q,r,s,t,u,v,w,x,y,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
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
Ts:function Ts(n,o,p,q,r,s,t,u,v){var _=this
_.r=n
_.x=o
_.y=p
_.a=q
_.b=r
_.c=s
_.d=t
_.e=u
_.f=v},
Tt:function Tt(n,o,p,q,r,s,t,u){var _=this
_.r=n
_.x=o
_.a=p
_.b=q
_.c=r
_.d=s
_.e=t
_.f=u}},D={bs:function bs(n,o,p,q,r,s,t,u,v){var _=this
_.a=n
_.b=o
_.c=p
_.d=q
_.e=r
_.f=s
_.r=t
_.x=u
_.y=v}},L={},Z={},A={},T={},O={},U={},X={},F={}
var z=[C,H,J,P,W,G,Y,R,K,V,N,E,M,B,S,Q,D,L,Z,A,T,O,U,X,F]
g([C,H,J,P,W,G,Y,R,K,V,N,E,M,B,S,Q,D,L,Z,A,T,O,U,X,F])
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
T=h(m[20],T)
O=h(m[21],O)
U=h(m[22],U)
X=h(m[23],X)
F=h(m[24],F)
D.bs.prototype={
scC:function(n,o){this.c=o
this.cN()},
gcC:function(n){return this.c},
sIm:function(n){this.x=n
this.Gq()},
sIK:function(n){this.y=n
this.Gq()},
Gq:function(){if(this.y)var y=3
else y=this.x?2:1
this.r=y},
nI:function(){if(!this.b){this.c=!this.c
this.cN()
this.d.R(0,this.c)}},
i2:function(n){this.nI()
n.preventDefault()
n.stopPropagation()},
kT:function(n){if(n.keyCode===13||Z.ib(n)){this.nI()
n.preventDefault()
n.stopPropagation()}},
cN:function(){var y=this.a
if(y==null)return
y.setAttribute("aria-pressed",H.o(this.c))},
gaX:function(n){return this.b},
gd_:function(n){return this.e},
sa6o:function(n){return this.a=n},
saX:function(n,o){return this.b=o},
sd_:function(n,o){return this.e=o}}
Q.v0.prototype={
NR:function(n,o){var y=document.createElement("material-toggle")
this.e=y
y.className="themeable"
y=$.ZB
if(y==null){y=$.A.a5("",C.n,C.mi)
$.ZB=y}this.a3(y)},
p:function(){var y,x,w,v,u
y=this.f
x=this.e
w=this.a6(x)
v=document
u=S.l(v,w)
this.x=u
u.className="material-toggle"
u.setAttribute("role","button")
this.h(this.x)
u=$.$get$J().cloneNode(!1)
this.x.appendChild(u)
u=new V.m(1,0,this,u,null,null,null)
this.y=u
this.z=new K.z(new D.t(u,Q.arp()),u,!1)
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
this.cG(this.cy,0)
u=this.x;(u&&C.u).a4(u,"blur",this.v(this.gPs()))
u=this.x;(u&&C.u).a4(u,"focus",this.v(this.gRW()))
u=this.x;(u&&C.u).a4(u,"mouseenter",this.v(this.gSL()))
u=this.x;(u&&C.u).a4(u,"mouseleave",this.v(this.gSP()))
this.f.sa6o(this.x)
this.N(C.a,null)
u=J.E(x)
u.a4(x,"click",this.v(y.gdG()))
u.a4(x,"keypress",this.v(y.gdB()))
return},
q:function(){var y,x,w,v,u,t,s,r,q,p
y=this.f
x=this.z
w=y.e
x.sa0(w!=null&&w.length!==0)
this.y.J()
v=y.c
x=this.db
if(x==null?v!=null:x!==v){this.aI(this.x,"checked",v)
this.db=v}u=y.b
x=this.dx
if(x==null?u!=null:x!==u){this.aI(this.x,"disabled",u)
this.dx=u}t=y.b?"-1":"0"
if(this.dy!==t){x=this.x
this.am(x,"tabindex",t)
this.dy=t}s=Q.I(y.b)
if(this.fr!==s){x=this.x
w=J.bd(s)
this.am(x,"aria-disabled",w)
this.fr=s}x=y.f
r=x==null?y.e:x
if(r==null)r=""
if(this.fx!==r){x=this.x
this.am(x,"aria-label",r)
this.fx=r}q=Q.I(y.r)
if(this.fy!==q){x=this.ch
w=J.bd(q)
this.am(x,"elevation",w)
this.fy=q}p=Q.I(y.r)
if(this.go!==p){x=this.cy
w=J.bd(p)
this.am(x,"elevation",w)
this.go=p}},
w:function(){var y=this.y
if(!(y==null))y.I()},
Pt:function(n){this.f.sIm(!1)},
RX:function(n){this.f.sIm(!0)},
SM:function(n){this.f.sIK(!0)},
SQ:function(n){this.f.sIK(!1)},
$asa:function(){return[D.bs]}}
Q.Ts.prototype={
p:function(){var y,x
y=document
x=y.createElement("div")
this.r=x
x.className="tgl-lbl"
this.h(x)
x=y.createTextNode("")
this.x=x
this.r.appendChild(x)
this.F(this.r)
return},
q:function(){var y=this.f.e
if(y==null)y=""
if(this.y!==y){this.x.textContent=y
this.y=y}},
$asa:function(){return[D.bs]}}
Q.Tt.prototype={
p:function(){var y,x
y=Q.cp(this,0)
this.r=y
this.e=y.e
x=new D.bs(null,!1,!1,new P.L(null,null,0,null,null,null,null,[P.w]),null,null,1,!1,!1)
this.x=x
y.k(0,x,this.a.e)
this.F(this.e)
return new D.y(this,0,this.e,this.x,[D.bs])},
P:function(n,o,p){if(n===C.c&&0===o)return this.x
return p},
q:function(){var y=this.a.cy
this.r.j()
if(y===0)this.x.cN()},
w:function(){var y=this.r
if(!(y==null))y.i()},
$asa:function(){}};(function installTearOffs(){var y
f(y=D.bs.prototype,"gdG",0,0,0,null,["$1"],["i2"],1)
f(y,"gdB",0,0,0,null,["$1"],["kT"],2)
f(Q,"arp",1,0,0,null,["$2"],["ayT"],3)
f(Q,"arq",1,0,0,null,["$2"],["ayU"],4)
f(y=Q.v0.prototype,"gPs",0,0,0,null,["$1"],["Pt"],0)
f(y,"gRW",0,0,0,null,["$1"],["RX"],0)
f(y,"gSL",0,0,0,null,["$1"],["SM"],0)
f(y,"gSP",0,0,0,null,["$1"],["SQ"],0)})();(function inheritance(){a(D.bs,P.H)
var y=S.a
a(Q.v0,y)
a(Q.Ts,y)
a(Q.Tt,y)})();(function constants(){C.iM=new D.C("material-toggle",Q.arq(),C.a,[D.bs])
C.oU=d(['._nghost-%ID%{display:inline-block;text-align:initial;}.material-toggle._ngcontent-%ID%{display:inline-flex;align-items:center;justify-content:flex-end;cursor:pointer;outline:none;width:100%;}.material-toggle.disabled._ngcontent-%ID%{pointer-events:none;}.tgl-container._ngcontent-%ID%{display:inline-block;min-width:36px;position:relative;vertical-align:middle;width:36px;}.tgl-bar._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:rgba(0, 0, 0, 0.26);border-radius:8px;height:14px;margin:2px 0;width:100%;}.tgl-bar[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-bar[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:#009688;opacity:0.5;}.tgl-btn-container._ngcontent-%ID%{display:inline-flex;justify-content:flex-end;transition:width 130ms cubic-bezier(0.4, 0, 0.2, 1);margin-top:-2px;position:absolute;top:0;width:20px;}.material-toggle.checked._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%{width:36px;}.tgl-btn._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fafafa;border-radius:50%;height:20px;position:relative;width:20px;}.tgl-btn[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-btn[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#009688;}.tgl-lbl._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:2px 8px 2px 0;position:relative;vertical-align:middle;white-space:normal;}.material-toggle.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%{opacity:0.54;}.material-toggle.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#bdbdbd;}.material-toggle.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:rgba(0, 0, 0, 0.12);}'])
C.mi=d([C.oU])
C.t1=H.p("bs")})();(function staticFields(){$.ZB=null
$.a7q=!1})()
i([{func:1,v:true,args:[,]},{func:1,v:true,args:[W.ag]},{func:1,v:true,args:[W.af]},{func:1,ret:[S.a,D.bs],args:[S.a,P.k]},{func:1,ret:S.a,args:[S.a,P.k]}]);(function nativeSupport(){j({})
k({})})()}
$__dart_deferred_initializers__["AiG/R/JeveSi9ZokB+JtljTMo5c="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_4.part.js.map
