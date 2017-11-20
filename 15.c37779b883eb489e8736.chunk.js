webpackJsonp([15],{1012:function(e,t,n){"use strict";var i=n(0),r=n(156);n(242);var o=n(686),s=function(){function PendingOrderService(e){this.http=e,this.urlService=new o.ServiceUrl}return PendingOrderService.prototype.GetPendingOrder=function(){var e=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),t=new r.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getAllChemists?webRequest=1",t).map(function(e){return e.json()})},PendingOrderService.prototype.GetOrderDetailService=function(){var e=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),t=new r.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getAllChemists?webRequest=1",t).map(function(e){return e.json()})},PendingOrderService.prototype.AddLaugisticData=function(e,t){var n=JSON.stringify({OrderId:e,LogisticsId:t}),i=new r.Headers({"Content-Type":"application/json"}),o=new r.RequestOptions({method:"post",headers:i});return this.http.post(this.urlService.baseUrl+"Admin/assignOrderToLogistics",n,o).map(function(e){return e.json()})},PendingOrderService.prototype.getDataByCities=function(e){var t=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),n=new r.RequestOptions({method:"get",headers:t});return this.http.get(this.urlService.baseUrl+"Chemist/getChemistsListByCity?CityId="+e,n).map(function(e){return e.json()})},PendingOrderService=__decorate([i.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.Http&&r.Http)&&e||Object])],PendingOrderService);var e}();t.PendingOrderService=s},1044:function(e,t){e.exports="/***********************************/\n/**             LOGIN             **/\n/***********************************/\n.login-page {\n  background-color: #ddd; }\n\n.login-page .page-footer {\n  margin-bottom: 25px;\n  font-size: 13px;\n  color: #818a91;\n  text-align: center; }\n  @media (min-height: 600px) {\n    .login-page .page-footer {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0; } }\n\n.btn {\n  width: 287px;\n  color: white !important; }\n\n.widget-login-container {\n  padding-top: 10%; }\n\n.widget-login-logo {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  text-align: center;\n  font-weight: 400; }\n  .widget-login-logo .fa-circle {\n    font-size: 13px;\n    margin: 0 20px; }\n\n.widget-login {\n  padding: 30px; }\n  .widget-login > header h1, .widget-login > header h2, .widget-login > header h3, .widget-login > header h4, .widget-login > header h5, .widget-login > header h6 {\n    font-weight: 400;\n    text-align: center; }\n\n.widget-login-info {\n  font-size: 13px;\n  color: #888;\n  margin-top: 1px;\n  margin-bottom: 0;\n  text-align: center; }\n  .widget-login-info.abc-checkbox {\n    margin-left: -25px; }\n\n.login-form .form-control {\n  font-size: 13px;\n  border: none;\n  background-color: #eceeef; }\n  .login-form .form-control:focus {\n    background-color: #ddd; }\n"},1080:function(e,t){e.exports='<div id="snackbar"></div>\r\n<div class="container">\r\n  <main id="content" class="widget-login-container" role="main">\r\n    <div class="row">\r\n      <div class="col-md-4">\r\n        </div>\r\n        <div class="col-md-4">\r\n        \r\n        <h5 class="widget-login-logo animated fadeInUp">\r\n          <i class="fa fa-circle text-gray"></i>\r\n          Pharma\r\n          <i class="fa fa-circle text-warning"></i>\r\n        </h5>\r\n        <section class="widget widget-login animated fadeInUp">\r\n          <header>\r\n            <h3>Pending Order</h3>\r\n          </header>\r\n          <div class="widget-body">\r\n            <p class="widget-login-info">\r\n              Use Facebook, Twitter or your email to sign in.\r\n            </p>\r\n            <p class="widget-login-info">\r\n              Don\'t have an account? Sign up now!\r\n            </p>\r\n            <form class="login-form mt-lg">\r\n              <select id="Laugistic" (change)="GetLaugisticId($event.target.value)"> \r\n                    <option disabled selected value> -- select an option -- </option>\r\n                    \r\n                    <option *ngFor="let LaugisticName of GetLaugisticModelArray" value="{{LaugisticName.Id}}">{{LaugisticName.Name}}</option>\r\n                  </select>\r\n                  <select id="Orders" (change)="GetOrderId($event.target.value)"> \r\n                      <option disabled selected value> -- select an option -- </option>\r\n                      \r\n                      <option *ngFor="let OrderId of GetOrderServiceArray" value="{{OrderId.User.Id}}">{{OrderId.User.UserName}}</option>\r\n                    </select>\r\n              \r\n              <div class="clearfix">\r\n                <div class="btn-toolbar pull-xs-right m-t-1">\r\n                <!--   <button type="button" class="btn btn-secondary btn-sm">Create an Account</button> -->\r\n                  <a class="btn btn-inverse btn-sm"  (click)="AssignLogistic()">Add</a>\r\n                </div>\r\n              </div>\r\n              <div class="row m-t-1">\r\n                <div class="col-md-6 push-md-6">\r\n                  <div class="clearfix">\r\n                    <div class="abc-checkbox widget-login-info pull-xs-right">\r\n                      <input type="checkbox" id="checkbox1" value="1">\r\n                      <label for="checkbox1">Keep me signed in </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                \r\n              </div>\r\n            </form>\r\n          </div>\r\n        </section>\r\n      \r\n      </div>\r\n  \r\n      </div>\r\n  </main>\r\n \r\n</div>\r\n'},686:function(e,t){"use strict";var n=function(){function ServiceUrl(){this.baseUrl="http://pharmaideo.azurewebsites.net/api/"}return ServiceUrl.prototype.getUrl=function(){return this.baseUrl},ServiceUrl}();t.ServiceUrl=n},739:function(e,t,n){"use strict";var i=n(0),r=n(156);n(242);var o=n(686),s=function(){function GetLaugisticService(e){this.http=e,this.urlService=new o.ServiceUrl}return GetLaugisticService.prototype.GetLaugisticName=function(){var e=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),t=new r.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Logistics/getAllLogistics",t).map(function(e){return e.json()})},GetLaugisticService.prototype.AddLaugisticData=function(e,t,n,i){var o=JSON.stringify({LogisticsId:e,UserName:t,Password:n,FullName:i});console.log(o);var s=new r.Headers({"Content-Type":"application/json"}),a=new r.RequestOptions({method:"post",headers:s});return this.http.post(this.urlService.baseUrl+"Logistics/addLogisticUser",o,a).map(function(e){return e.json()})},GetLaugisticService.prototype.GetAllCitiesService=function(){var e=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),t=new r.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"City/getAllCities",t).map(function(e){return e.json()})},GetLaugisticService.prototype.getDataByCities=function(e){var t=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),n=new r.RequestOptions({method:"get",headers:t});return this.http.get(this.urlService.baseUrl+"Chemist/getChemistsListByCity?CityId="+e,n).map(function(e){return e.json()})},GetLaugisticService=__decorate([i.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.Http&&r.Http)&&e||Object])],GetLaugisticService);var e}();t.GetLaugisticService=s},740:function(e,t,n){"use strict";var i=n(0),r=n(156);n(242);var o=n(686),s=function(){function GetOrderService(e){this.http=e,this.urlService=new o.ServiceUrl}return GetOrderService.prototype.GetOrderDetailService=function(){var e=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),t=new r.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"Chemist/getOrdersByOrderStatus?orderStatus=100",t).map(function(e){return e.json()})},GetOrderService.prototype.GetAllCitiesService=function(){var e=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),t=new r.RequestOptions({method:"get",headers:e});return this.http.get(this.urlService.baseUrl+"City/getAllCities",t).map(function(e){return e.json()})},GetOrderService.prototype.getDataByCities=function(e){var t=(JSON.stringify({}),new r.Headers({"Content-Type":"application/json"})),n=new r.RequestOptions({method:"get",headers:t});return this.http.get(this.urlService.baseUrl+"Chemist/getChemistsListByCity?CityId="+e,n).map(function(e){return e.json()})},GetOrderService=__decorate([i.Injectable(),__metadata("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.Http&&r.Http)&&e||Object])],GetOrderService);var e}();t.GetOrderService=s},939:function(e,t,n){"use strict";(function(e){var i=n(0),r=n(739),o=n(740),s=n(1012),a=n(107),c=function(){function PendingOrderComponent(t,n,i,r){var o=this;this._getLaugisticService=t,this._getPendingOrderService=n,this._getOrderService=i,this.GetOrderServiceArray=[],this.GetLaugisticModelArray=[],this.GetLaugisticModeldata=[],this.PendingOrderServiceArray=[],this.router=r,this.username=void 0,this.password=void 0,this._getLaugisticService.GetLaugisticName().subscribe(function(t){o.GetLaugisticModelArray=t.data,e("#snackbar").html(t.message),o.myFunction()}),this.pendingOrderFun(),console.log(this.GetLaugisticModelArray)}return PendingOrderComponent.prototype.pendingOrderFun=function(){var t=this;this._getOrderService.GetOrderDetailService().subscribe(function(n){console.log(n.data),t.GetOrderServiceArray=n.data,e("#snackbar").html(n.message),t.myFunction()})},PendingOrderComponent.prototype.GetLaugisticId=function(e){this.Lougistic_Id=e},PendingOrderComponent.prototype.GetOrderId=function(e){this.Order_Id=e},PendingOrderComponent.prototype.AssignLogistic=function(){var t=this;this._getPendingOrderService.AddLaugisticData(this.Order_Id,this.Lougistic_Id).subscribe(function(n){t.GetLaugisticModeldata=n.data,e("#snackbar").html(n.message),t.myFunction()}),console.log(this.GetLaugisticModeldata)},PendingOrderComponent.prototype.myFunction=function(){var e=document.getElementById("snackbar");e.className="show",setTimeout(function(){e.className=e.className.replace("show","")},3e3)},PendingOrderComponent=__decorate([i.Component({selector:"PendingOrder",styles:[n(1044)],template:n(1080),providers:[r.GetLaugisticService,s.PendingOrderService,o.GetOrderService],encapsulation:i.ViewEncapsulation.None,host:{"class":"login-page app"}}),__metadata("design:paramtypes",["function"==typeof(t="undefined"!=typeof r.GetLaugisticService&&r.GetLaugisticService)&&t||Object,"function"==typeof(c="undefined"!=typeof s.PendingOrderService&&s.PendingOrderService)&&c||Object,"function"==typeof(d="undefined"!=typeof o.GetOrderService&&o.GetOrderService)&&d||Object,"function"==typeof(g="undefined"!=typeof a.Router&&a.Router)&&g||Object])],PendingOrderComponent);var t,c,d,g}();t.PendingOrderComponent=c}).call(t,n(35))},940:function(e,t,n){"use strict";var i=n(74),r=n(155),o=n(0),s=n(107),a=n(939);t.routes=[{path:"",component:a.PendingOrderComponent,pathMatch:"full"}];var c=function(){function PendingOrderModule(){}return PendingOrderModule.routes=t.routes,PendingOrderModule=__decorate([o.NgModule({declarations:[a.PendingOrderComponent],imports:[i.CommonModule,r.FormsModule,s.RouterModule.forChild(t.routes)]}),__metadata("design:paramtypes",[])],PendingOrderModule)}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=c}});