---
title: The General Update Pattern
order: 22
---

This example shows the very basics of the D3 data binding system, which creates selections via data joins.  

A set of `circle` elements are initialized with `data`, which creates the three selections:

* The `enter` selection: elements that did not previously exist.  
* The `update` selection: elements that currently exist.
* The `exit` selection: elements that exist, but have no longer have data.


In this code, for each element in the `enter` group, we append a new `circle` element. We then calculate its properties from the data that has been joined with it.