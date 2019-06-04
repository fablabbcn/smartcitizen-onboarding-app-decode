export function landingController($scope, scopePayload, AnimationService, $rootScope, $stateParams, $state, $translate) {
    $rootScope.lang = $stateParams.lang;
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl = 'ready';
    var buttonTargets = [];

    targets(scopePayload);

    $scope.skipInstructions = function(){
        $state.go('wizard.accesspoint_1', {lang: $stateParams.lang});
    }

    $scope.languageChangeSegue = function(val){

        switch (val) {
          case 'castellano':
            $translate.use('es');
            break;
          case 'english':
            $translate.use('en');
            break;
          case 'català':
            $translate.use('ca');
            break;
          default:
            $translate.use('en');
        }
        

    }
}

landingController.$inject = ['$scope', 'scopePayload', 'AnimationService', '$rootScope', '$stateParams', '$state', '$translate'];
