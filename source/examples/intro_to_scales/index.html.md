---
title: Introduction to Scales
order: 12
---

One of D3's most important and useful concepts is the [scale](https://github.com/d3/d3-scale), which is a function that maps an input **domain** to an output **range**.[^3]

We've changed our slider so instead of sliding between values of 0 and `width` it now slides between 0 and 100. We'd still like our circle to move all the way across, so we need a way to define that a value of 50 is equal to a x position that's 50% across. 

In graphics libraries like [p5.js](http://p5js.org), there usually a `map()` function for this. D3 goes beyond that to provide a sophisticated system for *generating* map functions. Calling `var x = d3.scaleLinear()`[^4], doesn't return a value, it returns a function that you can call as `x()`.[^1]  

Calling the [`domain()`](https://github.com/d3/d3-scale/blob/master/README.md#continuous_domain) and [`range()`](https://github.com/d3/d3-scale/blob/master/README.md#continuous_range) functions on `x` will set the **input domain** and **output range** for `x`.[^2]  This is useful since `attr()` *takes* functions as a parameter, so we can write `.attr("cx", x)`. This is equivalent to `.attr("cx", function(d){return x(d);})` but much more concise.

For `x`, we are using a linear scale, which maps values linearly from the domain to the range. 0 is mapped to 0, 50 is mapped to 50% of `width`, and 100 is mapped to `width`.  

 For `y`, we're using [`d3.scalePow()`](https://github.com/d3/d3-scale/blob/master/README.md#scalePow), a power scale.  If we set the [`exponent()`](https://github.com/d3/d3-scale/blob/master/README.md#pow_exponent) to 2, interpolates between 0 and 1 with exponential growth. 

We've added a `c` scale for color, which is a [`d3.scaleSequential`](https://github.com/d3/d3-scale/blob/master/README.md#scaleSequential).  These scales map from a domain to a specific range defined by a provided interpolator function.  We're using the [`d3.interpolateInferno`](https://github.com/d3/d3-scale/blob/master/README.md#interpolateInferno) interpolator, which returns specific CSS colors as the range.



[^1]: In Javascript, all functions are *first class* objects, so they can be stored in variables, manipulated, have properties assigned to them, and everything else that you can do with a standard object.  D3 uses this capability constantly—it's one of the things that makes D3 so powerful, but also so confusing to people coming from languages like C.  For a useful overview of functions as first class objects, see [this article](http://timmknight.github.io/2015/first-class-functions-javascript/).

[^2]:  Yes, this is calling a function property assigned to a function object that sets properties on itself.  Javascript is a powerful, strange language, and D3 takes full advantage of it. 

[^3]: For more information on the rationales behind D3 scales, see Mike Bostock's [article introducing D3 Scale](https://medium.com/@mbostock/introducing-d3-scale-61980c51545f).


[^4]: In D3 v.4, Many of the method names have been changed as part of an effort to break the D3 library into reusable parts.  Many of the examples that you see online will use `d3.scale.linear` instead of `d3.scaleLinear`.  For information on this and other changes in D3 v.4, see this amazing postmortem by Mike Bostock: [What Makes Software Good](https://medium.com/@mbostock/what-makes-software-good-943557f8a488).