var weight = [35,38,42,45,43,34,36,41,48,32];

function calculate(){
var soma = 0
for(var i=0; i<weight.length; i++){
soma = soma + weight[i];
}
var media = soma / weight.length
console.log(media)
}

function setup() {
createCanvas(400,400);
calculate();
}

function draw() 
{
background(30);
}

 

