(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==o[c]&&(a=!1)}a&&(n.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},o={app:0},n=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("85ec"),o=s.n(a);o.a},"229b":function(t,e,s){},"290e":function(t,e,s){"use strict";var a=s("bc63"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container-fluid",attrs:{id:"nav"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6",attrs:{id:"home-link"}},[s("router-link",{attrs:{to:"/"}},[s("h3",[t._v("Bug Logger")])])],1)])]),s("router-view")],1)},n=[],i=(s("034f"),s("2877")),r={},c=Object(i["a"])(r,o,n,!1,null,null,null),l=c.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home container-fluid"},[s("header",{staticClass:"row"},[s("div",{staticClass:"col",attrs:{id:"reporter"}},[s("modal-report")],1)]),s("main",{staticClass:"row"},[s("div",{staticClass:"col-12",attrs:{id:"title-1"}},[s("h3",[t._v("Current Bugs")]),s("h4",[t._v("This site is having trouble accessing the database and will be working soon.")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("table",{staticClass:"table table-striped"},[t._m(0),s("tbody",t._l(t.bugs,(function(t){return s("Bug",{key:t.id,attrs:{bugData:t}})})),1)])])])])])])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Title")]),s("th",{attrs:{scope:"col"}},[t._v("Reported By")]),s("th",{attrs:{scope:"col"}},[t._v("Status")]),s("th",{attrs:{scope:"col"}},[t._v("Last Modified")])])])}],m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",{staticClass:"bug"},[s("router-link",{attrs:{to:{name:"notes",params:{id:t.bugData.id}}}},[s("td",[t._v(t._s(t.bugData.title))])]),s("td",[t._v(t._s(t.bugData.reportedBy))]),t.bugData.closed?s("td",{attrs:{id:"closed"}},[t._v("Closed")]):s("td",{attrs:{id:"open"}},[t._v("Open")]),s("td",[t._v(t._s(this.newDate[0]))])],1)},v=[],g={name:"Bug",props:["bugData"],data(){return{newDate:this.bugData.updatedAt.split("T")}}},h=g,f=(s("e5f1"),Object(i["a"])(h,m,v,!1,null,"50b624cf",null)),b=f.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button",id:"report"},on:{click:function(e){return e.preventDefault(),t.show(e)}}},[t._v("Report")]),s("div",{staticClass:"row modal-view"},[s("modal",{attrs:{name:"modal-report"},on:{opened:t.opened}},[s("form",{on:{submit:function(e){return e.preventDefault(),t.createBug(e)}}},[s("div",{staticClass:"form-group col-12 area"},[s("label",{attrs:{for:"description"}},[t._v("Description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],ref:"description",staticClass:"form-control",attrs:{rows:"1",id:"description"},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}})]),s("div",{staticClass:"form-group col-12 title"},[s("label",{attrs:{for:"title"}},[t._v("Title")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],attrs:{type:"text",id:"title",name:"title"},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}})]),s("div",{staticClass:"form-group col-12 name"},[s("label",{attrs:{for:"name"}},[t._v("Your Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.reportedBy,expression:"newBug.reportedBy"}],attrs:{type:"text",id:"name",name:"name"},domProps:{value:t.newBug.reportedBy},on:{input:function(e){e.target.composing||t.$set(t.newBug,"reportedBy",e.target.value)}}})]),s("div",{staticClass:"col-12",attrs:{id:"button"}},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])])],1)])},B=[],_={data(){return{newBug:{description:"",title:"",reportedBy:""}}},methods:{show(){this.$modal.show("modal-report")},opened(){this.$refs.description.focus()},hide(){this.$modal.hide("modal-report")},createBug(){let t={...this.newBug};this.$store.dispatch("createBug",t),this.newBug={description:"",title:"",reportedBy:""},this.$modal.hide("modal-report")}}},y=_,C=(s("8464"),Object(i["a"])(y,w,B,!1,null,"d9d3f500",null)),$=C.exports,N={name:"home",components:{Bug:b,ModalReport:$},mounted(){this.$store.dispatch("getBugs")},computed:{bugs(){return this.$store.state.bugs}}},x=N,D=(s("5893"),Object(i["a"])(x,d,p,!1,null,"3d7e7dcc",null)),O=D.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notes container-fluid"},[s("main",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12",attrs:{id:"bug-title"}},[s("h1",[t._v(t._s(t.bug.title))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-10",attrs:{id:"bug-reported"}},[s("h3",[t._v("Reported By: "+t._s(t.bug.reportedBy))])]),s("div",{staticClass:"col-2"},[t.bug.closed?s("div",[s("h3",[t._v("Closed")])]):s("div",[s("h3",[t._v("Open")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-11",attrs:{id:"bug-description"}},[s("p",[t._v(t._s(t.bug.description))])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-11",attrs:{id:"close-button"}},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.deleteBug}},[t._v("Close")]),s("modal-edit")],1)])]),s("div",{staticClass:"col-12"},[t._m(0),s("div",{staticClass:"row"},[s("div",{staticClass:"col-10",attrs:{id:"notes-table"}},[s("table",{staticClass:"table table-striped table-bordered"},[t._m(1),s("tbody",t._l(t.notes,(function(t){return s("Note",{key:t.id,attrs:{notesData:t}})})),1)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-10",attrs:{id:"add-button"}},[s("modal-note")],1)])])])])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12",attrs:{id:"notes-title"}},[s("h3",[t._v("Notes")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",{staticClass:"thead-dark"},[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Name")]),s("th",{attrs:{scope:"col"}},[t._v("Message")]),s("th",{attrs:{scope:"col"}},[t._v("Delete")])])])}],E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",{staticClass:"note"},[s("td",[t._v(t._s(t.notesData.reportedBy))]),s("td",[t._v(t._s(t.notesData.content))]),s("td",[s("i",{staticClass:"fas fa-trash",on:{click:t.deleteNote}})])])},S=[],P={name:"Note",props:["notesData"],methods:{deleteNote(){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&(this.$store.dispatch("deleteNote",this.notesData.id),Swal.fire("Deleted!","Your file has been deleted.","success"))})}}},M=P,A=(s("9b79"),Object(i["a"])(M,E,S,!1,null,"78341e6c",null)),T=A.exports,Y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.show(e)}}},[t._v("Add")]),s("div",{staticClass:"row modal-view"},[s("modal",{attrs:{name:"modal-note"},on:{opened:t.opened}},[s("form",{on:{submit:function(e){return e.preventDefault(),t.createNote(e)}}},[s("div",{staticClass:"form-group col-12 name"},[s("label",{attrs:{for:"name"}},[t._v("Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.reportedBy,expression:"newNote.reportedBy"}],ref:"name",attrs:{type:"text",id:"name",name:"name"},domProps:{value:t.newNote.reportedBy},on:{input:function(e){e.target.composing||t.$set(t.newNote,"reportedBy",e.target.value)}}})]),s("div",{staticClass:"form-group col-12 message"},[s("label",{attrs:{for:"message"}},[t._v("Message")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newNote.content,expression:"newNote.content"}],staticClass:"form-control",attrs:{rows:"3",id:"message"},domProps:{value:t.newNote.content},on:{input:function(e){e.target.composing||t.$set(t.newNote,"content",e.target.value)}}})]),s("div",{staticClass:"col-12",attrs:{id:"button"}},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])])],1)])},I=[],R={data(){return{newNote:{reportedBy:"",content:"",bug:this.$store.state.activeBug.id}}},methods:{show(){this.$modal.show("modal-note")},opened(){this.$refs.name.focus()},hide(){this.$modal.hide("modal-note")},createNote(){let t={...this.newNote};this.$store.dispatch("createNote",t),this.newNote={reportedBy:"",content:""},this.$modal.hide("modal-note")}}},L=R,J=(s("290e"),Object(i["a"])(L,Y,I,!1,null,"53473202",null)),U=J.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.bug.closed?t._e():s("div",[s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.show(e)}}},[t._v("Edit")]),s("div",{staticClass:"row modal-view"},[s("modal",{attrs:{name:"modal-edit"},on:{opened:t.opened}},[s("form",{on:{submit:function(e){return e.preventDefault(),t.editBug(e)}}},[s("div",{staticClass:"form-group col-12 edit"},[s("label",{attrs:{for:"description"}},[t._v("Edit Description")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.changeBug.description,expression:"changeBug.description"}],ref:"description",staticClass:"form-control",attrs:{rows:"3",id:"description"},domProps:{value:t.changeBug.description},on:{input:function(e){e.target.composing||t.$set(t.changeBug,"description",e.target.value)}}})]),s("div",{staticClass:"col-12 button"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Submit")])])])])],1)])},z=[],F={data(){return{changeBug:{description:"",_id:this.$route.params.id}}},methods:{show(){this.$modal.show("modal-edit")},opened(){this.$refs.description.focus()},hide(){this.$modal.hide("modal-edit")},editBug(){let t={...this.changeBug};this.$store.dispatch("editBug",t),this.changeBug={description:""},this.$modal.hide("modal-edit")}},computed:{bug(){return this.$store.state.activeBug}}},G=F,H=(s("65a6"),Object(i["a"])(G,q,z,!1,null,"10d1528a",null)),K=H.exports,Q={name:"notes",components:{Note:T,ModalNote:U,ModalEdit:K},mounted(){this.$store.dispatch("getBugById",this.$route.params.id),this.$store.dispatch("getNotesByBugId",this.$route.params.id)},computed:{bug(){return this.$store.state.activeBug},notes(){return this.$store.state.notes}},methods:{deleteBug(){Swal.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(t=>{t.value&&(this.$store.dispatch("deleteBug",this.$route.params.id),Swal.fire("Deleted!","Your file has been deleted.","success"))})}}},V=Q,W=(s("989b"),Object(i["a"])(V,j,k,!1,null,null,null)),X=W.exports;a["a"].use(u["a"]);const Z=[{path:"/",name:"home",component:O},{path:"/notes/:id",name:"notes",component:X}],tt=new u["a"]({routes:Z});var et=tt,st=s("2f62"),at=s("bc3a"),ot=s.n(at);a["a"].use(st["a"]);let nt=ot.a.create({baseURL:"//localhost:3000/api",timeout:5e3});var it=new st["a"].Store({state:{bugs:[],activeBug:{},notes:[]},mutations:{setAllBugs(t,e){t.bugs=e},addBug(t,e){t.bugs.push(e)},setActiveBug(t,e){t.activeBug=e},setNotes(t,e){t.notes=e},addNote(t,e){t.notes.push(e)}},actions:{async getBugs({commit:t,dispatch:e}){let s=await nt.get("bugs");t("setAllBugs",s.data)},async createBug({commit:t,dispatch:e},s){let a=await nt.post("bugs",s);t("addBug",a.data),et.push({path:"/notes/"+a.data.id})},async getBugById({commit:t,dispatch:e},s){let a=await nt.get("bugs/"+s);t("setActiveBug",a.data)},async editBug({commit:t,dispatch:e},s){let a=await nt.put("bugs/"+s._id,s);t("setActiveBug",a.data),e("getBugById")},async deleteBug({commit:t,dispatch:e},s){await nt.delete("bugs/"+s),e("getBugs")},async getNotesByBugId({commit:t,dispatch:e},s){let a=await nt.get("bugs/"+s+"/notes");t("setNotes",a.data)},async createNote({commit:t,dispatch:e},s){let a=await nt.post("notes",s);t("addNote",a.data)},async deleteNote({commit:t,dispatch:e},s){await nt.delete("notes/"+s),e("getNotesByBugId")}},modules:{}}),rt=s("1881"),ct=s.n(rt);a["a"].use(ct.a),a["a"].config.productionTip=!1,new a["a"]({router:et,store:it,render:function(t){return t(l)}}).$mount("#app")},"57c0":function(t,e,s){},5893:function(t,e,s){"use strict";var a=s("229b"),o=s.n(a);o.a},"65a6":function(t,e,s){"use strict";var a=s("b016"),o=s.n(a);o.a},8464:function(t,e,s){"use strict";var a=s("e659"),o=s.n(a);o.a},"85ec":function(t,e,s){},"989b":function(t,e,s){"use strict";var a=s("c33e"),o=s.n(a);o.a},"9b79":function(t,e,s){"use strict";var a=s("57c0"),o=s.n(a);o.a},b016:function(t,e,s){},bc63:function(t,e,s){},c33e:function(t,e,s){},c92f:function(t,e,s){},e5f1:function(t,e,s){"use strict";var a=s("c92f"),o=s.n(a);o.a},e659:function(t,e,s){}});
//# sourceMappingURL=app.8aa2b77b.js.map