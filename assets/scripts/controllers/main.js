'use strict';

angular.module('chattyApp')
  .controller('MainCtrl', function ( $scope, messageService ) {
    messageService.getMessages().then(function ( response ) {
      $scope.messages = response.data.messages;
      $scope.username = response.data.username;
    });

    $scope.addMessage = function ( message ) {
      if (message) {
        messageService.addMessage(message).then(function ( response ) {
          $scope.messages = response.data.messages;
        });
      }
    };
    $scope.addUser = function ( username ) {
      if (username) {
        messageService.addMessage(username).then(function ( response ) {
          $scope.username = response.data.username;
        });
      }
    };

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
