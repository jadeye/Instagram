angular.module('Instagram', ['ui.router', 'ngRoute', 'ngMessages', 'satellizer'])
	.config(function($routeProvider, $authProvider) {


		$routeProvider
		  .when('/', {
		    templateUrl: 'views/home.html',
		    controller: 'HomeCtrl'
		  })
		  .when('/login', {
		    templateUrl: 'views/login.html',
		    controller: 'LoginCtrl'
		  })
		  .when('/signup', {
		    templateUrl: 'views/signup.html',
		    controller: 'SignupCtrl'
		  })
		  .when('/photo/:id', {
		    templateUrl: 'views/detail.html',
		    controller: 'DetailCtrl'
		  })
		  .otherwise('/');
/*

CLIENT INFO
CLIENT ID	807f532aabd64796aca9648273ab6925
CLIENT SECRET	149e4f4c4dce4b02ac47c086dab53685
WEBSITE URL	http://localhost:8082/
REDIRECT URI	http://localhost:8082/
SUPPORT EMAIL	
*/
		$authProvider.loginUrl = 'http://localhost:8082/auth/login';
		$authProvider.signupUrl = 'http://localhost:8082/#/auth/signup';
		/*$authProvider.oauth2({
		  name: 'instagram',
		  url: 'https://instagram-server.herokuapp.com/auth/instagram',
		  redirectUri: 'https://dl.dropboxusercontent.com/u/14131013/instagram/index.html',
		  clientId: '799d1f8ea0e44ac8b70e7f18fcacedd1',
		  requiredUrlParams: ['scope'],
		  scope: ['likes'],
		  scopeDelimiter: '+',
		  authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
		});
		})
		.run(function($rootScope, $window, $auth) {
		if ($auth.isAuthenticated()) {
		  $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
		}
		});*/
		$authProvider.oauth2({
		  name: 'instagram',
		  url: 'http://localhost:8082/auth/instagram',
		  redirectUri: 'http://localhost:8082/',
		  clientId: '807f532aabd64796aca9648273ab6925',
		  requiredUrlParams: ['scope'],
		  scope: ['likes'],
		  scopeDelimiter: '+',
		  authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
		});
	
		$authProvider.facebook({
	      clientId: '310841092587319'
	    });

	    $authProvider.google({
	      clientId: '795752659356-gklm3132k5q51hsr57u55r09svu0n0uu.apps.googleusercontent.com'
	    });

	    $authProvider.github({
	      clientId: '29ec03bf843d466b8865'
	    });

/*  .config(function($stateProvider) {

  	$stateProvider
                .state('home', {
                  	url: '/',
                  	templateUrl: 'views/home.html',
    				controller: 'HomeCtrl'
                })
                .state('login', {
                    url: '/login',
				    templateUrl: 'views/login.html',
				    controller: 'LoginCtrl'
                })
                .state('signup', {
                  	url: '/signup',
				    templateUrl: 'views/signup.html',
				    controller: 'SignupCtrl'
                })
                .state('photo/:id', {
					url: '/photo/:id',
				    templateUrl: 'views/detail.html',
				    controller: 'DetailCtrl'
                })
                .state("otherwise", {
                  url : '/'
                });
*/  })
	.run(function($rootScope, $window, $auth) {
			if ($auth.isAuthenticated()) {
			  $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
			}
		});