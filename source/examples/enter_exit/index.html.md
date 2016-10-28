---
title: Enter and Exit
order: 23
---

D3 provides the `exit()` selection that allows us to handle nodes that are on screen, but where the data that they've been bound to no longer exists.

We've adjusted our slider so it no longer controls the y position of our circles.  Instead, the `slider.on('input')` handler follows these rules:

* If the data array has more elements that the slider value, remove elements until they're the same length. 
* If the data array has fewer elements that the slider value, add new elements (with values generated with [`d3.randomUniform()`](https://github.com/d3/d3-random/blob/master/README.md#randomUniform) until the're the same length.

By modifying the length of the `data` variable like this, calling the `update()` function now has to both add and remove elements. 
