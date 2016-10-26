var circle = svg.append("circle");
var slider = parent.append('input')
  .attr("type", "range")
  .attr("min",0)
  .attr("max",100)         // <-- THIS HAS CHANGED FROM width TO 100
  .attr("value",0)
  .style("width", "100%");

// This has the same functionality as previous example, it's just condensed.
slider.on("input", function(){ update(this.value)});
update(slider.attr("value"));

var x = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width]);

var y = d3.scalePow().exponent(2)
    .domain([0, 100])
    .range([0, height]);

var c = d3.scaleSequential(d3.interpolateInferno)
    .domain([0, 100]);

function update(new_data) {
  circle.datum(new_data) 
  .attr("r", 50) 
  .attr("cx", x)          // <-- Call the x() function, passing in the datum
  .attr("cy", y)          // <-- Call the y() function, passing in the datum
  .attr("fill", c);       // <-- Call the c() function, passing in the datum
}