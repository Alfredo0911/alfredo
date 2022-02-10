var halo = "hallo dunia";

var x = 4;
var y = 2; 

console.log(halo);

//operasi aritmatika
console.log("x+y =", x+y);
console.log("x pangkat y=",x**y);
console.log("x akar y=", x**(1/y));

// pertanyaan kondisional
if(x > 1){
    console.log("x besar dari 1");
}

if(x < 0){
    console.log("x bilangan negatif");
}

if (x == 1){
    console.log("sama dengan 1")
}
else{
       console.log("tidak sama dengan 1")
}

//pengulangan while
var a = 4;
while (a > 0.01){
    a = a - 0.1;
    console.log(a);
}

console.log("===========================")
//pengulangan for
var b = 4;
for (var i=0; i<10; i++){
    b = b - 0.1;
    console.log(b);
}

//fungsi
var x;
function distNormal(x){
    return Math.exp(-1*x**2);
}

var y=distNormal(2);
console.log("exp(-2^2)", distNormal(2))