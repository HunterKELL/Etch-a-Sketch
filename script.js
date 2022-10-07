const container = document.getElementById('container');
//const boxOnGrid = document.querySelectorAll('grid-box');
//const buttonColors = document.querySelectorAll('.color-choice');
const gridRow = document.querySelector('.grid-row');
const sizeOfGrid = 29;

//Grid Creation
const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < gridSize; j++) {
            const widthAndHeight = 920 / sizeOfGrid;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            row.appendChild(gridBox);
            // dynamically change grid box
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            //gridBox.addEventListener('mouseover', (e) => {
                //e.target.style.backgroundColor ='black';
           // });
        };

        container.appendChild(row);
    };

};

createGrid(sizeOfGrid);

const boxOnGrid = document.querySelectorAll('.grid-box');
boxOnGrid.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    });
});



/*const colorCreate = (name, color) => {
    const boxOnGrid = document.querySelectorAll('.grid-box');
    boxOnGrid.forEach((box) => {
        if (name === 'black') {
            box.addEventListener('mouseenter', (e) => {
                e.target.style.backgroundColor = color;
            });
        };
    });
};

/*const colorChoice = () => {
    const buttonColors = document.querySelectorAll('.color-choice');
    buttonColors.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('black')) {
                buttonColors[0].classList.add('active');
                generateColor('black', '#000000');
            };
        });
    });
}; */