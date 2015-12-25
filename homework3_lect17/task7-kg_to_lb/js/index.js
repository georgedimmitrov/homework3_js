function getInput() {
	var input = document.getElementById("convert").value;

	return input;
}

function convertToLBs(input) {
	var output = input * 2.20462262;

	var element = document.getElementById("converted");
	element.value = output;
}

function convertToKGs(input) {
	var output = input / 2.20462262;

	var element = document.getElementById("converted");
	element.value = output;
}

var inpUser = 'kg';
var outUser;

function changeFunc() {
	var inputType = document.getElementById("from");
	inpUser = inputType.options[inputType.selectedIndex].value;
	
	var btn = document.getElementById("btn");

	if (inpUser == 'lb') {
		btn.setAttribute('onclick', 'convertToKGs(getInput())');
	} 
	// ako se mahne else-a, moje da se schupi ako go napravim na kg
	// , posle na lb, posle vurnem na kg, ot druga strana se povtarq kod tei..
	else {
		btn.setAttribute('onclick', 'convertToLBs(getInput());');
	}
}

btn.setAttribute('onclick', 'convertToLBs(getInput());');
