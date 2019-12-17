var left = document.getElementById("left");
var left_height = window.screen.height;
left.style.height = left_height + "px";
var left_hidden = document.getElementById("left_hidden");

var change = document.getElementById("change");
function change_style(){
    left_hidden.style.display = "block";
    left.style.display = "none";
    left_hidden.style.animation = "myfirst 1s";
}

function change_back(){
    left_hidden.style.display = "none";
    left.style.display = "block";
}

// left_hidden.style.height = left_height + "px";
// if(left_height < left_hidden.style.height) {
//     left_hidden.setAttribute("class","scroll_auto");
// }