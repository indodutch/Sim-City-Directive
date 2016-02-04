(function() {
  'use strict';

  angular
    .module('simCitySimDirective')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, SchemaService) {
    SchemaService.addCustomTypeHandler('point2d', function(schema, form) {
      schema['items'] = { 'type': 'object' };
      form['type'] = 'template';
      form['template'] = '<div>Point 2D template!</div>';
    });
  }

})();
