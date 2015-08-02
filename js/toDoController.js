toDo.controller('ToDoCtrl', [function() {
  var self = this;
  self.toDoList = [];
  self.addTask = function() {
    self.toDoList.push(self.task)
    self.task = ''
  }
}]);
