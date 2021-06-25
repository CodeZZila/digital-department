function saveTeacher(){
    let name = $('#name').val();
    let surname = $('#surname').val();
    let email = $('#email').val();
    let pass = $('#password').val();

    $.ajax({
        url: '/teacher/save',
        method: 'post',
        dataType: 'json',
        data: {name: name, surname: surname, email: email, pass: pass},
        success: function (data) {
            let modalSettings = document.getElementById("settings_modal");
            modalSettings.style.display = "none";
            modalSettings.style.opacity = "0";
            modalSettings.style.transform = "translateY(0)";

            $('#name').val(data.teacher.nameTeacher);
            $('#surname').val(data.teacher.surnameTeacher);
            $('#email').val(data.email);
            $('#password').val('');
            $('#fullname').html('Особистий кабінет - <b>' + data.teacher.nameTeacher + ' ' + data.teacher.surnameTeacher + '</b>');
            console.log(data);
        }
    });
}