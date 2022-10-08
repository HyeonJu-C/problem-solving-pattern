/*
문제) 
1. given a sorted array of integers, write a function called search, 
    that accepts a value and returns the index where the value is located.
2. if the value is not found, returns -1.  
*/

/*
강의 내용) linear search vs. binary search 맛보기
1. linear search 
    - 배열 전체를 순회하며 찾고자 하는 값을 검색한다. 
    - O(N)의 시간 복잡도를 갖는다. 
2. binary search 
    - 정렬된 배열의 중간값을 기준으로 찾고자 하는 값을 검색한다
    - O(logN)의 시간 복잡도를 갖는다. => 배열의 길이가 1보다 작거나 같은 값이 될 때 까지 2로 나눈다.

*/

function search(array = [], value = 0) {
  let possibleMin = 0
  let possibleMax = array.length - 1

  while (possibleMin <= possibleMax) {
    let middle = Math.floor((possibleMin + possibleMax) / 2)
    if (array[middle] === value) return middle
    if (array[middle] > value) {
      possibleMax = middle - 1
    }
    if (array[middle] < value) {
      possibleMin = middle + 1
    }
  }
  return -1
}

console.log(search([1, 2, 3, 4, 5, 6, 7], 7)) // index 6
