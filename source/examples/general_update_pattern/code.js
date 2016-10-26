// Define our scales
var x = d3.scaleLinear().domain([0, 1]).range([0, width]);
var y = d3.scaleLinear().domain([0, 100]).range([0, height]);

// Set up the slider (Same as before, just visually condensed)
var slider = parent.append('input')
  .attr("type", "range").style("width", "100%")
  .attr("min",0).attr("max",100).attr("value",0);
slider.on("input", function(){ update(this.value)});

// The new update function (this time, using selectors!)
function update(sliderValue) {
  var circle = svg.selectAll("circle").data(data);
  circle.enter()
    .append("circle")
      .attr("cx", function(d, i, nodes) {return x( (i+0.5)/nodes.length )})
      .attr("r", function(d) { return Math.sqrt(d) })
    .merge(circle)
      .attr("cy", y(sliderValue));
}

// Initialize with the slider's initial value
update(slider.attr("value"));