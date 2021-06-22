$(document).ready(function () {
    $('#disc_table').DataTable({
        paging: true,
        searching: true,
        "language": {
            "lengthMenu": "Кількість записів на сторінці _MENU_ ",
            "zeroRecords": "Немає результатів",
            "info": "Показана сторінка _PAGE_ з _PAGES_",
            "infoEmpty": "Таких записів не існує",
            "infoFiltered": "(_MAX_ всього існує)",
            "search": 'Пошук',
            "paginate": {
                "previous": "Попередня",
                "next": "Наступна"
            }
        } ,
        'autoWidth': false,
        "columns": [
            { "width": "1em"},
            { "width": "40%"},
            { "width": "50%"},
            { "width": "1.1em"},
            { "width": "1.1em"}
        ]
    });
});

$(document).ready(function () {
    $('#groups_table').DataTable({
        paging: true,
        searching: true,
        "language": {
            "lengthMenu": "Кількість записів на сторінці _MENU_ ",
            "zeroRecords": "Немає результатів",
            "info": "Показана сторінка _PAGE_ з _PAGES_",
            "infoEmpty": "Таких записів не існує",
            "infoFiltered": "(_MAX_ всього існує)",
            "search": 'Пошук',
            "paginate": {
                "previous": "Попередня",
                "next": "Наступна"
            }
        },
        'autoWidth': false,
        "columns": [
            { "width": "1em"},
            null,
            { "width": "1.1em"},
            { "width": "1.1em"}
        ]
    });
});

$(document).ready(function () {
    $('#teachers_table').DataTable({
        paging: true,
        searching: true ,
        "language": {
            "lengthMenu": "Кількість записів на сторінці _MENU_ ",
            "zeroRecords": "Немає результатів",
            "info": "Показана сторінка _PAGE_ з _PAGES_",
            "infoEmpty": "Таких записів не існує",
            "infoFiltered": "(_MAX_ всього існує)",
            "search": 'Пошук',
            "paginate": {
                "previous": "Попередня",
                "next": "Наступна"
            }
        },
        'autoWidth': false,
        "columns": [
            { "width": "1em"},
            null,
            null,
            { "width": "1.1em"},
            { "width": "1.1em"}
        ]
    });
});


$(document).ready(function () {
    $('#connections_table').DataTable({
        paging: true,
        searching: true,
        "language": {
            "lengthMenu": "Кількість записів на сторінці _MENU_ ",
            "zeroRecords": "Немає результатів",
            "info": "Показана сторінка _PAGE_ з _PAGES_",
            "infoEmpty": "Таких записів не існує",
            "infoFiltered": "(_MAX_ всього існує)",
            "search": 'Пошук',
            "paginate": {
                "previous": "Попередня",
                "next": "Наступна"
            }
        },
        'autoWidth': false,
        "columns": [
            { "width": "1em"},
            { "width": "20%"},
            null,
            null,
            { "width": "1.1em"}
        ]
    });
});

function addSubject() {
    document.getElementById("discipline-close").onclick();
    let abbreviation = document.getElementById('abbreviation').value.toUpperCase();
    $.post("/admin/addSubject", {
        fullname: document.getElementById('fullname').value,
        abbreviation: abbreviation
    }).done(function (data) {
        console.log(data);
        $.ajax({
            url: '/admin/getSubject',           /* Куда пойдет запрос */
            method: 'get',                  /* Метод передачи (post или get) */
            dataType: 'json',               /* Тип данных в ответе (xml, json, script, html). */
            success: function (data) {
                $('#disciplineDiv').empty();
                $.each(data, function (key, value) {
                    let str = "<tr >\n" +
                        "                        <th>" + (key + 1) + "</th>\n" +
                        "                        <td>" + value.fullname + "</td>\n" +
                        "                        <td>" + value.abbreviation + "</td>\n" +
                        "                        <td>\n" +
                        "                            <a href=\"\" id=\"edit_modal\" class=\"table-icon\">\n" +
                        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#4287f5\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z\"/></svg>\n" +
                        "                            </a>\n" +
                        "                        </td>\n" +
                        "                        <td>\n" +
                        "                            <button id='" + value._id + "' onclick=\"deleteSubject(this.id)\">\n" +
                        "                                <svg class=\"table-icon\" fill=\"#f54242\" xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z\"/></svg>\n" +
                        "                            </button>\n" +
                        "                        </td>\n" +
                        "                    </tr>";
                    $('#disciplineDiv').append(str);
                    console.log(value);
                });
            }
        });
    })
        .fail(function () {
            alert("error");
        });
    document.getElementById('fullname').value='';
    document.getElementById('abbreviation').value = '';
}

