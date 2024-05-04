//Використовуя функцію if...else,
//напишіть код, який буде питати:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
//то показати через alert: "Вірно!"
//в противному випадку відобразити:"Не знаєте? ECMAScript!"

// const answer = prompt("Яка офіційна назва JavaScript?");
// console.log(answer);
// if (answer === "ECMAScript") {
//     alert("Вірно!")
// } else {
//     alert("Не знаєте? ECMAScript!")

// }

//Напишіть программу, яка отримує від користувача
//число (кількість хвилин) и виводить у консоль
//рядок у форматі годин та хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const answer = prompt("Enter number");
// let hours = parseInt(answer / 60);
// let minutes = answer % 60;
// hours = String(hours).padStart(2, "0");
// minutes = String(minutes).padStart(2, "0");
// console.log(`${hours}:${minutes}`);

// "abc".padStart(8, "0");

//Напишіть цикл, який виводить в консоль
//числа от max до min по зменьшенню
//Виведіть в консоль суму усіх парних чисел


// const max = 100;
// const min = 10;
// let total = 0;
// for (let i = max; i >= min; i--) {
//     console.log(i); 
//     if (i % 2 === 0) {
//         total += i;
//     }    
// }
// console.log(total);

// function numbers (max, min){
//     let total = 0;
//     for (let i = max; i >= min; i--) {
//         console.log(i); 
//         if (i % 2 === 0) {
//             total += i;
//         }    
//     }
//     return total;
    
// }
// console.log(numbers (100, 10));

// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = Number(prompt("введіть цифру від 1 до 4"));
// let result = "";
// switch (num) {
//     case 1:
//         result = 'зима';
//         break;
//     case 2:
//         result = 'весна';
//         break;
//         case 3:
//         result = 'літо';
//         break;
//         case 4:
//         result = 'осінь';
//         break;
//     default:
//         result = "введіть цифру від 1 до 4";
// }
//     console.log(result);

// const num = Number(prompt("введіть цифру від 1 до 4"));
// function season(num) {
//     switch (num) {
//             case 1:
//                 return 'зима';
//             case 2:
//                 return 'весна';
//             case 3:
//                 return 'літо';
//             case 4:
//                 return 'осінь';
//             default:
//                 return "введіть цифру від 1 до 4";
//         }
//     }
//     console.log(season(num));

//Напишіть код, який буде питати
//логін за допомогою prompt и логіровати результат
//в консоль браузера
//Якщо користувач вводить "Адмін",
//то prompt запрашує пароль.
//Якщо ничого не ввели чи нажата клавіша Esc
//вивести строку "Скасовано"
//В противному випадку вивести рядок "Я вас не знаю"
//Пароль перевіряти так:
//Якщо введен пароль "Я головний",
//то вивести рядок "Вітаю!"
//в іншому випадку виводити рядок "Невірний пароль!"

// const login = prompt("введіть логін");
// console.log(login);
// if (login === "Адмін") {
//     const password = prompt("Введіть пароль");
//     // if (password === "Я головний") {
//     //     alert("Вітаю!");
//     // } else {
//     //     alert("Невірний пароль!");
//     // }
//     alert(password === "Я головний" ? "Вітаю!" : "Невірний пароль!");
// }
// else if (login === "" || login === null) {
//     alert("Скасовано");
// } else {
//     alert("Я вас не знаю");
// }
