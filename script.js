let div = document.getElementById("padre"); //padre de armara
let ocultar = document.getElementById("armara") //lo que hay que ocultar al evento click
let btn = document.getElementById("btnExpand"); //btn a clickear
let btnar = document.getElementById("arbol");//hijo 1 armara
let btnma = document.getElementById("mapa");//hijo 2 armara
let btnra = document.getElementById("rankingg");//hijo 3 armara

btn.addEventListener("click", function myFunction() {
    let element = document.getElementById("armara");
    element.classList.toggle("mystyle");
});

btnar.addEventListener("click", function myFunction() {
    let element = document.getElementById("armara");
    element.classList.toggle("mystyle");
});

btnma.addEventListener("click", function myFunction() {
    let element = document.getElementById("armara");
    element.classList.toggle("mystyle");
});

btnra.addEventListener("click", function myFunction() {
    let element = document.getElementById("armara");
    element.classList.toggle("mystyle");
});

let totalAlertas1 = document.getElementById("totalAlertas1");
let totalAlertas2 = document.getElementById("totalAlertas2");
let previous = document.getElementById("previous");
let next = document.getElementById("next");

//se van flechas previous y next al clickear en 'total de alertas'
totalAlertas1.addEventListener("click", function myFunction() {
    let element = document.getElementById("previous");
    element.classList.toggle("mystyle");
});
totalAlertas1.addEventListener("click", function myFunction() {
    let element = document.getElementById("next");
    element.classList.toggle("mystyle");
});

//se van flechas del previous y next al clickear en '+'
totalAlertas2.addEventListener("click", function myFunction() {
    let element = document.getElementById("previous");
    element.classList.toggle("mystyle");
});
totalAlertas2.addEventListener("click", function myFunction() {
    let element = document.getElementById("next");
    element.classList.toggle("mystyle");
});

