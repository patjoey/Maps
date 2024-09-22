var vg_1 = "https://raw.githubusercontent.com/patjoey/Maps/refs/heads/main/js/visualization.vl.json";
vegaEmbed("#bar_chart", vg_1).then(function(result) {
  // Access the Vega view instance
(https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
