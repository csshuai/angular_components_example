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
var dart=[["","",,P,{"^":"",
OL:function(a){return Math.log(H.bJ(a))}}],["","",,F,{"^":"",G9:{"^":"pr;d,e,f,a,b,c",
Tk:function(a,b,c,d,e,f){var z
if(f){z=d.y1
this.a.d9(new P.q(z,[H.h(z,0)]).C(new F.X7(this,d)))}},
kt:function(a,b){if(!J.p(this.zz(this.b.k2),b))this.DS(0,b==null?"":this.d.dF(b))},
iA:function(a){this.a.d9(this.e.C(new F.X8(this,a)))},
zz:function(a){var z,y,x,w
y=J.E(a)
if(y.ad(a,"NaN"))return
try{x=this.f
if(x&&y.bN(a,this.d.gra().gSU())===!0)return
z=J.Ql(this.d,a)
y=x?J.me(z):z
return y}catch(w){if(H.az(w) instanceof P.jE)return
else throw w}},
L:{
fO:function(a,b,c,d,e,f,g){var z,y,x,w,v
z=E.ak(!1)
y=E.ak(e==null?!1:e)
if(z){x=a.x2
w=new P.q(x,[H.h(x,0)])}else if(y){x=a.x1
w=new P.q(x,[H.h(x,0)])}else{x=a.y1
w=new P.q(x,[H.h(x,0)])}if(c==null)c=T.q5(null)
v=E.ak(f==null?!1:f)
return F.X6(w,v,c,a,b,E.ak(!1))},
X6:function(a,b,c,d,e,f){var z=new F.G9(c,a,b,new R.z(null,null,null,null,!0,!1),d,e)
z.bF(d,e)
z.Tk(a,b,c,d,e,f)
return z}}},X7:{"^":"c:0;a,b",
$1:[function(a){var z,y,x
z=this.b
if(z==null)return
y=this.a
x=y.zz(z.k2)
if(x!=null)y.DS(0,y.d.dF(x))},null,null,4,0,null,0,"call"]},X8:{"^":"c:0;a,b",
$1:[function(a){var z,y,x
z=this.a
y=z.b
if(y==null)return
x=y.k2
this.b.$2$rawValue(z.zz(x),x)},null,null,4,0,null,0,"call"]}}],["","",,N,{"^":"",
rT:function(){if($.C1)return
$.C1=!0
Q.lR()
Q.cX()
Q.cX()
Y.Cn()
N.Nx()
N.Nx()
E.y()
K.cF()}}],["","",,T,{"^":"",va:{"^":"d;jv:a>",
qJ:function(a){var z,y
z=J.j(a)
y=z.gac(a)
if(y==null)return
if(J.ft(z.gac(a),0))return P.a1(["positive-number",$.$get$G().Z("Enter a number greater than 0",null,null,null,null)])
return},
$iso8:1}}],["","",,N,{"^":"",
Nx:function(){if($.yW)return
$.yW=!0
E.y()
K.cF()}}],["","",,T,{"^":"",Gr:{"^":"d;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx",
sKG:function(a){this.fx=a
this.fy=C.aK.dU(Math.log(a)/2.302585092994046)},
Tz:function(a,b,c,d,e,f,g){var z,y
this.k3=d
this.k4=e
z=$.$get$Db().u(0,this.id)
this.k1=z
y=C.p.fa(z.e,0)
this.r2=y
this.rx=y-48
this.a=z.r
y=z.dx
this.k2=y
this.a1P(b.$1(z))},
gra:function(){return this.k1},
dF:function(a){var z,y,x
z=typeof a==="number"
if(z&&isNaN(a))return this.k1.Q
if(z)z=a==1/0||a==-1/0
else z=!1
if(z){z=J.Dv(a)?this.a:this.b
return z+this.k1.z}z=J.dr(a)
y=z.gl5(a)?this.a:this.b
x=this.r1
x.a+=y
y=z.nL(a)
if(this.z)this.W5(y)
else this.xy(y)
y=x.a+=z.gl5(a)?this.c:this.d
x.a=""
return y.charCodeAt(0)==0?y:y},
Cr:function(a,b){var z,y
z=new T.a7b(this,b,new T.r8(b,0),null,new P.dC(""),!1,!1,!1,!1,!1,!1,1,null)
z.ch=this.fx
y=z.Cq(0)
z.d=y
return y},
W5:function(a){var z,y,x
z=J.E(a)
if(z.ad(a,0)){this.xy(a)
this.Ge(0)
return}y=C.aK.lL(Math.log(H.bJ(a))/2.302585092994046)
x=z.vQ(a,Math.pow(10,y))
z=this.ch
if(z>1&&z>this.cx)for(;C.S.hK(y,z)!==0;){x*=10;--y}else{z=this.cx
if(z<1){++y
x/=10}else{--z
y-=z
x*=Math.pow(10,z)}}this.xy(x)
this.Ge(y)},
Ge:function(a){var z,y,x
z=this.k1
y=this.r1
x=y.a+=z.x
if(a<0){a=-a
y.a=x+z.r}else if(this.y)y.a=x+z.f
z=this.dx
x=C.S.P(a)
if(this.rx===0)y.a+=C.p.eR(x,z,"0")
else this.a23(z,x)},
Gb:function(a){var z=J.dr(a)
if(z.gl5(a)&&!J.Dv(z.nL(a)))throw H.i(P.bb("Internal error: expected positive number, got "+H.m(a)))
return typeof a==="number"?z.lL(a):z.lm(a,1)},
a1v:function(a){var z,y
if(typeof a==="number")if(a==1/0||a==-1/0)return $.$get$q6()
else return C.B.dU(a)
else{z=J.a2(a)
if(z.vB(a,1)===0)return a
else{y=C.B.dU(J.QL(z.aX(a,this.Gb(a))))
return y===0?a:z.aj(a,y)}}},
xy:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
z=this.cy
if(typeof a==="number")y=a==1/0||a==-1/0
else y=!1
x=J.a2(a)
if(y){w=x.j4(a)
v=0
u=0
t=0}else{w=this.Gb(a)
s=x.aX(a,w)
if(J.me(s)!==0){w=a
s=0}H.bJ(z)
t=Math.pow(10,z)
r=t*this.fx
q=J.me(this.a1v(J.em(s,r)))
if(q>=r){w=J.X(w,1)
q-=r}u=C.B.lm(q,t)
v=C.B.hK(q,t)}if(typeof w==="number"&&w>$.$get$q6()){y=C.aK.um(Math.log(H.bJ(w))/2.302585092994046)
x=$.$get$Gs()
if(typeof x!=="number")return H.I(x)
p=y-x
o=C.B.dU(Math.pow(10,p))
if(o===0)o=Math.pow(10,p)
n=C.p.iG("0",C.S.j4(p))
w=C.B.j4(J.jn(w,o))}else n=""
m=u===0?"":C.B.P(u)
l=this.a_B(w)
k=l+(l.length===0?m:C.p.eR(m,this.fy,"0"))+n
j=k.length
if(typeof z!=="number")return z.cF()
if(z>0){y=this.db
if(typeof y!=="number")return y.cF()
i=y>0||v>0}else i=!1
if(j!==0||this.cx>0){k=C.p.iG("0",this.cx-j)+k
j=k.length
for(y=this.r1,h=0;h<j;++h){y.a+=H.fW(C.p.fa(k,h)+this.rx)
this.Wd(j,h)}}else if(!i)this.r1.a+=this.k1.e
if(this.x||i)this.r1.a+=this.k1.b
this.W6(C.B.P(v+t))},
a_B:function(a){var z,y
z=J.E(a)
if(z.ad(a,0))return""
y=z.P(a)
return C.p.eV(y,"-")?C.p.f8(y,1):y},
W6:function(a){var z,y,x,w,v
z=a.length
y=this.db
while(!0){x=z-1
if(C.p.d6(a,x)===48){if(typeof y!=="number")return y.aj()
w=z>y+1}else w=!1
if(!w)break
z=x}for(y=this.r1,v=1;v<z;++v)y.a+=H.fW(C.p.fa(a,v)+this.rx)},
a23:function(a,b){var z,y,x,w
for(z=b.length,y=a-z,x=this.r1,w=0;w<y;++w)x.a+=this.k1.e
for(w=0;w<z;++w)x.a+=H.fW(C.p.fa(b,w)+this.rx)},
Wd:function(a,b){var z,y
z=a-b
if(z<=1||this.e<=0)return
y=this.f
if(z===y+1)this.r1.a+=this.k1.c
else if(z>y&&C.B.hK(z-y,this.e)===1)this.r1.a+=this.k1.c},
a1P:function(a){var z,y,x
if(a==null)return
this.go=J.ty(a," ","\xa0")
z=this.k3
if(z==null)z=this.k2
y=this.k4
if(typeof a!=="string")H.F(P.bb(a))
x=new T.IW(a,0,null)
x.aa()
new T.a78(this,x,z,y,!1,-1,0,0,0,-1).Cq(0)
z=this.k4
y=z==null
if(!y||!1){if(y){z=$.$get$Ni()
y=z.u(0,this.k2.toUpperCase())
z=y==null?z.u(0,"DEFAULT"):y
this.k4=z}this.db=z
this.cy=z}},
P:function(a){return"NumberFormat("+H.m(this.id)+", "+H.m(this.go)+")"},
L:{
q5:function(a){var z=new T.Gr("-","","","",3,3,!1,!1,!1,!1,!1,40,1,3,0,0,0,!1,1,0,null,T.aO(a,T.alL(),T.aR()),null,null,null,null,new P.dC(""),0,0)
z.Tz(a,new T.YI(),null,null,null,!1,null)
return z},
avM:[function(a){if(a==null)return!1
return $.$get$Db().da(0,a)},"$1","alL",4,0,1]}},YI:{"^":"c:0;",
$1:function(a){return a.ch}},a7b:{"^":"d;a,e8:b>,c,ac:d*,e,f,r,x,y,lF:z@,Q,ch,cx",
gra:function(){return this.a.k1},
ga8G:function(){var z=this.cx
if(z==null){z=this.GL()
this.cx=z}return z},
GL:function(){var z,y
z=this.a.k1
y=this.ga5e()
return P.a1([z.b,new T.a7c(),z.x,new T.a7d(),z.c,y,z.d,new T.a7e(this),z.y,new T.a7f(this)," ",y,"\xa0",y,"+",new T.a7g(),"-",new T.a7h()])},
a61:function(){return H.F(P.bB("Invalid number: "+H.m(this.c.a),null,null))},
ag_:[function(){return this.gR0()?"":this.a61()},"$0","ga5e",0,0,0],
gR0:function(){var z,y
z=this.a.k1.c
if(z!=="\xa0"||z!==" ")return!0
y=this.c.la(z.length+1)
z=J.ac(y)
return this.M4(z.u(y,z.gD(y)-1))!=null},
M4:function(a){var z=J.Dp(a,0)-this.a.r2
if(z>=0&&z<10)return z
else return},
Mo:function(a){var z,y,x,w
z=new T.a7i(this)
y=this.a
if(z.$1(y.b)===!0)this.f=!0
if(z.$1(y.a)===!0)this.r=!0
z=this.f
if(z&&this.r){x=y.b.length
w=y.a.length
if(x>w)this.r=!1
else if(w>x){this.f=!1
z=!1}}if(a){if(z)this.c.oJ(0,y.b.length)
if(this.r)this.c.oJ(0,y.a.length)}},
a3c:function(){return this.Mo(!1)},
a8m:function(){var z,y,x,w,v
z=this.c
if(z.b===0&&!this.Q){this.Q=!0
this.Mo(!0)
y=!0}else y=!1
for(x=this.ga8G(),x=x.gd7(x),x=x.gbU(x);x.aa();){w=x.gav(x)
if(z.eV(0,w)){x=this.cx
if(x==null){x=this.GL()
this.cx=x}this.e.a+=H.m(x.u(0,w).$0())
x=J.at(w)
z.la(x)
v=z.b
if(typeof x!=="number")return H.I(x)
z.b=v+x
return}}if(!y)this.z=!0},
Cq:function(a){var z,y,x,w
z=this.b
y=this.a
x=J.E(z)
if(x.ad(z,y.k1.Q))return 0/0
if(x.ad(z,y.b+y.k1.z+y.d))return 1/0
if(x.ad(z,y.a+y.k1.z+y.c))return-1/0
this.a3c()
z=this.c
w=this.a8_(z)
if(this.f&&!this.x)this.BI()
if(this.r&&!this.y)this.BI()
y=z.b
z=J.at(z.a)
if(typeof z!=="number")return H.I(z)
if(!(y>=z))this.BI()
return w},
BI:function(){return H.F(P.bB("Invalid Number: "+H.m(this.c.a),null,null))},
a8_:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n
if(this.r)this.e.a+="-"
z=this.a
y=this.c
x=y.a
w=J.ac(x)
v=a.a
u=J.ac(v)
t=this.e
while(!0){if(this.z!==!0){s=a.b
r=u.gD(v)
if(typeof r!=="number")return H.I(r)
r=!(s>=r)
s=r}else s=!1
if(!s)break
q=this.M4(a.n4())
if(q!=null){t.a+=H.fW(48+q)
u.u(v,a.b++)}else this.a8m()
p=y.la(J.Z(w.gD(x),y.b))
s=J.E(p)
if(s.ad(p,z.d))this.x=!0
if(s.ad(p,z.c))this.y=!0}z=t.a
o=z.charCodeAt(0)==0?z:z
n=H.dz(o,null,new T.a7j())
if(n==null)n=H.qc(o,null)
return J.jn(n,this.ch)},
dF:function(a){return this.a.$1(a)}},a7c:{"^":"c:1;",
$0:function(){return"."}},a7d:{"^":"c:1;",
$0:function(){return"E"}},a7e:{"^":"c:1;a",
$0:function(){this.a.ch=100
return""}},a7f:{"^":"c:1;a",
$0:function(){this.a.ch=1000
return""}},a7g:{"^":"c:1;",
$0:function(){return"+"}},a7h:{"^":"c:1;",
$0:function(){return"-"}},a7i:{"^":"c:69;a",
$1:function(a){return a.length!==0&&this.a.c.eV(0,a)}},a7j:{"^":"c:0;",
$1:function(a){return}},a78:{"^":"d;a,n3:b>,c,d,e,f,r,x,y,z",
gra:function(){return this.a.k1},
Cq:function(a){var z,y,x,w,v,u
z=this.a
z.b=this.tX()
y=this.a13()
x=this.tX()
z.d=x
w=this.b
if(w.c===";"){w.aa()
z.a=this.tX()
x=new T.IW(y,0,null)
for(;x.aa();){v=x.c
u=w.c
if((u==null?v!=null:u!==v)&&u!=null)throw H.i(P.bB("Positive and negative trunks must be the same",null,null))
w.aa()}z.c=this.tX()}else{z.a=z.a+z.b
z.c=x+z.c}},
tX:function(){var z,y
z=new P.dC("")
this.e=!1
y=this.b
while(!0)if(!(this.a7Y(z)&&y.aa()))break
y=z.a
return y.charCodeAt(0)==0?y:y},
a7Y:function(a){var z,y,x
z=this.b
y=z.c
if(y==null)return!1
if(y==="'"){if(z.gvu()==="'"){z.aa()
a.a+="'"}else this.e=!this.e
return!0}if(this.e)a.a+=y
else switch(y){case"#":case"0":case",":case".":case";":return!1
case"\xa4":a.a+=H.m(this.c)
break
case"%":z=this.a
x=z.fx
if(x!==1&&x!==100)throw H.i(P.bB("Too many percent/permill",null,null))
z.sKG(100)
a.a+=z.k1.d
break
case"\u2030":z=this.a
x=z.fx
if(x!==1&&x!==1000)throw H.i(P.bB("Too many percent/permill",null,null))
z.sKG(1000)
a.a+=z.k1.y
break
default:a.a+=y}return!0},
a13:function(){var z,y,x,w,v,u,t,s,r,q
z=new P.dC("")
y=this.b
x=!0
while(!0){if(!(y.c!=null&&x))break
x=this.a81(z)}w=this.x
if(w===0&&this.r>0&&this.f>=0){v=this.f
if(v===0)v=1
this.y=this.r-v
this.r=v-1
this.x=1
w=1}u=this.f
if(!(u<0&&this.y>0)){if(u>=0){t=this.r
t=u<t||u>t+w}else t=!1
t=t||this.z===0}else t=!0
if(t)throw H.i(P.bB('Malformed pattern "'+y.a+'"',null,null))
y=this.r
w=y+w
s=w+this.y
t=this.a
r=u>=0
q=r?s-u:0
t.cy=q
if(r){w-=u
t.db=w
if(w<0)t.db=0}w=(r?u:s)-y
t.cx=w
if(t.z){t.ch=y+w
if(q===0&&w===0)t.cx=1}y=Math.max(0,this.z)
t.f=y
if(!t.r)t.e=y
t.x=u===0||u===s
y=z.a
return y.charCodeAt(0)==0?y:y},
a81:function(a){var z,y,x,w,v
z=this.b
y=z.c
switch(y){case"#":if(this.x>0)++this.y
else ++this.r
x=this.z
if(x>=0&&this.f<0)this.z=x+1
break
case"0":if(this.y>0)throw H.i(P.bB('Unexpected "0" in pattern "'+z.a+'"',null,null));++this.x
x=this.z
if(x>=0&&this.f<0)this.z=x+1
break
case",":x=this.z
if(x>0){w=this.a
w.r=!0
w.e=x}this.z=0
break
case".":if(this.f>=0)throw H.i(P.bB('Multiple decimal separators in pattern "'+z.P(0)+'"',null,null))
this.f=this.r+this.x+this.y
break
case"E":a.a+=H.m(y)
x=this.a
if(x.z)throw H.i(P.bB('Multiple exponential symbols in pattern "'+z.P(0)+'"',null,null))
x.z=!0
x.dx=0
z.aa()
v=z.c
if(v==="+"){a.a+=H.m(v)
z.aa()
x.y=!0}for(;w=z.c,w==="0";){a.a+=H.m(w)
z.aa();++x.dx}if(this.r+this.x<1||x.dx<1)throw H.i(P.bB('Malformed exponential pattern "'+z.P(0)+'"',null,null))
return!1
default:return!1}a.a+=H.m(y)
z.aa()
return!0},
dF:function(a){return this.a.$1(a)}},ayo:{"^":"jJ;bU:a>",
$asjJ:function(){return[P.l]},
$asY:function(){return[P.l]}},IW:{"^":"d;a,b,c",
gav:function(a){return this.c},
aa:function(){var z,y
z=this.b
y=this.a
if(z>=y.length){this.c=null
return!1}this.b=z+1
this.c=y[z]
return!0},
gvu:function(){var z,y
z=this.b
y=this.a
return z>=y.length?null:y[z]},
gbU:function(a){return this},
n4:function(){return this.gvu().$0()}}}],["","",,B,{"^":"",YJ:{"^":"d;a,SU:b<,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx",
P:function(a){return this.a},
L:{
a_:function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return new B.YJ(i,c,f,k,p,n,h,e,m,g,j,b,o,l,a,d)}}}}],["","",,F,{}]]
setupProgram(dart,init.metadata.length,init.types.length)
var deferredMetadata=["_"]
var deferredTypes=[{func:1},{func:1,ret:P.J,args:[,]}]
init.metadata.push.apply(init.metadata,deferredMetadata)
init.types.push.apply(init.types,deferredTypes)
C.bN=H.v("G9")
C.aE=H.v("Gr")
C.fk=H.v("va")
$.C1=!1
$.yW=!1;(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
var v=a[z++]
I.$lazy(y,x,w,null,v)}})(["q6","$get$q6",function(){return typeof 1==="number"?P.P1(2,52):C.S.lL(1e300)},$,"Gs","$get$Gs",function(){return C.aK.um(P.OL($.$get$q6())/P.OL(10))},$,"Db","$get$Db",function(){return P.a1(["af",B.a_("\xa4#,##0.00","#,##0.###",",","ZAR","E","\xa0","\u221e","-","af","NaN","%","#,##0%","\u2030","+","#E0","0"),"am",B.a_("\xa4#,##0.00","#,##0.###",".","ETB","E",",","\u221e","-","am","NaN","%","#,##0%","\u2030","+","#E0","0"),"ar",B.a_("#,##0.00\xa0\xa4","#,##0.###","\u066b","EGP","\u0627\u0633","\u066c","\u221e","\u061c-","ar","\u0644\u064a\u0633\xa0\u0631\u0642\u0645","\u066a\u061c","#,##0\xa0%","\u0609","\u061c+","#E0","\u0660"),"ar_DZ",B.a_("\xa4\xa0#,##0.00","#,##0.###",",","DZD","E",".","\u221e","\u200e-","ar_DZ","\u0644\u064a\u0633\xa0\u0631\u0642\u0645\u064b\u0627","\u200e%\u200e","#,##0%","\u2030","\u200e+","#E0","0"),"az",B.a_("\xa4\xa0#,##0.00","#,##0.###",",","AZN","E",".","\u221e","-","az","NaN","%","#,##0%","\u2030","+","#E0","0"),"be",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","BYN","E","\xa0","\u221e","-","be","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"bg",B.a_("0.00\xa0\xa4","#,##0.###",",","BGN","E","\xa0","\u221e","-","bg","NaN","%","#,##0%","\u2030","+","#E0","0"),"bn",B.a_("#,##,##0.00\xa4","#,##,##0.###",".","BDT","E",",","\u221e","-","bn","NaN","%","#,##0%","\u2030","+","#E0","\u09e6"),"br",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","E","\xa0","\u221e","-","br","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"bs",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","BAM","E",".","\u221e","-","bs","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"ca",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","E",".","\u221e","-","ca","NaN","%","#,##0%","\u2030","+","#E0","0"),"chr",B.a_("\xa4#,##0.00","#,##0.###",".","USD","E",",","\u221e","-","chr","NaN","%","#,##0%","\u2030","+","#E0","0"),"cs",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","CZK","E","\xa0","\u221e","-","cs","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"cy",B.a_("\xa4#,##0.00","#,##0.###",".","GBP","E",",","\u221e","-","cy","NaN","%","#,##0%","\u2030","+","#E0","0"),"da",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","DKK","E",".","\u221e","-","da","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"de",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","E",".","\u221e","-","de","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"de_AT",B.a_("\xa4\xa0#,##0.00","#,##0.###",",","EUR","E","\xa0","\u221e","-","de_AT","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"de_CH",B.a_("\xa4\xa0#,##0.00;\xa4-#,##0.00","#,##0.###",".","CHF","E","\u2019","\u221e","-","de_CH","NaN","%","#,##0%","\u2030","+","#E0","0"),"el",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","e",".","\u221e","-","el","NaN","%","#,##0%","\u2030","+","#E0","0"),"en",B.a_("\xa4#,##0.00","#,##0.###",".","USD","E",",","\u221e","-","en","NaN","%","#,##0%","\u2030","+","#E0","0"),"en_AU",B.a_("\xa4#,##0.00","#,##0.###",".","AUD","e",",","\u221e","-","en_AU","NaN","%","#,##0%","\u2030","+","#E0","0"),"en_CA",B.a_("\xa4#,##0.00","#,##0.###",".","CAD","e",",","\u221e","-","en_CA","NaN","%","#,##0%","\u2030","+","#E0","0"),"en_GB",B.a_("\xa4#,##0.00","#,##0.###",".","GBP","E",",","\u221e","-","en_GB","NaN","%","#,##0%","\u2030","+","#E0","0"),"en_IE",B.a_("\xa4#,##0.00","#,##0.###",".","EUR","E",",","\u221e","-","en_IE","NaN","%","#,##0%","\u2030","+","#E0","0"),"en_IN",B.a_("\xa4\xa0#,##,##0.00","#,##,##0.###",".","INR","E",",","\u221e","-","en_IN","NaN","%","#,##,##0%","\u2030","+","#E0","0"),"en_MY",B.a_("\xa4#,##0.00","#,##0.###",".","MYR","E",",","\u221e","-","en_MY","NaN","%","#,##0%","\u2030","+","#E0","0"),"en_SG",B.a_("\xa4#,##0.00","#,##0.###",".","SGD","E",",","\u221e","-","en_SG","NaN","%","#,##0%","\u2030","+","#E0","0"),"en_US",B.a_("\xa4#,##0.00","#,##0.###",".","USD","E",",","\u221e","-","en_US","NaN","%","#,##0%","\u2030","+","#E0","0"),"en_ZA",B.a_("\xa4#,##0.00","#,##0.###",",","ZAR","E","\xa0","\u221e","-","en_ZA","NaN","%","#,##0%","\u2030","+","#E0","0"),"es",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","E",".","\u221e","-","es","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"es_419",B.a_("\xa4#,##0.00","#,##0.###",".","MXN","E",",","\u221e","-","es_419","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"es_ES",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","E",".","\u221e","-","es_ES","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"es_MX",B.a_("\xa4#,##0.00","#,##0.###",".","MXN","E",",","\u221e","-","es_MX","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"es_US",B.a_("\xa4#,##0.00","#,##0.###",".","USD","E",",","\u221e","-","es_US","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"et",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","\xd710^","\xa0","\u221e","\u2212","et","NaN","%","#,##0%","\u2030","+","#E0","0"),"eu",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","E",".","\u221e","\u2212","eu","NaN","%","%\xa0#,##0","\u2030","+","#E0","0"),"fa",B.a_("\u200e\xa4#,##0.00","#,##0.###","\u066b","IRR","\xd7\u06f1\u06f0^","\u066c","\u221e","\u200e\u2212","fa","\u0646\u0627\u0639\u062f\u062f","\u066a","#,##0%","\u0609","\u200e+","#E0","\u06f0"),"fi",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","E","\xa0","\u221e","\u2212","fi","ep\xe4luku","%","#,##0\xa0%","\u2030","+","#E0","0"),"fil",B.a_("\xa4#,##0.00","#,##0.###",".","PHP","E",",","\u221e","-","fil","NaN","%","#,##0%","\u2030","+","#E0","0"),"fr",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","E","\xa0","\u221e","-","fr","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"fr_CA",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","CAD","E","\xa0","\u221e","-","fr_CA","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"fr_CH",B.a_("#,##0.00\xa0\xa4\xa0;-#,##0.00\xa0\xa4","#,##0.###",",","CHF","E","\xa0","\u221e","-","fr_CH","NaN","%","#,##0%","\u2030","+","#E0","0"),"ga",B.a_("\xa4#,##0.00","#,##0.###",".","EUR","E",",","\u221e","-","ga","NaN","%","#,##0%","\u2030","+","#E0","0"),"gl",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","E",".","\u221e","-","gl","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"gsw",B.a_("#,##0.00\xa0\xa4","#,##0.###",".","CHF","E","\u2019","\u221e","\u2212","gsw","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"gu",B.a_("\xa4#,##,##0.00","#,##,##0.###",".","INR","E",",","\u221e","-","gu","NaN","%","#,##,##0%","\u2030","+","[#E0]","0"),"haw",B.a_("\xa4#,##0.00","#,##0.###",".","USD","E",",","\u221e","-","haw","NaN","%","#,##0%","\u2030","+","#E0","0"),"he",B.a_("\u200f#,##0.00\xa0\xa4;\u200f-#,##0.00\xa0\xa4","#,##0.###",".","ILS","E",",","\u221e","\u200e-","he","NaN","%","#,##0%","\u2030","\u200e+","#E0","0"),"hi",B.a_("\xa4#,##,##0.00","#,##,##0.###",".","INR","E",",","\u221e","-","hi","NaN","%","#,##,##0%","\u2030","+","[#E0]","0"),"hr",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","HRK","E",".","\u221e","-","hr","NaN","%","#,##0%","\u2030","+","#E0","0"),"hu",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","HUF","E","\xa0","\u221e","-","hu","NaN","%","#,##0%","\u2030","+","#E0","0"),"hy",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","AMD","E","\xa0","\u221e","-","hy","\u0548\u0579\u0539","%","#,##0%","\u2030","+","#E0","0"),"id",B.a_("\xa4#,##0.00","#,##0.###",",","IDR","E",".","\u221e","-","id","NaN","%","#,##0%","\u2030","+","#E0","0"),"in",B.a_("\xa4#,##0.00","#,##0.###",",","IDR","E",".","\u221e","-","in","NaN","%","#,##0%","\u2030","+","#E0","0"),"is",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","ISK","E",".","\u221e","-","is","NaN","%","#,##0%","\u2030","+","#E0","0"),"it",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","E",".","\u221e","-","it","NaN","%","#,##0%","\u2030","+","#E0","0"),"it_CH",B.a_("\xa4\xa0#,##0.00;\xa4-#,##0.00","#,##0.###",".","CHF","E","\u2019","\u221e","-","it_CH","NaN","%","#,##0%","\u2030","+","#E0","0"),"iw",B.a_("\u200f#,##0.00\xa0\xa4;\u200f-#,##0.00\xa0\xa4","#,##0.###",".","ILS","E",",","\u221e","\u200e-","iw","NaN","%","#,##0%","\u2030","\u200e+","#E0","0"),"ja",B.a_("\xa4#,##0.00","#,##0.###",".","JPY","E",",","\u221e","-","ja","NaN","%","#,##0%","\u2030","+","#E0","0"),"ka",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","GEL","E","\xa0","\u221e","-","ka","\u10d0\u10e0\xa0\u10d0\u10e0\u10d8\u10e1\xa0\u10e0\u10d8\u10ea\u10ee\u10d5\u10d8","%","#,##0%","\u2030","+","#E0","0"),"kk",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","KZT","E","\xa0","\u221e","-","kk","\u0441\u0430\u043d\xa0\u0435\u043c\u0435\u0441","%","#,##0%","\u2030","+","#E0","0"),"km",B.a_("#,##0.00\xa4","#,##0.###",",","KHR","E",".","\u221e","-","km","NaN","%","#,##0%","\u2030","+","#E0","0"),"kn",B.a_("\xa4#,##0.00","#,##0.###",".","INR","E",",","\u221e","-","kn","NaN","%","#,##0%","\u2030","+","#E0","0"),"ko",B.a_("\xa4#,##0.00","#,##0.###",".","KRW","E",",","\u221e","-","ko","NaN","%","#,##0%","\u2030","+","#E0","0"),"ky",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","KGS","E","\xa0","\u221e","-","ky","\u0441\u0430\u043d\xa0\u044d\u043c\u0435\u0441","%","#,##0%","\u2030","+","#E0","0"),"ln",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","CDF","E",".","\u221e","-","ln","NaN","%","#,##0%","\u2030","+","#E0","0"),"lo",B.a_("\xa4#,##0.00;\xa4-#,##0.00","#,##0.###",",","LAK","E",".","\u221e","-","lo","\u0e9a\u0ecd\u0ec8\u200b\u0ec1\u0ea1\u0ec8\u0e99\u200b\u0ec2\u0e95\u200b\u0ec0\u0ea5\u0e81","%","#,##0%","\u2030","+","#","0"),"lt",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","\xd710^","\xa0","\u221e","\u2212","lt","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"lv",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","E","\xa0","\u221e","-","lv","NS","%","#,##0%","\u2030","+","#E0","0"),"mk",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","MKD","E",".","\u221e","-","mk","NaN","%","#,##0%","\u2030","+","#E0","0"),"ml",B.a_("\xa4#,##0.00","#,##,##0.###",".","INR","E",",","\u221e","-","ml","NaN","%","#,##0%","\u2030","+","#E0","0"),"mn",B.a_("\xa4\xa0#,##0.00","#,##0.###",".","MNT","E",",","\u221e","-","mn","NaN","%","#,##0%","\u2030","+","#E0","0"),"mr",B.a_("\xa4#,##0.00","#,##,##0.###",".","INR","E",",","\u221e","-","mr","NaN","%","#,##0%","\u2030","+","[#E0]","\u0966"),"ms",B.a_("\xa4#,##0.00","#,##0.###",".","MYR","E",",","\u221e","-","ms","NaN","%","#,##0%","\u2030","+","#E0","0"),"mt",B.a_("\xa4#,##0.00","#,##0.###",".","EUR","E",",","\u221e","-","mt","NaN","%","#,##0%","\u2030","+","#E0","0"),"my",B.a_("#,##0.00\xa0\xa4","#,##0.###",".","MMK","E",",","\u221e","-","my","\u1002\u100f\u1014\u103a\u1038\u1019\u101f\u102f\u1010\u103a\u101e\u1031\u102c","%","#,##0%","\u2030","+","#E0","\u1040"),"nb",B.a_("\xa4\xa0#,##0.00","#,##0.###",",","NOK","E","\xa0","\u221e","\u2212","nb","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"ne",B.a_("\xa4\xa0#,##0.00","#,##0.###",".","NPR","E",",","\u221e","-","ne","NaN","%","#,##0%","\u2030","+","#E0","\u0966"),"nl",B.a_("\xa4\xa0#,##0.00;\xa4\xa0-#,##0.00","#,##0.###",",","EUR","E",".","\u221e","-","nl","NaN","%","#,##0%","\u2030","+","#E0","0"),"no",B.a_("\xa4\xa0#,##0.00","#,##0.###",",","NOK","E","\xa0","\u221e","\u2212","no","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"no_NO",B.a_("\xa4\xa0#,##0.00","#,##0.###",",","NOK","E","\xa0","\u221e","\u2212","no_NO","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"or",B.a_("\xa4\xa0#,##,##0.00","#,##,##0.###",".","INR","E",",","\u221e","-","or","NaN","%","#,##,##0%","\u2030","+","#E0","0"),"pa",B.a_("\xa4\xa0#,##,##0.00","#,##,##0.###",".","INR","E",",","\u221e","-","pa","NaN","%","#,##,##0%","\u2030","+","[#E0]","0"),"pl",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","PLN","E","\xa0","\u221e","-","pl","NaN","%","#,##0%","\u2030","+","#E0","0"),"ps",B.a_("#,##0.00\xa0\xa4","#,##0.###","\u066b","AFN","\xd7\u06f1\u06f0^","\u066c","\u221e","\u200e-\u200e","ps","NaN","\u066a","#,##0%","\u0609","\u200e+\u200e","#E0","\u06f0"),"pt",B.a_("\xa4\xa0#,##0.00","#,##0.###",",","BRL","E",".","\u221e","-","pt","NaN","%","#,##0%","\u2030","+","#E0","0"),"pt_BR",B.a_("\xa4\xa0#,##0.00","#,##0.###",",","BRL","E",".","\u221e","-","pt_BR","NaN","%","#,##0%","\u2030","+","#E0","0"),"pt_PT",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","E","\xa0","\u221e","-","pt_PT","NaN","%","#,##0%","\u2030","+","#E0","0"),"ro",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","RON","E",".","\u221e","-","ro","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"ru",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","RUB","E","\xa0","\u221e","-","ru","\u043d\u0435\xa0\u0447\u0438\u0441\u043b\u043e","%","#,##0\xa0%","\u2030","+","#E0","0"),"si",B.a_("\xa4#,##0.00","#,##0.###",".","LKR","E",",","\u221e","-","si","NaN","%","#,##0%","\u2030","+","#","0"),"sk",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","e","\xa0","\u221e","-","sk","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"sl",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","EUR","e",".","\u221e","\u2212","sl","NaN","%","#,##0\xa0%","\u2030","+","#E0","0"),"sq",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","ALL","E","\xa0","\u221e","-","sq","NaN","%","#,##0%","\u2030","+","#E0","0"),"sr",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","RSD","E",".","\u221e","-","sr","NaN","%","#,##0%","\u2030","+","#E0","0"),"sr_Latn",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","RSD","E",".","\u221e","-","sr_Latn","NaN","%","#,##0%","\u2030","+","#E0","0"),"sv",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","SEK","\xd710^","\xa0","\u221e","\u2212","sv","\xa4\xa4\xa4","%","#,##0\xa0%","\u2030","+","#E0","0"),"sw",B.a_("\xa4#,##0.00","#,##0.###",".","TZS","E",",","\u221e","-","sw","NaN","%","#,##0%","\u2030","+","#E0","0"),"ta",B.a_("\xa4\xa0#,##,##0.00","#,##,##0.###",".","INR","E",",","\u221e","-","ta","NaN","%","#,##,##0%","\u2030","+","#E0","0"),"te",B.a_("\xa4#,##,##0.00","#,##,##0.###",".","INR","E",",","\u221e","-","te","NaN","%","#,##0%","\u2030","+","#E0","0"),"th",B.a_("\xa4#,##0.00","#,##0.###",".","THB","E",",","\u221e","-","th","NaN","%","#,##0%","\u2030","+","#E0","0"),"tl",B.a_("\xa4#,##0.00","#,##0.###",".","PHP","E",",","\u221e","-","tl","NaN","%","#,##0%","\u2030","+","#E0","0"),"tr",B.a_("\xa4#,##0.00","#,##0.###",",","TRY","E",".","\u221e","-","tr","NaN","%","%#,##0","\u2030","+","#E0","0"),"uk",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","UAH","\u0415","\xa0","\u221e","-","uk","NaN","%","#,##0%","\u2030","+","#E0","0"),"ur",B.a_("\xa4\xa0#,##0.00","#,##0.###",".","PKR","E",",","\u221e","\u200e-","ur","NaN","%","#,##0%","\u2030","\u200e+","#E0","0"),"uz",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","UZS","E","\xa0","\u221e","-","uz","son\xa0emas","%","#,##0%","\u2030","+","#E0","0"),"vi",B.a_("#,##0.00\xa0\xa4","#,##0.###",",","VND","E",".","\u221e","-","vi","NaN","%","#,##0%","\u2030","+","#E0","0"),"zh",B.a_("\xa4#,##0.00","#,##0.###",".","CNY","E",",","\u221e","-","zh","NaN","%","#,##0%","\u2030","+","#E0","0"),"zh_CN",B.a_("\xa4#,##0.00","#,##0.###",".","CNY","E",",","\u221e","-","zh_CN","NaN","%","#,##0%","\u2030","+","#E0","0"),"zh_HK",B.a_("\xa4#,##0.00","#,##0.###",".","HKD","E",",","\u221e","-","zh_HK","\u975e\u6578\u503c","%","#,##0%","\u2030","+","#E0","0"),"zh_TW",B.a_("\xa4#,##0.00","#,##0.###",".","TWD","E",",","\u221e","-","zh_TW","\u975e\u6578\u503c","%","#,##0%","\u2030","+","#E0","0"),"zu",B.a_("\xa4#,##0.00","#,##0.###",".","ZAR","E",",","\u221e","-","zu","NaN","%","#,##0%","\u2030","+","#E0","0")])},$,"Ni","$get$Ni",function(){return P.a1(["ADP",0,"AFN",0,"ALL",0,"AMD",0,"BHD",3,"BIF",0,"BYN",2,"BYR",0,"CAD",2,"CHF",2,"CLF",4,"CLP",0,"COP",0,"CRC",2,"CZK",2,"DEFAULT",2,"DJF",0,"DKK",2,"ESP",0,"GNF",0,"GYD",0,"HUF",2,"IDR",0,"IQD",0,"IRR",0,"ISK",0,"ITL",0,"JOD",3,"JPY",0,"KMF",0,"KPW",0,"KRW",0,"KWD",3,"LAK",0,"LBP",0,"LUF",0,"LYD",3,"MGA",0,"MGF",0,"MMK",0,"MNT",0,"MRO",0,"MUR",0,"NOK",2,"OMR",3,"PKR",0,"PYG",0,"RSD",0,"RWF",0,"SEK",2,"SLL",0,"SOS",0,"STD",0,"SYP",0,"TMM",0,"TND",3,"TRL",0,"TWD",2,"TZS",0,"UGX",0,"UYI",0,"UZS",0,"VND",0,"VUV",0,"XAF",0,"XOF",0,"XPF",0,"YER",0,"ZMK",0,"ZWD",0])},$])}
$dart_deferred_initializers$["9outPka7XhKixocuVz3aMaKXW+8="]=$dart_deferred_initializers$.current
