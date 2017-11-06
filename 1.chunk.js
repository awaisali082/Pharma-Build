webpackJsonpac__name_([1],{

/***/ "./src/app/login/login.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var LoginService_1 = __webpack_require__("./src/app/services/LoginService.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var Login = (function () {
    function Login(_loginService, router) {
        this._loginService = _loginService;
        this.router = router;
    }
    Login.prototype.callLoginApi = function () {
        var _this = this;
        if (this.username == undefined && this.password == undefined) {
            alert("please fill empty fields");
        }
        else {
            this.AdminUserType = 1;
            if (this.username != undefined && this.password != "" && this.password.trim().length != 0) {
                this._loginService.login(this.username, this.password, this.AdminUserType).subscribe(function (response) {
                    console.log(response);
                    localStorage.setItem("UserType", response.data.UserType);
                    console.log(localStorage.getItem("UserType"));
                    jQuery("#snackbar").html(response.message);
                    _this.myFunction();
                    _this.router.navigate(["/app/dashboard"]);
                });
            }
            else {
                jQuery("#snackbar").html("Invalid Credenntials");
                this.myFunction();
            }
        }
    };
    Login.prototype.callChemistLoginApi = function () {
        var _this = this;
        if (this.Chemistusername == undefined && this.Chemistpassword == undefined) {
            alert("please fill empty fields");
        }
        else {
            this.ChemistUserType = 2;
            if (this.Chemistusername != undefined && this.Chemistpassword != "" && this.Chemistpassword.trim().length != 0) {
                this._loginService.ChemistloginService(this.Chemistusername, this.Chemistpassword, this.ChemistUserType).subscribe(function (response) {
                    console.log(response);
                    localStorage.setItem("UserType", response.data.UserType);
                    localStorage.setItem("ChemistId", response.data.ChemistId);
                    console.log(localStorage.getItem("UserType"));
                    jQuery("#snackbar").html(response.message);
                    _this.myFunction();
                    _this.router.navigate(["/app/dashboard"]);
                });
            }
            else {
                jQuery("#snackbar").html("Invalid Credenntials");
                this.myFunction();
            }
        }
    };
    Login.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    Login = __decorate([
        core_1.Component({
            selector: 'login',
            styles: [__webpack_require__("./src/app/login/login.style.scss")],
            template: __webpack_require__("./src/app/login/login.template.html"),
            providers: [LoginService_1.LoginService],
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'login-page app'
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof LoginService_1.LoginService !== 'undefined' && LoginService_1.LoginService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], Login);
    return Login;
    var _a, _b;
}());
exports.Login = Login;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/login/login.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
exports.routes = [
    { path: '', component: login_component_1.Login, pathMatch: 'full' }
];
var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule.routes = exports.routes;
    LoginModule = __decorate([
        core_1.NgModule({
            declarations: [
                login_component_1.Login
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LoginModule);
    return LoginModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LoginModule;


/***/ },

/***/ "./src/app/login/login.style.scss":
/***/ function(module, exports) {

module.exports = "/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n"

/***/ },

/***/ "./src/app/login/login.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar\"></div>\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n   \r\n        <h5 class=\"widget-login-logo animated fadeInUp\">\r\n          <i class=\"fa fa-circle text-gray\"></i>\r\n          sing\r\n          <i class=\"fa fa-circle text-warning\"></i>\r\n        </h5>\r\n        <section class=\"widget widget-login animated fadeInUp\">\r\n          <header>\r\n            <h3>AdminLogin</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n              Use Facebook, Twitter or your email to sign in.\r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n              Don't have an account? Sign up now!\r\n            </p>\r\n            <form class=\"login-form mt-lg\">\r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\" id=\"exampleInputEmail1\" placeholder=\"Enter Admin Username\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" id=\"pswd\" [(ngModel)]=\"password\" name=\"password\" type=\"text\" placeholder=\"Enter Admin Password\">\r\n              </div>\r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                  <a class=\"btn btn-inverse btn-sm\"  (click)=\"callLoginApi()\">Login</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-1\">\r\n                <div class=\"col-md-6 push-md-6\">\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"abc-checkbox widget-login-info pull-xs-right\">\r\n                      <input type=\"checkbox\" id=\"checkbox1\" value=\"1\">\r\n                      <label for=\"checkbox1\">Keep me signed in </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-6 pull-md-6\">\r\n                  <a class=\"mr-n-lg\" href=\"#\">Trouble with account?</a>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      \r\n      </div>\r\n      <div class=\"col-md-6\">\r\n\r\n         \r\n              <h5 class=\"widget-login-logo animated fadeInUp\">\r\n                <i class=\"fa fa-circle text-gray\"></i>\r\n                sing\r\n                <i class=\"fa fa-circle text-warning\"></i>\r\n              </h5>\r\n              <section class=\"widget widget-login animated fadeInUp\">\r\n                <header>\r\n                  <h3>Chemist Login</h3>\r\n                </header>\r\n                <div class=\"widget-body\">\r\n                  <p class=\"widget-login-info\">\r\n                    Use Facebook, Twitter or your email to sign in.\r\n                  </p>\r\n                  <p class=\"widget-login-info\">\r\n                    Don't have an account? Sign up now!\r\n                  </p>\r\n                  <form class=\"login-form mt-lg\">\r\n                    <div class=\"form-group\">\r\n                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"Chemistusername\" name=\"Chemistusername\" id=\"exampleInputEmail1\" placeholder=\" Enter Chemist Username\">\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                      <input class=\"form-control\" id=\"pswd\" [(ngModel)]=\"Chemistpassword\" name=\"Chemistpassword\" type=\"text\" placeholder=\"Enter Chemist  Password\">\r\n                    </div>\r\n                    <div class=\"clearfix\">\r\n                      <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                      <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                        <a class=\"btn btn-inverse btn-sm\"  (click)=\"callChemistLoginApi()\">Login</a>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"row m-t-1\">\r\n                      <div class=\"col-md-6 push-md-6\">\r\n                        <div class=\"clearfix\">\r\n                          <div class=\"abc-checkbox widget-login-info pull-xs-right\">\r\n                            <input type=\"checkbox\" id=\"checkbox1\" value=\"1\">\r\n                            <label for=\"checkbox1\">Keep me signed in </label>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n      \r\n                      <div class=\"col-md-6 pull-md-6\">\r\n                        <a class=\"mr-n-lg\" href=\"#\">Trouble with account?</a>\r\n                      </div>\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </section>\r\n           \r\n</div>\r\n      </div>\r\n  </main>\r\n  <footer class=\"page-footer\">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer>\r\n</div>\r\n"

/***/ },

/***/ "./src/app/services/LoginService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    LoginService.prototype.login = function (userName, password, AdminUserType) {
        var body = JSON.stringify({ UserName: userName, Password: password, UserType: AdminUserType });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "User/login", body, options)
            .map(function (res) { return res.json(); });
    };
    LoginService.prototype.ChemistloginService = function (Chemistusername, Chemistpassword, ChemistUserType) {
        var body = JSON.stringify({ UserName: Chemistusername, Password: Chemistpassword, UserType: ChemistUserType });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "User/login", body, options)
            .map(function (res) { return res.json(); });
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], LoginService);
    return LoginService;
    var _a;
}());
exports.LoginService = LoginService;


/***/ },

/***/ "./src/app/services/ServiceUrl.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var ServiceUrl = (function () {
    /*    public baseUrl:string = "http://localhost:5000/";*/
    /* public baseUrl: string = "http://104.199.49.55:3000/";*/
    function ServiceUrl() {
        this.baseUrl = "http://pharmaideo.azurewebsites.net/api/";
    }
    ServiceUrl.prototype.getUrl = function () {
        return this.baseUrl;
    };
    return ServiceUrl;
}());
exports.ServiceUrl = ServiceUrl;


/***/ }

});
//# sourceMappingURL=1.map