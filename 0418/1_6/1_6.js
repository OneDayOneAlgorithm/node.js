// 1번
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

console.log("1번 출력 결과");
for (let i = 0; i < nums.length; i++) {
  console.log("nums[" + i + "]: " + nums[i]);
}
console.log();
// for (const i = 0; i < nums.length; i++) {
//                                     ^

// TypeError: Assignment to constant variable.

// const는 값을 변경할 수 없다. 따라서 let으로 바꿔준다.

// 2번
// for in 은 문자열을 출력하므로 정수를 출력하는 for of 를 사용한다.
console.log("2번 출력 결과");
for (num of nums) {
  console.log(num, typeof num);
  // 출력 결과
  // 0 string
  // 1 string
  // 2 string
  // 3 string
  // 4 string
  // 5 string
  // 6 string
  // 7 string
}
