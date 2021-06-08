
// Get the modal
let modal = document.getElementById("discipline_modal");

// Get the button that opens the modal
let btn1 = document.getElementById("discipline_btn");

// Get the <span> element that closes the modal
let spans = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn1.onclick = function() {
  modal.style.display = "flex";
  modal.style.opacity = "100%";
  modal.style.transform = "translateY(-10px)";
}

// When the user clicks on <span> (x), close the modal
spans.onclick = function() {
  modal.style.display = "none";
  modal.style.opacity = "0";
  modal.style.transform = "translateY(0)";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the modal
let modalgroups = document.getElementById("groups_modal");

// Get the button that opens the modal
let btngroups = document.getElementById("groups_btn");

// Get the <span> element that closes the modal
let spansgroups = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
btngroups.onclick = function() {
  modalgroups.style.display = "flex";
  modalgroups.style.opacity = "100%";
  modalgroups.style.transform = "translateY(-10px)";
}

// When the user clicks on <span> (x), close the modal
spansgroups.onclick = function() {
  modalgroups.style.display = "none";
  modalgroups.style.opacity = "0";
  modalgroups.style.transform = "translateY(0)";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalgroups) {
    modalgroups.style.display = "none";
  }
}


// Get the modal
let modalteachers = document.getElementById("teachers_modal");

// Get the button that opens the modal
let btnteachers = document.getElementById("teachers_btn");

// Get the <span> element that closes the modal
let spansteachers = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
btnteachers.onclick = function() {
  modalteachers.style.display = "flex";
  modalteachers.style.opacity = "100%";
  modalteachers.style.transform = "translateY(-10px)";
}

// When the user clicks on <span> (x), close the modal
spansteachers.onclick = function() {
  modalteachers.style.display = "none";
  modalteachers.style.opacity = "0";
  modalteachers.style.transform = "translateY(0)";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalteachers) {
    modalteachers.style.display = "none";
  }
}




// Get the modal
let modalconnections = document.getElementById("connections_modal");

// Get the button that opens the modal
let btnconnections = document.getElementById("connections_btn");

// Get the <span> element that closes the modal
let spansconnections = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
btnconnections.onclick = function() {
  modalconnections.style.display = "flex";
  modalconnections.style.opacity = "100%";
  modalconnections.style.transform = "translateY(-10px)";
}

// When the user clicks on <span> (x), close the modal
spansconnections.onclick = function() {
  modalconnections.style.display = "none";
  modalconnections.style.opacity = "0";
  modalconnections.style.transform = "translateY(0)";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalconnections) {
    modalconnections.style.display = "none";
  }
}


// Get the modal
let modaladdstudents = document.getElementById("addStudents_modal");

// Get the button that opens the modal
let btnaddstudents = document.getElementById("addStudents_btn");

// Get the <span> element that closes the modal
let spansaddstudents = document.getElementsByClassName("closes")[0];

// When the user clicks on the button, open the modal
btnaddstudents.onclick = function() {
  modaladdstudents.style.display = "flex";
  modaladdstudents.style.opacity = "100%";
  modaladdstudents.style.transform = "translateY(-10px)";
}

// When the user clicks on <span> (x), close the modal
spansaddstudents.onclick = function() {
  modaladdstudents.style.display = "none";
  modaladdstudents.style.opacity = "0";
  modaladdstudents.style.transform = "translateY(0)";

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modaladdstudents) {
    modaladdstudents.style.display = "none";
  }
}