'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
    'ui.router',
    'ngMaterial',
    'ngMessages',
    'ngAnimate',
    'ngGeolocation',
    'uiGmapgoogle-maps',
    'google.places'])
    .controller('formController', function($scope) {

        // we will store all of our form data in this object
        $scope.formData = {};

        // function to process the form
        $scope.processForm = function () {
            alert('awesome!');
        };
    });