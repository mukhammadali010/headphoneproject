function add1() {
    let a = document.getElementById('r1');
    let rasm = document.getElementById('image');
    let rasm2 = document.getElementById('image1');
    let rasm3 = document.getElementById('image2');
    rasm.style.visibility ="visible";
    rasm.style.display ="block";
    rasm2.style.visibility ="hidden";
    rasm2.style.display ="none";
    rasm3.style.display="none";
    rasm3.style.visibility="hidden";
    let narx = document.getElementById('head-cost');
    narx.innerHTML = "$100";
}

function add2() {
    let b = document.getElementById('r2');
    let rasm = document.getElementById('image');
    let rasm2 = document.getElementById('image1');
    let rasm3 = document.getElementById('image2');
    rasm2.style.display="block";
    rasm2.style.visibility="visible";
    rasm.style.display ="none";
    rasm.style.visibility ="hidden";
    rasm3.style.display="none";
    rasm3.style.visibility="hidden";
    let narx = document.getElementById('head-cost');
    narx.innerHTML = "$120";
}
function add3() {
    let c = document.getElementById('r3');
    let rasm = document.getElementById('image');
    let rasm2 = document.getElementById('image1');
    let rasm3 = document.getElementById('image2');
    rasm3.style.display="block";
    rasm3.style.visibility="visible";
    rasm.style.display ="none";
    rasm.style.visibility="hidden";
    rasm2.style.display="none";
    rasm2.style.visibility="hidden";
    let narx = document.getElementById('head-cost');
    narx.innerHTML = "$130";
}

function test(){
    alert("Siz `Headphone` ni kartangizga qo`shmoqchimisiz ???")
}
function test1(){
    alert("Siz `Headphone` ni sotib olmoqchimisiz ???")
}

