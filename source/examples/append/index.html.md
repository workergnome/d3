---
title: Appending Objects
order: 1
---

This example introduces how to create new DOM nodes using D3.  It uses the `append()` function, which adds a DOM node to another node. 

 This example also demonstrates function chaining, which is an important concept for D3.  Each D3 call returns the object that it's operating on, so you can repeatedly call functions:

    circle.attr("cy", 100);
    circle.attr("cx", 100);

Is the same as:

    circle.attr("cy", 100).attr("cx", 100);
