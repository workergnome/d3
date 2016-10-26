---
title: Data Binding in D3
order: 3
---

A key concept in D3 is the idea of binding data to nodes, which you can do with the `datum()` function.  

This associates a data object with the node, and that data object is passed as the first parameter to every attribute function that is called on that object.

For example:

    var data = [{"x": 200}];
    var circle = g.append("circle").datum(data);

binds the `data` variable to the circle, and 

    circle.attr("cx", function(d){ return d.x;});

passes the datum associated with the circle as the parameter `d` into that function.  