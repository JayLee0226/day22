// 빈 배열을 하나 만든다.
// 1단계 배열에 숫자를 채워 넣는다. => 1 ~ 45까지 숫자를 반복문으로
// 2단계 배열에서부터 6번 뽑기

// 1단계
const arr = []

for (let i = 1; i <= 45; i++) {
    arr.push(i)
}
console.log(arr)

// 2단계
for (let i = 0; i < 6; i++) {
    const idx = parseInt(Math.random() * arr.length)
    arr.splice(idx,1)
    console.log(arr)
}