---
title: Introduction to Selectors
order: 20
---

D3 provides the ability to select a group of nodes using [W3C Selector Strings](http://www.w3.org/TR/selectors-api/).[^1] The two primary selectors are [`select()`](https://github.com/d3/d3-selection/blob/master/README.md#selection_select) and [`selectAll()`](https://github.com/d3/d3-selection/blob/master/README.md#selection_selectAll).

These selectors can be used against the entire document, if called as `d3.selectAll('circle')`, or against existing selections like our `svg` element as `svg.selectAll('circle')`.  The first form will select all `circle` elements in the document, the second will only select all `circle` elements within the `svg` group.  The elements returned are called a **selection**.

Attributes, styles, and properties applied to a selection are applied to all elements within the selection:

    svg.selectAll("circle").attr("cy", 50);

will set all of the circle's `cy` attributes to be equal to 50.

This, combined with an update function, gives us a powerful, concise way to update many objects simultaneously.  However, in this example we're still creating all of the circles individually.  D3 gives us an even more powerful technique, which we'll explore in the next example.

[^1]: You may know these from jQuery or from CSS.  They're pretty universal in the web world.  