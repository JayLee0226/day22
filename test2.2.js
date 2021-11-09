const readLine = require('readline-sync');

// Quiz2 입력받아서 하기 + 사용자가 입력을 잘못해서 오류가 난다면 ? 어떻게 ?
// 주어진 데이타
// 1ft 당 가격은 $3.5   ||   1ft 는 30.48cm
// 창문의 높이 300cm * 200cm

// 로직생각하기 + 사용자가 잘못 입력할 시 >> 제어문 @@@@
// 1. 창문 => 가로 * 2, 세로 * 2 => 전체 샷시 길이
// 2. 길이(cm) 변환 => ft
// 3. 가격 계산
// 구매는 M 단위로 가능하다면? (반올림을 해야할 가능성 있음.)
// bla.toFixed(0) 소수점 자르기
// Math 3가지 > > > Math.round() => 반올림   |   ceil() => 올림   |   floor() => 내림
console.log("1피트당 샷시의 가격은 얼마인가요?")
const perFeet = parseFloat(readLine.prompt())

console.log("가로의 길이는 얼마인가요? cm")
const width = parseInt(readLine.prompt())

console.log("세로의 길이는 얼마인가요? cm")
const height = parseInt(readLine.prompt())


const totalLength = (width * 2) + (height * 2)
const totalFeet = Math.ceil(totalLength / 30.48)
console.log(totalFeet)

const totalPay = totalFeet * perFeet
const vat = totalPay * 0.1
const totalPrice = totalPay + vat

console.log(`총 가격은 ${totalPay} 이며, 부가세는 ${vat} 이고, 부가세를 포함한 가격은 ${totalPrice} 입니다.`)