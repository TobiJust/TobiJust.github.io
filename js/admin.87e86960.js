(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin"],{"43ee":function(e,r,t){"use strict";var a=t("c15b"),n=t.n(a);n.a},c15b:function(e,r,t){},f529:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-form",{ref:"form",attrs:{"lazy-validation":""},nativeOn:{keyup:function(r){if(!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter"))return null;e.valid&&e.submit(r)}},model:{value:e.valid,callback:function(r){e.valid=r},expression:"valid"}},[t("v-container",[t("v-row",[t("v-col",{attrs:{cols:"12",md:"4","offset-md":"4"}},[t("h1",[e._v("Admin login")]),t("br"),e.user.loggedIn?t("div",[t("v-alert",{attrs:{color:"#4CAF50"}},[e._v(" Logged in. ")]),t("router-link",{staticClass:"register__link",attrs:{to:{name:"change-password"}}},[e._v("Change password")])],1):t("div",[t("v-text-field",{attrs:{rules:[e.rules.required,e.rules.email],placeholder:"E-mail",outlined:"",required:""},model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}}),t("v-text-field",{attrs:{"append-icon":e.show?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.show?"text":"password",name:"input-10-1",placeholder:"Password",outlined:""},on:{"click:append":function(r){e.show=!e.show}},model:{value:e.form.password,callback:function(r){e.$set(e.form,"password",r)},expression:"form.password"}}),e.error?t("v-alert",{attrs:{color:"#FF5252"}},[e._v(" "+e._s(e.error)+" ")]):e._e(),t("v-btn",{staticClass:"login__button mr-4",attrs:{disabled:!e.valid,outlined:"",color:"#333"},on:{click:e.submit}},[e._v(" Login ")])],1)])],1)],1)],1)},n=[],o=t("5530"),s=t("59ca"),i=t.n(s),l=(t("ea7b"),t("2f62")),d={name:"admin",data:function(){return{valid:!1,show:!1,form:{email:"",password:""},error:"",rules:{required:function(e){return!!e||"Required."},min:function(e){return e.length>=8||"Min 8 characters"},email:function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}}}},computed:Object(o["a"])({},Object(l["b"])({user:"user"})),methods:{submit:function(){var e=this;i.a.auth().signInWithEmailAndPassword(this.form.email,this.form.password).then((function(e){})).catch((function(r){switch(r.code){case"auth/user-not-found":e.error=r.message;break;case"auth/wrong-password":e.error=r.message;break;default:break}}))}}},u=d,c=(t("43ee"),t("2877")),m=t("6544"),f=t.n(m),v=t("0798"),p=t("8336"),b=t("62ad"),w=t("a523"),h=t("4bd4"),k=t("0fd9b"),g=t("8654"),_=Object(c["a"])(u,a,n,!1,null,"001b1c94",null);r["default"]=_.exports;f()(_,{VAlert:v["a"],VBtn:p["a"],VCol:b["a"],VContainer:w["a"],VForm:h["a"],VRow:k["a"],VTextField:g["a"]})}}]);
//# sourceMappingURL=admin.87e86960.js.map