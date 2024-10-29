
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function removeLetters(str, letters) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!letters.includes(str[i])) {
      result += str[i];
    }
  } return result;
}

let inputString = prompt('Введіть рядок');
let lettersToRemove = prompt('Введіть символи для видалення').split('');
console.log(removeLetters(inputString, lettersToRemove));
