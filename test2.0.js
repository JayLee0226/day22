// Quiz
// 주어진 데이타
// 1ft 당 가격은 $3.5   ||   1ft 는 30.48cm
// 창문의 높이 300cm * 200cm

// 로직생각하기
// 1. 창문 => 가로 * 2, 세로 * 2 => 전체 샷시 길이
// 2. 길이(cm) 변환 => ft
// 3. 가격 계산
// 구매는 M 단위로 가능하다면? (반올림을 해야할 가능성 있음.)
// bla.toFixed(0) 소수점 자르기
// Math 3가지 > > > Math.round() => 반올림   |   ceil() => 올림   |   floor() => 내림
const perFeet = 3.5
const width = 300
const height = 200

const totalLength = (width * 2) + (height * 2)
const totalFeet = Math.ceil(totalLength / 30.48)
console.log(totalFeet)

const totalPay = totalFeet * perFeet
const vat = totalPay * 0.1
const totalPrice = totalPay + vat

console.log(`총 가격은 ${totalPay} 이며, 부가세는 ${vat} 이고, 부가세를 포함한 가격은 ${totalPrice} 입니다.`)