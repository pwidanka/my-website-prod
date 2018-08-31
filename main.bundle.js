webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about-me/about-me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n    margin: 0;\r\n}\r\n\r\np i{\r\n    font-size: 1rem;\r\n}\r\n\r\nimg{\r\n    margin: 5px;\r\n    width: 250px;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    img {\r\n        width: 100px;\r\n    }\r\n}\r\n\r\n.arrow-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.header{\r\n    padding-top: 10px;\r\n    margin-bottom: 10px;\r\n}\r\n\r\ni{\r\n    font-size: 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    i {\r\n        font-size: 30px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes pulse_animation {\r\n\t0% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t30% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t40% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t50% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t60% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t70% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t80% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t100% { -webkit-transform: scale(1); transform: scale(1); }\r\n}\r\n\r\n@keyframes pulse_animation {\r\n\t0% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t30% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t40% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t50% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t60% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t70% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t80% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t100% { -webkit-transform: scale(1); transform: scale(1); }\r\n}\r\n\r\n.pulse {\r\n\t-webkit-animation-name: pulse_animation;\r\n\t        animation-name: pulse_animation;\r\n\t-webkit-animation-duration: 4000ms;\r\n\t        animation-duration: 4000ms;\r\n\t-webkit-transform-origin:70% 70%;\r\n\t        transform-origin:70% 70%;\r\n\t-webkit-animation-iteration-count: infinite;\r\n\t        animation-iteration-count: infinite;\r\n\t-webkit-animation-timing-function: linear;\r\n\t        animation-timing-function: linear;\r\n}\r\n\r\nh2 {\r\n    /* font-family: 'Montserrat', sans-serif; */\r\n    font-weight: 600;\r\n    overflow: hidden;\r\n    text-align: center;\r\n}\r\n\r\n.container-photo{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .container-photo {\r\n       -webkit-box-align: start;\r\n           -ms-flex-align: start;\r\n               align-items: flex-start;\r\n    }\r\n}\r\n\r\n.occupation{\r\n    margin: 0 auto 10px auto;\r\n    background: black;\r\n    color: white;\r\n    text-align: center;\r\n    width: 70%;\r\n}\r\n\r\n.container-about-me{\r\n    margin-top: 20px;\r\n}\r\n\r\n.text{\r\n    background: white;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    margin-bottom: 1rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.text1{\r\n    background: white;\r\n    padding: 10px;\r\n    border-radius: 10px;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    margin-bottom: 1rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n@media screen and (max-width: 700px) {\r\n    .text {\r\n        display:block;\r\n        padding: 10px 0;\r\n    }\r\n    .text1 {\r\n        display: block;\r\n        padding: 10px 0;\r\n    }\r\n}\r\n\r\n.text:hover{\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    -webkit-transform: scale(1.02);\r\n            transform: scale(1.02);\r\n}\r\n\r\n.text1:hover{\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    -webkit-transform: scale(1.02);\r\n            transform: scale(1.02);\r\n}\r\n\r\np{\r\n    margin: 0;\r\n    font-size: 20px;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    p {\r\n        font-size: 12px;\r\n        padding: 4px;\r\n    }\r\n\r\n    p i{\r\n        font-size: 12px;\r\n    }\r\n}\r\n\r\n.container-photo{\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-100\" (swipeup)=\"onSwipeup($event)\">\n  <div class=\"d-flex flex-column h-100\">\n    <div class=\"row header\">\n      <div class=\"col-1 arrow-container\">\n        <i class=\"fa fa-arrow-circle-up pulse\" [routerLink]=\"['/home']\"></i>\n      </div>\n      <div class=\"offset-sm-3 col-sm-4 col-10\">\n        <h2>O MNIE</h2>\n      </div>\n    </div>\n    <div class=\"row h-100\">\n      <div class=\"col-12 pull-right text1\">\n\n        <img class=\"img-responsive float-left\" src=\"/assets/my-photo.png\" alt=\"my-photo\">\n\n        <p> Nazywam się Przemysław Widanka i jestem absolwentem kursu <i>JavaScript od podstaw</i>, organizowanego przez Software Development Academy. Ukończyłem studia inżynierskie na wydziale Oceanotechniki i Okrętownictwa ze specjalizacją Inżynierii Zasobów Naturalnych. Co więcej, jako dyplomowany Technik Informatyk posiadam bazową wiedzę na temat montażu i eksploatacji systemów komputerowych.\n        </p>\n\n      </div>\n\n      <div class=\"text col-12\">\n        <p> Obecnie pracuję w firmie Else Systemy Informatyczne na stanowisku Młodszego Front-end Developera. Specjalizuję sie\n          w tworzeniu stron typu SPA (Single Page Application) przy użyciu Frameworka Angular. Bez przeszkód potrafię zakodować\n          dowolny projekt graficzny w HTML 5 oraz CSS 3 z zachowaniem zalecanych standardów. Bez problemu operuję biblioteką\n          jQuery, a także popularnym frameworkiem front-end - Twitter Bootstrap.\n        </p>\n      </div>\n      <div class=\"text col-12\">\n        <p class=\"col-12\">Oprócz programowania interesuję się sportem, głównie piłką nożną od B-Klasy po Ligi zagraniczne oraz e-sportem w\n          szczególności Counter Strike GO.\n        </p>\n      </div>\n    </div>\n    <!-- <div class=\"row h-100\">\n      <div class=\"text col-7 justify-content-center\">\n        <p> Nazywam się Przemysław Widanka i jestem absolwentem kursu\n          <i>JavaScript od podstaw</i>, organizowanego przez Software Development Academy. Ukończyłem studia inżynierskie na wydziale Oceanotechniki i Okrętownictwa ze specjalizacją Inżynierii Zasobów Naturalnych. Co więcej, jako dyplomowany Technik Informatyk posiadam bazową wiedzę na temat montażu i eksploatacji systemów komputerowych.\n        </p>\n      </div>\n\n      <div class=\"col-5 container-photo\">\n        <img class=\"photo\" src=\"/assets/my-photo.png\" alt=\"my-photo\">\n      </div>\n\n      <div class=\"text col-12\">\n        <p> Obecnie pracuję w firmie Else Systemy Informatyczne na stanowisku Młodszego Front-end Developera. Specjalizuję sie w tworzeniu stron typu SPA (Single Page Application) przy użyciu Frameworka Angular. Bez przeszkód potrafię zakodować dowolny projekt graficzny w HTML 5 oraz CSS 3 z zachowaniem zalecanych standardów. Bez problemu operuję biblioteką jQuery, a także popularnym frameworkiem front-end - Twitter Bootstrap.\n        </p>\n      </div>\n      <div class=\"text col-12\">\n        <p class=\"col-12\">Oprócz programowania interesuję się sportem, głównie piłką nożną od B-Klasy po Ligi zagraniczne oraz e-sportem w szczególności Counter Strike GO.\n        </p>\n      </div>\n\n    </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/about-me/about-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent(router) {
        this.router = router;
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        document.body.style.backgroundImage = 'url("/assets/background.png")';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    };
    AboutMeComponent.prototype.onSwipeup = function (event) {
        this.router.navigate(['/home']);
    };
    AboutMeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__("../../../../../src/app/about-me/about-me.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".route-container {\r\n    position:relative;\r\n}\r\n\r\n.route-container>* {\r\n    display:block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"h-100 route-container\" [@routeAnimation]=\"getDepth(myOutlet)\" [@routerTransition]=\"getTransition(myOutlet)\">\r\n    <router-outlet #myOutlet=\"outlet\"></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.swipeDirection = '-';
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        $(document).on("dragstart", function () {
            return false;
        });
        this.router.navigate(['']);
    };
    AppComponent.prototype.getDepth = function (outlet) {
        return outlet.activatedRouteData['depth'];
    };
    AppComponent.prototype.getTransition = function (outlet) {
        return outlet.activatedRouteData['depth'];
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('routeAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('1 => 4, 2 => 1', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ height: '!' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' })),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 })),
                        // animate the leave page away
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':leave', [
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.7s cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' })),
                            ]),
                            // and now reveal the enter
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.7s cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' }))),
                        ]),
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('1 => 5, 3 => 1', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ height: '!' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateY(-100%)' })),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 })),
                        // animate the leave page away
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':leave', [
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.7s cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateY(100%)' })),
                            ]),
                            // and now reveal the enter
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.7s cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateY(0)' }))),
                        ]),
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('5 => 1, 1 => 3', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ height: '!' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateY(100%)' })),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 })),
                        // animate the leave page away
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':leave', [
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.7s cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateY(-100%)' })),
                            ]),
                            // and now reveal the enter
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.7s cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateY(0)' }))),
                        ]),
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('4 => 1, 1 => 2', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ height: '!' }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(-100%)' })),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 })),
                        // animate the leave page away
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':leave', [
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.7s cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(100%)' })),
                            ]),
                            // and now reveal the enter
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('0.7s cubic-bezier(.35,0,.25,1)', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ transform: 'translateX(0)' }))),
                        ]),
                    ]),
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* trigger */])('routerTransition', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* transition */])('0 => 1', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter, :leave', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 1 })),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["f" /* group */])([
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':enter', [
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1000ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1 }))
                            ]),
                            Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["g" /* query */])(':leave', [
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 1 }),
                                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])('1000ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["i" /* style */])({ opacity: 0 }))
                            ]),
                        ])
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyHammerConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_me_about_me_component__ = __webpack_require__("../../../../../src/app/about-me/about-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_loaders_css__ = __webpack_require__("../../../../angular2-loaders-css/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_loaders_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_loaders_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__intro_intro_component__ = __webpack_require__("../../../../../src/app/intro/intro.component.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var MyHammerConfig = /** @class */ (function (_super) {
    __extends(MyHammerConfig, _super);
    function MyHammerConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overrides = {
            'swipe': { direction: __WEBPACK_IMPORTED_MODULE_9_hammerjs__["DIRECTION_ALL"] }
        };
        return _this;
    }
    return MyHammerConfig;
}(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* HammerGestureConfig */]));

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__about_me_about_me_component__["a" /* AboutMeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_6__portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_7__skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__intro_intro_component__["a" /* IntroComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__app_routing__["a" /* AppRouting */],
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11_angular2_loaders_css__["LoadersCssModule"]
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* HAMMER_GESTURE_CONFIG */],
                    useClass: MyHammerConfig
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__intro_intro_component__ = __webpack_require__("../../../../../src/app/intro/intro.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_component__ = __webpack_require__("../../../../../src/app/portfolio/portfolio.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__ = __webpack_require__("../../../../../src/app/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_me_about_me_component__ = __webpack_require__("../../../../../src/app/about-me/about-me.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: 'intro', component: __WEBPACK_IMPORTED_MODULE_0__intro_intro_component__["a" /* IntroComponent */], data: { depth: '0' } },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */], data: { depth: '1' } },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_3__portfolio_portfolio_component__["a" /* PortfolioComponent */], data: { depth: '2' } },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */], data: { depth: '3' } },
    { path: 'skills', component: __WEBPACK_IMPORTED_MODULE_6__skills_skills_component__["a" /* SkillsComponent */], data: { depth: '4' } },
    { path: 'about-me', component: __WEBPACK_IMPORTED_MODULE_7__about_me_about_me_component__["a" /* AboutMeComponent */], data: { depth: '5' } },
    { path: '**', redirectTo: 'intro' }
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i{\r\n    font-size: 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    i {\r\n        font-size: 30px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes pulse_animation {\r\n\t0% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t30% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t40% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t50% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t60% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t70% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t80% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t100% { -webkit-transform: scale(1); transform: scale(1); }\r\n}\r\n\r\n@keyframes pulse_animation {\r\n\t0% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t30% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t40% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t50% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t60% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t70% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t80% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t100% { -webkit-transform: scale(1); transform: scale(1); }\r\n}\r\n\r\n.arrow-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.pulse {\r\n\t-webkit-animation-name: pulse_animation;\r\n\t        animation-name: pulse_animation;\r\n\t-webkit-animation-duration: 4000ms;\r\n\t        animation-duration: 4000ms;\r\n\t-webkit-transform-origin:70% 70%;\r\n\t        transform-origin:70% 70%;\r\n\t-webkit-animation-iteration-count: infinite;\r\n\t        animation-iteration-count: infinite;\r\n\t-webkit-animation-timing-function: linear;\r\n\t        animation-timing-function: linear;\r\n}\r\n\r\n.container{\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.header{\r\n    padding-top: 10px;\r\n}\r\n\r\n.contact{\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .contact {\r\n        height: 20%;\r\n    }\r\n}\r\n\r\n.container-data{\r\n    padding: 0 30px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.container-data:hover{\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .container-data {  \r\n        -webkit-box-orient: vertical;  \r\n        -webkit-box-direction: normal;  \r\n            -ms-flex-direction: column;  \r\n                flex-direction: column;\r\n        padding: 0 15px;\r\n    }\r\n}\r\n\r\n.data:hover{\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n    -webkit-transition: 0.6s;\r\n    transition: 0.6s\r\n}\r\n\r\n.data{\r\n    border-radius: 10px;\r\n    background: white;\r\n    -webkit-transition: 0.6s;\r\n    transition: 0.6s;\r\n    padding: 10px;\r\n    min-width: 250px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    height: 250px;\r\n    margin: 10px;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .data {  \r\n        width: 100%;\r\n        max-height: 150px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width:500px) and (max-width:800px) {\r\n    .data{\r\n    }\r\n}\r\n\r\n.name-data{\r\n    font-size: 35px;\r\n}\r\n\r\n.my-data{\r\n    color: grey;\r\n    font-size: 18px;\r\n}\r\n\r\nh2 {\r\n    font-weight: 600;\r\n    overflow: hidden;\r\n    text-align: center;\r\n}\r\n\r\n.footer{\r\n    font-size: 20px;\r\n    position: fixed;\r\n    left: 0;\r\n    bottom: 10px;\r\n    width: 100%;\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-100\" (swipedown)=\"onSwipedown($event)\">\n  <div class=\"d-flex flex-column h-100\">\n    <div class=\"row header m-0\">\n      <div class=\"col-1 arrow-container\">\n        <i class=\"fa fa-arrow-circle-down pulse\" [routerLink]=\"['/home']\"></i>\n      </div>\n      <div class=\"offset-sm-3 col-sm-4 col-10\">\n        <h2>KONTAKT</h2>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-center contact h-100\">\n      <div class=\"col-12 text-center container-data\">\n        <div class=\"col-sm-4 col-12 data\">\n          <p class=\"name-data\">Telefon</p>\n          <p class=\"my-data\">+48 506519785</p>\n        </div>\n        <div class=\"col-sm-4 col-12 data\">\n          <p class=\"name-data\">E-mail</p>\n          <p class=\"my-data\">przemyslaw.widanka@gmail.com</p>\n        </div>\n        <div class=\"col-sm-4 col-12 data\">\n          <p class=\"name-data\">Miejscowość</p>\n          <p class=\"my-data\">Gdańsk</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"footer\">\n  © 2018 by Przemysław Widanka\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(router) {
        this.router = router;
    }
    ContactComponent.prototype.ngOnInit = function () {
        document.body.style.backgroundImage = 'url("/assets/background.png")';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    };
    ContactComponent.prototype.onSwipedown = function (event) {
        this.router.navigate(['/home']);
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid{\r\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/tlo.jpg")) + ");\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    width: 100%;\r\n    padding: 15px 0;\r\n    opacity: 0;\r\n}\r\n\r\n.flex-grow {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n}\r\n\r\n@-moz-document url-prefix() {\r\n    .flex-grow {\r\n      flex: 0.5 !important;\r\n    }\r\n  }\r\n\r\nh2{\r\n    font-size: 1.8rem;\r\n}\r\n\r\n.show{\r\n    opacity: 1;\r\n    -webkit-transition: all 2s 4s !important;\r\n    transition: all 2s 4s !important;\r\n}\r\n\r\n.about-me{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.portfolio-skills{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n        -ms-flex-pack: justify;\r\n            justify-content: space-between;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding: 0;\r\n}\r\n\r\n.portfolio{\r\n    -webkit-transform: rotate(270deg);\r\n            transform: rotate(270deg);\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .portfolio {\r\n       margin-left: -15px;\r\n    }\r\n}\r\n\r\n.skills{\r\n    -webkit-transform: rotate(90deg);\r\n            transform: rotate(90deg);\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .skills {\r\n        margin-right: -30px;\r\n    }\r\n}\r\n\r\n.contact{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: end;\r\n        -ms-flex-align: end;\r\n            align-items: flex-end;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.header{\r\n    /* display: flex */\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .header {\r\n        width: 80%;\r\n        position: absolute;\r\n        left: 50%;\r\n        top: 20%;\r\n        -webkit-transform: translate(-50%,0%);\r\n                transform: translate(-50%,0%);\r\n    }\r\n}\r\n\r\n#typed{\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n#typed::after{\r\n    content: '|';\r\n    display: inline;\r\n    -webkit-animation: blink 0.7s infinite;\r\n            animation: blink 0.7s infinite;\r\n}\r\n\r\n@keyframes blink{\r\n    0% { opacity:1; }\r\n    50% { opacity:0; }\r\n    100% { opacity:1; }\r\n}\r\n\r\n@-webkit-keyframes blink{\r\n    0% { opacity:1; }\r\n    50% { opacity:0; }\r\n    100% { opacity:1; }\r\n}\r\n\r\n.container-swipe{\r\n    position: absolute;\r\n    right: 10px;\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .container-swipe {\r\n        width: 30%;\r\n    }\r\n}\r\n\r\n.container-swipe p{\r\n    font-size: 12px;\r\n}\r\n\r\n.swipe{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    max-width: 100%;\r\n    height: 45px;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-name: wobble;\r\n            animation-name: wobble;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n    position: relative;\r\n}\r\n\r\n@-webkit-keyframes wobble {\r\n    from {\r\n      -webkit-transform: translate3d(0, 0, 0);\r\n      transform: translate3d(0, 0, 0);\r\n    }\r\n  \r\n    15% {\r\n      -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n    }\r\n  \r\n    30% {\r\n      -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n    }\r\n  \r\n    45% {\r\n      -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n    }\r\n  \r\n    60% {\r\n      -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n    }\r\n  \r\n    75% {\r\n      -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n    }\r\n  \r\n    to {\r\n      -webkit-transform: translate3d(0, 0, 0);\r\n      transform: translate3d(0, 0, 0);\r\n    }\r\n  }\r\n\r\n@keyframes wobble {\r\n    from {\r\n      -webkit-transform: translate3d(0, 0, 0);\r\n      transform: translate3d(0, 0, 0);\r\n    }\r\n  \r\n    15% {\r\n      -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\r\n    }\r\n  \r\n    30% {\r\n      -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\r\n    }\r\n  \r\n    45% {\r\n      -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\r\n    }\r\n  \r\n    60% {\r\n      -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\r\n    }\r\n  \r\n    75% {\r\n      -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\r\n    }\r\n  \r\n    to {\r\n      -webkit-transform: translate3d(0, 0, 0);\r\n      transform: translate3d(0, 0, 0);\r\n    }\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-flex flex-column h-100\" [ngClass]=\"{'show': ukryj}\" (swipeleft)=\"onSwipeleft($event)\" (swiperight)=\"onSwiperight($event)\"\r\n  (swipeup)=\"onSwipeup($event)\" (swipedown)=\"onSwipedown($event)\">\r\n  <div class=\"d-flex flex-column flex-grow\">\r\n      <div class=\"col-12 about-me\">\r\n        <button [routerLink]=\"['/about-me']\" class=\"btn btn-outline-light btn-lg\">O mnie</button>\r\n      </div>\r\n      <div class=\"col-12 portfolio-skills h-100 flex-grow\">\r\n        <button [routerLink]=\"['/portfolio']\" class=\"btn btn-outline-light btn-lg portfolio\">Portfolio</button>\r\n        <div class=\"header\">\r\n          <h2 id=\"typed\"></h2>\r\n        </div>\r\n        <button [routerLink]=\"['/skills']\" class=\"btn btn-outline-light btn-lg skills\">Umiejętności</button>\r\n      </div>\r\n      <div class=\"col-12 contact\">\r\n        <button [routerLink]=\"['/contact']\" class=\"btn btn-outline-light btn-lg\">Kontakt</button>\r\n        <div class=\"container-swipe\">\r\n          <p>Możesz przesuwać się po stronie</p>\r\n          <img class=\"swipe\" src=\"/assets/swipe.svg\" alt=\"swipe\">          \r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typed_js__ = __webpack_require__("../../../../typed.js/lib/typed.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_typed_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_typed_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    // loading = false;
    function HomeComponent(router) {
        this.router = router;
        this.message = 'Cześć, tu Przemek. Front-end Developer';
        this.ukryj = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.ukryj = true;
        // this.loading = true;
        var typed = new __WEBPACK_IMPORTED_MODULE_1_typed_js__("#typed", {
            strings: [this.message],
            typeSpeed: 50,
            fadeOut: true,
            showCursor: false,
            loop: true,
            cursorChar: "|",
        });
        // document.body.style.backgroundImage =  'url("assets/tlo.jpg")';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    };
    HomeComponent.prototype.onSwiperight = function (event) {
        this.router.navigate(['/portfolio']);
    };
    HomeComponent.prototype.onSwipeleft = function (event) {
        this.router.navigate(['/skills']);
    };
    HomeComponent.prototype.onSwipedown = function (event) {
        this.router.navigate(['/about-me']);
    };
    HomeComponent.prototype.onSwipeup = function (event) {
        this.router.navigate(['/contact']);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/intro/intro.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".intro-container{\r\n    margin: 0;\r\n    padding: 0;\r\n    height: 100%;\r\n}\r\n\r\n.welcome-section{\r\n    width: 100%;\r\n    height: 100%;\r\n    overflow: hidden;\r\n    background: #000;\r\n}\r\n\r\n.content-wrap{\r\n    height: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.fly-in-text{\r\n    text-align: center;    \r\n    list-style: none;\r\n}\r\n\r\n.fly-in-text li{\r\n    display: inline-block;\r\n    margin-right: 20px;\r\n    font-size: 4.5em;\r\n    color: #fff;\r\n    opacity : 1;\r\n    -webkit-transition: all 3s ease;\r\n    transition: all 3s ease;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .fly-in-text li {\r\n        font-size: 3.5em;\r\n    }\r\n}\r\n\r\n.fly-in-text li:nth-child(7){\r\n    margin-right: 0px;\r\n}\r\n\r\n.emoticon{\r\n    display: inline-block;\r\n}\r\n\r\n.enter-button{\r\n    display: block;\r\n    text-align: center;\r\n    font-size: 2em;\r\n    text-decoration: none;\r\n    color: #adff2f;\r\n    opacity: 1;\r\n    margin-top: 30px;\r\n    -webkit-transition: all 1s ease 3s;\r\n    transition: all 1s ease 3s;\r\n}\r\n\r\n.content-hidden .fly-in-text li {\r\n    opacity: 0;\r\n}\r\n\r\n.content-hidden .fly-in-text li:nth-child(1) { -webkit-transform: translate3d(-60px, 60px, 100px); transform: translate3d(-60px, 60px, 100px); }\r\n\r\n.content-hidden .fly-in-text li:nth-child(2) { -webkit-transform: translate3d(-30px, -60px, 10px); transform: translate3d(-30px, -60px, 10px); }\r\n\r\n.content-hidden .fly-in-text li:nth-child(3) { -webkit-transform: translate3d(0px, 30px, 0); transform: translate3d(0px, 30px, 0); }\r\n\r\n.content-hidden .fly-in-text li:nth-child(4) { -webkit-transform: translate3d(30px, 120px, 0); transform: translate3d(30px, 120px, 0); }\r\n\r\n.content-hidden .fly-in-text li:nth-child(5) { -webkit-transform: translate3d(60px, 10px, 0); transform: translate3d(60px, 10px, 0); }\r\n\r\n.content-hidden .fly-in-text li:nth-child(6) { -webkit-transform: translate3d(90px, 100px, 0); transform: translate3d(90px, 100px, 0); }\r\n\r\n.content-hidden .fly-in-text li:nth-child(7) { -webkit-transform: translate3d(120px, -100px, 0); transform: translate3d(120px, -100px, 0); }\r\n\r\n.content-hidden .enter-button { opacity: 0; -webkit-transform: translate3d(0, -30px, 0); transform: translate3d(0, -30px, 0); }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/intro/intro.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"intro-container\">\n  <div class=\"welcome-section\" [ngClass]=\"{'content-hidden': hidden}\">\n    <div class=\"content-wrap\">\n      <ul class=\"fly-in-text\">\n        <li>H</li>\n        <li>E</li>\n        <li>L</li>\n        <li>L</li>\n        <li>O</li>\n        <div class=\"emoticon\">\n          <li>:</li>\n          <li>)</li>\n        </div>\n      </ul>\n      <!-- <a href=\"#\" [routerLink]=\"['/home']\" (click)=\"showHomePage()\" class=\"enter-button\">Zapraszam na stronę przedstawiająca moją skromną osobę</a> -->\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/intro/intro.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IntroComponent = /** @class */ (function () {
    function IntroComponent(router) {
        this.router = router;
        this.hidden = true;
    }
    IntroComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.hidden = false;
        }, 500);
        setTimeout(function () {
            _this.router.navigate(['/home']);
        }, 3000);
    };
    IntroComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__("../../../../../src/app/intro/intro.component.html"),
            styles: [__webpack_require__("../../../../../src/app/intro/intro.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], IntroComponent);
    return IntroComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n    margin: 0;\r\n}\r\n\r\n.flex-grow {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n}\r\n\r\n@-moz-document url-prefix() {\r\n    .container-portfolio {\r\n      height: calc(100% - 60px) !important;\r\n    }\r\n  }\r\n\r\n.header{\r\n    padding-top: 10px;\r\n}\r\n\r\nh2 {\r\n    overflow: hidden;\r\n    text-align: center;\r\n    /* font-family: 'Montserrat', sans-serif; */\r\n    font-weight: 600;\r\n}\r\n\r\n.arrow-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\ni{\r\n    font-size: 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    i {\r\n        font-size: 30px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes pulse_animation {\r\n\t0% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t30% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t40% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t50% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t60% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t70% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t80% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t100% { -webkit-transform: scale(1); transform: scale(1); }\r\n}\r\n\r\n@keyframes pulse_animation {\r\n\t0% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t30% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t40% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t50% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t60% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t70% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t80% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t100% { -webkit-transform: scale(1); transform: scale(1); }\r\n}\r\n\r\n.pulse {\r\n\t-webkit-animation-name: pulse_animation;\r\n\t        animation-name: pulse_animation;\r\n\t-webkit-animation-duration: 4000ms;\r\n\t        animation-duration: 4000ms;\r\n\t-webkit-transform-origin:70% 70%;\r\n\t        transform-origin:70% 70%;\r\n\t-webkit-animation-iteration-count: infinite;\r\n\t        animation-iteration-count: infinite;\r\n\t-webkit-animation-timing-function: linear;\r\n\t        animation-timing-function: linear;\r\n}\r\n\r\n.container{\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.container-portfolio{\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .container-portfolio {\r\n        margin: 1px;\r\n    }\r\n}\r\n\r\n.left-side, .higher, .lower{\r\n    position: relative;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    /* background: rgb(185, 175, 175); */\r\n}\r\n\r\n.left-side:hover .my-buttons, .higher:hover .my-buttons, .lower:hover .my-buttons {\r\n    z-index: 250;\r\n    opacity: 1;\r\n    visibility: visible;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n}\r\n\r\n.left-side:hover, .higher:hover, .lower:hover{\r\n    background: none;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n}\r\n\r\n.my-button{\r\n    width: 80px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    margin: 0 2px;\r\n}\r\n\r\n.my-buttons{\r\n    z-index: 300;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n}\r\n\r\n.flex-grow {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 0 auto;\r\n            flex: 1 0 auto;\r\n}\r\n\r\n.container-thumbnail{\r\n    width: 100% !important;\r\n}\r\n\r\n.right-side{\r\n    width: 45%;\r\n    height:100%;  \r\n}\r\n\r\n.right-side{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.left-side{\r\n    /* background: #d6dfe6; */\r\n    border: 4px solid white;\r\n    border-radius: 25px;    \r\n    /* margin: 3px; */\r\n    padding: 25px;\r\n    width: 45%;\r\n    height: 75%;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .left-side {\r\n        width: 100%;\r\n        height: 33.33%;\r\n    }\r\n    .right-side {\r\n        width: 100%;\r\n        height: 66.66%;\r\n    }\r\n}\r\n\r\n.thumbnail{\r\n    /* width: 100%; */\r\n    height: 60%;\r\n    /* max-width: 600px; */\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .thumbnail {\r\n        height: 100%;\r\n    }\r\n}\r\n\r\n.container-thumbnail-half{\r\n    height: 40%;\r\n    padding: 25px;\r\n    /* background: white; */\r\n    border: 4px solid white;\r\n    border-radius: 25px;    \r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    .container-thumbnail-half {\r\n        height: 50%;\r\n    }\r\n}\r\n\r\n.thumbnail-with-half-height{\r\n    /* width: 100%; */\r\n    height: 100%;\r\n    /* max-width: 600px; */\r\n}\r\n\r\n.background-api{\r\n    /* background: lightyellow; */\r\n    border: 4px solid white;\r\n    border-radius: 25px;\r\n    \r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid d-flex flex-column h-100\" (swipeleft)=\"onSwipeleft($event)\">\n  <div class=\"d-flex flex-column h-100\">\n    <div class=\"row header\">\n      <div class=\"col-1 arrow-container\">\n        <i class=\"fa fa-arrow-circle-left pulse\" [routerLink]=\"['/home']\"></i>\n      </div>\n      <div class=\"offset-sm-3 col-sm-4 col-10\">\n        <h2>PORTFOLIO</h2>\n      </div>\n    </div>\n\n    <div class=\"container-portfolio row d-flex flex-column align-items-center h-100\">\n      <!-- <div class=\"col-xs-6 right-side\"> -->\n        <div class=\"left-side d-flex justify-content-center align-items-center\">\n          <img src=\"/assets/api.png\" class=\"thumbnail\" alt=\"api\" draggable=\"false\">\n          <div class=\"my-buttons\">\n            <a class=\"btn btn-primary my-button\" href=\"https://pwidanka.github.io/coordinates/\" target=\"_blank\">\n              Podgląd\n            </a>\n            <a class=\"btn btn-info my-button\" href=\"https://github.com/pwidanka/coordinates-project/tree/master/my-app\" target=\"_blank\">\n              Kod\n            </a>\n          </div>\n        <!-- </div> -->\n      </div>\n      <div class=\"right-side\">\n        <div class=\"container-thumbnail-half d-flex justify-content-center align-items-center higher\">\n          <img src=\"/assets/my-first-project.png\" class=\"thumbnail-with-half-height\" alt=\"ship-game\" draggable=\"false\">\n          <div class=\"my-buttons\">\n            <a class=\"btn btn-primary my-button\" href=\"https://pwidanka.github.io\" target=\"_blank\">\n              Podgląd\n            </a>\n            <a class=\"btn btn-info my-button\" href=\"https://github.com/pwidanka/pwidanka.github.io\" target=\"_blank\">\n              Kod\n            </a>\n          </div>\n        </div>\n        <div class=\"container-thumbnail-half d-flex justify-content-center align-items-center background-api lower\">\n          <img src=\"/assets/my-website.png\" class=\"thumbnail-with-half-height\" alt=\"website\" draggable=\"false\">\n          <div class=\"my-buttons\">\n            <a class=\"btn btn-info my-button\" href=\"https://github.com/pwidanka/my-website\" target=\"_blank\">\n              Kod\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portfolio/portfolio.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(router) {
        this.router = router;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        document.body.style.backgroundImage = 'url("../assets/background.png")';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    };
    PortfolioComponent.prototype.onSwipeleft = function (event) {
        this.router.navigate(['/home']);
    };
    PortfolioComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__("../../../../../src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portfolio/portfolio.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "../../../../../src/app/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row{\r\n    margin: 0;\r\n}\r\n\r\nh2 {\r\n    overflow: hidden;\r\n    text-align: center;\r\n    /* font-family: 'Montserrat', sans-serif; */\r\n    font-weight: 600;\r\n}\r\n\r\n@media screen and (max-width: 800px) {\r\n    h5 {\r\n        font-size: 14px;\r\n    }\r\n}\r\n\r\n.arrow-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\ni{\r\n    font-size: 40px;\r\n    cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    i {\r\n        font-size: 30px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes pulse_animation {\r\n\t0% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t30% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t40% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t50% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t60% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t70% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t80% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t100% { -webkit-transform: scale(1); transform: scale(1); }\r\n}\r\n\r\n@keyframes pulse_animation {\r\n\t0% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t30% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t40% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t50% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t60% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t70% { -webkit-transform: scale(1.10); transform: scale(1.10); }\r\n\t80% { -webkit-transform: scale(1); transform: scale(1); }\r\n\t100% { -webkit-transform: scale(1); transform: scale(1); }\r\n}\r\n\r\n.pulse {\r\n\t-webkit-animation-name: pulse_animation;\r\n\t        animation-name: pulse_animation;\r\n\t-webkit-animation-duration: 4000ms;\r\n\t        animation-duration: 4000ms;\r\n\t-webkit-transform-origin:70% 70%;\r\n\t        transform-origin:70% 70%;\r\n\t-webkit-animation-iteration-count: infinite;\r\n\t        animation-iteration-count: infinite;\r\n\t-webkit-animation-timing-function: linear;\r\n\t        animation-timing-function: linear;\r\n}\r\n\r\n.skill{\r\n    position: relative;\r\n}\r\n\r\n.header{\r\n    padding-top: 10px;\r\n}\r\n\r\nh3{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    h3 {\r\n        font-size: 1.17em;\r\n    }\r\n}\r\n\r\n.container{\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\n.skill:hover h3{\r\n    opacity: 0;\r\n    -webkit-transition: 0.6s;\r\n    transition: 0.6s;\r\n}\r\n\r\n.skill img{\r\n    opacity: 0;\r\n    width: 100px;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .skill img {\r\n        width: 65px;\r\n    }\r\n}\r\n\r\n.skill:hover img{\r\n    opacity: 1;\r\n    -webkit-transition: 1s;\r\n    transition: 1s;\r\n}\r\n\r\n.my-skills{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    /* flex-direction: column; */\r\n}\r\n\r\n.arrow-right{\r\n    \r\n}\r\n\r\nh5{\r\n    color: black;\r\n    border-radius: 5px;\r\n    padding: 5px;\r\n    background: rgba(255,255,255,0.6);\r\n    text-align: center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid h-100\" (swiperight)=\"onSwiperight($event)\">\n  <div class=\"d-flex flex-column h-100\">\n    <div class=\"row header\">\n      <div class=\"col-1 arrow-container\">\n        <i class=\"fa fa-arrow-circle-right pulse\" [routerLink]=\"['/home']\"></i>\n      </div>\n      <div class=\"offset-sm-3 col-sm-4 col-10\">\n        <h2>UMIEJĘTNOŚCI</h2>\n      </div>\n    </div>\n    <div class=\"row justify-content-center my-skills\">\n      <div class=\"col-10\">\n        <h5>W projektach, które miałem możliwość wykonywać, używałem następujących technologii:</h5>\n      </div>\n      <div class=\"col-sm-3 col-4 text-center skill\">\n        <img class=\"text-center\" src=\"../assets/html.svg\" alt=\"strzalka\"  draggable=\"false\">\n        <h3>HTML5</h3>\n      </div>\n      <div class=\"col-sm-3 col-4 text-center skill\">\n        <img class=\"text-center\" src=\"../assets/css.svg\" alt=\"strzalka\"  draggable=\"false\">\n        <h3>CSS3</h3>\n      </div>\n      <div class=\"col-sm-3 col-4 text-center skill\">\n        <img class=\"text-center\" src=\"../assets/js.svg\" alt=\"strzalka\"  draggable=\"false\">\n        <h3>JAVASCRIPT</h3>\n      </div>\n      <div class=\"col-sm-3 col-4 text-center skill\">\n        <img class=\"text-center\" src=\"../assets/jquery.svg\" alt=\"strzalka\"  draggable=\"false\">\n        <h3>JQUERY</h3>\n      </div>\n      <div class=\"col-sm-3 col-4 text-center skill\">\n        <img class=\"text-center\" src=\"../assets/ts.png\" alt=\"strzalka\"  draggable=\"false\">\n        <h3>TYPESCRIPT</h3>\n      </div>\n      <div class=\"col-sm-3 col-4 text-center skill\">\n        <img class=\"text-center\" src=\"../assets/angular.svg\" alt=\"strzalka\"  draggable=\"false\">\n        <h3>ANGULAR</h3>\n      </div>\n      <div class=\"col-sm-3 col-4 text-center skill\">\n        <img class=\"text-center\" src=\"../assets/bootstrap.png\" alt=\"strzalka\"  draggable=\"false\">\n        <h3>BOOTSTRAP</h3>\n      </div>\n      <div class=\"col-sm-3 col-4 text-center skill\">\n        <img class=\"text-center\" src=\"../assets/git.svg\" alt=\"strzalka\"  draggable=\"false\">\n        <h3>GIT</h3>\n      </div>\n      <div class=\"col-sm-12 col-4 text-center skill\">\n        <img class=\"text-center\" src=\"../assets/ps.svg\" alt=\"strzalka\"  draggable=\"false\">\n        <h3>PHOTOSHOP</h3>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(router) {
        this.router = router;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        document.body.style.backgroundImage = 'url("../assets/background.png")';
        document.body.style.backgroundPosition = 'center';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
    };
    SkillsComponent.prototype.onSwiperight = function (event) {
        this.router.navigate(['/home']);
    };
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/skills/skills.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/tlo.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tlo.38c2cca45ac657fb5617.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map