const NUM_LINE = 2;
const NUM_STATION = 6;
var lastT;
var lastL;
var L1 = new Array(NUM_STATION);
var L2 = new Array(NUM_STATION);
var L = [L1, L2]

// Utility function to find a minimum of two numbers
function min(a, b) {
  return a < b ? a : b;
}

function Assembly(a, t, e, x) {
  let T1 = new Array(NUM_STATION);
  let T2 = new Array(NUM_STATION);
  let i;


  // time taken to leave first station in line 1
  T1[0] = e[0] + a[0][0];
  // time taken to leave first station in line 2
  T2[0] = e[1] + a[1][0];

  // Fill tables T1[] and T2[] using the
  // above given recursive relations
  for (i = 1; i < NUM_STATION; i++) {
    if ((T1[i - 1] + a[0][i]) <= (T2[i - 1] + t[1][i] + a[0][i])) {
      T1[i] = T1[i - 1] + a[0][i]
      L1[i] = 1
      console.log("T1[" + i + "] = " + T1[i])
      console.log("L1[" + i + "] = " + L1[i])
    } else {
      T1[i] = T2[i - 1] + t[1][i] + a[0][i]
      L1[i] = 2
      console.log("T1[" + i + "] = " + T1[i])
      console.log("L1[" + i + "] = " + L1[i])
    }
    if ((T2[i - 1] + a[1][i]) <= (T1[i - 1] + t[0][i] + a[1][i])) {
      T2[i] = T2[i - 1] + a[1][i]
      L2[i] = 2
      console.log("T2[" + i + "] = " + T2[i])
      console.log("L2[" + i + "] = " + L2[i])
    } else {
      T2[i] = T1[i - 1] + t[0][i] + a[1][i]
      L2[i] = 1
      console.log("T2[" + i + "] = " + T2[i])
      console.log("L2[" + i + "] = " + L2[i])
    }
  }
  // for (i = 1; i < NUM_STATION; ++i) {
  //   T1[i] = min(T1[i - 1] + a[0][i], T2[i - 1] + t[1][i] + a[0][i]);
  //   T2[i] = min(T2[i - 1] + a[1][i], T1[i - 1] + t[0][i] + a[1][i]);
  // }

  // Consider exit times and retutn minimum
  if ((T1[NUM_STATION - 1] + x[0]) <= (T2[NUM_STATION - 1] + x[1])) {
    lastT = T1[NUM_STATION - 1] + x[0]
    lastL = 1
  } else {
    lastT = T2[NUM_STATION - 1] + x[1]
    lastL = 2
  }
  console.log(lastT, lastL)
  // return min(T1[NUM_STATION - 1] + x[0], T2[NUM_STATION - 1] + x[1]);
}

function printStations(n) {
  let l = lastL
  console.log("line " + lastL + ", " + "station " + n)
  for (i = n - 1; 0 < i; i--) {
    console.log("line " + L[l][i] + ", " + "station " + i)
  }
}

// Driver Code
let a = [[7, 9, 3, 4, 8, 4], [8, 5, 6, 4, 5, 7]];
let t = [[0, 2, 3, 1, 3, 4], [0, 2, 1, 2, 2, 1]];
let e = [2, 4], x = [3, 2];

Assembly(a, t, e, x)
printStations(6)