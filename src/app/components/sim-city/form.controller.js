(function() {
  'use strict';

  angular
    .module('simCitySimDirective')
    .controller('FormController', FormController);

  function FormController($scope, $timeout, $log, SchemaService, SubmitSimulationService) {
    var vm = this;

    vm.schema = {};
    vm.form = [];
    vm.model = {};
    vm.hidden = true;
    vm.startFade = false;
    vm.message = '';

    // Functions the controller exposes
    vm.onSubmit = onSubmit;

    // Initialize controller
    if(_.has($scope, '$parent.widget.data.schemaurl')) {
      vm.schemaurl = $scope.$parent.widget.data.schemaurl;
    }
    if(vm.schemaurl) {
      SchemaService.getSchema(vm.schemaurl).then(
        function(data) {
          vm.schema = data.schema;
          vm.form = data.form;
        }
      );
    } else {
      $log.debug('SimCityDirective.FormController: no URL provided');
    }

    function onSubmit(form) {
      // Then we check if the form is valid
      if (form.$valid) {
        SubmitSimulationService.submit(vm.schemaurl,
          vm.model, function() {
            flashMessage('Form has been submitted!');
          });
      }
    }

    function flashMessage(msg) {
      vm.message = msg;
      vm.hidden = false;  // Show
      vm.startFade = false;

      // After 5 seconds, fade
      $timeout(function(){
        vm.startFade = true;
        // and then hide
        $timeout(function(){ vm.hidden = true; }, 500);
      }, 2000);
    }
  }
})();
