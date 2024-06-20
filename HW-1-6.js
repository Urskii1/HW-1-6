//6.6.1.

function checkPalindrome(str) {
    const normalStr = str.toLowerCase();
    const reverseStr = normalStr.split('').reverse().join('');

    if (normalStr === reverseStr) {
        console.log(Слово ${str} является палиндромом);
    } else {
        console.log(Слово ${str} не является палиндромом);
    }
}

checkPalindrome("Довод");
checkPalindrome("Сантимент");

//6.6.2

const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];
const uniqueSet = new Set(arr)
const uniqueArray = (Array.from(uniqueSet))
console.log(uniqueArray)

//6.6.3.

const promptText = prompt('Введите любое число');

const newArray = [];
    for (let i = 1; i <= 5; i += 1) {
        newArray.push(i);
    }
    console.log(newArray)

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
const arr = ['some', 'text', [1,2,3,4,5], 'there'];
const flatArr = arr.flat();
console.log('flatArr', flatArr)
