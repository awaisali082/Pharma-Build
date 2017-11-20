webpackJsonp([24],{1007:function(n,e,o){"use strict";var t=o(0),i=o(156);o(242);var a=o(686),r=function(){function DosageAndSizeValuesService(n){this.http=n,this.urlService=new a.ServiceUrl}return DosageAndSizeValuesService.prototype.AddDosageValue=function(n,e){var o=JSON.stringify({DosageAndSizesId:n,Value:e}),t=new i.Headers({"Content-Type":"application/json"}),a=new i.RequestOptions({method:"post",headers:t});return this.http.post(this.urlService.baseUrl+"Chemist/addUnitValue",o,a).map(function(n){return n.json()})},DosageAndSizeValuesService.prototype.getDosageValue=function(){var n=(JSON.stringify({}),new i.Headers({"Content-Type":"application/json"})),e=new i.RequestOptions({method:"get",headers:n});return this.http.get(this.urlService.baseUrl+"Chemist/getAllUnitValues",e).map(function(n){return n.json()})},DosageAndSizeValuesService=__decorate([t.Injectable(),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.Http&&i.Http)&&n||Object])],DosageAndSizeValuesService);var n}();e.DosageAndSizeValuesService=r},1037:function(n,e){n.exports=".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#MedicineCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 29px;\n  margin-bottom: 14px; }\n\n.AddMeasurement {\n  position: relative;\n  color: white;\n  text-align: center;\n  background-color: grey;\n  float: left; }\n\n#AddMeasurement button {\n  background: none;\n  border: 1px solid #ccc;\n  padding: 8px;\n  font-weight: bold;\n  width: auto;\n  display: inline-block;\n  margin-right: 10px;\n  margin-top: 10px; }\n\n#MedicineDosage {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 37px; }\n\n#dosageValue {\n  margin-bottom: 12px; }\n\n#SelectDosageValue {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 2px; }\n\n#MedicineMeasurement {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 139px;\n  margin-left: 2px; }\n\n#MedicineSubCategory {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 167px;\n  margin-left: 25px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn:hover {\n  color: white; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n#SelectMeasurement {\n  display: inline-flex;\n  margin-bottom: 3px; }\n\n#SelectDosage {\n  display: inline-block; }\n\n#SelectCategory {\n  display: inline-flex; }\n\n#SelectSubCategory {\n  display: inline-flex; }\n\n.AddMedicine {\n  max-width: 600px;\n  min-width: 300px;\n  margin: 0 auto; }\n\n.AddDosage {\n  width: 312px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"},1073:function(n,e){n.exports='<div id="snackbar1"></div>\r\n<div class="row">\r\n\r\n\r\n<div id="snackbar1"></div>\r\n\r\n<div class="container">\r\n  <main id="content" class="widget-login-container" role="main">\r\n    <div class="row">\r\n      <div class="col-xl-4 col-md-6">\r\n        <h5 class="widget-login-logo animated  fadeInUp">\r\n          <i class="fa fa-circle text-gray"></i>\r\n          Pharma\r\n          <i class="fa fa-circle text-warning"></i>\r\n        </h5>\r\n        <section class="widget widget-login  AddSize animated fadeInUp">\r\n          <header>\r\n            <h3 style="font-size:36px;font-weight:900">ADD DOSAGE SIZE</h3>\r\n          </header>\r\n          <div class="widget-body">\r\n            <p class="widget-login-info">\r\n             \r\n            </p>\r\n            <p class="widget-login-info">\r\n           \r\n            </p>\r\n            <form class="login-form mt-lg">\r\n             <select id="measurementName" (change)="getDosageId($event.target.value)"> \r\n                <option disabled selected value> -- select an option -- </option>  \r\n                <option *ngFor="let dosage of SingleDosageModel" value="{{dosage.Id}}">{{dosage.UnitName}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n              <div class="form-group">\r\n                <input class="form-control" id="pswd" [(ngModel)]="DosageValue" name="DosageValue" type="text" placeholder="Enter Value">\r\n              </div>\r\n \r\n              <div class="clearfix">\r\n                <div class="btn-toolbar pull-xs-right m-t-1">\r\n                <!--   <button type="button" class="btn btn-secondary btn-sm">Create an Account</button> -->\r\n                  <a class="btn addbtn btn-inverse btn-sm" (click)="AddDosagevalue()">Add</a>\r\n                </div>\r\n              </div>\r\n            \r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n <!--  <footer class="page-footer">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer> -->\r\n</div>\r\n\r\n</div>'},686:function(n,e){"use strict";var o=function(){function ServiceUrl(){this.baseUrl="http://pharmaideo.azurewebsites.net/api/"}return ServiceUrl.prototype.getUrl=function(){return this.baseUrl},ServiceUrl}();e.ServiceUrl=o},925:function(n,e,o){"use strict";(function(n){var t=o(0),i=o(107),a=o(1007),r=function(){function DosageSizeComponent(n,e){var o=this;this._addDosageAndSizeValuesService=n,this.GetDosageModel=[],this.SingleDosageModel=[],this.router=e,this._addDosageAndSizeValuesService.getDosageValue().subscribe(function(n){console.log(n),o.GetDosageModel=n.data;for(var e=0;e<n.data.length;e++){var t={Id:n.data[e].DosageAndSizes.Id,UnitName:n.data[e].DosageAndSizes.UnitName};o.SingleDosageModel.push(t)}})}return DosageSizeComponent.prototype.getDosageId=function(n){this.DosageId=n},DosageSizeComponent.prototype.AddDosagevalue=function(){var e=this;this._addDosageAndSizeValuesService.AddDosageValue(this.DosageId,this.DosageValue).subscribe(function(o){console.log(o),n("#snackbar1").html(o.message),e.myFunction()})},DosageSizeComponent.prototype.myFunction=function(){var n=document.getElementById("snackbar1");n.className="show",setTimeout(function(){n.className=n.className.replace("show","")},3e3)},DosageSizeComponent=__decorate([t.Component({selector:"DosageSize",providers:[a.DosageAndSizeValuesService],styles:[o(1037)],template:o(1073),encapsulation:t.ViewEncapsulation.None,host:{"class":"dosage-page app"}}),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof a.DosageAndSizeValuesService&&a.DosageAndSizeValuesService)&&e||Object,"function"==typeof(r="undefined"!=typeof i.Router&&i.Router)&&r||Object])],DosageSizeComponent);var e,r}();e.DosageSizeComponent=r}).call(e,o(35))},926:function(n,e,o){"use strict";var t=o(74),i=o(155),a=o(0),r=o(107),s=o(925);e.routes=[{path:"",component:s.DosageSizeComponent,pathMatch:"full"}];var d=function(){function DosageSizeModule(){}return DosageSizeModule.routes=e.routes,DosageSizeModule=__decorate([a.NgModule({declarations:[s.DosageSizeComponent],imports:[t.CommonModule,i.FormsModule,r.RouterModule.forChild(e.routes)]}),__metadata("design:paramtypes",[])],DosageSizeModule)}();Object.defineProperty(e,"__esModule",{value:!0}),e.default=d}});