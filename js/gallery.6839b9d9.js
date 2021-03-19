(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gallery"],{"269a":function(e,t){e.exports=function(e,t){var r="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var n in"function"===typeof e.exports&&(r.directives=e.exports.options.directives),r.directives=r.directives||{},t)r.directives[n]=r.directives[n]||t[n]}},"39b7":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"gallery"},[r("v-dialog",{attrs:{"max-width":"100%","overlay-opacity":"0.99"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("div",[r("v-carousel",{attrs:{"hide-delimiters":""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}},e._l(e.images,(function(e,t){return r("v-carousel-item",{key:t},[r("v-img",{attrs:{height:"100%",contain:"",src:e.url.i}})],1)})),1),r("div",{staticClass:"gallery__dialog__close",on:{click:function(t){e.dialog=!1}}},[r("v-icon",[e._v("mdi-close")])],1)],1)]),r("v-col",{attrs:{cols:"12",sm:"12"}},[r("v-container",{attrs:{fluid:""}},[r("h1",{staticClass:"gallery__headline"},[e._v("Gallery")]),r("hr",{staticClass:"gallery__divider"}),r("transition-group",{staticClass:"row",attrs:{name:"list",tag:"div"}},[e._l(e.images,(function(t,n){return r("v-col",{key:t.path,staticClass:"d-flex child-flex",attrs:{cols:e.$vuetify.breakpoint.smAndDown?6:4}},[r("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4",width:"100%","max-width":"600"},on:{click:function(t){return t.stopPropagation(),e.openDialog(n)}}},[r("v-img",{attrs:{"aspect-ratio":16/9,src:t.url.i}})],1),e.user.loggedIn?r("span",{on:{click:function(r){return e.deleteItem(t.path,n)}}},[r("div",{staticClass:"gallery__item__delete"},[r("v-icon",[e._v("mdi-delete")])],1)]):e._e()],1)})),e.user.loggedIn?r("v-col",{key:e.images.length,staticClass:"d-flex child-flex",attrs:{cols:e.$vuetify.breakpoint.smAndDown?12:4}},[r("v-card",{staticClass:"mx-auto gallery__upload",attrs:{color:"#999","max-width":"'100%'"}},[r("div",{directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{ center: true }"}],staticClass:"gallery__upload__icon__wrapper",on:{click:function(t){return e.selectFiles()}}},[r("v-icon",{staticClass:"gallery__upload__icon",attrs:{color:"white","x-large":""}},[e._v("mdi-plus")])],1),r("v-card-text",{directives:[{name:"show",rawName:"v-show",value:e.files.length>0,expression:"files.length > 0"}]},[r("input",{ref:"galleryFileUpload",staticStyle:{display:"none"},attrs:{multiple:"",type:"file"},on:{change:function(t){return e.processFile(t)}}}),e._l(e.files,(function(t,n){return[n<2?r("v-chip",{key:n,staticClass:"ma-2"},[e._v(e._s(t.name)+" ("+e._s(e.formatBytes(t.size))+")")]):2===n?r("span",{key:n,staticClass:"overline grey--text text--darken-3 mx-2"},[e._v("+"+e._s(e.files.length-2)+" File(s)")]):e._e()]})),r("p",[e._v(" "+e._s(e.files.length)+" files ("+e._s(e.formatBytes(e.totalFileBytes))+" in total) ")])],2),e.files.length>0?r("v-card-actions",{staticClass:"gallery__upload__button__wrapper"},[r("button",{staticClass:"gallery__upload__button",on:{click:function(t){return t.stopPropagation(),e.uploadAll()}}},[e._v(" Upload ")])]):e._e()],1)],1):e._e()],2)],1)],1)],1)},o=[],a=(r("d81d"),r("13d5"),r("b680"),r("07ac"),r("5530")),i=r("2f62"),s=(r("4160"),r("b0c0"),r("159b"),r("59ca")),u=r.n(s),l=r("c23d"),c=r.n(l);function p(e,t,r,n){function o(e){return e instanceof r?e:new r((function(t){t(e)}))}return new(r||(r=Promise))((function(r,a){function i(e){try{u(n.next(e))}catch(t){a(t)}}function s(e){try{u(n["throw"](e))}catch(t){a(t)}}function u(e){e.done?r(e.value):o(e.value).then(i,s)}u((n=n.apply(e,t||[])).next())}))}function h(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return u([e,t])}}function u(a){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,n&&(o=2&a[0]?n["return"]:a[0]?n["throw"]||((o=n["return"])&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(o=i.trys,!(o=o.length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(s){a=[6,s],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function f(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,s=a.length;i<s;i++,o++)n[o]=a[i];return n}var d=r("4be4"),_="firebasestorage.googleapis.com",v="storageBucket",g=12e4,m=6e5,b=-9007199254740991,y=function(){function e(e,t){this.code_=w(e),this.message_="Firebase Storage: "+t,this.serverResponse_=null,this.name_="FirebaseError"}return e.prototype.codeProp=function(){return this.code},e.prototype.codeEquals=function(e){return w(e)===this.codeProp()},e.prototype.serverResponseProp=function(){return this.serverResponse_},e.prototype.setServerResponseProp=function(e){this.serverResponse_=e},Object.defineProperty(e.prototype,"name",{get:function(){return this.name_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"code",{get:function(){return this.code_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"message",{get:function(){return this.message_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!1,configurable:!0}),e}(),R={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e){return"storage/"+e}function E(){var e="An unknown error occurred, please check the error payload for server response.";return new y(R.UNKNOWN,e)}function k(e){return new y(R.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function C(e){return new y(R.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function T(){var e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new y(R.UNAUTHENTICATED,e)}function U(e){return new y(R.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function A(){return new y(R.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function O(){return new y(R.CANCELED,"User canceled the upload/download.")}function x(e){return new y(R.INVALID_URL,"Invalid URL '"+e+"'.")}function N(e){return new y(R.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function S(){return new y(R.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function I(){return new y(R.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function P(){return new y(R.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function L(e,t,r){return new y(R.INVALID_ARGUMENT,"Invalid argument in `"+t+"` at index "+e+": "+r)}function D(e,t,r,n){var o,a;return e===t?(o=e,a=1===e?"argument":"arguments"):(o="between "+e+" and "+t,a="arguments"),new y(R.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+r+"`: Expected "+o+" "+a+", received "+n+".")}function B(){return new y(R.APP_DELETED,"The Firebase app was deleted.")}function M(e){return new y(R.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function G(e,t){return new y(R.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function j(e){throw new y(R.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var W={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function F(e){switch(e){case W.RAW:case W.BASE64:case W.BASE64URL:case W.DATA_URL:return;default:throw"Expected one of the event types: ["+W.RAW+", "+W.BASE64+", "+W.BASE64URL+", "+W.DATA_URL+"]."}}var q=function(){function e(e,t){this.data=e,this.contentType=t||null}return e}();function H(e,t){switch(e){case W.RAW:return new q(z(t));case W.BASE64:case W.BASE64URL:return new q(X(e,t));case W.DATA_URL:return new q(K(t),Z(t))}throw E()}function z(e){for(var t=[],r=0;r<e.length;r++){var n=e.charCodeAt(r);if(n<=127)t.push(n);else if(n<=2047)t.push(192|n>>6,128|63&n);else if(55296===(64512&n)){var o=r<e.length-1&&56320===(64512&e.charCodeAt(r+1));if(o){var a=n,i=e.charCodeAt(++r);n=65536|(1023&a)<<10|1023&i,t.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else t.push(239,191,189)}else 56320===(64512&n)?t.push(239,191,189):t.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(t)}function V(e){var t;try{t=decodeURIComponent(e)}catch(r){throw G(W.DATA_URL,"Malformed data URL.")}return z(t)}function X(e,t){switch(e){case W.BASE64:var r=-1!==t.indexOf("-"),n=-1!==t.indexOf("_");if(r||n){var o=r?"-":"_";throw G(e,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case W.BASE64URL:var a=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(a||i){o=a?"+":"/";throw G(e,"Invalid character '"+o+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}var s;try{s=atob(t)}catch(c){throw G(e,"Invalid character found")}for(var u=new Uint8Array(s.length),l=0;l<s.length;l++)u[l]=s.charCodeAt(l);return u}var $=function(){function e(e){this.base64=!1,this.contentType=null;var t=e.match(/^data:([^,]+)?,/);if(null===t)throw G(W.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=t[1]||null;null!=r&&(this.base64=J(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=e.substring(e.indexOf(",")+1)}return e}();function K(e){var t=new $(e);return t.base64?X(W.BASE64,t.rest):V(t.rest)}function Z(e){var t=new $(e);return t.contentType}function J(e,t){var r=e.length>=t.length;return!!r&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q,Y={STATE_CHANGED:"state_changed"},ee={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},te={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function re(e){switch(e){case ee.RUNNING:case ee.PAUSING:case ee.CANCELING:return te.RUNNING;case ee.PAUSED:return te.PAUSED;case ee.SUCCESS:return te.SUCCESS;case ee.CANCELED:return te.CANCELED;case ee.ERROR:return te.ERROR;default:return te.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(e){return null!=e}function oe(e){return void 0!==e}function ae(e){return"function"===typeof e}function ie(e){return"object"===typeof e}function se(e){return ie(e)&&null!==e}function ue(e){return ie(e)&&!Array.isArray(e)}function le(e){return"string"===typeof e||e instanceof String}function ce(e){return pe(e)&&Number.isInteger(e)}function pe(e){return"number"===typeof e||e instanceof Number}function he(e){return fe()&&e instanceof Blob}function fe(){return"undefined"!==typeof Blob}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(Q||(Q={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var de=function(){function e(){var e=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=Q.NO_ERROR,this.sendPromise_=new Promise((function(t){e.xhr_.addEventListener("abort",(function(){e.errorCode_=Q.ABORT,t(e)})),e.xhr_.addEventListener("error",(function(){e.errorCode_=Q.NETWORK_ERROR,t(e)})),e.xhr_.addEventListener("load",(function(){t(e)}))}))}return e.prototype.send=function(e,t,r,n){if(this.sent_)throw j("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),ne(n))for(var o in n)n.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,n[o].toString());return ne(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},e.prototype.getErrorCode=function(){if(!this.sent_)throw j("cannot .getErrorCode() before sending");return this.errorCode_},e.prototype.getStatus=function(){if(!this.sent_)throw j("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}},e.prototype.getResponseText=function(){if(!this.sent_)throw j("cannot .getResponseText() before sending");return this.xhr_.responseText},e.prototype.abort=function(){this.xhr_.abort()},e.prototype.getResponseHeader=function(e){return this.xhr_.getResponseHeader(e)},e.prototype.addUploadProgressListener=function(e){ne(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",e)},e.prototype.removeUploadProgressListener=function(e){ne(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",e)},e}(),_e=function(){function e(){}return e.prototype.createXhrIo=function(){return new de},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ve(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function ge(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=ve();if(void 0!==r){for(var n=new r,o=0;o<e.length;o++)n.append(e[o]);return n.getBlob()}if(fe())return new Blob(e);throw Error("This browser doesn't seem to support creating Blobs")}function me(e,t,r){return e.webkitSlice?e.webkitSlice(t,r):e.mozSlice?e.mozSlice(t,r):e.slice?e.slice(t,r):null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be=function(){function e(e,t){var r=0,n="";he(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}return e.prototype.size=function(){return this.size_},e.prototype.type=function(){return this.type_},e.prototype.slice=function(t,r){if(he(this.data_)){var n=this.data_,o=me(n,t,r);return null===o?null:new e(o)}var a=new Uint8Array(this.data_.buffer,t,r-t);return new e(a,!0)},e.getBlob=function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(fe()){var n=t.map((function(t){return t instanceof e?t.data_:t}));return new e(ge.apply(null,n))}var o=t.map((function(e){return le(e)?H(W.RAW,e).data:e.data_})),a=0;o.forEach((function(e){a+=e.byteLength}));var i=new Uint8Array(a),s=0;return o.forEach((function(e){for(var t=0;t<e.length;t++)i[s++]=e[t]})),new e(i,!0)},e.prototype.uploadData=function(){return this.data_},e}(),ye=function(){function e(e,t){this.bucket=e,this.path_=t}return Object.defineProperty(e.prototype,"path",{get:function(){return this.path_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isRoot",{get:function(){return 0===this.path.length},enumerable:!1,configurable:!0}),e.prototype.fullServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)},e.prototype.bucketOnlyServerUrl=function(){var e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"},e.makeFromBucketSpec=function(t){var r;try{r=e.makeFromUrl(t)}catch(n){return new e(t,"")}if(""===r.path)return r;throw N(t)},e.makeFromUrl=function(t){var r=null,n="([A-Za-z0-9.\\-_]+)";function o(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}var a="(/(.*))?$",i=new RegExp("^gs://"+n+a,"i"),s={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}for(var l="v[A-Za-z0-9_]+",c=_.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",h=new RegExp("^https?://"+c+"/"+l+"/b/"+n+"/o"+p,"i"),f={bucket:1,path:3},d="(?:storage.googleapis.com|storage.cloud.google.com)",v="([^?#]*)",g=new RegExp("^https?://"+d+"/"+n+"/"+v,"i"),m={bucket:1,path:2},b=[{regex:i,indices:s,postModify:o},{regex:h,indices:f,postModify:u},{regex:g,indices:m,postModify:u}],y=0;y<b.length;y++){var R=b[y],w=R.regex.exec(t);if(w){var E=w[R.indices.bucket],k=w[R.indices.path];k||(k=""),r=new e(E,k),R.postModify(r);break}}if(null==r)throw x(t);return r},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Re(e){var t;try{t=JSON.parse(e)}catch(r){return null}return ue(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e){if(0===e.length)return null;var t=e.lastIndexOf("/");if(-1===t)return"";var r=e.slice(0,t);return r}function Ee(e,t){var r=t.split("/").filter((function(e){return e.length>0})).join("/");return 0===e.length?r:e+"/"+r}function ke(e){var t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e){return"https://"+_+"/v0"+e}function Te(e){var t=encodeURIComponent,r="?";for(var n in e)if(e.hasOwnProperty(n)){var o=t(n)+"="+t(e[n]);r=r+o+"&"}return r=r.slice(0,-1),r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e,t){return t}var Ae=function(){function e(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||Ue}return e}(),Oe=null;function xe(e){return!le(e)||e.length<2?e:ke(e)}function Ne(){if(Oe)return Oe;var e=[];function t(e,t){return xe(t)}e.push(new Ae("bucket")),e.push(new Ae("generation")),e.push(new Ae("metageneration")),e.push(new Ae("name","fullPath",!0));var r=new Ae("name");function n(e,t){return ne(t)?Number(t):t}r.xform=t,e.push(r);var o=new Ae("size");return o.xform=n,e.push(o),e.push(new Ae("timeCreated")),e.push(new Ae("updated")),e.push(new Ae("md5Hash",null,!0)),e.push(new Ae("cacheControl",null,!0)),e.push(new Ae("contentDisposition",null,!0)),e.push(new Ae("contentEncoding",null,!0)),e.push(new Ae("contentLanguage",null,!0)),e.push(new Ae("contentType",null,!0)),e.push(new Ae("metadata","customMetadata",!0)),Oe=e,Oe}function Se(e,t){function r(){var r=e["bucket"],n=e["fullPath"],o=new ye(r,n);return t.makeStorageReference(o)}Object.defineProperty(e,"ref",{get:r})}function Ie(e,t,r){for(var n={type:"file"},o=r.length,a=0;a<o;a++){var i=r[a];n[i.local]=i.xform(n,t[i.server])}return Se(n,e),n}function Pe(e,t,r){var n=Re(t);if(null===n)return null;var o=n;return Ie(e,o,r)}function Le(e,t){var r=Re(t);if(null===r)return null;if(!le(r["downloadTokens"]))return null;var n=r["downloadTokens"];if(0===n.length)return null;var o=encodeURIComponent,a=n.split(","),i=a.map((function(t){var r=e["bucket"],n=e["fullPath"],a="/b/"+o(r)+"/o/"+o(n),i=Ce(a),s=Te({alt:"media",token:t});return i+s}));return i[0]}function De(e,t){for(var r={},n=t.length,o=0;o<n;o++){var a=t[o];a.writable&&(r[a.server]=e[a.local])}return JSON.stringify(r)}function Be(e){if(!ie(e)||!e)throw"Expected Metadata object.";for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];if("customMetadata"===t){if(!ie(r))throw"Expected object for 'customMetadata' mapping."}else if(se(r))throw"Mapping for '"+t+"' cannot be an object."}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me="maxResults",Ge=1e3,je="pageToken",We="prefixes",Fe="items";function qe(e,t,r){var n={prefixes:[],items:[],nextPageToken:r["nextPageToken"]};if(r[We])for(var o=0,a=r[We];o<a.length;o++){var i=a[o],s=i.replace(/\/$/,""),u=e.makeStorageReference(new ye(t,s));n.prefixes.push(u)}if(r[Fe])for(var l=0,c=r[Fe];l<c.length;l++){var p=c[l];u=e.makeStorageReference(new ye(t,p["name"]));n.items.push(u)}return n}function He(e,t,r){var n=Re(r);if(null===n)return null;var o=n;return qe(e,t,o)}function ze(e){if(!ie(e)||!e)throw"Expected ListOptions object.";for(var t in e)if(t===Me){if(!ce(e[Me])||e[Me]<=0)throw"Expected maxResults to be a positive number.";if(e[Me]>1e3)throw"Expected maxResults to be less than or equal to "+Ge+"."}else{if(t!==je)throw"Unknown option: "+t;if(e[je]&&!le(e[je]))throw"Expected pageToken to be string."}}var Ve=function(){function e(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(e){if(!e)throw E()}function $e(e,t){function r(r,n){var o=Pe(e,n,t);return Xe(null!==o),o}return r}function Ke(e,t){function r(r,n){var o=He(e,t,n);return Xe(null!==o),o}return r}function Ze(e,t){function r(r,n){var o=Pe(e,n,t);return Xe(null!==o),Le(o,n)}return r}function Je(e){function t(t,r){var n;return n=401===t.getStatus()?T():402===t.getStatus()?C(e.bucket):403===t.getStatus()?U(e.path):r,n.setServerResponseProp(r.serverResponseProp()),n}return t}function Qe(e){var t=Je(e);function r(r,n){var o=t(r,n);return 404===r.getStatus()&&(o=k(e.path)),o.setServerResponseProp(n.serverResponseProp()),o}return r}function Ye(e,t,r){var n=t.fullServerUrl(),o=Ce(n),a="GET",i=e.maxOperationRetryTime(),s=new Ve(o,a,$e(e,r),i);return s.errorHandler=Qe(t),s}function et(e,t,r,n,o){var a={};t.isRoot?a["prefix"]="":a["prefix"]=t.path+"/",r&&r.length>0&&(a["delimiter"]=r),n&&(a["pageToken"]=n),o&&(a["maxResults"]=o);var i=t.bucketOnlyServerUrl(),s=Ce(i),u="GET",l=e.maxOperationRetryTime(),c=new Ve(s,u,Ke(e,t.bucket),l);return c.urlParams=a,c.errorHandler=Je(t),c}function tt(e,t,r){var n=t.fullServerUrl(),o=Ce(n),a="GET",i=e.maxOperationRetryTime(),s=new Ve(o,a,Ze(e,r),i);return s.errorHandler=Qe(t),s}function rt(e,t,r,n){var o=t.fullServerUrl(),a=Ce(o),i="PATCH",s=De(r,n),u={"Content-Type":"application/json; charset=utf-8"},l=e.maxOperationRetryTime(),c=new Ve(a,i,$e(e,n),l);return c.headers=u,c.body=s,c.errorHandler=Qe(t),c}function nt(e,t){var r=t.fullServerUrl(),n=Ce(r),o="DELETE",a=e.maxOperationRetryTime();function i(e,t){}var s=new Ve(n,o,i,a);return s.successCodes=[200,204],s.errorHandler=Qe(t),s}function ot(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function at(e,t,r){var n=Object.assign({},r);return n["fullPath"]=e.path,n["size"]=t.size(),n["contentType"]||(n["contentType"]=ot(null,t)),n}function it(e,t,r,n,o){var a=t.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function s(){for(var e="",t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}var u=s();i["Content-Type"]="multipart/related; boundary="+u;var l=at(t,n,o),c=De(l,r),p="--"+u+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+c+"\r\n--"+u+"\r\nContent-Type: "+l["contentType"]+"\r\n\r\n",h="\r\n--"+u+"--",f=be.getBlob(p,n,h);if(null===f)throw S();var d={name:l["fullPath"]},_=Ce(a),v="POST",g=e.maxUploadRetryTime(),m=new Ve(_,v,$e(e,r),g);return m.urlParams=d,m.headers=i,m.body=f.uploadData(),m.errorHandler=Je(t),m}var st=function(){function e(e,t,r,n){this.current=e,this.total=t,this.finalized=!!r,this.metadata=n||null}return e}();function ut(e,t){var r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch(o){Xe(!1)}var n=t||["active"];return Xe(!!r&&-1!==n.indexOf(r)),r}function lt(e,t,r,n,o){var a=t.bucketOnlyServerUrl(),i=at(t,n,o),s={name:i["fullPath"]},u=Ce(a),l="POST",c={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":i["contentType"],"Content-Type":"application/json; charset=utf-8"},p=De(i,r),h=e.maxUploadRetryTime();function f(e){var t;ut(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(r){Xe(!1)}return Xe(le(t)),t}var d=new Ve(u,l,f,h);return d.urlParams=s,d.headers=c,d.body=p,d.errorHandler=Je(t),d}function ct(e,t,r,n){var o={"X-Goog-Upload-Command":"query"};function a(e){var t=ut(e,["active","final"]),r=null;try{r=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(a){Xe(!1)}r||Xe(!1);var o=Number(r);return Xe(!isNaN(o)),new st(o,n.size(),"final"===t)}var i="POST",s=e.maxUploadRetryTime(),u=new Ve(r,i,a,s);return u.headers=o,u.errorHandler=Je(t),u}var pt=262144;function ht(e,t,r,n,o,a,i,s){var u=new st(0,0);if(i?(u.current=i.current,u.total=i.total):(u.current=0,u.total=n.size()),n.size()!==u.total)throw I();var l=u.total-u.current,c=l;o>0&&(c=Math.min(c,o));var p=u.current,h=p+c,f=c===l?"upload, finalize":"upload",d={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":u.current},_=n.slice(p,h);if(null===_)throw S();function v(e,r){var o,i=ut(e,["active","final"]),s=u.current+c,l=n.size();return o="final"===i?$e(t,a)(e,r):null,new st(s,l,"final"===i,o)}var g="POST",m=t.maxUploadRetryTime(),b=new Ve(r,g,v,m);return b.headers=d,b.body=_.uploadData(),b.progressCallback=s||null,b.errorHandler=Je(e),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ft=function(){function e(e,t,r){var n=ae(e)||ne(t)||ne(r);if(n)this.next=e,this.error=t||null,this.complete=r||null;else{var o=e;this.next=o.next||null,this.error=o.error||null,this.complete=o.complete||null}}return e}(),dt=function(){function e(e,t,r,n,o,a){this.bytesTransferred=e,this.totalBytes=t,this.state=r,this.metadata=n,this.task=o,this.ref=a}return e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t(e,t,r){for(var n=t.length,o=t.length,a=0;a<t.length;a++)if(t[a].optional){n=a;break}var i=n<=r.length&&r.length<=o;if(!i)throw D(n,o,e,r.length);for(a=0;a<r.length;a++)try{t[a].validator(r[a])}catch(s){throw s instanceof Error?L(a,e,s.message):L(a,e,s)}}var vt=function(){function e(e,t){var r=this;this.validator=function(t){r.optional&&!oe(t)||e(t)},this.optional=!!t}return e}();function gt(e,t){return function(r){e(r),t(r)}}function mt(e,t){function r(e){if(!le(e))throw"Expected string."}var n;return n=e?gt(r,e):r,new vt(n,t)}function bt(){function e(e){var t=e instanceof Uint8Array||e instanceof ArrayBuffer||fe()&&e instanceof Blob;if(!t)throw"Expected Blob or File."}return new vt(e)}function yt(e){return new vt(Be,e)}function Rt(e){return new vt(ze,e)}function wt(){function e(e){var t=pe(e)&&e>=0;if(!t)throw"Expected a number 0 or greater."}return new vt(e)}function Et(e,t){function r(t){var r=null===t||ne(t)&&t instanceof Object;if(!r)throw"Expected an Object.";void 0!==e&&null!==e&&e(t)}return new vt(r,t)}function kt(e){function t(e){var t=null===e||ae(e);if(!t)throw"Expected a Function."}return new vt(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];Promise.resolve().then((function(){return e.apply(void 0,t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt=function(){function e(e,t,r,n,o,a){var i=this;void 0===a&&(a=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=e,this.authWrapper_=t,this.location_=r,this.blob_=o,this.metadata_=a,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=ee.RUNNING,this.errorHandler_=function(e){i.request_=null,i.chunkMultiplier_=1,e.codeEquals(R.CANCELED)?(i.needToFetchStatus_=!0,i.completeTransitions_()):(i.error_=e,i.transition_(ee.ERROR))},this.metadataErrorHandler_=function(e){i.request_=null,e.codeEquals(R.CANCELED)?i.completeTransitions_():(i.error_=e,i.transition_(ee.ERROR))},this.promise_=new Promise((function(e,t){i.resolve_=e,i.reject_=t,i.start_()})),this.promise_.then(null,(function(){}))}return e.prototype.makeProgressCallback_=function(){var e=this,t=this.transferred_;return function(r){return e.updateProgress_(t+r)}},e.prototype.shouldDoResumable_=function(e){return e.size()>262144},e.prototype.start_=function(){this.state_===ee.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},e.prototype.resolveToken_=function(e){var t=this;this.authWrapper_.getAuthToken().then((function(r){switch(t.state_){case ee.RUNNING:e(r);break;case ee.CANCELING:t.transition_(ee.CANCELED);break;case ee.PAUSING:t.transition_(ee.PAUSED);break}}))},e.prototype.createResumable_=function(){var e=this;this.resolveToken_((function(t){var r=lt(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.uploadUrl_=t,e.needToFetchStatus_=!1,e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.fetchStatus_=function(){var e=this,t=this.uploadUrl_;this.resolveToken_((function(r){var n=ct(e.authWrapper_,e.location_,t,e.blob_),o=e.authWrapper_.makeRequest(n,r);e.request_=o,o.getPromise().then((function(t){t=t,e.request_=null,e.updateProgress_(t.current),e.needToFetchStatus_=!1,t.finalized&&(e.needToFetchMetadata_=!0),e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.continueUpload_=function(){var e=this,t=pt*this.chunkMultiplier_,r=new st(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_((function(o){var a;try{a=ht(e.location_,e.authWrapper_,n,e.blob_,t,e.mappings_,r,e.makeProgressCallback_())}catch(s){return e.error_=s,void e.transition_(ee.ERROR)}var i=e.authWrapper_.makeRequest(a,o);e.request_=i,i.getPromise().then((function(t){e.increaseMultiplier_(),e.request_=null,e.updateProgress_(t.current),t.finalized?(e.metadata_=t.metadata,e.transition_(ee.SUCCESS)):e.completeTransitions_()}),e.errorHandler_)}))},e.prototype.increaseMultiplier_=function(){var e=pt*this.chunkMultiplier_;e<33554432&&(this.chunkMultiplier_*=2)},e.prototype.fetchMetadata_=function(){var e=this;this.resolveToken_((function(t){var r=Ye(e.authWrapper_,e.location_,e.mappings_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.transition_(ee.SUCCESS)}),e.metadataErrorHandler_)}))},e.prototype.oneShotUpload_=function(){var e=this;this.resolveToken_((function(t){var r=it(e.authWrapper_,e.location_,e.mappings_,e.blob_,e.metadata_),n=e.authWrapper_.makeRequest(r,t);e.request_=n,n.getPromise().then((function(t){e.request_=null,e.metadata_=t,e.updateProgress_(e.blob_.size()),e.transition_(ee.SUCCESS)}),e.errorHandler_)}))},e.prototype.updateProgress_=function(e){var t=this.transferred_;this.transferred_=e,this.transferred_!==t&&this.notifyObservers_()},e.prototype.transition_=function(e){if(this.state_!==e)switch(e){case ee.CANCELING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case ee.PAUSING:this.state_=e,null!==this.request_&&this.request_.cancel();break;case ee.RUNNING:var t=this.state_===ee.PAUSED;this.state_=e,t&&(this.notifyObservers_(),this.start_());break;case ee.PAUSED:this.state_=e,this.notifyObservers_();break;case ee.CANCELED:this.error_=O(),this.state_=e,this.notifyObservers_();break;case ee.ERROR:this.state_=e,this.notifyObservers_();break;case ee.SUCCESS:this.state_=e,this.notifyObservers_();break}},e.prototype.completeTransitions_=function(){switch(this.state_){case ee.PAUSING:this.transition_(ee.PAUSED);break;case ee.CANCELING:this.transition_(ee.CANCELED);break;case ee.RUNNING:this.start_();break}},Object.defineProperty(e.prototype,"snapshot",{get:function(){var e=re(this.state_);return new dt(this.transferred_,this.blob_.size(),e,this.metadata_,this,this.ref_)},enumerable:!1,configurable:!0}),e.prototype.on=function(e,t,r,n){function o(){if(e!==Y.STATE_CHANGED)throw"Expected one of the event types: ["+Y.STATE_CHANGED+"]."}var a="Expected a function or an Object with one of `next`, `error`, `complete` properties.",i=kt(!0).validator,s=Et(null,!0).validator;function u(e){try{return void i(e)}catch(r){}try{s(e);var t=oe(e["next"])||oe(e["error"])||oe(e["complete"]);if(!t)throw"";return}catch(r){throw a}}var l=[mt(o),Et(u,!0),kt(!0),kt(!0)];_t("on",l,arguments);var c=this;function p(e){function t(t,r,o){null!==e&&_t("on",e,arguments);var a=new ft(t,r,n);return c.addObserver_(a),function(){c.removeObserver_(a)}}return t}function h(e){if(null===e)throw a;u(e)}var f=[Et(h),kt(!0),kt(!0)],d=!(oe(t)||oe(r)||oe(n));return d?p(f):p(null)(t,r,n)},e.prototype.then=function(e,t){return this.promise_.then(e,t)},e.prototype.catch=function(e){return this.then(null,e)},e.prototype.addObserver_=function(e){this.observers_.push(e),this.notifyObserver_(e)},e.prototype.removeObserver_=function(e){var t=this.observers_.indexOf(e);-1!==t&&this.observers_.splice(t,1)},e.prototype.notifyObservers_=function(){var e=this;this.finishPromise_();var t=this.observers_.slice();t.forEach((function(t){e.notifyObserver_(t)}))},e.prototype.finishPromise_=function(){if(null!==this.resolve_){var e=!0;switch(re(this.state_)){case te.SUCCESS:Ct(this.resolve_.bind(null,this.snapshot))();break;case te.CANCELED:case te.ERROR:var t=this.reject_;Ct(t.bind(null,this.error_))();break;default:e=!1;break}e&&(this.resolve_=null,this.reject_=null)}},e.prototype.notifyObserver_=function(e){var t=re(this.state_);switch(t){case te.RUNNING:case te.PAUSED:e.next&&Ct(e.next.bind(e,this.snapshot))();break;case te.SUCCESS:e.complete&&Ct(e.complete.bind(e))();break;case te.CANCELED:case te.ERROR:e.error&&Ct(e.error.bind(e,this.error_))();break;default:e.error&&Ct(e.error.bind(e,this.error_))()}},e.prototype.resume=function(){_t("resume",[],arguments);var e=this.state_===ee.PAUSED||this.state_===ee.PAUSING;return e&&this.transition_(ee.RUNNING),e},e.prototype.pause=function(){_t("pause",[],arguments);var e=this.state_===ee.RUNNING;return e&&this.transition_(ee.PAUSING),e},e.prototype.cancel=function(){_t("cancel",[],arguments);var e=this.state_===ee.RUNNING||this.state_===ee.PAUSING;return e&&this.transition_(ee.CANCELING),e},e}(),Ut=function(){function e(e,t){this.authWrapper=e,this.location=t instanceof ye?t:ye.makeFromUrl(t)}return e.prototype.toString=function(){return _t("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},e.prototype.newRef=function(t,r){return new e(t,r)},e.prototype.mappings=function(){return Ne()},e.prototype.child=function(e){_t("child",[mt()],arguments);var t=Ee(this.location.path,e),r=new ye(this.location.bucket,t);return this.newRef(this.authWrapper,r)},Object.defineProperty(e.prototype,"parent",{get:function(){var e=we(this.location.path);if(null===e)return null;var t=new ye(this.location.bucket,e);return this.newRef(this.authWrapper,t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"root",{get:function(){var e=new ye(this.location.bucket,"");return this.newRef(this.authWrapper,e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return ke(this.location.path)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!1,configurable:!0}),e.prototype.put=function(e,t){return void 0===t&&(t=null),_t("put",[bt(),yt(!0)],arguments),this.throwIfRoot_("put"),new Tt(this,this.authWrapper,this.location,this.mappings(),new be(e),t)},e.prototype.putString=function(e,t,r){void 0===t&&(t=W.RAW),_t("putString",[mt(),mt(F,!0),yt(!0)],arguments),this.throwIfRoot_("putString");var n=H(t,e),o=Object.assign({},r);return!ne(o["contentType"])&&ne(n.contentType)&&(o["contentType"]=n.contentType),new Tt(this,this.authWrapper,this.location,this.mappings(),new be(n.data,!0),o)},e.prototype.delete=function(){var e=this;return _t("delete",[],arguments),this.throwIfRoot_("delete"),this.authWrapper.getAuthToken().then((function(t){var r=nt(e.authWrapper,e.location);return e.authWrapper.makeRequest(r,t).getPromise()}))},e.prototype.listAll=function(){_t("listAll",[],arguments);var e={prefixes:[],items:[]};return this.listAllHelper(e).then((function(){return e}))},e.prototype.listAllHelper=function(e,t){return p(this,void 0,void 0,(function(){var r,n,o,a;return h(this,(function(i){switch(i.label){case 0:return r={pageToken:t},[4,this.list(r)];case 1:return n=i.sent(),(o=e.prefixes).push.apply(o,n.prefixes),(a=e.items).push.apply(a,n.items),null==n.nextPageToken?[3,3]:[4,this.listAllHelper(e,n.nextPageToken)];case 2:i.sent(),i.label=3;case 3:return[2]}}))}))},e.prototype.list=function(e){_t("list",[Rt(!0)],arguments);var t=this;return this.authWrapper.getAuthToken().then((function(r){var n=e||{},o=et(t.authWrapper,t.location,"/",n.pageToken,n.maxResults);return t.authWrapper.makeRequest(o,r).getPromise()}))},e.prototype.getMetadata=function(){var e=this;return _t("getMetadata",[],arguments),this.throwIfRoot_("getMetadata"),this.authWrapper.getAuthToken().then((function(t){var r=Ye(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(r,t).getPromise()}))},e.prototype.updateMetadata=function(e){var t=this;return _t("updateMetadata",[yt()],arguments),this.throwIfRoot_("updateMetadata"),this.authWrapper.getAuthToken().then((function(r){var n=rt(t.authWrapper,t.location,e,t.mappings());return t.authWrapper.makeRequest(n,r).getPromise()}))},e.prototype.getDownloadURL=function(){var e=this;return _t("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL"),this.authWrapper.getAuthToken().then((function(t){var r=tt(e.authWrapper,e.location,e.mappings());return e.authWrapper.makeRequest(r,t).getPromise().then((function(e){if(null===e)throw P();return e}))}))},e.prototype.throwIfRoot_=function(e){if(""===this.location.path)throw M(e)},e}(),At=function(){function e(e){this.promise_=Promise.reject(e)}return e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){},e}(),Ot=function(){function e(){this.map=new Map,this.id=b}return e.prototype.addRequest=function(e){var t=this,r=this.id;this.id++,this.map.set(r,e),e.getPromise().then((function(){return t.map.delete(r)}),(function(){return t.map.delete(r)}))},e.prototype.clear=function(){this.map.forEach((function(e){e&&e.cancel(!0)})),this.map.clear()},e}(),xt=function(){function e(t,r,n,o,a,i){var s;if(this.bucket_=null,this.appId_=null,this.deleted_=!1,this.app_=t,null!==this.app_){var u=this.app_.options;ne(u)&&(this.bucket_=e.extractBucket_(u),this.appId_=null!==(s=u.appId)&&void 0!==s?s:null)}this.authProvider_=r,this.storageRefMaker_=n,this.requestMaker_=o,this.pool_=i,this.service_=a,this.maxOperationRetryTime_=g,this.maxUploadRetryTime_=m,this.requestMap_=new Ot}return e.extractBucket_=function(e){var t=e[v]||null;if(null==t)return null;var r=ye.makeFromBucketSpec(t);return r.bucket},e.prototype.getAuthToken=function(){var e=this.authProvider_.getImmediate({optional:!0});return e?e.getToken().then((function(e){return null!==e?e.accessToken:null}),(function(){return null})):Promise.resolve(null)},e.prototype.bucket=function(){if(this.deleted_)throw B();return this.bucket_},e.prototype.service=function(){return this.service_},e.prototype.makeStorageReference=function(e){return this.storageRefMaker_(this,e)},e.prototype.makeRequest=function(e,t){if(this.deleted_)return new At(B());var r=this.requestMaker_(e,this.appId_,t,this.pool_);return this.requestMap_.addRequest(r),r},e.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},e.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},e.prototype.setMaxUploadRetryTime=function(e){this.maxUploadRetryTime_=e},e.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},e.prototype.setMaxOperationRetryTime=function(e){this.maxOperationRetryTime_=e},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(e,t,r){var n=1,o=null,a=!1,i=0;function s(){return 2===i}var u=!1;function l(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];u||(u=!0,t.apply(null,e))}function c(t){o=setTimeout((function(){o=null,e(p,s())}),t)}function p(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(!u)if(e)l.call.apply(l,f([null,e],t));else{var o,p=s()||a;if(p)l.call.apply(l,f([null,e],t));else n<64&&(n*=2),1===i?(i=2,o=0):o=1e3*(n+Math.random()),c(o)}}var h=!1;function d(e){h||(h=!0,u||(null!==o?(e||(i=2),clearTimeout(o),c(0)):e||(i=1)))}return c(0),setTimeout((function(){a=!0,d(!0)}),r),d}function St(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var It=function(){function e(e,t,r,n,o,a,i,s,u,l,c){var p=this;this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=a.slice(),this.callback_=i,this.errorCallback_=s,this.progressCallback_=l,this.timeout_=u,this.pool_=c,this.promise_=new Promise((function(e,t){p.resolve_=e,p.reject_=t,p.start_()}))}return e.prototype.start_=function(){var e=this;function t(t,r){if(r)t(!1,new Pt(!1,null,!0));else{var n=e.pool_.createXhrIo();e.pendingXhr_=n,null!==e.progressCallback_&&n.addUploadProgressListener(o),n.send(e.url_,e.method_,e.body_,e.headers_).then((function(r){null!==e.progressCallback_&&r.removeUploadProgressListener(o),e.pendingXhr_=null,r=r;var n=r.getErrorCode()===Q.NO_ERROR,a=r.getStatus();if(n&&!e.isRetryStatusCode_(a)){var i=-1!==e.successCodes_.indexOf(a);t(!0,new Pt(i,r))}else{var s=r.getErrorCode()===Q.ABORT;t(!1,new Pt(!1,null,s))}}))}function o(t){var r=t.loaded,n=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(r,n)}}function r(t,r){var n=e.resolve_,o=e.reject_,a=r.xhr;if(r.wasSuccessCode)try{var i=e.callback_(a,a.getResponseText());oe(i)?n(i):n()}catch(u){o(u)}else if(null!==a){var s=E();s.setServerResponseProp(a.getResponseText()),e.errorCallback_?o(e.errorCallback_(a,s)):o(s)}else if(r.canceled){s=e.appDelete_?B():O();o(s)}else{s=A();o(s)}}this.canceled_?r(!1,new Pt(!1,null,!0)):this.backoffId_=Nt(t,r,this.timeout_)},e.prototype.getPromise=function(){return this.promise_},e.prototype.cancel=function(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&St(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},e.prototype.isRetryStatusCode_=function(e){var t=e>=500&&e<600,r=[408,429],n=-1!==r.indexOf(e),o=-1!==this.additionalRetryCodes_.indexOf(e);return t||n||o},e}(),Pt=function(){function e(e,t,r){this.wasSuccessCode=e,this.xhr=t,this.canceled=!!r}return e}();function Lt(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Dt(e){var t="undefined"!==typeof c.a?c.a.SDK_VERSION:"AppManager";e["X-Firebase-Storage-Version"]="webjs/"+t}function Bt(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Mt(e,t,r,n){var o=Te(e.urlParams),a=e.url+o,i=Object.assign({},e.headers);return Bt(i,t),Lt(i,r),Dt(i),new It(a,e.method,i,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt=function(){function e(e,t,r,n){function o(e,t){return new Ut(e,t)}if(this.bucket_=null,this.authWrapper_=new xt(e,t,o,Mt,this,r),this.app_=e,null!=n)this.bucket_=ye.makeFromBucketSpec(n);else{var a=this.authWrapper_.bucket();null!=a&&(this.bucket_=new ye(a,""))}this.internals_=new jt(this)}return e.prototype.ref=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(/^[A-Za-z]+:\/\//.test(e))throw"Expected child path but got a URL, use refFromURL instead."}if(_t("ref",[mt(t,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var r=new Ut(this.authWrapper_,this.bucket_);return null!=e?r.child(e):r},e.prototype.refFromURL=function(e){function t(e){if("string"!==typeof e)throw"Path is not a string.";if(!/^[A-Za-z]+:\/\//.test(e))throw"Expected full URL but got a child path, use ref instead.";try{ye.makeFromUrl(e)}catch(t){throw"Expected valid full URL but got an invalid one."}}return _t("refFromURL",[mt(t,!1)],arguments),new Ut(this.authWrapper_,e)},Object.defineProperty(e.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!1,configurable:!0}),e.prototype.setMaxUploadRetryTime=function(e){_t("setMaxUploadRetryTime",[wt()],arguments),this.authWrapper_.setMaxUploadRetryTime(e)},e.prototype.setMaxOperationRetryTime=function(e){_t("setMaxOperationRetryTime",[wt()],arguments),this.authWrapper_.setMaxOperationRetryTime(e)},Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!1,configurable:!0}),e}(),jt=function(){function e(e){this.service_=e}return e.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Promise.resolve()},e}(),Wt="@firebase/storage",Ft="0.3.39",qt="storage";function Ht(e,t){var r=e.getProvider("app").getImmediate(),n=e.getProvider("auth-internal");return new Gt(r,n,new _e,t)}function zt(e){var t={TaskState:te,TaskEvent:Y,StringFormat:W,Storage:Gt,Reference:Ut};e.INTERNAL.registerComponent(new d["Component"](qt,Ht,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Wt,Ft)}zt(c.a);var Vt=r("4360"),Xt={getGalleryImages:function(){var e=u.a.storage(),t=e.ref(),r=t.child("gallery");r.listAll().then((function(e){Vt["a"].dispatch("setGalleryImages",e.items.map((function(e){return{path:e.fullPath,url:e.getDownloadURL()}})))})).catch((function(e){}))},uploadAll:function(e){var t=this;e.forEach((function(e){return t.uploadSingle(e)}))},uploadSingle:function(e){var t=u.a.storage().ref(),r={contentType:e.type},n=t.child("gallery/"+e.name).put(e,r);n.on(u.a.storage.TaskEvent.STATE_CHANGED,(function(e){e.bytesTransferred,e.totalBytes;switch(e.state){case u.a.storage.TaskState.PAUSED:break;case u.a.storage.TaskState.RUNNING:break}}),(function(e){switch(e.code){case"storage/unauthorized":break;case"storage/canceled":break;case"storage/unknown":break}}),(function(){n.snapshot.ref.getDownloadURL().then((function(e){Vt["a"].dispatch("addImageToGallery",{path:n.snapshot.ref.fullPath,url:n.snapshot.ref.getDownloadURL()})}))}))},deleteItem:function(e,t){var r=u.a.storage(),n=r.ref(),o=n.child(e);o.delete().then((function(){})).then((function(){Vt["a"].dispatch("deleteGalleryImage",t)})).catch((function(e){}))}},$t={name:"Intro",data:function(){return{files:[],dialog:!1,overlayImage:"",model:0}},mounted:function(){Xt.getGalleryImages()},computed:Object(a["a"])(Object(a["a"])({},Object(i["b"])({user:"user",images:"galleryImages"})),{},{totalFileBytes:function(){return Object.values(this.files).map((function(e){return e.size})).reduce((function(e,t){return e+t}),0)}}),methods:{uploadAll:function(){Xt.uploadAll(this.files),this.files=[]},deleteItem:function(e,t){Xt.deleteItem(e,t)},selectFiles:function(){this.$refs.galleryFileUpload.click()},processFile:function(e){this.files=e.target.files},formatBytes:function(e,t){if(0==e)return"0 Bytes";var r=1024,n=t||1,o=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],a=Math.floor(Math.log(e)/Math.log(r));return parseFloat((e/Math.pow(r,a)).toFixed(n))+" "+o[a]},openDialog:function(e){this.dialog=!0,this.model=e}}},Kt=$t,Zt=(r("75ce"),r("2877")),Jt=r("6544"),Qt=r.n(Jt),Yt=r("b0af"),er=r("99d9"),tr=r("5e66"),rr=r("3e35"),nr=(r("4de4"),r("3835")),or=(r("8adc"),r("58df")),ar=r("0789"),ir=r("9d26"),sr=r("a9ad"),ur=r("4e82"),lr=r("7560"),cr=r("f2e7"),pr=r("1c87"),hr=r("af2b"),fr=r("d9bd"),dr=Object(or["a"])(sr["a"],hr["a"],pr["a"],lr["a"],Object(ur["a"])("chipGroup"),Object(cr["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({"v-chip":!0},pr["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(pr["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var e=this,t=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];t.forEach((function(t){var r=Object(nr["a"])(t,2),n=r[0],o=r[1];e.$attrs.hasOwnProperty(n)&&Object(fr["a"])(n,o,e)}))},methods:{click:function(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter:function(){var e=[];return this.isActive&&e.push(this.$createElement(ir["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(ar["b"],e)},genClose:function(){var e=this;return this.$createElement(ir["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.$emit("click:close"),e.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(e){var t=[this.genContent()],r=this.generateRouteLink(),n=r.tag,o=r.data;o.attrs=Object(a["a"])(Object(a["a"])({},o.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:o.attrs.tabindex}),o.directives.push({name:"show",value:this.active}),o=this.setBackgroundColor(this.color,o);var i=this.textColor||this.outlined&&this.color;return e(n,this.setTextColor(i,o),t)}}),_r=r("62ad"),vr=r("a523"),gr=r("169a"),mr=r("132d"),br=r("adda"),yr=r("0fd9b"),Rr=r("269a"),wr=r.n(Rr),Er=r("5607"),kr=Object(Zt["a"])(Kt,n,o,!1,null,"11b8d526",null);t["default"]=kr.exports;Qt()(kr,{VCard:Yt["a"],VCardActions:er["a"],VCardText:er["b"],VCarousel:tr["a"],VCarouselItem:rr["a"],VChip:dr,VCol:_r["a"],VContainer:vr["a"],VDialog:gr["a"],VIcon:mr["a"],VImg:br["a"],VRow:yr["a"]}),wr()(kr,{Ripple:Er["a"]})},"75ce":function(e,t,r){"use strict";var n=r("a01f"),o=r.n(n);o.a},"8adc":function(e,t,r){},a01f:function(e,t,r){}}]);
//# sourceMappingURL=gallery.6839b9d9.js.map