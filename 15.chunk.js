webpackJsonpac__name_([15],{

/***/ "./src/app/Medicine/Medicine.component.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(jQuery) {"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var AddMedicineService_1 = __webpack_require__("./src/app/services/AddMedicineService.ts");
var AdddosageService_1 = __webpack_require__("./src/app/services/AdddosageService.ts");
var MedicineModel_1 = __webpack_require__("./src/app/models/MedicineModel.ts");
var PricePerQuantityModel_1 = __webpack_require__("./src/app/models/PricePerQuantityModel.ts");
var MedicineComponent = (function () {
    function MedicineComponent(_addMedicineService, router, _addDosageService) {
        var _this = this;
        this._addMedicineService = _addMedicineService;
        this._addDosageService = _addDosageService;
        this.MedicineModelSingle = [];
        this.PricePerQuantityModelSingle = [];
        this.DosageSizesAndValueModelArray1 = [];
        this.DosageSizesAndValueModelArray = [];
        this.categoryModelArray = [];
        this.subCategoryModel = [];
        this.tempObj1 = [];
        this.tempObj = [];
        this.SelectedMeasurementModel = [];
        this.router = router;
        this.ChemistId = localStorage.getItem("GetChemistId");
        this._addMedicineService.getAllCategoryValues(this.ChemistId).subscribe(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].ParentId == 0) {
                    _this.categoryModelArray.push(response.data[i]);
                }
            }
        });
        console.log(this.categoryModelArray);
        this._addMedicineService.getAllMeasurementValues().subscribe(function (response) {
            _this.MeasurementModelArray = response.data;
        });
        this._addMedicineService.getAllDosageValues().subscribe(function (response) {
            _this.DosageModel = response.data;
        });
    }
    MedicineComponent.prototype.addsubCategory = function (name) {
        this.SubCategoryId = name;
        console.log(this.SubCategoryId);
        this.ChemistId = localStorage.getItem("GetChemistId");
    };
    MedicineComponent.prototype.getDosageSizesAndValues = function (DosageId) {
        var _this = this;
        console.log(DosageId);
        this.DosageId = DosageId;
        this._addDosageService.getDosageValue(this.DosageId).subscribe(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].DosageAndSizes.Id == _this.DosageId) {
                    var dosageObject = {
                        Id: response.data[i].Id,
                        Value: response.data[i].Value
                    };
                    _this.DosageSizesAndValueModelArray.push(dosageObject);
                }
            }
        });
    };
    MedicineComponent.prototype.populatePricePerQuantity = function () {
        this.SinglePricePerQuantityModel = new PricePerQuantityModel_1.PricePerQuantityModel();
        this.SinglePricePerQuantityModel.Price = this.ProductPrice;
        this.SinglePricePerQuantityModel.Quantity = this.ProductQuantity;
        this.SinglePricePerQuantityModel.MeasurementId = this.SelectMeasurementName;
        this.SinglePricePerQuantityModel.DosageAndSizesValuesId = this.DosageSizesValuesId;
        this.PricePerQuantityModelSingle.push(this.SinglePricePerQuantityModel);
        this.ProductPrice = undefined;
        this.ProductQuantity = undefined;
        this.SelectMeasurement = undefined;
        this.DosageSizesValuesId = undefined;
        jQuery("#snackbar1").html("Measurement Add Successfully");
        this.myFunction();
    };
    MedicineComponent.prototype.addMedicine = function () {
        var _this = this;
        this.SingleMedicineModel = new MedicineModel_1.MedicineModel();
        this.SingleMedicineModel.ChemistId = localStorage.getItem("GetChemistId");
        ;
        this.SingleMedicineModel.Quantity = this.ProductQuantity;
        this.SingleMedicineModel.Price = this.ProductPrice;
        this.SingleMedicineModel.DosageSizeAndValues = this.DosageId;
        this.SingleMedicineModel.SubCategoryId = this.SubCategoryId;
        this.SingleMedicineModel.MedicineName = this.MedicineName;
        this.SingleMedicineModel.ManufacturedBy = this.ManufacturedBy;
        this.SingleMedicineModel.MeasurementModel = this.SelectedMeasurementModel;
        this.SingleMedicineModel.Url = this.Image_URL;
        this.MedicineModelSingle.push(this.SingleMedicineModel);
        this._addMedicineService.AddMedicineAndDosageService(this.SingleMedicineModel, this.PricePerQuantityModelSingle).subscribe(function (response) {
            console.log(response);
            jQuery("#snackbar1").html(response.message);
            _this.myFunction();
        });
    };
    MedicineComponent.prototype.getDosageSizesAndValuesId = function (DosageSizesValuesId) {
        var obj = this.DosageModel.find(function (x) { return x.Id = DosageSizesValuesId; });
        console.log(obj);
        this.DosageUnitName = obj.UnitName;
        this.DosageSizesValuesId = DosageSizesValuesId;
    };
    MedicineComponent.prototype.getMedicineCategoryId = function (CategoryId) {
        var _this = this;
        this.CategoryId = CategoryId;
        console.log(this.CategoryId);
        this.ChemistId = localStorage.getItem("GetChemistId");
        this._addMedicineService.getSubcategoryByCategoryID(this.ChemistId, this.CategoryId).subscribe(function (response) {
            console.log(response);
            for (var i = 0; i < response.data.length; i++) {
                if (response.data[i].ParentId == _this.CategoryId) {
                    console.log(response.data[i]);
                    _this.subCategoryModel.push(response.data[i]);
                }
            }
        });
    };
    MedicineComponent.prototype.SelectMedicineMeasurement = function (MedicineMeasurementName) {
        //console.log(this.SelectMeasurementName);
        this.SelectMeasurementName = MedicineMeasurementName;
    };
    MedicineComponent.prototype.addMeasurementName = function (MeasurementName) {
        this.MeasurementName = MeasurementName;
        this.SelectedMeasurementModel.push(this.MeasurementName);
        /* this.tempObj.push(this.MeasurementModelArray.find(x => x.Id ==  this.MeasurementName));
        console.log(this.tempObj);
        */
    };
    MedicineComponent.prototype.SelectMeasurement = function () {
        //this.SelectedMeasurementModel.push(this.SelectMeasurementName);
        //this.tempObj.push(this.MeasurementModelArray.find(x => x.Id ==  this.MeasurementName));
        console.log('SelectMeasurement this.tempObj: ', this.SelectedMeasurementModel, typeof this.tempObj);
        jQuery("#snackbar1").html("Add Meassurement Successfully");
        this.myFunction();
        /*    this.tempObj1.push(this.tempObj); */
    };
    MedicineComponent.prototype.RemoveMeasurementValue = function (MeasurementName) {
        console.log(MeasurementName);
        var index = this.SelectedMeasurementModel.findIndex(function (x) { return x.Id == MeasurementName; });
        this.SelectedMeasurementModel.splice(index, 1);
    };
    MedicineComponent.prototype.myFunction = function () {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar1");
        // Add the "show" class to DIV
        x.className = "show";
        // After 3 seconds, remove the show class from DIV
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    };
    MedicineComponent.prototype.changeimage = function (elem) {
        this.readURL(elem);
    };
    MedicineComponent.prototype.readURL = function (input) {
        HTMLElement;
        input = document.getElementById('imgInp');
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            var self = this;
            reader.onload = function (e) {
                jQuery('#blah').attr('src', e.target.result);
                var file = input.files[0];
                self._addMedicineService.AddImage(file).subscribe(function (response) {
                    console.log(response);
                    self.SingleMedicineModel = response.data;
                    self.Image_URL = self.SingleMedicineModel;
                });
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    MedicineComponent = __decorate([
        core_1.Component({
            selector: 'Medicine',
            providers: [AddMedicineService_1.AddMedicineService, AdddosageService_1.AddDosageService],
            styles: [__webpack_require__("./src/app/Medicine/Medicine.style.scss")],
            template: __webpack_require__("./src/app/Medicine/Medicine.template.html"),
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                class: 'dosage-page app'
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof AddMedicineService_1.AddMedicineService !== 'undefined' && AddMedicineService_1.AddMedicineService) === 'function' && _a) || Object, (typeof (_b = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _b) || Object, (typeof (_c = typeof AdddosageService_1.AddDosageService !== 'undefined' && AdddosageService_1.AddDosageService) === 'function' && _c) || Object])
    ], MedicineComponent);
    return MedicineComponent;
    var _a, _b, _c;
}());
exports.MedicineComponent = MedicineComponent;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/jquery/dist/jquery.js")))

