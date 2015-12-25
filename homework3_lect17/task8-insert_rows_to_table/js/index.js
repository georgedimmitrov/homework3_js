function insRow() {
	
	var tbl = document.getElementById('tbl');
	var newRow = tbl.rows[1].cloneNode(true);
	var len = tbl.rows.length;
	newRow.cells[0].innerHTML = len;

	var inputOne = newRow.cells[1].getElementsByTagName('input')[0];
	inputOne.value = '';

	var inputTwo = newRow.cells[2].getElementsByTagName('input')[0];
	inputTwo.value = '';

	tbl.appendChild(newRow);
	console.log('table row added');

}

function delRow(row) {
	var i = row.parentNode.parentNode.rowIndex;
	
	// all fields
	console.log(row.parentNode.parentNode);
	document.getElementById("tbl").deleteRow(i);
}