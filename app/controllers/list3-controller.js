'use strict';
//angular.module('myApp')

//inject $scope and $localStorage
 app.controller('List3Controller', function($scope, $localStorage){
	 
	 //set default localStorage values into $storage variable
	 $scope.$storage = $localStorage.$default({
		 "gifts":[{
			 giftName: 'Gift 1'},{
			 giftName: 'Gift 2'},{
			 giftName: 'Gift 3'}]
	 });
   
	 //function to add gifts to list
	 $scope.sendGift = function(){
		 	
		 //if statement to make sure input box is not empty when add button is clicked
	 		if($scope.giftList){ 
			 	 //add gift to list and localStorage using $storage variable	
				 $scope.$storage.gifts.push({giftName : $scope.giftList});
				 //clear input text after gift has been added to list
	 			 $scope.giftList = "";	
				
   		}else{
				//if input is empty when add button is clicked, alert!
				alert("Please enter a gift idea!");
			}
	 };
	
	 //function to remove gift from list and localStorage using ngStorage
	 $scope.removeGift = function(index){
		 $scope.$storage.gifts.splice(index, 1); //removes from localStorage completely
		 
		// delete $scope.$storage.gifts[index]; <-- left "null" in localStorage
	 };

 });