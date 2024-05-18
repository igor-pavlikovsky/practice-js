// Створіть масив styles з елементами 'Джаз' і 'Блюз'
//Додайте в кінець 'Рок-н-ролл'
//Заменіть значення 'Блюз' на 'Класика'
// Напишіть функцію logItems (array), яка приймає
// масив і використовує цикл for, який для кожного елемента
//буде виводити повідомлення у форматі:
//<номер елемента> - <значення елемента>
//Нумерація має починатись з 1

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// // styles[1] = 'Класика';
// const index = styles.indexOf('Блюз');
// if (index !== -1) {
//   styles[index] = 'Класика';

// }

// function logItems (array) {
//   for (let i = 0; i < array.length; i +=1) {
//     console.log (`${i + 1} - ${array[i]}`);

//   }

// }

// logItems(styles);

// Напиши функцію, яка перебирає масив логінів і перевіряє
// чи є ім'я введене в інпут у цьому масиві і у разі,
// якщо є - виводить повідомлення "Доступ дозволено"
// в іншому випадку - "Користувач не знайден"
// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin (logins) {
//   const login = prompt("Enter Login");
//   // for (const name of logins) {
//   //   if (name === login) {
//   //     return "Доступ дозволено";
//   //   }
//   // }
//   // return "Користувач не знайден";
//   return logins.includes(login) ? "Доступ дозволено" : "Користувач не знайден";

// }
// console.log(checkLogin(logins));

// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sum(someArr) {
//   const newArray = [];
//   for (let i = 0; i < someArr.length - 1; i += 1) {
//     const current = someArr[i];
//     const next = someArr[i + 1];
//     newArray.push(current + next);
//   }
//   return newArray;
// }

// console.log(sum(someArr));

//Напиши скрипт, який для об'єкту user,
//послідовно:
//1 додасть поле mood зі значенням 'happy'
//2 замінить hobby на 'skydiving'
//3 замінить значення premium на false
//4 виводить зміст об'єкта users у форматі
//'<ключ>:<значення>' використовуя Object.keys() та for...of
const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

const userKeys = Object.keys(user);
for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}