/***/ },

/***/ "./src/app/Medicine/Medicine.module.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var common_1 = __webpack_require__("./node_modules/@angular/common/index.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/index.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/index.js");
var Medicine_component_1 = __webpack_require__("./src/app/Medicine/Medicine.component.ts");
exports.routes = [
    { path: '', component: Medicine_component_1.MedicineComponent, pathMatch: 'full' }
];
var MedicineModule = (function () {
    function MedicineModule() {
    }
    MedicineModule.routes = exports.routes;
    MedicineModule = __decorate([
        core_1.NgModule({
            declarations: [
                Medicine_component_1.MedicineComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MedicineModule);
    return MedicineModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MedicineModule;


/***/ },

/***/ "./src/app/Medicine/Medicine.style.scss":
/***/ function(module, exports) {

module.exports = ".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#MedicineCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 29px;\n  margin-bottom: 14px; }\n\n.AddMeasurement {\n  position: relative;\n  color: white;\n  text-align: center;\n  background-color: grey;\n  float: left; }\n\n#AddMeasurement button {\n  background: none;\n  border: 1px solid #ccc;\n  padding: 8px;\n  font-weight: bold;\n  width: auto;\n  display: inline-block;\n  margin-right: 10px;\n  margin-top: 10px; }\n\n.addbtn:hover {\n  color: #1ec26b !important; }\n\n#MedicineDosage {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 37px; }\n\n#dosageValue {\n  margin-bottom: 12px;\n  border: 1px solid black;\n  padding-top: 12px;\n  padding-bottom: 12px; }\n\n#SelectDosageValue {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 126px;\n  margin-left: 2px; }\n\n.addMeasurementbtn {\n  text-align: center; }\n\n#MedicineMeasurement {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 158px;\n  margin-left: 11px;\n  margin-top: -5px; }\n\n.addbtnMeasurement {\n  background-color: white;\n  width: 124px !important;\n  height: 30px;\n  margin-left: 22px; }\n\n#MedicineSubCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 167px;\n  margin-left: 25px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn {\n  color: white !important;\n  width: 235px;\n  background-color: #1ec26b !important;\n  border: 0 !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n#SelectMeasurement {\n  display: inline-flex;\n  margin-bottom: 3px; }\n\n#SelectDosage {\n  display: inline-block; }\n\n#SelectCategory {\n  display: inline-flex; }\n\n#SelectSubCategory {\n  display: inline-flex; }\n\n.AddMedicine {\n  max-width: 600px;\n  min-width: 300px;\n  margin: 0 auto; }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"

/***/ },

/***/ "./src/app/Medicine/Medicine.template.html":
/***/ function(module, exports) {

module.exports = "<div id=\"snackbar1\"></div>\r\n\r\n<div class=\"container\">\r\n  <main id=\"content\" class=\"widget-login-container\" role=\"main\">\r\n    <div class=\"row\">\r\n  \r\n        <h5 class=\"widget-login-logo animated  fadeInUp\">\r\n        <!--   <i class=\"fa fa-circle text-gray\"></i>\r\n        \r\n          <i class=\"fa fa-circle text-warning\"></i> -->\r\n        </h5>\r\n        <section class=\"widget widget-login AddMedicine animated fadeInUp\">\r\n          <header>\r\n            <h3 style=\"text-transform:uppercase;color:#1ec26b\">ADD Medicine</h3>\r\n          </header>\r\n          <div class=\"widget-body\">\r\n            <p class=\"widget-login-info\">\r\n             \r\n            </p>\r\n            <p class=\"widget-login-info\">\r\n           \r\n            </p>\r\n            \r\n            <form class=\"login-form mt-lg\">\r\n             \r\n              <div class=\"form-group\">\r\n                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"MedicineName\" name=\"MedicineName\" id=\"exampleInputEmail1\" placeholder=\"Enter Medicine Name\">\r\n              </div>\r\n              <div class=\"manufacturedBy\">\r\n                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ManufacturedBy\" name=\"ManufacturedBy\" id=\"exampleInputEmail1\" placeholder=\"Enter Manufacturer Name\">\r\n              </div>\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                \r\n              <div class=\"form-group\" id=\"SelectCategory\">\r\n\r\n                <label style=\"font-size: 12px;\">Select Category</label>\r\n\r\n                <select id=\"MedicineCategory\"(change)=\"getMedicineCategoryId($event.target.value)\">\r\n                    <option disabled selected value> -- select an option -- </option>\r\n                \r\n                <option *ngFor=\"let Medicine of categoryModelArray\" value=\"{{Medicine.Id}}\">{{Medicine.CategoryName}}</option>\r\n                </select>   \r\n               \r\n              </div>\r\n              <div class=\"form-group\" id=\"SelectMeasurement\">\r\n                \r\n                                <label style=\"font-size: 12px;\">Select Measurement</label>\r\n              <select id=\"MedicineMeasurement\" (change)=\"addMeasurementName($event.target.value)\">\r\n                  <option disabled selected value> -- select an option -- </option>\r\n               <option *ngFor=\"let Medicine of MeasurementModelArray\" value=\"{{Medicine.Id}}\">{{Medicine.MeasurementName}}</option>\r\n                               \r\n              </select>     \r\n                                \r\n                                     \r\n                                       \r\n          </div>\r\n                                \r\n        </div>\r\n          <div class=\"col-md-6\">\r\n           <div class=\"form-group\" id=\"SelectSubCategory\" >\r\n                                  \r\n           <label style=\"font-size: 12px;margin-left: -2px;\">Select Sub Category</label>\r\n             <select id=\"MedicineSubCategory\" (change)=\"addsubCategory($event.target.value)\" >\r\n                <option disabled selected value> -- select an option -- </option>\r\n             <option *ngFor=\"let Medicine of subCategoryModel\" value=\"{{Medicine.Id}}\">{{Medicine.CategoryName}}</option>\r\n                                                      \r\n             </select>   \r\n                                                 \r\n             </div> \r\n            <a class=\"btn addbtn btn-inverse btn-sm\" (click)=\"SelectMeasurement()\">Add Measurement</a>\r\n            </div>\r\n            </div>\r\n               <div class=\"row\">\r\n                  <div class=\"col-md-6\" >               \r\n                     \r\n                                  </div>\r\n                                  </div>\r\n              <div class=\"row\">\r\n                                \r\n               <div class=\"col-md-12\" id=\"dosageValue\">\r\n                  <div class=\"form-group\" id=\"SelectDosage\">\r\n                      \r\n                   <label style=\"font-size: 12px;\">SelectDosage</label>\r\n                         <select id=\"MedicineDosage\"(change)=\"getDosageSizesAndValues($event.target.value)\">\r\n                            <option disabled selected value> -- select an option -- </option>\r\n      <option *ngFor=\"let Dosage of DosageModel\" value=\"{{Dosage.Id}}\">{{Dosage.UnitName}}</option>\r\n                                     \r\n                                      </select>   \r\n                                      <label style=\"font-size: 12px;margin-left: 34px;\">Select Dosage Value</label>\r\n                                      <select id=\"SelectDosageValue\" (change)=\"getDosageSizesAndValuesId($event.target.value)\">\r\n                                          <option disabled selected value> -- select an option -- </option>\r\n                                      <option *ngFor=\"let Dosage of DosageSizesAndValueModelArray\" value=\"{{Dosage.Id}}\">{{Dosage.Value}}</option>\r\n                                      </select>\r\n                                    </div> \r\n                                \r\n               \r\n                \r\n                \r\n\r\n                <div class=\"form-group\" id=\"SelectMeasurement\">\r\n                    <label style=\"font-size: 12px;\">Select Measurement</label>\r\n                    <select id=\"MedicineMeasurement\" (change)=\"SelectMedicineMeasurement($event.target.value)\">\r\n                        <option disabled selected value> -- select an option -- </option>\r\n                    <option *ngFor=\"let Medicine of MeasurementModelArray\" value=\"{{Medicine.Id}}\">{{Medicine.MeasurementName}}</option>\r\n                    </select>   \r\n                    </div>      \r\n                              \r\n                                       \r\n                                               \r\n                                \r\n              \r\n                               <div class=\"form-group\">\r\n                               <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ProductQuantity\" name=\"ProductQuantity\" id=\"exampleInputEmail1\" placeholder=\"Enter Product Quantity\">\r\n                               </div>\r\n                               <div class=\"form-group\">\r\n                                 <input type=\"text\" class=\"form-control\" [(ngModel)]=\"ProductPrice\" name=\"ProductPrice\" id=\"exampleInputEmail1\" placeholder=\"Enter Product Price\">\r\n                               </div>\r\n                 <div class=\"addMeasurementbtn\">             \r\n                               \r\n            <a class=\"btn addbtn btn-inverse btn-sm\" (click)=\"populatePricePerQuantity()\">Add Measurements</a>\r\n </div>\r\n              </div>\r\n              </div>\r\n              \r\n               \r\n             \r\n               \r\n              <table class=\"table table-hover\">\r\n                  \r\n                      <tr>\r\n                          <td>Dosage Value/Size</td>\r\n                          <td>Measurement Id</td>\r\n                          <td>Product Quantity</td>\r\n                          <td>Product Price</td>\r\n                      </tr>\r\n                     \r\n                    <tr  *ngFor=\"let row of PricePerQuantityModelSingle\">\r\n                        <td>{{row.DosageAndSizesValuesId}}</td>\r\n                        <td>{{row.MeasurementId}}</td>\r\n                        <td>{{row.Quantity}}</td>\r\n                        <td>{{row.Price}}</td>\r\n\r\n                    </tr>\r\n                  \r\n                     \r\n                  \r\n                  \r\n              </table> \r\n              <form id=\"form1\" runat=\"server\">\r\n                <input type='file'(change)=\"changeimage(event)\" id=\"imgInp\" />\r\n                <img  style=\"width:50%; height:50%\" id=\"blah\"  src=\"#\" alt=\"your image\" />\r\n          \r\n              </form>\r\n              <div class=\"clearfix\">\r\n                  <div class=\"btn-toolbar pull-xs-right m-t-1\">\r\n                  <!--   <button type=\"button\" class=\"btn btn-secondary btn-sm\">Create an Account</button> -->\r\n                    <a class=\"btn addbtn btn-inverse btn-sm\" (click)=\"addMedicine()\">Add</a>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n              \r\n               </form>\r\n              </div>\r\n             </section>\r\n     \r\n        </div>\r\n  </main>\r\n      </div>\r\n    \r\n  \r\n  \r\n\r\n"

/***/ },

/***/ "./src/app/models/MedicineModel.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var MedicineModel = (function () {
    function MedicineModel() {
    }
    return MedicineModel;
}());
exports.MedicineModel = MedicineModel;


/***/ },

/***/ "./src/app/models/PricePerQuantityModel.ts":
/***/ function(module, exports) {

"use strict";
"use strict";
var PricePerQuantityModel = (function () {
    function PricePerQuantityModel() {
    }
    return PricePerQuantityModel;
}());
exports.PricePerQuantityModel = PricePerQuantityModel;


/***/ },

/***/ "./src/app/services/AddMedicineService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var AddMedicineService = (function () {
    function AddMedicineService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    AddMedicineService.prototype.getAllCategoryValues = function (categoryId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getCategoriesByChemistId?chemistId=" + categoryId, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.getAllSubCategoryValues = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllCategoriesAndSubCategories", options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.getAllDosageValues = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllChemistUnits", options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.getSubcategoryByCategoryID = function (chemistId, categoryId) {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getSubCategoriesByChemistIdByCategoryId?chemistId=" + chemistId + "&categoryId=" + categoryId, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.getAllMeasurementValues = function () {
        var body = JSON.stringify({});
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllChemistMeasurements", options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.AddMedicineAndDosageService = function (SingleMedicineModel, PricePerQuantityModel) {
        var body = JSON.stringify({ PictureURL: SingleMedicineModel.Url, ChemistId: SingleMedicineModel.ChemistId, ManufacturedBy: SingleMedicineModel.ManufacturedBy, DosageSizeAndValues: SingleMedicineModel.DosageSizeAndValues, Name: SingleMedicineModel.MedicineName, MeasurementIds: SingleMedicineModel.MeasurementModel, SubCategoryId: SingleMedicineModel.SubCategoryId, AddProductDaosageAndSizeMappingDTO: PricePerQuantityModel });
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Chemist/addProduct", body, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService.prototype.AddImage = function (file) {
        var formData = new FormData();
        formData.append("file", file, file.name);
        var options = new http_1.RequestOptions({ method: 'post' });
        return this.http.post(this.urlService.baseUrl + "product/uploadProductImage", formData, options)
            .map(function (res) { return res.json(); });
    };
    AddMedicineService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AddMedicineService);
    return AddMedicineService;
    var _a;
}());
exports.AddMedicineService = AddMedicineService;


