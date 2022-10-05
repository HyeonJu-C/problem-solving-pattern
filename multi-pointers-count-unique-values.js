/*
문제)
implement a funtion called countUniqueValues, which accepts a sorted array. 
the function counts the unique values in array.
there can be negative numbers in the array, but it will always be sorted. 
*/

/*
strategy with set)
배열을 set으로 변환한 뒤에 length를 반환한다. 

strategy with frequency counter)
1. 인풋 배열을 sort 한다. 
2. 배열의 아이템을 하나씩 순회하면서 아이템에 대한 정보를 객체에 저장한다. 
    - [-1, 1, 1, 1, 2, 4] => {-1: 1, 1: 3, 2: 1, 4: 1}
3. 객체의 크기를 반환한다. 

strategy with pointers)
1. pointer1과 pointer2를 재할당 가능한 변수로 만든다. 
2. pointer1은 배열의 첫번째 아이템을 가리키고, 2는 첫번째 아이템과 다른 값을 가진 바로 다음 아이템을 가리킨다.
3. uniqueValues라는 변수에 배열을 저장하고, pointer1이 가리키는 값을 push 한다. 
4. pointer2가 가리키는 값이 존재한다면, 이 값도 push 한다. 
5. pointer1이 2를 가리키도록 재할당하고, 2는 다시 pointer 1과 다른 값을 갖는 바로 다음 아이템을 가리킨다. 
6. pointer2가 배열의 마지막 index를 가리킬 때 까지 3~4를 반복한다. 
7. array의 length가 0이거나 1인 경우에는 pointer를 사용하지 않고 바로 값을 return 한다. 
*/

function countUniqueValues(array = []) {
  const copiedArray = [...array]
  const sortedArray = copiedArray.sort((a, b) => a - b)

  switch (array.length) {
    case 0:
      return 0
    case 1:
      return 1
    default:
      break
  }

  let pointer1 = 0
  let pointer2 = sortedArray.findIndex((item) => item !== sortedArray[pointer1])
  let uniqueValues = [sortedArray[pointer1]]

  while (pointer2 !== -1) {
    uniqueValues.push(sortedArray[pointer2])
    pointer1 = pointer2
    pointer2 = sortedArray.findIndex(
      (item, index) => index > pointer1 && item !== sortedArray[pointer1],
    )
  }

  return uniqueValues.length
}

console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([1, 1, 1, 2, 6])) // 3
console.log(countUniqueValues([1, -2, 4, 2, 6])) // 5
