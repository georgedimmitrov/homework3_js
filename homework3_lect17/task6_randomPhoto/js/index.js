var randomImagesArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg", "img8.jpg", "img9.jpg"];

function getRandomImage(imgArray, path) {
	path = path || 'images/';
	var num = Math.floor(Math.random() * imgArray.length);
	var img = imgArray[num];
	var imgStr = '<img src="' + path + img + '" alt = "">';
	console.log(imgStr);
	document.write(imgStr);
}

getRandomImage(randomImagesArray);