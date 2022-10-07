/*
문제) 
1. write a function called maxSubarraySum which accepts an array of integers and a number called n. 
2. the function should calculate the maximum sum of n consecutive elements in the array. 
*/

/*
strategy)
1. 배열의 길이보다 n이 크면 null을 return 한다. 
2. subsum과 max라는 변수를 만든다.
3. i = 0부터 시작해서 n개의 아이템의 합계를 subsum에 저장한다. 
4. 그 값이 max보다 크면, max에 subsum을 할당한다. +) subsum을 0으로 초기화한다. 
5. i가 lastIndex를 가리킬 때 까지 4번을 반복한다. 
6. max를 반환한다. 
*/

/*
강의 내용)
1. sliding window 패턴은, 규모가 큰 data set이 있을 때 그 데이터의 하위 집합을 추적하는 데 용이하다.
2. 배열에 음수 아이템이 있을 때를 고려하여 sum을 0이 아닌 -Infinity로 초기화한다. 
3. 인자가 ([1, 2, 3, 4, 5], 3)로 전달될 때 1+2+3과 2+3+4... 를 매번 계산해서 비교하지 않는다.
    - 1+2+3의 값에서 1을 빼고 4를 더한 것은 2+3+4와 같다. 
*/

function maxSubarraySum2(array = [], number = 0) {
  if (array.length < number) return null

  let subSum = 0
  let max = -Infinity
  let i = 0

  while (i < number) {
    subSum += array[i]
    ++i
  }
  max = subSum

  while (i <= array.length - number + 1) {
    subSum = subSum - array[i - number] + array[i]
    max = Math.max(subSum, max)
    ++i
  }

  return max
}

console.log(maxSubarraySum2([1, 2, 5, 9], 2)) // 14
console.log(maxSubarraySum2([5, 8, 1, 5, 2], 4)) // 19
