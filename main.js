(()=>{"use strict";var e={inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",inputErrorSelector:".popup__input-error"},t=document.querySelector(".popup_type_profile"),n=document.querySelector(".popup_type_add-card"),r=document.querySelector(".popup_type_avatar"),o=document.querySelector(".profile__edit-icon"),i=document.querySelector(".profile__avatar-wrapper"),u=document.querySelector(".profile__add-button"),a=document.querySelector("#profile-name"),c=document.querySelector("#profile-description");function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.name,o=t.link,i=t.likes,u=void 0===i?[]:i,a=t._id,c=t.owner,l=void 0===c?{}:c,s=t.userId,f=t.handleCardClick,p=t.handleLikeCard,h=t.handleRemoveCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=r,this._image=o,this._likes=u,this._id=a,this._userId=s,this._ownerId=l._id,this._handleCardClick=f,this._handleLikeCard=p.bind(this),this._handleRemoveCard=h,this._cardSelector=n}var t,n;return t=e,(n=[{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick()})),this._element.querySelector(".element__like").addEventListener("click",(function(){e._handleLikeCard()})),this._element.querySelector(".element__delete").addEventListener("click",(function(){e._handleRemoveCard()}))}},{key:"_setCountLikes",value:function(){this._element.querySelector(".element__count-like").textContent=this._likes.length}},{key:"_getStateLike",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"getLikes",value:function(){return this._likes}},{key:"setLikes",value:function(e){this._likes=e}},{key:"remove",value:function(){this._element.remove()}},{key:"renderLikes",value:function(e){this.setLikes(e),this._setCountLikes(),this._getStateLike()?this._element.querySelector(".element__like").classList.add("element__like_active"):this._element.querySelector(".element__like").classList.remove("element__like_active")}},{key:"getId",value:function(){return this._id}},{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.firstElementChild.cloneNode(!0)}},{key:"generateCard",value:function(){this._element=this._getTemplate(),this.renderLikes(this._likes),this._setEventListeners();var e=this._element.querySelector(".element__image"),t=this._element.querySelector(".element__name"),n=this._element.querySelector(".element__delete");return e.src=this._image,e.alt=this._name,t.textContent=this._name,this._ownerId!=this._userId&&n.remove(),this._element}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"setRendererItems",value:function(e){this._renderedItems=e}},{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._inputErrorSelector=t.inputErrorSelector,this._formElement=n,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._buttonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t}},{key:"_hideInputError",value:function(e){var t=this._formElement.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._disableSubmitButton():this._enableSubmitButton()}},{key:"_disableSubmitButton",value:function(){this._buttonElement&&(this._buttonElement.classList.add(this._inactiveButtonClass),this._buttonElement.disabled=!0)}},{key:"_enableSubmitButton",value:function(){this._buttonElement.classList.remove(this._inactiveButtonClass),this._buttonElement.disabled=!1}},{key:"enableValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"cleanUpForm",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState()}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),_(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),_(this,"_handleOverlayClose",(function(e){e.target.classList.contains("overlay")&&n.close()})),this._popupSelector=t,this._popup=document.querySelector(this._popupSelector),this._popupButtonClose=this._popup.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){document.removeEventListener("keydown",this._handleEscClose),this._popup.classList.remove("popup_active")}},{key:"setEventListeners",value:function(){var e=this;this._popupButtonClose.addEventListener("mousedown",(function(){e.close()})),this._popup.addEventListener("click",(function(t){e._handleOverlayClose(t)}))}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=S(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function S(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function E(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return E(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._image=t._popup.querySelector(".popup__card-image"),t._imageTitle=t._popup.querySelector(".popup__card-title"),t}return t=u,(n=[{key:"open",value:function(e){var t=e.name,n=e.link;this._image.src=n,this._image.alt=t,this._imageTitle.textContent=t,k(w(u.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=P(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},L.apply(this,arguments)}function P(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function T(e,t){if(t&&("object"===O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function u(e){var t,n=e.popupSelector,r=e.submitHandler,o=e.formActivation;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._form=t._popup.querySelector(".popup__form"),t._buttonSubmit=t._form.querySelector(".popup__button"),t._defaultTextButton=t._buttonSubmit.textContent,t._submitHandler=r,t._formActivation=o,t}return t=u,(n=[{key:"getInputValues",value:function(){var e=this;return this._inputList=this._form.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setTextButton",value:function(e){this._buttonSubmit.textContent=e}},{key:"defaultTextButton",value:function(){this._buttonSubmit.textContent=this._defaultTextButton}},{key:"setEventListeners",value:function(){var e=this;L(B(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e.getInputValues())}))}},{key:"open",value:function(){this._formActivation(),L(B(u.prototype),"open",this).call(this)}},{key:"close",value:function(){L(B(u.prototype),"close",this).call(this),this._form.reset()}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var R=function(){function e(t){var n=t.profileNameSelector,r=t.profileDescriptionSelector,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNameElement=document.querySelector(n),this._profileDescriptionElement=document.querySelector(r),this._profileAvatarElement=document.querySelector(o),this._id=""}var t,n;return t=e,(n=[{key:"initialize",value:function(e){var t=e.name,n=e.about,r=e.avatar,o=e._id;this._profileNameElement.textContent=t,this._profileDescriptionElement.textContent=n,this._profileAvatarElement.src=r,this._profileAvatarElement.alt=t,this._id=o}},{key:"getUserId",value:function(){return this._id}},{key:"getUserInfo",value:function(){return{name:this._profileNameElement.textContent,description:this._profileDescriptionElement.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._profileNameElement.textContent=t,this._profileDescriptionElement.textContent=n}},{key:"updateAvatar",value:function(e){var t=e.name,n=e.avatar;this._profileAvatarElement.src=n,this._profileAvatarElement.alt=t}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getProfile",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"setProfile",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t,about:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"updateAvatar",value:function(e){var t=e.avatar;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"createCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t,link:n})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"setLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"removeLike",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}},{key:"removeCard",value:function(e){return fetch("".concat(this._url,"/cards/").concat(e,"/"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}))}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=N(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},V.apply(this,arguments)}function N(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}function F(e,t){return F=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},F(e,t)}function z(e,t){if(t&&("object"===H(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}var M=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&F(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=J(r);if(o){var n=J(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function u(e){var t,n=e.popupSelector,r=e.submitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._buttonSubmit=t._popup.querySelector(".popup__button"),t._defaultTextButton=t._buttonSubmit.textContent,t._submitHandler=r,t._submitHandlerClick=function(){},t}return t=u,(n=[{key:"setTextButton",value:function(e){this._buttonSubmit.textContent=e}},{key:"defaultTextButton",value:function(){this._buttonSubmit.textContent=this._defaultTextButton}},{key:"setEventListeners",value:function(){V(J(u.prototype),"setEventListeners",this).call(this)}},{key:"open",value:function(e){V(J(u.prototype),"open",this).call(this),this._submitHandlerClick=this._submitHandler.bind(null,e),this._buttonSubmit.addEventListener("click",this._submitHandlerClick)}},{key:"close",value:function(){V(J(u.prototype),"close",this).call(this),this._buttonSubmit.removeEventListener("click",this._handleConfirmClick)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(m);function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=new D({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-49",headers:{authorization:"b68ec8e8-fa4a-49bc-9d89-b437a1d32c40","Content-Type":"application/json"}}),K=new p({items:null,renderer:function(e){K.addItem(W(e))}},".elements");Promise.all([G.getProfile(),G.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];te.initialize(o),K.setRendererItems(i),K.renderItems()}));var Q=new C(".popup_type_card-image");Q.setEventListeners();var W=function(e){var t=e.name,n=e.link,r=e.likes,o=e._id,i=e.owner,u=new s({name:t,link:n,likes:r,_id:o,owner:i,userId:te.getUserId(),handleCardClick:function(){Q.open({name:t,link:n})},handleRemoveCard:function(){Y.open(u)},handleLikeCard:function(){var e=u.getLikes().find((function(e){return e._id===te.getUserId()}));e?G.removeLike(u.getId()).then((function(e){u.renderLikes(e.likes)})).catch((function(e){console.log(e)})):G.setLike(u.getId()).then((function(e){u.renderLikes(e.likes)})).catch((function(e){console.log(e)}))}},"#card-template");return u.generateCard()},X=new x({popupSelector:".popup_type_add-card",submitHandler:function(e){G.createCard(e).then((function(e){console.log(W(e)),K.addItem(W(e))})).catch((function(e){console.log(e)}))},formActivation:function(){Z.cleanUpForm()}});X.setEventListeners(),u.addEventListener("click",X.open.bind(X));var Y=new M({popupSelector:".popup_type_confirm",submitHandler:function(e){G.removeCard(e.getId()).then((function(){e.remove(),Y.close()})).catch((function(e){console.log(e)}))}});Y.setEventListeners();var Z=new d(e,n);Z.enableValidation();var ee=new d(e,t);ee.enableValidation(),new d(e,r).enableValidation();var te=new R({profileNameSelector:".profile__name",profileDescriptionSelector:".profile__description",profileAvatarSelector:".profile__avatar"}),ne=new x({popupSelector:".popup_type_profile",submitHandler:function(e){G.setProfile(e).then((function(e){ne.setTextButton("Сохранение..."),te.setUserInfo(e),ne.close()})).catch((function(e){return console.log(e)})).finally((function(){}))},formActivation:function(){var e=te.getUserInfo();ee.cleanUpForm(),a.value=e.name,c.value=e.description}});ne.setEventListeners(),o.addEventListener("click",ne.open.bind(ne));var re=new x({popupSelector:".popup_type_avatar",submitHandler:function(e){G.updateAvatar(e).then((function(e){re.setTextButton("Сохранение..."),te.updateAvatar(e),re.close()})).catch((function(e){return console.log(e)})).finally((function(){re.defaultTextButton()}))},formActivation:function(){Z.cleanUpForm()}});re.setEventListeners(),i.addEventListener("click",re.open.bind(re))})();