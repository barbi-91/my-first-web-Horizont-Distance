"use strict"
let HDistance = 0;
let firstButtonClick = false;

function unitHandler() {
	if (firstButtonClick === true) {
		Calc();
	}
}
function Calc() {

	let ObsHeight = parseFloat(document.getElementById('hgt').value);
	let ResultObj = document.getElementById('dist');

	if (isNaN(ObsHeight)) {
		ResultObj.style.backgroundColor = '#c00';
		ResultObj.style.color = '#FFF';
		ResultObj.innerHTML = 'Enter a numerical value in the height box';
		firstButtonClick = false;
		return;
	}
	if (ObsHeight < 0) {
		ResultObj.style.backgroundColor = '#c00';
		ResultObj.style.color = '#FFF';
		ResultObj.innerHTML = 'Enter a positive height, the horizon cannot be seen when underground.';
		firstButtonClick = false;
		return;
	}

	// Check radio button selection, feet or metres

	isChecked(ObsHeight);
	ResultObj.innerHTML = 'Distance to the horizon ' + HDistance;
	ResultObj.style.backgroundColor = '#F0F9F5';
	ResultObj.style.color = '#000';

	firstButtonClick = true;
}

// Javascript doesn't have a round to one place function
function RoundIt(Value) {
	return (Math.round(Value * 10)) / 10;
}


function isChecked(obsHeight) {
	if (document.getElementById('r1').checked) {
		// This calculation is used when the input is in metres
		var pyth = Math.pow(obsHeight + 6378137, 2) - 40680631590769;
		HDistance = RoundIt(Math.sqrt(pyth) / 1000) + ' Kilometres';
		return HDistance;

	} else {
		// This calculation is used when the input is in feet
		pyth = Math.pow(obsHeight + 20925392, 2) - 437872030353664;
		HDistance = RoundIt(Math.sqrt(pyth) / 5280) + ' Miles';
		return HDistance;
	}
}