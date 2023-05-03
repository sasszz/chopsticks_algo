// ##################################################################################################//
/////////////////////////////////////// CHOPSTICKS GAME ALGORITHM //////////////////////////////////////
// ##################################################################################################//

// INITIALIZE VARIABLES //////////////////////////////////////////////////////////////////////////////
let whiteRight = 1,
  whiteLeft = 1,
  blackRight = 1,
  blackLeft = 1;

let whiteTurns = [];
let blackTurns = [];

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
  console.log("White Attack");
  blackHand = whiteHand + blackHand;
  if (blackHand >= 5) {
    // Accounts for destroying blackonents hand
    blackHand = 0;
  }
  return blackHand;
};

export const blackAttack = (blackHand, whiteHand) => {
  console.log("Black Attack");
  whiteHand = whiteHand + blackHand;
  if (whiteHand >= 5) {
    // Accounts for destroying blackonents hand
    whiteHand = 0;
  }
  return whiteHand;
};

// SPLIT FUNCTION //////////////////////////////////////////////////////////////////////////////
export const whiteSplit = () => {
  console.log("White Split");
  if (whiteLeft + whiteRight == 4) {
    // special case for 4 because we do not want a situation where a person can have 4 fingers on one hand
    whiteRight == 2
      ? (whiteRight = 1) & (whiteLeft = 3)
      : (whiteRight = 2) & (whiteLeft = 2);
  } else if ((whiteLeft + whiteRight) % 2 == 0) {
    // total number of fingers is even
    whiteRight < whiteLeft
      ? whiteRight++ & whiteLeft--
      : whiteRight-- & whiteLeft++;
  } else if (whiteLeft + whiteRight == 3) {
    Math.abs(whiteLeft - whiteRight) > 1
      ? (whiteRight = 2) & (whiteLeft = 1)
      : (whiteRight = 3) & (whiteLeft = 0);
  } else {
    Math.abs(whiteLeft - whiteRight) > 1
      ? (whiteRight = 3) & (whiteLeft = 2)
      : (whiteRight = 4) & (whiteLeft = 2);
  }
};

export const blackSplit = () => {
  console.log("Black Split");
  if (blackLeft + blackRight == 4) {
    // special case for 4 because we do not want a situation where a person can have 4 fingers on one hand
    console.log("==4");
    blackRight == 2
      ? (blackRight = 1) & (blackLeft = 3)
      : (blackRight = 2) & (blackLeft = 2);
  } else if (blackLeft + blackRight == 3) {
    console.log("==3");
    Math.abs(blackLeft - blackRight) > 1
      ? (blackRight = 2) & (blackLeft = 1)
      : (blackRight = 3) & (blackLeft = 0);
  } else if ((blackLeft + blackRight) % 2 == 0) {
    console.log("% 2 == 0");
    // total number of fingers is even
    blackRight < blackLeft
      ? blackRight++ & blackLeft--
      : blackRight-- & blackLeft++;
  } else {
    console.log("last else");
    Math.abs(blackLeft - blackRight) > 1
      ? (blackRight = 3) & (blackLeft = 2)
      : (blackRight = 4) & (blackLeft = 2);
  }
};

// TURN FUNCTION //////////////////////////////////////////////////////////////////////////////
export const whiteTurn = () => {
  console.log("Beginning of White turn:");

  if (
    whiteLeft + whiteRight == 1 ||
    whiteLeft + whiteRight == 7 ||
    whiteLeft + whiteRight == 8
  ) {
    // User cannot split on these combinations of fingers
    let returnValue = whiteAttack(whiteLeft, blackLeft);
    blackLeft = returnValue;
  }

  if (
    whiteLeft + whiteRight == 2 ||
    whiteLeft + whiteRight == 3 ||
    whiteLeft + whiteRight == 4 ||
    whiteLeft + whiteRight == 5 ||
    whiteLeft + whiteRight == 6
  ) {
    // User can split or attack on these combinations of fingers
    let decisionVar;
    if (
      whiteTurns[whiteTurns.length - 1] == "Split" ||
      whiteTurns.length == 0
    ) {
      decisionVar = 0;
    } else {
      decisionVar = randomBool();
    }
    console.log(`Decision Variable = ${decisionVar}`);
    if (decisionVar == 0) {
      whiteTurns.push("Attack");
      blackRight != 0
        ? (blackRight = whiteAttack(
            blackRight,
            whiteLeft != 0 ? whiteLeft : whiteRight
          ))
        : (blackLeft = whiteAttack(
            blackLeft,
            whiteLeft != 0 ? whiteLeft : whiteRight
          ));
    } else {
      whiteTurns.push("Split");
      whiteSplit();
    }
  }

  console.log("End of White turn:");
  if (
    (whiteLeft == 0 && whiteRight == 0) ||
    (blackLeft == 0 && blackRight == 0)
  ) {
    console.log(
      "######################### GAME OVER ##########################"
    );
  }
  console.log(`White Left = ${whiteLeft}, White Right = ${whiteRight}`);
  console.log(`Black Left = ${blackLeft}, Black Right = ${blackRight}`);
  console.log(
    "#####################################################################"
  );
};

export const blackTurn = () => {
  console.log("Beginning of Black turn:");

  if (
    blackLeft + blackRight == 1 ||
    blackLeft + blackRight == 7 ||
    blackLeft + blackRight == 8
  ) {
    // User cannot split on these combinations of fingers
    let returnValue = blackAttack(whiteLeft, blackLeft);
    blackLeft = returnValue;
  }

  if (
    blackLeft + blackRight == 2 ||
    blackLeft + blackRight == 3 ||
    blackLeft + blackRight == 4 ||
    blackLeft + blackRight == 5 ||
    blackLeft + blackRight == 6
  ) {
    // User can split or attack on these combinations of fingers
    let decisionVar;
    if (
      blackTurns[blackTurns.length - 1] == "Split" ||
      whiteTurns.length == 0
    ) {
      decisionVar = 0;
    } else {
      decisionVar = randomBool();
    }
    console.log(`Decision Variable = ${decisionVar}`);
    if (decisionVar == 0) {
      blackTurns.push("Attack");
      whiteRight != 0
        ? (whiteRight = blackAttack(
            whiteRight,
            blackLeft != 0 ? blackLeft : blackRight
          ))
        : (whiteLeft = blackAttack(
            whiteLeft,
            blackLeft != 0 ? blackLeft : blackRight
          ));
    } else {
      blackTurns.push("Split");
      blackSplit();
    }
  }

  console.log("End of Black turn:");
  if (
    (whiteLeft == 0 && whiteRight == 0) ||
    (blackLeft == 0 && blackRight == 0)
  ) {
    console.log(
      "######################### GAME OVER ##########################"
    );
  }
  console.log(`White Left = ${whiteLeft}, White Right = ${whiteRight}`);
  console.log(`Black Left = ${blackLeft}, Black Right = ${blackRight}`);
  console.log(
    "#####################################################################"
  );
  return;
};
