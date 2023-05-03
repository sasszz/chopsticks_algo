const randomBool = () => {
  // Will generate a 0 or 1 at random
  const randomInt = Math.round(Math.random());
  return randomInt;
};

let leftRightArray = ["Left", "Right"];
let newVarTest = `black${leftRightArray[randomBool()]}`;

console.log(newVarTest);

// let decisionVarTwo = randomIntFromInterval(4);
//       switch (decisionVarTwo) {
//         case 1:
//           console.log(
//             `Case 1, whiteLeft = attack(whiteLeft ${whiteLeft}, blackLeft ${blackLeft})`
//           );
//           whiteLeft = blackAttack(whiteLeft, blackLeft);
//           break;
//         case 2:
//           console.log(
//             `Case 2, whiteRight = blackAttack(whiteRight ${whiteRight}, blackLeft ${blackLeft})`
//           );
//           whiteRight = blackAttack(whiteRight, blackLeft);
//           break;
//         case 3:
//           console.log(
//             `Case 3, whiteLeft = blackAttack(whiteLeft ${whiteLeft}, blackRight ${blackRight});`
//           );
//           whiteLeft = blackAttack(whiteLeft, blackRight);
//           break;
//         case 4:
//           console.log(
//             `whiteRight = blackAttack(whiteRight ${whiteRight}, blackRight ${blackRight};`
//           );
//           whiteRight = blackAttack(whiteRight, blackRight);
//           break;
//       }

let blackLeft = 2;
let blackRight = 1;
Math.abs(blackLeft - blackRight) > 2
? (blackRight = 2) & (blackLeft = 1)
: (blackRight = 3) & (blackLeft = 0);

console.log(blackLeft, blackRight)
