
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

function removeLeters(str, leters) {
  let result = ''; 
  for (let i = 0; i < str.length; i++) {
    if (!leters.includes(str[i])) {
      result += str[i];
    }
  } return console.log(result);
}

removeLeters(" hello world", ['l', 'd']);
removeLeters(" не хочу їсти", ['н', 'е']);
