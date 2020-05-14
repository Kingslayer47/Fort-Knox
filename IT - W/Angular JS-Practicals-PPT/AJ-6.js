var app = angular.module("myModule",[]);



app.controller("dataController",function($scope){
    var employees = [
        {firstName:"JACK",lastName:"SPARROW",gender:"Male",salary:2000000},
        {firstName:"ALICE",lastName:"JACK",gender:"Female",salary:34000},
        {firstName:"JONNY",lastName:"DRAW",gender:"Male",salary:23000},
        {firstName:"TIA",lastName:"Khanna",gender:"Female",salary:50000}
    ];
    $scope.employeeList = employees; 
});