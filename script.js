document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const totalDivs = 256;


    for (let i = 0; i < totalDivs; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#666';
        });
        container.appendChild(div);

    }
});

