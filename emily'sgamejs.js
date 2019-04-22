var nivel = 1;

function myFunction() {
	if (nivel == 1) { 
 document.getElementById("demo").innerHTML = "2 caras numa moto";
document.getElementById("butão1").innerHTML = "atira";
document.getElementById("butão2").innerHTML = "corre";
document.getElementById("butão3").innerHTML = "finge de planta";
}

	if (nivel == 2) {
 document.getElementById("demo").innerHTML = "levou um tio e agora?";
document.getElementById("butão1").innerHTML = "morrer";
document.getElementById("butão2").innerHTML = "agradecer";
document.getElementById("butão3").innerHTML = "falar: ai meu tenis branco";
}

	if (nivel == 3) {
 document.getElementById("demo").innerHTML = "a abmulancia chegou";
document.getElementById("butão1").innerHTML = "dar em cima do socorrista";
document.getElementById("butão2").innerHTML = "eu escolhi morrer man";
document.getElementById("butão3").innerHTML = "falar q você não precisa de homens";
}

nivel ++;
}
