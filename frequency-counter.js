/*
문제) 
1. write a function called "same", which accepts 2 arrays.
2. the function should return "ture" if every value in the array has it's corresponding value squared in the second array. 
3. the targetFrequency of values must be the same. 
*/

/*
강의 내용 정리)
1. 배열이나 문자열과 같은 선형 구조의 빈도수를 비교해야 할 떄에는 객체를 이용한다. 
2. 중첩 반복문을 사용하지 않도록 주의한다. 
*/

function getFrequencyOf(array) {
  let frequency = {}
  for (const value of array) {
    frequency[value] = ++frequency[value] || 1
  }
  return frequency
}

function same(array1, array2) {
  // +) early return 로직을 추가할 수 있다.
  if (array1.length !== array2.length) return false

  const squared = array1.map((value) => value ** 2)
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
