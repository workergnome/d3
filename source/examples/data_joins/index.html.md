---
title: Data Joins
order: 21
---

By combining [`selectAll()`](https://github.com/d3/d3-selection/blob/master/README.md#selection_selectAll) and the [`data()`](https://github.com/d3/d3-selection/blob/master/README.md#selection_data) function, we can bind arrays of data to multiple elements at the same time. 

This can be done even if there aren't already nodes to bind to.  The [`enter()`](https://github.com/d3/d3-selection/blob/master/README.md#selection_enter) function returns an array of elements: one for each data point that doesn't have a corresponding node.  We can than append a new node for that element.[^1]

For a complete explanation of how any why data joins are used, see the [Thinking With Joins](https://bost.ocks.org/mike/join/) article.


[^1]: This is a declarative pattern for creating nodes, rather than a functional pattern.  In something like p5.js, you'd probably do the same thing, but with a `for()` loop.