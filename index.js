var data = [];
addFields();

function addFields() {
    daydis = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",];
    if (data.length <= 6) {
        data.push({
            day: daydis[data.length],
            times: [
                {
                    id_from: Math.ceil(Math.random() * 50000),
                    id_to: Math.ceil(Math.random() * 50000),
                    from: "",
                    to: ""
                }
            ]
        });
        showFields();
    } else {
        document.getElementById("addDay").className = "btn btn-secondary my-3 disabled";
    }
}

function showFields() {
    let text = "";
    data.forEach(function (element, ind) {
        text += `<tr>
        <td> ${element.day} </td>
        <td>
            <table class="table table-borderless">`;
        element.times.forEach(function (element1, index) {
            text += `<tr>
                    <td> From : <input type=\"text\" id=\"${element1.id_from}\" value=\"${element1.from}\"> </td>
                    <td> To : <input type=\"text\" id=\"${element1.id_to}\" value=\"${element1.to}\""> </td> 
                    <td>`; if (index == 0) {
                text += "<button class=\"btn btn-secondary\"" + `onclick="addinput(${ind}, ${index})"> + </button> </td>` + "<td> <button class=\"btn btn-secondary\"" + `onclick="delday(${ind})"> Remove Day. </button> </td>`;
            } else {
                text += "<button class=\"btn btn-secondary\"" + `onclick="delinput(${ind}, ${index})"> - </button> </td>`;
            }
            text += `</tr>`;
        });
        text += `</table>
        </td>
    	</tr>`;
    });
    document.getElementById("show").innerHTML = text;
    addData();
}

function addinput(ind) {
    var times = data[ind].times;
    times.push({ id_from: Math.ceil(Math.random() * 50000), id_to: Math.ceil(Math.random() * 50000), from: "", to: "" });
    showFields();
}

function delinput(ind, index) {
    var times = data[ind].times;
    times.splice(index, 1);
    showFields();
    showData();
}

function delday(ind) {
    data.splice(ind, 1);
    showFields();
    showData();
}

function addData() {
    data.forEach(function (element, index) {
        times = data[index].times;
        element.times.forEach(function (element1) {
            document.getElementById(element1.id_from).onkeyup = function () {
                element1.from = this.value;
                showData();
            }
            document.getElementById(element1.id_to).onkeyup = function () {
                element1.to = this.value;
                showData();
            }
        });
    });
}

function showData() {
    let text = "";
    data.forEach(function (element) {
        text += `<tr>
        <td> ${element.day} </td>
        <td>
            <table class="table table-borderless">`;
        element.times.forEach(function (element1) {
            text += `<tr>
                    <td> From : ${element1.from} </td>
                    <td> To : ${element1.to}</td>
                    </tr>`;
        });
        text += `</table>
        </td>
    	</tr>`;
    });
    document.getElementById("showData").innerHTML = text;
}