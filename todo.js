const todo = angular.module('todo', []);

todo.controller('todoController', ['$scope', ($scope)=>{
    $scope.todos = [
        {
            content: "Learn Angular",
            completed: false,
        },
        {
            content: "Learn Node",
            completed: true,
        },
        {
            content: "Learn Attach backend with frontend",
            completed: false,
        },
    ];
    $scope.completed = false;
    $scope.error_message = "";
    $scope.addTodo = () => {
        if($scope.new_todo===undefined){
            $scope.error_message = "please enter something to add";
            return;
        }
        $scope.todos.push({content: $scope.new_todo, completed: false});
        $scope.new_todo = "";
        $scope.error_message = "";
        $scope.completed = false;
    }
    $scope.switchCompleteStatus = (todo) =>{
        let todoIndex = $scope.todos.indexOf(todo);
        $scope.todos[todoIndex].completed = !$scope.todos[todoIndex].completed;
    };
    $scope.deleteTodo = (todo) => {
        let todoIndex = $scope.todos.indexOf(todo);
        $scope.todos.splice(todoIndex,1);
    };
 
}]);