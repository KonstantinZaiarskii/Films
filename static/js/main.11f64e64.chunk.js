(this.webpackJsonpspa_films=this.webpackJsonpspa_films||[]).push([[0],{132:function(e,t,n){},170:function(e,t,n){"use strict";n.r(t);var c,a=n(0),i=n.n(a),r=n(61),s=n.n(r),l=n(20),o=(n(132),n(3)),j=n(16),d=n.p+"static/media/Logo.6a326c18.svg",b=function(){return"/"},m=n(227),u=n(216),O=n(206),f=n(114),h=Object(u.a)((function(e){var t,n,c,a,i=Object(f.a)();return Object(O.a)((a={container:(t={backgroundColor:"#fff",borderRadius:10,padding:"40px 90px",color:"#000"},Object(o.a)(t,i.breakpoints.down("lg"),{padding:"40px 30px"}),Object(o.a)(t,i.breakpoints.down("sm"),{padding:5}),t),header:{backgroundColor:"#3A3A3A"},burger:Object(o.a)({display:" none"},i.breakpoints.down("md"),{display:"block"}),modal:{position:"absolute",top:55,right:0,width:108,border:"#000 1px solid",height:325,textAlign:"center",backgroundColor:"#fff"},linkActive:{color:" rgb(36, 36, 36)"},text_title:{marginBottom:50},paragraph__title:{color:" #fff",textAlign:"center",fontWeight:"bold",fontSize:30},offer:Object(o.a)({padding:" 120px 0 40px 0",display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",width:"100%"},i.breakpoints.down("sm"),{padding:" 170px 0 40px 0"}),nav:Object(o.a)({display:"flex",gap:20},i.breakpoints.down("md"),{display:"none",position:"fixed"}),navModal:Object(o.a)({display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:20},i.breakpoints.up("md"),{display:"none",gap:10}),overlay:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:50,background:"rgb(41 47 47 / 50%)",opacity:2.1},title:(n={color:"#E59C9C",fontWeight:"bold",marginBottom:i.spacing(6),textAlign:"center"},Object(o.a)(n,"marginBottom",5),Object(o.a)(n,i.breakpoints.down("sm"),{fontSize:30}),n)},Object(o.a)(a,"paragraph__title",Object(o.a)({color:"#fff"},i.breakpoints.down("sm"),{fontSize:16})),Object(o.a)(a,"newsCard",{maxWidth:180,width:"100%",minHeight:380,color:"#000"}),Object(o.a)(a,"card",{display:"flex",flexWrap:"wrap",justifyContent:"center",gridGap:10}),Object(o.a)(a,"preloader",{margin:"0 auto",textAlign:"center",display:"block"}),Object(o.a)(a,"filmsDetail",(c={alignItems:"center",backgroundColor:"#fff",borderRadius:10,padding:"40px 90px"},Object(o.a)(c,i.breakpoints.down("lg"),{justifyContent:"center"}),Object(o.a)(c,i.breakpoints.down("sm"),{padding:5}),c)),Object(o.a)(a,"filmsDetail__block",Object(o.a)({display:"flex",justifyContent:"space-between",marginLeft:"auto",fontWeight:"bold",flexBasis:"30%"},i.breakpoints.down("lg"),{flexBasis:"100%",justifyContent:"center"})),Object(o.a)(a,"filmsDetail__summary",{marginBottom:30}),Object(o.a)(a,"star",{display:"flex",alignItems:"center",gap:10}),Object(o.a)(a,"description",{display:"flex",flexDirection:"column",gap:14,marginTop:20}),Object(o.a)(a,"filmsCategory_card",{maxWidth:310,width:"100%",minHeight:200}),Object(o.a)(a,"contacts__content",{display:"flex",gap:20,justifyContent:"space-evenly",flexDirection:"column"}),Object(o.a)(a,"contacts__block",Object(o.a)({},i.breakpoints.down("md"),{justifyContent:"center",gap:30})),Object(o.a)(a,"contacts__img",Object(o.a)({maxWidth:500,backgroundSize:"cover",backgroundRepeat:"no-repeat",display:"flex",flexDirection:"column",justifyContent:"center"},i.breakpoints.down("sm"),{width:"100%"})),Object(o.a)(a,"search",{display:"flex",flexDirection:"column",justifyContent:"space-evenly",gap:30}),Object(o.a)(a,"footer",{backgroundColor:"#3A3A3A",color:"#fff",padding:"25px 0",textAlign:"center",justifyContent:"center"}),Object(o.a)(a,"footer__grid",Object(o.a)({justifyContent:"space-around"},i.breakpoints.down("sm"),{flexDirection:"column"})),a))})),x=n(1),p=function(e){var t=e.title,n=e.paragraph,c=h();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(m.a,{variant:"h2",className:c.title,children:t}),Object(x.jsx)(m.a,{variant:"h4",className:c.paragraph__title,children:n})]})},g=n(223),v=function(){var e=h();return Object(x.jsx)(g.a,{maxWidth:"lg",children:Object(x.jsx)("section",{className:e.text_title,children:Object(x.jsx)(p,{title:"MOVIESinfo",paragraph:"\u0421\u0430\u043c\u044b\u0439 \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0439 \u043f\u043e\u0440\u0442\u0430\u043b \u043e \u0444\u0438\u043b\u044c\u043c\u0430\u0445"})})})},y=n(38),A=n(50),C=n.n(A),w=n(69),N=n(70),k=n.n(N),D=function(){return k.a.request({method:"GET",url:"https://api.tvmaze.com/shows?q=animals"})},W=function(){return function(){var e=Object(w.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D();case 3:n=e.sent,t({type:"films/setFilms",payload:n.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0,"\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},B=function(e){return e.filmsReducer.list},_=n(6),S=n(228),R=n(35),E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":id";return"/filmDetail/".concat(e)},I=n(17),F=function(e){var t=new Date(e.replace("Z","").replace("T",""));return{day:t.getDate(),month:t.getMonth()+1,year:t.getFullYear()}},T=function(e){var t=e.value,n=F(t),c=(n.day,n.month,n.year);return Object(x.jsxs)("div",{style:{display:"flex",gap:10},className:"date-view",children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"\u0413\u043e\u0434 \u0432\u044b\u0445\u043e\u0434\u0430 : "}),Object(x.jsx)("span",{className:"year",children:c})]})},Y=function(e){var t={method:"GET",url:"https://api.tvmaze.com/shows/".concat(e)};return k.a.request(t)},L=function(e){return e.filmsReducerId.filmDetail},M=n(222),z=n(27),V=n(71),q=n.n(V),Z=Object(z.css)(c||(c=Object(R.a)(["\n\tdisplay: block;\n\tmargin: 0 auto;\n\tborder-color: red;\n"]))),H=function(){var e=h(),t=Object(I.g)().id,n=Object(y.b)(),c=Object(y.c)(L);return Object(a.useEffect)((function(){n(function(e){return function(){var t=Object(w.a)(C.a.mark((function t(n){var c;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Y(e);case 3:c=t.sent,n({type:"filmsDetail/setFilmsDetail",payload:c.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0,"\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[]),Object(x.jsx)("div",{className:"filmDetail",children:null===c?Object(x.jsx)(q.a,{css:Z,color:"#36D7B7",size:100}):Object(x.jsxs)(M.a,{container:!0,className:e.filmsDetail,children:[Object(x.jsx)(M.a,{item:!0,lg:4,className:e.filmsDetail__block,children:Object(x.jsx)("img",{style:{width:230},className:e.filmsDetail__summary,src:c.image.medium,alt:"film"})}),Object(x.jsxs)(M.a,{item:!0,lg:8,children:[Object(x.jsxs)("div",{className:e.filmsDetail__block,children:[Object(x.jsx)("div",{className:"name",children:Object(x.jsx)(m.a,{style:{color:"#E59C9C"},variant:"h4",className:"filmDetail__title",children:c.name})}),Object(x.jsxs)("div",{className:e.star,children:[Object(x.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPqSURBVHgB1ZldaBxVFMf/Z2d3ZrGIQrHV0mDXRlObRvSpfqT7EWuVoo/mQdGCL1pE2gcVn2z0TfDFR99EfdIXHwSpFLYbUykUFaoWpKmopaJBMbVfmdnNnP5nS0uT7u69m7mTpD/Y7OzcM3f+c+655565ARyjjcKr2gim+P0SHCNwiB7BOrSC73i4kb9mEUclqWEWjsjBJS1/L9pCE+R2iP8aHOLMszqBPKrBNHu8+7qziXcH6N3zcIA7z9YKzy8UmpB4N78XjnAnVnMTHc/nvP2qbkbQiVjO/D2Us6lzIzZg0n8WDnDjWc29brDYBwekFqvfBE/Rq9t6W8mjWs9XkZL0np3Hm1Z24h1ASlKJ1UZxjF6tWRkLqjqZryAF6Tyr+kp/9t7bSMGSU4oeCTajhWn0ixc/IqPNo1gCfYnVz+Bjvb+ZV22lV1/mwDyBvtGjEJlAIZ7FweYxHsW2V3YUq4fWrIcXDTBIhiG5RNgwTfnpkkvToDjFv6eR02OI9UeInsJccVqePD+z2FS04Y8A8S7myiT9bOVTD/D7Lqw8//BJTvJhTlLfTwhan1NscIYNG7Dq0f+SbBDhpkDO5ljY7eTRn1jdnGHm2dmeYDoVDHFOTjI+1mH1McNVsixj4S/XsoHW/W2c/Yfp7rVYNei/8FCR0ejn5NeC1KWT/gP07hRP34oVh28ZQqHl6PjVMwuW23aD6uMU/DdWEsVfLHyevl5oQudFYcofZkA3mHNXICQ49MIYLUcnFrd0LGTaMSLKpVTPYlnR/3nfXZ2EJnStuqTS/AF5GWcHF7FciIxLufl9t+aeJaI8Fn7NIUneWrNeOJqc9bulHB7sZWSsZzkkX9C7zyFLVPfIaPiVycyu+PbyfyBL8jhuY2YnNp7PNiu0WO1ZYClWtyNLBEM2ZnZiRR5ClqhLz0LvQJYIRmzMLMXKw8gSlXttzIxiWY1t4TC53cddjCDgzs49JjOziLxsxHLQbBlDwSx2Xsvoh2S1U9TRL573oMnELFbar+B2KL6k2PulGo4hlhJXpk9hT8lkYBOLxliiwMOYlypFPiM7wl/bp2pzv0k1eoF3GKJo8w6Myqj5Nr2u/xAFDAUs21DsYnKCYvZR4CGYtDQKL3Jv4p3um856ARejtbIbYbc+ent2iz/YWShfOaBvoR6O2AhNYMn5MWbCQR7uZ5+/32gga3Bb8c5efRjCYHH+03McrncR31KSSvReP/tU7d7GGSyV8AN6eAd/vs/PQi+24u1LFyuSvClcEST6CZpBSapzB6Q2m+ofcVK5dJqi3+AkZA7Xj641FOyqr67ot8EgE/Z9yBBuSpe0XtxksrsM7PEuvtV5FRsAAAAASUVORK5CYII=",alt:"star"}),c.rating.average,"\\10"]})]}),Object(x.jsxs)("div",{className:e.description,children:[Object(x.jsx)("div",{style:{textAlign:"start"},className:"year",children:Object(x.jsx)(T,{value:c.premiered})}),Object(x.jsxs)("div",{style:{textAlign:"start"},className:"year",children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"\u0421\u0442\u0440\u0430\u043d\u0430 :"})," ",c.network.country.name]}),Object(x.jsxs)("div",{style:{textAlign:"start"},className:"year",children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"\u0416\u0430\u043d\u0440 :"})," ",c.genres.join(", ")]}),Object(x.jsxs)("div",{style:{textAlign:"start"},className:"year",children:[Object(x.jsx)("span",{style:{fontWeight:"bold"},children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 :"})," ",c.summary]})]})]})]})})},P=n(230),U=function(e){var t,n,c,a=e.item,i=h();return Object(x.jsx)(S.a,{className:i.newsCard,variant:"outlined",children:Object(x.jsx)(l.b,{to:E(a.id),children:Object(x.jsxs)(P.a,{className:"newsCard__content",children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{style:{borderRadius:10},src:"".concat(null===a||void 0===a||null===(t=a.image)||void 0===t?void 0:t.medium),alt:"img"})}),Object(x.jsx)(m.a,{style:{marginTop:20,marginBottom:20},variant:"h5",children:a.name}),Object(x.jsx)("div",{className:"genres",style:{marginTop:20,marginBottom:20},children:Object(x.jsx)(m.a,{variant:"body2",children:a.genres.join(", ")})}),Object(x.jsx)(m.a,{children:"".concat(null===a||void 0===a||null===(n=a.network)||void 0===n||null===(c=n.country)||void 0===c?void 0:c.name)})]})})})},X=function(e){var t=e.list,n=h();return Object(x.jsx)("div",{className:Object(_.a)(n.card,"newClass"),children:t.map((function(e){return Object(x.jsx)(U,{item:e},e.id)}))})},G=function(){var e=h(),t=Object(y.b)(),n=Object(y.c)(B);return Object(a.useEffect)((function(){t(W())}),[t]),Object(x.jsx)("div",{className:Object(_.a)(e.preloader,"main-page"),children:0===n.length?Object(x.jsx)(q.a,{color:"#36D7B7",size:50}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsx)("div",{className:e.container,children:n.length>0&&Object(x.jsx)(X,{list:n.slice(0,10)})})]})})},J=function(){return"/filmList"},K=n(34),Q=n(231),$=n(224),ee=function(e){return Object(x.jsxs)($.a,{sx:{position:"relative",display:"inline-flex"},children:[Object(x.jsx)(Q.a,Object(K.a)({variant:"determinate"},e)),Object(x.jsx)($.a,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(x.jsx)(m.a,{variant:"caption",component:"div",color:"text.secondary",children:"".concat(Math.round(e.value),"%")})})]})},te=function(e){var t,n=e.item,c=h();return Object(x.jsx)(S.a,{variant:"outlined",className:c.filmsCategory_card,children:Object(x.jsx)(l.b,{to:E(n.id),children:Object(x.jsxs)(P.a,{className:"newsCard__content",children:[Object(x.jsx)("div",{children:Object(x.jsx)("img",{style:{borderRadius:10},src:"".concat(null===n||void 0===n||null===(t=n.image)||void 0===t?void 0:t.medium),alt:"img"})}),Object(x.jsx)(m.a,{style:{marginTop:20,marginBottom:20},variant:"h5",children:n.name}),Object(x.jsx)("div",{className:"genres",style:{marginTop:20,marginBottom:20},children:Object(x.jsx)(m.a,{variant:"body2",children:n.genres.join(", ")})})]})})})},ne=function(e){var t=e.list,n=h();return Object(x.jsx)("div",{className:Object(_.a)(n.card,"newClass"),children:t.map((function(e){return Object(x.jsx)(te,{item:e},e.id)}))})},ce=function(){for(var e=h(),t=i.a.useState(10),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(y.b)(),l=Object(y.c)(B),o=0;o<l.length;o++){var d=l[o];console.log(d)}return console.log(l),Object(a.useEffect)((function(){s(W())}),[s]),Object(a.useEffect)((function(){var e=setInterval((function(){r((function(e){return e>=100?0:e+10}))}),800);return function(){clearInterval(e)}}),[]),Object(x.jsx)("div",{className:Object(_.a)(e.preloader,"Films"),children:0===l.length?Object(x.jsx)(ee,{value:c}):Object(x.jsxs)("div",{className:e.container,children:[Object(x.jsxs)("p",{children:["\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0436\u0430\u043d\u0440\u044b:",l[0].genres.join(", ")]}),l.length>0&&Object(x.jsx)(ne,{list:l})]})})},ae=function(){return"/contacts"},ie=n.p+"static/media/img_contacts.6d3a97e7.png",re=function(){var e=h();return Object(x.jsx)("div",{className:e.container,children:Object(x.jsxs)(M.a,{container:!0,className:e.contacts__block,children:[Object(x.jsx)(M.a,{item:!0,md:6,style:{display:"flex"},children:Object(x.jsx)("div",{className:e.contacts__img,children:Object(x.jsx)("img",{src:ie,alt:"emma"})})}),Object(x.jsx)(M.a,{item:!0,md:6,children:Object(x.jsxs)("div",{className:e.contacts__content,children:[Object(x.jsx)("h2",{children:"MOVIESinfo"}),Object(x.jsx)(m.a,{variant:"body1",children:"\u0412\u0441\u0435 \u043a\u0438\u043d\u043e\u0437\u0430\u043b\u044b \u043e\u0441\u043d\u0430\u0449\u0435\u043d\u044b \u0448\u0438\u0440\u043e\u043a\u043e\u0444\u043e\u0440\u043c\u0430\u0442\u043d\u044b\u043c\u0438 \u044d\u043a\u0440\u0430\u043d\u0430\u043c\u0438, \u043f\u0435\u0440\u0435\u0434\u043e\u0432\u043e\u0439 \u0430\u043a\u0443\u0441\u0442\u0438\u043a\u043e\u0439 \u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u043e\u0439 Bass Shaker. \u0424\u043e\u0439\u0435 \u043a\u0438\u043d\u043e\u043f\u043b\u0435\u043a\u0441\u0430 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0432 \u0441\u0442\u0438\u043b\u0435 \u0444\u0430\u043d\u0442\u0430\u0441\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0448\u0430\u0442\u0442\u043b\u0430, \u0433\u0434\u0435 \u043e\u0433\u0440\u043e\u043c\u043d\u0430\u044f \u0441\u0442\u043e\u0439\u043a\u0430 \u0441 \u043a\u0438\u043d\u043e\u043a\u0430\u0441\u0441\u0430\u043c\u0438 \u043d\u0430\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442 \u043f\u0443\u043d\u043a\u0442 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u0441\u043c\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u0440\u0430\u0431\u043b\u044f. \u0414\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0433\u043e\u0441\u0442\u0435\u0439 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 5 \u043a\u0430\u0441\u0441 \u043e\u0431\u0441\u043b\u0443\u0436\u0438\u0432\u0430\u043d\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u043c\u0438\u043d\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043e\u0447\u0435\u0440\u0435\u0434\u0435\u0439 \u0437\u0430 \u0431\u0438\u043b\u0435\u0442\u0430\u043c\u0438."}),Object(x.jsx)(m.a,{variant:"body1",children:"\u0412 \u0444\u043e\u0439\u0435, \u0430 \u0442\u0430\u043a\u0436\u0435 \u043f\u0440\u0435\u0434\u0448\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0430\u043b\u043b\u0435\u0435 IMAX \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0442 \u043a\u0438\u043d\u043e\u0431\u0430\u0440\u044b, \u0433\u0434\u0435 \u043f\u043e \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u043c \u0446\u0435\u043d\u0430\u043c \u043c\u043e\u0436\u043d\u043e \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0441\u0442\u0438 \u043f\u043e\u043f-\u043a\u043e\u0440\u043d, \u0441\u043d\u0435\u043a\u0438, \u0437\u0430\u043a\u0443\u0441\u043a\u0438 \u0438 \u043d\u0430\u043f\u0438\u0442\u043a\u0438. \u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0440\u044f\u0434\u043e\u043c \u0441 \u043a\u0438\u043d\u043e\u043a\u0430\u0441\u0441\u0430\u043c\u0438 \u043d\u0430\u0445\u043e\u0434\u044f\u0442\u0441\u044f \u0443\u044e\u0442\u043d\u044b\u0435 \u0437\u043e\u043d\u044b \u043e\u0442\u0434\u044b\u0445\u0430, \u0433\u0434\u0435 \u0433\u043e\u0441\u0442\u0438 \u043c\u043e\u0433\u0443\u0442 \u0441\u043a\u043e\u0440\u043e\u0442\u0430\u0442\u044c \u0432\u0440\u0435\u043c\u044f \u0432 \u043e\u0436\u0438\u0434\u0430\u043d\u0438\u0438 \u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0435\u0430\u043d\u0441\u0430. \u0414\u043b\u044f \u0443\u0434\u043e\u0431\u0441\u0442\u0432\u0430 \u0437\u0440\u0438\u0442\u0435\u043b\u0435\u0439 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0430\u044f \u043a\u0438\u043d\u043e\u043a\u0430\u0441\u0441\u0430 \u0435\u0441\u0442\u044c \u0438 \u0432 \u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043d\u043e\u043c \u0434\u0432\u043e\u0440\u0438\u043a\u0435."})]})})]})})},se=function(){return"/searchPage"},le=n(12),oe=n(210),je=n(217),de=n(109),be=n.n(de),me=Object(le.a)("div")((function(e){var t=e.theme;return Object(o.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(oe.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(oe.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),ue=Object(le.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),Oe=Object(le.a)(je.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(o.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),fe=function(){var e=h();return Object(x.jsxs)("div",{className:e.container,children:[Object(x.jsxs)("div",{className:e.search,children:[Object(x.jsx)(m.a,{variant:"h4",children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(x.jsxs)(me,{style:{color:"#000",border:"1px solid #000",borderRadius:10},children:[Object(x.jsx)(ue,{children:Object(x.jsx)(be.a,{})}),Object(x.jsx)(Oe,{placeholder:"Search\u2026",inputProps:{"aria-label":"search"}})]}),Object(x.jsx)(m.a,{variant:"body1",children:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b \u043f\u043e\u0438\u0441\u043a\u0430 :"})]}),Object(x.jsx)(m.a,{style:{color:"#ff8a8a",margin:"50px auto 0 ",width:150},variant:"body2",children:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441 \u0434\u043b\u044f \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"})]})},he=n(225),xe=n(226),pe=n(218),ge=n(110),ve=n.n(ge),ye=n(215),Ae=n(111),Ce=n.n(Ae),we=function(){var e,t,n=Object(a.useState)(!1),c=Object(j.a)(n,2),i=c[0],r=c[1],s=h();return Object(x.jsxs)($.a,{children:[Object(x.jsx)(he.a,{position:"fixed",className:s.header,children:Object(x.jsxs)(g.a,{maxWidth:"lg",children:[Object(x.jsxs)(xe.a,{children:[Object(x.jsx)(ye.a,{href:b(),variant:"h6",component:"a",sx:{flexGrow:1,color:"#fff"},children:Object(x.jsx)("img",{src:d,alt:"photoKot"})}),Object(x.jsxs)("nav",{className:s.nav,children:[Object(x.jsx)(l.b,(e={exact:!0,to:"/"},Object(o.a)(e,"to",b()),Object(o.a)(e,"style",(function(e){return{color:e?"#E59C9C":"#fff",fontWeight:e?500:600}})),Object(o.a)(e,"children","\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),e)),Object(x.jsx)(l.b,{to:J(),style:function(e){return{color:e?"#E59C9C":"#fff",fontWeight:e?600:500}},children:"\u0424\u0438\u043b\u044c\u043c\u044b \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(x.jsx)(l.b,{to:ae(),style:function(e){return{color:e?"#E59C9C":"#fff",fontWeight:e?600:500}},children:"\u041e \u043d\u0430\u0441"}),Object(x.jsx)(l.b,{to:se(),style:function(e){return{color:e?"#E59C9C":"#fff",fontWeight:e?600:500}},children:"\u041f\u043e\u0438\u0441\u043a"})]}),Object(x.jsx)(pe.a,{className:s.burger,edge:"start",color:"inherit","aria-label":"menu",onClick:function(){return r(!i)},children:Object(x.jsx)(ve.a,{})})]}),i&&Object(x.jsx)("div",{className:s.modal,children:Object(x.jsxs)("nav",{className:s.navModal,children:[Object(x.jsx)(l.b,(t={exact:!0,to:"/"},Object(o.a)(t,"to",b()),Object(o.a)(t,"style",(function(e){return{color:e?"#E59C9C":"#123abc"}})),Object(o.a)(t,"children","\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),t)),Object(x.jsx)(l.b,{to:J(),style:function(e){return{color:e?"#E59C9C":"#123abc"}},children:"\u0424\u0438\u043b\u044c\u043c\u044b \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438"}),Object(x.jsx)(l.b,{to:ae(),style:function(e){return{color:e?"#E59C9C":"#123abc"}},children:"\u041e \u043d\u0430\u0441"}),Object(x.jsx)(l.b,{to:se(),style:function(e){return{color:e?"#E59C9C":"#123abc"}},children:"\u041f\u043e\u0438\u0441\u043a"}),Object(x.jsx)(pe.a,{"aria-label":"fingerprint",color:"success",children:Object(x.jsx)(Ce.a,{style:{position:"relative"},onClick:function(){return r(!1)}})})]})})]})}),i&&Object(x.jsx)("div",{onClick:function(){return r(!1)},className:s.overlay})]})},Ne=function(){var e=h();return Object(x.jsx)("section",{className:e.offer,children:Object(x.jsx)(g.a,{maxWidth:"lg",children:Object(x.jsxs)(I.d,{children:[Object(x.jsx)(I.b,{exact:!0,path:b(),component:G}),Object(x.jsx)(I.b,{exact:!0,path:J(),component:ce}),Object(x.jsx)(I.b,{exact:!0,path:E(),component:H}),Object(x.jsx)(I.b,{exact:!0,path:ae(),component:re}),Object(x.jsx)(I.b,{exact:!0,path:se(),component:fe}),Object(x.jsx)(I.a,{to:"/"})]})})})},ke=function(){var e=h();return Object(x.jsx)("footer",{className:Object(_.a)(e.footer,"footer"),children:Object(x.jsx)(g.a,{maxWidth:"lg",children:Object(x.jsxs)(M.a,{container:!0,className:e.footer__grid,children:[Object(x.jsx)(M.a,{item:!0,md:4,children:Object(x.jsx)("a",{href:"/",children:Object(x.jsx)("img",{src:d,alt:"logo"})})}),Object(x.jsx)(M.a,{item:!0,md:4,children:Object(x.jsx)("span",{children:"School \xa9 WayUp. 2021 "})}),Object(x.jsxs)(M.a,{item:!0,md:4,children:[Object(x.jsx)("p",{children:"Made by"}),Object(x.jsx)("p",{children:"Zaiarskii_K"})]})]})})})},De=function(){return Object(x.jsxs)("div",{className:"wrapper",children:[Object(x.jsx)(we,{}),Object(x.jsx)("main",{children:Object(x.jsx)(Ne,{})}),Object(x.jsx)(ke,{})]})},We=n(169),Be=n(220),_e=Object(f.a)(),Se=function(){return Object(x.jsx)(We.a,{injectFirst:!0,children:Object(x.jsx)(Be.a,{theme:_e,children:Object(x.jsx)(l.a,{children:Object(x.jsx)(l.a,{basename:"/",children:Object(x.jsx)(De,{})})})})})},Re=n(57),Ee=n(112),Ie=n(113),Fe={filmDetail:null},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;return"filmsDetail/setFilmsDetail"===t.type?Object(K.a)(Object(K.a)({},e),{},{filmDetail:Object(K.a)({},t.payload)}):e},Ye=n(11),Le={list:[]},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;return"films/setFilms"===t.type?Object(K.a)(Object(K.a)({},e),{},{list:Object(Ye.a)(t.payload)}):e},ze=Object(Re.combineReducers)({filmsReducerId:Te,filmsReducer:Me}),Ve=Object(Re.createStore)(ze,Object(Ee.composeWithDevTools)(Object(Re.applyMiddleware)(Ie.a)));s.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(y.a,{store:Ve,children:Object(x.jsx)(Se,{})})}),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.11f64e64.chunk.js.map