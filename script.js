document.addEventListener("DOMContentLoaded", function() {
const container = document.getElementById('container');
const totalDivs = 256;


for (let i = 0; i < totalDivs; i++) {
    let div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);

}
});

