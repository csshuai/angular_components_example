self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,d,e,f,g,h,i,j,k,l,m,$){var C={},H={},J={},P={},W={},G={},Y={},R={},K={},V={},N={},E={},M={},B={},S={},Q={
cv:function(n,o){var y=new Q.vI(!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,P.c(),n,null,null,null)
y.a=S.d(y,1,C.j,o,null)
y.OB(n,o)
return y},
aGe:function(n,o){var y=new Q.V2(null,null,null,null,P.c(),n,null,null,null)
y.a=S.d(y,3,C.d,o,null)
y.d=$.a0K
return y},
aGf:function(n,o){var y=new Q.V3(null,null,null,P.c(),n,null,null,null)
y.a=S.d(y,3,C.k,o,null)
return y},
qP:function(){if($.a9Y)return
$.a9Y=!0
$.$get$D().u(0,C.pp,C.iT)
E.t()
V.eU()},
vI:function vI(n,o,p,q,r,s,t,u,v,w,x,y,a0,a1,a2,a3,a4,a5,a6,a7,a8){var _=this
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
V2:function V2(n,o,p,q,r,s,t,u,v){var _=this
_.r=n
_.x=o
_.y=p
_.a=q
_.b=r
_.c=s
_.d=t
_.e=u
_.f=v},
V3:function V3(n,o,p,q,r,s,t,u){var _=this
_.r=n
_.x=o
_.a=p
_.b=q
_.c=r
_.d=s
_.e=t
_.f=u}},D={bu:function bu(n,o,p,q,r,s,t,u,v){var _=this
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
D.bu.prototype={
scB:function(n,o){this.c=o
this.cO()},
gcB:function(n){return this.c},
sJl:function(n){this.x=n
this.Hn()},
sJH:function(n){this.y=n
this.Hn()},
Hn:function(){if(this.y)var y=3
else y=this.x?2:1
this.r=y},
nO:function(){if(!this.b){this.c=!this.c
this.cO()
this.d.R(0,this.c)}},
i7:function(n){this.nO()
n.preventDefault()
n.stopPropagation()},
l0:function(n){if(n.keyCode===13||Z.hS(n)){this.nO()
n.preventDefault()
n.stopPropagation()}},
cO:function(){var y=this.a
if(y==null)return
y.setAttribute("aria-pressed",H.q(this.c))},
gaY:function(n){return this.b},
gd3:function(n){return this.e},
sa7O:function(n){return this.a=n},
saY:function(n,o){return this.b=o},
sd3:function(n,o){return this.e=o}}
Q.vI.prototype={
OB:function(n,o){var y=document.createElement("material-toggle")
this.e=y
y.className="themeable"
y=$.a0K
if(y==null){y=$.z.a4("",C.n,$.$get$aiq())
$.a0K=y}this.a2(y)},
p:function(){var y,x,w,v,u
y=this.f
x=this.e
w=this.a5(x)
v=document
u=S.m(v,w)
this.x=u
u.className="material-toggle"
u.setAttribute("role","button")
this.h(this.x)
u=$.$get$I().cloneNode(!1)
this.x.appendChild(u)
u=new V.k(1,0,this,u,null,null,null)
this.y=u
this.z=new K.w(new D.n(u,Q.ayw()),u,!1)
u=S.m(v,this.x)
this.Q=u
u.className="tgl-container"
this.h(u)
u=S.m(v,this.Q)
this.ch=u
u.setAttribute("animated","")
u=this.ch
u.className="tgl-bar"
this.h(u)
u=S.m(v,this.Q)
this.cx=u
u.className="tgl-btn-container"
this.h(u)
u=S.m(v,this.cx)
this.cy=u
u.setAttribute("animated","")
u=this.cy
u.className="tgl-btn"
this.h(u)
this.cF(this.cy,0)
u=this.x;(u&&C.t).a3(u,"blur",this.v(this.gQk()))
u=this.x;(u&&C.t).a3(u,"focus",this.v(this.gSO()))
u=this.x;(u&&C.t).a3(u,"mouseenter",this.v(this.gTD()))
u=this.x;(u&&C.t).a3(u,"mouseleave",this.v(this.gTH()))
this.f.sa7O(this.x)
this.L(C.a,null)
u=J.C(x)
u.a3(x,"click",this.v(y.gdF()))
u.a3(x,"keypress",this.v(y.gdw()))
return},
q:function(){var y,x,w,v,u,t,s,r,q,p
y=this.f
x=this.z
w=y.e
x.sa_(w!=null&&w.length!==0)
this.y.H()
v=y.c
x=this.db
if(x==null?v!=null:x!==v){this.aJ(this.x,"checked",v)
this.db=v}u=y.b
x=this.dx
if(x==null?u!=null:x!==u){this.aJ(this.x,"disabled",u)
this.dx=u}t=y.b?"-1":"0"
if(this.dy!==t){x=this.x
this.ac(x,"tabindex",t)
this.dy=t}s=Q.H(y.b)
if(this.fr!==s){x=this.x
w=J.bc(s)
this.ac(x,"aria-disabled",w)
this.fr=s}x=y.f
r=x==null?y.e:x
if(r==null)r=""
if(this.fx!==r){x=this.x
this.ac(x,"aria-label",r)
this.fx=r}q=Q.H(y.r)
if(this.fy!==q){x=this.ch
w=J.bc(q)
this.ac(x,"elevation",w)
this.fy=q}p=Q.H(y.r)
if(this.go!==p){x=this.cy
w=J.bc(p)
this.ac(x,"elevation",w)
this.go=p}},
w:function(){var y=this.y
if(!(y==null))y.G()},
Ql:function(n){this.f.sJl(!1)},
SP:function(n){this.f.sJl(!0)},
TE:function(n){this.f.sJH(!0)},
TI:function(n){this.f.sJH(!1)},
$asa:function(){return[D.bu]}}
Q.V2.prototype={
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
$asa:function(){return[D.bu]}}
Q.V3.prototype={
p:function(){var y,x
y=Q.cv(this,0)
this.r=y
this.e=y.e
x=new D.bu(null,!1,!1,new P.K(null,null,0,null,null,null,null,[P.v]),null,null,1,!1,!1)
this.x=x
y.k(0,x,this.a.e)
this.F(this.e)
return new D.y(this,0,this.e,this.x,[D.bu])},
N:function(n,o,p){if(n===C.e&&0===o)return this.x
return p},
q:function(){var y=this.a.cy
this.r.j()
if(y===0)this.x.cO()},
w:function(){var y=this.r
if(!(y==null))y.i()},
$asa:function(){}};(function installTearOffs(){var y
f(y=D.bu.prototype,"gdF",0,0,0,null,["$1"],["i7"],1)
f(y,"gdw",0,0,0,null,["$1"],["l0"],2)
f(Q,"ayw",1,0,0,null,["$2"],["aGe"],3)
f(Q,"ayx",1,0,0,null,["$2"],["aGf"],4)
f(y=Q.vI.prototype,"gQk",0,0,0,null,["$1"],["Ql"],0)
f(y,"gSO",0,0,0,null,["$1"],["SP"],0)
f(y,"gTD",0,0,0,null,["$1"],["TE"],0)
f(y,"gTH",0,0,0,null,["$1"],["TI"],0)})();(function inheritance(){a(D.bu,P.G)
var y=S.a
a(Q.vI,y)
a(Q.V2,y)
a(Q.V3,y)})();(function constants(){C.iT=new D.B("material-toggle",Q.ayx(),C.a,[D.bu])
C.pp=H.o("bu")})();(function staticFields(){$.a0K=null
$.a9Y=!1})();(function lazyInitializers(){c($,"ajn","$get$ajn",function(){return['._nghost-%ID%{display:inline-block;text-align:initial;}.material-toggle._ngcontent-%ID%{display:inline-flex;align-items:center;justify-content:flex-end;cursor:pointer;outline:none;width:100%;}.material-toggle.disabled._ngcontent-%ID%{pointer-events:none;}.tgl-container._ngcontent-%ID%{display:inline-block;min-width:36px;position:relative;vertical-align:middle;width:36px;}.tgl-bar._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:rgba(0, 0, 0, 0.26);border-radius:8px;height:14px;margin:2px 0;width:100%;}.tgl-bar[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-bar[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:#009688;opacity:0.5;}.tgl-btn-container._ngcontent-%ID%{display:inline-flex;justify-content:flex-end;transition:width 130ms cubic-bezier(0.4, 0, 0.2, 1);margin-top:-2px;position:absolute;top:0;width:20px;}.material-toggle.checked._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%{width:36px;}.tgl-btn._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fafafa;border-radius:50%;height:20px;position:relative;width:20px;}.tgl-btn[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-btn[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#009688;}.tgl-lbl._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:2px 8px 2px 0;position:relative;vertical-align:middle;white-space:normal;}.material-toggle.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%{opacity:0.54;}.material-toggle.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#bdbdbd;}.material-toggle.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:rgba(0, 0, 0, 0.12);}']})
c($,"aiq","$get$aiq",function(){return[$.$get$ajn()]})})()
i([{func:1,v:true,args:[,]},{func:1,v:true,args:[W.af]},{func:1,v:true,args:[W.ad]},{func:1,ret:[S.a,D.bu],args:[S.a,P.l]},{func:1,ret:S.a,args:[S.a,P.l]}]);(function nativeSupport(){j({})
k({})})()}
$__dart_deferred_initializers__["2ieURgoLRVOCcTocN2lxx7FaIOg="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_4.part.js.map
