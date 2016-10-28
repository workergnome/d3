// Define our scales
var x = d3.scaleLinear().domain([0, 1]).range([0, width]);  //<-- NEW DOMAIN!
var y = d3.scaleLinear().domain([0, 100]).range([0, height]);

// select all the circles, and bind the data
var circle = svg.selectAll("circle").data(data);

// Select the enter group, and create circles for each node in it. 
circle.enter()
  .append("circle")
    .attr("cy", y(50))
    .attr("r", function(d)   { return Math.sqrt(d); })
    .attr("cx",function(d,i) { return x( i/3.0 );   })
