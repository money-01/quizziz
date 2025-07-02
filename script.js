const container = document.getElementById("cards-container");

perguntas.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const inner = document.createElement("div");
  inner.classList.add("card-inner");

  const front = document.createElement("div");
  front.classList.add("card-front");
  front.textContent = item.pergunta;

  const back = document.createElement("div");
  back.classList.add("card-back");
  back.textContent = item.resposta;

  inner.appendChild(front);
  inner.appendChild(back);
  card.appendChild(inner);
  container.appendChild(card);

  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
