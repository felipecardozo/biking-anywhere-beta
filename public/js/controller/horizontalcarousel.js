angular.module('biking-anywhere', ['ngAnimate', 'ui.bootstrap']);
angular.module('biking-anywhere').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/700/400/sports'
    },
    {
      image: 'http://lorempixel.com/700/400/sports'
    },
    {
      image: 'http://lorempixel.com/700/400/sports'
    },
    {
      image: 'http://lorempixel.com/700/400/sports'
    }
  ];
});