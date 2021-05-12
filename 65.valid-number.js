/*
 * @lc app=leetcode id=65 lang=javascript
 *
 * [65] Valid Number
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
/*
these are the valid states and inputs to the finite state machine
states = {
  START: 0,
  SIGN: 1,
  POINT: 2,
  INTEGER: 3,
  FRACTION: 4,
  EXP: 5,
  EXP_SIGN: 6,
  EXP_INT: 7,
};
inputs = {
  DIGIT: 1,
  SIGN: 2,
  POINT: 3,
  E: 4,
};*/

//these are the final states of the machine
let final_states = new Set(["INTEGER", "EXP_INT", "FRACTION"]);

//these are the valid machine moves on some input
// machine[currentState][input]  spits out the next state of the machine
let machine = {
  START: {
    DIGIT: "INTEGER",
    POINT: "POINT",
    SIGN: "SIGN",
  },
  SIGN: {
    POINT: "POINT",
    DIGIT: "INTEGER",
  },
  POINT: {
    DIGIT: "FRACTION",
  },
  INTEGER: {
    DIGIT: "INTEGER",
    POINT: "FRACTION",
    E: ["EXP"],
  },
  FRACTION: {
    DIGIT: "FRACTION",
    E: "EXP",
  },
  EXP: {
    DIGIT: "EXP_INT",
    SIGN: "EXP_SIGN",
  },
  EXP_SIGN: {
    DIGIT: "EXP_INT",
  },
  EXP_INT: {
    DIGIT: "EXP_INT",
  },
};
function convertInput(s) {
  if (/^[\+\-]$/.test(s)) {
    return "SIGN";
  } else if (/^[.]$/.test(s)) {
    return "POINT";
  } else if (/^[0-9]+$/.test(s)) {
    return "DIGIT";
  } else if (/^[E]$/i.test(s)) {
    return "E";
  } else {
    return "BOGUS_VALUE";
  }
}

var isNumber = function (s) {
  let currentState = "START";
  let nextState;
  let input;
  for (let i = 0; i < s.length; i++) {
    input = convertInput(s[i]);
    nextState = machine[currentState][input];
    if (!nextState) return false;
    currentState = nextState;
  }
  return final_states.has(currentState);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isNumber;
// @after-stub-for-debug-end
