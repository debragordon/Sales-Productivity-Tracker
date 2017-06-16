﻿angular.module("app.directives.ptoLog", [])
    .directive("ptoLog", function () {
        return {
            restrict: "E",
            scope: {
                ptoRequestForms: "<"
            },
            templateUrl: "app/templates/ptoLog.html",
            controller: function ($scope, $location, ptoRequestFormFactory) {

                $scope.getPTOFormsByEmployeeId = getPTOFormsByEmployeeId;

                getPTOFormsByEmployeeId();

                function getPTOFormsByEmployeeId() {
                    ptoRequestFormFactory.getPTOFormsByEmployeeId().then(function (forms) {
                        $scope.ptoRequestForms = forms;
                        $location.url('/home');
                    });
                };
            }
        };
    });