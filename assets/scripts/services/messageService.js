'use strict';

angular.module('chattyApp')
  .service('messageService', function ( $http ) {

      this.getMessages = function () {
        return $http.get('/messages');
      }

      this.addMessage = function ( username, message ) {
        console.log(username)
        return $http.post('/messages', { username: username, message: message });
      }


  });
