var app = angular.module("mainApp",["firebase"]);

app.controller("sellController", ["$scope", "$firebaseArray",
  function($scope, $firebaseArray) {
  var ref = new Firebase("https://popping-heat-6383.firebaseio.com/");  

    $scope.books = $firebaseArray(ref);

    $scope.addBook = function() {
      // $add on a synchronized array is like Array.push() except it saves to the database!
      $scope.books.$add({
      	dept: $scope.dept,
  		course: $scope.course,
  		bookName: $scope.name,
  		email: $scope.email
      }).then(function(ref){
      	var id = ref.key();
      	console.log("added record with id " +id);
      	$scope.books.$indexFor(id);
      });

      $scope.dept = "";
      $scope.course = "";
      $scope.name = "";
      $scope.email = "";



    };

    // if the messages are empty, add something for fu
  }
]);
/*app.controller('sellController', function($scope, $firebaseArray) {
  
  // connect to firebase 
  var ref = new Firebase("https://popping-heat-6383.firebaseio.com/");  
  var fb = $firebaseArray(ref);
 	$scope.books = $firebaseArray(ref);

  $scope.clickSell = function(){
 	alert("Posting item, pls wait");
/*  fb.$set({
*/  
/*});*/
