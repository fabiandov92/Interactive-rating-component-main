var count = document.querySelectorAll(".rating-item").length;
var btnPressed = 0;

for (let i = 0; i < count; i++) {

  document.querySelectorAll(".rating-item")[i].addEventListener("click", function() {

    btnPressed = i + 1;
    changeStyle(this);
  });
}

document.querySelector(".submit-btn").addEventListener("click", function() {
  if (btnPressed > 0) {
    document.querySelector("#selected-rate").innerHTML = btnPressed;
    document.querySelectorAll(".div-container")[0].classList.toggle("not-show");
    document.querySelectorAll(".div-container")[1].classList.toggle("not-show");
  }
});


function changeStyle(element) {

  for (var i = 0; i < count; i++) {
    document.querySelectorAll(".rating-item")[i].classList.remove("pressed");
  }

  element.classList.add("pressed");

}