/***/ },

/***/ "./src/app/services/AdddosageService.ts":
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__("./node_modules/@angular/core/index.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/index.js");
__webpack_require__("./node_modules/rxjs/add/operator/map.js");
var ServiceUrl_1 = __webpack_require__("./src/app/services/ServiceUrl.ts");
var AddDosageService = (function () {
    function AddDosageService(http) {
        this.http = http;
        this.urlService = new ServiceUrl_1.ServiceUrl();
    }
    AddDosageService.prototype.getDosageValue = function (DosageId) {
        var body = JSON.stringify({ Id: DosageId });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllUnitValues", options)
            .map(function (res) { return res.json(); });
    };
    AddDosageService.prototype.addunit = function (unitname, unitvalue) {
        var body = JSON.stringify({ UnitName: unitname, UnitSymbol: unitvalue });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Chemist/addUnit", body, options)
            .map(function (res) { return res.json(); });
    };
    AddDosageService.prototype.getAllUnitValues = function () {
        var body = JSON.stringify({});
        console.log(body);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'get', headers: headers });
        return this.http.get(this.urlService.baseUrl + "Chemist/getAllChemistUnits", options)
            .map(function (res) { return res.json(); });
    };
    AddDosageService.prototype.addUnitValues = function (unitId, dosagevalue) {
        var body = JSON.stringify({ DosageAndSizesId: unitId, Value: dosagevalue });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ method: 'post', headers: headers });
        return this.http.post(this.urlService.baseUrl + "Chemist/addUnitValue", body, options)
            .map(function (res) { return res.json(); });
    };
    AddDosageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AddDosageService);
    return AddDosageService;
    var _a;
}());
exports.AddDosageService = AddDosageService;


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
//# sourceMappingURL=15.map