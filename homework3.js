

//1// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
//     [1, 2, 3, 0, 4, 5, 6]

// const num = [1, 2, 3, 0, 4, 5, 6]
// const numSquare = num.map(el => el ** 2)
//
// console.log(numSquare)


//...............................................................................................................


//2 // Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// [1, 2, 3, 0, 4, 5, 6]
//
// const num = [1, 2, 3, 0, 4, 5, 6]
// const numbers = num.filter(el => el > 0 )
//
// console.log(numbers.length === num.length)


//...............................................................................................................

//3//  Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
//     [1, 2, -3, 0, 4, -5, 6]
// //
// const num = [1, 2, -3, 0, 4, -5, 6]
// const numbers = num.map(el => el < 0 )
//
// console.log(numbers.length === num.length)

//................................................................................................................

//4//  Дан массив с числами. Оставьте в нем только отрицательные числа.
//     [1, 2, -3, 0, 4, 5, -6]

// const num = [1, 2, -3, 0, 4, 5, -6]
// const numFilter = num.filter(el => el < 0)
// console.log(numFilter)


//.................................................................................................................

//5//  Дан массив с числами. Оставьте в нем только четные числа.
//     [1, -2, 3, 0, 4, -5, 6]

// const num = [1, -2, 3, 0, 4, -5, 6]
// const numFilter = num.filter(el => el % 2 === 0)
// console.log(numFilter)


//..................................................................................................................


//6//  Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
//  ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun, 'even]

// const text = ['hello', 'sit', 'ipsum', 'javascript', 'python', 'sun', 'even']
// const longText = text.filter(el => el.length > 5)
// console.log(longText)


//...............................................................................................................

//7//  Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
//     [1, 2, -3, 0, -4, 5, -6]

// const num =  [1, 2, -3, 0, -4, 5, -6, -9]
// let count = 0;
//
// for (let i = 0; i < num.length; i++) {
//     if (num[i] < 0) {
//         count++;
//     }
// }
// console.log(count)

//................................................................................................................

//8//  Дан массив с числами. Найдите сумму этих чисел.
// [1, 2, 3, 33, 4, 5, 6]

// const number = [1, 2, 3, 33, 4, 5, 6]
// const numberSum = number.reduce((acc , el) =>{
//         return acc + el
// })
// console.log(numberSum)