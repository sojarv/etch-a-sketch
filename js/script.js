// doSquares makes right amount of squares and computes sizes of squares

function doSqaures(n) {

    if (n <= 100 && Number.isInteger(n)) {
        let node = document.getElementById('content');
        removeAllChildNodes(node); // deletes all previous children
        n = Math.pow(n, 2)
        for (let i = 0; i < n; i++) {
            const newDiv = document.createElement('div'); // makes a new div
            let margin = 5;

            newDiv.className = 'square'
            newDiv.id = i

            if (number > 40) { // if the size is more than 40x40 changes the margin between
                margin = 2;
                newDiv.className = 'square40'
            }

            document.getElementById('content').style.paddingRight = margin + 'px';
            document.getElementById('content').style.paddingBottom = margin + 'px';
            document.getElementById('content').style.borderRadius = margin + 'px';

            newDiv.style.width = (750 - (number * margin)) / number + 'px'; //determine h and w of each
            newDiv.style.height = (750 - (number * margin)) / number + 'px';

            document.getElementById('content').appendChild(newDiv);
            document.getElementById(newDiv.id).addEventListener("mouseover", onHover); // event listener for mouseover

        }
    } else {
        number = Number(window.prompt('How many squares do you want? (1-100)')); // ask the question again if it is not a number or is more than 100
        doSqaures(number)
    }

}

// determine on which square is the mouse
function onHover(e) {
    const idElement = e.srcElement.id; // get id of a square that is hovered
    if (number > 40) {
        document.getElementById(idElement).className = 'square40Hover';
    } else {
        document.getElementById(idElement).className = 'squareHover';
    }
}


document.getElementById('reset').addEventListener('click', reset);

// reset the grid
function reset(e) {
    number = window.prompt('How many squares do you want? (1-100)');
    doSqaures(number)
}

// removes children
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


let number = window.prompt('How many squares do you want? (1-100)'); // first question
doSqaures(number)