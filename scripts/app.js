//Vars:
const fecharMenuIniciar = document.getElementById('fecharMenuIniciar');
const menuIniciar = document.getElementById('menuIniciar');
const menuIniciarJanela = document.getElementById('menuIniciarJanela');

//Funcionalidades:
const toggleMenuIniciar = () => {
    const aberto = menuIniciarJanela.classList.toggle('open');
    menuIniciar.style.transform = aberto ? 'translateY(-1100%)' : 'translateY(0)';
};

menuIniciar.addEventListener('click', toggleMenuIniciar);
fecharMenuIniciar.addEventListener('click', toggleMenuIniciar);