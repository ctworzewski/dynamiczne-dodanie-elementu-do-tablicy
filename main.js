
const names = [];

const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const name = input.value;
    names.push(name);
    // console.log(name);
    const div = document.querySelector('div');
    div.textContent += name + ', ';
    input.value = '';
}

const button = document.querySelector('button');
button.addEventListener('click', addName);




























