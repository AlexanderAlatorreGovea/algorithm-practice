//   steps(2)
//         c1 c2
//     r1  '# '
//     r2  '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'

function createPyramid(n) {
  for (let row = 0; row < n; row++) {
    let stairs = "";

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stairs += "#";
      } else {
        stairs += " ";
      }
    }

    console.log(stairs);
  }
}
