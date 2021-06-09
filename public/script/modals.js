
let modal = document.getElementById("discipline_modal");
let btn1 = document.getElementById("discipline_btn");
let spans = document.getElementById("discipline-close");
btn1.onclick = function() {
  modal.style.display = "flex";
}
spans.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let modalgroups = document.getElementById("groups_modal");
let btngroups = document.getElementById("groups_btn");
let spansgroups = document.getElementById("groups-close");
btngroups.onclick = function() {
  modalgroups.style.display = "flex";
}
spansgroups.onclick = function() {
  modalgroups.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalgroups) {
    modalgroups.style.display = "none";
  }
}


let modalteachers = document.getElementById("teachers_modal");
let btnteachers = document.getElementById("teachers_btn");
let spansteachers = document.getElementById("teachers-close");
btnteachers.onclick = function() {
  modalteachers.style.display = "flex";
}
spansteachers.onclick = function() {
  modalteachers.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalteachers) {
    modalteachers.style.display = "none";
  }
}



let modalconnections = document.getElementById("connections_modal");
let btnconnections = document.getElementById("connections_btn");
let spansconnections = document.getElementById("connections-close");
btnconnections.onclick = function() {
  modalconnections.style.display = "flex";
}
spansconnections.onclick = function() {
  modalconnections.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modalconnections) {
    modalconnections.style.display = "none";
  }
}


let modaladdstudents = document.getElementById("addStudents_modal");
let btnaddstudents = document.getElementById("addStudents_btn");
let spansaddstudents = document.getElementById("addStudents-close");
btnaddstudents.onclick = function() {
  modaladdstudents.style.display = "flex";
}
spansaddstudents.onclick = function() {
  modaladdstudents.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modaladdstudents) {
    modaladdstudents.style.display = "none";
  }
}