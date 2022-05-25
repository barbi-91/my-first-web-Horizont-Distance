"use strict"
function Calc(){
	var HDistance = 0;
	var ObsHeight = parseFloat(document.getElementById('hgt').value);
	var ResultObj = document.getElementById('dist');
	// var messageText = document.getElementById('messageText');
	if(isNaN(ObsHeight)){
		ResultObj.style.backgroundColor = '#c00';
		ResultObj.style.color = '#FFF';

		ResultObj.innerHTML = 'Enter a numerical value in the height box';
		return;
	}
	if(ObsHeight < 0){
		ResultObj.style.backgroundColor = '#c00';
		ResultObj.innerHTML = 'Enter a positive height, the horizon cannot be seen when underground.';
		return;
	}
			// Check radio button selection, feet or metres
	if(document.getElementById('r1').checked){
			// This calculation is used when the input is in metres
		var pyth = Math.pow(ObsHeight + 6378137, 2) - 40680631590769;
		HDistance = RoundIt(Math.sqrt(pyth)/1000 ) + ' Kilometres';

	}else{
			// This calculation is used when the input is in feet
		pyth = Math.pow(ObsHeight + 20925392, 2) - 437872030353664;
		HDistance = RoundIt(Math.sqrt(pyth)/5280) + ' Miles';
	}
	ResultObj.innerHTML = 'Distance to the horizon ' + HDistance;
}




// Javascript doesn't have a round to one place function
function RoundIt(Value)
{
	return(Math.round(Value * 10)) / 10;
}
s