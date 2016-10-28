// Format Data
var dataElement = document.getElementById("data-display");
var original_data = null;
var intervalKeeper;
if (data) {
  original_data = data;
  dataElement.innerHTML = "var data = " + JSON.stringify(data, null, '  ');
  hljs.highlightBlock(dataElement);
} else {
  intervalKeeper = window.setInterval(function(){
    if (data) {
      dataElement.innerHTML = "var data = " + JSON.stringify(data, null, '  ');
      hljs.highlightBlock(dataElement);
      window.clearInterval(intervalKeeper);
    }
  },100)
}

// Format Code
var xmlhttp= new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var code = document.getElementById("code-display");
        code.innerHTML = xmlhttp.responseText;
        hljs.highlightBlock(code);

        var fake_js = "/************************************\n*    HIDDEN INITIALIZATION BLOCK    *\n************************************/\n\n// Select the DOM element\nvar parent = d3.select(\"#visualization\");\n\n// Set up the margins\nvar bbox   = parent.node().getBoundingClientRect();\nvar margin = {top: 50, right: 50, bottom: 50, left: 50};\nvar width  = +bbox.width - margin.left - margin.right;\nvar height = +bbox.height - margin.top - margin.bottom;\n\n// Define svg as a group within the base SVG.\nvar svg = parent.select(\"svg\").append(\"g\")\n    .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");\n\n/************************************\n*  END HIDDEN INITIALIZATION BLOCK  *\n************************************/\n\n";
        fake_js += "var data = " + JSON.stringify(original_data, null, '  ') + ";\n\n";
        fake_js += xmlhttp.responseText;

        var codepen = {
          "title": document.title,
          "editors": "001",
          "layout":  "right",
          "html":    "<div id='visualization'>\n\t<svg width='100%' height='100%'></svg>\n</div>",
          "css":     "body {background-color: #ccc;} #visualization {margin: 50px; width: 500px; height: 400px; border-radius: 4px; border: 1px solid #eee; background-color: #fff; }",
          "js":      fake_js,
          "js_external": "https://d3js.org/d3.v4.js"
        }
        var codepen_json = JSON.stringify(codepen);
        document.getElementById("codepen_submit").setAttribute("value", codepen_json);


        var starterKit = "<!DOCTYPE html>\n<html lang='en'>\n  <head>\n    <style type='text/css'>\n      body {background-color: #ccc;} \n      #visualization {\n        margin: 50px; \n        width: 500px; \n        height: 400px; \n        border-radius: 4px; \n        border: 1px solid #eee; \n        background-color: #fff; \n      }\n    </style>\n  </head>\n  <body>\n\n    <div id='visualization'>\n      <svg width='100%' height='100%'></svg>\n    </div>\n\n    <script src='https://d3js.org/d3.v4.js'></script>\n    <script type='text/javascript'>\nREPLACE_ME\n    </script>\n  </body>\n</html>";
        starterKit = starterKit.replace("REPLACE_ME",fake_js.replace(/^(.*)$/gm, "        $1" ));

        window.URL = window.URL || window.webkitURL ;

        var bb = new Blob([starterKit], {type: 'text/html'});
        var a = document.createElement('a');
        a.download = "d3_example_"+window.location.pathname.split("/")[2]+".html";
        a.href = window.URL.createObjectURL(bb);
        a.textContent = 'Download as HTML';
        a.classList.add('button');
        document.getElementById("example-buttons").appendChild(a);

    }
}
xmlhttp.open("GET", "code.js", true);
xmlhttp.send();

