!function(){"use strict";angular.module("simCitySimDirective",["ngResource","ui.bootstrap","toastr","schemaForm"])}(),function(){"use strict";function e(e,t){function n(t,n,i){var r=e(t,{},{send:{method:"GET"}}),o=r.send(n);return"function"==typeof i?o.$promise.then(i):o.$promise}var i={submit:n};return i}e.$inject=["$resource","$log"],angular.module("simCitySimDirective").service("SubmitSimulationService",e)}(),function(){"use strict";function e(){var e={templateUrl:n.replace("directive.js","directive.html"),scope:{schemaurl:"@"},controller:"FormController",controllerAs:"vm",bindToController:!0};return e}var t=document.getElementsByTagName("script"),n=t[t.length-1].src;angular.module("simCitySimDirective").directive("simForm",e)}(),function(){"use strict";function e(e,t){function n(e,t){m[e]=t}function i(t){var n=e(t),i=n.get();return i.$promise.then(r)}function r(e){var t={type:"object",properties:{}},n=[];return e=e.toJSON(),e.parameters.forEach(function(e){o(e,t,n)}),{schema:t,form:n}}function o(e,n,i){var r={name:function(e,t,n){},type:function(e,n,i){var r=e.type,o={str:"string",number:"number",list:"array"};if(m[r]){var a=m[r];a(n,i)}else o[r]?n.type=o[r]:(t.debug("SchemaService: no mapping known for type: "+r),n.type=r)},contents:function(e,t,n){t.items={type:"object",properties:{}},n.items=[],e.contents.name=e.contents.name||"_unnamed",o(e.contents,t.items,n.items)},min_length:function(e,t,n){t.minLength=Number(e.min_length)},max_length:function(e,t,n){t.maxLength=Number(e.max_length)},"default":function(e,t,n){"number"===e.type&&(t["default"]=Number(e["default"]))},title:function(e,t,n){t.title=e.title},description:function(e,t,n){t.description=e.description},min:function(e,t,n){n.min=e.min},max:function(e,t,n){n.max=e.max}};if(!("name"in e))return void t.debug("No name present in parameter! Cannot process further.");var a=e.name,c={},s={key:a};for(var u in e)if(u in r){var l=r[u];l(e,c,s)}else t.debug("SchemaService: no rule know for key: "+u);n.properties[a]=c,i.push(s)}var m={},a={addCustomTypeHandler:n,getSchema:i};return a}e.$inject=["$resource","$log"],angular.module("simCitySimDirective").service("SchemaService",e)}(),function(){"use strict";function e(e,t,n,i,r){function o(e){e.$valid&&r.submit(a.schemaurl,a.model,function(){m("Form has been submitted!")})}function m(e){a.message=e,a.hidden=!1,a.startFade=!1,t(function(){a.startFade=!0,t(function(){a.hidden=!0},500)},2e3)}var a=this;a.schema={},a.form=[],a.model={},a.hidden=!0,a.startFade=!1,a.message="",a.onSubmit=o,_.has(e,"$parent.widget.data.schemaurl")&&(a.schemaurl=e.$parent.widget.data.schemaurl),a.schemaurl?i.getSchema(a.schemaurl).then(function(e){a.schema=e.schema,a.form=e.form}):n.debug("SimCityDirective.FormController: no URL provided")}e.$inject=["$scope","$timeout","$log","SchemaService","SubmitSimulationService"],angular.module("simCitySimDirective").controller("FormController",e)}(),function(){"use strict";function e(e,t){t.addCustomTypeHandler("point2d",function(e,t){e.items={type:"object"},t.type="template",t.template="<div>Point 2D template!</div>"})}e.$inject=["$log","SchemaService"],angular.module("simCitySimDirective").run(e)}(),function(){"use strict";angular.module("simCitySimDirective").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t){e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig"],angular.module("simCitySimDirective").config(e)}(),angular.module("simCitySimDirective").run(["$templateCache",function(e){e.put("app/components/sim-city/simform.directive.html",'<div><div class="alert alert-success" ng-hide="vm.hidden" ng-class="{fade: vm.startFade}">{{ vm.message }}</div><form name="myForm" sf-schema="vm.schema" sf-form="vm.form" sf-model="vm.model" sf-options=""></form><button ng-click="vm.onSubmit(myForm)" class="btn btn-success">Submit</button></div>')}]);
//# sourceMappingURL=../maps/scripts/app-d2e33029fa.js.map
