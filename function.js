/* Variaveis */
const datas = [
    {
        "termoPalavra": "Denegrir, denegrindo",
        "explicao": "'Fazer ficar mais negro; tornar escuro'. Em sentido FIGURADO, significa 'Manchar a reputação de; difamar'",
        "sugesto": "Difamar ",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Criado mudo",
        "explicao": "Você sabia que o nome dado a este móvel faz referência aos criados (geralmente escravizados) que deviam segurar objetos\npara seus senhores? Como estes criados não podiam falar, eram considerados mudos, daí o termo criado-mudo.",
        "sugesto": "Mesa de cabeceira",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Cabelo ruim",
        "explicao": "Termos racistas usadas como bullying que depreciam a imagem e o cabelo de pessoas negras. Falar mal das características dos cabelos Afro também é racismo.",
        "sugesto": "Cabelo crespo, chacheado, afro",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Lista negra",
        "explicao": "Usada para descrever pessoas que, por alguma razão negativa, estão excluídas de certos grupos, ou ainda que uma pessoa está sendo perseguida. Mais uma vez a palavra “negra” é usada como algo negativo.",
        "sugesto": "Lista proibida/restrita",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Ovelha negra",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Escravos",
        "explicao": "Este termo trata os africanos como passivos e desprovidos de subjetividade. Os africanos que vieram para o Brasil eram pessoas, reis, rainhas, camponeses, homens e mulheres escravizados contra a sua vontade",
        "sugesto": "Pessoas escravizadas ",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Cor do pecado",
        "explicao": "Utilizada erroneamente como elogio, se associa ao imaginário da mulher negra sensualizada.\nEm uma sociedade pautada na religião, pecar não é positivo, ser pecador é errado, e ter a pele associada ao pecado significa que ela é ruim. Outra expressão que faz a mesma associação de que negro = negativo.",
        "sugesto": "Não usar!",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Mulata",
        "explicao": "A palavra significa literalmente: mula, a cruza de um asno macho com uma égua. O termo surge na época da escravização, quando muitas mulheres escravizadas eram violentadas por “seus senhores” e tinham filhos que eram chamados de mulatos.",
        "sugesto": "Negra",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Não sou tuas negas",
        "explicao": "Trata a mulher negra como ”qualquer uma” ou “de todo mundo” , relembra o tratamento às mulheres escravizadas que eram, seguidamente, assediadas e estupradas. A frase deixa explícita que com \"as negras pode tudo\" , e com as demais não se pode fazer o mesmo, e no tudo está incluso desfazer, maltratar. Portanto, além de profundamente racista, o termo é carregado de machismo.",
        "sugesto": "Não usar!",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Mercado negro",
        "explicao": "Muito usado para se refererir a um sistema de compras e vendas clandestino, ilegal",
        "sugesto": "Mercado clandestino",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Inveja branca",
        "explicao": "Associa o “negro” ao negativo, a algo que faz mal e o “branco” ao que é positivo, uma inveja boa, um sentimento do bem.",
        "sugesto": "Inveja",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "João sem braço",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Dados esquizofrênicos",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Dados bipolares",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "portador de deficiência",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Louco",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Maluco",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Retardado",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Mongol",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Surdo-mudo",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Bipolar;",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Sequelado",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Cego de raiva",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Dar uma de João sem braço",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Não temos braço para isso",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "Desculpa de aleijado é muleta",
        "categoria": "PCDs"
    },
    {
        "termoPalavra": "A coisa ta preta",
        "explicao": "O termo associa a palavra “preto” com uma situação desconfortável, desagradável, difícil ou perigosa.",
        "sugesto": "a coisa tá difícil",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "A dar com pau",
        "explicao": "Tem origem nos navios que traziam os povos escravizados, quando algumas pessoas preferiam morrer de fome a serem escravizadas. Assim, elas eram alimentadas à força com um tipo de colher de pau grande, daí vem a expressão “a dar com pau”.",
        "sugesto": "bastante, muito",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Cor de pele",
        "explicao": "A expressão ficou conhecida para descrever a cor rosa-claro, fazendo referência à pele de pessoas brancas. Porém, como já é sabido, não existe apenas uma cor de pele, vivemos uma sociedade mista e plural.",
        "sugesto": "Rosa claro ou bege",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Coisa de preto",
        "explicao": "Usado para descrever um serviço mal feito. O termo é carregado de preconceito, uma vez que descreve as pessoas negras como incapazes e preguiçosas. Jamais use estas expressões!",
        "sugesto": "Trabalho errado",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Serviço de preto ",
        "explicao": "Usado para descrever um serviço mal feito. O termo é carregado de preconceito, uma vez que descreve as pessoas negras como incapazes e preguiçosas. Jamais use estas expressões!",
        "sugesto": "Trabalho errado",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "trabalho de preto",
        "explicao": "Usado para descrever um serviço mal feito. O termo é carregado de preconceito, uma vez que descreve as pessoas negras como incapazes e preguiçosas. Jamais use estas expressões!",
        "sugesto": "Trabalho errado",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Domestica",
        "explicao": "Domésticas eram as mulheres negras que trabalhavam dentro da casa das famílias brancas e eram consideradas domesticadas.",
        "sugesto": "Empregada, funcionária",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Fazer nas coxas",
        "explicao": "Acredita-se que a expressão vem da técnica utilizada pelos escravizados para fazer telhas. Por serem artesanais e seguirem os formatos dos corpos, as peças não se encaixaram bem umas nas outras, sendo consideradas mal feitas.",
        "sugesto": "Mal feito",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Humor negro",
        "explicao": "Usam para descrever um tipo de humor ácido e com piadas de mal gosto com temas mórbidos, sérios ou tabus com tom politicamenteincorreto",
        "sugesto": "Humor ácido",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Indiada",
        "explicao": "Utilizado para descrever um passeio, atividade ou viagem que não deu muito certo, algo trabalhoso, difícil ou até mesmo chato. O termo é pejorativo, pois “indiada” se refere a um grupo ou conjunto de índios",
        "sugesto": "Atividade ruim, atividade chata",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Judiar",
        "explicao": "Significa tratar como os judeus foram tratados. É usado como sinônimo de fazer sofrer, atormentar, maltratar ou ainda com tom de pena. A palavra possui uma carga negativa e preconceituosa muito grande.",
        "sugesto": "Sofrimento,maltrato",
        "categoria": "Xenofobia"
    },
    {
        "termoPalavra": "Judiaria",
        "explicao": "Do verbro \"judiar\",significa tratar como os judeus foram tratados. É usado como sinônimo de fazer sofrer, atormentar, maltratar ou ainda com tom de pena. A palavra possui uma carga negativa e preconceituosa muito grande.",
        "sugesto": "Sofrimento,maltrato",
        "categoria": "Xenofobia"
    },
    {
        "termoPalavra": "Moreno (a)",
        "explicao": "Pessoas acreditam que chamar alguém de negro ou preto é ofensivo. Falar “morena” ou “mulata”  embranquecendo a pessoa, “amenizaria” o “incômodo”.",
        "sugesto": "Você deve se referir a pessoa pelo nome ou questionála como ela prefere ser descrita.",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Nega maluca",
        "explicao": "Há uma lenda que diz que o termo foi criado quando uma mulher escravizada estava fazendo um bolo e acidentalmente deixou cair cacau em pó na receita e, ao invés de descartar a massa, seguiu criando o bolo de chocolate. O termo reforça estereótipos.",
        "sugesto": "Bolo de chocolate ",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Nhaca",
        "explicao": "Desde a época colonial o termo é usado para falar de algo com cheiro forte, desagradável. O que pouca gente sabe é que Inhaca é uma ilha de Moçambique e é daí que vem o uso do termo, mais uma vez para reforçar estereótipos e preconceitos",
        "sugesto": "Cheiro ruim",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Tem o pé na cozinha",
        "explicao": "Usada de forma preconceituosa para falar de pessoas de origem negra, uma vez que na época da escravização, este era o espaço destinado às mulheres negras.",
        "sugesto": "Não usar!",
        "categoria": "Racial"
    },
    {
        "termoPalavra": "Samba do criolo doido",
        "explicao": "É o título de uma canção de samba, composta por Sérgio Porto (pseudônimo de Stanislaw Ponte Preta), que ironizava a obrigatoriedade de as escolas de samba retratarem em seus enredos apenas temas de fatos histórico. Porém a expressão debochada reforça um estereótipo e discriminação aos negros.",
        "sugesto": "Confusão, trapalhada, bagunça",
        "categoria": "Racial"
    }
];
const verbs = [
    "ar",
    "er",
    "ir"
];
/* função de match entre lista input e palavras ofensivas */
function match() {
    var input = document.getElementById("text").value.trim();
    var indice = 0;
    var count = 0;

    while (input.toLowerCase() != datas[indice].termoPalavra.toLowerCase() && indice < 44) {
        if (indice < 44) {
            indice++;
        }
        else {
            indice = 44;
        }

    }
    if (indice < 44) {
        document.getElementById("output").innerHTML = "Não use: " + '"' + datas[indice].termoPalavra + '".';
        document.getElementById("sugestion").innerHTML = "Use: " + '"' + datas[indice].sugesto + '" no lugar.';
        document.getElementById("definition").innerHTML = datas[indice].explicao;
    }
    else {
        document.getElementById("output1").innerHTML = input + " não é valido."
    }

}

