!function(){"use strict";var t=Object.freeze({setup:function(){for(var t=document.getElementsByClassName("copyable-code"),e=function(){var t=o[n].getElementsByClassName("highlight")[0];if(!t)return{};var e=t.innerText.trim(),i=document.createElement("div"),a=document.createElement("button"),r=document.createElement("span");i.className="copy-button-container",r.className="fa fa-clipboard",a.className="copy-button",a.appendChild(r),a.appendChild(document.createTextNode("Copy")),i.appendChild(a),t.insertBefore(i,t.children[0]),a.addEventListener("click",function(){var t=document.createElement("textarea");t.style.position="fixed",document.body.appendChild(t),t.value=e,t.select();try{if(!document.execCommand("copy"))throw new Error("Failed to copy")}catch(t){console.error("Failed to copy"),console.error(t)}document.body.removeChild(t)})},n=0,o=t;n<o.length;n+=1){var i=e();if(i)return i.v}}});function e(t){return!t.siblings("ul:not(.simple)").length}function n(t){var e=window.docsExcludedNav;if(!e||!e.length)return!1;for(var n=0;n<e.length;n+=1)if(-1!==t[0].href.indexOf(e[n]))return!0;return!1}var o=Object.freeze({setup:function(t){if(void 0===window.history||void 0===document.querySelectorAll||void 0===document.body.classList||void 0===(new XMLHttpRequest).responseURL)return!1;var o=document.querySelector(".sphinxsidebarwrapper"),i=document.querySelector(".body"),a={};function r(){void 0!==a.timeoutID&&window.clearTimeout(a.timeoutID),void 0!==a.xhr&&a.xhr.abort(),a={}}function s(e,n){void 0===e&&console.error("Going to undefined path"),r(),i.classList.add("loading"),a.timeoutID=window.setTimeout(function(){i.classList.remove("loading"),a.timeoutID=-1},1e4);var s=new Date;a.xhr=function(t,e){var n=new XMLHttpRequest;n.onload=function(){n.status>=200&&n.status<400?(e.success(n.responseText,n.responseURL),e.complete()):(e.error(),e.complete())},n.onerror=function(){e.error(),e.complete()},n.open("GET",t,!0);try{n.send()}catch(t){e.error(),e.complete()}}(e,{complete:function(){r()},error:function(t){console.error("Failed to load "+e),window.location=e},success:function(e,a){var r=new Date-s;i.classList.remove("loading"),n&&window.history.pushState({href:a},"",a);var c=document.createElement("html");c.innerHTML=e;var u=c.querySelector("title").textContent,l=c.querySelector(".body"),d=c.querySelector(".sphinxsidebarwrapper");r>62.5&&l.classList.add("loading"),i.parentElement.replaceChild(l,i),i=l,o.parentElement.replaceChild(d,o),o=d,document.title=u,t.update(),window.history.onnavigate&&window.history.onnavigate(),window.setTimeout(function(){i.classList.remove("loading"),n&&window.scroll(0,0)},1)}})}window.history.replaceState({href:window.location.href},document.querySelector("title").textContent,window.location.href);var c=document.querySelectorAll(".sphinxsidebarwrapper > ul a.reference.internal");function u(t){0!==t.button||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),s(t.currentTarget.href,!0))}for(var l=0;l<c.length;l+=1){var d=c[l];(e($(d))||n($(d)))&&d.addEventListener("click",u)}return window.onpopstate=function(t){null!==t.state&&s(t.state.href,!1)},!0}});function i(){}function a(t){for(var e,n,o=arguments,i=1,a=arguments.length;i<a;i++)for(e in n=o[i])t[e]=n[e];return t}function r(t,e){e.appendChild(t)}function s(t,e,n){e.insertBefore(t,n)}function c(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function l(t){return document.createTextNode(t)}function d(t,e,n){t.addEventListener(e,n,!1)}function f(t,e,n){t.removeEventListener(e,n,!1)}function p(){return Object.create(null)}function h(t){this.destroy=i,this.fire("destroy"),this.set=this.get=i,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function m(t,e){return t!==e||t&&"object"==typeof t||"function"==typeof t}function g(t,e,n,o,i){for(var a in e)if(n[a]){var r=o[a],s=i[a],c=e[a];if(c)for(var u=0;u<c.length;u+=1){var l=c[u];l.__calling||(l.__calling=!0,l.call(t,r,s),l.__calling=!1)}}}function v(t,e){t._observers={pre:p(),post:p()},t._handlers=p(),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=t.root.store||e.store}function b(t){for(;t&&t.length;)t.shift()()}var w={destroy:h,get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var o=0;o<n.length;o+=1)n[o].call(this,e)},observe:function(t,e,n){var o=n&&n.defer?this._observers.post:this._observers.pre;return(o[t]||(o[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=o[t].indexOf(e);~n&&o[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(a({},t)),this.root._lock||(this.root._lock=!0,b(this.root._beforecreate),b(this.root._oncreate),b(this.root._aftercreate),this.root._lock=!1)},teardown:h,_recompute:i,_set:function(t){var e=this._state,n={},o=!1;for(var i in t)m(t[i],e[i])&&(n[i]=o=!0);o&&(this._state=a({},e,t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(g(this,this._observers.pre,n,this._state,e),this._fragment.p(n,this._state),g(this,this._observers.post,n,this._state,e)))},_mount:function(t,e){this._fragment.m(t,e)},_unmount:function(){this._fragment&&this._fragment.u()}};function y(t){v(this,t),this._state=a({name:"",caption:"",answer:null},t.data),this._recompute({answer:1},this._state),this._fragment=function(t,e){var n,o,i,a,p,h,m,g;function v(t){e.change(!0)}function b(t){e.change(!1)}return{c:function(){n=u("div"),o=l("\n"),i=u("div"),a=u("span"),h=l("\n    "),m=u("span"),this.h()},h:function(){a.className=p="switch fa fa-thumbs-up good "+t.upvoteSelected,d(a,"click",v),m.className=g="switch fa fa-thumbs-down bad "+t.downvoteSelected,d(m,"click",b)},m:function(e,c){s(n,e,c),n.innerHTML=t.caption,s(o,e,c),s(i,e,c),r(a,i),r(h,i),r(m,i)},p:function(t,e){t.caption&&(n.innerHTML=e.caption),t.upvoteSelected&&p!==(p="switch fa fa-thumbs-up good "+e.upvoteSelected)&&(a.className=p),t.downvoteSelected&&g!==(g="switch fa fa-thumbs-down bad "+e.downvoteSelected)&&(m.className=g)},u:function(){n.innerHTML="",c(n),c(o),c(i)},d:function(){f(a,"click",v),f(m,"click",b)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}a(y.prototype,{change:function(t){this.set({answer:t}),this.fire("change",t)}},w),y.prototype._recompute=function(t,e){t.answer&&(m(e.upvoteSelected,e.upvoteSelected=!0===e.answer?"selected":"")&&(t.upvoteSelected=!0),m(e.downvoteSelected,e.downvoteSelected=function(t){return!1===t?"selected":""}(e.answer))&&(t.downvoteSelected=!0))};function _(t){v(this,t),this._state=a({name:"",caption:"",answer:""},t.data),this._fragment=function(t,e){var n,o=!1;function i(){o=!0,e.set({answer:n.value}),o=!1}function a(t){var n=e.get();e.fire("change",n.answer)}return{c:function(){n=u("textarea"),this.h()},h:function(){d(n,"input",i),n.placeholder=t.caption,d(n,"input",a)},m:function(e,o){s(n,e,o),n.value=t.answer},p:function(t,e){o||(n.value=e.answer),t.caption&&(n.placeholder=e.caption)},u:function(){c(n)},d:function(){f(n,"input",i),f(n,"input",a)}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null))}function C(t){var e=document.createElement("script");e.type="application/javascript",e.src=t,document.body.appendChild(e)}a(_.prototype,{change:function(){this.fire("change",this.get("answer"))}},w);var x={open:function(){"Initial"===this.get("state")&&(this.set({answers:{}}),this.set({state:"NotVoted"}))},toggle:function(){this.set({answers:{}}),"Initial"===this.get("state")?this.set({state:"NotVoted"}):this.set({state:"Initial"})},submit:function(){var t=this.get("state");if("boolean"!=typeof t)throw new Error("Assertion failed: Feedback submitted without vote");for(var e=new Map,n=this.get("answers"),o=0,i=Object.keys(n);o<i.length;o+=1){var a=i[o],r=n[a];null!=r&&e.set(a,r)}this.set({state:"Pending"}),this.fire("submit",{vote:t,fields:e})},rate:function(t){this.set({state:t})},addQuestion:function(t,e,n){return this.set({questions:this.get("questions").concat({type:t,name:e,caption:n})}),this},update:function(t,e){this.get("answers")[t]=e},showCollectorDialog:function(){var t=this;if(window.ATL_JQ_PAGE_PROPS={triggerFunction:function(t){window.setTimeout(function(){return t()},1)},fieldValues:{summary:'Comment on: "'+this.get("project")+"/"+this.get("pagename")+'"'}},window.jQuery)C(this.get("jiraurl"));else{var e=document.createElement("script");e.type="application/javascript",e.integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=",e.setAttribute("crossorigin","anonymous"),e.src="https://code.jquery.com/jquery-2.2.4.min.js",e.onload=function(){C(t.get("jiraurl"))},document.body.appendChild(e)}}};function S(t,e){var n;return{c:function(){n=u("span"),this.h()},h:function(){n.className="fa fa-comments deluge-comment-icon"},m:function(t,e){s(n,t,e)},u:function(){c(n)},d:i}}function k(t,e){var n;return{c:function(){n=u("span"),this.h()},h:function(){n.className="fa fa-angle-down deluge-close-icon"},m:function(t,e){s(n,t,e)},u:function(){c(n)},d:i}}function q(t,e){var n;return{c:function(){(n=u("p")).textContent="Thank you for your feedback!"},m:function(t,e){s(n,t,e)},u:function(){c(n)},d:i}}function N(t,e){var n;return{c:function(){(n=u("li")).textContent="We're sorry! Please help us improve this page."},m:function(t,e){s(n,t,e)},u:function(){c(n)},d:i}}function j(t,e,n,o,i){var a,r=B(t,e,n,o),l=r&&r(t,e,n,o,i);return{c:function(){a=u("li"),l&&l.c()},m:function(t,e){s(a,t,e),l&&l.m(a,null)},p:function(t,e,n,o,s){r===(r=B(e,n,o,s))&&l?l.p(t,e,n,o,s):(l&&(l.u(),l.d()),(l=r&&r(e,n,o,s,i))&&l.c(),l&&l.m(a,null))},u:function(){c(a),l&&l.u()},d:function(){l&&l.d()}}}function E(t,e,n,o,i){var a=new y({root:i.root,data:{name:n.name,caption:n.caption}});a.on("change",function(t){var e=r.questions[r.question_index];i.update(e.name,t)});var r={questions:e,question_index:o};return{c:function(){a._fragment.c()},m:function(t,e){a._mount(t,e)},p:function(t,e,n,o,i){var s={};t.questions&&(s.name=o.name),t.questions&&(s.caption=o.caption),a._set(s),r.questions=n,r.question_index=i},u:function(){a._unmount()},d:function(){a.destroy(!1)}}}function T(t,e,n,o,i){var a=new _({root:i.root,data:{name:n.name,caption:n.caption}});a.on("change",function(t){var e=r.questions[r.question_index];i.update(e.name,t)});var r={questions:e,question_index:o};return{c:function(){a._fragment.c()},m:function(t,e){a._mount(t,e)},p:function(t,e,n,o,i){var s={};t.questions&&(s.name=o.name),t.questions&&(s.caption=o.caption),a._set(s),r.questions=n,r.question_index=i},u:function(){a._unmount()},d:function(){a.destroy(!1)}}}function I(t,e){var n,o,i,a;function p(t){e.showCollectorDialog()}return{c:function(){n=u("p"),o=l("If this page contains an error, you may "),(i=u("a")).textContent="report the problem on Jira.",this.h()},h:function(){i.className="deluge-fix-button jira-link jirafeedback",i.target="_blank",i.title=a="Report a problem with "+t.pagename+" on Jira",d(i,"click",p)},m:function(t,e){s(n,t,e),r(o,n),r(i,n)},p:function(t,e){t.pagename&&a!==(a="Report a problem with "+e.pagename+" on Jira")&&(i.title=a)},u:function(){c(n)},d:function(){f(i,"click",p)}}}function L(t,e){var n;return{c:function(){(n=u("p")).textContent="Submitting feedback..."},m:function(t,e){s(n,t,e)},p:i,u:function(){c(n)},d:i}}function D(t,e){var n,o,a;function r(t){e.rate(!0)}function p(t){e.rate(!1)}return{c:function(){(n=u("a")).textContent="Yes",o=l("\n        "),(a=u("a")).textContent="No",this.h()},h:function(){n.className="deluge-vote-button",d(n,"click",r),a.className="deluge-vote-button",d(a,"click",p)},m:function(t,e){s(n,t,e),s(o,t,e),s(a,t,e)},p:i,u:function(){c(n),c(o),c(a)},d:function(){f(n,"click",r),f(a,"click",p)}}}function O(t,e){for(var n,o,i,a,p,h,m,g,v=!1===t.state&&N(),b=t.questions,w=[],y=0;y<b.length;y+=1)w[y]=j(t,b,b[y],y,e);function _(t){e.toggle()}function C(t){e.submit()}return{c:function(){n=u("div"),o=u("ul"),v&&v.c(),i=document.createComment("");for(var t=0;t<w.length;t+=1)w[t].c();a=l("\n\n            "),p=u("div"),(h=u("button")).textContent="Cancel",m=l("\n                "),(g=u("button")).textContent="Submit",this.h()},h:function(){var t,e;t="ref",e=!0,o.setAttribute(t,e),d(h,"click",_),g.className="primary",d(g,"click",C),p.className="deluge-button-group",n.className="deluge-questions"},m:function(t,e){s(n,t,e),r(o,n),v&&v.m(o,null),r(i,o);for(var c=0;c<w.length;c+=1)w[c].m(o,null);r(a,n),r(p,n),r(h,p),r(m,p),r(g,p)},p:function(t,n){!1===n.state?v||((v=N()).c(),v.m(o,i)):v&&(v.u(),v.d(),v=null);var a=n.questions;if(t.questions){for(var r=0;r<a.length;r+=1)w[r]?w[r].p(t,n,a,a[r],r):(w[r]=j(n,a,a[r],r,e),w[r].c(),w[r].m(o,null));for(;r<w.length;r+=1)w[r].u(),w[r].d();w.length=a.length}},u:function(){c(n),v&&v.u();for(var t=0;t<w.length;t+=1)w[t].u()},d:function(){v&&v.d(),function(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()}(w),f(h,"click",_),f(g,"click",C)}}}function B(t,e,n,o){return"binary"===n.type?E:"freeform"===n.type?T:null}function A(t){return"Voted-Down"===t.state?I:"Pending "==t.state?L:"NotVoted"===t.state?D:"boolean"==typeof t.state?O:null}function P(t){v(this,t),this._state=a({project:"",pagename:"",state:"Initial",jiraurl:"https://jira.mongodb.org/s/en_UScn8g8x/782/6/1.2.5/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=298ba4e7",questions:[],answers:{}},t.data),this._recompute({state:1},this._state),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var n,o,i,a,p,h,m,g,v="Initial"===t.state&&S(),b="Initial"!==t.state&&k();function w(t){e.toggle()}var y=("Voted-Up"===t.state||"Voted-Down"===t.state)&&q(),_=A(t),C=_&&_(t,e);return{c:function(){n=u("div"),o=u("div"),v&&v.c(),i=l("\n\n        "),(a=u("span")).textContent="Was this page helpful?",p=l("\n\n    "),b&&b.c(),h=l("\n\n    "),m=u("div"),y&&y.c(),g=l("\n\n    "),C&&C.c(),this.h()},h:function(){a.className="deluge-helpful",o.className=t.delugeHeaderClass,d(o,"click",w),m.className=t.delugeBodyClass,n.className=t.delugeClass},m:function(t,e){s(n,t,e),r(o,n),v&&v.m(o,null),r(i,o),r(a,o),r(p,o),b&&b.m(o,null),r(h,n),r(m,n),y&&y.m(m,null),r(g,m),C&&C.m(m,null)},p:function(t,a){"Initial"===a.state?v||((v=S()).c(),v.m(o,i)):v&&(v.u(),v.d(),v=null),"Initial"!==a.state?b||((b=k()).c(),b.m(o,null)):b&&(b.u(),b.d(),b=null),t.delugeHeaderClass&&(o.className=a.delugeHeaderClass),"Voted-Up"===a.state||"Voted-Down"===a.state?y||((y=q()).c(),y.m(m,g)):y&&(y.u(),y.d(),y=null),_===(_=A(a))&&C?C.p(t,a):(C&&(C.u(),C.d()),(C=_&&_(a,e))&&C.c(),C&&C.m(m,null)),t.delugeBodyClass&&(m.className=a.delugeBodyClass),t.delugeClass&&(n.className=a.delugeClass)},u:function(){c(n),v&&v.u(),b&&b.u(),y&&y.u(),C&&C.u()},d:function(){v&&v.d(),b&&b.d(),f(o,"click",w),y&&y.d(),C&&C.d()}}}(this._state,this),t.target&&(this._fragment.c(),this._fragment.m(t.target,t.anchor||null),this._lock=!0,b(this._beforecreate),b(this._oncreate),b(this._aftercreate),this._lock=!1)}a(P.prototype,x,w),P.prototype._recompute=function(t,e){t.state&&(m(e.delugeClass,e.delugeClass=function(t){return"Initial"===t?"deluge":"deluge deluge-expanded"}(e.state))&&(t.delugeClass=!0),m(e.delugeHeaderClass,e.delugeHeaderClass=function(t){return"Initial"===t?"deluge-header":"deluge-header deluge-header-expanded"}(e.state))&&(t.delugeHeaderClass=!0),m(e.delugeBodyClass,e.delugeBodyClass=function(t){return"Initial"===t?"deluge-body":"deluge-body deluge-body-expanded"}(e.state))&&(t.delugeBodyClass=!0))};var H=function(t,e,n){var o=this;this.project=t,this.path=e,this.app=new P({target:n,data:{state:"Initial",project:t,pagename:e}}),this.app.on("submit",function(t){o.sendRating(t.vote,t.fields).then(function(){t.vote?o.app.set({state:"Voted-Up"}):o.app.set({state:"Voted-Down"})}).catch(function(t){console.error("Error submitting feedback")})})};H.prototype.askQuestion=function(t,e){return this.app.addQuestion("binary",t,e),this},H.prototype.askFreeformQuestion=function(t,e){return this.app.addQuestion("freeform",t,e),this},H.prototype.sendRating=function(t,e){var n=this;return new Promise(function(o,i){e.set("v",t),e.set("p",n.project+"/"+n.path);var a=function(t,e){var n=[];return e.forEach(function(t,e){n.push(encodeURIComponent(e)+"="+encodeURIComponent(JSON.stringify(t)))}),t+"?"+n.join("&")}("http://deluge.us-east-1.elasticbeanstalk.com/",e),r=new Image;r.onload=function(){return o()},r.onerror=function(){return i()},r.src=a})},H.prototype.open=function(){this.app.open()};var Q=null,R={"meta/404":!0,search:!0};var V=Object.freeze({init:function(){Q=document.body.getAttribute("data-project")},setup:function(){void 0!==window.localStorage&&function(){var t=document.querySelector(".body").getAttribute("data-pagename");if(!Object.prototype.hasOwnProperty.call(R,t)){var e=document.getElementById("rating-panel");e&&(e.innerText="",e&&new H(Q,t,e).askFreeformQuestion("reason","What were you looking for?").askQuestion("findability","Did you find it?").askQuestion("accuracy","Was the information you found <strong>accurate</strong>?").askQuestion("clarity","Was the information <strong>clear</strong>?").askQuestion("fragmentation","Was the information you needed <strong>all on one page</strong>?"))}}()}}),F="lightbox__content--activated",U="lightbox__content--scalable",z=document.createElement("div");z.className="lightbox__modal",z.title="click to close";var M=document.createElement("img");M.className="lightbox__content",z.appendChild(M);var J=Object.freeze({setup:function(){for(var t=function(){var t=n[e];if(0!==t.children.length&&"IMG"===t.children[0].tagName){var o=t.children[0],i=document.createElement("div"),a=document.createElement("div");i.className="lightbox__imageWrapper",a.className="lightbox__caption",a.innerText="click to enlarge",o.parentNode.replaceChild(i,o),i.appendChild(o),i.appendChild(a),i.addEventListener("click",function(){document.body.appendChild(z),M.src=o.src,M.alt=o.alt+" — Enlarged",/\.svg$/.test(M.src)?M.classList.add(U):M.classList.remove(U),z.addEventListener("click",function(){M.classList.remove(F),z.parentNode&&z.parentNode.removeChild(z)}),setTimeout(function(){M.classList.add(F)},0)})}},e=0,n=document.getElementsByClassName("lightbox");e<n.length;e+=1)t()}});function W(t){return t.hasClass("current")}var K=Object.freeze({setup:function(){var t=$(".sidebar a.current");(e(t)||n(t)||W(t))&&t.parent("li").addClass("selected-item"),t.parents("ul").each(function(t,e){$(e).css("display","block")}),$(".sphinxsidebarwrapper > ul li:not(.current) > ul:not(.current)").hide(),$(".sphinxsidebarwrapper").show(),$(".sphinxsidebarwrapper .toctree-l1").on("click","a",function(o){var i=$(o.currentTarget);e(i)||!i.parent().hasClass("selected-item")&&n(i)||(o.preventDefault(),i.parent().hasClass("current")?(i.parent().removeClass("current selected-item"),i.siblings("ul").slideUp()):(t.parent().removeClass("selected-item"),t.parents().add(t.siblings("ul")).each(function(t,e){var n=$(e);n.has(o.currentTarget).length||(n.is("ul")?n.removeClass("current").slideUp():n.removeClass("current"))}),i.parent().addClass("current"),i.siblings("ul").slideDown(function(){(e(i)||n(i)||W(t))&&i.parent("li").addClass("selected-item")}),t=i))}),$(".sphinxsidebarwrapper > ul ul a.reference").prepend(function(t){var n=$('<span class="expand-icon"></span>');return e($(this))||n.addClass("docs-expand-arrow"),n})}});var G=function(t){this.key=t,this.tabStrip=document.querySelector(".tab-strip--singleton"),this.type=null,null!==this.tabStrip&&(this.type=this.tabStrip.getAttribute("data-tab-preference"))},X={tabPref:{configurable:!0}};X.tabPref.get=function(){return JSON.parse(window.localStorage.getItem(this.key))||{}},X.tabPref.set=function(t){var e=this.tabPref;this.type?e[t.type]=t.tabId:e.pages?e.pages[window.location.pathname]=t.tabId:(e.pages={},e.pages[window.location.pathname]=t.tabId),window.localStorage.setItem(this.key,JSON.stringify(e))},G.prototype.getFirstTab=function(){var t=this.tabStrip.querySelector(".tab-strip__element[aria-selected=true]");return t?t.getAttribute("data-tabid"):null},G.prototype.setup=function(){var t=this;if(this.tabStrip){this.hideTabBars();for(var e=0,n=t.tabStrip.querySelectorAll("[data-tabid]");e<n.length;e+=1){n[e].onclick=function(e){var n=e.target.getAttribute("data-tabid"),o=t.tabStrip.getAttribute("data-tab-preference"),i={};i.tabId=n,i.type=o,n&&(t.tabPref=i,t.update(),e.preventDefault())}}this.update()}},G.prototype.update=function(){if(this.tabStrip){var t,e=this.type,n=this.tabPref;if(n.pages&&n.pages[window.location.pathname]?(n=n.pages,e=window.location.pathname):this.tabStrip.querySelector('[data-tabid="'+n[e]+'"]')||(n[e]=this.getFirstTab()),n)t=n[e],$(".tabs__content").children().hide(),$(".tabs .tabpanel-"+t).show(),this.showHideSelectedTab(n[e])}},G.prototype.showHideSelectedTab=function(t){var e=$(this.tabStrip.querySelector('[data-tabid="'+t+'"]')),n=e.parent("ul"),o=$(this.tabStrip.querySelector(".dropdown-toggle")),i=$(this.tabStrip.querySelector(".dropdown"));n.hasClass("dropdown-menu")?(o.text(""+e.first().text()).append('<span class="caret"></span>'),i.attr("aria-selected",!0).siblings().attr("aria-selected",!1)):(e.attr("aria-selected",!0).siblings().attr("aria-selected",!1),o.text("Other ").append('<span class="caret"></span>'))},G.prototype.hideTabBars=function(){var t=$(".tab-strip--singleton"),e=t.first();t.slice(1).detach(),e.detach().insertAfter("h1").first()},Object.defineProperties(G.prototype,X);var Y=Object.freeze({setup:function(){new G("tabPref").setup()}});var Z=Object.freeze({setup:function(){$(".version-selector").on("click",function(t){t.preventDefault();var e=$(t.currentTarget).data("path");window.location.href=function(t){var e=document.getElementsByClassName("body")[0].getAttribute("data-pagename");return"index"===e?e="":e&&(e+="/"),"/"+t+"/"+e}(e)})}}),tt=function(){this.components=[]};tt.prototype.register=function(t){this.components.push(t),t.init&&t.init()},tt.prototype.update=function(){for(var t=0,e=this.components;t<e.length;t+=1){e[t].setup(this)}};var et=new tt;$(function(){et.register(t),et.register(o),et.register(V),et.register(J),et.register(K),et.register(Y),et.register(Z),$(".toc > ul > li > ul > li").length||$(".right-column .toc").hide(),$(".expand-toc-icon").on("click",function(t){t.preventDefault(),$(".sidebar").toggleClass("reveal")});var e=$(window),n=$(".sidebar"),i=e.width()<=1093;function a(){location.hash&&document.getElementById(location.hash.substr(1))&&$(window).scrollTop(window.scrollY-75)}if(e.resize(function(t){i&&e.width()>1093?(i=!1,n.removeClass("reveal")):!i&&e.width()<=1093&&(i=!0)}),window.addEventListener("hashchange",a),location.hash&&window.setTimeout(a,10),$(".content").on("click","a",function(t){$(t.currentTarget).attr("href")===location.hash&&window.setTimeout(a,10)}),et.update(),document.querySelector){var r=document.querySelector("a.current");r&&r.scrollIntoView(!1)}})}();
//# sourceMappingURL=controller.js.map
