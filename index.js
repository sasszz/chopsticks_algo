// ##################################################################################################//
/////////////////////////////////////// CHOPSTICKS GAME ALGORITHM //////////////////////////////////////
// ##################################################################################################//

// INITIALIZE VARIABLES //////////////////////////////////////////////////////////////////////////////
let selfRight = 0,
  selfLeft = 1,
  oppRight = 1,
  oppLeft = 1;

let selfTotalFingers = selfLeft + selfRight;
let oppTotalFingers = oppLeft + oppRight;

// ATTACK FUNCTION //////////////////////////////////////////////////////////////////////////////
const attack = (oppHand, selfHand) => {
  console.log("Attack function called");
  oppHand = selfHand + oppHand;
  if (oppHand >= 5) {
    // Accounts for destroying opponents hand
    oppHand = 0;
  }
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
    // Cannot split on these combinations of fingers
    let returnValue = attack(selfLeft, oppLeft);
    oppLeft = returnValue;
    console.log("First Option, function call ended");
  }

  if (
    selfTotalFingers == 2 ||
    selfTotalFingers == 3 ||
    selfTotalFingers == 4 ||
    selfTotalFingers == 5 ||
    selfTotalFingers == 6
  ) {
    // User can split or attack on these combinations of fingers
    let returnValue = attack(selfLeft, oppLeft);
    oppLeft = returnValue;
    // split(); // Commenting out split function for now
    console.log("Second Option, function call ended");
  }

  console.log("End of turn:");
  console.log(`Self Left = ${selfLeft}, Self Right = ${selfRight}`);
  console.log(`Opp Left = ${oppLeft}, Opp Right = ${oppRight}`);
};
