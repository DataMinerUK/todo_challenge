toDo.controller('ToDoCtrl', [function() {
  var self = this;
  self.toDoList = [];
  self.completed = [];
  self.tasksRemaining = 0;
  self.addTask = function() {
    self.toDoList.push(self.task)
    self.task = ''
    // console.log(self.completed)
    // console.log(self.toDoList)
  }
  self.removeTask = function(index) {
    var taskInQuestion = self.toDoList[index]
    self.toDoList.splice(index,1)
    if (self.completed.indexOf(taskInQuestion) > -1) {
      var index = self.completed.indexOf(taskInQuestion)
      self.completed.splice(index,1)
    }
    // console.log(self.completed)
    // console.log(self.toDoList)
  }

  self.completeTask = function(index) {
    var taskCompleted = self.toDoList[index]
    if (self.completed.indexOf(taskCompleted) === -1) {
      self.completed.push(taskCompleted)
    }
    // console.log(self.completed)
    // console.log(self.toDoList)
  }

  self.tasksLeft = function() {
    self.tasksRemaining = self.toDoList.length - self.completed.length
    return self.tasksRemaining
  }

  self.removeCompleted = function() {
    self.toDoList = self.toDoList.filter( function( el ) {
      return self.completed.indexOf( el ) < 0;
    });
    self.completed = []
  }

  self.filterComplete = function(item) {
    if (self.completed.indexOf(item) > -1) {
      return true
    }
    return false
  }

  self.filterActive = function(item) {
    if (self.completed.indexOf(item) === -1) {
      return true
    }
    return false
  }

  self.isCompleted = function(item) {
    if (self.completed.indexOf(item) > -1) {
      return true
    }
    return false
  }

}]);
