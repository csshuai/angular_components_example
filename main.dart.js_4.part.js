self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,d,e,f,g,h,i,j,k,l,m,$){var C={},H={},J={},P={},W={},G={},Y={},R={},K={},V={},S={},N={},E={},M={},B={},Q={
cZ:function(n,o){var x,w
x=new Q.wC(!0,P.i(P.d,null),n)
x.a=S.j(x,1,C.j,o,D.bC)
w=document.createElement("material-toggle")
H.a(w,"$isA")
x.e=w
w.className="themeable"
w=$.a1K
if(w==null){w=$.P
w=w.a3(null,C.o,$.$get$aj0())
$.a1K=w}x.a2(w)
return x},
aHg:function(n,o){var x=new Q.We(P.i(P.d,null),n)
x.a=S.j(x,3,C.d,o,D.bC)
x.d=$.a1K
return x},
aHh:function(n,o){var x=new Q.Wf(P.i(P.d,null),n)
x.a=S.j(x,3,C.k,o,D.bC)
return x},
oc:function(){if($.abJ)return
$.abJ=!0
$.$get$T().q(0,C.nZ,C.hJ)
E.I()
V.ig()},
wC:function wC(n,o,p){var _=this
_.r=n
_.a=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.b=o
_.c=p
_.f=_.e=_.d=null},
We:function We(n,o){var _=this
_.a=_.y=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null},
Wf:function Wf(n,o){var _=this
_.a=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null}},D={bC:function bC(n,o,p,q,r,s){var _=this
_.a=null
_.b=n
_.c=o
_.d=p
_.f=_.e=null
_.r=q
_.x=r
_.y=s}},L={},Z={},A={},U={},T={},O={},X={},F={}
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
D.bC.prototype={
scj:function(n,o){this.c=o
this.c6()},
gcj:function(n){return this.c},
sJ_:function(n){this.x=n
this.H_()},
sJj:function(n){this.y=n
this.H_()},
H_:function(){if(this.y)var x=3
else x=this.x?2:1
this.r=x},
nG:function(){if(!this.b){this.c=!this.c
this.c6()
this.d.E(0,this.c)}},
hY:function(n){H.a(n,"$isac")
this.nG()
n.preventDefault()
n.stopPropagation()},
kQ:function(n){H.a(n,"$isa_")
if(n.keyCode===13||Z.l4(n)){this.nG()
n.preventDefault()
n.stopPropagation()}},
c6:function(){var x=this.a
if(x==null)return
x.setAttribute("aria-pressed",H.E(this.c))},
gaK:function(n){return this.b},
gcX:function(n){return this.e},
sa50:function(n){return this.a=n},
saK:function(n,o){return this.b=o},
scX:function(n,o){return this.e=o}}
Q.wC.prototype={
p:function(){var x,w,v,u,t,s,r
x=this.f
w=this.e
v=this.a4(w)
u=document
t=S.v(u,v)
this.x=t
t.className="material-toggle"
t.setAttribute("role","button")
this.h(this.x)
s=H.a($.$get$Z().cloneNode(!1),"$isz")
this.x.appendChild(s)
t=new V.q(1,0,this,s)
this.y=t
this.z=new K.O(new D.B(t,Q.azn()),t,!1)
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
this.cn(this.cy,0)
t=this.x
r=W.J;(t&&C.t).a5(t,"blur",this.w(this.gO9(),r,r))
t=this.x;(t&&C.t).a5(t,"focus",this.w(this.gQB(),r,r))
t=this.x;(t&&C.t).a5(t,"mouseenter",this.w(this.gRo(),r,r))
t=this.x;(t&&C.t).a5(t,"mouseleave",this.w(this.gRs(),r,r))
this.f.sa50(this.x)
this.P(C.a,null)
t=J.Y(w)
t.a5(w,"click",this.w(x.gdC(),r,W.ac))
t.a5(w,"keypress",this.w(x.gdu(),r,W.a_))
return},
t:function(){var x,w,v,u,t,s,r,q,p,o
x=this.f
w=this.z
v=x.e
w.sY(v!=null&&v.length!==0)
this.y.H()
u=x.c
w=this.db
if(w==null?u!=null:w!==u){this.ay(this.x,"checked",u)
this.db=u}t=x.b
w=this.dx
if(w==null?t!=null:w!==t){this.ay(this.x,"disabled",t)
this.dx=t}s=x.b?"-1":"0"
w=this.dy
if(w!==s){w=this.x
this.a8(w,"tabindex",s)
this.dy=s}r=Q.W(x.b)
w=this.fr
if(w!==r){w=this.x
v=J.cv(r)
this.a8(w,"aria-disabled",v)
this.fr=r}w=x.f
q=w==null?x.e:w
if(q==null)q=""
w=this.fx
if(w!==q){w=this.x
this.a8(w,"aria-label",q)
this.fx=q}p=Q.W(x.r)
w=this.fy
if(w!==p){w=this.ch
v=J.cv(p)
this.a8(w,"elevation",v)
this.fy=p}o=Q.W(x.r)
w=this.go
if(w!==o){w=this.cy
v=J.cv(o)
this.a8(w,"elevation",v)
this.go=o}},
v:function(){var x=this.y
if(!(x==null))x.G()},
Oa:function(n){this.f.sJ_(!1)},
QC:function(n){this.f.sJ_(!0)},
Rp:function(n){this.f.sJj(!0)},
Rt:function(n){this.f.sJj(!1)},
$asc:function(){return[D.bC]}}
Q.We.prototype={
p:function(){var x,w
x=document
w=x.createElement("div")
H.a(w,"$isL")
this.r=w
w.className="tgl-lbl"
this.h(w)
w=x.createTextNode("")
this.x=w
this.r.appendChild(w)
this.D(this.r)
return},
t:function(){var x,w
x=this.f.e
if(x==null)x=""
w=this.y
if(w!==x){this.x.textContent=x
this.y=x}},
$asc:function(){return[D.bC]}}
Q.Wf.prototype={
p:function(){var x,w
x=Q.cZ(this,0)
this.r=x
this.e=x.e
w=new D.bC(!1,!1,new P.a0(null,null,0,[P.r]),1,!1,!1)
this.x=w
x.k(0,w,this.a.e)
this.D(this.e)
return new D.N(this,0,this.e,this.x,[D.bC])},
R:function(n,o,p){if(n===C.e&&0===o)return this.x
return p},
t:function(){var x=this.a.cy
this.r.j()
if(x===0)this.x.c6()},
v:function(){var x=this.r
if(!(x==null))x.i()},
$asc:function(){return[D.bC]}}
var y=i([{func:1,ret:-1,args:[,]},{func:1,ret:[S.c,D.bC],args:[S.c,P.k]},{func:1,ret:-1,args:[W.ac]},{func:1,ret:-1,args:[W.a_]}]);(function installTearOffs(){var x
f(x=D.bC.prototype,"gdC",0,0,0,null,["$1"],["hY"],2,0)
f(x,"gdu",0,0,0,null,["$1"],["kQ"],3,0)
f(Q,"azn",1,0,0,null,["$2"],["aHg"],1,0)
f(Q,"azo",1,0,0,null,["$2"],["aHh"],1,0)
f(x=Q.wC.prototype,"gO9",0,0,0,null,["$1"],["Oa"],0,0)
f(x,"gQB",0,0,0,null,["$1"],["QC"],0,0)
f(x,"gRo",0,0,0,null,["$1"],["Rp"],0,0)
f(x,"gRs",0,0,0,null,["$1"],["Rt"],0,0)})();(function inheritance(){a(D.bC,P.x)
var x=S.c
a(Q.wC,x)
a(Q.We,x)
a(Q.Wf,x)})();(function constants(){C.hJ=new D.F("material-toggle",Q.azo(),[D.bC])
C.nZ=H.D("bC")})();(function staticFields(){$.a1K=null
$.abJ=!1})();(function lazyInitializers(){c($,"ajY","$get$ajY",function(){return['._nghost-%ID%{display:inline-block;text-align:initial;}.material-toggle._ngcontent-%ID%{display:inline-flex;align-items:center;justify-content:flex-end;cursor:pointer;outline:none;width:100%;}.material-toggle.disabled._ngcontent-%ID%{pointer-events:none;}.tgl-container._ngcontent-%ID%{display:inline-block;min-width:36px;position:relative;vertical-align:middle;width:36px;}.tgl-bar._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:rgba(0, 0, 0, 0.26);border-radius:8px;height:14px;margin:2px 0;width:100%;}.tgl-bar[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-bar[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:#009688;opacity:0.5;}.tgl-btn-container._ngcontent-%ID%{display:inline-flex;justify-content:flex-end;transition:width 130ms cubic-bezier(0.4, 0, 0.2, 1);margin-top:-2px;position:absolute;top:0;width:20px;}.material-toggle.checked._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%{width:36px;}.tgl-btn._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fafafa;border-radius:50%;height:20px;position:relative;width:20px;}.tgl-btn[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-btn[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#009688;}.tgl-lbl._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:2px 8px 2px 0;position:relative;vertical-align:middle;white-space:normal;}.material-toggle.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%{opacity:0.54;}.material-toggle.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#bdbdbd;}.material-toggle.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:rgba(0, 0, 0, 0.12);}']})
c($,"aj0","$get$aj0",function(){return[$.$get$ajY()]})})();(function nativeSupport(){j({})
k({})})()}
$__dart_deferred_initializers__["3JkvCvGE0hueSIT/zYAfcK9M41U="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_4.part.js.map
