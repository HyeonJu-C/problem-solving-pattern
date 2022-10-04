/*
문제)
1. write a function called sumZero which accepts a sorted array of integers. 
2. the function should find the first pair where the sum is 0.
3. return an array that includes both values that sum to zero or undefined if a pair doesn't exist.
*/

/*
strategy)
1. 배열을 오름차순으로 sort 한다. 
2. 주어진 배열에 0이 있다면, 0을 제외한 아이템으로만 이뤄진 새로운 배열을 만든다. 
    - sumZero([0, 0, 1, 5])를 true로 처리할 것인지, false로 처리할 것인지에 대한 언급은 문제에 없음
    - 일단은 내 마음대로 0이 있으면 제외하는 거로 함
3. 배열의 아이템을 순서대로 iterate 하면서, 합을 0으로 만드는 pair 아이템이 존재하는지 확인한다. 
4. pair가 존재하면 배열을, 아니면 undefined을 반환한다. 
5. 리팩토링
    - 오름차순으로 정렬한 배열의 첫번째 아이템이 양수라면, undefined을 바로 return 한다. 
    - 마지막 아이템이 음수일 때에도 undefined을 return 한다. 
*/

/*
힌트 => strategy2)
1. 가장 작은 숫자에서 시작하는 포인터와 큰 숫자에서 시작하는 포인터, 즉 두 가지 포인터를 이용한다. 
2. smallest + largest의 값을 계산한다. 
    - 이 값이 0일 때 => 반환  
    - 음수일 때 => 가장 작은 숫자의 포인터를 + 방향으로 이동
    - 양수일 때 => 가장 큰 숫자의 포인터를 - 방향으로 이동
3. 포인터가 이동된 상태에서 두 숫자의 값을 계산한다. 
4. 2번 과정을 반복한다. 
    - 이 때 포인터를 무한히 이동시키지 않는다.
    => 나) smallest의 index가 length보다 크지 않고, largest의 index가 0보다 작지 않을 때 까지 반복문 실행
    => 강의) smallest <= largest인 동안만 반복문 실행
+) 중복되는 숫자가 있을 때 그 부분은 어떻게 처리할 것인지에 대한 고려
*/

function sumZero(array = []) {
  const copiedArray = [...array]

  // 1. filter and sort
  const sortedArray = copiedArray //
    .filter((item) => item !== 0)
    .sort((prev, current) => prev - current)

  // 2. smallest + largest
  let smallestIndex = 0
  let largestIndex = sortedArray.length - 1

  while (smallestIndex <= largestIndex) {
    let sum = sortedArray[smallestIndex] + sortedArray[largestIndex]

    if (sum === 0) {
      return [sortedArray[smallestIndex], sortedArray[largestIndex]]
    }
    if (sum > 0) {
      largestIndex -= 1
    }
    if (sum < 0) {
      smallestIndex += 1
    }
  }
}

console.log(sumZero([-5, 5, 0, 9])) // [-5, 5]
console.log(sumZero([-3, 0, 9, 7, 5])) // undefined
