(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={input__field:"ContactForm_input__field__AMKZ9",form__button:"ContactForm_form__button__OkADM"}},17:function(t,e,n){t.exports={contacts__list:"ContactList_contacts__list__Oc1oH",contacts__item:"ContactList_contacts__item__1nbEP",contacts__btn:"ContactList_contacts__btn__njvtp"}},31:function(t,e,n){t.exports={input__field:"Filter_input__field__1rDMp"}},38:function(t,e,n){},82:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(14),o=n.n(a),u=(n(38),n(20)),s=n(8),i=n(16),b=n.n(i),l=n(5),f=n.n(l),j=n(9),d=n(10),p=n.n(d),O=n(2);function h(){return m.apply(this,arguments)}function m(){return(m=Object(j.a)(f.a.mark((function t(){var e,n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(t){return x.apply(this,arguments)}function x(){return(x=Object(j.a)(f.a.mark((function t(e){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.post("/contacts",e);case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return C.apply(this,arguments)}function C(){return(C=Object(j.a)(f.a.mark((function t(e){var n,c;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.delete("/contacts/".concat(e));case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}p.a.defaults.baseURL="61978bf75953f10017d23de7.mockapi.io",p.a.defaults.baseURL="https://61978bf75953f10017d23de7.mockapi.io/api/";var y=Object(O.c)("contacts/fetchContacts",Object(j.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))),g=Object(O.c)("contacts/\u0441ontactsGlobal",function(){var t=Object(j.a)(f.a.mark((function t(e){var n;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return n=t.sent,t.abrupt("return",n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),w=Object(O.c)("contacts/deleteContact",function(){var t=Object(j.a)(f.a.mark((function t(e){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(e);case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),k=n(83),A=n(1);var F=Object(s.b)(null,(function(t){return{onSubmit:function(e,n){return t(g(e,n))}}}))((function(t){t.phonebookContacts,t.onSubmit;var e=Object(c.useState)(""),n=Object(u.a)(e,2),r=n[0],a=n[1],o=Object(c.useState)(""),i=Object(u.a)(o,2),l=i[0],f=i[1],j=Object(s.c)(),d=function(t){var e=t.currentTarget,n=e.name,c=e.value;"name"===n?a(c):f(c)};return Object(A.jsx)("div",{children:Object(A.jsxs)("form",{onSubmit:function(t){t.preventDefault();Object(k.a)();j(g({name:r,number:l})),a(""),f("")},children:[Object(A.jsxs)("label",{children:["Name",Object(A.jsx)("input",{className:b.a.input__field,onChange:d,type:"text",name:"name",value:r,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(A.jsxs)("label",{children:["Number",Object(A.jsx)("input",{className:b.a.input__field,onChange:d,type:"tel",name:"number",value:l,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(A.jsx)("button",{type:"submit",className:b.a.form__button,children:"Add contact"})]})})})),N=n(17),S=n.n(N),L=n(30),E=n.n(L);function q(){return Object(A.jsx)(E.a,{className:"loader",type:"Audio",color:"#00BFFF",height:100,width:100})}var M=function(t){return t.contacts.loading},R=function(t,e){return t.filter((function(t){return t.name.toLocaleLowerCase().includes(e.toLocaleLowerCase())}))},z=Object(s.b)((function(t){var e=t.contacts,n=e.items,c=e.filter;return{contacts:R(n,c)}}),(function(t){return{deleteContact:function(e){return t(w(e))},fetchContactsAll:function(){return t(y())}}}))((function(t){var e=t.contacts,n=t.deleteContact,r=t.fetchContactsAll,a=Object(s.d)(M);return Object(c.useEffect)((function(){r()}),[]),Object(A.jsxs)(A.Fragment,{children:[a&&Object(A.jsx)(q,{}),Object(A.jsx)("ul",{className:S.a.contacts__list,children:e.map((function(t){var e=t.id,c=t.name,r=t.number;return Object(A.jsxs)("li",{className:S.a.contacts__item,children:[Object(A.jsx)("p",{children:c}),Object(A.jsx)("p",{children:r}),Object(A.jsx)("button",{className:S.a.contacts__btn,type:"button",onClick:function(){return n(e)},children:"Delete contact"})]},e)}))})]})})),D=(Object(O.b)("contacts/fetchContactRequest"),Object(O.b)("contacts/fetchContactSuccess"),Object(O.b)("contacts/fetchContactError"),Object(O.b)("contacts/addContactRequest"),Object(O.b)("contacts/addContactSuccess"),Object(O.b)("contacts/addContactError"),Object(O.b)("contacts/deleteContactRequest"),Object(O.b)("contacts/deleteContactSuccess"),Object(O.b)("contacts/deleteContactError"),Object(O.b)("phonebook/changeFilter")),Z=n(31),B=n.n(Z);var J=Object(s.b)((function(t){return{filter:t.contacts.filter}}),(function(t){return{changeFilter:function(e){return t(D(e))}}}))((function(t){var e=t.filter,n=t.changeFilter;return Object(A.jsxs)("label",{children:["Find contacts by name:",Object(A.jsx)("input",{className:B.a.input__field,type:"text",name:"filter",value:e,onChange:function(t){return n(t.currentTarget.value)}})]})}));function T(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("h2",{children:"Phonebook"}),Object(A.jsx)(F,{}),Object(A.jsx)("h2",{children:"Contacts"}),Object(A.jsx)(J,{}),Object(A.jsx)(z,{})]})}var P,U,G=n(4),H=n(32),I=n(7),K=Object(O.d)([],(P={},Object(G.a)(P,y.fulfilled,(function(t,e){return e.payload})),Object(G.a)(P,g.fulfilled,(function(t,e){var n=e.payload;return console.log(n),t.some((function(t){return t.name===n.name}))?(alert("Sorry, ".concat(n.name," is already in contacts list")),t):[n].concat(Object(H.a)(t))})),Object(G.a)(P,w.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),P)),$=Object(O.d)("",Object(G.a)({},D,(function(t,e){return e.payload}))),Q=Object(O.d)(!1,(U={},Object(G.a)(U,y.pending,(function(){return!0})),Object(G.a)(U,y.fulfilled,(function(){return!1})),Object(G.a)(U,y.rejected,(function(){return!1})),Object(G.a)(U,g.pending,(function(){return!0})),Object(G.a)(U,g.fulfilled,(function(){return!1})),Object(G.a)(U,g.rejected,(function(){return!1})),Object(G.a)(U,w.pending,(function(){return!0})),Object(G.a)(U,w.fulfilled,(function(){return!1})),Object(G.a)(U,w.rejected,(function(){return!1})),U)),V=Object(I.b)({items:K,filter:$,loading:Q}),W=Object(O.a)({reducer:{contacts:V,devTools:!1}});o.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(s.a,{store:W,children:Object(A.jsx)(T,{})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.d5de697e.chunk.js.map