---
title: Basic Transitions
order: 6
---

One of the most helpful features in D3 is the ability to easily define animated transitions for our elements when their attributes change using the [`transition()`](https://github.com/d3/d3-transition/blob/master/README.md#selection_transition) function.

For a transition, we can define a [`duration()`](https://github.com/d3/d3-transition/blob/master/README.md#transition_duration) , which is the number of millisecond that the transition takes place over.  

We can also define an [`ease()`](https://github.com/d3/d3-transition/blob/master/README.md#transition_ease), which is a function that takes a value between 0 and 1 and returns a value (typically) between 0 and 1. D3 comes with a [bunch of built in easing functions](https://github.com/d3/d3-ease), and you can roll your own if you need to.

Transitions only affect the attributes set after them—in our example, we've moved the radius to before the transition so that it doesn't animate.

By default, D3 does a good job of guessing how to interpolate between the start and end values.  If you'd like to explicitly define an how to interpolate, you can use the [`attrTween()`](https://github.com/d3/d3-transition/blob/master/README.md#transition_attrTween) function.

For more information on transitions, see <https://bost.ocks.org/mike/transition/>.

