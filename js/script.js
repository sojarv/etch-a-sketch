function doSqaures(n) {

    if (n <= 100 && Number.isInteger(n)) {
        let node = document.getElementById('content');
        removeAllChildNodes(node);
        n = Math.pow(n, 2)
        for (let i = 0; i < n; i++) {
            const newDiv = document.createElement('div');
            let margin = 5;

            newDiv.className = 'square'
            newDiv.id = i

            if (number > 40) {
                margin = 2;
                newDiv.className = 'square40'
            }

            document.getElementById('content').style.paddingRight = margin + 'px';
            document.getElementById('content').style.paddingBottom = margin + 'px';
            document.getElementById('content').style.borderRadius = margin + 'px';

            newDiv.style.width = (750 - (number * margin)) / number + 'px';
            newDiv.style.height = (750 - (number * margin)) / number + 'px';

            document.getElementById('content').appendChild(newDiv);
            document.getElementById(newDiv.id).addEventListener("mouseover", myFunction);

        }
    } else {
        number = Number(window.prompt('How many squares do you want? (1-100)'));
        doSqaures(number)
    }

}



let number = window.prompt('How many squares do you want? (1-100)');

doSqaures(number)

function myFunction(e) {
    const idElement = e.srcElement.id;
    if (number > 40) {
        document.getElementById(idElement).className = 'square40Hover';
    } else {
        document.getElementById(idElement).className = 'squareHover';
    }
}


document.getElementById('reset').addEventListener('click', reset);

function reset(e) {
    number = window.prompt('How many squares do you want? (1-100)');
    doSqaures(number)
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}