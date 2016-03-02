var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);
app.controller('myCtrl', function($scope) {
    $scope.firstName= "Alfred";
    $scope.lastName= "Shaker";
    
    //pagination stuff
    
    $scope.currentPage = 1;
    $scope.pageSize = 2;
    
    $scope.images = [
        {
            src : 'images/htp.jpg',
            name : 'htp',
            desc : 'hack the planet yo'
        },
        {
            src : 'images/winners.jpg',
            name : 'winners',
            desc: 'me and my winners!'
        },
        {
            src : 'images/altimer.jpg',
            name : 'altimer',
            desc : 'my winning project'
        },
        {
            src : 'images/survivr.jpg',
            name : 'survivr',
            desc : 'another winner yo'
        }
        
    ];
    
    $scope.otherImages = [
        {
            src : 'images/presentingLeap.jpg',
            name : 'presentingLeap',
            desc : 'me with a pony tail presenting about leapmotion to HacKSU'
        },
        {
            src : 'images/hackcwru.jpg',
            name : 'hackcwru',
            desc: 'best mobile too?! is there anything he can\'t do'
        },
        {
            src : 'images/EIWAkron.jpg',
            name : 'EIWAkron',
            desc : 'EIW with the squad'
        },
        {
            src : 'images/oculusCEO.jpg',
            name : 'oculusCEO',
            desc : 'me and matt meeting brandon the CEO of oculus, you know nbd.'
        }
    ];
    
    $scope.pageChangeHandler = function(num) {
      console.log('meals page changed to ' + num);
    };
    
});
