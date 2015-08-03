# Todo Challenge

Angular JS app

## Getting Started

```bash
git clone https://github.com/DataMinerUK/todo_challenge.git
cd todo_challenge
npm install
bower install
```

View index.html in your browser

## User Stories

```
As a forgetful person
I want to store my tasks
So that I don't forget them

As a person with limited time
I want to instantly be able to update my todo list (adding and changing entries)
So that I have more time to think about other things

As a person who actually gets stuff done
I want to mark my tasks as done
So that I don't do them twice

As a person with a lot of tasks
I want to be able to filter my tasks by "All", "Active", "Complete"
So that I only see the relevant tasks

As a person who doesn't like counting by hand
I want to see a total number of tasks
So that I don't have to count

As someone who has done lots of stuff
I want to be able to clear my completed tasks
So I never see them again
```

## Lessons Learnt

* Should have wrapped tasks in an object (like `{ description: input, completed: false }`) and not used an array of strings
* You need an `as` alias for your controller so as not to have to use `$scope` everywhere
* Stackoverflow answers mostly have the `$scope` used
* Leave styling conditions to CSS and not Angular
* When passing in Angular type object to the controller there is no need for `{{}}`
* `ng-repeat` does not allow for duplications
* Use `var` name in the Angular scripts and the name passed into the `()` in `index.html`
* An `element` is in an `array` if `array.indexOf(element) >-1`
* An `element` is not in an `array` if `array.indexOf(element) === -1`
* To delete an `element` from an `array` you get the index of the element and then splice the array on the index for one element
```javascript
var index = array.indexOf(element);
array.splice(index, 1);
```
* You cannot delete an array from an array using `-`, that's `NaN`. You should do [it using a filter methods](https://github.com/DataMinerUK/todo_challenge/blob/master/js/toDoController.js#L40-L42) instead
