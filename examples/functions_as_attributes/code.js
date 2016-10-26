// Insert the circle
var circle = svg.append("circle")
    .attr("cx", function(){ return width/2;})
    .attr("cy", function(){ return height/2;})
    .attr("r", 50);