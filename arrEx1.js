// Quiz 배열 (배열의 특징 = 각각의 데이터는 의미가 없으나, 모여있을 때 하나의 의미가 있음.)
// How to do array? 배열 반복 하는법 || 중간에 멈추는 방법 || 건너 뛰는 방법
// 10명의 시험 성적 --> 배열
// 전체 평균
// 최저 점수 및 최고 점수

const arr = ['타노스', '아이언맨', '블랙 위도우']

console.log(arr.length)
// undefined 는 변수는 존재하나 값이 할당되지 않은 것임.
console.log(arr[0])
console.log(arr[1])
console.log(arr[2])
console.log(arr[3]) // 결과값이 undefined이며 이는 변수는 존재하나 값이 할당되지 않은 것임. (not defined와 다름)

// 맨 마지막 배열에 추가하고 싶다면 ↓↓↓↓↓
const changedLength = arr.push("블랙팬서")

// console.log(changedLength)를 하면 안됨.
console.log(arr) // 해야함.

// 맨 앞에 배열을 추가하려면

// 맨 마지막 배열을 제거하려면

// 맨 앞 배열을 제거하려면

// 배열 안 항목의 인덱스 찾는법 = indexOF(" ") || 배열에 없는 인덱스를 찾으면 -1을 반환한다. (매우중요 ★x5)
console.log(arr.indexOf("캡틴 아메리카"))

// 특정 인덱스 위치 배열의 항목을 제거하려면
arr.splice(1,1)

console.log(arr)

// 게임 - 배열 for문 돌리기

// for (let i = 0; i < arr.length; i++) {
//     console.log(i)
//     console.log(arr[i])
//
//     if(arr[i] === '블랙 위도우') {
//         break // break 는 위에서 아래로
//     }
// }
// console.log("-----------------------------------")

for (let i = 0; i < arr.length; i++) {
    if(arr[i] === '블랙 위도우') {
        continue // continue 는 아래에서 위로
    }
    console.log(i)
    console.log(arr[i])
}
console.log("-----------------------------------")