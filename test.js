
// const readLine = require('readline-sync');

// console.log("ODD EVEN")
// const answer = readLine.prompt()

// console.log(answer)

// 반지름 10, 20의 도넛 모양의 넓이를구하시오
// 가장 큰 로직 : 큰 원의 넓이 - 작은 원의 넓이 || 원A의 넓이 - 원B의 넓이 ||
// 주어진 데이터 : 반지름 2개 10 / 20
// 고민1. 변수를 같이 또는 따로 선언해야하는지
// 고민2. 따로 구해야하니 R1과 R2로 선언
// 고민3. 주어진 데이터로 원의 넓이를 구해야 함 (계산 || 연산) --> 변수로
// 원A의 넓이와 원B의 넓이를 변수로 잡음 넓이를 구한다음 갭을 구해야 함 (연산 = 변수로)
// 넓이의 차이(연산결과 = 변수로)
// 사용자의 입력하는 것을 변수로 잡아놓고 시작
// 원의넓이 계산 반지름 제곱 Math.pow(1, 2) x 원주율(파이) Math.PI

const num1 = Math.pow(10,2)
const num2 = Math.pow(20,2)

const r1 = num1 * Math.PI
const r2 = num2 * Math.PI

console.log(r1)
console.log(r2)
let gap = r2 - r1
gap = gap.toFixed(2) // 소수점 2째 자리 까지 화면에 표시하기
console.log(gap)

// 강사님 풀이
// 주어진 데이터
// const r1 = 10
// const r2 = 20

// 원의 넓이
// const area1 = Math.pow(r1,2) * Math.PI
// const area2 = Math.pow(r2,2) * Math.PI

// 차이 계산
// let gap = area1 - area2

// 문제점 (음수가 발생한다면?)
// if || 삼항연산자 사용

// if (gap < 0) {
//    gap *+ -1
//    }

// 삼항연산자
// gap = gap < 0 ? gap * -1 : gap

// 도형의 넓이
// console.log("이 도형의 넓이는" + gap "입니다.")
// console.log(`이 도형의 넓이는 ${gap} 입니다.`) 빽틱? 빽핑? 사용용