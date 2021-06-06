$(document).ready(function () {
    $('#disc_table').DataTable({
        paging: true,
        searching: true
    });
});

$(document).ready(function () {
    $('#groups_table').DataTable({
        paging: true,
        searching: true
    });
});

$(document).ready(function () {
    $('#teachers_table').DataTable({
        paging: true,
        searching: true
    });
});


$(document).ready(function () {
    $('#connections_table').DataTable({
        paging: true,
        searching: true
    });
});

function addSubject() {
    let abbreviation = document.getElementById('abbreviation').value
    abbreviation = abbreviation.toUpperCase()
    $.ajax({
        url: 'admin/addSubject',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data: {
            fullname: document.getElementById('fullname').value,
            abbreviation: abbreviation
        },          /* Параметры передаваемые в запросе. */

    });
}

function deleteSubject(obj) {
    $.ajax({
        url: 'admin/subject/' + obj,           /* Куда пойдет запрос */
        method: 'delete',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        /* Параметры передаваемые в запросе. */
    });
}

function addGroup() {
    $.ajax({
        url: 'admin/addGroup',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data: {
            nameGroup: document.getElementById('nameGroup').value
        },          /* Параметры передаваемые в запросе. */

    });
}


let sendFile = document.getElementById('fileInput')

function addCadets() {
    let files = sendFile.files;
    let formData = new FormData();
    let file = files[0];
    formData.append('fileAjax', file, file.name);

    // $.ajax({
    //     url: '/admin/addCadets',
    //     method: 'POST',
    //     cache: false,
    //     contentType: false,
    //     processData: false,
    // })
    let xhr = new XMLHttpRequest();

    // Open the connection
    xhr.open('POST', '/admin/addCadets', true);

    // Set up a handler for when the task for the request is complete
    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         statusP.innerHTML = 'Upload copmlete!';
    //     } else {
    //         statusP.innerHTML = 'Upload error. Try again.';
    //     }
    // };

    // Send the data.
    xhr.send(formData);

}



    