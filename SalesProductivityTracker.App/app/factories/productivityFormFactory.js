﻿app.factory("productivityFormFactory", ["$q", "$http", function ($q, $http) {

    var service = {
        submitProductivityForm: submitProductivityForm,
        getProductivityFormsByEmployeeId: getProductivityFormsByEmployeeId
    }
    return service;

    function submitProductivityForm(productivityForm) {
        return $q((resolve, reject) => {
            $http.post("/api/productivity-forms", productivityForm)
             .then((response) => {
                 resolve(response);
             });
        });
    };

    function getProductivityFormsByEmployeeId() {
        return $q((resolve, reject) => {
            $http.get("api/productivity-forms-by-employeeID")
             .then((response) => {
                 resolve(response.data);
             });
        });
    };

    //TODO: add existing ProductivityFormID from ng-model
    //$q refactor
    //function getProductivityFormByProductivityFormId() {
    //    $http.get(`api/productivity-form-by-formID`)
    //        .then(function(result) {
    //            console.log("Get Productivity By Productivity ID", result);
    //        });
    //};

    //TODO: add existing ProductivityFormID from ng-model
    //$q refactor
    //function deleteProductivityFormByProductivityFormId() {
    //    $http.delete(`api/productivity-form-by-formID`)
    //        .then(function (result) {
    //            console.log("Delete Productivity By Productivity ID", result);
    //        });
    //};

}]);