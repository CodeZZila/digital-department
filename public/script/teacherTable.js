function changeData(input) {
    $.ajax({
        url: '/teacher/table/save',                               /* Куда пойдет запрос */
        method: 'post',                                           /* Метод передачи (post или get) */
        dataType: 'json',                                         /* Тип данных в ответе (xml, json, script, html). */
        data: {idMark: input.id, newValue: input.value},          /* Параметры передаваемые в запросе. */
        success: function (data) {                    /* функция которая будет выполнена после успешного запроса.  */
            console.log(data);
        }
    });
}

// $.ajax({
//     url: '/admin/scheduleAdmin/getData',           /* Куда пойдет запрос */
//     method: 'post',             /* Метод передачи (post или get) */
//     dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
//     data: {date: date},          /* Параметры передаваемые в запросе. */
//     success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
//         console.log(data);
//         if(data.length === 0) {
//             $.get("/admin/scheduleAdmin/allAudiences", function (auds) {
//                 $.each(auds, function (k, v) {
//                     for (let j = 1; j <= 4; j++){
//                         let form = $('#form_' + v + '_' + j);
//                         form.children(".first").children(".first-2").children(".type-less").val('');
//                         form.children(".first").children(".first-1").children(".group").val('');
//                         form.children('.second').children(".second-2").children('.teacher').val('');
//                         form.children('.second').children(".second-1").children('.title').val('');
//                     }
//                 });
//             });
//         }else {
//             $.get("/admin/scheduleAdmin/allAudiences", function (auds) {
//
//                 $.each(auds, function (k, v) {
//                     for (let j = 1; j <= 4; j++){
//                         let form = $('#form_' + v + '_' + j);
//                         form.children(".first").children(".first-2").children(".type-less").val('')
//                         form.children(".first").children(".first-1").children(".group").val('');
//                         form.children('.second').children(".second-2").children('.teacher').val('');
//                         form.children('.second').children(".second-1").children('.title').val('');
//                     }
//                 });
//
//                 $.each(data, function (key, value) {
//                     let form = $('#form_' + value.audience + '_' + value.numberLesson);
//                     form.children(".first").children(".first-2").children(".type-less").val(value.type);
//                     form.children(".first").children(".first-1").children(".group").val(value.group);
//                     form.children('.second').children(".second-2").children('.teacher').val(value.teacher);
//                     form.children('.second').children(".second-1").children('.title').val(value.title);
//                 });
//             });
//         }
//     }
// });