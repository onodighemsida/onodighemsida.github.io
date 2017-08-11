function gissa() {
    var gissning = document.getElementById('gissning').value;
    if (gissning == "sushi") {
        // Gör en pop-up som talar om att det var rätt gissat.
        alert("rätt yo,,, bra gissat där.");
    }
}



 var config = {
    apiKey: "AIzaSyAEJ4SnnsNWtFnlMax6iEGNmwC1o8XG1Ys",
    authDomain: "dummakommentarer.firebaseapp.com",
    databaseURL: "https://dummakommentarer.firebaseio.com",
    projectId: "dummakommentarer",
    storageBucket: "",
    messagingSenderId: "393324040542"
  };
  firebase.initializeApp(config);

  var app = angular.module("app", ["firebase"]);

  app.factory("kommentarer", function($firebaseArray){
  	var ref = firebase.database().ref().child("kommentarer");
  	return $firebaseArray(ref);

  });

  app.controller("KommentarCtrl", function($scope, kommentarer) {
  	$scope.kommentarer = kommentarer; 

  	$scope.kommentar = {
  		text: "",
  		skribent: ""
  	}

  	$scope.addComment = function() {
  		$scope.kommentarer.$add($scope.kommentar);

  	$scope.kommentar = {
  		text: "",
  		skribent: ""
  	}


  	}
  });