// ##################################################################################################//
/////////////////////////////////////// CHOPSTICKS GAME ALGORITHM //////////////////////////////////////
// ##################################################################################################//

// INITIALIZE VARIABLES //////////////////////////////////////////////////////////////////////////////
let whiteRight = 1,
  whiteLeft = 1,
  blackRight = 1,
  blackLeft = 1;

let whiteTotalFingers = whiteLeft + whiteRight;
let blackTotalFingers = blackLeft + blackRight;

export {
  whiteRight,
  whiteLeft,
  blackRight,
  blackLeft,
  whiteTotalFingers,
  blackTotalFingers,
};

// HELPER FUNCTIONS //////////////////////////////////////////////////////////////////////////////
const randomBool = () => {
  // Will generate a 0 or 1 at random
  const randomInt = Math.round(Math.random());
  return randomInt;
};

function randomIntFromInterval(max) {
  return Math.floor(Math.random() * max) + 1;
}

// ATTACK FUNCTION //////////////////////////////////////////////////////////////////////////////
export const whiteAttack = (blackHand, whiteHand) => {
  console.log("Attack function called");
  blackHand = whiteHand + blackHand;
  if (blackHand >= 5) {
    // Accounts for destroying blackonents hand
    blackHand = 0;
  }
  console.log("Attack function ended");
  return blackHand;
};

export const blackAttack = (blackHand, whiteHand) => {
  console.log("Attack function called");
  whiteHand = whiteHand + blackHand;
  if (whiteHand >= 5) {
    // Accounts for destroying blackonents hand
    whiteHand = 0;
  }
  console.log("Attack function ended");
  return whiteHand;
};

// SPLIT FUNCTION //////////////////////////////////////////////////////////////////////////////
export const whiteSplit = () => {
  console.log("Split function called");
  if (whiteTotalFingers == 4) {
    // special case for 4 because we do not want a situation where a person can have 4 fingers on one hand
    whiteRight == 2
      ? (whiteRight = 1) & (whiteLeft = 3)
      : (whiteRight = 2) & (whiteLeft = 2);
  } else if (whiteTotalFingers % 2 == 0) {
    // total number of fingers is even
    whiteRight < whiteLeft
      ? whiteRight++ & whiteLeft--
      : whiteRight-- & whiteLeft++;
  } else {
    // total number of fingers is odd
    whiteLeft == 0 || whiteRight == 4
      ? whiteRight-- & whiteLeft++
      : whiteRight > whiteLeft || whiteLeft == 4 || whiteRight == 0
      ? whiteRight++ & whiteLeft--
      : whiteRight-- & whiteLeft++;
  }
};

export const blackSplit = () => {
  console.log("Split function called");
  if (blackTotalFingers == 4) {
    // special case for 4 because we do not want a situation where a person can have 4 fingers on one hand
    blackRight == 2
      ? (blackRight = 1) & (blackLeft = 3)
      : (blackRight = 2) & (blackLeft = 2);
  } else if (blackTotalFingers % 2 == 0) {
    // total number of fingers is even
    blackRight < blackLeft
      ? blackRight++ & blackLeft--
      : blackRight-- & blackLeft++;
  } else {
    // total number of fingers is odd
    blackLeft == 0 || blackRight == 4
      ? blackRight-- & blackLeft++
      : blackRight > blackLeft || blackLeft == 4 || blackRight == 0
      ? blackRight++ & blackLeft--
      : blackRight-- & blackLeft++;
  }
};

