
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findRepeats(arr) {
	var repeats = [];
	var max = 0;
	var result;

	for (var i in arr) {
		repeats[arr[i]] = (repeats[arr[i]] || 0) + 1;

		if (repeats[arr[i]] > max) {
			max = repeats[arr[i]];
			result = arr[i];
		}
	}

	return {
		element : result,
		times : max
	};
}


var res = findRepeats(arr1);
var element = res.element;
var times = res.times;

console.log(element, times);

document.getElementById('result').innerHTML =
 'Most repeated element in array is:   ' + element + '   -   '
 + times + ' times';