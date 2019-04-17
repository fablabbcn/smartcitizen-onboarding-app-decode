export function decodeController($scope, scopePayload, AnimationService, $httpParamSerializer) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl = 'ready';

    // https://iot.decodeproject.eu/#/onboarding?device_token=abc123&lng=2.12&lat=41.1&exposure=indoor

    console.log($scope.$parent.submittedData.deviceData);

    var params = {
		'device_token': $scope.$parent.submittedData.deviceData.device_token,
		'lng': $scope.$parent.submittedData.deviceData.exposure,
		'lat': $scope.$parent.submittedData.deviceData.exposure,
		'exposure': $scope.$parent.submittedData.deviceData.exposure
	}

    var urlEndPoint = 'https://iot.decodeproject.eu/#/onboarding';

    var urlParams = $httpParamSerializer(params);

    var url = urlEndPoint + '?' + urlParams;

    console.log(url);

    $scope.payload.buttonUrl = url;

}

decodeController.$inject = ['$scope', 'scopePayload', 'AnimationService', '$httpParamSerializer'];
