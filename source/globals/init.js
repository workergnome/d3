/************************************
*    HIDDEN INITIALIZATION BLOCK    *
************************************/

// Select the DOM element
var parent = d3.select("#visualization");

// Set up the margins
var bbox   = parent.node().getBoundingClientRect();
var margin = {top: 50, right: 50, bottom: 50, left: 50};
var width  = +bbox.width - margin.left - margin.right;
var height = +bbox.height - margin.top - margin.bottom;

// Define svg as a group within the base SVG.
var svg = parent.select("svg").append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

/************************************
*  END HIDDEN INITIALIZATION BLOCK  *
************************************/
