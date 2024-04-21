document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const totalDivs = 256;
    const resizeButton = document.getElementById('resizeButton');


    function createGrid(squaresPerSide) {
        container.innerHTML = ''; // Clear existing grid
        const squareSize = 512 / squaresPerSide;
        container.style.gridTemplateColumns = `repeat(${squaresPerSide}, 1fr)`;



    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        let div = document.createElement('div');
        div.style.width = `${squareSize}px`; // calculates size for each square inside 512px
        div.style.height = `${squareSize}px`;
        div.classList.add('square');
        div.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#666'; // permanent color change
        });
        container.appendChild(div);

    }
}

createGrid(16); // Default grid size

    resizeButton.addEventListener('click', function() {
        let squaresPerSide = prompt("Enter the number of squares per side for the new grid (max 100):", 16);
        if (squaresPerSide !== null && !isNaN(squaresPerSide)) { //checks if user has pressed cancel button and check for a numeric value input
            squaresPerSide = parseInt(squaresPerSide); //converts string value to an integer
            if (squaresPerSide < 1 || squaresPerSide > 100) { // alert if not in range
                alert("Please enter a number between 1 and 100.");
            } else {
                createGrid(squaresPerSide);
            }
        }
    });
});

