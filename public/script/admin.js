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
    abbreviation=abbreviation.toUpperCase()
    $.ajax({
        url: 'admin/addSubject',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data:{
            fullname: document.getElementById('fullname').value,
            abbreviation:abbreviation
        },          /* Параметры передаваемые в запросе. */

    });
}

function deleteSubject(obj) {
    $.ajax({
        url: 'admin/'+obj,           /* Куда пойдет запрос */
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
        data:{
            nameGroup: document.getElementById('fullname').value
        },          /* Параметры передаваемые в запросе. */

    });
}
    