---
title: Functions As Attributes
order: 2
---

This example demonstrates how you can use functions instead of literals to set the attributes of nodes.

Each property is set to the returned value of the function.  However, notice that if you resize the window, the circle doesn't change position.  

Also the `svg` object  wer're using is technically is a [SVG Group Element](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g), which is a wrapper much like a `div` in HTML.

This `svg` object, as well as the `margin` object and `width` &amp; `height` properties are set in javascript as part of a [ initialization block](/globals/init.js) which is the same for every example on this site, so we're hiding it. They're not not part of the D3 library; however, they are very much a [standard practice](http://bl.ocks.org/mbostock/3019563) and almost all examples you find will use the convention.
