// JavaScript Document

function selectData()
{
var trait1=document.getElementById("trait1");
var trait2=document.getElementById("trait2");
var trait3=document.getElementById("trait3");
var trait4=document.getElementById("trait4");
traits=[]
traits[0]=trait1.options[trait1.selectedIndex].text;
traits[1]=trait2.options[trait2.selectedIndex].text;
traits[2]=trait3.options[trait3.selectedIndex].text;
traits[3]=trait4.options[trait4.selectedIndex].text;
console.log(traits);
initIris(traits);	
}

function getWidth(flowval){
		var flow= Math.abs(flowval);
		return (flow*10)-3;
}
var dataset ={'gold_price':'BUNDESBANK/BBK01_WT5511.1',
        'usd_to_pound':'QUANDL/USDGBP.1',
        'cpi':'FRED/CPIAUCSL.1',
        'unemployment':'FRED/UNRATE.1',
        'gas_price':'BTS_MM/RETAILGAS.1',
        'volatility':'YAHOO/INDEX_VIX.6',
        'house_sales':'FRED/HSN1F.1',
        'usd_to_euro':'QUANDL/USDEUR.1',
        'crude_futures':'OFDP/FUTURE_CL2.1',
        'housing_prices':'FRED/ASPTFC.1',
        'gas_futures':'OFDP/FUTURE_NG1.2',
        '10-year_treasury':'FRED/DGS10',
        'corporate_profits':'FRED/CP',
        'wheat_futures':'OFDP/FUTURE_W1.5',
        'gdp':'FRED/GDP',
        'treasury_futures':'OFDP.FUTURE_US1.1',
        'inv_sales_ratio':'FRED/ISRATIO',
        'iron_ore':'WORLDBANK/WLD_IRON_ORE.1',
        'retail_and_food':'FRED/RSAFS.1',
        's_and_p_500':'YAHOO.INDEX_GSPC.6'};
var weights = [[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[.08,-.32,-.29,-.47,.30,.22,.35,-.47,.24,-.33,.10,.19,.34,-.17,-.34,-.24,-.04,-.30,.38,.16,.03],[.10,-.40,.18,.22,.41,-.38,-.05,-.38,.22,.43,-.40,.49,-.13,.46,.42,-.09,-.15,-.41,.12,.07,-.45],[-.33,-.19,-.09,.47,-.05,.39,.07,-.48,-.38,.08,.26,.31,.22,-.22,-.39,.14,-.39,-.18,.33,.22,-.23],[-.29,.39,-.46,.36,-.17,.01,-.42,.20,-.17,.01,.18,.08,.01,.14,.14,.37,.18,.17,.20,.01,.49],[.21,-.27,.26,-.07,-.06,-.12,-.03,-.10,.17,.46,.25,-.12,-.10,-.02,.20,.23,-.14,-.47,.15,.28,-.04],[.37,.17,.24,.44,.21,.47,-.02,.39,.01,.22,-.27,-.36,.21,.34,-.31,.49,.26,-.32,-.39,-.20,-.46],[-.13,.34,-.32,-.28,.35,.45,.42,.40,-.34,-.47,.40,.18,-.10,-.33,.21,.42,-.24,-.25,.37,-.19,.12],[.37,.30,.38,.26,-.17,-.13,.14,.35,-.41,-.29,.11,.36,.18,.46,-.42,.31,.28,.35,.02,-.02,.15],[.20,.30,.13,-.15,-.11,.26,-.38,-.44,0,-.11,-.48,-.07,-.07,-.26,-.36,-.46,-.22,.19,-.20,-.05,-.37],[.01,-.47,-.07,.21,.26,-.50,.30,.01,.27,.26,.36,.05,.38,-.29,-.36,.07,-.35,.46,-.27,.26,-.33],[.33,-.01,-.44,.18,.06,.12,-.25,.37,.10,-.10,-.18,.42,-.31,-.19,.37,-.03,.37,.45,-.49,-.11,.24],[-.40,.17,.38,-.24,0,.50,-.20,.43,.02,-.21,-.26,.09,-.37,-.50,.42,-.02,-.02,.42,.36,.09,-.34],[.21,-.35,.19,.37,-.12,-.15,.33,-.41,-.22,.05,.08,-.37,.34,.11,-.12,.32,.48,-.42,.46,-.41,-.18],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[-.38,.21,-.41,-.02,-.32,-.33,.23,.38,-.55,-.26,.34,-.28,.14,.05,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]];

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
	//color = "#2D15AD";
	value = weights[layernum+1][i+1][neuronnum]
	color = (value>0)?"#2D15AD":"#D51313";
	width = getWidth(value);
	totalLength = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
	
	append.append("path")
					.attr('d', string)
					.attr('class', 'connection').attr('fill', 'none')
	    	.attr('stroke', color)
	    	.attr('stroke-width', width)
			.attr('stroke-linecap', "butt")
			.attr('opacity', .6)
			.attr("stroke-dasharray", totalLength + " " + totalLength)
		 	.attr("stroke-dashoffset", totalLength)
		  	.transition()
		    .duration(500)
			.delay(function(d, i) { return layernum*500+neuronnum*80; })
		    .ease("linear")
		    .attr("stroke-dashoffset", 0);
	}
}

