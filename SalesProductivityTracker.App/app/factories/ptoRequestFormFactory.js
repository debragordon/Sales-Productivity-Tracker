﻿app.factory("ptoRequestFormFactory", ["$q", "$http", function ($q, $http) {

    var service = {
        submitPTORequestForm: submitPTORequestForm,
        getAllPTOForms: getAllPTOForms,
        getPTOFormsByEmployeeId: getPTOFormsByEmployeeId
    }
    return service;

    function submitPTORequestForm(ptoRequestForm) {
        return $q((resolve, reject) => {
            $http.post("/api/pto-forms", ptoRequestForm)
             .then((response) => {
                 resolve(response);
             });
        });
    };

    //TODO:  Move to manager pto factory
    //$q refactor
    function getAllPTOForms() {
        $http.get("/api/pto-forms")
            .then(function (result) {
                console.log("all pto forms", result);
            });
    };

    function getPTOFormsByEmployeeId() {
        return $q((resolve, reject) => {
            $http.get("api/pto-forms-by-employeeID")
             .then((response) => {
                 resolve(response.data);
             });
        });
    };

    //TODO: add existing PTOFormID from ng-model
    //$q refactor
    //function getPTOFormByPTOFormId() {
    //    $http.get(`api/pto-form`)
    //        .then(function(result) {
    //            console.log("PTO By PTO ID", result);
    //        });
    //};

    //TODO: add existing PTOFormID from ng-model
    //$q refactor
    //function deletePTOFormByPTOFormId() {
    //    $http.get(`api/pto-form`)
    //        .then(function (result) {
    //            console.log("PTO By PTO ID", result);
    //        });
    //};

}]);