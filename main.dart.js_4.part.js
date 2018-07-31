self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,d,e,f,g,h,i,j,k,l,m,$){var C={},H={},J={},P={},W={},G={},Y={},R={},K={},V={},S={},N={},E={},M={},B={},Q={
cY:function(n,o){var x,w
x=new Q.wJ(!0,P.i(P.d,null),n)
x.a=S.j(x,1,C.j,o,D.fy)
w=document.createElement("material-toggle")
H.a(w,"$isB")
x.e=w
w.className="themeable"
w=$.a1K
if(w==null){w=$.P
w=w.a1(null,C.p,$.$get$aj4())
$.a1K=w}x.a0(w)
return x},
aHD:function(n,o){var x=new Q.Wk(P.i(P.d,null),n)
x.a=S.j(x,3,C.c,o,D.fy)
x.d=$.a1K
return x},
aHE:function(n,o){var x=new Q.Wl(P.i(P.d,null),n)
x.a=S.j(x,3,C.k,o,D.fy)
return x},
oj:function(){if($.abK)return
$.abK=!0
$.$get$S().q(0,C.o_,C.hK)
E.H()
V.ig()
K.dB()},
wJ:function wJ(n,o,p){var _=this
_.r=n
_.a=_.go=_.fy=_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.ch=_.Q=_.z=_.y=_.x=null
_.b=o
_.c=p
_.f=_.e=_.d=null},
Wk:function Wk(n,o){var _=this
_.a=_.y=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null},
Wl:function Wl(n,o){var _=this
_.a=_.x=_.r=null
_.b=n
_.c=o
_.f=_.e=_.d=null}},D={
cS:function(n,o){return new D.fy(n,!1,!1,new P.ao(null,null,0,[P.q]),1,!1,!1)},
fy:function fy(n,o,p,q,r,s,t){var _=this
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
HX:function HX(n){this.a=n}},L={},Z={},A={},U={},T={},O={},X={},F={}
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
D.fy.prototype={
scl:function(n,o){this.e=o
this.c1()},
gcl:function(n){return this.e},
sJb:function(n){this.z=n
this.Hd()},
sJv:function(n){this.Q=n
this.Hd()},
Hd:function(){if(this.Q)var x=3
else x=this.z?2:1
this.y=x},
nH:function(){if(!this.d){this.e=!this.e
this.c1()
this.f.E(0,this.e)
var x=this.a
if(!(x==null))x.$0()}},
i5:function(n){H.a(n,"$isae")
this.nH()
n.preventDefault()
n.stopPropagation()},
kW:function(n){H.a(n,"$isa0")
if(n.keyCode===13||Z.l5(n)){this.nH()
n.preventDefault()
n.stopPropagation()}},
c1:function(){var x=this.c
if(x==null)return
x.setAttribute("aria-pressed",H.G(this.e))},
ih:function(n,o){this.e=H.w(o)
this.c1()
this.b.a.aP()},
ib:function(n){var x=this.f
new P.p(x,[H.f(x,0)]).B(new D.HX(H.n(n,{func:1,args:[P.q],named:{rawValue:P.d}})))},
kd:function(n){this.a=H.n(n,{func:1})},
h2:function(n){this.d=H.w(n)
this.b.a.aP()},
$isdq:1,
$asdq:function(){return[P.q]},
gaQ:function(n){return this.d},
gcW:function(n){return this.r},
sa5h:function(n){return this.c=n},
saQ:function(n,o){return this.d=o},
scW:function(n,o){return this.r=o}}
Q.wJ.prototype={
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
this.z=new K.O(new D.A(t,Q.azE()),t,!1)
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
r=W.K;(t&&C.t).a7(t,"blur",this.w(this.gOo(),r,r))
t=this.x;(t&&C.t).a7(t,"focus",this.w(this.gQQ(),r,r))
t=this.x;(t&&C.t).a7(t,"mouseenter",this.w(this.gRD(),r,r))
t=this.x;(t&&C.t).a7(t,"mouseleave",this.w(this.gRH(),r,r))
this.f.sa5h(this.x)
this.P(C.a,null)
t=J.Y(w)
t.a7(w,"click",this.w(x.gdF(),r,W.ae))
t.a7(w,"keypress",this.w(x.gdz(),r,W.a0))
return},
t:function(){var x,w,v,u,t,s,r,q,p,o
x=this.f
w=this.z
v=x.r
w.sY(v!=null&&v.length!==0)
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
v=J.cv(r)
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
v=J.cv(p)
this.a9(w,"elevation",v)
this.fy=p}o=Q.V(x.y)
w=this.go
if(w!==o){w=this.cy
v=J.cv(o)
this.a9(w,"elevation",v)
this.go=o}},
v:function(){var x=this.y
if(!(x==null))x.G()},
Op:function(n){this.f.sJb(!1)},
QR:function(n){this.f.sJb(!0)},
RE:function(n){this.f.sJv(!0)},
RI:function(n){this.f.sJv(!1)},
$asc:function(){return[D.fy]}}
Q.Wk.prototype={
p:function(){var x,w
x=document
w=x.createElement("div")
H.a(w,"$isN")
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
$asc:function(){return[D.fy]}}
Q.Wl.prototype={
p:function(){var x=Q.cY(this,0)
this.r=x
this.e=x.e
x=D.cS(x.a.b,null)
this.x=x
this.r.k(0,x,this.a.e)
this.D(this.e)
return new D.M(this,0,this.e,this.x,[D.fy])},
R:function(n,o,p){if(n===C.d&&0===o)return this.x
return p},
t:function(){var x=this.a.cy
this.r.j()
if(x===0)this.x.c1()},
v:function(){var x=this.r
if(!(x==null))x.i()},
$asc:function(){return[D.fy]}}
var y=i([{func:1,ret:-1,args:[,]},{func:1,ret:[S.c,D.fy],args:[[S.c,,],P.l]},{func:1,ret:-1,args:[W.ae]},{func:1,ret:-1,args:[W.a0]},{func:1,ret:-1,args:[P.q]}])
D.HX.prototype={
$1:function(n){return this.a.$1(H.w(n))},
"call*":"$1",
$R:1,
$S:20};(function installTearOffs(){var x
f(x=D.fy.prototype,"gdF",0,0,0,null,["$1"],["i5"],2,0)
f(x,"gdz",0,0,0,null,["$1"],["kW"],3,0)
f(x,"gkc",0,0,1,null,["$1"],["h2"],4,0)
f(Q,"azE",1,0,0,null,["$2"],["aHD"],1,0)
f(Q,"azF",1,0,0,null,["$2"],["aHE"],1,0)
f(x=Q.wJ.prototype,"gOo",0,0,0,null,["$1"],["Op"],0,0)
f(x,"gQQ",0,0,0,null,["$1"],["QR"],0,0)
f(x,"gRD",0,0,0,null,["$1"],["RE"],0,0)
f(x,"gRH",0,0,0,null,["$1"],["RI"],0,0)})();(function inheritance(){a(D.fy,P.x)
a(D.HX,H.b5)
var x=S.c
a(Q.wJ,x)
a(Q.Wk,x)
a(Q.Wl,x)})();(function constants(){C.hK=new D.C("material-toggle",Q.azF(),[D.fy])
C.o_=H.E(D.fy)})();(function staticFields(){$.a1K=null
$.abK=!1})();(function lazyInitializers(){c($,"ak2","$get$ak2",function(){return['._nghost-%ID%{display:inline-block;text-align:initial;}.material-toggle._ngcontent-%ID%{display:inline-flex;align-items:center;justify-content:flex-end;cursor:pointer;outline:none;width:100%;}.material-toggle.disabled._ngcontent-%ID%{pointer-events:none;}.tgl-container._ngcontent-%ID%{display:inline-block;min-width:36px;position:relative;vertical-align:middle;width:36px;}.tgl-bar._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);transition:opacity 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:rgba(0, 0, 0, 0.26);border-radius:8px;height:14px;margin:2px 0;width:100%;}.tgl-bar[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-bar[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-bar[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:#009688;opacity:0.5;}.tgl-btn-container._ngcontent-%ID%{display:inline-flex;justify-content:flex-end;transition:width 130ms cubic-bezier(0.4, 0, 0.2, 1);margin-top:-2px;position:absolute;top:0;width:20px;}.material-toggle.checked._ngcontent-%ID% .tgl-btn-container._ngcontent-%ID%{width:36px;}.tgl-btn._ngcontent-%ID%{transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fafafa;border-radius:50%;height:20px;position:relative;width:20px;}.tgl-btn[animated]._ngcontent-%ID%{transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);}.tgl-btn[elevation="1"]._ngcontent-%ID%{box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="2"]._ngcontent-%ID%{box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="3"]._ngcontent-%ID%{box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="4"]._ngcontent-%ID%{box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="5"]._ngcontent-%ID%{box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);}.tgl-btn[elevation="6"]._ngcontent-%ID%{box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);}.material-toggle.checked._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#009688;}.tgl-lbl._ngcontent-%ID%{flex-grow:1;display:inline-block;padding:2px 8px 2px 0;position:relative;vertical-align:middle;white-space:normal;}.material-toggle.disabled._ngcontent-%ID% .tgl-lbl._ngcontent-%ID%{opacity:0.54;}.material-toggle.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-btn._ngcontent-%ID%{background-color:#bdbdbd;}.material-toggle.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%,.material-toggle.checked.disabled._ngcontent-%ID% .tgl-bar._ngcontent-%ID%{background-color:rgba(0, 0, 0, 0.12);}']})
c($,"aj4","$get$aj4",function(){return[$.$get$ak2()]})})();(function nativeSupport(){j({})
k({})})()}
$__dart_deferred_initializers__["LEZ3eQ6HE5cNshuh5szq7dVvMt4="] = $__dart_deferred_initializers__.current
//# sourceMappingURL=main.dart.js_4.part.js.map
