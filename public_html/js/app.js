/* AngularJS created by Sam Saravillo */
var caseApp = angular.module("CaseApp", ['ngRoute', 'caseCtrl']);
    
    caseApp.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'templates/home.html',
                    controller: 'DetailCtrl'
                }).
                when('/eventDetail/:itemId', {
                    templateUrl: 'templates/eventDetail.html',
                    controller: 'eventDetailCtrl'
                    
                }).otherwise({
                    redirectTo: '/'
                });
    }]);
    