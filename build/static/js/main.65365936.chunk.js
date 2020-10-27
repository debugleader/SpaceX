(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(e,c,n){},56:function(e,c,n){},58:function(e,c,n){"use strict";n.r(c);var t=n(4),s=n(2),a=n.n(s),r=n(34),l=n.n(r),i=(n(47),n(41)),j=n(8),u=n(22),h=n(19),m=n.n(h),d=n(59),o=n(35),b=n.n(o),x=n(23),O=n.n(x),g=n(20),p=function(e){var c=e.launch,n=c.flight_number,s=c.mission_name,a=c.launch_date_local,r=c.launch_success;return Object(t.jsx)("div",{className:"card card-body mb-3 ml-5 mr-5",children:Object(t.jsxs)("div",{className:"row",children:[Object(t.jsxs)("div",{className:"col-md-9",children:[Object(t.jsxs)("h4",{children:["Mission:"," ",Object(t.jsx)("span",{className:O()({"text-success":r,"text-danger":!r}),children:s})]}),Object(t.jsxs)("p",{children:["Date: ",Object(t.jsx)(b.a,{format:"YYYY-MM-DD HH:mm",children:a})]})]}),Object(t.jsx)("div",{className:"col-md-3",children:Object(t.jsx)(g.b,{to:"/launch/".concat(n),className:"btn btn-secondary ml-5",style:{padding:"1.5vw"},children:"Launch Details"})})]})})};function _(){var e=Object(u.a)(["\n  query LaunchesQuery {\n    launches {\n      flight_number\n      mission_name\n      launch_date_local\n      launch_success\n    }\n  }\n"]);return _=function(){return e},e}var f=m()(_()),y=function(){return Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(d.a,{query:f,children:function(e){var c=e.loading,n=e.error,s=e.data;return c?Object(t.jsx)("h4",{style:{textAlign:"center"},children:"Loading..."}):(n&&console.log(n),Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)("div",{className:"cardo",children:Object(t.jsxs)("div",{className:"my-3",style:{marginLeft:55},children:[Object(t.jsxs)("p",{children:[Object(t.jsx)("span",{style:{borderRadius:8},className:"px-3 mr-2 bg-success"})," ","= Success"]}),Object(t.jsxs)("p",{children:[Object(t.jsx)("span",{style:{borderRadius:8},className:"px-3 mr-2 bg-danger"})," ","= Fail"]})]})}),s.launches.map((function(e){return Object(t.jsx)(p,{launch:e},e.flight_number)}))]}))}})})};n(56);function N(){var e=Object(u.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return N=function(){return e},e}var v=m()(N()),k=function(e){var c=e.match.params.flight_number;return c=parseInt(c),Object(t.jsx)(t.Fragment,{children:Object(t.jsx)(d.a,{query:v,variables:{flight_number:c},children:function(e){var c=e.loading,n=e.error,s=e.data;if(c)return Object(t.jsx)("h4",{style:{textAlign:"center"},children:"Loading..."});n&&console.log(n);var a=s.launch,r=a.mission_name,l=a.flight_number,i=a.launch_year,j=a.launch_success,u=a.rocket,h=u.rocket_id,m=u.rocket_name,d=u.rocket_type;return Object(t.jsxs)("div",{children:[Object(t.jsxs)("h1",{className:"display-4 my-3",style:{textAlign:"center"},children:[Object(t.jsx)("span",{className:"text-dark",children:"Mission:"})," ",r]}),Object(t.jsx)("h4",{className:"mb-3",style:{textAlign:"center"},children:"Launch Details"}),Object(t.jsxs)("ul",{className:"list-group mr-5 ml-5",children:[Object(t.jsxs)("li",{className:"list-group-item",children:["Flight Number: ",l]}),Object(t.jsxs)("li",{className:"list-group-item",children:["Launch Year: ",i]}),Object(t.jsxs)("li",{className:"list-group-item",children:["Launch Successful:"," ",Object(t.jsx)("span",{className:O()({"text-success":j,"text-danger":!j}),children:j?"Yes":"No"})]})]}),Object(t.jsx)("h4",{className:"my-3",style:{textAlign:"center"},children:"Rocket Details"}),Object(t.jsxs)("ul",{className:"list-group mr-5 ml-5",children:[Object(t.jsxs)("li",{className:"list-group-item",children:["Rocket ID: ",h]}),Object(t.jsxs)("li",{className:"list-group-item",children:["Rocket Name: ",m]}),Object(t.jsxs)("li",{className:"list-group-item",children:["Rocket Type: ",d]})]}),Object(t.jsx)("div",{style:{textAlign:"center",marginBottom:20,marginTop:30},children:Object(t.jsx)(g.b,{to:"/",className:"btn btn-secondary",style:{textAlign:"center",fontSize:23},children:"Back"})})]})}})})},L=n(7),A=new i.a({uri:"/graphql"});var D=function(){return Object(t.jsx)(j.a,{client:A,children:Object(t.jsxs)(g.a,{children:[Object(t.jsx)("div",{className:"container",children:Object(t.jsx)("h1",{className:"title",children:"SpaceX"})}),Object(t.jsx)(L.a,{exact:!0,path:"/",component:y}),Object(t.jsx)(L.a,{exact:!0,path:"/launch/:flight_number",component:k})]})})};l.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(D,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.65365936.chunk.js.map