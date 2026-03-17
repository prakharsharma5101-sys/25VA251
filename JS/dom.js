// document.writeln("Hello");

function result() {

    let inputData = document.getElementById("paratext").value;
    document.getElementById("text").innerHTML = inputData;

    let changecolor = document.getElementById("text");
    changecolor.style.color = "red";

    let bodycolor= document.getElementsByTagName("body")[0];
    bodycolor.style.backgroundColor = "blue";
    let para= document.getElementById("paratext");
function changetextcolor() {
    para.style.backgroundColor = "yellow";
}
para.addEventListener("mouseover", changetextcolor);

}
