(this.webpackJsonpchan=this.webpackJsonpchan||[]).push([[0],{104:function(t,e,n){},128:function(t,e,n){},129:function(t,e,n){},171:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),s=n(27),r=n.n(s),i=(n(128),n(37)),o=n(38),l=n(41),j=n(40),h=n(61),u=n(22),d=(n(90),n(174)),b=n(180),p=(n(129),n(6)),O=d.a.Header,x=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(O,{className:"header",children:[Object(p.jsx)("div",{className:"logo"}),Object(p.jsxs)(b.a,{theme:"dark",className:"he",mode:"horizontal",defaultSelectedKeys:[this.props.children],children:[Object(p.jsx)(b.a.Item,{children:Object(p.jsx)(h.b,{to:"/new2",children:"Home"})},"1"),Object(p.jsx)(b.a.Item,{children:Object(p.jsx)(h.b,{to:"/new2/About",children:"About"})},"2"),Object(p.jsx)(b.a.Item,{children:Object(p.jsx)(h.b,{to:"/new2/Contact",children:"Contact"})},"3")]})]})})}}]),n}(c.Component),v=n(177),f=n(111),m=n(176),g=n(121),y=n(48),C=n.n(y);C.a.defaults.baseURL="https://frozen-plateau-78919.herokuapp.com/";var S=v.a.Meta,k=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={dat:[],s:!0},t.oc=function(t){C.a.post("/del",t).then((function(t,e){console.log(e)}))},t}return Object(o.a)(n,[{key:"componentDidUpdate",value:function(){var t=this;C.a.get("/ge").then((function(e){t.setState({dat:e.data,s:!1})}))}},{key:"componentDidMount",value:function(){var t=this;console.log(this.state.dat),C.a.get("/ge").then((function(e){t.setState({dat:e.data})}))}},{key:"render",value:function(){var t=this;return Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{children:"2"}),Object(p.jsx)("center",{children:Object(p.jsx)("h1",{children:"About"})}),Object(p.jsx)("center",{children:this.state.s?Object(p.jsx)(f.a,{size:"large"}):Object(p.jsx)(m.b,{grid:{xs:1,sm:2,md:3,lg:4,xl:5,xxl:3},dataSource:this.state.dat,renderItem:function(e){return Object(p.jsx)(m.b.Item,{actions:[Object(p.jsx)(g.a,{onClick:function(){t.oc(e)},children:"delete"})],children:Object(p.jsxs)(v.a,{hoverable:!0,style:{width:240},cover:Object(p.jsx)("img",{alt:"example",src:"https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"}),children:[Object(p.jsx)(S,{title:e.pname,description:"Rs."+e.price}),e.pdesc]})})}})})]})}}]),n}(c.Component),w=n(178);n(103),n(104);C.a.defaults.baseURL="https://frozen-plateau-78919.herokuapp.com/";var I=w.a.TextArea,z=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={pn:"",pv:"",pd:""},t.cn=function(e){t.setState({pn:e.target.value})},t.cv=function(e){t.setState({pv:e.target.value})},t.cd=function(e){t.setState({pd:e.target.value})},t.x=function(){var e=t.state;C.a.post("/Add",e).then((function(t){console.log(t)})),t.setState({pn:"",pv:"",pd:""})},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{children:"3"}),Object(p.jsx)("center",{children:Object(p.jsx)("h1",{children:"Contact"})}),Object(p.jsx)("p",{children:"Enter product name:"}),Object(p.jsx)(w.a,{type:"text",name:"username",value:this.state.pn,onChange:this.cn}),Object(p.jsx)("p",{children:"Enter Price:"}),Object(p.jsx)(w.a,{type:"text",name:"age",value:this.state.pv,onChange:this.cv}),Object(p.jsx)("p",{children:"Enter Desc:"}),Object(p.jsx)(I,{rows:4,name:"age",value:this.state.pd,onChange:this.cd}),Object(p.jsx)(g.a,{onClick:this.x,children:"Submit"})]})}}]),n}(c.Component),A=n(179),q=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={g:[],qn:[],c1:[],c2:[],c3:[],c4:[],crt:[],z:[]},t.inpu=function(e){var n=e.target;console.log(n),Object(A.a)(n.files[0]).then((function(e){for(var n=0;n<e.length;n++){var c=e[n],a=t.state.qn,s=t.state.c1,r=t.state.c2,i=t.state.c3,o=t.state.c4,l=t.state.crt;a.push(c[1]),s.push(c[2]),r.push(c[3]),i.push(c[4]),o.push(c[5]),l.push(c[6]),t.setState({qn:a}),t.setState({c1:s}),t.setState({c2:r}),t.setState({c3:i}),t.setState({c4:o}),t.setState({crt:l})}console.log("hellllllllllllllo",e)}))},t.hh=function(){for(var e=t.state.qn,n=t.state.c1,c=t.state.c2,a=t.state.c3,s=t.state.c4,r=t.state.crt,i=0;i<e.length;i++){var o=t.state.z,l={question:e[i],option1r:[n[i],c[i],a[i],s[i]],crt:r[i]};o.push(l),t.setState({z:o})}console.log(o)},t}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(x,{children:"1"}),Object(p.jsxs)("div",{className:"hme",children:[Object(p.jsx)(w.a,{type:"file",onChange:this.inpu}),Object(p.jsx)(g.a,{onClick:this.hh,children:"click"}),Object(p.jsx)(m.b,{itemLayout:"horizontal",dataSource:this.state.z,renderItem:function(t){return Object(p.jsxs)(m.b.Item,{children:[Object(p.jsx)(m.b.Item.Meta,{title:Object(p.jsx)("p",{children:t.question}),description:Object(p.jsx)("p",{children:Object(p.jsx)("font",{color:"red",children:t.option1r[t.crt-1]})})}),Object(p.jsx)("div",{children:t.crt})]})}})]})]})}}]),n}(c.Component),L=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(p.jsx)(h.a,{children:Object(p.jsx)("div",{children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{exact:!0,path:"/new2",component:q}),Object(p.jsx)(u.a,{path:"/new2/About",component:k}),Object(p.jsx)(u.a,{path:"/new2/Contact",component:z})]})})})}}]),n}(c.Component),D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,182)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),s(t),r(t)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(L,{})}),document.getElementById("root")),D()}},[[171,1,2]]]);
//# sourceMappingURL=main.63620518.chunk.js.map