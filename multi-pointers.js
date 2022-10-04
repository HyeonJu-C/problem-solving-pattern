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

function sumZero(array = []) {
  const copiedArray = [...array]

  // 1. filter and sort
  const sortedArray = copiedArray //
    .filter((item) => item !== 0)
    .sort((prev, current) => prev - current)

  // 2. early return
  const smallest = sortedArray[0]
  const largest = sortedArray.at(-1)
  if (smallest > 0) return undefined
  if (largest < 0) return undefined

  // 3. check if the pair value exists
  const positiveStartIndex = sortedArray.findIndex((value) => value > 0)
  const positives = sortedArray.slice(positiveStartIndex)
  const negatives = sortedArray.slice(0, positiveStartIndex)
  const smallestPositive = positives[0]
  const largestPositive = positives.at(-1)
  const smallestNegative = negatives[0]
  const largestNegative = negatives.at(-1)

  // 3-1. early return
  if (smallestPositive + smallestNegative > 0) return undefined
  if (largestPositive + largestNegative < 0) return undefined

  // 3-2. checking with smaller size array
  const smallerSizeNumbers =
    positives.length <= negatives.length ? positives : negatives
  const largerSizeNumbers =
    positives.length > negatives.length ? positives : negatives

  for (let i = 0; i <= smallerSizeNumbers.length; i++) {
    if (largerSizeNumbers.includes(-smallerSizeNumbers[i]))
      return [smallerSizeNumbers[i], -smallerSizeNumbers[i]]
  }
}

console.log(sumZero([-5, 5, 0, 9])) // [-5, 5]
console.log(sumZero([-3, 0, 9, 7, 5])) // undefined
