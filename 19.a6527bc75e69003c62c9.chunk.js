webpackJsonp([19],{1004:function(e,n,t){"use strict";var o=t(0),r=t(156);t(242);var i=t(686),a=function(){function AddCategoryService(e){this.http=e,this.urlService=new i.ServiceUrl}return AddCategoryService.prototype.addCategory=function(e,n,t){var o=JSON.stringify({ChemistId:e,CategoryName:n,ParentId:t});console.log(o);var i=new r.Headers({"Content-Type":"application/json"}),a=new r.RequestOptions({method:"post",headers:i});return this.http.post(this.urlService.baseUrl+"Chemist/addCategory",o,a).map(function(e){return e.json()})},AddCategoryService.prototype.getAllSubCategoryValues=function(e,n){var t=(JSON.stringify({ChemistId:e,ParentId:n}),new r.Headers({"Content-Type":"application/json"})),o=new r.RequestOptions({method:"get",headers:t});return this.http.get(this.urlService.baseUrl+"Chemist/getAllCategoriesAndSubCategories",o).map(function(e){return e.json()})},AddCategoryService.prototype.getCateogry=function(e){var n=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),t=new r.RequestOptions({method:"get",headers:n});return this.http.get(this.urlService.baseUrl+"Chemist/getCategoriesByChemistId?chemistId="+e,t).map(function(e){return e.json()})},AddCategoryService.prototype.addSubcategory=function(e,n,t){var o=JSON.stringify({ChemistId:e,SubCategoryName:n,ParentId:t}),i=new r.Headers({"Content-Type":"application/json"}),a=new r.RequestOptions({method:"post",headers:i});return this.http.post(this.urlService.baseUrl+"Chemist/addSubCategory",o,a).map(function(e){return e.json()})},AddCategoryService=__decorate([o.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.Http&&r.Http)&&e||Object])],AddCategoryService);var e}();n.AddCategoryService=a},1046:function(e,n){e.exports=".login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n#measurementName {\n  height: 31px;\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef;\n  width: 100%;\n  margin-bottom: 14px; }\n\n.addbtn {\n  width: 235px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n\n#snackbar1 {\n  visibility: hidden;\n  /* Hidden by default. Visible on click */\n  min-width: 250px;\n  /* Set a default minimum width */\n  margin-left: -125px;\n  /* Divide value of min-width by 2 */\n  background-color: #333;\n  /* Black background color */\n  color: #fff;\n  /* White text color */\n  text-align: center;\n  /* Centered text */\n  border-radius: 2px;\n  /* Rounded borders */\n  padding: 16px;\n  /* Padding */\n  position: fixed;\n  /* Sit on top of the screen */\n  z-index: 1;\n  /* Add a z-index if needed */\n  left: 50%;\n  /* Center the snackbar */\n  bottom: 30px;\n  /* 30px from the bottom */ }\n\n.AddDosage {\n  width: 297px; }\n\n.AddSize {\n  width: 297px; }\n\n/* Show the snackbar when clicking on a button (class added with JavaScript) */\n#snackbar1.show {\n  visibility: visible;\n  /* Show the snackbar */\n  /* Add animation: Take 0.5 seconds to fade in and out the snackbar. \r\nHowever, delay the fade out process for 2.5 seconds */\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n\n/* Animations to fade the snackbar in and out */\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n"},1082:function(e,n){e.exports='<div id="snackbar1"></div>\r\n<div class="row">\r\n<div class="col-md-6">\r\n<div class="container">\r\n  <main id="content" class="widget-login-container" role="main">\r\n    <div class="row">\r\n      <div class="col-xl-4 col-md-6 col-xs-12">\r\n        <h5 class="widget-login-logo animated  fadeInUp">\r\n          <i class="fa fa-circle text-gray"></i>\r\n          Pharma\r\n          <i class="fa fa-circle text-warning"></i>\r\n        </h5>\r\n        <section class="widget widget-login AddDosage animated fadeInUp">\r\n          <header>\r\n            <h3 style="text-transform:uppercase">Add Category</h3>\r\n          </header>\r\n          <div class="widget-body">\r\n            <p class="widget-login-info">\r\n             \r\n            </p>\r\n            <p class="widget-login-info">\r\n           \r\n            </p>\r\n            <form class="login-form mt-lg">\r\n              <div class="form-group">\r\n                <input type="text" class="form-control" [(ngModel)]="categoryName" name="categoryName" id="exampleInputEmail1" placeholder="Enter Name">\r\n              </div>\r\n              \r\n              <div class="clearfix">\r\n                <div class="btn-toolbar pull-xs-right m-t-1">\r\n                <!--   <button type="button" class="btn btn-secondary btn-sm">Create an Account</button> -->\r\n                  <a class="btn addbtn btn-inverse btn-sm" (click)="addCategoryValues()">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class="row m-t-1">\r\n                <div class="col-md-6 push-md-6">\r\n                  <div class="clearfix">\r\n                   <!--  <div class="abc-checkbox widget-login-info pull-xs-right">\r\n                      <input type="checkbox" id="checkbox1" value="1">\r\n                      <label for="checkbox1">Keep me signed in </label>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n               <!--  <div class="col-md-6 pull-md-6">\r\n                  <a class="mr-n-lg" href="#">Trouble with account?</a>\r\n                </div> -->\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n <!--  <footer class="page-footer">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer> -->\r\n</div>\r\n</div>\r\n\r\n<div id="snackbar1"></div>\r\n<div class="col-md-6">\r\n<div class="container">\r\n  <main id="content" class="widget-login-container" role="main">\r\n    <div class="row">\r\n      <div class="col-xl-4 col-md-6 col-xs-12">\r\n        <h5 class="widget-login-logo animated  fadeInUp">\r\n          <i class="fa fa-circle text-gray"></i>\r\n          Pharma\r\n          <i class="fa fa-circle text-warning"></i>\r\n        </h5>\r\n        <section class="widget widget-login  AddSize animated fadeInUp">\r\n          <header>\r\n            <h3 style="text-transform:uppercase">Add Sub Category</h3>\r\n          </header>\r\n          <div class="widget-body">\r\n            <p class="widget-login-info">\r\n             \r\n            </p>\r\n            <p class="widget-login-info">\r\n           \r\n            </p>\r\n            <form class="login-form mt-lg">\r\n             <select id="measurementName" (change)="getCategory($event.target.value)"> \r\n                <option disabled selected value> -- select an option -- </option>  \r\n                <option *ngFor="let category of catergories" value="{{category.Id}}">{{category.CategoryName}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n              <div class="form-group">\r\n                <input class="form-control" id="pswd" [(ngModel)]="subCategoryName" name="subCategoryName" type="text" placeholder="Enter Value">\r\n              </div>\r\n \r\n              <div class="clearfix">\r\n                <div class="btn-toolbar pull-xs-right m-t-1">\r\n                <!--   <button type="button" class="btn btn-secondary btn-sm">Create an Account</button> -->\r\n                  <a class="btn addbtn btn-inverse btn-sm" (click)="addSubcateogry()">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class="row m-t-1">\r\n                <div class="col-md-6 push-md-6">\r\n                  <div class="clearfix">\r\n                   <!--  <div class="abc-checkbox widget-login-info pull-xs-right">\r\n                      <input type="checkbox" id="checkbox1" value="1">\r\n                      <label for="checkbox1">Keep me signed in </label>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n\r\n               <!--  <div class="col-md-6 pull-md-6">\r\n                  <a class="mr-n-lg" href="#">Trouble with account?</a>\r\n                </div> -->\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      </div>\r\n    </div>\r\n  </main>\r\n <!--  <footer class="page-footer">\r\n    2016 &copy; Sing. Admin Dashboard Template.\r\n  </footer> -->\r\n</div>\r\n</div>\r\n</div>'},686:function(e,n){"use strict";var t=function(){function ServiceUrl(){this.baseUrl="http://pharmaideo.azurewebsites.net/api/"}return ServiceUrl.prototype.getUrl=function(){return this.baseUrl},ServiceUrl}();n.ServiceUrl=t},943:function(e,n,t){"use strict";(function(e){var o=t(0),r=t(107),i=t(1004),a=function(){function ChemistComponent(e,n){var t=this;this._addCategoryService=e,this.catergories=[],this.router=n,this.chemistId=localStorage.getItem("GetChemistId"),this._addCategoryService.getCateogry(this.chemistId).subscribe(function(e){t.catergories=e.data})}return ChemistComponent.prototype.addCategoryValues=function(){var n=this;this.chemistId=localStorage.getItem("GetChemistId"),this.parentId=0,this._addCategoryService.addCategory(this.chemistId,this.categoryName,this.parentId).subscribe(function(t){e("#snackbar1").html(t.message),n.myFunction(),"SUCCESS"==t.message?(n._addCategoryService.getCateogry(n.chemistId).subscribe(function(e){n.catergories=e.data}),n.categoryName=void 0):(e("#snackbar1").html("Not A Valid Category"),n.myFunction())})},ChemistComponent.prototype.addSubcateogry=function(){var n=this;this.chemistId=localStorage.getItem("GetChemistId"),this.parentId=1,void 0!=this.chemistId&&void 0!=this.parentId&&void 0!=this.subCategoryName?(this._addCategoryService.addSubcategory(this.chemistId,this.subCategoryName,this.categoryId).subscribe(function(t){e("#snackbar1").html(t.message),n.myFunction()}),this.subCategoryName=void 0):(e("#snackbar1").html("Invalid Credenntials"),this.myFunction())},ChemistComponent.prototype.searchResult=function(){this.router.navigate(["/app","extra","search"])},ChemistComponent.prototype.getCategoryId=function(e){this.chemistId=e},ChemistComponent.prototype.getCategory=function(e){this.categoryId=e},ChemistComponent.prototype.myFunction=function(){var e=document.getElementById("snackbar1");e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},ChemistComponent=__decorate([o.Component({selector:"chemist",providers:[i.AddCategoryService],styles:[t(1046)],template:t(1082),encapsulation:o.ViewEncapsulation.None,host:{"class":"chemist-page app"}}),__metadata("design:paramtypes",["function"==typeof(n="undefined"!=typeof i.AddCategoryService&&i.AddCategoryService)&&n||Object,"function"==typeof(a="undefined"!=typeof r.Router&&r.Router)&&a||Object])],ChemistComponent);var n,a}();n.ChemistComponent=a}).call(n,t(35))},944:function(e,n,t){"use strict";var o=t(74),r=t(155),i=t(0),a=t(107),s=t(943);n.routes=[{path:"",component:s.ChemistComponent,pathMatch:"full"}];var d=function(){function ChemistModule(){}return ChemistModule.routes=n.routes,ChemistModule=__decorate([i.NgModule({declarations:[s.ChemistComponent],imports:[o.CommonModule,r.FormsModule,a.RouterModule.forChild(n.routes)]}),__metadata("design:paramtypes",[])],ChemistModule)}();Object.defineProperty(n,"__esModule",{value:!0}),n.default=d}});