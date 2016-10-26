---
title: Basic Events
order: 10
---

 Like most Javascript libraries, D3 provides an abstraction over the native [DOM events](https://developer.mozilla.org/en-US/docs/Web/Events).

In this example, we create a slider using a HTML [range input](http://www.html5tutorial.info/html5-range.php). We set its attributes using [`attr()`](https://github.com/d3/d3-selection/blob/master/README.md#selection_attr).  We also use [`style()`](https://github.com/d3/d3-selection/blob/master/README.md#selection_style) to set its `width` via CSS.  

Our intention is that moving the slider should update the position of the circle. To do this, we add an event handler to the slider with the D3 [`on()`](https://github.com/d3/d3-selection/blob/master/README.md#selection_on) function, which takes as its arguments an event name and a function[^1], which will be executed every time the event fires.

In out event handler function `onInput()`, we access the `value` property of the range slider, which has been bound to `this`, and pass it as the new data to our `update()` function. 

Notice that we also call `update()` direcctly with an initial value to give the circle an position.

If you're interested in learning more about Javascript and events,  [Eloquent Javascript](http://eloquentjavascript.net/14_event.html) has a chapter that covers them in detail. You can also take a deep dive into how Javascript is designed around an [event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop).





[^1]: The [D3 docs](https://github.com/d3/d3-selection/blob/master/README.md#selection_on) define  the function's signature for `on()`'s event handler as `function(d,i,nodes){};`: where the parameters are the current datum `d`, the current index `i`, and the current group `nodes`.  It also sets `this` to the current DOM element. Javascript, unlike some other languages, ignores arguments that don't match the function signature, so if we've defined `function handleInput(){}`, but we call it with `handleInput(d,i,nodes)`, it still works.  Convenient, though inelegant.  
