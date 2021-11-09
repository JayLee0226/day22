// 숫자 => 배열에 검사
// -1 => push
// 0...1...2
// 다시 뽑아야함 continue 로
// for loop = countable        ||   while loop = uncountable
// for (초기문; 검사식; 변환식)   ||   while(검사식) { } => T || F

// Quiz 로또 만들기
// 배열 만들기 arr = [ ]
// while (true) { } 로 시작
// num = 1 ~ 45 사이의 숫자 뽑기
// 검사 if (배열안에 num 이 있는지 검사) { }
// num 이 있으면 다시 뽑아야 함으로 continue
// 길이 = arr.push(num) if ( 길이가 6이면 ) { break }
// console.log(arr)

const arr = []
while(true) {
    // 숫자 생성 1 - 45 사이의 숫자
    const num = parseInt(Math.random() * 45) + 1
    console.log(num)

    // 검사
    const index = arr.indexOf(num)

    // 중복코드 있는지 확인
    console.log(`NUM: ${num}    INDEX: ${index}`)

    if (index >= 0) {
        continue
    }
    const newLength = arr.push(num)

    if(newLength === 6) {
        break
    }
}

console.log(arr)