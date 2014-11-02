angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/ace/ace.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <section>\n  <div ui-ace=\"form.aceOptions\" ng-model-option=\"form.ngModelOptions\" calss=\"form-control\" sf-changed=\"form\" schema-validate=\"form\" style=\"form.style\">\n  </divv>\n  </section>\n  <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n</div>\n");}]);
angular.module('schemaForm').config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var ace = function(name, schema, options) {
    if (schema.type === 'ace') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'ace';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.string.unshift(ace);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'ace',
    'directives/decorators/bootstrap/ace/ace.html');
    schemaFormDecoratorsProvider.createDirective('ace',
    'directives/decorators/bootstrap/ace/ace.html');
  }]);
