const names = [];
const input = document.querySelector('input');
const button = document.querySelector('button');
const div = document.querySelector('div');

const addName = (e) => {
    e.preventDefault();
    const newName = input.value;
    if (input.value.length) {
        for (name of names) {
            if (name === newName) {
                alert('stop');
                return;
            }
            input.value = '';
        }
        names.push(newName);
        div.textContent += newName + ', ';
        input.value = '';
    }
}

button.addEventListener('click', addName);