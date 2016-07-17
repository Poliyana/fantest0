'use strict';

angular.module('polytestApp.auth', ['polytestApp.constants', 'polytestApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
