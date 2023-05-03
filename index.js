let selfRight = 0,
  selfLeft = 1,
  oppRight = 1,
  oppLeft = 1;

let selfTotalFingers = selfLeft + selfRight;
console.log(`Self Left = ${selfLeft}, Self Right = ${selfRight}`);
console.log(`Opp Left = ${oppLeft}, Opp Right = ${oppRight}`);
console.log("Self Total Fingers = " + selfTotalFingers);
let oppTotalFingers = oppLeft + oppRight;

const attack = (oppHand, selfHand) => {
  console.log("Attack function called");
  oppHand = selfHand + oppHand;
  return oppHand;
};

const split = () => {
  console.log("Split function called");
  if (selfTotalFingers == 4) {
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

if (selfTotalFingers == 1 || selfTotalFingers == 7 || selfTotalFingers == 8) {
  let returnValue = attack(selfLeft, oppLeft);
  oppLeft = returnValue;
  console.log("First Option, function calls ended");
}

if (
  selfTotalFingers == 2 ||
  selfTotalFingers == 3 ||
  selfTotalFingers == 4 ||
  selfTotalFingers == 5 ||
  selfTotalFingers == 6
) {
  let returnValue = attack(selfLeft, oppLeft);
  oppLeft = returnValue;
  // split();
  console.log("Second Option, function calls ended");
}

console.log(`Self Left = ${selfLeft}, Self Right = ${selfRight}`);
console.log(`Opp Left = ${oppLeft}, Opp Right = ${oppRight}`);
