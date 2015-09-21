
angular.module('biking-anywhere').controller('CarouselDemoCtrl', function ($scope) {
  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.slides = [
    {
      image: '/content/carousel/bike_sanfrancisco.jpg',
      name: 'San Francisco'
    },
    {
      image: '/content/carousel/bike_newyork.jpg',
      name: 'New York'
    },
    {
      image: '/content/carousel/bike_seattle.jpg',
      name: 'Seattle'
    },
    {
      image: '/content/carousel/bike_chicago.jpg',
      name: 'Chicago'
    },
    {
      image: '/content/carousel/bike_Strasbourg.jpg',
      name: 'Strasbourg'
    },
    {
      image: '/content/carousel/bike_berlin.jpg',
      name: 'Berlin'
    }
  ];
});