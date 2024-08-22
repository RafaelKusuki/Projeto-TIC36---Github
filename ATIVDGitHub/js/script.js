document.addEventListener("DOMContentLoaded", () => {
    const resolucaoElemento = document.getElementById("resolucao");
    const botoesNumericos = document.querySelectorAll("[data-numero]");
    const botaoIr = document.getElementById("botao-ir");
    const botaoApagar = document.getElementById("apagar-ultimo");
    const botaoNivel2 = document.getElementById("nivel2-button");
    const botaoNivel3 = document.getElementById("nivel3-button");
    const botaoVitoria = document.createElement("button");

    botaoVitoria.id = "vitoria-button";
    botaoVitoria.innerHTML = 'Vitória';
    botaoVitoria.classList.add("botao-vitoria");
    botaoVitoria.style.display = "none"; // Esconde o botão inicialmente
    document.querySelector("section").appendChild(botaoVitoria); // Adiciona o botão à seção principal

    let resposta = "";

    botoesNumericos.forEach((botao) => {
        botao.addEventListener("click", () => {
            resposta += botao.dataset.numero;
            resolucaoElemento.textContent = resposta;
        });
    });

    botaoApagar.addEventListener("click", () => {
        resposta = resposta.slice(0, -1); // Remove o último caractere da resposta
        resolucaoElemento.textContent = resposta || "_"; // Atualiza o texto ou retorna ao estado inicial
    });

    botaoIr.addEventListener("click", () => {
        const respostaCorretaN1 = "13"; // Resposta correta para o nível 1
        const respostaCorretaN2 = "10"; // Resposta correta para o nível 2
        const respostaCorretaN3 = "9,67"; // Resposta correta para o nível 3

        resolucaoElemento.classList.remove("correto", "incorreto"); // Remove classes de correção anterior

        if (resolucaoElemento.textContent === respostaCorretaN1) {
            resolucaoElemento.classList.add("correto");
            botaoNivel2.classList.add("show"); // Exibe botão para Nível 2
        } else if (resolucaoElemento.textContent === respostaCorretaN2) {
            resolucaoElemento.classList.add("correto");
            botaoNivel3.classList.add("show"); // Exibe botão para Nível 3
        } else if (resolucaoElemento.textContent === respostaCorretaN3) {
            resolucaoElemento.classList.add("correto");
            botaoVitoria.style.display = "inline-block"; // Exibe botão de Vitória
        } else {
            resolucaoElemento.classList.add("incorreto");
        }
    });
});
