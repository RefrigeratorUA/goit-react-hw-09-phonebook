(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[3],{10:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return k})),n.d(e,"d",(function(){return y}));var r,c,a,u,o,s=n(3),i={registerRequest:Object(s.b)("auth/registerRequest"),registerSuccess:Object(s.b)("auth/registerSuccess"),registerError:Object(s.b)("auth/registerError"),loginRequest:Object(s.b)("auth/loginRequest"),loginSuccess:Object(s.b)("auth/loginSuccess"),loginError:Object(s.b)("auth/loginError"),logoutRequest:Object(s.b)("auth/logoutRequest"),logoutSuccess:Object(s.b)("auth/logoutSuccess"),logoutError:Object(s.b)("auth/logoutError"),getCurrentUserRequest:Object(s.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(s.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(s.b)("auth/getCurrentUserError"),clearErrorMessage:Object(s.b)("auth/clearErrorMessage")},b=n(2),l=n(7),j={name:null,email:null},O=Object(s.c)(j,(r={},Object(b.a)(r,i.registerSuccess,(function(t,e){return e.payload.user})),Object(b.a)(r,i.loginSuccess,(function(t,e){return e.payload.user})),Object(b.a)(r,i.getCurrentUserSuccess,(function(t,e){return e.payload})),Object(b.a)(r,i.logoutSuccess,(function(){return j})),r)),f=Object(s.c)(null,(c={},Object(b.a)(c,i.registerSuccess,(function(t,e){return e.payload.token})),Object(b.a)(c,i.loginSuccess,(function(t,e){return e.payload.token})),Object(b.a)(c,i.logoutSuccess,(function(){return null})),c)),d=Object(s.c)(null,(a={},Object(b.a)(a,i.registerRequest,(function(){return null})),Object(b.a)(a,i.registerError,(function(t,e){return e.payload})),Object(b.a)(a,i.loginRequest,(function(){return null})),Object(b.a)(a,i.loginError,(function(t,e){return e.payload})),Object(b.a)(a,i.logoutRequest,(function(){return null})),Object(b.a)(a,i.logoutError,(function(t,e){return e.payload})),Object(b.a)(a,i.getCurrentUserRequest,(function(){return null})),Object(b.a)(a,i.getCurrentUserError,(function(t,e){return e.payload})),Object(b.a)(a,i.clearErrorMessage,(function(){return null})),a)),g=Object(s.c)(!1,(u={},Object(b.a)(u,i.registerSuccess,(function(){return!0})),Object(b.a)(u,i.loginSuccess,(function(){return!0})),Object(b.a)(u,i.getCurrentUserSuccess,(function(){return!0})),Object(b.a)(u,i.registerError,(function(){return!1})),Object(b.a)(u,i.loginError,(function(){return!1})),Object(b.a)(u,i.getCurrentUserError,(function(){return!1})),Object(b.a)(u,i.logoutSuccess,(function(){return!1})),u)),h=Object(s.c)(!1,(o={},Object(b.a)(o,i.registerRequest,(function(){return!0})),Object(b.a)(o,i.registerSuccess,(function(){return!1})),Object(b.a)(o,i.registerError,(function(){return!1})),Object(b.a)(o,i.loginRequest,(function(){return!0})),Object(b.a)(o,i.loginSuccess,(function(){return!1})),Object(b.a)(o,i.loginError,(function(){return!1})),o)),p=Object(l.c)({user:O,isAuth:g,token:f,error:d,isloadingAuth:h}),v=n(11),m=n.n(v),x=n(18),A=n(14),N=n.n(A);N.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var w=function(t){N.a.defaults.headers.common.Authorization="Bearer ".concat(t)},C=function(){N.a.defaults.headers.common.Authorization=""},k={register:function(t){return function(){var e=Object(x.a)(m.a.mark((function e(n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(i.registerRequest()),e.prev=1,e.next=4,N.a.post("/users/signup",t);case 4:r=e.sent,w(r.data.token),n(i.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(i.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},login:function(t){return function(){var e=Object(x.a)(m.a.mark((function e(n){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(i.loginRequest()),e.prev=1,e.next=4,N.a.post("/users/login",t);case 4:r=e.sent,w(r.data.token),n(i.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(i.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logout:function(){return function(){var t=Object(x.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(i.logoutRequest()),t.prev=1,t.next=4,N.a.post("/users/logout");case 4:C(),e(i.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(i.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(x.a)(m.a.mark((function t(e,n){var r,c,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),c=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return w(c),e(i.getCurrentUserRequest()),t.prev=5,t.next=8,N.a.get("/users/current");case 8:a=t.sent,e(i.getCurrentUserSuccess(a.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(i.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()},onClearErrorMessage:function(){return function(t){t(i.clearErrorMessage())}}},y={getIsAuth:function(t){return t.auth.isAuth},getUserName:function(t){return t.auth.user.name},getToken:function(t){return t.auth.token},getAuthLoading:function(t){return t.auth.isloadingAuth},getAuthError:function(t){return t.auth.error}}},24:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(96),c=n(1),a=function(t){var e=t.animation,n=void 0===e?"border":e;return Object(c.jsxs)("div",{className:"wrapper-spinner-bs",children:[Object(c.jsx)(r.a,{animation:n,variant:"primary"}),Object(c.jsx)(r.a,{animation:n,variant:"success"}),Object(c.jsx)(r.a,{animation:n,variant:"danger"})]})}},36:function(t,e,n){"use strict";n.d(e,"e",(function(){return l})),n.d(e,"g",(function(){return d})),n.d(e,"l",(function(){return h})),n.d(e,"m",(function(){return p})),n.d(e,"k",(function(){return v})),n.d(e,"b",(function(){return m})),n.d(e,"c",(function(){return x})),n.d(e,"a",(function(){return A})),n.d(e,"i",(function(){return N})),n.d(e,"j",(function(){return w})),n.d(e,"h",(function(){return C})),n.d(e,"n",(function(){return k})),n.d(e,"d",(function(){return y})),n.d(e,"f",(function(){return z}));var r,c,a,u=n(11),o=n.n(u),s=n(18),i=n(14),b=n.n(i),l={fetchContacts:function(){return function(){var t=Object(s.a)(o.a.mark((function t(e){var n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(h()),t.prev=1,t.next=4,b.a.get("/contacts");case 4:n=t.sent,r=n.data,e(p(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(v(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},addContact:function(t,e){return function(){var n=Object(s.a)(o.a.mark((function n(r){var c,a,u;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c={name:t,number:e},r(m()),n.prev=2,n.next=5,b.a.post("/contacts",c);case 5:a=n.sent,u=a.data,r(x(u)),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(2),r(A(n.t0));case 13:case"end":return n.stop()}}),n,null,[[2,10]])})));return function(t){return n.apply(this,arguments)}}()},deleteContact:function(t){return function(){var e=Object(s.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(N()),e.prev=1,e.next=4,b.a.delete("/contacts/".concat(t));case 4:n(w(t)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(C(e.t0));case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()},onClearErrorMessage:function(){return function(t){t(y())}}},j=n(25),O=function(t){return t.contacts.filter},f=function(t){return t.contacts.items},d={getLoading:function(t){return t.contacts.loading},getFilter:O,getError:function(t){return t.contacts.error},getAllContacts:f,getFilteredContacts:Object(j.a)([f,O],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}))},g=n(3),h=Object(g.b)("contacts/fetchContactRequest"),p=Object(g.b)("contacts/fetchContactSuccess"),v=Object(g.b)("contacts/fetchContactError"),m=Object(g.b)("contacts/addContactRequest"),x=Object(g.b)("contacts/addContactSuccess"),A=Object(g.b)("contacts/addContactError"),N=Object(g.b)("contacts/deleteContactRequest"),w=Object(g.b)("contacts/deleteContactSuccess"),C=Object(g.b)("contacts/deleteContactError"),k=Object(g.b)("contact/ChangeFilter"),y=Object(g.b)("contacts/clearErrorMessage"),E=n(2),S=n(27),U=n(7),X=Object(g.c)([],(r={},Object(E.a)(r,p,(function(t,e){return e.payload})),Object(E.a)(r,x,(function(t,e){return[e.payload].concat(Object(S.a)(t))})),Object(E.a)(r,w,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n||Number(n)}))})),r)),R=Object(g.c)("",Object(E.a)({},k,(function(t,e){return e.payload}))),I=Object(g.c)(!1,(c={},Object(E.a)(c,h,(function(){return!0})),Object(E.a)(c,p,(function(){return!1})),Object(E.a)(c,v,(function(){return!1})),Object(E.a)(c,m,(function(){return!0})),Object(E.a)(c,x,(function(){return!1})),Object(E.a)(c,A,(function(){return!1})),Object(E.a)(c,N,(function(){return!0})),Object(E.a)(c,w,(function(){return!1})),Object(E.a)(c,C,(function(){return!1})),c)),q=Object(g.c)(null,(a={},Object(E.a)(a,h,(function(){return""})),Object(E.a)(a,v,(function(){return"\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432 \u0438\u0437 \u0411\u0414"})),Object(E.a)(a,m,(function(){return""})),Object(E.a)(a,A,(function(){return"\u041e\u0448\u0438\u0431\u043a\u0430 \u0437\u0430\u043f\u0438\u0441\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u0432 \u0411\u0414"})),Object(E.a)(a,N,(function(){return""})),Object(E.a)(a,C,(function(){return"\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430 \u0438\u0437 \u0411\u0414"})),Object(E.a)(a,y,(function(){return null})),a)),z=Object(U.c)({items:X,filter:R,loading:I,error:q})},57:function(t,e,n){},83:function(t,e,n){},85:function(t,e,n){},87:function(t,e,n){},88:function(t,e,n){},89:function(t,e,n){},90:function(t,e,n){},91:function(t,e,n){},92:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(21),u=n.n(a),o=n(17),s=(n(55),n(56),n(57),n(27)),i=n(19),b=n(47),l=n.n(b),j=n(3),O=n(7),f=n(36),d=n(10),g=Object(s.a)(Object(j.d)({serializableCheck:{ignoredActions:[i.a,i.f,i.b,i.c,i.d,i.e]}})),h={key:"auth",storage:l.a,whitelist:["token"]},p=Object(O.c)({auth:Object(i.g)(h,d.c),contacts:f.f}),v=Object(j.a)({reducer:p,devTools:!1,middleware:g}),m={store:v,persistor:Object(i.h)(v)},x=n(9),A=n(16),N=n(5),w=(n(83),n(1));var C=function(t){var e=t.title,n=t.children;return Object(w.jsxs)("section",{className:"section",children:[e&&Object(w.jsx)("h2",{children:e}),n]})},k=n(95),y=(n(85),function(){return Object(w.jsx)("h1",{className:"logo",children:"Phonebook"})}),E=[{name:"Home",path:"/",exact:!0,showInNav:!0,component:Object(r.lazy)((function(){return n.e(1).then(n.bind(null,101))})),privat:!1,restricted:!1},{name:"Registration",path:"/register",exact:!0,showInNav:!1,component:Object(r.lazy)((function(){return n.e(4).then(n.bind(null,103))})),privat:!1,restricted:!0,redirectTo:"/contacts"},{name:"Login",path:"/login",exact:!0,showInNav:!1,component:Object(r.lazy)((function(){return n.e(2).then(n.bind(null,104))})),privat:!1,restricted:!0,redirectTo:"/contacts"},{name:"Contacts",path:"/contacts",exact:!0,showInNav:!0,component:Object(r.lazy)((function(){return n.e(0).then(n.bind(null,102))})),privat:!0,restricted:!1,redirectTo:"/login"}];function S(){var t=Object(x.c)(d.d.getIsAuth);return Object(w.jsx)("nav",{className:"NavClass",children:E.map((function(e){var n=e.name,r=e.path,c=e.showInNav,a=e.privat;return c&&(!a||t&&a)&&Object(w.jsx)(o.b,{exact:!0,to:r,className:"NavLink",activeClassName:"NavLink--active",children:n},n)}))})}n(87);var U=function(){return Object(w.jsx)("nav",{className:"AuthNavStyle",children:E.map((function(t){var e=t.path,n=t.name;return!t.showInNav&&Object(w.jsx)(o.b,{exact:!0,to:e,className:"AuthNavStyle-link",activeClassName:"AuthNavStyle-link--active",children:n},n)}))})},X=function(t){var e=t.onClick,n=t.title,r=t.className;return Object(w.jsx)("button",{type:"button",className:r,onClick:function(){return e()},children:n})};n(88),n(89);function R(){var t=Object(x.b)(),e=Object(x.c)(d.d.getUserName),n=Object(r.useCallback)((function(){t(d.b.logout())}),[t]);return Object(w.jsxs)("div",{className:"UserMenu",children:[Object(w.jsx)("img",{src:"data:image/png;base64,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",width:"32",height:"32",alt:"avatar"}),Object(w.jsxs)("span",{children:[Object(w.jsx)("b",{children:"Name:"})," ",e]}),Object(w.jsx)(X,{title:"Logout",className:"btn-phonebook btn-phonebook--logout",onClick:n})]})}n(90),n(91);function I(){var t=!!Object(x.c)(d.d.getIsAuth);return Object(w.jsxs)("header",{className:"AppBar-wrapper",children:[Object(w.jsx)(k.a,{in:!0,appear:!0,classNames:"AppBar-logo",timeout:500,unmountOnExit:!0,children:Object(w.jsx)(y,{})}),Object(w.jsx)(S,{}),t?Object(w.jsx)(R,{}):Object(w.jsx)(U,{})]})}var q=n(28);function z(t){var e=t.children,n=t.redirectTo,r=Object(q.a)(t,["children","redirectTo"]),c=Object(x.c)(d.d.getIsAuth),a=Object(x.c)(d.d.getToken);return Object(w.jsx)(N.b,Object(A.a)(Object(A.a)({},r),{},{children:c||a?e:Object(w.jsx)(N.a,{to:n})}))}function L(t){var e=t.children,n=t.redirectTo,r=Object(q.a)(t,["children","redirectTo"]),c=Object(x.c)(d.d.getIsAuth);return Object(w.jsx)(N.b,Object(A.a)(Object(A.a)({},r),{},{children:c&&r.restricted?Object(w.jsx)(N.a,{to:n}):e}))}var B=n(24);function J(){var t=Object(x.b)();return Object(r.useEffect)((function(){t(d.b.getCurrentUser())}),[t]),Object(w.jsxs)(C,{children:[Object(w.jsx)(I,{}),Object(w.jsx)(r.Suspense,{fallback:Object(w.jsx)(B.a,{}),children:Object(w.jsxs)(N.d,{children:[E.map((function(t){var e=t.component;return t.privat?Object(w.jsx)(z,Object(A.a)(Object(A.a)({},t),{},{children:Object(w.jsx)(e,{})}),t.name):Object(w.jsx)(L,Object(A.a)(Object(A.a)({},t),{},{children:Object(w.jsx)(e,{})}),t.name)})),Object(w.jsx)(N.a,{to:"/"})]})})]})}var M=n(49);u.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(x.a,{store:m.store,children:Object(w.jsx)(M.a,{loading:Object(w.jsx)(B.a,{}),persistor:m.persistor,children:Object(w.jsx)(o.a,{children:Object(w.jsx)(J,{})})})})}),document.querySelector("#root"))}},[[92,5,6]]]);
//# sourceMappingURL=main.a7dca15f.chunk.js.map