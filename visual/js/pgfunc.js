// JavaScript Document

function getWidth(flowval){
		var flow= Math.abs(flowval);
		return flow*2;
}

	function drawLine (layernum, neuronnum, numnext,value, xmargin, xspace, ymargin, yspace, append)
{
	//The layernum, neuronnum are all indexed at ZERO.
	//Numnext = number of neurons in the next row.
	x1=xmargin+(xspace*(layernum));
	y1=ymargin+(yspace*(neuronnum))+(layernum/2)*yspace;
	for(i=0; i< numnext; i++)
	{
		x2=xmargin+(xspace*(layernum+1));
		y2=ymargin+(yspace*(i))+((layernum+1)/2)*yspace;
		
	string = "M"+x1+" "+y1+" "+"L "+x2+" "+y2;
	color = "#2D15AD";
	width = getWidth(value);
	totalLength = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
	
	append.append("path")
					.attr('d', string)
					.attr('class', 'connection').attr('fill', 'none')
	    	.attr('stroke', color)
	    	.attr('stroke-width', width)
			.attr('stroke-linecap', "butt")
			.attr('opacity', '.20')
			.attr("stroke-dasharray", totalLength + " " + totalLength)
		 	.attr("stroke-dashoffset", totalLength)
		  	.transition()
		    .duration(500)
			.delay(function(d, i) { return layernum*500+neuronnum*80; })
		    .ease("linear")
		    .attr("stroke-dashoffset", 0);
	}
}


$(function() {
	
    console.log( "The page has loaded, pagefunctions.js running" );
	$('#introModal').modal()
	var inputdata = [10,12,6,8,15,18,19,32,54,87,45,50,23,55,34];
	var hiddendata = [10,12,6,8,67,3,6];
 	var outputdata = [10];
	
    svg = d3.select("#mainvis").append('svg');
	
	var xmargin=70;
	var xspace=220;
	var ymargin=50;
	var yspace=40;
	
	svg.append("g").attr("id", "links")
	svg.append("g").attr("id", "nodes")

	inputcircles=svg.select("#nodes").selectAll(".node");
	
	inputcircles
	 .data(inputdata)
	 .enter().append("circle")
	 .attr("cy", function(d, i) {return i * yspace + ymargin;})
	 .attr("cx", xmargin)
	 .attr("stroke", "#bbbbbb")
	 .attr("fill","#cccccc")
	 .attr("r", 15);
 
	 var nodetext = svg.select("#nodes").selectAll("text")
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
 	
	 layercircles=svg.select("#nodes").selectAll("derp1")
    	.data(hiddendata)
  		.enter().append("circle")
	 .attr("cy", function(d, i) {return i * yspace + ymargin+.5*yspace;})
	 .attr("cx", xmargin+xspace)
	 .attr("stroke", "#bbbbbb")
	 .attr("fill","#cccccc")
	 .attr("r", 15);
	 
	 outputcircles=svg.select("#nodes").selectAll("derp2")
    	.data(outputdata)
  		.enter().append("circle")
	 .attr("cy", function(d, i) {return i * yspace + ymargin + 1*yspace;})
	 .attr("cx", xmargin+2*xspace)
	 .attr("stroke", "#bbbbbb")
	 .attr("fill","#cccccc")
	 .attr("r", 15);
 	
	$( "#run_nn" ).click(function() {
		console.log("Run button started");
		
		//Clearing all previous links
		svg.select("#links").selectAll("path").remove()
		
		//Drawing links between input and hidden nodes.
		var length = inputdata.length;
  	for(index=0; index<length;index++){
	 console.log("display line",index);
	 drawLine(0, index, hiddendata.length,.5, xmargin, xspace, ymargin, yspace,svg.select("#links"));
	}	
		//Add links between the hidden and output nodes.
			var length = hiddendata.length;
  	for(index=0; index<length;index++){
	 console.log("display line",index);
	 setTimeout(drawLine(1, index, outputdata.length,.5, xmargin, xspace, ymargin, yspace,svg.select("#links")),index*200);
	}	
	
	});


// ==== Set Scroll effects for 'hidme' elements;

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},700);
                    
            }
            
        }); 
    
    });
 
});