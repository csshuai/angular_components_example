self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,d,e,f,g,h,i,j,k,l,m,$){var C={},H={},J={},P={},W={},G={},Y={},R={},K={},V={},S={},N={},E={},M={},B={},Q={
cU:function(n,o){var x,w
x=new Q.xA(!0,P.i(P.d,null),n)
x.a=S.j(x,1,C.j,o,D.ft)
w=document.createElement("material-toggle")
H.a(w,"$isF")
x.e=w
w.className="themeable"
w=$.a8S
if(w==null){w=$.O
w=w.a1(null,C.p,$.$get$aqc())
$.a8S=w}x.a0(w)
return x},
aOJ:function(n,o){var x=new Q.a2l(P.i(P.d,null),n)
x.a=S.j(x,3,C.c,o,D.ft)
x.d=$.a8S
return x},
aOK:function(n,o){var x=new Q.a2m(P.i(P.d,null),n)
x.a=S.j(x,3,C.k,o,D.ft)
return x},
od:function(){if($.aiS)return
$.aiS=!0
$.$get$R().q(0,C.o_,C.hK)
E.G()
V.ib()
K.dy()},
xA:function xA(n,o,p){var _=this
_.r=n
_.a=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.b=o
_.c=p
_.f=_.e=_.d=null},
a2l:function a2l(n,o){var _=this
_.a=_.y=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null},
a2m:function a2m(n,o){var _=this
_.a=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null}},D={
cO:function(n,o){return new D.ft(n,!1,!1,new P.an(null,null,0,[P.q]),1,!1,!1)},
ft:function ft(n,o,p,q,r,s,t){var _=this
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
Lh:function Lh(n){this.a=n}},L={},Z={},A={},U={},T={},O={},X={},F={}
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
D.ft.prototype={
scl:function(n,o){this.e=o
this.c1()},
gcl:function(n){return this.e},
sJd:function(n){this.z=n
this.Hf()},
sJx:function(n){this.Q=n
this.Hf()},
Hf:function(){if(this.Q)var x=3
else x=this.z?2:1
this.y=x},
nJ:function(){if(!this.d){this.e=!this.e
this.c1()
this.f.E(0,this.e)
var x=this.a
if(!(x==null))x.$0()}},
i5:function(n){H.a(n,"$isad")
this.nJ()
n.preventDefault()
n.stopPropagation()},
kX:function(n){H.a(n,"$isa_")
if(n.keyCode===13||Z.l1(n)){this.nJ()
n.preventDefault()
n.stopPropagation()}},
c1:function(){var x=this.c
if(x==null)return
x.setAttribute("aria-pressed",H.E(this.e))},
ih:function(n,o){this.e=H.w(o)
this.c1()
this.b.a.aP()},
ib:function(n){var x=this.f
new P.p(x,[H.f(x,0)]).B(new D.Lh(H.n(n,{func:1,args:[P.q],named:{rawValue:P.d}})))},
ke:function(n){this.a=H.n(n,{func:1})},
h2:function(n){this.d=H.w(n)
this.b.a.aP()},
$isdl:1,
$asdl:function(){return[P.q]},
gaQ:function(n){return this.d},
gcW:function(n){return this.r},
sa5l:function(n){return this.c=n},
saQ:function(n,o){return this.d=o},
scW:function(n,o){return this.r=o}}
Q.xA.prototype={
p:function(){var x,w,v,u,t,s,r
x=this.f
w=this.e
v=this.a2(w)
u=document
t=S.v(u,v)
this.x=t
t.className="material-toggle"
t.setAttribute("role","button")
this.h(this.x)
s=H.a($.$get$Z().cloneNode(!1),"$isz")
this.x.appendChild(s)
t=new V.r(1,0,this,s)
this.y=t
this.z=new K.M(new D.A(t,Q.aGK()),t,!1)
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
this.cp(this.cy,0)
t=this.x
r=W.N;(t&&C.t).a7(t,"blur",this.w(this.gOp(),r,r))
t=this.x;(t&&C.t).a7(t,"focus",this.w(this.gQR(),r,r))
t=this.x;(t&&C.t).a7(t,"mouseenter",this.w(this.gRE(),r,r))
t=this.x;(t&&C.t).a7(t,"mouseleave",this.w(this.gRI(),r,r))
this.f.sa5l(this.x)
this.P(C.a,null)
t=J.Y(w)
t.a7(w,"click",this.w(x.gdF(),r,W.ad))
t.a7(w,"keypress",this.w(x.gdz(),r,W.a_))
return},
t:function(){var x,w,v,u,t,s,r,q,p,o
x=this.f
w=this.z
v=x.r
w.sX(v!=null&&v.length!==0)
this.y.H()
u=x.e
w=this.db
if(w==null?u!=null:w!==u){this.aD(this.x,"checked",u)
this.db=u}t=x.d
w=this.dx
if(w==null?t!=null:w!==t){this.aD(this.x,"disabled",t)
this.dx=t}s=x.d?"-1":"0"
w=this.dy
if(w!==s){w=this.x
this.a9(w,"tabindex",s)
this.dy=s}r=Q.V(x.d)
w=this.fr
if(w!==r){w=this.x
v=J.cs(r)
this.a9(w,"aria-disabled",v)
this.fr=r}w=x.x
q=w==null?x.r:w
if(q==null)q=""
w=this.fx
if(w!==q){w=this.x
this.a9(w,"aria-label",q)
this.fx=q}p=Q.V(x.y)
w=this.fy
if(w!==p){w=this.ch
v=J.cs(p)
this.a9(w,"elevation",v)
this.fy=p}o=Q.V(x.y)
w=this.go
if(w!==o){w=this.cy
v=J.cs(o)
this.a9(w,"elevation",v)
this.go=o}},
v:function(){var x=this.y
if(!(x==null))x.G()},
Oq:function(n){this.f.sJd(!1)},
QS:function(n){this.f.sJd(!0)},
RF:function(n){this.f.sJx(!0)},
RJ:function(n){this.f.sJx(!1)},
$asc:function(){return[D.ft]}}
Q.a2l.prototype={
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
x=this.f.r
if(x==null)x=""
w=this.y
if(w!==x){this.x.textContent=x
this.y=x}},
$asc:function(){return[D.ft]}}
Q.a2m.prototype={
p:function(){var x=Q.cU(this,0)
this.r=x
this.e=x.e
x=D.cO(x.a.b,null)
this.x=x
this.r.k(0,x,this.a.e)
this.D(this.e)
return new D.K(this,0,this.e,this.x,[D.ft])},
R:function(n,o,p){if(n===C.d&&0===o)return this.x
return p},
t:function(){var x=this.a.cy
this.r.j()
if(x===0)this.x.c1()},
v:function(){var x=this.r
if(!(x==null))x.i()},
$asc:function(){return[D.ft]}}
var y=i([{func:1,ret:-1,args:[,]},{func:1,ret:[S.c,D.ft],args:[[S.c,,],P.l]},{func:1,ret:-1,args:[W.ad]},{func:1,ret:-1,args:[W.a_]},{func:1,ret:-1,args:[P.q]}])
D.Lh.prototype={
$1:function(n){return this.a.$1(H.w(n))},
"call*":"$1",
$R:1,
$S:20};(function installTearOffs(){var x
f(x=D.ft.prototype,"gdF",0,0,0,null,["$1"],["i5"],2,0)
f(x,"gdz",0,0,0,null,["$1"],["kX"],3,0)
f(x,"gkd",0,0,1,null,["$1"],["h2"],4,0)
f(Q,"aGK",1,0,0,null,["$2"],["aOJ"],1,0)
f(Q,"aGL",1,0,0,null,["$2"],["aOK"],1,0)
f(x=Q.xA.prototype,"gOp",0,0,0,null,["$1"],["Oq"],0,0)
f(x,"gQR",0,0,0,null,["$1"],["QS"],0,0)
f(x,"gRE",0,0,0,null,["$1"],["RF"],0,0)
f(x,"gRI",0,0,0,null,["$1"],["RJ"],0,0)})();(function inheritance(){a(D.ft,P.x)
a(D.Lh,H.b4)
var x=S.c
a(Q.xA,x)
a(Q.a2l,x)
a(Q.a2m,x)})();(function constants(){C.hK=new D.B("material-toggle",Q.aGL(),[D.ft])
C.o_=H.C(D.ft)})();(function staticFields(){$.a8S=null
$.aiS=!1})();(function lazyInitializers(){c($,"ara","$get$ara",function(){return['._nghost-%ID%{display:inline-block;text-align:initial;}.material-toggle._ngcontent-%ID%{display:inline-flex;align-items:center;justify-content:flex-end;cursor:pointer;outline:none;width:100%;}.material-toggle.disabled._ngcontent-%ID%{pointer-events:none;}.tgl-container._ngcontent-%ID%{display:inline-block;min-width:36px;position:relative;vertical-align:middle;width:36px;}.tgl-bar._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:rgba(0, 0, 0, 0.26);border-radius:8px;height:14px;margin:2px 0;width:100%;}.tgl-bar[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-bar[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:#009688;opacity:0.5;}.tgl-btn-container._ngcontent-%ID%{display:inline-flex;justify-content:flex-end;transition:width 130ms cubic-bezier(0.4, 0, 0.2, 1);margin-top:-2px;position:absolute;top:0;width:20px;}.material-toggle.checked._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%{width:36px;}.tgl-btn._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fafafa;border-radius:50%;height:20px;position:relative;width:20px;}.tgl-btn[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-btn[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#009688;}.tgl-lbl._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:2px 8px 2px 0;position:relative;vertical-align:middle;white-space:normal;}.material-toggle.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%{opacity:0.54;}.material-toggle.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#bdbdbd;}.material-toggle.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:rgba(0, 0, 0, 0.12);}']})
c($,"aqc","$get$aqc",function(){return[$.$get$ara()]})})();(function nativeSupport(){j({})
k({})})()}
$__dart_deferred_initializers__["tUxIdUqkerHiL9pos1nqLIKYA2M="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_4.part.js.map
