webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  position: fixed;\n  width: 100%;\n  height: 60px;\n  background-color: #B4D9FE;\n  top: 0;\n  left: 0;\n  z-index: 9999;\n  opacity: 0.9;\n}\nnav > ul  {\n  float: right;\n  list-style: none;\n  margin-left: 50px;\n\n}\nli {\n  display: inline-block;\n  padding-right: 30px;\n\n}\nli > a {\n  list-style: none;\n  text-decoration: none;\n  color:black;\n\n}\n\n\n\n\n\n\n/**\n<section class=\"flex-container\">\n  <div class=\"flex-item\"></div>\n  <div class=\"flex-item\"></div>\n  <div class=\"flex-item\"></div>\n  <div class=\"flex-item\"></div>\n  <div class=\"flex-item\"></div>\n  <div class=\"flex-item\"></div>\n  <div class=\"flex-item\"></div>\n  <div class=\"flex-item\"></div>\n</section>\n\n\n<a href=\"\"><i>IC</i>TEXT</a>\n<a href=\"\">TEXT</a>\n\nCSS\n*,\n*::before,\n*::after{\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n\n.flex-container {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-content: center;\n    align-items: center;\n    }\n\n\n.flex-item {\n    order: 0;\n    flex: 0 1 auto;\n    align-self: auto;\n     background: black;\n    }\n\n\n.flex-container {\n  background-color: #e1e1e1;\n  width: 90vw;\n  min-height: 90vh;\n  margin: .6em auto;\n}\n\n.flex-item {\n  height: 160px;\n  width: 100%;\n  border: 1px solid red;\n}\n\n\n\n\n@media all and (min-width: 768px) {\n  .flex-item {\n    width: 50%;\n  }\n}\n\n\n@media all and (min-width: 993px) {\n  .flex-item {\n    width: 20%;\n  }\n}\n\n\n\n@media all and (min-width: 1300px) {\n    body { background: yellow;\n}\n\n**/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<body>\n  <div *ngIf=\"this.session.isAuthenticated\">\n    <nav>\n      <ul>\n        <li><a [routerLink]=\"['/']\">Home</a></li>\n        <li><a [routerLink]=\"['/newspapers']\">Suscribe List</a></li>\n        <li><a [routerLink]=\"['/my-newspapers']\">My Newspapers</a></li>\n        <li><a [routerLink]=\"['/articles']\">Favourite Articles</a></li>\n\n        <li><a href=\"#\" (click)=\"logout()\">Logout</a></li>\n      </ul>\n    </nav>\n\n  </div>\n\n\n  <div *ngIf=\"!this.session.isAuthenticated\">\n    <nav>\n      <ul>\n        <li><a [routerLink]=\"['/login']\" >Login</a></li>\n        <li><a [routerLink]=\"['/signup']\">Signup</a></li>\n      </ul>\n    </nav>\n\n  </div>\n  <br>\n  <br>\n\n  <h1>Welcome to myNews!</h1>\n\n  <router-outlet></router-outlet>\n\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(session) {
        this.session = session;
        this.title = 'app';
        this.user = {};
        this.username = localStorage.getItem("user");
    }
    AppComponent.prototype.ngOnInit = function () {
        this.session.getUser();
    };
    AppComponent.prototype.logout = function () {
        this.session.logout();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_newspaper_service__ = __webpack_require__("../../../../../src/app/services/newspaper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_newsApi_service__ = __webpack_require__("../../../../../src/app/services/newsApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_newspapers_list_newspapers_list_newspapers_component__ = __webpack_require__("../../../../../src/app/components/newspapers/list-newspapers/list-newspapers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_newspapers_my_newspapers_my_newspapers_component__ = __webpack_require__("../../../../../src/app/components/newspapers/my-newspapers/my-newspapers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_newspapers_articles_articles_component__ = __webpack_require__("../../../../../src/app/components/newspapers/articles/articles.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_newspapers_list_newspapers_list_newspapers_component__["a" /* ListNewspapersComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_newspapers_my_newspapers_my_newspapers_component__["a" /* MyNewspapersComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_newspapers_articles_articles_component__["a" /* ArticlesComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_7__services_newspaper_service__["a" /* NewspaperService */],
            __WEBPACK_IMPORTED_MODULE_8__services_newsApi_service__["a" /* NewsApi */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_newspapers_list_newspapers_list_newspapers_component__ = __webpack_require__("../../../../../src/app/components/newspapers/list-newspapers/list-newspapers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_newspapers_my_newspapers_my_newspapers_component__ = __webpack_require__("../../../../../src/app/components/newspapers/my-newspapers/my-newspapers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_newspapers_articles_articles_component__ = __webpack_require__("../../../../../src/app/components/newspapers/articles/articles.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_2__components_signup_signup_component__["a" /* SignupComponent */] },
    { path: 'newspapers', component: __WEBPACK_IMPORTED_MODULE_4__components_newspapers_list_newspapers_list_newspapers_component__["a" /* ListNewspapersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]] },
    { path: 'my-newspapers', component: __WEBPACK_IMPORTED_MODULE_5__components_newspapers_my_newspapers_my_newspapers_component__["a" /* MyNewspapersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]] },
    { path: 'articles', component: __WEBPACK_IMPORTED_MODULE_6__components_newspapers_articles_articles_component__["a" /* ArticlesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_1__services_session_service__["a" /* SessionService */]] }
];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*,\n*::before,\n*::after{\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n\n.flex-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n}\n\n\n.flex-item {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    float:left;\n    position: relative;\n}\n\n.new:hover {\n  cursor: pointer;\n}\n\n\n.flex-container {\n  width: 100%;\n  min-height: 90vh;\n  margin: .6em auto;\n}\n\n.flex-item {\n  width: 300px;\n  margin-bottom: .5em;\n  padding: 1em;\n}\n\n.image-new {\n  width: 100%;\n  height: 40%;\n  -o-object-fit: fill;\n     object-fit: fill;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.newspaper .flex-item button {\n  position: absolute;\n  right: 2px;\n  bottom: 2px;\n  padding: 15px;\n  z-index: 5;\n  border: 0;\n}\n.newspaper .flex-item button:hover {\n  cursor: pointer;\n  background: yellow;\n  outline: 0;\n}\n\n/**\n@media all and (min-width: 768px) {\n  .flex-item {\n    width: 50%;\n  }\n}\n\n\n@media all and (min-width: 993px) {\n  .flex-item {\n    width: 20%;\n  }\n}\n\n\n\n@media all and (min-width: 1300px) {\n    body { background: yellow;\n}\n}\n**/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='flex-container newspaper' *ngFor=\"let article of articles\">\n  <a class=\"flex-item\" *ngFor=\"let new of article.articles\">\n      <img class =\"image-new new\"[src]=\"new.urlToImage\" (click)=\"showArticle(new)\"/>\n      <h3 class = \"new\" (click)=\"showArticle(new)\">{{new.title}}</h3>\n      <p>{{new.description}}</p><br>\n      <p>{{new.author}}</p>\n      <!--<img src=\"fullImagePath\" alt=\"heart\"> -->\n      <button (click)=\"fav(new)\">Add to favourites</button>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_newsApi_service__ = __webpack_require__("../../../../../src/app/services/newsApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_newspaper_service__ = __webpack_require__("../../../../../src/app/services/newspaper.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(session, newspaperService, newsApi, router) {
        this.session = session;
        this.newspaperService = newspaperService;
        this.newsApi = newsApi;
        this.router = router;
        this.articles = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newspaperService.getSuscribedNewspaper()
            .subscribe(function (user) {
            user[0].newspapersSubscription.forEach(function (element) {
                _this.newspaperService.getNewspaper(element)
                    .subscribe(function (newspaper) {
                    // Do another suscribe to the actual news API and push them into the array
                    // which will be displayed in the HTML
                    var url = newspaper[0].request_link;
                    _this.newsApi.getArticles(url)
                        .subscribe(function (hello) {
                        // Do another suscribe to t
                        _this.articles.push(hello);
                    });
                });
            });
        });
    };
    HomeComponent.prototype.showArticle = function (myNew) {
        window.location.href = myNew.url;
    };
    HomeComponent.prototype.fav = function (myNew) {
        this.newspaperService.saveArticle(myNew)
            .subscribe();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_newspaper_service__["a" /* NewspaperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_newspaper_service__["a" /* NewspaperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_newsApi_service__["a" /* NewsApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_newsApi_service__["a" /* NewsApi */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], HomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n\n<form>\n  <div *ngIf=\"error\">\n    {{ error }}\n  </div>\n  <p>\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\">\n  </p>\n\n  <p>\n    <label for=\"password\">Password</label>\n    <input type=\"text\" [(ngModel)]=\"user.password\" name=\"password\">\n  </p>\n\n  <button (click)=\"login()\">Login</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(session, router) {
        this.session = session;
        this.router = router;
        this.user = {
            username: '',
            password: '',
        };
        this.error = null;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.session.login(this.user).subscribe(function (data) {
            _this.router.navigate(['']);
        }, function (err) {
            _this.error = err;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/newspapers/articles/articles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*,\n*::before,\n*::after{\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n\n.flex-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n}\n\n\n.flex-item {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    float:left;\n    position: relative;\n}\n\n.new:hover {\n  cursor: pointer;\n}\n\n\n.flex-container {\n  width: 100%;\n  min-height: 90vh;\n  margin: .6em auto;\n}\n\n.flex-item {\n  width: 300px;\n  margin-bottom: .5em;\n  padding: 1em;\n}\n\n.image-new {\n  width: 100%;\n  height: 40%;\n  -o-object-fit: fill;\n     object-fit: fill;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.newspaper .flex-item button {\n  position: absolute;\n  right: 2px;\n  bottom: 2px;\n  padding: 15px;\n  z-index: 5;\n  border: 0;\n}\n.newspaper .flex-item button:hover {\n  cursor: pointer;\n  background: yellow;\n  outline: 0;\n}\n\n/**\n@media all and (min-width: 768px) {\n  .flex-item {\n    width: 50%;\n  }\n}\n\n\n@media all and (min-width: 993px) {\n  .flex-item {\n    width: 20%;\n  }\n}\n\n\n\n@media all and (min-width: 1300px) {\n    body { background: yellow;\n}\n}\n**/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/newspapers/articles/articles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='flex-container newspaper' >\n  <a class=\"flex-item\" *ngFor=\"let article of articles\">\n    <a *ngFor = \"let new of article\">\n      <img class =\"image-new new\"[src]=\"new.urlToImage\" (click)=\"showArticle(new)\"/>\n      <h3 class = \"new\" (click)=\"showArticle(new)\">{{new.title}}</h3>\n      <p>{{new.description}}</p><br>\n      <p>{{new.author}}</p>\n      <button (click)=\"removeFav(new,article)\">Remove from favourites</button>\n    </a>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/newspapers/articles/articles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_newspaper_service__ = __webpack_require__("../../../../../src/app/services/newspaper.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticlesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArticlesComponent = (function () {
    function ArticlesComponent(session, newspaperService, router) {
        this.session = session;
        this.newspaperService = newspaperService;
        this.router = router;
    }
    ArticlesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newspaperService.getFavoriteArticles()
            .subscribe(function (myArticles) {
            _this.articles = myArticles;
            console.log(myArticles);
        });
    };
    ArticlesComponent.prototype.removeFav = function (myNew, myArticle) {
        var index = this.articles.indexOf(myArticle);
        var id = myArticle[0]._id;
        this.articles.splice(index, 1);
        this.newspaperService.removeArticle(myNew, id)
            .subscribe();
    };
    ArticlesComponent.prototype.showArticle = function (myNew) {
        window.location.href = myNew.url;
    };
    return ArticlesComponent;
}());
ArticlesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-articles',
        template: __webpack_require__("../../../../../src/app/components/newspapers/articles/articles.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/newspapers/articles/articles.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_newspaper_service__["a" /* NewspaperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_newspaper_service__["a" /* NewspaperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ArticlesComponent);

var _a, _b, _c;
//# sourceMappingURL=articles.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/newspapers/list-newspapers/list-newspapers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*,\n*::before,\n*::after{\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n\n.flex-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n}\n\n\n.flex-item {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    float:left;\n    position: relative;\n}\n\n.new:hover {\n  cursor: pointer;\n}\n\n\n.flex-container {\n  width: 100%;\n  min-height: 90vh;\n  margin: .6em auto;\n}\n\n.flex-item {\n  width: 300px;\n  margin-bottom: .5em;\n  padding: 1em;\n}\n\n.image-new {\n  width: 80%;\n  height: 60%;\n  -o-object-fit: fill;\n     object-fit: fill;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.newspaper .flex-item button {\n  position: absolute;\n  right: 2px;\n  bottom: 2px;\n  padding: 15px;\n  z-index: 5;\n  border: 0;\n}\n.newspaper .flex-item button:hover {\n  cursor: pointer;\n  background: yellow;\n  outline: 0;\n}\nh3 {\n  padding-left: 50px;\n}\n\n.buttonSuscribe {\n  margin-left: 50px;\n}\n\n/**\n@media all and (min-width: 768px) {\n  .flex-item {\n    width: 50%;\n  }\n}\n\n\n@media all and (min-width: 993px) {\n  .flex-item {\n    width: 20%;\n  }\n}\n\n\n\n@media all and (min-width: 1300px) {\n    body { background: yellow;\n}\n}\n**/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/newspapers/list-newspapers/list-newspapers.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Newspapers list</h1>\n<div class = 'flex-container'>\n    <div class='flex-item' *ngFor=\"let newspaper of newspapers\">\n      <img class = \"image-new\" src=\"{{newspaper.image}}\" />\n      <h3>{{ newspaper.name }}</h3>\n      <button (click)=\"suscribe(newspaper._id,newspaper)\" class = \"buttonSuscribe\">Suscribe</button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/newspapers/list-newspapers/list-newspapers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_newspaper_service__ = __webpack_require__("../../../../../src/app/services/newspaper.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListNewspapersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListNewspapersComponent = (function () {
    function ListNewspapersComponent(session, newspaperService, router) {
        this.session = session;
        this.newspaperService = newspaperService;
        this.router = router;
    }
    ListNewspapersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newspaperService.getNewspapers()
            .subscribe(function (newspaper) {
            _this.newspapers = newspaper;
        });
    };
    ListNewspapersComponent.prototype.suscribe = function (id) {
        this.newspaperService.suscribe(id)
            .subscribe(function (res) {
        });
    };
    return ListNewspapersComponent;
}());
ListNewspapersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-list-newspapers',
        template: __webpack_require__("../../../../../src/app/components/newspapers/list-newspapers/list-newspapers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/newspapers/list-newspapers/list-newspapers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_newspaper_service__["a" /* NewspaperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_newspaper_service__["a" /* NewspaperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ListNewspapersComponent);

var _a, _b, _c;
//# sourceMappingURL=list-newspapers.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/newspapers/my-newspapers/my-newspapers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "*,\n*::before,\n*::after{\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\n\n.flex-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -ms-flex-line-pack: center;\n        align-content: center;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n}\n\n\n.flex-item {\n    -webkit-box-ordinal-group: 1;\n        -ms-flex-order: 0;\n            order: 0;\n    -webkit-box-flex: 0;\n        -ms-flex: 0 1 auto;\n            flex: 0 1 auto;\n    -ms-flex-item-align: auto;\n        -ms-grid-row-align: auto;\n        align-self: auto;\n    float:left;\n    position: relative;\n}\n\n.new:hover {\n  cursor: pointer;\n}\n\n\n.flex-container {\n  width: 100%;\n  min-height: 90vh;\n  margin: .6em auto;\n}\n\n.flex-item {\n  width: 300px;\n  margin-bottom: .5em;\n  padding: 1em;\n}\n\n.image-new {\n  width: 80%;\n  height: 60%;\n  -o-object-fit: fill;\n     object-fit: fill;\n  -o-object-position: center;\n     object-position: center;\n}\n\n.newspaper .flex-item button {\n  position: absolute;\n  right: 2px;\n  bottom: 2px;\n  padding: 15px;\n  z-index: 5;\n  border: 0;\n}\n.newspaper .flex-item button:hover {\n  cursor: pointer;\n  background: yellow;\n  outline: 0;\n}\n\n/**\n@media all and (min-width: 768px) {\n  .flex-item {\n    width: 50%;\n  }\n}\n\n\n@media all and (min-width: 993px) {\n  .flex-item {\n    width: 20%;\n  }\n}\n\n\n\n@media all and (min-width: 1300px) {\n    body { background: yellow;\n}\n}\n**/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/newspapers/my-newspapers/my-newspapers.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Newspapers list Subscription</h1>\n<div class = 'flex-container'>\n  <div>\n    <div class='flex-item' *ngFor=\"let newspaper of newspapers\">\n      <img class = \"image-new\" [src]=\"newspaper.image\" />\n      <h3>{{ newspaper.name }}</h3>\n      <button (click)=\"unsuscribe(newspaper._id,newspaper)\" class = \"buttonSuscribe\">Unsuscribe</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/newspapers/my-newspapers/my-newspapers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_newsApi_service__ = __webpack_require__("../../../../../src/app/services/newsApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_newspaper_service__ = __webpack_require__("../../../../../src/app/services/newspaper.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNewspapersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyNewspapersComponent = (function () {
    function MyNewspapersComponent(session, newspaperService, newsApi, router) {
        this.session = session;
        this.newspaperService = newspaperService;
        this.newsApi = newsApi;
        this.router = router;
        this.newspapers = [];
    }
    MyNewspapersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newspaperService.getSuscribedNewspaper()
            .subscribe(function (user) {
            user[0].newspapersSubscription.forEach(function (element) {
                _this.newspaperService.getNewspaper(element)
                    .subscribe(function (newspaper) {
                    _this.newspapers.push(newspaper[0]);
                });
            });
        });
    };
    MyNewspapersComponent.prototype.unsuscribe = function (id, newspaper) {
        var index = this.newspapers.indexOf(newspaper);
        this.newspapers.splice(index, 1);
        this.newspaperService.unsuscribe(id)
            .subscribe();
    };
    return MyNewspapersComponent;
}());
MyNewspapersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-my-newspapers',
        template: __webpack_require__("../../../../../src/app/components/newspapers/my-newspapers/my-newspapers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/newspapers/my-newspapers/my-newspapers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_newspaper_service__["a" /* NewspaperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_newspaper_service__["a" /* NewspaperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_newsApi_service__["a" /* NewsApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_newsApi_service__["a" /* NewsApi */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], MyNewspapersComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=my-newspapers.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Sign up</h2>\n\n<form>\n  <div *ngIf=\"error\">\n    {{ error }}\n  </div>\n  <p>\n    <label for=\"username\">Username</label>\n    <input type=\"text\" [(ngModel)]=\"user.username\" name=\"username\">\n  </p>\n\n  <p>\n    <label for=\"password\">Password</label>\n    <input type=\"text\" [(ngModel)]=\"user.password\" name=\"password\">\n  </p>\n\n  <button (click)=\"signup()\">Sign up</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(session, router) {
        this.session = session;
        this.router = router;
        this.user = {
            username: '',
            password: '',
        };
        this.error = null;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function () {
        var _this = this;
        this.session.signup(this.user).subscribe(function (data) {
            _this.router.navigate(['/my-newspapers']);
        }, function (err) {
            _this.error = err;
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/newsApi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsApi; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NewsApi = (function () {
    function NewsApi(http, session) {
        this.http = http;
        this.session = session;
        this.BASE_URL = 'http://localhost:3000';
    }
    NewsApi.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    // Get full list of newspapers
    NewsApi.prototype.getArticles = function (link) {
        return this.http.get("" + link)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return NewsApi;
}());
NewsApi = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__session_service__["a" /* SessionService */]) === "function" && _b || Object])
], NewsApi);

var _a, _b;
//# sourceMappingURL=newsApi.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/newspaper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__newsApi_service__ = __webpack_require__("../../../../../src/app/services/newsApi.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewspaperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewspaperService = (function () {
    function NewspaperService(http, session, newsApi) {
        this.http = http;
        this.session = session;
        this.newsApi = newsApi;
        this.BASE_URL = 'http://localhost:3000';
    }
    NewspaperService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    // Get full list of newspapers
    NewspaperService.prototype.getNewspapers = function () {
        return this.http.get(this.BASE_URL + "/api/newspapers", this.requestOptions())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewspaperService.prototype.getFavoriteArticles = function () {
        return this.http.get(this.BASE_URL + "/api/favorites-articles", this.requestOptions())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    // Get list of the newspapers you are suscribed to
    NewspaperService.prototype.getSuscribedNewspaper = function () {
        return this.http.get(this.BASE_URL + "/api/suscribed-newspapers", this.requestOptions())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewspaperService.prototype.suscribe = function (id) {
        return this.http.get(this.BASE_URL + "/api/suscribe/" + id, this.requestOptions())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewspaperService.prototype.getNewspaper = function (id) {
        return this.http.get(this.BASE_URL + "/api/newspaper/" + id, this.requestOptions())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewspaperService.prototype.unsuscribe = function (id) {
        return this.http.delete(this.BASE_URL + "/api/unsuscribe/" + id, this.requestOptions())
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    NewspaperService.prototype.saveArticle = function (myNew) {
        console.log(myNew);
        return this.http.post(this.BASE_URL + "/api/save", myNew, this.requestOptions())
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    NewspaperService.prototype.removeArticle = function (myNew, id) {
        return this.http.delete(this.BASE_URL + "/api/delete-article/" + id, this.requestOptions())
            .map(function (res) { return res; })
            .catch(this.handleError);
    };
    NewspaperService.prototype.requestOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': "JWT " + this.session.token });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    return NewspaperService;
}());
NewspaperService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__session_service__["a" /* SessionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__newsApi_service__["a" /* NewsApi */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__newsApi_service__["a" /* NewsApi */]) === "function" && _c || Object])
], NewspaperService);

var _a, _b, _c;
//# sourceMappingURL=newspaper.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SessionService = (function () {
    function SessionService(http, router) {
        this.http = http;
        this.router = router;
        this.BASE_URL = 'http://localhost:3000';
        this.user = {};
        this.token = '';
        this.isAuthenticated = false;
    }
    SessionService.prototype.handleError = function (e) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].throw(e.json().message);
    };
    SessionService.prototype.getUser = function () {
        var myObj = {
            username: localStorage.getItem("user")
        };
        this.user = myObj;
    };
    SessionService.prototype.canActivate = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        if (token) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': "JWT " + token });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return this.http.get(this.BASE_URL + "/ping", options)
                .map(function (data) {
                if (data) {
                    _this.isAuthenticated = true;
                    _this.token = token;
                    return true;
                }
                return false;
            })
                .catch(this.handleError);
        }
        else {
            this.logout();
            this.router.navigate(['/login']);
            return false;
        }
    };
    SessionService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(this.BASE_URL + "/login", user)
            .map(function (res) {
            var json = res.json();
            var token = json.token;
            var user = json.user;
            if (token) {
                _this.token = token;
                _this.user = {
                    username: user.username
                };
                _this.isAuthenticated = true;
                localStorage.setItem('token', _this.token);
                localStorage.setItem('user', user.username);
            }
            return _this.isAuthenticated;
        }).catch(this.handleError);
    };
    SessionService.prototype.signup = function (user) {
        return this.http.post(this.BASE_URL + "/signup", user)
            .map(function (res) {
        }).catch(this.handleError);
    };
    SessionService.prototype.logout = function () {
        this.token = '';
        this.user = {};
        this.isAuthenticated = false;
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SessionService);

var _a, _b;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map