function deleteSubject(obj) {

    // $.ajax({
    //     url: 'admin/subject/' + obj,           /* Куда пойдет запрос */
    //     method: 'delete',             /* Метод передачи (post или get) */
    //     dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
    //     /* Параметры передаваемые в запросе. */
    // });

    $.ajax({
            url: 'admin/subject/' + obj,           /* Куда пойдет запрос */
            method: 'delete',             /* Метод передачи (post или get) */
            dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
            /* Параметры передаваемые в запросе. */
        }).done(function (data) {
        console.log(data);
        $.ajax({
            url: '/admin/getSubject',           /* Куда пойдет запрос */
            method: 'get',                  /* Метод передачи (post или get) */
            dataType: 'json',               /* Тип данных в ответе (xml, json, script, html). */
            success: function (data) {
                $('#disciplineDiv').empty();
                $.each(data, function (key, value) {
                    let str = "<tr >\n" +
                        "                        <th>" + (key + 1) + "</th>\n" +
                        "                        <td>" + value.fullname + "</td>\n" +
                        "                        <td>" + value.abbreviation + "</td>\n" +
                        "                        <td>\n" +
                        "                            <a href=\"\" id=\"edit_modal\" class=\"table-icon\">\n" +
                        "                                <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#4287f5\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z\"/></svg>\n" +
                        "                            </a>\n" +
                        "                        </td>\n" +
                        "                        <td>\n" +
                        "                            <button id='" + value._id + "' onclick=\"deleteSubject(this.id)\">\n" +
                        "                                <svg class=\"table-icon\" fill=\"#f54242\" xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z\"/></svg>\n" +
                        "                            </button>\n" +
                        "                        </td>\n" +
                        "                    </tr>";
                    $('#disciplineDiv').append(str);
                    console.log(value);
                });
            }
        });
    })
        .fail(function () {
            alert("error");
        });



}

function addGroup() {
    let spangroup = document.getElementById("groups-close");
    spangroup.onclick();
    $.ajax({
        url: 'admin/addGroup',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data: {
            nameGroup: document.getElementById('nameGroup').value
        }          /* Параметры передаваемые в запросе. */
    })
}




function addCadets() {
    let spanstudents = document.getElementById("addStudents-close");
    spanstudents.onclick();
     let sendFile = document.getElementById('fileInput')
    let files = sendFile.files;
    let formData = new FormData();
    let file = files[0];
    console.log(file)
    formData.append('filedata', file, file.name);

    $.ajax({
        url: '/admin/addCadets',
        method: 'POST',
        cache: false,
        contentType: false,
        processData: false,
        data: formData
    }).done(function (data) {
        console.log('PIZDA');
        console.log(data);
        $.ajax({
            url: '/admin/getGroup',           /* Куда пойдет запрос */
            method: 'get',                  /* Метод передачи (post или get) */
            dataType: 'json',               /* Тип данных в ответе (xml, json, script, html). */
            success: function (data) {
                $('#groupDiv').empty();
                $.each(data, function (key, value) {
                    let str = "<tr>\n" +
                        "                            <th>" + (key + 1) + "</th>\n" +
                        "                            <td>" + value.nameGroup + "</td>\n" +
                        "                            <td>28</td>\n" +
                        "                            <td>\n" +
                        "                                <a href=\"\" id=\"edit_modal\" class=\"table-icon\">\n" +
                        "                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#4287f5\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z\"/></svg>\n" +
                        "                                </a>\n" +
                        "                            </td>\n" +
                        "                            <td>\n" +
                        "                                <a href=\"\">\n" +
                        "                                    <svg class=\"table-icon\" fill=\"#f54242\" xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z\"/></svg>\n" +
                        "                                </a>\n" +
                        "                            </td>\n" +
                        "                        </tr>";
                    $('#groupDiv').append(str);
                    console.log(value);
                });
            }
        });
    })
        .fail(function () {
            alert("error");
        });
    // let xhr = new XMLHttpRequest();
    //
    // // Open the connection
    // xhr.open('POST', '/admin/addCadets', true);
    //
    // // Set up a handler for when the task for the request is complete
    // // xhr.onload = function () {
    // //     if (xhr.status === 200) {
    // //         statusP.innerHTML = 'Upload copmlete!';
    // //     } else {
    // //         statusP.innerHTML = 'Upload error. Try again.';
    // //     }
    // // };
    //
    // // Send the data.
    // xhr.send(formData);

}

