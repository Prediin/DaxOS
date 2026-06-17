// CARREGAMENTO DE ELEMENTOS
const barraDeTarefas = document.getElementById('barraDeTarefas');

// FUNÇÕES
let timer
const TEMPO_ESPERA = 4000;

function alterarEstado() {
    barraDeTarefas.classList.add('naoAtivo');
}

barraDeTarefas.addEventListener('mousemove', () => {
    clearTimeout(timer);
    barraDeTarefas.classList.replace('');
    timer = setTimeout(alterarEstado, TEMPO_ESPERA);
});

barraDeTarefas.addEventListener('mouseenter', () => {
    clearTimeout(timer);
    barraDeTarefas.classList.remove('naoAtivo');
})