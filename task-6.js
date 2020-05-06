let input;
const numbers = [];
let total = 0;
while (true) {
  input = prompt('Введите число');
  if (input === null) {
    break;
  } else if (isNaN(Number(input))) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    input = Number(input);
    numbers.push(input);
  }
}
if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  console.log(`Общая сумма чисел равна ${total} `);
}
