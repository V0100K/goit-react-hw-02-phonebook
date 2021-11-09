(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={contactListItem:"ContactListItem_contactListItem__3mW5D",contact:"ContactListItem_contact__12O44"}},,,,function(t,e,n){t.exports={form:"ContactForm_form__310QC"}},function(t,e,n){t.exports={list:"ContactList_list__2Vq-9"}},function(t,e,n){t.exports={filter:"Filter_filter__2UwEk"}},,,,,,,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(8),o=n.n(r),i=n(13),s=n(2),u=n(3),l=n(5),b=n(4),m=n(9),h=n(22),j=n(10),d=n.n(j),f=n(0),O=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({id:Object(h.a)()},a,c))},t.findByName=function(e){return t.props.contacts.some((function(t){return t.name===e}))},t.handleSubmit=function(e){e.preventDefault();var n=t.state.name;t.findByName(n)||n===n.toLowerCase()?alert("".concat(n," is already in contacts!")):(t.props.onSubmit(t.state),t.reset())},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:d.a.form,children:[Object(f.jsxs)("label",{children:[Object(f.jsx)("h2",{children:"Name"}),Object(f.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:this.state.name,onChange:this.handleChange})]}),Object(f.jsxs)("label",{children:[Object(f.jsx)("h2",{children:"Number"}),Object(f.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:this.state.number,onChange:this.handleChange})]}),Object(f.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=O,C=n(6),x=n.n(C),v=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDeletContact;return Object(f.jsxs)("li",{className:x.a.contactListItem,children:[Object(f.jsxs)("p",{className:x.a.contact,children:[e,": ",n]}),Object(f.jsx)("button",{className:x.a.buttonDelete,type:"button",onClick:function(){return c(a)},children:"Delete"})]})},g=n(11),y=n.n(g),_=function(t){var e=t.contacts,n=t.onDeletContact;return Object(f.jsx)("ul",{className:y.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(f.jsx)(v,{id:e,name:a,number:c,onDeletContact:n},e)}))})},S=n(12),w=n.n(S),N=function(t){var e=t.value,n=t.onChange;return Object(f.jsxs)("label",{children:["Find contacts by name",Object(f.jsx)("input",{className:w.a.filter,type:"text",name:"filter",value:e,onChange:n})]})},k=(n(19),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.formSubmitHandler=function(e){var n=e.id,a=e.name,c=e.number;t.setState((function(t){return{contacts:[].concat(Object(i.a)(t.contacts),[{id:n,name:a,number:c}])}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(p,{contacts:e,onSubmit:this.formSubmitHandler}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(N,{value:n,onChange:this.changeFilter}),Object(f.jsx)(_,{contacts:a,onChange:this.changeFilter,onDeletContact:this.deleteContact})]})}}]),n}(a.Component)),L=k;o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(L,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.ec0e8b92.chunk.js.map