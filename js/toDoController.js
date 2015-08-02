toDo.controller('ToDoCtrl', [function() {
  var self = this;
  self.toDoList = [];
  self.completed = [];
  self.tasksRemaining = 0;
  self.addTask = function() {
    if (self.toDoList.indexOf(self.task) > -1) { self.task += ' '}
    self.toDoList.push(self.task)
    self.task = ''
    // console.log(self.completed)
    // console.log(self.toDoList)
  }
  self.removeTask = function(item) {
    var index = self.toDoList.indexOf(item)
    self.toDoList.splice(index,1)
    if (self.completed.indexOf(item) > -1) {
      var index = self.completed.indexOf(item)
      self.completed.splice(index,1)
    }
    // console.log(self.completed)
    // console.log(self.toDoList)
  }

  self.completeTask = function(item) {
    if (self.completed.indexOf(item) === -1) {
      self.completed.push(item)
    }
    else {
      var index = self.completed.indexOf(item)
      self.completed.splice(index,1)
    }
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
