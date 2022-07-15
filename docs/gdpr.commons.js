/** 
    @ name gdpr-commons-web-toolkit
    @ version 0.1.0
    @ author Tecnologie per Persone di Domenico Monaco
    @ reposiotry git+https://github.com/domenicomonaco/gdpr-commons-web-toolkit.git
    @ license MIT
    @ home https://www.gdprcommons.it
  **/
  parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"dkVR":[function(require,module,exports) {
function e(e){document.cookie=e+"=; Max-Age=-99999999;"}function t(e,t,o){t=JSON.stringify(t);var n="";if(o){var d=new Date;d.setTime(d.getTime()+24*o*60*60*1e3),n="; expires="+d.toUTCString()}document.cookie=e+"="+(t||"")+n+"; path=/"}function o(e){for(var t=e+"=",o=document.cookie.split(";"),n=0;n<o.length;n++){for(var d=o[n];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(t)){var a=d.substring(t.length,d.length);return JSON.parse(a)}}return null}var n={text:{cookieDaysExp:20,cookieName:"GDPRCommons-cookie",linkPrivacyPolicy:"http://www.gdprcommons.it",textTitleModal:"Informativa Cookie",textAbstractModal:"Questo sito utilizza esclusivamente cookie e/o altri strumenti di tracciamento di tipo tecnico o analitici al solo scopo di analisi statistica del traffico senza risalire all'identità del singolo utente. In oltre, non raccoglie informazioni personali in modo automatico senza esplicito consenso. In alcuni casi sono utilizzate risorse esterne. A scopo informativo, ai fini legislativi, si chiede la consultazione della Privacy Policy e proseguire cliccando su 'Ho capito'",textButtonAccept:"Ho capito",textButtonOpenPolicy:"Leggi l'informativa",textAccepted:"Accettato",textNotAccepted:"Non accettato",textNotPresent:"Nessun dato",textButtonResetCookie:"Resetta preferenze"},modal:{showOnPageLoad:"cookie"},fixedicon:{show:!0}};window.onload=function(){var d=document.getElementById("GDPR_Commons"),a=d.getAttribute("data-urlpolicy"),c=null==a?n.text.linkPrivacyPolicy:a+"?source=www.gdprcommons.it";d.innerHTML='\n  <div id="gdpr-commons-fixedicon">\n    <a href="#GDPRCommons-dialog" id="gdpr-commons-button-fixedicon" class="fixedicon" aria-label="Open Cookie Notice">\n      <svg xmlns="http://www.w3.org/2000/svg" class="bi bi-shield-lock-fill" viewBox="0 0 16 16">\n        <path fill-rule="evenodd" d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm0 5a1.5 1.5 0 0 1 .5 2.915l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99A1.5 1.5 0 0 1 8 5z"/>\n      </svg>\n    </a>\n  </div><div id="gdpr-commons-modal-overlay"></div>\n  <div id="gdpr-commons-modal">\n    <div class="gdpr-commons-modal-header">\n      <div class="gdpr-commons-modal-title">\n        <h3>'.concat(n.text.textTitleModal,'</h3>\n      </div>\n    </div>\n    <div class="gdpr-commons-modal-content">\n      <p>\n        ').concat(n.text.textAbstractModal,'\n      </p>\n    </div>\n\n    <div class="gdpr-commons-modal-middle">\n      <div>\n      <span id="last-consent-state"></span> <em><span id="last-consent-date"></span></em>\n      </div>\n      <a href="').concat(c,'">').concat(n.text.textButtonOpenPolicy,'</a>\n    </div>\n\n      <div class="gdpr-commons-modal-footer">\n        <button id="gdpr-commons-button-reset" class="buttons">').concat(n.text.textButtonResetCookie,'</button>\n         <button id="gdpr-commons-button-accept" class="buttons">').concat(n.text.textButtonAccept,'</button>\n    </div>\n    <div id="gdpr-commons-modal-credits">\n        <span>Proudly <a title="GDPR Commons: Open Source GDPR Tookit" target="_blank" href="https://www.gdprcommons.it">GDPR Commons: Open Source GDPR Tookit</a></spans>\n    </div>\n  </div>\n\n  </div>');var i={date:null,accepted:!1},s=o(n.text.cookieName);document.getElementById("gdpr-commons-button-accept").addEventListener("click",function(){i={date:Date(),accepted:!0},t(n.text.cookieName,i,n.text.cookieDaysExp),document.getElementById("gdpr-commons-modal-overlay").classList.add("fadeOUT-display"),document.getElementById("gdpr-commons-modal").classList.add("fadeOUT-display"),document.getElementById("gdpr-commons-modal-overlay").classList.remove("fadeIN-display"),document.getElementById("gdpr-commons-modal").classList.remove("fadeIN-display")}),document.getElementById("gdpr-commons-button-reset").addEventListener("click",function(){i={date:Date(),accepted:!1},console.log("Reset"),t(n.text.cookieName,i,n.text.cookieDaysExp),location.reload()}),document.getElementById("gdpr-commons-button-fixedicon").addEventListener("click",function(){document.getElementById("gdpr-commons-modal-overlay").classList.remove("fadeOUT-display"),document.getElementById("gdpr-commons-modal").classList.remove("fadeOUT-display"),document.getElementById("gdpr-commons-modal-overlay").classList.add("fadeIN-display"),document.getElementById("gdpr-commons-modal").classList.add("fadeIN-display")});for(var l=document.getElementsByClassName("eraseCookieGDPR"),m=0;m<l.length;m++)l[m].addEventListener("click",function(){console.warn(n.text.cookieName,"erased"),e(n.text.cookieName)});setTimeout(function(){null==s?(document.getElementById("gdpr-commons-modal-overlay").classList.remove("fadeOUT-display"),document.getElementById("gdpr-commons-modal").classList.remove("fadeOUT-display"),document.getElementById("gdpr-commons-modal-overlay").classList.add("fadeIN-display"),document.getElementById("gdpr-commons-modal").classList.add("fadeIN-display")):(null!=s.accepted&&1==s.accepted?document.getElementById("last-consent-state").innerHTML=n.text.textAccepted:(document.getElementById("last-consent-state").innerHTML=n.text.textNotAccepted,document.getElementById("gdpr-commons-modal-overlay").classList.remove("fadeOUT-display"),document.getElementById("gdpr-commons-modal").classList.remove("fadeOUT-display"),document.getElementById("gdpr-commons-modal-overlay").classList.add("fadeIN-display"),document.getElementById("gdpr-commons-modal").classList.add("fadeIN-display")),null!=s.date?document.getElementById("last-consent-date").innerHTML=new Date(s.date).toUTCString():document.getElementById("last-consent-date").innerHTML="0:00:00")},150)};
},{}]},{},["dkVR"], null)
//# sourceMappingURL=https://domenicomonaco.github.io/gdpr-commons-web-toolkit/gdpr.commons.js.map