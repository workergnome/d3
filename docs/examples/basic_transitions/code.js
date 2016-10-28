var circle = svg.append("circle")

// Update function (Now with a transition!)
function update(new_data) {
  circle.datum(new_data) 
  .attr("r", 50)          // <-- MOVED BEFORE TRANSITION
  .transition()           // <-- NEW CODE
  .duration(1000)         // <-- NEW CODE
  .ease(d3.easeSin)       // <-- NEW CODE
  .attr("cx", function(d){ return d.x;})
  .attr("cy", function(d){ return d.y;});  
}

function changeData(){
  var data = {
    x: Math.random() * width,
    y: Math.random() * height
  };
  update(data);
};

d3.interval(changeData, 1000);