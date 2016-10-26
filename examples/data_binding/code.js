// Create the circle (with data!)
var circle = svg.append("circle")
    .datum(data)
    .attr("cx", function(d){ return d.x;})
    .attr("cy", function(d){ return d.y;})
    .attr("r", 50);