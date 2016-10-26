// Define our scales
var x = d3.scaleLinear().domain([0, 100]).range([0, width]);
var y = d3.scaleLinear().domain([0, 100]).range([0, height]);

// Set up the slider
var slider = parent.append('input')
  .attr("type", "range")
  .attr("min",0)
  .attr("max",100)   
  .attr("value",0)
  .style("width", "100%");
slider.on("input", function(){ update(this.value)});

// Define three circles (We'll discuss a better way to do this soon!)
var circle1 = svg.append("circle")
    .attr("r", 50) 
    .attr("cx", x(25)) 
var circle2 = svg.append("circle")
    .attr("r", 50) 
    .attr("cx", x(50)) 
var circle3 = svg.append("circle")
    .attr("r", 50) 
    .attr("cx", x(75)) 

// The new update function (this time, using selectors!)
function update(newData) {
  svg.selectAll("circle")
      .attr("cy", y(newData))    
}

// Initialize with the slider's initial value
update(slider.attr("value"));