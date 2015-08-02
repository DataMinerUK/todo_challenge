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
```

Here are some other user stories you may choose to implement:

```
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

* You need an `as` alias for your controller so as not to have to use `$scope` everywhere
* Stackoverflow answers mostly have the `$scope` used
* Leave styling conditions to CSS and not Angular
* When passing in Angular type object to the controller there is no need for `{{}}`
* `ng-repeat` does not allow for duplications
* Use `var` name in the Angular scripts and the name passed into the `()` in `index.html`
