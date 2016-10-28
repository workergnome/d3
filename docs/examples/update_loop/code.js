var circle = svg.append("circle")

// Update function
function update(new_data) {
  circle.datum(new_data)
  .attr("cx", function(d){ return d.x;})
  .attr("cy", function(d){ return d.y;})
  .attr("r", 50);
}

// Generate a random x/y position
function changeData(){
  var data = {
    x: Math.random() * width,
    y: Math.random() * height
  };
  // call update function
  update(data);
}

// Call changeData every 1000 milliseconds.
d3.interval(changeData, 1000);