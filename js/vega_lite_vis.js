var vg_1 = "js/area_chart.vg.json";
var vg_2="js/migrant_population_choropleth.vg.json"

vegaEmbed("#area_chart", vg_1).then(function(result) {
// Access the Vega view instance
// (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

vegaEmbed("#choropleth", vg_2).then(function(result) {
    }).catch(console.error);
