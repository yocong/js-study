// for (var i = 1; i <= 50; i++) {
//   console.log(i);
//   if (i > 10) {
//     break;
//   }
//   console.log(i);
// }

console.log("================");
grape: for (var i = 0; i < 3; i++) {
strawberry: for (var j = 0; j < 2; j++) {
    // 안쪽 for문만 break 걸림
    if (i === j) {
      break strawberry;
    }
    console.log(`${i},${j}`);
  }
}
