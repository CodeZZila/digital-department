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
                            let form = $('#form_' + v + '_' + j);
                            form.children(".schedule-block").removeClass("pz");
                            form.children(".schedule-block").removeClass("gz");
                            form.children(".schedule-block").removeClass("l");
                            form.children(".schedule-block").addClass("free");

                            form.children(".schedule-block").children(".first").children(".text-group").style.display = "none";
                            form.children(".schedule-block").children(".second").children(".discipline").text('Вільна аудиторія');
                            form.children('.schedule-block').children(".second").children('.teacher').style.display = "none";
                        }
                    });
                });
            }else {
                $.get("/schedule/allAudiences", function (auds) {
                    $.each(auds, function (k, v) {
                        for (let j = 1; j <= 4; j++){
                            let form = $('#form_' + v + '_' + j);
                            form.children(".schedule-block").removeClass("pz");
                            form.children(".schedule-block").removeClass("gz");
                            form.children(".schedule-block").removeClass("l");
                            form.children(".schedule-block").addClass("free");

                            form.children(".schedule-block").children(".first").children(".text-group").text('');
                            form.children(".schedule-block").children(".second").children(".discipline").text('Вільна аудиторія');
                            form.children('.schedule-block').children(".second").children('.teacher').text('');
                        }
                    });

                    $.each(data, function (key, value) {
                        let form = $('#form_' + value.audience + '_' + value.numberLesson);

                        form.children(".schedule-block").removeClass("free");
                        if(value.type === 'гз'){
                            form.children(".schedule-block").addClass("gz");
                        }else if(value.type === 'пз'){
                            form.children(".schedule-block").addClass("pz");
                        }else if(value.type === 'л' || value.type === 'ср'){
                            form.children(".schedule-block").addClass("l");
                        }

                        form.children(".schedule-block").children(".first").children(".text-group").text(value.group);
                        form.children(".schedule-block").children(".second").children(".discipline").text(value.title);
                        form.children('.schedule-block').children(".second").children('.teacher').text(value.teacher);
                    });
                });
            }
        }
    });
}

