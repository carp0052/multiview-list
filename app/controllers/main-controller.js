'use strict';
//angular.module('myApp')
 app.controller('MainController', function($scope, $localStorage){

//	 original way for default values
//	 $scope.tasks = [{taskName: 'Task 1'},{taskName: 'Task 2'},{taskName: 'Task 3'}];
	 
	 //default list into localStorage 
	 //using ngStorage
	 $scope.$storage = $localStorage.$default({
		 "tasks":[{
			 taskName: 'Task 1'},{
			 taskName: 'Task 2'},{
			 taskName: 'Task 3'}]
	 });
   
	 //function to add task to list
	 $scope.sendTask = function(){
   		//alert($scope.newTask);
	 	 	
		 //if statement to make sure input box is not empty when add button is clicked
		  if($scope.todoTask){
				//add task to list and localStorage using $storage variable
				 $scope.$storage.tasks.push({taskName : $scope.todoTask});
				//clear input text after item has been added to list 
	 			 $scope.todoTask = "";	
				
				//not using ngStorage
//				$scope.tasks.push({taskName : $scope.todo.task});
//				localStorage.setItem("todoList", JSON.stringify($scope.tasks));
//				$scope.list();
   		}else{
				alert("Please enter a task!");
			}
	 };
	 
	 //function for listing the items using regular localstorage
	 //not needed with ngStorage
//	 $scope.list = function(){
//		 if(localStorage.getItem("todoList")===null)
//			 {
//				 $scope.tasks;
//			 }
//		 else
//		 {
//			$scope.tasks = JSON.parse(localStorage.getItem("todoList")); 
//		 }
//	 };
		
	 //function to remove task from list and localStorage using ngStorage
	 $scope.removeTask = function(index){
			$scope.$storage.tasks.splice(index, 1); //removes from local storage completely	 
		 //delete $scope.$storage.tasks[index]; <-- left "null" in local storage

		 //not using ngStorage
//		 delete $scope.tasks[index]; <-- without localstorage
//		 localStorage.setItem("todoList", JSON.stringify($scope.tasks));
		 };
	 
//	 $scope.list(); <-- have list show up with rig
 });