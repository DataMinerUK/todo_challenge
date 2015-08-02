toDo.controller('ToDoCtrl', [function() {
  var self = this;
  self.toDoList = [];
  self.addTask = function() {
    self.toDoList.push(self.task)
    self.task = ''
  }
  self.removeTask = function(index) {
    self.toDoList.splice(index,1)
  }
}]);
