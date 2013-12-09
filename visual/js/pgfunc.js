// JavaScript Document



$(function() {
    console.log( "The page has loaded, pagefunctions.js running" );
	$('#introModal').modal()
	inputdata = [10,12,6,8,15,18,19,32,54,87,45,50,23,55,34];
	hiddendata = [10,12,6,8,67,3,6];
 	outputdata = [10];
	
    mainSVG = d3.select("#mainvis").append('svg');
	
	var xmargin=70;
	var xspace=80;
	var ymargin=50;
	var yspace=40;
		 
	inputcircles=mainSVG.selectAll("circle");
	
	inputcircles
	 .data(inputdata)
	 .enter().append("circle")
	 .attr("cy", function(d, i) {return i * yspace + ymargin;})
	 .attr("cx", xmargin)
	 .attr("stroke", "#bbbbbb")
	 .attr("fill","#cccccc")
	 .attr("r", 15);
 
	 var nodetext = mainSVG.selectAll("text")
	 .data(inputdata)
	 .enter()
	 .append("text")
	 
	 var nodelabels = nodetext.attr("x", function(d) { return xmargin })
                 .attr("y", function(d, i) {return i * yspace + ymargin+5;})
                .text( function (d) { return d+""; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "12px")
                 .attr("fill", "#333")
				 .attr("text-anchor","middle");
 	
	 layercircles=mainSVG.selectAll("derp1")
    	.data(hiddendata)
  		.enter().append("circle")
	 .attr("cy", function(d, i) {return i * yspace + ymargin+.5*yspace;})
	 .attr("cx", xmargin+xspace)
	 .attr("stroke", "#bbbbbb")
	 .attr("fill","#cccccc")
	 .attr("r", 15);
	 
	 outputcircles=mainSVG.selectAll("derp2")
    	.data(outputdata)
  		.enter().append("circle")
	 .attr("cy", function(d, i) {return i * yspace + ymargin + 1*yspace;})
	 .attr("cx", xmargin+2*xspace)
	 .attr("stroke", "#bbbbbb")
	 .attr("fill","#cccccc")
	 .attr("r", 15);
 	
	
 
});