const input = document.getElementById('favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement("li");
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = "❌";
        list.append(li);
        li.append(deleteButton);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
            input.value = '';
        })
    }
    else {
        alert("Enter a value:");
        input.focus();
    }
    input.focus();
})


