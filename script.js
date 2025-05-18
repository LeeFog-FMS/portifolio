// Obtém a referência para a imagem do Creeper no HTML
const creeperCursor = document.getElementById('creeperCursor');

// Define os caminhos para as imagens (normal e clicado)
const normalCreeperSrc = 'img/creeper.png'; // <-- SUBSTITUA
const clickedCreeperSrc = 'img/explo.gif'; // <-- SUBSTITUA

// --- Evento principal: seguir o mouse e criar rastro ---
document.addEventListener('mousemove', (e) => {
    // 1. Mover a imagem do Creeper (código existente)
    // Posiciona o canto superior esquerdo da imagem nas coordenadas do mouse
    creeperCursor.style.left = e.clientX + -100 + 'px';
    creeperCursor.style.top = e.clientY + 'px';

    // 2. Criar uma nova bolinha para o rastro
    const trailDot = document.createElement('div');
    trailDot.classList.add('trail-dot'); // Adiciona a classe CSS para estilizar e animar

    // 3. Posicionar a bolinha onde o mouse (e o Creeper) está
    // Podemos adicionar um pequeno offset para a bolinha aparecer ligeiramente abaixo/direita do centro do Creeper
    const offsetX = 50; // Ajuste estes valores para mudar a posição das bolinhas em relação ao Creeper
    const offsetY = 30; // Ajuste estes valores

    trailDot.style.left = (e.clientX - 100 + offsetX) + 'px';
    trailDot.style.top = (e.clientY + offsetY) + 'px';

    // 4. Adicionar a bolinha ao corpo do documento
    document.body.appendChild(trailDot);

    // 5. Configurar para remover a bolinha após o fim da animação CSS
    // Usamos 'animationend' para saber quando a animação 'fadeOut' terminou
    trailDot.addEventListener('animationend', () => {
        trailDot.remove(); // Remove o elemento do DOM
    });
});

// --- Evento para trocar a imagem ao clicar (pressionar o botão) ---
document.addEventListener('mousedown', () => {
    creeperCursor.src = clickedCreeperSrc;
    creeperCursor.alt = "Creeper Cursor Clicado";
      
});

// --- Evento para voltar a imagem ao soltar o botão ---
document.addEventListener('mouseup', () => {
  setTimeout(() => {
    creeperCursor.src = normalCreeperSrc;
    creeperCursor.alt = "Creeper Cursor Normal";
  }, 1000);  
  
  
});

// --- Adiciona um fallback caso as imagens não carreguem ---
creeperCursor.onerror = () => {
    console.error("Erro ao carregar uma das imagens do cursor. Verifique os caminhos.");
    // Opcional: Voltar ao cursor padrão do sistema e esconder a imagem quebrada
    document.body.style.cursor = 'auto';
    creeperCursor.style.display = 'none';
};