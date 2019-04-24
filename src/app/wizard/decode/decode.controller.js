export function decodeController($scope, scopePayload, AnimationService, $httpParamSerializer) {
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl = 'ready';

    // var urlEndPoint = 'https://iot.decodeproject.eu/#/onboarding';

    var urlEndPoint = 'https://decodeweb.herokuapp.com/#/onboarding';

    var deviceData = $scope.$parent.submittedData.deviceData

    var params = {
		'device_token': deviceData.device_token,
		'lng': deviceData.longitude,
		'lat': deviceData.latitude,
		'exposure': deviceData.exposure
	}

    var urlParams = $httpParamSerializer(params);
    var url = urlEndPoint + '?' + urlParams;

    console.log(url);

    $scope.payload.buttonUrl = url;
}

decodeController.$inject = ['$scope', 'scopePayload', 'AnimationService', '$httpParamSerializer'];
