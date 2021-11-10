// 다차원 배열 => 배열안의 배열

// const arr = [ [1, 2], [3, 4] ]
// 자바의 경우 int[][] = arr ={ {1,2}, {3,4} }

const arr= [
    [90, 87, 140],
    [120, 130, 150],
    [180, 240, 200],
    [180, 140, 190]
]

const pArr = []
// 가장 매출이 좋았던 분기
// 각 분기 별 매출의 총합과 평균
for (let i = 0; i < arr.length; i++) {
    const tempArr = arr[i]
    console.log(tempArr)

    let sum = 0

    for (let j = 0; j < tempArr.length; j++) {
        sum += tempArr[j]
    }
    const tempAvg = (sum/tempArr.length).toFixed(2)
    // console.log(tempAvg)
    pArr.push(parseFloat(tempAvg))
}
console.log(pArr)

// 최고 매출 금액 찾기
let max = 0
let qtr = 0

for (let i = 0; i < pArr.length; i++) {
    if(pArr[i] > max){
        max = pArr[i]
        qtr = i
    }
}
console.log(`MAX: ${max}`)
console.log("qtr:" + (qtr+1) + "분기 입니다.")
