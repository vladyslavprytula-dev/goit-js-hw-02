const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const isLoginValid = function (login) {
  const isValid = login.length >= 4 && login.length <= 16 ? true : false;
  return isValid;
};

const isLoginUnique = function (allLogins, login) {
  let isUnique;
  if (allLogins.includes(login)) {
    isUnique = false;
  } else {
    isUnique = true;
  }
  return isUnique;
};

const addLogin = function (allLogins, login) {
  let message;
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      logins.push(login);
      message = 'Логин успешно добавлен!';
    } else {
      message = 'Такой логин уже используется!';
    }
  } else {
    message = 'Ошибка! Логин должен быть от 4 до 16 символов';
  }
  return message;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);
