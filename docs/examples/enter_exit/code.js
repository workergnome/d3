// Define our scales
var x = d3.scaleLinear().domain([0, 1]).range([0, width]);
var y = d3.scaleLinear().domain([0, 1]).range([0, height]);

// Set up the slider (now between 0..10)
var slider = parent.append('input')
  .attr("type", "range").style("width", "100%")
  .attr("min",0).attr("max",10).attr("value",0);

// Make the count of numbers in `data` match the slider value
slider.on("input", function(){
  while (data.length > +this.value) {data.pop()}
  while (data.length < +this.value) {data.push(d3.randomUniform(30, 600)())}
  update(data);
});

function update(data) {
  var circle = svg.selectAll("circle").data(data);

  circle.enter()
    .append("circle")
      .attr("cx", function(d, i, nodes) {return x( (i+0.5)/10 )})
      .attr("cy", y(0.5))
      .attr("r", function(d) { return Math.sqrt(d) });

  circle.exit().remove();
}