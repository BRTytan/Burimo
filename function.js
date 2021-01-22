/* listas input */
let writebox = [];
/* lista fixa de palavras ofensivas */
const words = [
    "Denegrir",
    "Denegrindo",
    "Criado mudo",
    "Cabelo ruim",
    "Lista negra",
    "Ovelha negra",
    "Escravos",
    "Cor do pecado",
    "Mulata",
    "Não sou tuas negas",
    "Mercado negro",
    "Inveja branca",
    "João sem braço",
    "Dados esquizofrênicos",
    "Dados bipolares",
    "portador de deficiência",
    "Louco",
    "Maluco",
    "Retardado",
    "Mongol",
    "Surdo-mudo",
    "Bipolar",
    "Sequelado",
    "Cego de raiva",
    "Dar uma de João sem braço",
    "Não temos braço para isso",
    "Desculpa de aleijado é muleta",
    "A coisa ta preta",
    "A dar com pau",
    "Cor de pele",
    "Coisa de preto",
    "Serviço de preto",
    "trabalho de preto",
    "Domestica",
    "Fazer nas coxas",
    "Humor negro",
    "Indiada",
    "Judiar",
    "Judiaria",
    "Moreno",
    "Nega maluca",
    "Nhaca",
    "Tem o pé na cozinha",
    "Samba do criolo doido",
];
const sugestions = [
    "Difamar",
    "Difamar",
    "Mesa de cabeceira",
    "Cabelo crespo, chacheado, afro",
    "Lista proibida/restrita",
    "",
    "Pessoas escravizadas",
    "Não usar!",
    "Negra",
    "Não usar!",
    "Mercado clandestino",
    "Inveja",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "a coisa tá difícil",
    "bastante, muito",
    "Rosa claro ou bege",
    "Trabalho errado",
    "Trabalho errado",
    "Trabalho errado",
    "Empregada, funcionária",
    "Mal feito",
    "Humor ácido",
    "Atividade ruim, atividade chata",
    "Sofrimento, maltrato",
    "Sofrimento, maltrato",
    "Você deve se referir a pessoa pelo nome ou questioná-la como ela prefere ser descrita.",
    "Bolo de chocolate",
    "Cheiro ruim",
    "Não usar!",
    "Confusão, trapalhada, bagunça",
];

/* função de match entre lista input e palavras ofensivas */
function match() {
    input = document.getElementById("text").value;
    var count = 0;
    words.forEach(function (word) {
        var res = input.match(word);
        if (res === null) {
            count++;
        } else {
            document.getElementById("input").innerHTML = res + " </br>";
            document.getElementById("sugestion").innerHTML = sugestions[count] + " </br>";

        }
    });
}
/* pegar value text */
function getText() {
    let text = document.getElementById("text").value;

    document.getElementById("input").innerHTML = "<p>Você digitou: <br/>" + text;

}
/* listas input */

