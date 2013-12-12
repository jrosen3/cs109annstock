// JavaScript Document
var sets;
var usedsets=['OFDP/FUTURE_NG1.2',
                        'FRED/VTFIRE',
                        'FRED/AKMFG',
                        'FRED/IANRMN',
                        'FRED/MENRMN',
                        'FRED/BEAPLUR',
                        'FRED/DGS10',
                        'OFDP/FUTURE_SP1.2',
                        'FRED/CP',
                        'FRED/UTINFON',
                        'FRED/MINRMN',
                        'OFDP/FUTURE_W1.5',
                        'FRED/IDSRVO',
                        'FRED/GDP',
                        'OFDP.FUTURE_US1.1',
                        'OFDP.FUTURE_US1.2',
                        'FRED/MINRMN',
                        'FRED/ISRATIO']
function AddSets (data){
  //console.log("Adding the dataset");
  console.log(data);
  
  sets=d3.select("#sets")
  elements = sets.selectAll('a').data(data)
	 .enter()
	 .append("a")
	 .text( function (d) { return d })
	 .attr("href",function(d){return 'http://www.quandl.com/'+d})
	 .attr("class", function (d) { return ((usedsets.indexOf(d)==-1) ? "notused" : "used" )})
	.style("opacity", 1);
	/*.transition()
	.duration(300)
	.delay(function(d, i) { return i; })
	.ease("linear")
	.style("opacity", 1)*/


}

function RemoveSets(){
	console.log("Removing datasets");
	var transition = d3.transition()
		.duration(6000)
		.ease("linear");
	transition.each(function() {
	  d3.selectAll("#sets .notused").transition()
		  .style("opacity", .1)
		  .style("height", 1)
		  .style("width", 1)
	
	d3.selectAll("#sets .used").transition()
		  .style("font-size", "12px")
		  .style("font-weight", "800")
		  
	d3.select(".usedsets_info").transition()
	.duration(1000)
	.delay(3000)
	.ease("linear")
	.style("opacity", .9);
		  
	});	
}

$(function() {
$("#run_sets1").click(function() {
	d3.json("sets.json", function(error, json) {
  if (error) return console.warn(error);
  data = json;
  $("#sets").empty();
  AddSets(data.array);
	});	
});

$("#run_sets2").click(function() {
  RemoveSets();
});

});