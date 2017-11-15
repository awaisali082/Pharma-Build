webpackJsonp([1],{1041:function(n,e){n.exports="/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n.btn {\n  width: 287px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n"},1079:function(n,e){n.exports='<div id="snackbar"></div>\r\n<div class="container">\r\n  <main id="content" class="widget-login-container" role="main">\r\n    <div class="row">\r\n      <div class="col-md-4">\r\n        </div>\r\n        <div class="col-md-4">\r\n        \r\n        <h5 class="widget-login-logo animated fadeInUp">\r\n          <i class="fa fa-circle text-gray"></i>\r\n          Pharma\r\n          <i class="fa fa-circle text-warning"></i>\r\n        </h5>\r\n        <section class="widget widget-login animated fadeInUp">\r\n          <header>\r\n            <h3>Login</h3>\r\n          </header>\r\n          <div class="widget-body">\r\n            <p class="widget-login-info">\r\n              Use Facebook, Twitter or your email to sign in.\r\n            </p>\r\n            <p class="widget-login-info">\r\n              Don\'t have an account? Sign up now!\r\n            </p>\r\n            <form class="login-form mt-lg">\r\n              <div class="form-group">\r\n                <input type="text" class="form-control" [(ngModel)]="username" name="username" id="exampleInputEmail1" placeholder="Enter Admin Username">\r\n              </div>\r\n              <div class="form-group">\r\n                <input class="form-control" id="pswd" [(ngModel)]="password" name="password" type="password" placeholder="Enter Admin Password">\r\n              </div>\r\n              <div class="clearfix">\r\n                <div class="btn-toolbar pull-xs-right m-t-1">\r\n                <!--   <button type="button" class="btn btn-secondary btn-sm">Create an Account</button> -->\r\n                  <a class="btn btn-inverse btn-sm"  (click)="callLoginApi()">Login</a>\r\n                </div>\r\n              </div>\r\n              <div class="row m-t-1">\r\n                <div class="col-md-6 push-md-6">\r\n                  <div class="clearfix">\r\n                    <div class="abc-checkbox widget-login-info pull-xs-right">\r\n                      <input type="checkbox" id="checkbox1" value="1">\r\n                      <label for="checkbox1">Keep me signed in </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                \r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      \r\n      </div>\r\n  \r\n      </div>\r\n  </main>\r\n \r\n</div>\r\n'},684:function(n,e,t){"use strict";var i=t(74),o=t(155),r=t(0),s=t(107),a=t(982);e.routes=[{path:"",component:a.Login,pathMatch:"full"}];var l=function(){function LoginModule(){}return LoginModule.routes=e.routes,LoginModule=__decorate([r.NgModule({declarations:[a.Login],imports:[i.CommonModule,o.FormsModule,s.RouterModule.forChild(e.routes)]}),__metadata("design:paramtypes",[])],LoginModule)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=l},686:function(n,e){"use strict";var t=function(){function ServiceUrl(){this.baseUrl="http://pharmaideo.azurewebsites.net/api/"}return ServiceUrl.prototype.getUrl=function(){return this.baseUrl},ServiceUrl}();e.ServiceUrl=t},982:function(n,e,t){"use strict";(function(n){var i=t(0),o=t(996),r=t(107),s=function(){function Login(n,e){this._loginService=n,this.router=e}return Login.prototype.callLoginApi=function(){var e=this;void 0==this.username&&void 0==this.password?alert("please fill empty fields"):void 0!=this.username&&""!=this.password&&0!=this.password.trim().length?this._loginService.login(this.username,this.password).subscribe(function(t){console.log(t),localStorage.setItem("UserType",t.data.UserRole),console.log(localStorage.getItem("UserType")),n("#snackbar").html(t.message),e.myFunction(),e.router.navigate(["/app/dashboard"])}):(n("#snackbar").html("Invalid Credenntials"),this.myFunction())},Login.prototype.callChemistLoginApi=function(){var e=this;void 0==this.Chemistusername&&void 0==this.Chemistpassword?alert("please fill empty fields"):(this.ChemistUserType=2,void 0!=this.Chemistusername&&""!=this.Chemistpassword&&0!=this.Chemistpassword.trim().length?this._loginService.ChemistloginService(this.Chemistusername,this.Chemistpassword).subscribe(function(t){console.log(t),localStorage.setItem("UserType",t.data.UserType),console.log(localStorage.getItem("UserType")),n("#snackbar").html(t.message),e.myFunction(),e.router.navigate(["/app/dashboard"])}):(n("#snackbar").html("Invalid Credenntials"),this.myFunction()))},Login.prototype.myFunction=function(){var n=document.getElementById("snackbar");n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},Login=__decorate([i.Component({selector:"login",styles:[t(1041)],template:t(1079),providers:[o.LoginService],encapsulation:i.ViewEncapsulation.None,host:{"class":"login-page app"}}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.LoginService&&o.LoginService)&&e||Object,"function"==typeof(s="undefined"!=typeof r.Router&&r.Router)&&s||Object])],Login);var e,s}();e.Login=s}).call(e,t(35))},996:function(n,e,t){"use strict";var i=t(0),o=t(156);t(242);var r=t(686),s=function(){function LoginService(n){this.http=n,this.urlService=new r.ServiceUrl}return LoginService.prototype.login=function(n,e){var t=JSON.stringify({UserName:n,Password:e}),i=new o.Headers({"Content-Type":"application/json"}),r=new o.RequestOptions({method:"post",headers:i});return this.http.post(this.urlService.baseUrl+"User/login",t,r).map(function(n){return n.json()})},LoginService.prototype.ChemistloginService=function(n,e){var t=JSON.stringify({UserName:n,Password:e}),i=new o.Headers({"Content-Type":"application/json"}),r=new o.RequestOptions({method:"post",headers:i});return this.http.post(this.urlService.baseUrl+"User/login",t,r).map(function(n){return n.json()})},LoginService=__decorate([i.Injectable(),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof o.Http&&o.Http)&&n||Object])],LoginService);var n}();e.LoginService=s}});