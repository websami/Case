var caseCtrl = angular.module('caseCtrl', []);

    caseCtrl.controller("DetailCtrl", ['$scope', '$http', 
        function ($scope, $http) { 
            $http.get('js/data.json').then(function(result) {
                $scope.event = result.data;
                //console.log($scope.event);
            }); 
        }
    ]);
    
    caseCtrl.controller("eventDetailCtrl", ['$scope', '$http', '$routeParams',
        function ($scope, $http, $routeParams) { 
            $http.get('js/data.json').then(function(result) {
                $scope.event = result.data;
                $scope.whichItem = $routeParams.itemId;
                $scope.activeMenu = $scope.whichItem;
                //console.log($scope.activeMenu);
                
                $scope.setActive = function(menuItem) {
                    $scope.activeMenu = menuItem;
                    console.log($scope.activeMenu);
                };
              
                /*$(document).ready(function() {
                if($("#sam").text().indexOf('Issuer') != true) {
                    $("#saravillo").css( "border", "3px solid red" );
                    console.log("asdf");
                 }
                });*/
            }); 
        }
    ]);
    

