const perguntas = [
  {
    pergunta: "1 - O que foi a política café com leite?",
    opcoes: [
      "A divisão do voto entre o Norte e o Sul do Brasil",
      "A alternância de poder entre militares e civis",
      "A aliança entre São Paulo (café) e Minas Gerais (leite)",
      "Uma política de incentivo à produção agropecuária"
    ],
    correta: 2
  },
  {
    pergunta: "2 - Em que ano o Brasil se tornou uma república?",
    opcoes: [
      "1822, com a independência",
      "1888, após a abolição da escravatura",
      "15 de novembro de 1889, com a Proclamação da República",
      "1891, com a primeira Constituição republicana"
    ],
    correta: 2
  },
  {
    pergunta: "3 - Quem proclamou a República no Brasil?",
    opcoes: [
      "Floriano Peixoto",
      "Deodoro da Fonseca",
      "Dom Pedro II",
      "Benjamin Constant"
    ],
    correta: 1
  },
  {
    pergunta: "4 - O que foi o voto de cabresto?",
    opcoes: [
      "Voto obrigatório para homens",
      "Voto secreto, controlado pelo governo",
      "Voto livre das camadas populares",
      "Voto controlado por coronéis ou líderes políticos locais"
    ],
    correta: 3
  },
  {
    pergunta: "5 - Qual foi o principal produto de exportação do Brasil durante a República Velha?",
    opcoes: [
      "Açúcar, com destaque para o Nordeste",
      "Café, especialmente produzido em São Paulo e Minas Gerais",
      "Algodão, impulsionado pelo mercado externo",
      "Borracha, da região amazônica"
    ],
    correta: 1
  },
  {
    pergunta: "6 - Quem foi o líder da Era Vargas?",
    opcoes: [
      "Juscelino Kubitschek, responsável pelo Plano de Metas",
      "Getúlio Vargas, presidente entre 1930 e 1945 e entre 1951 e 1954",
      "Washington Luís, deposto pela Revolução de 1930",
      "Eurico Gaspar Dutra, eleito após o Estado Novo"
    ],
    correta: 1
  }
];

let indiceAtual = 0;

function mostrarPergunta() {
  const p = perguntas[indiceAtual];
  document.getElementById("pergunta").textContent = p.pergunta;

  const opcoesDiv = document.getElementById("opcoes");
  opcoesDiv.innerHTML = "";

  p.opcoes.forEach((opcao, i) => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.onclick = () => verificarResposta(i);
    opcoesDiv.appendChild(botao);
  });

  document.getElementById("resultado").textContent = "";
}

function verificarResposta(indice) {
  const p = perguntas[indiceAtual];
  const resultado = document.getElementById("resultado");

  if (indice === p.correta) {
    resultado.textContent = "✅ Resposta correta!";
  } else {
    resultado.textContent = `❌ Resposta errada. A correta é: ${p.opcoes[p.correta]}`;
  }

  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    setTimeout(mostrarPergunta, 2000);
  } else {
    setTimeout(() => {
      document.getElementById("pergunta").textContent = "✅ Fim do quiz! Parabéns!";
      document.getElementById("opcoes").innerHTML = "";
    }, 2000);
  }
}

mostrarPergunta();
