
	function scroll(val,el,timeout,step){
		var i=0;
		(function(){
				if (i <= val) {
					setTimeout(arguments.callee,timeout);
					document.getElementById(el).innerHTML=i;
					i = i + step;
				}
				else {
					document.getElementById(el).innerHTML=val;
				}
		})();
	}
		 
	scroll(1537,'dynamic-number',27,28);
	scroll(751,'dynamic-number2',38,16);
	scroll(5285,'dynamic-number3',17,48);
	scroll(81130,'dynamic-number4',10,315);
