// 불변 리스트 (JS Object)

let list = [
  { id: 1, name: '홍길동', age: 20, addr: '서울', tel: '010-1111-1111' },
  { id: 2, name: '이순신', age: 30, addr: '부산', tel: '010-2222-2222' },
  { id: 3, name: '강감찬', age: 40, addr: '대전', tel: '010-3333-3333' },
];

// 1. 추가
let t1 = [...list, { id: 4, name: '유관순', age: 50 }];
console.log(t1);

// 2. 검색
let t2 = list.filter(item => item.name === '이순신');
console.log(t2);

// 3. 삭제
let t3 = list.filter(item => item.age >= 30);
console.log(t3);

// 4. 수정 (id : 3인 사람의 나이를 70)
let t4 = list.map(item => {
  if (item.id != 3) return item;
  else return { ...item, age: 70 };
});

// 가능은 하지만 잘못된 코드 (Object 내부의 item 값을 직접 수정)
// let t41 = list.map(item => {
//   if (item.id != 3) return item;
//   else {
//     item.age = 70;
//     return item;
//   }
// });

console.log(t4);
// console.log(t41);

// 5. 수정 (2) (id = 3인 사람의 주소를 제주로 변경)
let t5 = list.map(item => (item.id === 3 ? { ...item, addr: '제주' } : item));
console.log(t5);
