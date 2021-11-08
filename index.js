var tempData = [];
var data = [];
addFields();

function addFields() {
	tempData.push("");
	showFields();
	displayData();
}

function showFields() {
	text = "";
	tempData.forEach(function (element, index) {
		text += `<tr>
                <td>
                    <div class="input-group flex-nowrap">
                        <span class="input-group-text" id="addon-wrapping">Enter Something : </span>
                        <input type="text" id=\"${index}\" value=\"${element}\" class="form-control" aria-describedby="addon-wrapping">
                    </div>
                </td>
                <td>`; if (index == 0) {
			text += "<button class=\"btn btn-dark\"" + `onclick="addFields()">Add.</button>`;
		} else {
			text += "<button class=\"btn btn-dark\"" + `onclick="delField(${index})">Remove.</button>`;
		}
		text += `</td>
            </tr>`;
	});
	gblindex == null ? text += '<button class=\"btn btn-dark m-3\" onclick=\"addData()\"> Submit. </button>' : text += '<button class=\"btn btn-dark m-3\" onclick=\"addData()\"> Update. </button>';
	document.getElementById("display").innerHTML = text;
}

function delField(index) {
	tempData.splice(index, 1);
	showFields();
}

function addData() {
	let txt = "";
	tempData.forEach(function (element, index) {
		txt = document.getElementById(index).value;
		tempData[index] = txt;
	});
	var finalData = tempData.join("-");
	gblindex == null ? data.push(finalData) : data[gblindex] = finalData; gblindex = null;
	tempData = [];
	addFields();
}

function displayData() {
	let text = "";
	data.length == 0 ? text += "<h5 class=\"display-5\">No Entries.</h5>" : text += `<h5 class="display-5">Entries.</h5>`;
	`<tr> 
		<th> Sr. No. </th>
		<th> Enteries. </th>
		<th> Update. </th>
		<th> Delete. </th>
	</tr>`;
	data.forEach(function (element, index) {
		text += `<tr>
		<td> ${index + 1} </td>
		<td> ${element} </td>
		<td> <button class="btn btn-dark" onclick="updData(${index})"> <i class="fas fa-edit"></i> </button> </td>
		<td> <button class="btn btn-dark" onclick="delData(${index})"> <i class="fas fa-trash"></i> </button> </td>`;
	});
	document.getElementById("displayData").innerHTML = text;
}

function delData(index) {
	data.splice(index, 1);
	displayData();
}

var gblindex = null;
function updData(index) {
	var a = data[index];
	tempData = a.split("-");
	gblindex = index;
	showFields();
}