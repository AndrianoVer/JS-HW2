// 1.A function which prints str after n seconds

function printTimeOut() {
	console.log('hello');
}

setTimeout(printTimeOut, 2000);

//2. A function which returns sum of all numbers from 1 to n using recursion.

function sumAll(n) {
	if (!n) return 0; // якщо число не задано, то поверни 0;
	let sumResult = 0; // початкове значення змінної sumResult = 0;
	for (i = 0; i <= n; i++){ // використовуємо цикл for для перебору кожної ітерації від 0 до n;
		sumResult += i; // sumResult = sumResult + i;
	}
	return sumResult; 
}
console.log(sumAll(2)); // 3
console.log(sumAll(4)); // 10

// 3.A function which takes str and time in seconds as arguments, then every second
// it should count down from time to 0 and print current time to console when time equals to 0 it prints str

function bombTimer(str, time) {
	let i = time;
	let countDown = setInterval(function () {
		if (i == 0) {
			clearInterval(countDown); i--;
		} 
		if (time >= 1) {
			console.log(time); time--;
		} else {
			console.log(str);
		}
	}, 1000);
}
bombTimer('Boooom!', 3)


//4. A function which returns factorial of number using recursion
function factorial(n) {	
	let multResult = 1; 
	for (i = 1; i <= n; i++) { 
		multResult *= i;  
	}
	return multResult;
}
console.log(factorial(3)); // 6
console.log(factorial(5)); // 120

//5. Implement function from task №3 (bombTimer) using recursion and setTimeout.

function bombTimer(str, time, timeInterval) {
	if (time !== 0) {
		const timer = setTimeout(() => {
			console.log(time);
			clearTimeout(timer);
			bombTimer(str, time - 1, timeInterval);
		}, timeInterval);
	} else if (time === 0) {
		const stringDelay = setTimeout(() => {
			clearTimeout(stringDelay);
			console.log(str);
		}, timeInterval);
	}
	return str;
}
bombTimer('Booom!', 5, 1000);

//6.A function which takes an array of numbers and maxNumber,
// the function returns new array with numbers not higher than maxNumber
function filterNumbers(arr, maxNumber) {
	let arrIncome = arr;
	let filterArr = arrIncome.filter(function(number) {
		return number < maxNumber;
	});	 
	return filterArr;
}
console.log(filterNumbers([1, 4, 8, 1, 20], 5));

// 7. A function that returns object with min and max numbers from array of numbers.

function minMax(arr) {
	let ArrSort = [];
	let minNumber = Math.min(...arr);
	let maxNumber = Math.max(...arr);
	arr.forEach(item => {
		if (item == minNumber || item == maxNumber) {
			ArrSort.push(item);			
		}
	});
	return ArrSort;	
}
console.log(minMax([1, 4, 8, 2, 20]));

//8. A function that returns average of numbers in array.

function minMax(arr) {
	let average = 0;
	const sum = arr.reduce((total, next) => total + next, 0);
	const count = arr.length;
	average = sum / count;
	return +average.toFixed(2);
}
console.log(minMax([1, 4, 2])); // 2.33

//9. A function which concats all first-nested arrays in one array (use reduce):
function concatFirstNestedArrays(arr) {
	let concatArr = arr.reduce((sumArr, currentArr) => {
		return sumArr.concat(currentArr, []);
	});	
	return concatArr;
}
console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]])); // [0, 1, 2, 3, 4, 5]

//11. A function returns array of users that have birthdays in a specific month.
const usersNew = [
	{
		name: 'John',
		birthday: '1999-2-12'
	},
	{
		name: 'Bill',
		birthday: '1999-1-19'
	},
	{ 
		name: 'Carol',
		birthday: '1999-4-11'
	},
	{ 
		name: 'Luce',
		birthday: '1999-2-22'
	}
];

function filterUsersByMonth(usersNew, month) {
	let filterObj = usersNew.filter(usersItem => new Date(usersItem.birthday).getMonth() === month);
	return filterObj;
}

console.log(filterUsersByMonth(usersNew, 0));

// 12.A function returns name and age of users separated by comma that are older than 18.
const users = [
	{
		name: 'John',
		birthday: '1999-6-12'
	},
	{
		name: 'Bill',
		birthday: '2005-5-19'
	},
	{
		name: 'Carol',
		birthday: '2003-10-11'
	},
	{
		name: 'Luce',
		birthday: '2000-11-22'
	}
];

function getAdultNames(users) {
	let res = [];

	for (let i = 0; i < users.length; i++) {
		let dateNow = new Date();			
		let userBirthday = Math.ceil(((dateNow - new Date(users[i].birthday)) / 31536000000));						
		if (userBirthday > 18) {			
			res.push(users[i].name + ',', userBirthday);
		}	
	}
	return res.join(' ');
};
console.log(getAdultNames(users)); 
