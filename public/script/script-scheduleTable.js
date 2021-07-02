$(document).ready(function (){
    let date = new Date();
    changeData(date.toISOString().split('T')[0]);
});

function changeSelect(value){
    let date = new Date();
    if(value == 0){
        changeData(date.toISOString().split('T')[0]);
    }else if(value == 1){
        date.setDate(date.getDate() + 1);
        changeData(date.toISOString().split('T')[0]);
    }else if(value == 2){
        date.setDate(date.getDate() + 2);
        changeData(date.toISOString().split('T')[0]);
    }
}

function changeData(date){
    $.ajax({
        url: '/schedule/getData',           /* Куда пойдет запрос */
        method: 'post',             /* Метод передачи (post или get) */
        dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
        data: {date: date},          /* Параметры передаваемые в запросе. */
        success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
            console.log(data);
            if(data.length === 0) {
                $.get("/schedule/allAudiences", function (auds) {
                    $.each(auds, function (k, v) {
                        for (let j = 1; j <= 4; j++){
                            let form = $('#form_' + v + '_' + j);form.children(".rounded").removeClass("pz");
                            form.children(".rounded").removeClass("gz");
                            form.children(".rounded").removeClass("l");
                            form.children(".rounded").addClass("free");

                            form.children(".rounded").children(".first").children(".text-group").text('');
                            form.children(".rounded").children(".second").children(".discipline").text('Вільна аудиторія');
                            form.children('.rounded').children(".second").children('.teacher').text('');
                        }
                    });
                });
            }else {
                $.get("/schedule/allAudiences", function (auds) {
                    $.each(auds, function (k, v) {
                        for (let j = 1; j <= 4; j++){
                            let form = $('#form_' + v + '_' + j);
                            form.children(".rounded").removeClass("pz");
                            form.children(".rounded").removeClass("gz");
                            form.children(".rounded").removeClass("l");
                            form.children(".rounded").addClass("free");

                            form.children(".rounded").children(".first").children(".text-group").text('');
                            form.children(".rounded").children(".second").children(".discipline").text('Вільна аудиторія');
                            form.children('.rounded').children(".second").children('.teacher').text('');
                        }
                    });

                    $.each(data, function (key, value) {
                        let form = $('#form_' + value.audience + '_' + value.numberLesson);

                        form.children(".rounded").removeClass("free");
                        if(value.type === 'гз'){
                            form.children(".rounded").addClass("gz");
                        }else if(value.type === 'пз'){
                            form.children(".rounded").addClass("pz");
                        }else if(value.type === 'л' || value.type === 'ср'){
                            form.children(".rounded").addClass("l");
                        }

                        form.children(".rounded").children(".first").children(".text-group").text(value.group);
                        form.children(".rounded").children(".second").children(".discipline").text(value.title);
                        form.children('.rounded').children(".second").children('.teacher').text(value.teacher);
                    });
                });
            }
        }
    });
}