/* função esconder botão saiba mais */
function esconder() {
    document.getElementById("more").addEventListener("click", function () {
        document.getElementById("more").hidden = false;
    }, document.getElementById("more").hidden = true)

}

/*             */

const universeOfDiscourse = [
    "Denegrir",
    "denegrindo",
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
    "Moreno (a)",
    "Nega maluca",
    "Nhaca",
    "Tem o pé na cozinha",
    "Samba do criolo doido"
];
function getBigram(word) {
    let result = [];

    for (let i = 0; i < word.length - 1; i++) {
        result.push(word[i] + word[i + 1]);
    }

    return result;
}

function getSimilarity(word1, word2) {
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();
    const bigram1 = getBigram(word1), bigram2 = getBigram(word2);
    let similar = [];

    for (let i = 0; i < bigram1.length; i++) {
        if (bigram2.indexOf(bigram1[i]) > -1) {
            similar.push(bigram1[i]);
        }
    }

    return similar.length / Math.max(bigram1.length, bigram2.length);
}

function autoCorrect(word, knownWords = universeOfDiscourse, similarityThreshold = 0.5) {
    let maxSimilarity = 0;
    let mostSimilar = word;

    for (let i = 0; i < knownWords.length; i++) {
        let similarity = getSimilarity(knownWords[i], word);
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            mostSimilar = knownWords[i];
        }
    }

    return maxSimilarity > similarityThreshold ? mostSimilar : word;
}

function submit() {
    let text = document.getElementById("text").value;

    if (text.length > 0) {
        const lastChar = text[text.length - 1];

        if (lastChar === " ") {
            text = text.split(" ");
            const lastWord = text[text.length - 2];
            text[text.length - 2] = autoCorrect(lastWord);
            text = text.join(" ");
        }

        document.getElementById("text").value = text;
    }
    else
        document.getElementById("output").innerHTML = "";
}