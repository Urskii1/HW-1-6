//6.6.1.

palindrome("Довод")

function palindrome(str) {
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");
}

palindrome("Сантимент")

function palindrome(str) {
    str = str.toLowerCase();
    return str === str.split("").reverse().join("");
}


//6.6.3.

const promptText = prompt('Введите любое число');

const newArray = [];
    for (let i = 1; i <= 5; i += 1) {
        newArray.push(i);
    }

//6.6.4.

const board = [
    ['x', 'o', 'x'],
    ['o', 'x', 'o'],
    ['x', 'o', 'x']
];

for (let i = 0; i < board.length; i++) {
    console.log(board[i].join(' '));
}

//6.6.5. 

const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

Object.values(obj) // Выходные данные: ["some", "text", 1, 2, 3, 4, 5, "there"]