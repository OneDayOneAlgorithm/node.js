const participantNums = [
  [1, 3, 2, 2, 1],
  [3, 7, 100, 21, 13, 6, 5, 7, 5, 6, 3, 13, 21],
  [9, 1, 8, 7, 71, 33, 62, 35, 11, 4, 7, 71, 33, 8, 9, 1, 4, 11, 35],
];
for (let j = 0; j < participantNums.length; j++) {
  let lst = [];
  for (let i = 0; i < participantNums[j].length; i++) {
    if (lst.includes(participantNums[j][i])) {
      for (let k = 0; k < lst.length; k++) {
        if (lst[k] === participantNums[j][i]) {
          lst.splice(k, 1);
          break;
        }
      }
    } else {
      lst.push(participantNums[j][i]);
    }
  }
  console.log(lst);
}
// 3
// 100
// 62
