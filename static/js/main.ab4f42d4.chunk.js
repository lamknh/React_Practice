(this["webpackJsonpreact-for-beginners"]=this["webpackJsonpreact-for-beginners"]||[]).push([[0],{34:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),i=n(17),s=n.n(i),a=n(7),j=n(2),o=n(9),u=n.n(o),d=n(12),b=n(10),l=n(1);var O=function(e){var t=e.id,n=e.coverImg,c=e.title,r=e.summary,i=e.genres;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:n,alt:c}),Object(l.jsx)("h2",{children:Object(l.jsx)(a.b,{to:"/movie/".concat(t),children:c})}),Object(l.jsx)("p",{children:r}),Object(l.jsx)("ul",{children:i.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})]})};var h=function(){var e=Object(c.useState)(!0),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(b.a)(i,2),a=s[0],j=s[1],o=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,j(t.data.movies),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){o()}),[]),Object(l.jsx)("div",{children:n?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsx)("div",{children:a.map((function(e){return Object(l.jsx)(O,{id:e.id,coverImg:e.medium_cover_image,title:e.title,summary:e.summary,genres:e.genres},e.id)}))})})};var m=function(e){var t=e.id,n=e.coverImg,c=e.title,r=e.rating,i=e.genres;return Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{src:n,alt:c}),Object(l.jsx)("h2",{children:Object(l.jsx)(a.b,{to:"/movie/".concat(t),children:c})}),Object(l.jsx)("p",{children:r}),Object(l.jsx)("ul",{children:i.map((function(e){return Object(l.jsx)("li",{children:e},e)}))})]})};var v=function(){var e=Object(c.useState)(!0),t=Object(b.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(b.a)(i,2),a=s[0],o=s[1],O=Object(j.f)().id,h=function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://yts.mx/api/v2/movie_details.json?movie_id=".concat(t));case 2:return e.next=4,e.sent.json();case 4:n=e.sent,console.log(n),o(n.data.movie),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){h(O)}),[O]),Object(l.jsx)("div",{children:n?Object(l.jsx)("h1",{children:"Loading..."}):Object(l.jsx)("div",{children:Object(l.jsx)(m,{id:a.id,coverImg:a.medium_cover_image,title:a.title_long,rating:a.rating,genres:a.genres},a.id)})})};var x=function(){return Object(l.jsx)(a.a,{children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/movie/:id",children:Object(l.jsx)(v,{})}),Object(l.jsx)(j.a,{path:"/",children:Object(l.jsx)(h,{})})]})})};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.ab4f42d4.chunk.js.map