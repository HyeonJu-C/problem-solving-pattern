/*
문제) 
given 2 strings, write a function to determine if the second string is an anagram of the first.
*/

/*
strategy)
1. string1과 string2에 대한 정보를 얻을 수 있는 함수 getCharInfo를 만든다. 
2. getCharInfo("apple")은 {a: 1, p: 2, l: 1, e:1}와 같은 정보를 반환한다.
3. string1과 string2 객체를 비교한다. 
4. string1과 string2의 info 객체의 구성이 🙌완전히 동일할 때에만🙌 true를 반환한다. 
+) every 메서드 대신 간단한 조건문을 이용해서 5n => 3n의 time complexity 적용
*/

/*
놓친 부분)
* 공백, 특수문자, 대소문자 구분... 등등과 같은 조건에 대한 고려
*/

function getCharInfo(string) {
  let info = {}
  for (const char of string) {
    info[char] = ++info[char] || 1
  }
  return info
}

function checkAnnagram(string1, string2) {
  if (string1.length !== string2.length) return false

  const charInfoOfString1 = getCharInfo(string1)
  const charInfoOfString2 = getCharInfo(string2)

  for (char in charInfoOfString1) {
    if (!charInfoOfString2[char]) return false
    if (charInfoOfString1[char] !== charInfoOfString2[char]) return false
    return true
  }
  console.log('will it be printed?') // 절대 출력되지 않는다
}

console.log(checkAnnagram('apple', 'pplae')) // true
console.log(checkAnnagram('iceman', 'cinemaa')) // false
