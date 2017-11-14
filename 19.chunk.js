webpackJsonpac__name_([19],{

/***/ "./src/app/AddChemist/AddChemist.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var AddchemistService_1 = __webpack_require__("./src/app/services/AddchemistService.ts");
var jQuery = __webpack_require__("./node_modules/jquery/dist/jquery.js");
var AddChemistComponent = (function () {
    function AddChemistComponent(_addChemistServiceService, router) {
        this._addChemistServiceService = _addChemistServiceService;
        this.router = router;
    }
    /* ngOnInit(): void {
      jQuery('#somecomponent').locationpicker({
        location: {
            latitude: 46.15242437752303,
            longitude: 2.7470703125
        },
        radius: 300,
        inputBinding: {
            latitudeInput: jQuery('#us7-lat'),
            longitudeInput: jQuery('#us7-lon'),
            radiusInput: jQuery('#us7-radius'),
            locationNameInput: jQuery('#us7-address')
        },
        enableAutocomplete: true,
        autocompleteOptions: {
            types: ['(cities)'],
            componentRestrictions: {country: 'fr'}
        }
    });
    } */
    AddChemistComponent.prototype.ngOnInit = function () {
        setTimeout(function () {
            jQuery('#somecomponent').locationpicker({
                location: {
                    latitude: 46.15242437752303,
                    longitude: 2.7470703125
                },
                radius: 300,
                inputBinding: {
                    latitudeInput: jQuery('#us2-lat'),
                    longitudeInput: jQuery('#us2-lon'),
                    radiusInput: jQuery('#us2-radius'),
                    locationNameInput: jQuery('#us2-address')
                },
                enableAutocomplete: true
            });
        }, 3000);
    };
    AddChemistComponent.prototype.addChemist = function () {
        var _this = this;
        if (!this.ChemistEmail || !this.ChemistName || !this.ChemistPassword || !this.Longitude || !this.Latitude) {
            //alert("empty");
            jQuery("#snackbar1").html("Please enter Empty field");
            this.myFunction();
        }
        else {
            this.RegularExpression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (this.RegularExpression.test(this.ChemistEmail)) {
                this.ChemistId = localStorage.getItem("UserType");
                console.log(this.ChemistId);
                this._addChemistServiceService.AddChemist(this.ChemistEmail, this.ChemistName, this.ChemistPassword, this.Longitude, this.Latitude, this.ChemistId).subscribe(function (response) {
                    console.log(response.data);
                    jQuery("#snackbar1").html("Add Chemist Successfully");
                    _this.myFunction();
                });
            }
            else {
                jQuery("#snackbar1").html("Email is not Valid");
                this.myFunction();
            }
        }
    };
    AddChemistComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar1");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    AddChemistComponent = __decorate([
        core_1.Component({
            selector: 'AddChemist',
            providers: [AddchemistService_1.AddchemistService],
            styles: [__webpack_require__("./src/app/AddChemist/AddChemist.style.scss")],
            template: __webpack_require__("./src/app/AddChemist/AddChemist.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'chemist-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof AddchemistService_1.AddchemistService !== 'undefined' && AddchemistService_1.AddchemistService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object])
    ], AddChemistComponent);
    return AddChemistComponent;
    var _a, _b;
}());
exports.AddChemistComponent = AddChemistComponent;


/***/ },

/***/ "./src/app/AddChemist/AddChemist.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var AddChemist_component_1 = __webpack_require__("./src/app/AddChemist/AddChemist.component.ts");
__webpack_require__("./node_modules/jquery-locationpicker/src/locationpicker.jquery.js");
exports.routes = [
    { path: '', component: AddChemist_component_1.AddChemistComponent, pathMatch: 'full' }
];
var AddChemistModule = (function () {
    function AddChemistModule() {
    }
    AddChemistModule.routes = exports.routes;
    AddChemistModule = __decorate([
        core_1.NgModule({
            declarations: [
                AddChemist_component_1.AddChemistComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AddChemistModule);
    return AddChemistModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddChemistModule;


/***/ },

/***/ "./src/app/AddChemist/AddChemist.style.scss":
/***/ function(module, exports) {

module.exports = ".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#us7-lat {\n  width: 237px; }\n\n#us7-lon {\n  width: 237px; }\n\n#us7-radius {\n  width: 260px; }\n\n#us7-address {\n  width: 260px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\nagm-map {\n  height: 300px; }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ },

/***/ "./src/app/AddChemist/AddChemist.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar1\"></div>\r\n<div class=\"row\">\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-3 col-md-5\">\r\n        <h5 class=\"widget-login-logo animated  fadeInUp\">\r\n          <i class=\"fa fa-circle text-gray\"></i>\r\n         Pharmacy\r\n          <i class=\"fa fa-circle text-warning\"></i>\r\n        </h5>\r\n        <section class=\"widget widget-login  AddSize animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"font-size:36px;font-weight:900\">ADD Chemist</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n             \r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n           \r\n            </p>\r\n            \r\n            <form class=\"login-form mt-lg\">\r\n              <div class=\"form-group\">\r\n              <input class=\"form-control\" id=\"pswd\"  required [(ngModel)]=\"ChemistEmail\" name=\"ChemistEmail\" type=\"email\" placeholder=\"Enter Email\">\r\n            </div>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" id=\"pswd\" [(ngModel)]=\"ChemistName\"  name=\"ChemistName\" type=\"text\" placeholder=\"Enter UserName\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                  <input class=\"form-control\" id=\"pswd\" [(ngModel)]=\"ChemistPassword\"  required=\"required\" name=\"ChemistPassword\" type=\"password\" placeholder=\"Enter Password\">\r\n                </div>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\" id=\"us7-lat\" [(ngModel)]=\"Latitude\" name=\"Latitude\" type=\"text\" placeholder=\"Enter Latitude \">\r\n              </div>\r\n            <div class=\"form-group\">\r\n              <input class=\"form-control\" id=\"us7-lon\" [(ngModel)]=\"Longitude\" name=\"Longitude\" type=\"text\" placeholder=\"Enter Longitude\">\r\n            </div>\r\n \r\n              <div class=\"clearfix\">\r\n                <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                  <a class=\"btn addbtn btn-inverse btn-sm\" (click)=\"addChemist()\">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class=\"row m-t-1\">\r\n                <div class=\"col-md-6 push-md-6\">\r\n                  <div class=\"clearfix\">\r\n                   <!--  <div class=\"abc-checkbox widget-login-info pull-xs-right\">\r\n                      <input type=\"checkbox\" id=\"checkbox1\" value=\"1\">\r\n                      <label for=\"checkbox1\">Keep me signed in </label>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n               <!--  <div class=\"col-md-6 pull-md-6\">\r\n                  <a class=\"mr-n-lg\" href=\"#\">Trouble with account?</a>\r\n                </div> -->\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n\r\n      <div class=\"col-xs-3 col-md-5\">\r\n          <input class=\"form-control\" id=\"us7-radius\"  name=\"Radius\" type=\"number\" placeholder=\"Enter Radius\">\r\n          <input class=\"form-control\" id=\"us7-address\"  name=\"Address\" type=\"text\" placeholder=\"Enter Address\">\r\n          <div id=\"somecomponent\" style=\"width: 500px; height: 400px;\">\r\n          \r\n          </div>\r\n     \r\n        </div>\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n      \r\n    </div>\r\n  </main>\r\n <!--  <footer class=\"page-footer\">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer> -->\r\n</div>\r\n\r\n</div>\r\n"

/***/ },

/***/ "./src/app/services/AddchemistService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var AddchemistService = (function () {
    function AddchemistService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    AddchemistService.prototype.AddChemist = function (ChemistEmail, ChemistName, ChemistPassword, Longitude, latitide, ChemistId) {
        var body = JSON.stringify({ Email: ChemistEmail, Password: ChemistPassword, ChemistName: ChemistName, Longitude: Longitude, Latitude: latitide, ChemistId: ChemistId });
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "User/addChemistDetail", body, options)
            .map(function (res) { return res.json(); });
    };
    AddchemistService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AddchemistService);
    return AddchemistService;
    var _a;
}());
exports.AddchemistService = AddchemistService;


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
//# sourceMappingURL=19.map