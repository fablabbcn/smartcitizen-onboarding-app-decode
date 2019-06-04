export default function config(uiGmapGoogleMapApiProvider, $translateProvider, $cookiesProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyDgSvUrtmsNLkoaK1mYlyU3eVbByMlE4w4',
        v: '3.20',
        libraries: 'weather,geometry,visualization'
    });

    $translateProvider.useStaticFilesLoader({
      prefix: 'assets/i18n/',
      suffix: '.json'
    });
    $translateProvider.registerAvailableLanguageKeys(['en', 'es', 'ca'], {
        'en_*': 'en',
        'es_*': 'es',
        'ca': 'ca',
        '*': 'en',
    })
    // $translateProvider.preferredLanguage('ca');
    $translateProvider.determinePreferredLanguage();

    $cookiesProvider.defaults.path = '/';
    $cookiesProvider.defaults.domain = '.smartcitizen.me';

}

config.$inject = ['uiGmapGoogleMapApiProvider', '$translateProvider', '$cookiesProvider'];