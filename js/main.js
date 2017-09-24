window.onload=function(){

	//**************  left menu 
	setfunc1=true;
	$("#js_li, #media_li").click(function(event) {
		if(setfunc1){
			$(".js_col_2").css('margin-left', '-300px');
			$(".js_col_2").css('left', '-800px');

			$("#js_li .fa-caret-left, #media_li .fa-caret-left").addClass('fa-caret-right')
			$(".js_col_10").css('width', '100%');
			setfunc1=false;
		}
		else{
			$(".js_col_2").css('margin-left', '0px');
			$(".js_col_2").css('left', '0px');
			if($("#media_li").position().top <17){
				$(".js_col_10").css('width', 'calc(83.33333333% - 6px)');
			}
			$("#js_li .fa-caret-left, #media_li .fa-caret-left").removeClass('fa-caret-right')
			setfunc1=true;
		}
	});



	//****************** canvas 

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
		var bgcolor= "#d9e4eb"
		var text;
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
			//text of canvas center
			ctx.fillStyle="#596679";
			ctx.font="30px arila";
			text= (Math.floor(degrees/360*100)+3) *20;

			//     push span total text 
			count++;
			txt+=text;
			if (count>2) {
				$(".charts_footer div span span").text(txt)
				txt=0;
				count=0;
			}
			// for text of canvas center   -if  (text have   3 string). 
			if(text<1000){
				text+=" "
			}
			//    end span text edit
			text_width=ctx.measureText(text).width;
			ctx.fillText(text,W/2.3-text_width,H/2+15); 
		}
		function draw(){
			new_degrees=Math.round(Math.random()*360);
			var animation_loop = setInterval(animate_to,10);
		}
		function animate_to(){
			if(degrees<new_degrees){
				degrees++;
			}
			init(ctx,canvas);
		}
		draw();
	}
	//***** for input checked
	// var myArr=[];
	// for (var i =0; i< $("#left .categoriesList ul li").length; i++) {
	// 		myArr.push($("#left .categoriesList ul li")[i])
	// 	}

	// $("#left .categoriesList ul li").click(function(fare) {
	// 	//var z= myArr.indexOf(fare)
	// 	//$("#left .categoriesList input")[z].attr('checked', true);
	// 	// $("#left .categoriesList input")[z].attr('checked', true);
	// 	console.log(fare)
	// });

// for list click 
$(".headerRight .col12 ul li").click(function(event) {
	$(".headerRight .col12 ul li").css({
		"borderBottomColor": 'transparent',
		"color": '#8a95a5'
	});
	$(this).css({
		"borderBottomColor": '#15a4fa',
		"color": 'black'
	});
	/* Act on the event */
});


// charts section fadeToogle 

var setDownFunc=true;
$( "#fa-angle-down" ).click(function() {
	$(".charts").fadeToggle('slow', function() {
	});
	if(setDownFunc){
		$(this).addClass('fa-angle-down');
		setDownFunc=false;
	}
	else{
		$(this).removeClass('fa-angle-down')
		setDownFunc=true;
	}

	/* Act on the event */
});



//************ for catch right

 var myArryCount=[50,230,300,382,180,220,100,50,300,380,250,200,150,100]
 var myArryLetter=["S","M","T","W","T","F","S","S","M","T","w","T","F","S"]

 //for clearinterval chartVertical
    var sum=0;
    for (var i=0; i<14;i++){
		var spinner = document.createElement("div");
		spinner.setAttribute('class', 'spinner');
		spinner.style.left=(i+1)*27+"px";
		document.getElementsByClassName("parent")[0].appendChild(spinner);
		var spinnerDiynamic = document.createElement("div");

		// create tooltip for each div 
		var spinnerDiynamicTooltip = document.createElement("span");
		spinnerDiynamicTooltip.setAttribute('class', 'spinnerDiynamicTooltip');
		spinnerDiynamicTooltip.innerHTML="Wednesday,December3 "+myArryCount[i]+"Applicants/" +Math.floor(Math.random()*50)+" Interviews";
		spinnerDiynamic.appendChild(spinnerDiynamicTooltip);

		// for right div tooltip is rotate 90deg
		if(i>10){
			spinnerDiynamicTooltip.style.transform = "rotate(-90deg)";
			spinnerDiynamicTooltip.style.bottom = "20%";
			spinnerDiynamicTooltip.style.left = "-250%";
		}

		//create bottom letter 
		var spinnerDiynamicLetter = document.createElement("span");
		spinnerDiynamicLetter.setAttribute('class', 'spinnerDiynamicLetter');
		spinnerDiynamicLetter.innerHTML= myArryLetter[i];
		spinnerDiynamic.appendChild(spinnerDiynamicLetter);
		


		spinnerDiynamic.style.left=(i+1)*27+"px";
		spinnerDiynamic.setAttribute('class', 'spinnerDiynamic');
		document.getElementsByClassName("parent")[0].appendChild(spinnerDiynamic);
    }
	function chartVertical(){
		sum++;
		for (var i = 0; i < 14; i++) {
			if(document.getElementsByClassName("spinnerDiynamic")[i].offsetHeight >(myArryCount[i]/3))
			{
				if(sum>130){clearInterval(t)}	
			}
			else{
			document.getElementsByClassName("spinnerDiynamic")[i].style.height=document.getElementsByClassName("spinnerDiynamic")[i].offsetHeight+1+"px";
			}
		}
	}
	chartVertical();
	var t= setInterval(chartVertical,10);
}

