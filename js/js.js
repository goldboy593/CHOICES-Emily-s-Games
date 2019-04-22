var nivel = 1;

var text1 = "Ando pelas ruas carregadas de Minies, diabinhos, mascarados, fadas e um festival de outros seres que desmonta a sisudez do dia a dia. Um mundo encantado levanta-se de dentro do desencanto, como aquela flor feia de que sempre falo. O riso báquico explode pedindo uma pausa ao choro, vertido e convertido em chorinho. Em meio à fábrica das moedas, surge a esperança do amor, de qualquer amor, mesmo que bruto, efêmero, suado, bêbado. É preciso coragem pra ser feliz numa passarela tão curta. Mas, não há dúvidas, aconteceu de novo. Ainda ontem, ali na esquina, uma bala de fuzil acertou o peito de um garçom, desmontou famílias; um pouco antes, o noticiário nos oferecia uma lista de desgraças cometidas por grandes e pequenos malfeitores; é ano de eleição e os possíveis candidatos erguem-se como pipas voadas a ver os que pegam no gosto popular, como um versinho do hit do momento, embora deles ou pouco se saiba ou o que se sabe não é satisfatório; havia mesmo o prefeito sabotador contra a alegria dos outros – só a minha alegria é real, verdadeira. Mas aconteceu de novo. As horas passaram, alguém disse “é carnaval” e, como o giro de um passista, como um grito de puxador de escola de samba, fez-se a mágica: as pessoas foram de novo tomar as praças e cantar as marchinhas de antigamente.<br><br>Lá vão eles, carregando garrafas de bebida pesada, fantasiados com máscaras do presidente, de juízes tinhosos, mexendo com quem, na calçada, os observa com estupefação. Vão protestar com sua alegria contra a tristeza dos caretas, dos beatos, dos sem amor e, portanto, sem alegria, sem gozo, sem explosão. Homens vestidos de mulher, mulheres vestidas de homens, o não de 360 dias abre as portas para quatro dias de sim. Vão entregues à alucinação, ao sem sentido, porque entenderam: estão vivos e isso é tudo. E no meio deles, a ordem desfila parecendo também uma fantasia de si mesma, pouco comprometida consigo mesma. E no meio deles, a lida garante alguns trocados com muita cerveja, sacolé de caipirinha, e até água.<br><br>O sábio doente resolveu ir pular a festa. Foi brincar de médico. E os médicos também. As enfermeiras, os motoristas, os garis. O senhor doutor vossa excelência também veio. A professora e os heróis de verdade estão aqui. Todos aprenderam no instinto: se a vida é curta, melhor transformá-la em carnaval. Até o vovô vai com a netinha, enquanto olha com saudades a ninfeta de Malévola. Até a vovó veio e belisca o velho com um ciúme de outros carnavais. A piranha me olha e vem na minha direção. Gargalha do meu ar de espanto, do meu medo da sua coragem. Me toma pelo braço, me bota pra dançar. Me agarra e o mundo ri. A festa começou cedo porque não parou de madrugada. E penso que todo mundo que tá vivo tá pulando, tá cantando a festa do caos. <br><br>		Volto pra casa, queria ir à praia, mas melhor não. “Às vezes, o que a vida quer da gente é coragem.” Mas hoje, sentindo-me insanamente feliz, o que eu tenho é preguiça. Vá lá, povo. Vá lá, que é o teu lugar. Quando puder, se voltar, me conta as coisas que eu ainda tenho pra contar.";
var text1option1 = "dançar";
var text1option2 = "cantar";
var text1option3 = "viajar";

var text2 = "2 caras em uma moto";
var text2option1 = "correr";
var text2option2 = "gritar";
var text2option3 = "atirar";

var text3 = "levou um tiro";
var text3option1 = "morrer";
var text3option2 = "agradecer";
var text3option3 = "falar: meu tenis novo";

var text4 = "ambulancia chegou";
var text4option1 = "dar em cima do socorrista";
var text4option2 = "eu cliquei em morrer mano";
var text4option3 = "dizer que você não precisa de homens porque é uma mulher independente sustentada pelo feminismo";


    window.onload = function() {
        document.getElementById("demo").innerHTML = text1;
        document.getElementById("demo").innerHTML = text1option1;
        document.getElementById("demo").innerHTML = text1option2;
        document.getElementById("demo").innerHTML = text1option3;
    }


function myFunction() {
	if (nivel == 1) { 
 document.getElementById("demo").innerHTML = text2;
document.getElementById("botão1").innerHTML = text2option1;
document.getElementById("botão2").innerHTML = text2option2;
document.getElementById("botão3").innerHTML = text2option3;
}


	if (nivel == 2) {
 document.getElementById("demo").innerHTML = text3;
document.getElementById("botão1").innerHTML = text3option1;
document.getElementById("botão2").innerHTML = text3option2;
document.getElementById("botão3").innerHTML = text3option3;
}

	if (nivel == 3) {
 document.getElementById("demo").innerHTML = text4;
document.getElementById("botão1").innerHTML = text4option1;
document.getElementById("botão2").innerHTML = text4option2;
document.getElementById("botão3").innerHTML = text4option3;
}

if (nivel < 3) {nivel ++;}
}
