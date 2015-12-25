var imgArray = new Array (
	'1.jpg',
	'2.jpg',
	'3.jpg', 
	'4.jpg',
	'5.jpg',
	'6.jpg'
);

var imgPath = "images/";

function preloadImages() {
	for (var i = 0; i < imgArray.length; i++) {
		var tmpImg = new Image;
		tmpImg.src = imgPath + imgArray[i];
	}
}

function swapImage(imgID) {

	var mainImage = document.getElementById('image');
	mainImage.style.display = 'block';


	var defaultImage = document.getElementById('defaultImage');
	var newImg;
	newImg = imgArray[imgID];
	defaultImage.src = imgPath + newImg;
}

function hideDiv() {
	var mainImage = document.getElementById('image');
	mainImage.style.display = 'none';
}