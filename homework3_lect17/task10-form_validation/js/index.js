function validate() {

	var error = 0;

	var spans = document.getElementsByTagName("span");
	var errName = document.getElementById("errName");
	var errPass = document.getElementById("errPass");
	var name = document.getElementById("regForm").name;
	if (name.value === "") {

		// errName.setAttribute("style", "visibility: visible");
		errName.style.visibility = "visible";
		name.style.backgroundColor = "#D81414";
		name.style.color = "#fff";
		error = 1;
	} else {
		errName.style.visibility = "hidden";
		name.style.backgroundColor = "#fff";
		name.style.color = "#000";
		error = 0;
	}

	var pass = document.getElementById("regForm").pass;
	if(pass.value === "") {
		errPass.style.visibility = "visible";
		pass.style.backgroundColor = "#D81414";
		pass.style.color = "#fff";
		error = 1;
	} else {
		errPass.style.visibility = "hidden";
		pass.style.backgroundColor = "#fff";
		pass.style.color = "#000";
		error = 0;
	}

	var flag = 1;
	var gender = document.getElementsByName("gender");
	var genError = document.getElementById("errGen");
	for (var i in gender) {
		if (gender[i].checked) {
			flag = 0;
		}
	}
	if (flag == 1) {
		genError.style.visibility = "visible";
		error = 1;
	} else {
		genError.style.visibility = "hidden";
		error = 0;
	}

	var errCountry = document.getElementById("errCountry");
	var country = document.getElementById("country").value;
	var additionalField = document.getElementById("additionalField");

	if (country === "default") {
		errCountry.style.visibility = "visible";
		error = 1;
	} else if (country === "other" && additionalField.value == "") {
		errCountry.style.visibility = "visible";
		error = 1;
	} else if (country === "other" && additionalField.value != "") {
		errCountry.style.visibility = "hidden";
		error = 0;
	} else {
		errCountry.style.visibility = "hidden";
		error = 0;
	}

	if (error == 0) {
		return true;
	} else {
		return false;
	}
}

function checkState() {
	// console.log (document.getElementById("country").value );
	var additionalField = document.getElementById("additionalField");

	if (document.getElementById("country").value == "other") {
		additionalField.style.visibility = "visible";
	} else {
		additionalField.style.visibility = "hidden";
	}
}