let answer = parseInt(prompt("Please enter the number of cells in each row and column: "));
let maxWidth = 600; // O tamanho do container em pixels


function addGridSize(size) {
    const container = document.querySelector('#container');

    // Configura o container como uma grid
    container.style.width = maxWidth + 'px';
    container.style.height = maxWidth + 'px';
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;


    let cellSize = (maxWidth / size) - 2; // Subtrai 2px devido à borda de 1px em cada lado


    // Primeiro loop para as linhas
    for (let i = 1; i <= size; i++) {
        // Segundo loop para as colunas
        for (let j = 1; j <= size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('grid');
            cell.style.width = cellSize + 'px';
            cell.style.height = cellSize + 'px';
            cell.style.background = 'white';
            cell.style.border = '1px solid black';
            container.appendChild(cell);
        }
    }
}

if ([16, 32, 64].includes(answer)) {
    addGridSize(answer);
} else {
    alert("Invalid size. Please enter either 16, 32, or 64.");
}
