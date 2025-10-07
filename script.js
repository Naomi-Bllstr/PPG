const showalertbtn= document.getElementById("showalertbtn");
const alert= document.getElementById("alert");
const confirmbtn=document.getElementById("confirmbtn");


showalertbtn.addEventListener("click", function() {
    alert.style.display= "flex";
});

confirmbtn.addEventListener("click", function() {
    alert.style.display= "none";
});

