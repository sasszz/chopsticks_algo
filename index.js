// ##################################################################################################//
/////////////////////////////////////// CHOPSTICKS GAME ALGORITHM //////////////////////////////////////
// ##################################################################################################//

// INITIALIZE VARIABLES //////////////////////////////////////////////////////////////////////////////
let selfRight = 3,
  selfLeft = 1,
  oppRight = 1,
  oppLeft = 1;

let selfTotalFingers = selfLeft + selfRight;
let oppTotalFingers = oppLeft + oppRight;

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
const attack = (oppHand, selfHand) => {
  console.log("Attack function called");
  oppHand = selfHand + oppHand;
  if (oppHand >= 5) {
    // Accounts for destroying opponents hand
    oppHand = 0;
  }
  console.log("Attack function ended");
  return oppHand;
};

// SPLIT FUNCTION //////////////////////////////////////////////////////////////////////////////
const split = () => {
  console.log("Split function called");
  if (selfTotalFingers == 4) {
    // special case for 4 because we do not want a situation where a person can have 4 fingers on one hand
    selfRight == 2
      ? (selfRight = 1) & (selfLeft = 3)
      : (selfRight = 2) & (selfLeft = 2);
  } else if (selfTotalFingers % 2 == 0) {
    // total number of fingers is even
    selfRight < selfLeft ? selfRight++ & selfLeft-- : selfRight-- & selfLeft++;
  } else {
    // total number of fingers is odd
    selfLeft == 0 || selfRight == 4
      ? selfRight-- & selfLeft++
      : selfRight > selfLeft || selfLeft == 4 || selfRight == 0
      ? selfRight++ & selfLeft--
      : selfRight-- & selfLeft++;
  }
};

// TURN FUNCTION //////////////////////////////////////////////////////////////////////////////
const myTurn = () => {
  console.log("Beginning of turn:");
  console.log(`Self Left = ${selfLeft}, Self Right = ${selfRight}`);
  console.log(`Opp Left = ${oppLeft}, Opp Right = ${oppRight}`);
  console.log("Self Total Fingers = " + selfTotalFingers);

  if (selfTotalFingers == 1 || selfTotalFingers == 7 || selfTotalFingers == 8) {
    // User cannot split on these combinations of fingers
    let returnValue = attack(selfLeft, oppLeft);
    oppLeft = returnValue;
  }

  if (
    selfTotalFingers == 2 ||
    selfTotalFingers == 3 ||
    selfTotalFingers == 4 ||
    selfTotalFingers == 5 ||
    selfTotalFingers == 6
  ) {
    // User can split or attack on these combinations of fingers
    let decisionVar = randomBool();
    console.log(`Decision Variable = ${decisionVar}`);
    if (decisionVar == 0) {
      let decisionVarTwo = randomIntFromInterval(4);
      switch (decisionVarTwo) {
        case 1:
          console.log(
            `Case 1, oppLeft = attack(oppLeft ${oppLeft}, selfLeft ${selfLeft})`
          );
          oppLeft = attack(oppLeft, selfLeft);
          break;
        case 2:
          console.log(
            `Case 2, oppRight = attack(oppRight ${oppRight}, selfLeft ${selfLeft})`
          );
          oppRight = attack(oppRight, selfLeft);
          break;
        case 3:
          console.log(
            `Case 3, oppLeft = attack(oppLeft ${oppLeft}, selfRight ${selfRight});`
          );
          oppLeft = attack(oppLeft, selfRight);
          break;
        case 4:
          console.log(
            `oppRight = attack(oppRight ${oppRight}, selfRight ${selfRight};`
          );
          oppRight = attack(oppRight, selfRight);
          break;
      }
    } else {
      split();
    }
  }

  console.log("End of turn:");
  console.log(`Self Left = ${selfLeft}, Self Right = ${selfRight}`);
  console.log(`Opp Left = ${oppLeft}, Opp Right = ${oppRight}`);
};

myTurn();
