//1. Get total orders

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

function totalOrders(arr) {
  const result = arr.reduce((acc, item, i) => {
    acc += item.amount;
    //console.log(item.amount);
    return acc;
  }, 0);
  return result;
}

console.log(totalOrders(orders));

//2. Increment by 1

function incrementbyOne(arr) {
  const result = arr.map((item) => item + 1);
  return result;
}
const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
console.log(incrementbyOne(arrayOfNumbers));

// 3.Filter Evens

function filterEvens(arr) {
  const result = arr.filter((item, i) => {
    //console.log(item);
    if (item % 2 === 0) {
      return item;
    }
  });
  return result;
}

console.log(filterEvens([1, 2, 3, 11, 12, 13]));
console.log(filterEvens([22, 2, 31, 110, 6, 13]));

//4. 4. Filter Friends
const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function filterFriends(arr, str) {
  const result = arr
    .filter((item, i) => item.includes(str))
    .map((item) => item[0].toUpperCase() + item.slice(1));

  return result;
}

console.log(filterFriends(friends, "ka"));
console.log(filterFriends(friends, "e"));

//5. Sum up

function sum(arr) {
  const result = arr.reduce((acc, item) => (acc += item), 0);
  return result;
}

console.log(sum([1, 2, 3, 4, 5]));
console.log(sum([6, 7, 7]));

//6. Square Root

function squareRoot(arr) {
  const result = arr.map((item) => Math.sqrt(item));
  return result;
}

console.log(squareRoot([16, 81, 9]));
console.log(squareRoot([144, 729, 25]));
