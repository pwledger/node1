// 변수

var a = 10 // 이름 중복 허용
let b = 20 // 이름을 중복으로 변수를 만들수 없다
const c = 30 // 상수

console.log(`a = ${a}`)  // print(f"")

// 조건
var a = 100 // > ,< ,== , != , >= ,<=
if (a > 100){
    console.log("크다")
}
else if (a < 100){
    console.log("작다")
}
else{
    console.log("같다")
}

// 반복
for (var i = 0 ; i < 10 ; i+=2){
    console.log(i)
}
console.log("-------------------------")
i = 0
while (i < 10){
    console.log(i)
    i++
} 
console.log("--------------------")
// 리스트 
var list = [1,2,3,4]
console.log(list[0])

// 추가
list.push(10) 
// 삭제 
list.pop()  
// 리스트 길이
console.log(list.length)  

// 함수 
function 함수이름(n,m){
    return n+m
}
a = 함수이름(10,20)
console.log(a)