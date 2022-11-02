const main = document.querySelector('main#main')

main.remove();

const newHeader = document.createElement('h1');
document.body.appendChild(newHeader);
newHeader.id = "victory";

newHeader.textContent = "Katherine is the champion";