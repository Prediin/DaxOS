// FUNÇÃO ARRASTAR BARRA DE TAREFAS:
const barraDeTarefas = document.getElementById("barraDeTarefas");

function ativarDragComInercia(elemento) {
    let arrastando = false;

    let offsetX = 0;
    let offsetY = 0;

    let posX = 20;
    let posY = 20;

    let alvoX = posX;
    let alvoY = posY;

    let velocidadeX = 0;
    let velocidadeY = 0;

    let ultimoX = 0;
    let ultimoY = 0;

    // ===== CONFIG =====
    const suavidade = 0.35; // menor = mais "gelo"
    const atrito = 1;

    // ===== ESTILO =====
    elemento.style.position = "fixed";
    elemento.style.left = "0px";
    elemento.style.top = "0px";
    elemento.style.zIndex = "9999";

    // ===== LOOP DE ANIMAÇÃO =====
    function animar() {
        // movimento suave
        posX += (alvoX - posX) * suavidade;
        posY += (alvoY - posY) * suavidade;

        // inércia
        if (!arrastando) {
            alvoX += velocidadeX;
            alvoY += velocidadeY;

            const larguraTela = window.innerWidth;
            const alturaTela = window.innerHeight;

            const larguraElemento = elemento.offsetWidth;
            const alturaElemento = elemento.offsetHeight;

            // metade do elemento pode sair
            const limiteX = larguraElemento / 2;
            const limiteY = alturaElemento / 2;

            // ===== COLISÃO =====

            if (alvoX < -limiteX) {
                alvoX = -limiteX;
                velocidadeX *= -0.3;
            }

            if (alvoX > larguraTela - limiteX) {
                alvoX = larguraTela - limiteX;
                velocidadeX *= -0.3;
            }

            if (alvoY < -limiteY) {
                alvoY = -limiteY;
                velocidadeY *= -0.3;
            }

            if (alvoY > alturaTela - limiteY) {
                alvoY = alturaTela - limiteY;
                velocidadeY *= -0.3;
            }

            velocidadeX *= atrito;
            velocidadeY *= atrito;
        }

        elemento.style.transform = `
            translate(${posX}px, ${posY}px)
            scale(${arrastando ? 0.92 : 1})
        `;

        requestAnimationFrame(animar);
    }

    animar();

    // ===== INICIAR =====
    function iniciar(x, y) {
        arrastando = true;

        const rect = elemento.getBoundingClientRect();

        offsetX = x - rect.left;
        offsetY = y - rect.top;

        ultimoX = x;
        ultimoY = y;

        velocidadeX = 0;
        velocidadeY = 0;
    }

    // ===== MOVER =====
    function mover(x, y) {
        if (!arrastando) return;

        const larguraTela = window.innerWidth;
        const alturaTela = window.innerHeight;

        const larguraElemento = elemento.offsetWidth;
        const alturaElemento = elemento.offsetHeight;

        // metade do elemento pode sair da tela
        const limiteX = larguraElemento / 2;
        const limiteY = alturaElemento / 2;

        let novoX = x - offsetX;
        let novoY = y - offsetY;

        // ===== LIMITES =====

        // esquerda
        if (novoX < -limiteX) {
            novoX = -limiteX;
        }

        // direita
        if (novoX > larguraTela - limiteX) {
            novoX = larguraTela - limiteX;
        }

        // topo
        if (novoY < -limiteY) {
            novoY = -limiteY;
        }

        // baixo
        if (novoY > alturaTela - limiteY) {
            novoY = alturaTela - limiteY;
        }

        alvoX = novoX;
        alvoY = novoY;

        velocidadeX = (x - ultimoX) * 0.35;
        velocidadeY = (y - ultimoY) * 0.35;

        ultimoX = x;
        ultimoY = y;
    }

    // ===== PARAR =====
    function parar() {
        arrastando = false;
    }

    // ===== DESKTOP =====
    elemento.addEventListener("mousedown", (e) => {
        iniciar(e.clientX, e.clientY);
    });

    window.addEventListener("mousemove", (e) => {
        mover(e.clientX, e.clientY);
    });

    window.addEventListener("mouseup", parar);

    // ===== MOBILE =====
    elemento.addEventListener(
        "touchstart",
        (e) => {
            const toque = e.touches[0];

            iniciar(toque.clientX, toque.clientY);
        },
        { passive: true }
    );

    window.addEventListener(
        "touchmove",
        (e) => {
            if (!arrastando) return;

            const toque = e.touches[0];

            mover(toque.clientX, toque.clientY);

            e.preventDefault();
        },
        { passive: false }
    );

    window.addEventListener("touchend", parar);
}

ativarDragComInercia(barraDeTarefas);

// FUNÇÃO MOSTRAR APPS:
const appsBarra = document.getElementById('appsBarra');

barraDeTarefas.addEventListener('click', () => {
    
})