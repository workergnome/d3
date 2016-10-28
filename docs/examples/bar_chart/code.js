// define the bar height
var barHeight = height/data.length;

// set up the x scale
var x = d3.scaleLinear().domain([0, d3.max(data)]).range([0, width]);

// Create each bar, select the enter selection, and append a svg group.
var bar = svg.selectAll("g").data(data)
  .enter().append("g") 
    .attr("transform", function(d, i) {     
        return "translate(0," + i * barHeight + ")"; 
    })

// for each of those groups, append a rectangle...
bar.append("rect")
    .attr("height", barHeight - 5)
    .attr("width", x)
    .style("fill", "rebeccapurple")

// ...and some text.
bar.append("text")
    .attr("x", function(d) { return x(d) - 10; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .style("fill", "white")
    .style("text-anchor", "end")
    .text(function(d) { return d; });