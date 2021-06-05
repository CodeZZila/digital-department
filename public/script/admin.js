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
    $.ajax({
        url: 'admin/addSubject',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data:{
            fullname: document.getElementById('fullname').value,
            abbreviation: document.getElementById('abbreviation').value
        },          /* Параметры передаваемые в запросе. */

    });
    console.log(document.getElementById('fullname').value);
    console.log(document.getElementById('abbreviation').value);


}

function deleteSubject(obj) {
    $.ajax({
        url: 'admin/'+obj,           /* Куда пойдет запрос */
        method: 'delete',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
                  /* Параметры передаваемые в запросе. */

    });
    console.log(document.getElementById('fullname').value);
    console.log(document.getElementById('abbreviation').value);


}
    
    