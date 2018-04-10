self.$dart_deferred_initializers$=self.$dart_deferred_initializers$||Object.create(null)
$dart_deferred_initializers$.current=function($globals$,$){var A=$globals$.A
var B=$globals$.B
var C=$globals$.C
var D=$globals$.D
var E=$globals$.E
var F=$globals$.F
var G=$globals$.G
var H=$globals$.H
var J=$globals$.J
var K=$globals$.K
var L=$globals$.L
var M=$globals$.M
var N=$globals$.N
var O=$globals$.O
var P=$globals$.P
var Q=$globals$.Q
var R=$globals$.R
var S=$globals$.S
var T=$globals$.T
var U=$globals$.U
var V=$globals$.V
var W=$globals$.W
var X=$globals$.X
var Y=$globals$.Y
var Z=$globals$.Z
var init=$globals$.init
var setupProgram=$globals$.setupProgram
var I=$globals$.I
var dart=[["","",,D,{"^":"",bX:{"^":"d;a92:a?,aZ:b*,c,d,d2:e*,f,Dv:r<,x,y",
scO:function(a,b){this.c=b
this.cT()},
gcO:function(a){return this.c},
gjr:function(){var z=this.f
return z==null?this.e:z},
sOd:function(a){this.x=a
this.LK()},
sOP:function(a){this.y=a
this.LK()},
gmL:function(){var z=this.e
return z!=null&&J.bu(z)},
LK:function(){if(this.y)var z=3
else z=this.x?2:1
this.r=z},
qD:function(){if(this.b!==!0){this.c=this.c!==!0
this.cT()
this.d.M(0,this.c)}},
l1:[function(a){var z
this.qD()
z=J.j(a)
z.hd(a)
z.p2(a)},"$1","gdY",4,0,1,0],
Bl:[function(a){var z=J.j(a)
if(z.giu(a)===13||Z.hM(a)){this.qD()
z.hd(a)
z.p2(a)}},"$1","gdS",4,0,2],
cT:function(){var z=this.a
if(z==null)return
J.p9(z).a.setAttribute("aria-pressed",H.m(this.c))}}}],["","",,Q,{"^":"",
aEd:[function(a,b){var z=new Q.acL(null,null,null,null,P.e(),a,null,null,null)
z.a=S.f(z,3,C.d,b,null)
z.d=$.qP
return z},"$2","aph",8,0,3],
aEe:[function(a,b){var z=new Q.acM(null,null,null,P.e(),a,null,null,null)
z.a=S.f(z,3,C.h,b,null)
return z},"$2","api",8,0,4],
lW:function(){if($.zT)return
$.zT=!0
$.$get$P().t(0,C.t0,C.iL)
E.y()
V.fp()},
a31:{"^":"a;r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,a,b,c,d,e,f",
UD:function(a,b){var z=document.createElement("material-toggle")
this.e=z
z.className="themeable"
z=$.qP
if(z==null){z=$.L.a3("",C.k,C.ox)
$.qP=z}this.a2(z)},
p:function(){var z,y,x,w,v,u
z=this.f
y=this.e
x=this.a4(y)
w=document
v=S.t(w,x)
this.x=v
J.w(v,"material-toggle")
J.H(this.x,"role","button")
this.h(this.x)
u=$.$get$V().cloneNode(!1)
this.x.appendChild(u)
v=new V.u(1,0,this,u,null,null,null)
this.y=v
this.z=new K.O(new D.A(v,Q.aph()),v,!1)
v=S.t(w,this.x)
this.Q=v
J.w(v,"tgl-container")
this.h(this.Q)
v=S.t(w,this.Q)
this.ch=v
J.H(v,"animated","")
J.w(this.ch,"tgl-bar")
this.h(this.ch)
v=S.t(w,this.Q)
this.cx=v
J.w(v,"tgl-btn-container")
this.h(this.cx)
v=S.t(w,this.cx)
this.cy=v
J.H(v,"animated","")
J.w(this.cy,"tgl-btn")
this.h(this.cy)
this.cR(this.cy,0)
J.B(this.x,"blur",this.A(this.gWj()))
J.B(this.x,"focus",this.A(this.gXx()))
J.B(this.x,"mouseenter",this.A(this.gXT()))
J.B(this.x,"mouseleave",this.A(this.gXV()))
this.f.sa92(this.x)
this.N(C.a,null)
v=J.j(y)
v.bx(y,"click",this.A(z.gdY()))
v.bx(y,"keypress",this.A(z.gdS()))
return},
q:function(){var z,y,x,w,v,u,t,s,r,q
z=this.f
this.z.sa6(z.gmL())
this.y.I()
y=J.j(z)
x=y.gcO(z)
w=this.db
if(w==null?x!=null:w!==x){this.aJ(this.x,"checked",x)
this.db=x}v=y.gaZ(z)
w=this.dx
if(w==null?v!=null:w!==v){this.aJ(this.x,"disabled",v)
this.dx=v}u=y.gaZ(z)===!0?"-1":"0"
if(this.dy!==u){w=this.x
this.ar(w,"tabindex",u)
this.dy=u}t=Q.U(y.gaZ(z))
if(this.fr!==t){y=this.x
w=J.ai(t)
this.ar(y,"aria-disabled",w)
this.fr=t}s=z.gjr()
if(s==null)s=""
if(this.fx!==s){y=this.x
this.ar(y,"aria-label",J.ai(s))
this.fx=s}r=Q.U(z.gDv())
if(this.fy!==r){y=this.ch
w=J.ai(r)
this.ar(y,"elevation",w)
this.fy=r}q=Q.U(z.gDv())
if(this.go!==q){y=this.cy
w=J.ai(q)
this.ar(y,"elevation",w)
this.go=q}},
w:function(){var z=this.y
if(!(z==null))z.H()},
aal:[function(a){this.f.sOd(!1)},"$1","gWj",4,0,0],
abz:[function(a){this.f.sOd(!0)},"$1","gXx",4,0,0],
abV:[function(a){this.f.sOP(!0)},"$1","gXT",4,0,0],
abX:[function(a){this.f.sOP(!1)},"$1","gXV",4,0,0],
$asa:function(){return[D.bX]},
L:{
cD:function(a,b){var z=new Q.a31(!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,P.e(),a,null,null,null)
z.a=S.f(z,1,C.f,b,null)
z.UD(a,b)
return z}}},
acL:{"^":"a;r,x,y,a,b,c,d,e,f",
p:function(){var z,y
z=document
y=z.createElement("div")
this.r=y
y.className="tgl-lbl"
this.h(y)
y=z.createTextNode("")
this.x=y
this.r.appendChild(y)
this.F(this.r)
return},
q:function(){var z=J.jr(this.f)
if(z==null)z=""
if(this.y!==z){this.x.textContent=z
this.y=z}},
$asa:function(){return[D.bX]}},
acM:{"^":"a;r,x,a,b,c,d,e,f",
p:function(){var z,y
z=Q.cD(this,0)
this.r=z
this.e=z.e
y=new D.bX(null,!1,!1,new P.W(null,null,0,null,null,null,null,[P.J]),null,null,1,!1,!1)
this.x=y
z.k(0,y,this.a.e)
this.F(this.e)
return new D.K(this,0,this.e,this.x,[D.bX])},
q:function(){var z=this.a.cy
this.r.j()
if(z===0)this.x.cT()},
w:function(){var z=this.r
if(!(z==null))z.i()},
$asa:I.D}}]]
setupProgram(dart,init.metadata.length,init.types.length)
var deferredMetadata=["mouseEvent"]
var deferredTypes=[{func:1,v:true,args:[,]},{func:1,v:true,args:[W.av]},{func:1,v:true,args:[W.aG]},{func:1,ret:[S.a,D.bX],args:[S.a,P.n]},{func:1,ret:S.a,args:[S.a,P.n]}]
init.metadata.push.apply(init.metadata,deferredMetadata)
init.types.push.apply(init.types,deferredTypes)
C.iL=new D.N("material-toggle",Q.api(),C.a,[D.bX])
C.ps=I.o(['._nghost-%COMP% { display:inline-block; text-align:initial; } .material-toggle._ngcontent-%COMP% { display:inline-flex; align-items:center; justify-content:flex-end; cursor:pointer; outline:none; width:100%; } .material-toggle.disabled._ngcontent-%COMP% { pointer-events:none; } .tgl-container._ngcontent-%COMP% { display:inline-block; min-width:36px; position:relative; vertical-align:middle; width:36px; } .tgl-bar._ngcontent-%COMP% { transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1); transition:opacity 130ms cubic-bezier(0.4, 0, 0.2, 1); background-color:rgba(0, 0, 0, 0.26); border-radius:8px; height:14px; margin:2px 0; width:100%; } .tgl-bar[animated]._ngcontent-%COMP% { transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1); } .tgl-bar[elevation="1"]._ngcontent-%COMP% { box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="2"]._ngcontent-%COMP% { box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="3"]._ngcontent-%COMP% { box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="4"]._ngcontent-%COMP% { box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="5"]._ngcontent-%COMP% { box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); } .tgl-bar[elevation="6"]._ngcontent-%COMP% { box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2); } .material-toggle.checked._ngcontent-%COMP% .tgl-bar._ngcontent-%COMP% { background-color:#009688; opacity:0.5; } .tgl-btn-container._ngcontent-%COMP% { display:inline-flex; justify-content:flex-end; transition:width 130ms cubic-bezier(0.4, 0, 0.2, 1); margin-top:-2px; position:absolute; top:0; width:20px; } .material-toggle.checked._ngcontent-%COMP% .tgl-btn-container._ngcontent-%COMP% { width:36px; } .tgl-btn._ngcontent-%COMP% { transition:background-color 130ms cubic-bezier(0.4, 0, 0.2, 1); background-color:#fafafa; border-radius:50%; height:20px; position:relative; width:20px; } .tgl-btn[animated]._ngcontent-%COMP% { transition:box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1); } .tgl-btn[elevation="1"]._ngcontent-%COMP% { box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="2"]._ngcontent-%COMP% { box-shadow:0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="3"]._ngcontent-%COMP% { box-shadow:0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="4"]._ngcontent-%COMP% { box-shadow:0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="5"]._ngcontent-%COMP% { box-shadow:0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2); } .tgl-btn[elevation="6"]._ngcontent-%COMP% { box-shadow:0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2); } .material-toggle.checked._ngcontent-%COMP% .tgl-btn._ngcontent-%COMP% { background-color:#009688; } .tgl-lbl._ngcontent-%COMP% { flex-grow:1; display:inline-block; padding:2px 8px 2px 0; position:relative; vertical-align:middle; white-space:normal; } .material-toggle.disabled._ngcontent-%COMP% .tgl-lbl._ngcontent-%COMP% { opacity:0.54; } .material-toggle.disabled._ngcontent-%COMP% .tgl-btn._ngcontent-%COMP%,.material-toggle.checked.disabled._ngcontent-%COMP% .tgl-btn._ngcontent-%COMP% { background-color:#bdbdbd; } .material-toggle.disabled._ngcontent-%COMP% .tgl-bar._ngcontent-%COMP%,.material-toggle.checked.disabled._ngcontent-%COMP% .tgl-bar._ngcontent-%COMP% { background-color:rgba(0, 0, 0, 0.12); }'])
C.ox=I.o([C.ps])
C.t0=H.v("bX")
$.qP=null
$.zT=!1}
$dart_deferred_initializers$["jtIjT+/zjSwA6jkcEQ99p9pJmF8="]=$dart_deferred_initializers$.current
