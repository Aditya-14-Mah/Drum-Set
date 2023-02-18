var n = document.querySelectorAll(".drum").length;
for (var i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key)
{
  switch (key) {
    case "w":
      var aud_1 = new Audio("sounds/tom-1.mp3");
      aud_1.play();
      break;
    case "a":
      var aud_2 = new Audio("sounds/tom-2.mp3");
      aud_2.play();
      break;
    case "s":
      var aud_3 = new Audio("sounds/tom-3.mp3");
      aud_3.play();
      break;
    case "d":
      var aud_4 = new Audio("sounds/tom-4.mp3");
      aud_4.play();
      break;
    case "j":
      var aud_5 = new Audio("sounds/snare.mp3");
      aud_5.play();
      break;
    case "k":
      var aud_6 = new Audio("sounds/crash.mp3");
      aud_6.play();
      break;
    case "l":
      var aud_7 = new Audio("sounds/kick-bass.mp3");
      aud_7.play();
      break;
  }
}
function buttonAnimation(keya)
{
    var active_button=document.querySelector("."+keya);
    active_button.classList.add("pressed");
    setTimeout(function(){
      active_button.classList.remove("pressed");
    },100);
}