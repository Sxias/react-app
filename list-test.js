// 불변 리스트 (schalar)

let list = [1, 2, 3, 4, 5];

// 1. 추가
let t1 = [0, ...list, 6];
console.log(t1);

// 2. 검색
let t2 = list.filter(item => item > 3);
console.log(t2);

// 3. 삭제
let t3 = list.filter(item => item !== 5);
console.log(t3);

// 4. 수정
let t4 = list.map(item => item * 2);
console.log(t4);
