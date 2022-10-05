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

/*
힌트)
1. uniqueValues 변수를 만들지 않는 방법도 있다. 
2. pointer1이 가리키고 있는 자리가 어디인지 이용하는 것이다. 
    - pointer1은 처음에 0을 가리키는데, 이는 1개의 고유값을 가지고 있다는 뜻이다. 
    - pointer2가 pointer1과 다른 값을 가질 때에만, pointer1을 pointer1++로 옮긴다. => ex) pointer1이 1을 가리키면 고유값 2개
    - pointer2가 마지막 index를 가리킬 때 pointer1이 가리키고 있는 index를 이용하면, 고유값의 총 개수를 알 수 있다.
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
  let pointer2 = 1

  while (pointer2 <= sortedArray.length - 1) {
    const isSameValue = sortedArray[pointer1] === sortedArray[pointer2]
    if (isSameValue) {
      ++pointer2
    } else {
      ++pointer1
      ++pointer2
    }
  }

  return pointer1 + 1
}

console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([1, 1, 1, 2, 6])) // 3
console.log(countUniqueValues([1, -2, 4, 2, 6])) // 5
