'use strict';
//angular.module('myApp')

//inject $scope and $localStorage
 app.controller('List2Controller', function($scope, $localStorage){
	 
	 //set default localStorage values into $storage variable
	 $scope.$storage = $localStorage.$default({
		 "items":[{
			 itemName: 'Item 1'},{
			 itemName: 'Item 2'},{
			 itemName: 'Item 3'}]
	 });
   
	 //function to add items to list
	 $scope.sendItem = function(){

		 //if statement to make sure input box is not empty when add button is clicked
	 		if($scope.groceryItem){
			 	//add item to list and localStorage using $storage variable
				 $scope.$storage.items.push({itemName : $scope.groceryItem});
	 			//clear input text after item has been added to list 
				 $scope.groceryItem = "";	
				
   		}else{
				//if input is empty when add button is clicked, alert!
				alert("Please enter an item!");
			}
	 };
		
	 //function to remove item from list and localStorage using ngStorage
	 $scope.removeItem = function(index){
		 $scope.$storage.items.splice(index, 1); //removes from localStorage completely
		 
		 //delete $scope.$storage.items[index]; <-- left "null" in localStorage
	 };

 });