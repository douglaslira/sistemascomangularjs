(function () {
    'use strict';

    angular
        .module('sysApp.main')
        .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject = ['$scope'];

    /* @ngInject */
    function MainCtrl($scope) {
        $scope.message = "Olá mundo!";
    }
})();