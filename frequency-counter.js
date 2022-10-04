/*
1. write a function called "same", which accepts 2 arrays.
2. the function should return "ture" if every value in the array has it's corresponding value squared in the second array. 
3. the targetFrequency of values must be the same. 
*/

function getFrequencyOf(array) {
  let frequency = {}
  for (const value of array) {
    frequency[value] = ++frequency[value] || 1
  }
  return frequency
}

function same(array1, array2) {
  const squared = array1.map((value) => value * value)
  let isSame = []

  const targetFrequency = getFrequencyOf(squared)
  const array2Frequency = getFrequencyOf(array2)

  for (const key in targetFrequency) {
    isSame.push(targetFrequency[key] === array2Frequency[key])
  }
  return isSame.every((result) => result === true)
}

console.log(same([1, 3, 5, 5], [1, 9, 25, 25])) // true
console.log(same([3, 5], [9, 25, 25])) // false
