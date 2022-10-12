//const boxOnGrid = document.querySelectorAll('.grid-box');
//console.log(boxOnGrid);
const secondContainer = document.querySelectorAll('.secondContainer');
const buttonColors = document.querySelectorAll('.color-choice');
console.log(buttonColors)
const gridRow = document.querySelector('.grid-row');
const clearButton = document.getElementById('reset');
//const sixteenButton = document.getElementsByClassName('sixteen');
//const thirytTwoButton = document.getElementsByClassName('thirty-two');
//console.log(thirytTwoButton);
//const fortyEightButton = document.getElementsByClassName('forty-eight');
//const sixtyFourButton = document.getElementsByClassName('sixty-four');
const sizeButtons = document.querySelectorAll('.size-button');
//console.log(sizeButtons);

let gridSize = 16;

//Grid Creation
const createGrid = (gridSize) => {
    //const anotherContainer = document.createElement('div');
    //anotherContainer.classList.add('secondContainer');

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
    //container.appendChild(anotherContainer);
    

};

/*const gridChange = (size) => {
    if (sixteenButton.addEventListener('click')) {
        size = 16;
    } else if (thirytTwoButton.addEventListener('click')) {
        size = 32;
    } else if (fortyEightButton.addEventListener('click')) {
        size = 48;
    } else if (sixtyFourButton.addEventListener('click')) {
        size = 64;
    }
    return size;
}
gridChange(sizeOfGrid);*/

/*const gridChange = () => {
    for (let box of boxOnGrid) {
        box.remove()
    }
    sizeOfGrid = ;
    createGrid(gridSize);
    boxOnGrid.document.querySelectorAll('.grid-box');
}*/

const gridChange = () => {
   // let sizeOfGrid = size;
    sizeButtons.forEach((button) => {
        //console.log(sizeButtons);
        button.addEventListener('click', () => {
            if (button.classList.contains('sixteen')) {
                //sizeButtons[0].classList.add('active');
                removeElement();
                createGrid(16);
            } else if (button.classList.contains('thirty-two')) {
                //sizeButtons[1].classList.add('active');
                removeElement();
                createGrid(32);
            } else if (button.classList.contains('forty-eight')) {
                //sizeButtons[2].classList.add('active');
                removeElement();
                createGrid(48);
            } else if (button.classList.contains('sixty-four')) {
                //sizeButtons[3].classList.add('active');
                removeElement();
                createGrid(64);
            }
        }) 
    }) 
} 

console.log(gridChange)

/*const refresh = () => {
    window.location.reload;
    removeElement()  
}*/

const removeElement = () => {
    container.innerHTML = '';
}

//gridChange();
//createGrid(sizeOfGrid);

/*const boxOnGrid = document.querySelectorAll('.grid-box');
console.log(boxOnGrid);
boxOnGrid.forEach(box => {
    box.addEventListener('mouseover', () => {
        box.style.backgroundColor = 'black';
    });
});*/ 

/*const colorCreate = (name, color) => {
    const boxOnGrid = document.querySelectorAll('.grid-box');
    console.log(boxOnGrid);
    boxOnGrid.forEach(box => {
        box.addEventListener('mouseover', () => {
            box.style.backgorundColor = 'black';
        })
    })
}*/

const randomColor = () => {
    const hexDecimals = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexDecimals[Math.floor(Math.random() * 16)];
    }
    return color;
};

const colorChoice = () => {
    buttonColors.forEach((button) => {
        button.addEventListener('click', () => {
            if (button.classList.contains('black')) {
                buttonColors[0].classList.add('active');
                //colorCreate('black', '#000000');
                const boxOnGrid = document.querySelectorAll('.grid-box');
                console.log(boxOnGrid)
                boxOnGrid.forEach((box) => {
                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'black';
                    })
                });
                
            } else if (button.classList.contains('orange')) {
                buttonColors[1].classList.add('active');
                //colorCreate('orange', '#ffa31a');
                const boxOnGrid = document.querySelectorAll('.grid-box');
                console.log(boxOnGrid)
                boxOnGrid.forEach((box) => {
                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = 'orange';
                    });
                }); 
            } else if (button.classList.contains('random')) {
                buttonColors[2].classList.add('active');
                const boxOnGrid = document.querySelectorAll('.grid-box');
                console.log(boxOnGrid);
                boxOnGrid.forEach((box) => {
                    box.addEventListener('mouseover', () => {
                        box.style.backgroundColor = randomColor();
                    });
                })
            }
        });
    });
};


gridChange();
colorChoice();
createGrid(gridSize);


/*const boxOnGrid = document.querySelectorAll('.grid-box');
console.log(boxOnGrid);
boxOnGrid.forEach(box => {
    box.addEventListener('mouseover', (colorChoice));
}); */