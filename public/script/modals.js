
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