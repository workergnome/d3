// Set up the scales
var x = d3.scaleBand().rangeRound([0, width]).padding(0.1);
var y = d3.scaleLinear().rangeRound([height, 0]);

// Set the domains
x.domain(data.map(function(d) { return d.letter; }));
y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

// Draw the bottom axis
svg.append("g")
    .attr("transform", "translate(0," + (height+4) + ")")
    .call(d3.axisBottom(x));

// Draw the left axis
svg.append("g")
    .attr("transform", "translate(-4,0)")
    .call(d3.axisLeft(y).ticks(10, "%"))

// Draw the bars
svg.selectAll(".bar")
  .data(data)
  .enter().append("rect")
    .attr("class", "bar")
    .attr("x", function(d) { return x(d.letter); })
    .attr("y", function(d) { return y(d.frequency); })
    .attr("width", x.bandwidth())
    .attr("height", function(d) { return height - y(d.frequency); });
