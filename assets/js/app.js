/**
 * User: laurentrenard
 * Date: 10/3/13
 * Time: 9:55 PM
 **/
var app = angular.module('app', ['ui.bootstrap.tabs', 'smartTable.table']);
app.directive('custom', ['$log', function (log) {
    return {
        restrict: 'E',
        //include smart table controller to use its API if needed
        require: '^smartTable',
        template: '<select ng-model="favouriteColor">' +
            '<option value="">--choose favorite color--</option>' +
            '<option value="red">red</option>' +
            '<option value="blue">blue</option>' +
            '<option value="yellow">yellow</option>' +
            '</select>',
        replace: true,
        link: function (scope, element, attrs, ctrl) {

            var allowedColors = ['red', 'yellow', 'blue'];

            //can use scope.dataRow, scope.column, scope.formatedValue, and ctrl API
            scope.$watch('favouriteColor', function (value) {
                if (allowedColors.indexOf(value) != -1) {
                    scope.dataRow.favouriteColor = scope.favouriteColor;
                }
            });
        }
    }
}]);
app.directive('columnFilter', function () {
    return {
        restrict: 'C',
        require: '^smartTable',
        link: function (scope, element, attrs, ctrl) {
            scope.searchValue = '';
            scope.$watch('searchValue', function (value) {
                ctrl.search(value, scope.column);
            })
        }
    }
});
app.controller('mainCtrl', ['$scope', function (scope) {
    scope.greeting = 'hello Laurent';
}]);

app.directive('scrollTreshold', ['$window', function (window) {
    return {
        link: function (scope, element, attr) {
            var treshold = attr.scrollTreshold || 100;
            window.addEventListener('scroll', function (event) {
                if (window.scrollY > treshold) {
                    element.addClass('scroll-treshold');
                } else {
                    element.removeClass('scroll-treshold');
                }
            });
        }
    }
}]);

app.controller('filterCtrl', ['$scope', function (scope) {
    scope.rowCollection = [
        {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'http://18.233.155.236:8888/terminals/1'},
        {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
        {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    ];

    scope.columnCollection = [
        {label: 'First Name', map: 'firstName'},
        {label: 'Last Name', map: 'lastName', formatFunction: 'uppercase', headerTemplateUrl: 'assets/template/customHeader.html'},
        {label: 'Birth Date', map: 'birthDate', formatFunction: 'date'},
        {label: 'Balance', map: 'balance', formatFunction: 'currency', formatParameter: '$'},
        {label: 'e-mail', map: 'email'}
    ];
    scope.globalConfig = {
        isGlobalSearchActivated: true
    };
    scope.selectedPredicate = scope.predicates[1];
}]);


