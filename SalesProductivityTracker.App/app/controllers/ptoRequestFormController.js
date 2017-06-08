﻿app.controller("ptoRequestFormController", ["$scope", "$http", "$location", function ($scope, $http, $location) {

    $scope.submitPTORequestForm = submitPTORequestForm;

    function submitPTORequestForm(ptoRequestForm) {
        var timestamp = new Date().toString();
        console.log("timestamp: ", timestamp);
        console.log("requestedPTODate: ", ptoRequestForm.requestedPTODate);
        console.log("ptoType: ", ptoRequestForm.ptoType);
        console.log("notes: ", ptoRequestForm.notes);
    }

}]);