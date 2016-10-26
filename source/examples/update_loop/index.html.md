---
title: The Update Function
order: 5
---

When dealing with changing data, we typically create an `update()` function, to which we pass new data.

We re-bind the new data to the element and recalulate its properties.  This lets us separate the data update logic from the presentation logic.  In D3 terms, we're updating the **data**, and letting D3 **drive** the updates to the **document**.

We're also introducing the `d3.interval()` function here, which is similar to the `window.setTimeout()` function in javascript, but with some additional functionality that we're not using yet.