window.onload=function(){
		var canvas1 = document.getElementById("canvas1");
		var canvas2 = document.getElementById("canvas2");
		var canvas3 = document.getElementById("canvas3");

		var ctx1 =canvas1.getContext("2d");
		var color1="#47bac1"

		var ctx2 =canvas2.getContext("2d");
		var color2="#15a4fa"

		var ctx3 =canvas3.getContext("2d");
		var color3="#ae69af"

		var txt=0
		var count=0
		forTestCanvas(ctx1,canvas1, color1);
		forTestCanvas(ctx2,canvas2, color2);
		forTestCanvas(ctx3,canvas3, color3);
		function forTestCanvas(ctx,canvas,color){
		var W= canvas.width;
		var H= canvas.height;
		var degrees =0;
		var new_degrees=0;
		var difference= 0 ;
		var bgcolor= "#d9e4eb"
		var text;
		var animation_loop,redraw_loop;
		// background 
		function init(ctxcopy,canvascopy){
			ctx.clearRect(0,0,W,H);

			ctx.beginPath();
			ctx.strokeStyle= bgcolor;
			ctx.lineWidth=10;
			ctx.arc(W/3,H/2,60,0,Math.PI*2,false);
			ctx.stroke();


			var radians = degrees * Math.PI/180;
			ctx.beginPath();
			ctx.strokeStyle= color;
			ctx.lineWidth=10;
			ctx.arc(W/3,H/2,60,0 - 90*Math.PI/180, radians-90*Math.PI/180,false);
			ctx.stroke();
			//Add the text in center 
			ctx.fillStyle="#596679";
			ctx.font="30px arila";
			text= (Math.floor(degrees/360*100)+3) *20;
			//    span text edit
			count++;
			txt+=text;
			if (count>2) {
				$(".charts_footer div span span").text(txt)
				txt=0;
				count=0;
			}
			//    end span text edit
			text_width=ctx.measureText(text).width;
			ctx.fillText(text,W/2.3-text_width,H/2+15); 
		}
		function draw(){
			new_degrees=Math.round(Math.random()*360);
			difference = new_degrees-degrees;
			//This will animate the gauge to new positions
			//The animation will take 1 second
			//time for each frame is1 second / difference in degrees
			animation_loop = setInterval(animate_to,10);
		}
		function animate_to(){
			if(degrees<new_degrees){
				degrees++;
			}
			else
			{
				clearInterval(animation_loop);
			}
			init(ctx,canvas);
		}
		draw();
	}
}



$(document).ready(function(){

		myArr=[];

	for (var i =0; i< $("#left .categoriesList ul li").length; i++) {
			myArr.push($("#left .categoriesList ul li")[i])
		}



	$("#left .categoriesList ul li").click(function(a) {
		
		$("#left .categoriesList input").attr('checked', false);
		var z= myArr.indexOf(a)
		// $("#left .categoriesList input")[z].attr('checked', true);
		console.log(z)
	});
	




var chart = AmCharts.makeChart( "chartdiv-right", {
  "type": "serial",
  "theme": "light",
  "columnSpacing": 19,
	"columnSpacing3D": 2,
	"columnWidth": 0.18,
	"maxSelectedTime": 5,
	"minSelectedTime": 7,
	"startDuration": 1,
  "dataProvider": [ {
    "day": "S",
    "visits": 50
  }, {
    "day": "M",
    "visits": 250
  }, {
    "day": "T",
    "visits": 300
  }, {
    "day": "W",
    "visits": 382
  }, {
    "day": "T",
    "visits": 180
  }, {
    "day": "F",
    "visits": 200
  }, {
    "day": "S",
    "visits": 100
  }, {
    "day": "S",
    "visits": 50
  }, {
    "day": "M",
    "visits": 300
  }, {
    "day": "T",
    "visits": 402
  }, {
    "day": "W",
    "visits": 250
  }, {
    "day": "T",
    "visits": 200
  },{
    "day": "F",
    "visits": 150
  },{
    "day": "S",
    "visits": 100
  } ],
  "valueAxes": [ {
    "gridColor": "#FFFFFF",
    "gridAlpha": 0.2,
    "dashLength": 0,
    "columnSpacing": 3
  } ],
  "gridAboveGraphs": true,
  "startDuration": 1,
  "graphs": [ {
    "balloonText": "[[category]]: <b>[[value]]</b>",
    "fillAlphas": 0.8,
    "lineAlpha": 0.8,
    "type": "column",
    "valueField": "visits"
  } ],
  "chartCursor": {
    "categoryBalloonEnabled": false,
    "cursorAlpha": 0,
    "zoomable": true
  },
  "categoryField": "day",
  "categoryAxis": {
    "gridPosition": "start",
    "gridAlpha": 0,
    "tickPosition": "start",
    "tickLength": 20
  },
  "export": {
    "enabled": true
  }

} );



// for list click 
$(".headerRight .col-md-12 ul li").click(function(event) {
	$(".headerRight .col-md-12 ul li").css({
		"borderBottomColor": 'transparent',
		"color": '#8a95a5'
	});
	$(this).css({
		"borderBottomColor": '#15a4fa',
		"color": 'black'
	});

	/* Act on the event */
});


});
var z=true;
$( "#fa-angle-down" ).click(function() {
	$(".charts").fadeToggle('slow', function() {
	});
	if(z){
		$(this).addClass('fa-angle-down');
		z=false;
	}
	else{
		$(this).removeClass('fa-angle-down')
		z=true;
	}

	/* Act on the event */
});