// TURN FUNCTION //////////////////////////////////////////////////////////////////////////////
export const whiteTurn = () => {
  console.log("Beginning of turn:");
  console.log(`White Left = ${whiteLeft}, White Right = ${whiteRight}`);
  console.log(`Black Left = ${blackLeft}, Black Right = ${blackRight}`);
  console.log("White Total Fingers = " + whiteTotalFingers);

  if (
    whiteTotalFingers == 1 ||
    whiteTotalFingers == 7 ||
    whiteTotalFingers == 8
  ) {
    // User cannot split on these combinations of fingers
    let returnValue = attack(whiteLeft, blackLeft);
    blackLeft = returnValue;
  }

  if (
    whiteTotalFingers == 2 ||
    whiteTotalFingers == 3 ||
    whiteTotalFingers == 4 ||
    whiteTotalFingers == 5 ||
    whiteTotalFingers == 6
  ) {
    // User can split or attack on these combinations of fingers
    let decisionVar = randomBool();
    console.log(`Decision Variable = ${decisionVar}`);
    if (decisionVar == 0) {
      let decisionVarTwo = randomIntFromInterval(4);
      switch (decisionVarTwo) {
        case 1:
          console.log(
            `Case 1, blackLeft = whiteAttack(blackLeft ${blackLeft}, whiteLeft ${whiteLeft})`
          );
          blackLeft = whiteAttack(blackLeft, whiteLeft);
          break;
        case 2:
          console.log(
            `Case 2, blackRight = whiteAttack(blackRight ${blackRight}, whiteLeft ${whiteLeft})`
          );
          blackRight = whiteAttack(blackRight, whiteLeft);
          break;
        case 3:
          console.log(
            `Case 3, blackLeft = whiteAttack(blackLeft ${blackLeft}, whiteRight ${whiteRight});`
          );
          blackLeft = whiteAttack(blackLeft, whiteRight);
          break;
        case 4:
          console.log(
            `blackRight = whiteAttack(blackRight ${blackRight}, whiteRight ${whiteRight};`
          );
          blackRight = whiteAttack(blackRight, whiteRight);
          break;
      }
    } else {
      whiteSplit();
    }
  }

  console.log("End of turn:");
  console.log(`White Left = ${whiteLeft}, White Right = ${whiteRight}`);
  console.log(`Black Left = ${blackLeft}, Black Right = ${blackRight}`);
};

export const blackTurn = () => {
  console.log("Beginning of turn:");
  console.log(`White Left = ${whiteLeft}, White Right = ${whiteRight}`);
  console.log(`Black Left = ${blackLeft}, Black Right = ${blackRight}`);
  console.log("Black Total Fingers = " + blackTotalFingers);

  if (
    blackTotalFingers == 1 ||
    blackTotalFingers == 7 ||
    blackTotalFingers == 8
  ) {
    // User cannot split on these combinations of fingers
    let returnValue = attack(whiteLeft, blackLeft);
    blackLeft = returnValue;
  }

  if (
    blackTotalFingers == 2 ||
    blackTotalFingers == 3 ||
    blackTotalFingers == 4 ||
    blackTotalFingers == 5 ||
    blackTotalFingers == 6
  ) {
    // User can split or attack on these combinations of fingers
    let decisionVar = randomBool();
    console.log(`Decision Variable = ${decisionVar}`);
    if (decisionVar == 0) {
      let decisionVarTwo = randomIntFromInterval(4);
      switch (decisionVarTwo) {
        case 1:
          console.log(
            `Case 1, whiteLeft = attack(whiteLeft ${whiteLeft}, blackLeft ${blackLeft})`
          );
          whiteLeft = blackAttack(whiteLeft, blackLeft);
          break;
        case 2:
          console.log(
            `Case 2, whiteRight = blackAttack(whiteRight ${whiteRight}, blackLeft ${blackLeft})`
          );
          whiteRight = blackAttack(whiteRight, blackLeft);
          break;
        case 3:
          console.log(
            `Case 3, whiteLeft = blackAttack(whiteLeft ${whiteLeft}, blackRight ${blackRight});`
          );
          whiteLeft = blackAttack(whiteLeft, blackRight);
          break;
        case 4:
          console.log(
            `whiteRight = blackAttack(whiteRight ${whiteRight}, blackRight ${blackRight};`
          );
          whiteRight = blackAttack(whiteRight, blackRight);
          break;
      }
    } else {
      blackSplit();
    }
  }

  console.log("End of turn:");
  console.log(`White Left = ${whiteLeft}, White Right = ${whiteRight}`);
  console.log(`Black Left = ${blackLeft}, Black Right = ${blackRight}`);
};