function deleteGroup(obj) {
    $.ajax({
        url: 'admin/group/'+obj,           /* Куда пойдет запрос */
        method: 'delete',             /* Метод передачи (post или get) */
        dataType: 'text',          /* Тип данных в ответе (xml, json, script, html). */
        success: function () {

            // $.ajax({
            //     url: '/admin/getTeacher',           /* Куда пойдет запрос */
            //     method: 'get',                  /* Метод передачи (post или get) */
            //     dataType: 'json',               /* Тип данных в ответе (xml, json, script, html). */
            //     success: function (data) {
            //         $('#teacherDiv').empty();
            //         $.each(data, function (key, value) {
            //             let str = "<tr>\n" +
            //                 "                            <th>" + (key + 1) + "</th>\n" +
            //                 "                            <td>" + value.nameTeacher + "</td>\n" +
            //                 "                            <td>" + value.surnameTeacher + "</td>\n" +
            //                 "                            <td>\n" +
            //                 "                                <a href=\"\" id=\"edit_modal\" class=\"table-icon\">\n" +
            //                 "                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#4287f5\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z\"/></svg>\n" +
            //                 "                                </a>\n" +
            //                 "                            </td>\n" +
            //                 "                            <td>\n" +
            //                 "                                <button id='" + value._id + "' onclick=\"deleteTeacher(this.id)\">\n" +
            //                 "                                    <svg class=\"table-icon\" fill=\"#f54242\" xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z\"/></svg>\n" +
            //                 "                                </button>\n" +
            //                 "                            </td>\n" +
            //                 "                        </tr>";
            //             $('#teacherDiv').append(str);
            //         });
            //     }
            // });
        }
    })
}

function addTeacher() {
    let spansteachers = document.getElementById("teachers-close");
    spansteachers.onclick();
    $.ajax({
        url: 'admin/addTeacher',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'text',          /* Тип данных в ответе (xml, json, script, html). */
        data: {
            nameTeacher: document.getElementById('nameTeacher').value,
            surnameTeacher: document.getElementById('surnameTeacher').value,
            email: document.getElementById('email').value
        },       /* Параметры передаваемые в запросе. */
        success: function () {
            document.getElementById('nameTeacher').value = '';
            document.getElementById('surnameTeacher').value = '';
            document.getElementById('email').value = '';
            $.ajax({
                url: '/admin/getTeacher',           /* Куда пойдет запрос */
                method: 'get',                  /* Метод передачи (post или get) */
                dataType: 'json',               /* Тип данных в ответе (xml, json, script, html). */
                success: function (data) {
                    $('#teacherDiv').empty();
                    $.each(data, function (key, value) {
                        let str = "<tr>\n" +
                            "                            <th>" + (key + 1) + "</th>\n" +
                            "                            <td>" + value.nameTeacher + "</td>\n" +
                            "                            <td>" + value.surnameTeacher + "</td>\n" +
                            "                            <td>\n" +
                            "                                <a href=\"\" id=\"edit_modal\" class=\"table-icon\">\n" +
                            "                                    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"#4287f5\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z\"/></svg>\n" +
                            "                                </a>\n" +
                            "                            </td>\n" +
                            "                            <td>\n" +
                            "                                <button id='" + value._id + "' onclick=\"deleteTeacher(this.id)\">\n" +
                            "                                    <svg class=\"table-icon\" fill=\"#f54242\" xmlns=\"http://www.w3.org/2000/svg\"  width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M9 19c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5-17v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712zm-3 4v16h-14v-16h-2v18h18v-18h-2z\"/></svg>\n" +
                            "                                </button>\n" +
                            "                            </td>\n" +
                            "                        </tr>";
                        $('#teacherDiv').append(str);
                    });
                }
            });
        }
    })
    document.getElementById('nameTeacher').value='';
    document.getElementById('surnameTeacher').value='';
    document.getElementById('email').value='';
}

function deleteTeacher(obj) {
    $.ajax({
        url: 'admin/teacher/' + obj,           /* Куда пойдет запрос */
        method: 'delete',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        /* Параметры передаваемые в запросе. */
    });
}

function addRelation() {
    let subject_id;
    let group_id;
    let teacher_id;
    $("#idSubject").change(function () {

        subject_id = $('#datalistOptions_idSubject option[value="' + $('#idSubject').val() + '"]').data('id');
    }).change();
    $("#idGroup").change(function () {

        group_id = $('#datalistOptions_idGroup option[value="' + $('#idGroup').val() + '"]').data('id');
    }).change();
    $("#idTeacher").change(function () {

        teacher_id = $('#datalistOptions_idTeacher option[value="' + $('#idTeacher').val() + '"]').data('id');
    }).change();
    console.log(subject_id);
    console.log(group_id);
    console.log(teacher_id);

    $.ajax({
        url: 'admin/addRelation',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data: {
            idSubject: subject_id,
            idGroup: group_id,
            idTeacher: teacher_id,
        }          /* Параметры передаваемые в запросе. */

    });


}



    