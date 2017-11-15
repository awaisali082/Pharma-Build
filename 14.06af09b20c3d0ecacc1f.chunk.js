webpackJsonp([14],{1024:function(e,n){e.exports=".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#MedicineCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 29px;\n  margin-bottom: 14px; }\n\n.AddMeasurement {\n  position: relative;\n  color: white;\n  text-align: center;\n  background-color: grey;\n  float: left; }\n\n#AddMeasurement button {\n  background: none;\n  border: 1px solid #ccc;\n  padding: 8px;\n  font-weight: bold;\n  width: auto;\n  display: inline-block;\n  margin-right: 10px;\n  margin-top: 10px; }\n\n.addbtn:hover {\n  color: white !important; }\n\n#MedicineDosage {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 37px; }\n\n#dosageValue {\n  margin-bottom: 12px;\n  border: 1px solid black;\n  padding-top: 12px;\n  padding-bottom: 12px; }\n\n#SelectDosageValue {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 126px;\n  margin-left: 2px; }\n\n#MedicineMeasurement {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 158px;\n  margin-left: 11px;\n  margin-top: -5px; }\n\n.addbtnMeasurement {\n  background-color: white;\n  width: 124px !important;\n  height: 30px;\n  margin-left: 22px; }\n\n#MedicineSubCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 167px;\n  margin-left: 25px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n#SelectMeasurement {\n  display: inline-flex;\n  margin-bottom: 3px; }\n\n#SelectDosage {\n  display: inline-block; }\n\n#SelectCategory {\n  display: inline-flex; }\n\n#SelectSubCategory {\n  display: inline-flex; }\n\n.AddMedicine {\n  max-width: 600px;\n  min-width: 300px;\n  margin: 0 auto; }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"},1055:function(e,n){e.exports='<div id="snackbar"></div>\r\n\r\n<div class="container">\r\n  <main id="content" class="widget-login-container" role="main">\r\n    <div class="row">\r\n  \r\n        <h5 class="widget-login-logo animated  fadeInUp">\r\n          <i class="fa fa-circle text-gray"></i>\r\n          Pharma\r\n          <i class="fa fa-circle text-warning"></i>\r\n        </h5>\r\n        <section class="widget widget-login AddMedicine animated fadeInUp">\r\n          <header>\r\n            <h3 style="font-size:36px;font-weight:900">ADD Medicine</h3>\r\n          </header>\r\n          <div class="widget-body">\r\n            <p class="widget-login-info">\r\n             \r\n            </p>\r\n            <p class="widget-login-info">\r\n           \r\n            </p>\r\n            <form class="login-form mt-lg">\r\n              <div class="form-group">\r\n                <input type="text" class="form-control" [(ngModel)]="MedicineName" name="MedicineName" id="exampleInputEmail1" placeholder="Enter Medicine Name">\r\n              </div>\r\n              \r\n              <div class="row">\r\n                <div class="col-md-6">\r\n              <div class="form-group" id="SelectCategory">\r\n\r\n                <label style="font-size: 12px;">Select Category</label>\r\n\r\n                <select id="MedicineCategory"(change)="getMedicineCategoryId($event.target.value)">\r\n                \r\n                <option *ngFor="let Medicine of categoryModel" value="{{Medicine.Id}}">{{Medicine.CategoryName}}</option>\r\n                </select>   \r\n               \r\n              </div>\r\n              <div class="form-group" id="SelectMeasurement">\r\n                \r\n                                <label style="font-size: 12px;">Select Measurement</label>\r\n              <select id="MedicineMeasurement" (change)="addMeasurementName($event.target.value)">\r\n               <option *ngFor="let Medicine of MeasurementModel" value="{{Medicine.Id}}">{{Medicine.MeasurementName}}</option>\r\n                               \r\n              </select>     \r\n                                \r\n                                     \r\n                                       \r\n          </div>\r\n                                \r\n        </div>\r\n          <div class="col-md-6">\r\n           <div class="form-group" id="SelectSubCategory" >\r\n                                  \r\n           <label style="font-size: 12px;margin-left: -2px;">Select Sub Category</label>\r\n             <select id="MedicineSubCategory" (change)="addsubCategory($event.target.value)" >\r\n             <option *ngFor="let Medicine of subCategoryModel" value="{{Medicine.Id}}">{{Medicine.CategoryName}}</option>\r\n                                                      \r\n             </select>   \r\n                                                 \r\n             </div> \r\n            <a class="btn addbtn btn-inverse btn-sm" (click)="SelectMeasurement()">Add Measurement</a>\r\n            </div>\r\n            </div>\r\n               <div class="row">\r\n                  <div class="col-md-6" >               \r\n                       <div class="form-group" id="SelectDosage">\r\n                      \r\n                   <label style="font-size: 12px;">SelectDosage</label>\r\n                         <select id="MedicineDosage"(change)="getDosageSizesAndValues($event.target.value)">\r\n      <option *ngFor="let Dosage of DosageModel" value="{{Dosage.Id}}">{{Dosage.UnitName}}</option>\r\n                                     \r\n                                      </select>   \r\n                                      \r\n                                    </div>  \r\n                                  </div>\r\n                                  </div>\r\n              <div class="row">\r\n                                \r\n               <div class="col-md-12" id="dosageValue">\r\n                <label style="font-size: 12px;">Select Dosage Value</label>\r\n                <select id="SelectDosageValue" (change)="getDosageSizesAndValuesId($event.target.value)">\r\n                <option *ngFor="let Dosage of DosageSizesAndValueModel" value="{{Dosage.Id}}">{{Dosage.Value}}</option>\r\n                </select>\r\n                \r\n\r\n                <div class="form-group" id="SelectMeasurement">\r\n                    <label style="font-size: 12px;">Select Measurement</label>\r\n                    <select id="MedicineMeasurement" (change)="SelectMedicineMeasurement($event.target.value)">\r\n                    <option *ngFor="let Medicine of MeasurementModel" value="{{Medicine.Id}}">{{Medicine.MeasurementName}}</option>\r\n                    </select>   \r\n                    </div>      \r\n                              \r\n                                       \r\n                                               \r\n                                \r\n              \r\n                               <div class="form-group">\r\n                               <input type="text" class="form-control" [(ngModel)]="ProductQuantity" name="ProductQuantity" id="exampleInputEmail1" placeholder="Enter Product Quantity">\r\n                               </div>\r\n                               <div class="form-group">\r\n                                 <input type="text" class="form-control" [(ngModel)]="ProductPrice" name="ProductPrice" id="exampleInputEmail1" placeholder="Enter Product Price">\r\n                               </div>\r\n                              \r\n                               \r\n            <a class="btn addbtn btn-inverse btn-sm" (click)="populatePricePerQuantity()">Add Measurements</a>\r\n \r\n              </div>\r\n              </div>\r\n              \r\n               \r\n             \r\n               \r\n              <table class="table table-hover">\r\n                  \r\n                      <tr>\r\n                          <td>Dosage Value/Size</td>\r\n                          <td>Measurement Name</td>\r\n                          <td>Product Quantity</td>\r\n                          <td>Product Price</td>\r\n                      </tr>\r\n                     \r\n                    <tr  *ngFor="let row of PricePerQuantityModelSingle">\r\n                        <td>{{row.DosageAndSizesValuesId}}</td>\r\n                        <td>{{row.MeasurementId}}</td>\r\n                        <td>{{row.Quantity}}</td>\r\n                        <td>{{row.Price}}</td>\r\n\r\n                    </tr>\r\n                  \r\n                     \r\n                  \r\n                  \r\n              </table> \r\n              <div class="clearfix">\r\n                  <div class="btn-toolbar pull-xs-right m-t-1">\r\n                  <!--   <button type="button" class="btn btn-secondary btn-sm">Create an Account</button> -->\r\n                    <a class="btn addbtn btn-inverse btn-sm" (click)="addMedicine()">Add</a>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n\r\n              \r\n               </form>\r\n              </div>\r\n             </section>\r\n     \r\n        </div>\r\n  </main>\r\n      </div>\r\n    \r\n  \r\n  \r\n\r\n'},686:function(e,n){"use strict";var t=function(){function ServiceUrl(){this.baseUrl="http://pharmaideo.azurewebsites.net/api/"}return ServiceUrl.prototype.getUrl=function(){return this.baseUrl},ServiceUrl}();n.ServiceUrl=t},925:function(e,n,t){"use strict";(function(e){var i=t(0),o=t(107),r=t(991),a=t(993),d=t(986),s=t(987),c=function(){function MedicineComponent(e,n,t){var i=this;this._addMedicineService=e,this._addDosageService=t,this.MedicineModelSingle=[],this.PricePerQuantityModelSingle=[],this.SelectedMeasurementModel=[],this.router=n,this.ChemistId=1,this._addMedicineService.getAllCategoryValues().subscribe(function(e){i.categoryModel=e.data}),this._addMedicineService.getAllMeasurementValues().subscribe(function(e){i.MeasurementModel=e.data}),this._addMedicineService.getAllDosageValues().subscribe(function(e){i.DosageModel=e.data})}return MedicineComponent.prototype.addsubCategory=function(e){this.SubCategoryId=e,this.ChemistId=localStorage.getItem("chemistId")},MedicineComponent.prototype.getDosageSizesAndValues=function(e){var n=this;console.log(e),this.DosageId=e,this._addDosageService.getDosageValue(this.DosageId).subscribe(function(e){console.log(e),n.DosageSizesAndValueModel=[];for(var t=0;t<e.data.length;t++)n.DosageSizesAndValueModel.push(e.data[t]);console.log(n.DosageSizesAndValueModel)})},MedicineComponent.prototype.populatePricePerQuantity=function(){this.SinglePricePerQuantityModel=new s.PricePerQuantityModel,this.SinglePricePerQuantityModel.Price=this.ProductPrice,this.SinglePricePerQuantityModel.Quantity=this.ProductQuantity,this.SinglePricePerQuantityModel.MeasurementId=this.SinglePricePerQuantityModel.DosageAndSizesValuesId=this.DosageSizesValuesId,this.PricePerQuantityModelSingle.push(this.SinglePricePerQuantityModel),console.log(this.PricePerQuantityModelSingle),e("#snackbar").html("Measurement Add Successfully"),this.myFunction()},MedicineComponent.prototype.addMedicine=function(){var n=this;this.SingleMedicineModel=new d.MedicineModel,this.ChemistId=1,this.SingleMedicineModel.ChemistId=this.ChemistId,this.SingleMedicineModel.Quantity=this.ProductQuantity,this.SingleMedicineModel.Price=this.ProductPrice,this.SingleMedicineModel.DosageSizeAndValues=this.DosageId,this.SingleMedicineModel.SubCategoryId=this.SubCategoryId,this.SingleMedicineModel.MedicineName=this.MedicineName,this.SingleMedicineModel.MeasurementModel=this.SelectedMeasurementModel,this.MedicineModelSingle.push(this.SingleMedicineModel),this._addMedicineService.AddMedicineAndDosageService(this.SingleMedicineModel,this.PricePerQuantityModelSingle).subscribe(function(t){console.log(t),e("#snackbar").html(t.message),n.myFunction()})},MedicineComponent.prototype.getDosageSizesAndValuesId=function(e){this.DosageSizesValuesId=e},MedicineComponent.prototype.getMedicineCategoryId=function(e){var n=this;this.CategoryId=e,this._addMedicineService.getSubcategoryByCategoryID(this.ChemistId,this.CategoryId).subscribe(function(e){console.log(e);for(var t=0;t<e.data.length;t++)e.data[t].ParentId==n.CategoryId&&(n.subCategoryModel=[],n.subCategoryModel=e.data);console.log(n.subCategoryModel)})},MedicineComponent.prototype.SelectMedicineMeasurement=function(e){this.SelectMeasurementName=e,console.log(this.SelectMeasurementName)},MedicineComponent.prototype.SelectMeasurement=function(){var e=this;this.SelectedMeasurementModel.push(this.MedicineMeasurementName),this.tempObj=this.MeasurementModel.find(function(n){return n.Id==e.MedicineMeasurementName}),console.log(this.tempObj)},MedicineComponent.prototype.addMeasurementName=function(e){console.log(e),this.MeasurementName=e,this.SelectedMeasurementModel.push(this.MeasurementName),this.tempObj=this.MeasurementModel.find(function(n){return n.Id==e}),console.log(this.tempObj)},MedicineComponent.prototype.RemoveMeasurementValue=function(e){console.log(e);var n=this.SelectedMeasurementModel.findIndex(function(n){return n.Id==e});this.SelectedMeasurementModel.splice(n,1)},MedicineComponent.prototype.myFunction=function(){var e=document.getElementById("snackbar");e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},MedicineComponent=__decorate([i.Component({selector:"Medicine",providers:[r.AddMedicineService,a.AddDosageService],styles:[t(1024)],template:t(1055),encapsulation:i.ViewEncapsulation.None,host:{"class":"dosage-page app"}}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof r.AddMedicineService&&r.AddMedicineService)&&n||Object,"function"==typeof(c="undefined"!=typeof o.Router&&o.Router)&&c||Object,"function"==typeof(l="undefined"!=typeof a.AddDosageService&&a.AddDosageService)&&l||Object])],MedicineComponent);var n,c,l}();n.MedicineComponent=c}).call(n,t(35))},926:function(e,n,t){"use strict";var i=t(74),o=t(155),r=t(0),a=t(107),d=t(925);n.routes=[{path:"",component:d.MedicineComponent,pathMatch:"full"}];var s=function(){function MedicineModule(){}return MedicineModule.routes=n.routes,MedicineModule=__decorate([r.NgModule({declarations:[d.MedicineComponent],imports:[i.CommonModule,o.FormsModule,a.RouterModule.forChild(n.routes)]}),__metadata("design:paramtypes",[])],MedicineModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=s},986:function(e,n){"use strict";var t=function(){function MedicineModel(){}return MedicineModel}();n.MedicineModel=t},987:function(e,n){"use strict";var t=function(){function PricePerQuantityModel(){}return PricePerQuantityModel}();n.PricePerQuantityModel=t},991:function(e,n,t){"use strict";var i=t(0),o=t(156);t(242);var r=t(686),a=function(){function AddMedicineService(e){this.http=e,this.urlService=new r.ServiceUrl}return AddMedicineService.prototype.getAllCategoryValues=function(){var e=(JSON.stringify({}),new o.Headers({"Content-Type":"application/json"})),n=new o.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getAllCategoriesAndSubCategories",n).map(function(e){return e.json()})},AddMedicineService.prototype.getAllSubCategoryValues=function(){var e=(JSON.stringify({}),new o.Headers({"Content-Type":"application/json"})),n=new o.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getAllCategoriesAndSubCategories",n).map(function(e){return e.json()})},AddMedicineService.prototype.getAllDosageValues=function(){var e=(JSON.stringify({}),new o.Headers({"Content-Type":"application/json"})),n=new o.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getAllChemistUnits",n).map(function(e){return e.json()})},AddMedicineService.prototype.getSubcategoryByCategoryID=function(e,n){var t=(JSON.stringify({}),new o.Headers({"Content-Type":"application/json"})),i=new o.RequestOptions({method:"get",headers:t});return this.http.get(this.urlService.baseUrl+"Chemist/getSubCategoriesByChemistIdByCategoryId?chemistId="+e+"&categoryId="+n,i).map(function(e){return e.json()})},AddMedicineService.prototype.getAllMeasurementValues=function(){var e=(JSON.stringify({}),new o.Headers({"Content-Type":"application/json"})),n=new o.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getAllChemistMeasurements",n).map(function(e){return e.json()})},AddMedicineService.prototype.AddMedicineAndDosageService=function(e,n){var t=JSON.stringify({ChemistId:e.ChemistId,DosageSizeAndValues:e.DosageSizeAndValues,Name:e.MedicineName,MeasurementIds:e.MeasurementModel,SubCategoryId:e.SubCategoryId,AddProductDaosageAndSizeMappingDTO:n});console.log(t);var i=new o.Headers({"Content-Type":"application/json"}),r=new o.RequestOptions({method:"post",headers:i});return this.http.post(this.urlService.baseUrl+"Chemist/addProduct",t,r).map(function(e){return e.json()})},AddMedicineService=__decorate([i.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Http&&o.Http)&&e||Object])],AddMedicineService);var e}();n.AddMedicineService=a},993:function(e,n,t){"use strict";var i=t(0),o=t(156);t(242);var r=t(686),a=function(){function AddDosageService(e){this.http=e,this.urlService=new r.ServiceUrl}return AddDosageService.prototype.getDosageValue=function(e){var n=(JSON.stringify({Id:e}),new o.Headers({"Content-Type":"application/json"})),t=new o.RequestOptions({method:"get",headers:n});return this.http.get(this.urlService.baseUrl+"Chemist/getDosageAndSizeValuesByDosageAndSizeId?dosageAndSizeId=1",t).map(function(e){return e.json()})},AddDosageService.prototype.addunit=function(e,n){var t=JSON.stringify({UnitName:e,UnitSymbol:n}),i=new o.Headers({"Content-Type":"application/json"}),r=new o.RequestOptions({method:"post",headers:i});return this.http.post(this.urlService.baseUrl+"Chemist/addUnit",t,r).map(function(e){return e.json()})},AddDosageService.prototype.getAllUnitValues=function(){var e=JSON.stringify({});console.log(e);var n=new o.Headers({"Content-Type":"application/json"}),t=new o.RequestOptions({method:"get",headers:n});return this.http.get(this.urlService.baseUrl+"Chemist/getAllChemistUnits",t).map(function(e){return e.json()})},AddDosageService.prototype.addUnitValues=function(e,n){var t=JSON.stringify({DosageAndSizesId:e,Value:n}),i=new o.Headers({"Content-Type":"application/json"}),r=new o.RequestOptions({method:"post",headers:i});return this.http.post(this.urlService.baseUrl+"Chemist/addUnitValue",t,r).map(function(e){return e.json()})},AddDosageService=__decorate([i.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Http&&o.Http)&&e||Object])],AddDosageService);var e}();n.AddDosageService=a}});