const secondContainer = document.querySelectorAll('.secondContainer');
const buttonColors = document.querySelectorAll('.color-choice');
const gridRow = document.querySelector('.grid-row');
const clearButton = document.getElementById('reset');
const sizeButtons = document.querySelectorAll('.size-button');

let gridSize = 16;

// Grid Creation
const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < gridSize; j++) {
            const widthAndHeight = 920 / gridSize;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            row.appendChild(gridBox);
            // dynamically change grid box
            gridBox.style.width = `${widthAndHeight}px`;
            gridBox.style.height = `${widthAndHeight}px`;
            
            clearButton.addEventListener('click', () => {
                const boxOnGrid = document.querySelectorAll('.grid-box');
                boxOnGrid.forEach((box) => {
                    box.style.backgroundColor = 'white';
                });
           });
        };

        container.appendChild(row);
    };

};

// Change grid sizes using buttons
const gridChange = () => {
    sizeButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('sixteen')) {
                removeElement();
                createGrid(16);
            } else if (button.classList.contains('thirty-two')) {
                removeElement();
                createGrid(32);
            } else if (button.classList.contains('forty-eight')) {
                removeElement();
                createGrid(48);
            } else if (button.classList.contains('sixty-four')) {
                removeElement();
                createGrid(64);
            }
        }); 
    });
}; 

// For removing grid container prior to changing. Prevents from creating a duplicate div container
const removeElement = () => {
    container.innerHTML = '';
};

// Uses hex color codes to create a random color. Used by colorChoice function
const randomColor = () => {
    const hexDecimals = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexDecimals[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Color choices using buttons
const colorChoice = () => {
    buttonColors.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('black')) {
                buttonColors[0].classList.add('active');
                const boxOnGrid = document.querySelectorAll('.grid-box');
                boxOnGrid.forEach((box) => {
                    box.addEventListener('mousedown', () => {
                        box.style.backgroundColor = 'black';
                    })
                });
            } else if (button.classList.contains('orange')) {
                buttonColors[1].classList.add('active');
                const boxOnGrid = document.querySelectorAll('.grid-box');
                boxOnGrid.forEach((box) => {
                    box.addEventListener('mousedown', () => {
                        box.style.backgroundColor = 'orange';
                    });
                }); 
            } else if (button.classList.contains('random')) {
                buttonColors[2].classList.add('active');
                const boxOnGrid = document.querySelectorAll('.grid-box');
                boxOnGrid.forEach((box) => {
                    box.addEventListener('mousedown', () => {
                        box.style.backgroundColor = randomColor();
                    });
                });
            }
        });
    });
};

gridChange();
colorChoice();
createGrid(gridSize);