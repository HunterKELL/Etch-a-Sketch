const container = document.getElementById('container')

const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < gridSize; j++) {
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            row.appendChild(gridBox);
        };

        container.appendChild(row);
    };

};

createGrid(16);