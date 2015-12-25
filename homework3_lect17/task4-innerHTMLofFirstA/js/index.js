var firstAnchor = document.querySelector('a:first-child');

console.log(firstAnchor.innerHTML);

document.getElementById('result').innerHTML =
 'Inner html of first anchor on page is: ' + firstAnchor.innerHTML;