var possibilities = ["cpi","house sales","gas price","gold price","usd to pound","usd to euro","unemployment,","s and p 500","volatility","cpi pdiff","house sales pdiff","gas price pdiff","gold price pdiff","usd to pound pdiff","usd to euro pdiff","unemployment pdiff","s and p 500 pdiff","volatility pdiff"];
$(function() {
	//Start page loaded functions.
    console.log( "The page has loaded, pagefunctions.js running" );
	$('#introModal').modal()
	
	$('.selectpicker').selectpicker();

	var inputdata = Object.keys(dataset);//["derp",12,6,8,15,18,19,32,54,87,45,50,23,55,34];
	var hiddendata = [10,12,6,8,67,3,6,34,3,43,34,3,43];
 	var outputdata = [10];
	console.log(inputdata);
    svg = d3.select("#mainvis").append('svg');
	
	var xmargin=100;
	var xspace=220;
	var ymargin=50;
	var yspace=30;
	
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
	 .attr("r", 9);
 
	 var nodetext = svg.select("#nodes").selectAll("text")
	 .data(inputdata)
	 .enter()
	 .append("text")
	 
	 var nodelabels = nodetext.attr("x", function(d) { return xmargin-60 })
                 .attr("y", function(d, i) {return i * yspace + ymargin+5;})
                .text( function (d) { return d+""; })
                 .attr("font-family", "sans-serif")
                 .attr("font-size", "10px")
                 .attr("fill", "#444")
				 .attr("text-anchor","middle");
 	
	 layercircles=svg.select("#nodes").selectAll("derp1")
    	.data(hiddendata)
  		.enter().append("circle")
	 .attr("cy", function(d, i) {return i * yspace + ymargin+.5*yspace;})
	 .attr("cx", xmargin+xspace)
	 .attr("stroke", "#bbbbbb")
	 .attr("fill","#cccccc")
	 .attr("r", 10);
	 
	 outputcircles=svg.select("#nodes").selectAll("derp2")
    	.data(outputdata)
  		.enter().append("circle")
	 .attr("cy", function(d, i) {return i * yspace + ymargin + 1*yspace;})
	 .attr("cx", xmargin+2*xspace)
	 .attr("stroke", "#bbbbbb")
	 .attr("fill","#cccccc")
	 .attr("r", 20);
 	
	$( "#run_nn" ).click(function() {
		//console.log("Run button started");
		$("#resultnote").fadeIn();
		//Clearing all previous links
		svg.select("#links").selectAll("path").remove();
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

	console.log("Loading initial iris");
	initIris(["house sales", "gas price", "gold price", "usd to euro"]);	

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