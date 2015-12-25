
function getRadius() {
	var r = document.getElementById("radius").value;
	return r;
}

function volumeOfSphere(radius) {
	var volume = (4/3)*Math.PI*Math.pow(radius, 3);

	var elem = document.getElementById("volume");
	elem.value = volume;
}

// console.log('The volume of a sphere with a radius of 5 is: ', volumeOfSphere(5));