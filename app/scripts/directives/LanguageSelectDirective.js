/**
 * @ngdoc function
 * @name translateApp.directive:LanguageSelectDirective
 * @description
 * # LanguageSelectDirective
 * Directive to append language select and set its view and behavior
 */
angular.module('translateApp')
  .directive('ngTranslateLanguageSelect', function (LocaleService) {
    'use strict';

    return {
      restrict: 'A',
      replace: true,
      template: ''+

        '<div class="module widget-handle language left language-select" ng-if="visible">'+
            '<ul class="menu">'+
              '<li class="has-dropdown">'+
                '<a href="#" class="customfont">{{"views.index.Language" | translate}}</a>'+
                '<ul>'+
                  '<li ng-repeat="localesDisplayName in localesDisplayNames">'+
                    '<a ng-href="#" ng-click="changeLanguage(localesDisplayName)">{{localesDisplayName}}</a>'+
                  '</li>'+
                '</ul>'+
              '</li>'+
            '</ul>'+
          '</div>'+
      '',
      controller: function ($scope) {
        $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
        $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
        $scope.visible = $scope.localesDisplayNames &&
        $scope.localesDisplayNames.length > 1;

        $scope.changeLanguage = function (locale) {
          LocaleService.setLocaleByDisplayName(locale);
        };
      }
    };
  });
