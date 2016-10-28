d3.json('http://d3.workergnome.com/examples/basic_map/data.geojson', function(loaded_data) {

  data = loaded_data;

  var projection = d3.geoMercator()
    .center([-80.0, 40.44])
    .scale(110000)
    .translate([width / 2, height / 2]);

  svg.append('path')
    .datum(topojson.feature(data, data.objects.data))
    .attr('d', d3.geoPath().projection(projection))
    .attr("stroke", "white")

});