var circle = svg.append("circle");

// Create a slider.
var slider = parent.append('input')
  .attr("type", "range")
  .attr("min","0")
  .attr("max",width)
  .attr("value",0)
  .style("width", "100%");

// Set up an event handler for the slider
slider.on("input", handleInput);

// the event handler function
function handleInput(){
  var eventData = this.value;
  update(eventData);
}

// Initialize the circle
var initialData = slider.attr("value");
update(initialData);

function update(new_data) {
  circle.datum(new_data) 
  .attr("r", 50) 
  .attr("cx", function(d){ return d;})
  .attr("cy", function(d){ return d/2;});  
}