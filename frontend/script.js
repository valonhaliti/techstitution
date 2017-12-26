function printDataRows(tableId) {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3001/data',
        success: function (data) {
            let output = "<tr> <th>Pikat e Kalimit Kufitar</th ><th>Hyrje (min)</th><th> Dalje (min)</th><th>Kolona (metra) Hyrje</th><th> Kolona (metra) Dalje</th></tr >";
            console.log(data.length);
            for (let i = 0; i < data.length; i++) {
                output += "<tr><td>"
                output += data[i].pikaKufitare + " <a href=\"edit.html?id=" + data[i]._id + "\"><i class=\"far fa-edit\"></i></a></td> <td>";
                output += data[i].hyrjeMinMinuta + " - ";
                output += data[i].hyrjeMaxMinuta + "</td> <td>";
                output += data[i].daljeMinMinuta + " - ";
                output += data[i].daljeMaxMinuta + "</td> <td>";
                output += data[i].hyrjeMinMetra + " - ";
                output += data[i].hyrjeMaxMetra + "</td> <td>";
                output += data[i].daljeMinMetra + " - ";
                output += data[i].daljeMaxMetra + "</td> </tr>";
            }

            $('#' + tableId).html(output);
        }
    });
}

function getOneData(callback, id) {
    $.get('http://localhost:3001/data/' + id, callback);
}

function getData(callback) {
    $.get('http://localhost:3001/data/', callback);
}
