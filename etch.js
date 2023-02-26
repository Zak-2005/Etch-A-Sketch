const grid = document.querySelector('.grid');
const gridSize = document.querySelector('.gridSize');
buildGrid(16);
gridSize.addEventListener('click', function (e) {
    const size = prompt('How many squares per side for the new grid?');
    buildGrid(size);
});




function buildGrid(e) {
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
    for (let i = 0; i < e; i++) {
        const divRow = document.createElement('div');
        divRow.classList.add('divRow');
        for (let j = 0; j < e; j++) {
            const divCol = document.createElement('div');
            divCol.classList.add('divCol');
            divRow.appendChild(divCol);
        }
        grid.appendChild(divRow);
    }
    const divCol = document.querySelectorAll('.divCol');
    let rowElement = document.querySelector('.divRow');
    let size = 500/rowElement.childElementCount;
    divCol.forEach((div) => {
        div.style.height = `${size}px`;
        div.style.width = `${size}px`;
    });

divCol.forEach((div) => {
    div.addEventListener('mouseenter', function () {
        div.classList.add('hover');
    })
});
}

const clear = document.createElement('button');
const bottom = document.querySelector('.bottom');
clear.textContent='clear';
clear.classList.add('clear');
clear.addEventListener('click', function(){
    while(grid.hasChildNodes()){
        grid.removeChild(grid.firstChild);
    }
});
bottom.appendChild(clear);


