/*
 * angular-markdown-directive v0.3.1
 * (c) 2013-2014 Brian Ford http://briantford.com
 * License: MIT
 */

'use strict';

angular.module('btford.markdown', ['ngSanitize']).
  provider('markdownConverter', function () {
    var opts = {};
    return {
      config: function (newOpts) {
        opts = newOpts;
      },
      $get: function () {
        return new showdown.Converter(opts);
      }
    };
  }).
  directive('btfMarkdown', ['$sanitize', 'markdownConverter', function ($sanitize, markdownConverter) {
    return {
      restrict: 'AE',
      link: function (scope, element, attrs) {
        if (attrs.btfMarkdown) {
          scope.$watch(attrs.btfMarkdown, function (newVal) {
            var html = newVal ? $sanitize(markdownConverter.makeHtml(newVal)) : '';
            element.html(html);
             angular.forEach(element.find('a'), function (item) {
                var $el = angular.element(item);
                if ($el.attr('href')[0] !== '/')
                   $el.attr('target', '_blank');
                else {
                   $el.attr('href', '/#!' + $el.attr('href'));
                }
             });
          });
        } else {
          var html = $sanitize(markdownConverter.makeHtml(element.text()));
          element.html(html);
           angular.forEach(element.find('a'), function (item) {
              var $el = angular.element(item);
              if ($el.attr('href')[0] !== '/')
                 $el.attr('target', '_blank');
              else {
                 $el.attr('href', '/#!' + $el.attr('href'));
              }
           });
        }
      }
    };
  }]);
