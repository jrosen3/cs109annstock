// JavaScript Document



$(function() {
    console.log( "The page has loaded, pagefunctions.js running" );
	$('#introModal').modal()
	inputdata = [10,12,6,8,15];
	hiddendata = [10,12,6,8,15];
 
    selectDIV = d3.select("#visualization");
		 
	inputcircles=selectDIV.selectAll("circle");
	
	inputcircles
	 .data(inputdata)
	 .enter()
	 .append("circle");
	 
	selectDIV.selectAll("circle")
	 .attr("cy", function(d, i) {return i * 80 + 50;})
	 .attr("cx", 50)
	 .attr("stroke", "blue")
	 .attr("r", 20);
 	
	 layercircles=selectDIV
    	.data(hiddendata)
  		.enter().append("circle")
	 .attr("cy", function(d, i) {return i * 80 + 90;})
	 .attr("cx", 80)
	 .attr("stroke", "blue")
	 .attr("r", 20);
 	
 
});