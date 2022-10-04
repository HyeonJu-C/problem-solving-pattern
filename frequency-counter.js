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
  // 1. array1의 모든 값의 제곱을 아이템으로 갖는 새로운 배열을 만든다
  // square operator => value ** 2 = value^2
  const squared = array1.map((value) => value * value)
  let isSame = []

  // 2. array2가 squared의 아이템을 모두 가지고 있는지 확인한다.
  //   for (const value of squared) {
  //     const isValueExist = array2.includes(value)
  //     isSame.push(isValueExist)
  //   }

  // 2-1. 빈도수를 확인하지 않아도 되는 경우에는 바로 false를 반환한다.
  // if (isSame.includes(false)) return false

  // 3. 빈도수가 맞는지 확인한다.
  const targetFrequency = getFrequencyOf(squared)
  const array2Frequency = getFrequencyOf(array2)

  for (const key in targetFrequency) {
    isSame.push(targetFrequency[key] === array2Frequency[key])
  }

  // 4. 2, 3번의 비교 결과를 반환한다
  return isSame.every((result) => result === true)
}

console.log(same([1, 3, 5, 5], [1, 9, 25, 25])) // true
console.log(same([3, 5], [9, 25, 25])) // false
