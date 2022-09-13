!function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);var s={mir:{name:"mir",fullName:"Мир",startDigit:2,digitCount:[16]},visa:{name:"visa",fullName:"Visa",startDigit:4,digitCount:[13,16]},mastercard:{name:"mastercard",fullName:"MasterCard",startDigit:5,digitCount:[16]},americanexpress:{name:"americanexpress",fullName:"American Express",startDigit:3,digitCount:[15]}};const n=new class{constructor(){this.container=null,this.formEl=null,this.cardImagesContainer=null,this.inputEl=null,this.resultImageEl=null,this.messageEl=null,this.onKeyUpListeners=[],this.onSubmitListeners=[],this.cards=new Map,this.messages={valid:"Корректный номер",invalid:"Некорректный номер карты"}}drawUi(){this.checkBinding(),this.container.innerHTML='\n\t  <form class="card_validator_widget" action="#" name="card_validator_widget">\n\t\t<div class="card_images_container"></div>\n\t\t<div class="input_container">\n\t\t  <input type="text" class="card_input" id="card_input" placeholder="Credit card number">\n\t\t  <button class="validate_button">Click to validate</button>\n\t\t</div>\n\t\t<span class="form_hint" hidden>Please insert a credit card number!</span>\n\t\t<div class="message_container">\n\t\t  <div class="message_title">\n\t\t\t<div class="result_img"></div>\n\t\t  </div>\n\t\t  <div class="message"></div>\n\t\t</div>\n\t  </form>\n\t  ',this.formEl=this.container.querySelector("form"),this.cardImagesContainerEl=this.container.querySelector(".card_images_container"),this.inputEl=this.container.querySelector(".card_input"),this.resultImageEl=this.container.querySelector(".result_img"),this.messageEl=this.container.querySelector(".message"),this.formEl.addEventListener("submit",this.onSubmit.bind(this)),this.inputEl.addEventListener("keyup",this.onKeyUp.bind(this)),this.showWaitingMessage()}addCardType(t){const e=document.createElement("div");e.classList.add("card_image"),e.title=t.fullName,e.setAttribute("data-id",t.name),this.cards.set(t.name,e),this.cardImagesContainerEl.appendChild(e)}get inputValue(){return this.inputEl.value}selectCard(t){this.unselectCards(),t&&this.cards.get(t.name).classList.add("selected")}unselectCards(){for(const t of this.cards.values())t.classList.remove("selected")}showWaitingMessage(){this.resultImageEl.hidden=!0,this.messageEl.textContent=this.messages.waiting}showValidMessage(){this.resultImageEl.classList.remove("invalid"),this.resultImageEl.classList.add("valid"),this.resultImageEl.hidden=!1,this.messageEl.textContent=this.messages.valid}showInvalidMessage(){this.resultImageEl.classList.remove("valid"),this.resultImageEl.classList.add("invalid"),this.resultImageEl.hidden=!1,this.messageEl.textContent=this.messages.invalid}bindToDOM(t){if(!(t instanceof HTMLElement))throw new Error("Ошибка");this.container=t}addOnKeyUpListener(t){this.onKeyUpListeners.push(t)}addOnSubmitListener(t){this.onSubmitListeners.push(t)}onKeyUp(t){this.onKeyUpListeners.forEach(e=>e.call(null,t))}onSubmit(t){this.onSubmitListeners.forEach(e=>e.call(null,t))}checkBinding(){if(null===this.container)throw new Error("Ошибка")}};n.bindToDOM(document.querySelector("#card_validator_widget_container"));new class{constructor(t){this.widget=t}init(){this.widget.addOnSubmitListener(this.onSubmit.bind(this)),this.widget.addOnKeyUpListener(this.onKeyUp.bind(this)),this.widget.drawUi();for(const t of Object.values(s))this.widget.addCardType(t)}onKeyUp(){this.widget.showWaitingMessage(),this.widget.selectCard(this.getTypedCardType())}onSubmit(t){t.preventDefault();const e=this.getTypedCardType();e&&function(t){let e=0;const i=[...t].reverse().map(t=>Number(t));for(let t=0;t<i.length;t+=1)if(t%2!=0){let s=2*i[t];s>9&&(s-=9),e+=s}else e+=i[t];return e%10==0}(this.widget.inputValue)&&this.checkDigitCount(e)?this.widget.showValidMessage():this.widget.showInvalidMessage()}checkDigitCount(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.getTypedCardType()).digitCount.includes(this.widget.inputValue.length)}getTypedCardType(){return t=this.widget.inputValue,Object.values(s).find(e=>e.startDigit===Number(String(t)[0]));var t}}(n).init()}]);