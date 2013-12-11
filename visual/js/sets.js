// JavaScript Document
var sets;
var usedsets=["DSFDSF"]
function AddSets (data){
  //console.log("Adding the dataset");
  console.log(data);
  
  sets=d3.select("#sets")
  elements = sets.selectAll('span').data(data)
	 .enter()
	 .append("span")
	 .text( function (d) { return d; })
	 .attr("class", function (d) { return ((usedsets.indexOf(d)==-1) ? "notused" : "used" )})
	.style("opacity", 0)
	.transition()
	.duration(500)
	.delay(function(d, i) { return i*1; })
	.ease("linear")
	.style("opacity", 1)


}

function RemoveSets(){
	console.log("Removing datasets");
	var transition = d3.transition()
		.duration(1000)
		.ease("linear");
	transition.each(function() {
	  d3.selectAll("#sets .notused").transition()
		  .style("opacity", 0)
	
	d3.selectAll("#sets .used").transition()
		  .style("font-size", "14px")
		  .style("font-weight", "800")
		  
	d3.select(".usedsets_info").transition()
	.duration(1000)
	.delay(1000)
	.ease("linear")
	.style("opacity", 1);
		  
	});	
}

$(function() {
$("#run_sets1").click(function() {
	d3.json("sets.json", function(error, json) {
  if (error) return console.warn(error);
  data = json;
  $("#sets").empty();
  AddSets(data);
	});	
});

$("#run_sets2").click(function() {
  RemoveSets();
});

});