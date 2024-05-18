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
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// const userKeys = Object.keys(user);
// for (const key of userKeys) {
//   console.log(`${key}: ${user[key]}`);
// }

//4. Створіть об'єкт calculator з трьомя методами
//read(a, b) - приймає два аргумента і зберігає їх
//як властивості об'єкта
//sum() повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті)
//mult() перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті)

// const  calculator = {
//   read(a,b){
//       if(typeof a !== "number" || typeof b !== "number"){
//       console.log("error")
//       }else{
//       this.valueA = a;
//       this.valueB = b;
//       }
//   },
//   sum(){
// if( !this.valueA || !this.valueB){
//   return "Values not found"
// }
// return  this.valueA + this.valueB
// },
// mult(){
//   if( !this.valueA || !this.valueB){
//       return "Values not found"
//   }
//   return this.valueA * this.valueB
// }
// }
// calculator.read("10", "15");
// console.log(calculator.sum());
// console.log(calculator.mult());


//5. Напишіть скрипт керування особистим кабінетом інтернет банка
//Є об'єкт account в якому необхідно реалізувати
//методи для работи з балансом та історією транзакцій
//Типів транзакцій всього два.
//Можна покласти або зняти гроші з рахунка
const Transaction = {
DEPOSIT: "deposit",
WITHDRAW: "withdraw",
};
//Кожна транзакція це об'єкт з властивостями id, type, amount
const account = {
//поточний баланс рахунка
balance: 0,
//Історія транзакцій
transactions: [],
//Метод створює і повертає об'єкт транзакцій
//Приймає сумму і тип транзакцій
createTransaction(type, amount) {
  return {
    type,
    amount,
  };
},
//Метод відповідає за додавання сумми к балансу.
//Приймає сумму транзакціи.
//Визиває createTransaction для створення об'єкта транзакціи
//після чого додає його в історію транзакцій
deposit(amount) {
  this.balance += amount;
  const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
  transaction.id = Math.random();
  this.transactions.push(transaction);
},

//Метод відповідає за зняття сумми з балансу.
//Приймає сумму транзакціи.
//Визиває createTransaction для створення об'єкта транзакціи
//після чого додає його в історю транзакцій
//Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
//що недостатньо коштів на рахунку
withdraw(amount) {
  if (amount > this.balance) {
    console.log ("Недостатньо коштів для здійснення операції");
    return;
  }
  this.balance -= amount;
  const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
  this.transactions.push({...transaction, id: Math.random()});
},
//Метод повертає поточний баланс
getBalance() {
  return this.balance;
},
//Метод шукає і повертає об'єкт транзакціи по id
getTransactionDetails(id) {
  for (const transaction of this.transactions) {
    if (transaction.id === id) {
      return transaction;
    } 
  }
  return "Transaction not found";
},
//Метод повертає кількіств коштів вказаного типу
//транзакціи зі всієї історії транзакцій
getTransactionType(type) {},
};

account.deposit(650);
account.deposit(830);
account.withdraw(680);
account.deposit(1290);
console.log(account);
console.log(account.getBalance());
console.log(account.getTransactionDetails(111));