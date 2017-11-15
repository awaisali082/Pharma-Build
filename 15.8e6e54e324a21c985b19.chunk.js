webpackJsonp([15],{1020:function(e,t){e.exports=".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#PharmacyName {\n  width: 100%;\n  margin-bottom: 12px; }\n\n#us7-lat {\n  width: 237px; }\n\n#us7-lon {\n  width: 237px; }\n\n#us7-radius {\n  width: 260px; }\n\n#us7-address {\n  width: 260px; }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\nagm-map {\n  height: 300px; }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"},1051:function(e,t){e.exports='<div id="snackbar1"></div>\r\n<div class="row">\r\n<div class="container">\r\n  <main id="content" class="widget-login-container" role="main">\r\n    <div class="row">\r\n      <div class="col-xs-3 col-md-5">\r\n        <h5 class="widget-login-logo animated  fadeInUp">\r\n          <i class="fa fa-circle text-gray"></i>\r\n         Pharmacy\r\n          <i class="fa fa-circle text-warning"></i>\r\n        </h5>\r\n        <section class="widget widget-login  AddSize animated fadeInUp">\r\n          <header>\r\n            <h3 style="font-size:36px;font-weight:900">ADD Chemist</h3>\r\n          </header>\r\n          <div class="widget-body">\r\n            <p class="widget-login-info">\r\n             \r\n            </p>\r\n            <p class="widget-login-info">\r\n           \r\n            </p>\r\n            \r\n            <form class="login-form mt-lg">\r\n                <select id="PharmacyName" (change)="getPharmacyId($event.target.value)"> \r\n                    <option *ngFor="let PharmacistName of SingleChemistDataModel" value="{{PharmacistName.Chemist.Id}}">{{PharmacistName.Chemist.PharmacyName}}</option>\r\n                  </select>\r\n                  <div class="form-group">\r\n                      <input class="form-control" id="pswd"  required [(ngModel)]="FullName" name="FullName" type="email" placeholder="Full Name" readonly>\r\n                    </div>\r\n                    <div class="form-group">\r\n                        <input class="form-control" id="pswd"  required [(ngModel)]="Address" name="Address" type="email" placeholder="Address" readonly>\r\n                      </div>\r\n              <div class="form-group">\r\n              <input class="form-control" id="pswd"  required [(ngModel)]="ChemistEmail" name="ChemistEmail" type="email" placeholder="Enter Email">\r\n            </div>\r\n              <div class="form-group">\r\n                <input class="form-control" id="pswd" [(ngModel)]="ChemistName"  name="ChemistName" type="text" placeholder="Enter UserName">\r\n              </div>\r\n              <div class="form-group">\r\n                  <input class="form-control" id="pswd" [(ngModel)]="ChemistPassword"  required="required" name="ChemistPassword" type="password" placeholder="Enter Password">\r\n                </div>\r\n              <div class="form-group">\r\n                <input class="form-control" id="us7-lat" [(ngModel)]="Latitude" name="Latitude" type="text" placeholder="Enter Latitude ">\r\n              </div>\r\n            <div class="form-group">\r\n              <input class="form-control" id="us7-lon" [(ngModel)]="Longitude" name="Longitude" type="text" placeholder="Enter Longitude">\r\n            </div>\r\n \r\n              <div class="clearfix">\r\n                <div class="btn-toolbar pull-xs-right m-t-1">\r\n                <!--   <button type="button" class="btn btn-secondary btn-sm">Create an Account</button> -->\r\n                  <a class="btn addbtn btn-inverse btn-sm" (click)="addChemist()">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class="row m-t-1">\r\n                <div class="col-md-6 push-md-6">\r\n                  <div class="clearfix">\r\n                   <!--  <div class="abc-checkbox widget-login-info pull-xs-right">\r\n                      <input type="checkbox" id="checkbox1" value="1">\r\n                      <label for="checkbox1">Keep me signed in </label>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n               <!--  <div class="col-md-6 pull-md-6">\r\n                  <a class="mr-n-lg" href="#">Trouble with account?</a>\r\n                </div> -->\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n\r\n      <div class="col-xs-3 col-md-5">\r\n          <input class="form-control" id="us7-radius"  name="Radius" type="number" placeholder="Enter Radius">\r\n          <input class="form-control" id="us7-address"  name="Address" type="text" placeholder="Enter Address">\r\n          <div id="somecomponent" style="width: 500px; height: 400px;">\r\n          \r\n          </div>\r\n     \r\n        </div>\r\n  \r\n  \r\n\r\n\r\n\r\n\r\n      \r\n    </div>\r\n  </main>\r\n <!--  <footer class="page-footer">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer> -->\r\n</div>\r\n\r\n</div>\r\n'},686:function(e,t){"use strict";var n=function(){function ServiceUrl(){this.baseUrl="http://pharmaideo.azurewebsites.net/api/"}return ServiceUrl.prototype.getUrl=function(){return this.baseUrl},ServiceUrl}();t.ServiceUrl=n},736:function(e,t,n){"use strict";var i=n(0),o=n(156);n(242);var r=n(686),a=function(){function GetChemistDataService(e){this.http=e,this.urlService=new r.ServiceUrl}return GetChemistDataService.prototype.GetChemistService=function(){var e=(JSON.stringify({}),new o.Headers({"Content-Type":"application/json"})),t=new o.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getListOfPendingChemists",t).map(function(e){return e.json()})},GetChemistDataService=__decorate([i.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Http&&o.Http)&&e||Object])],GetChemistDataService);var e}();t.GetChemistDataService=a},917:function(e,t,n){"use strict";(function(e){var i=n(0),o=n(107),r=n(736),a=n(992),s=function(){function AddChemistComponent(t,n,i){var o=this;this._addChemistServiceService=t,this._getChemistDataService=n,this.router=i,this._getChemistDataService.GetChemistService().subscribe(function(t){o.SingleChemistDataModel=t.data,console.log(o.SingleChemistDataModel),e("#snackbar1").html(t.message),o.myFunction()})}return AddChemistComponent.prototype.getPharmacyId=function(e){var t=this;this.PharmacyId=e,console.log(this.PharmacyId);var n=this.SingleChemistDataModel.find(function(e){return e.ChemistId==t.PharmacyId});this.GetChemistId=n.ChemistId,localStorage.setItem("GetChemistId",n.ChemistId.toString()),this.GetChemistId=localStorage.getItem("GetChemistId"),this.Address=n.Chemist.Address,this.FullName=n.FullName,console.log(n),console.log(this.Address),console.log(this.FullName)},AddChemistComponent.prototype.ngOnInit=function(){setTimeout(function(){e("#somecomponent").locationpicker({location:{latitude:30.3753,longitude:69.3451},radius:300,inputBinding:{latitudeInput:e("#us7-lat"),longitudeInput:e("#us7-lon"),radiusInput:e("#us7-radius"),locationNameInput:e("#us7-address")},enableAutocomplete:!0})},3e3)},AddChemistComponent.prototype.addChemist=function(){var t=this;this.Longitude=e("#us7-lon").val(),this.Latitude=e("#us7-lat").val(),console.log(this.Longitude),this.ChemistEmail&&this.ChemistName&&this.ChemistPassword&&this.Longitude&&this.Latitude?(this.RegularExpression=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,this.RegularExpression.test(this.ChemistEmail)?(this.Longitude=e("#us7-lon").val(),this.Latitude=e("#us7-lat").val(),this.ChemistId=localStorage.getItem("GetChemistId"),console.log(this.ChemistId),this._addChemistServiceService.AddChemist(this.ChemistEmail,this.ChemistName,this.ChemistPassword,this.Longitude,this.Latitude,this.PharmacyId).subscribe(function(n){console.log(n.data),e("#snackbar1").html("Add Chemist Successfully"),t.myFunction()})):(e("#snackbar1").html("Email is not Valid"),this.myFunction())):(e("#snackbar1").html("Please enter Empty field"),this.myFunction())},AddChemistComponent.prototype.myFunction=function(){var e=document.getElementById("snackbar1");e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},AddChemistComponent=__decorate([i.Component({selector:"AddChemist",providers:[a.AddchemistService,r.GetChemistDataService],styles:[n(1020)],template:n(1051),encapsulation:i.ViewEncapsulation.None,host:{"class":"chemist-page app"}}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.AddchemistService&&a.AddchemistService)&&t||Object,"function"==typeof(s="undefined"!=typeof r.GetChemistDataService&&r.GetChemistDataService)&&s||Object,"function"==typeof(d="undefined"!=typeof o.Router&&o.Router)&&d||Object])],AddChemistComponent);var t,s,d}();t.AddChemistComponent=s}).call(t,n(35))},918:function(e,t,n){"use strict";var i=n(74),o=n(155),r=n(0),a=n(107),s=n(917);n(407),t.routes=[{path:"",component:s.AddChemistComponent,pathMatch:"full"}];var d=function(){function AddChemistModule(){}return AddChemistModule.routes=t.routes,AddChemistModule=__decorate([r.NgModule({declarations:[s.AddChemistComponent],imports:[i.CommonModule,o.FormsModule,a.RouterModule.forChild(t.routes)]}),__metadata("design:paramtypes",[])],AddChemistModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=d},992:function(e,t,n){"use strict";var i=n(0),o=n(156);n(242);var r=n(686),a=function(){function AddchemistService(e){this.http=e,this.urlService=new r.ServiceUrl}return AddchemistService.prototype.AddChemist=function(e,t,n,i,r,a){var s=JSON.stringify({Email:e,Password:n,ChemistName:t,Longitude:i,Latitude:r,ChemistId:a});console.log(s);var d=new o.Headers({"Content-Type":"application/json"}),c=new o.RequestOptions({method:"post",headers:d});return this.http.post(this.urlService.baseUrl+"User/addChemistDetail",s,c).map(function(e){return e.json()})},AddchemistService=__decorate([i.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.Http&&o.Http)&&e||Object])],AddchemistService);var e}();t.AddchemistService=a}});