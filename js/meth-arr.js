// #1 Methods: flatMap, compact
const arr1 = [
  1,
  0,
  false,
  20,
  40,
  [50],
  [false, true],
  [undefined, null],
  undefined,
];
const flatMapLodash = _.flatMap(arr1, (elem) => elem);
const compactLodash = _.compact(flatMapLodash);
console.log(compactLodash);

// #2 Method: pull
const arr2 = [2, 2, 3, 6, 6, 7, 3, 9, 1, 1, 1];
const pullLodash = _.pull([...arr2], 9, 2, 7);
console.log(pullLodash);

// #3 Method: zip
const zipLodash = _.zip([1, -1], [true, false]);
console.log(zipLodash);

// #4 Method: size
const sizeLodash = _.size({
  name: "jdj",
  age: 22,
  surname: "jdkwk",
});
console.log(sizeLodash);

// #5 Method: delay
const delayLodash = _.delay((text) => console.log(text), 1000, "Delay 1s");
console.log(delayLodash);

// #6 Method: flip, toArray
const flippedLodash = _.flip(function () {
  return _.toArray(arguments);
});
console.log(
  flippedLodash(1, 2, 3, 4, 5, "fkkw", "kwknv", "kw", true, false, undefined)
);

// #7 Method: overArgs
const doubled = (param) => param * 2;
const square = (param) => param * param;
const overArgsLodash = _.overArgs((a, b) => [a, b], [square, doubled]);
console.log(overArgsLodash(9, 3));

// #8 Method: castArray
const castArrayLodash = _.castArray({
  a: 10,
});
console.log(castArrayLodash);

// #9 Method: Memoize, values
const obj = {
  a: 1,
  b: 2,
  c: null,
  d: undefined,
  e: true,
};
const memoizeLodash = _.memoize(_.values);
console.log(memoizeLodash(obj));

// #10 Method:

// #11 Method:

// #12 Method:

// #13 Method:

// #14 Method:

// #15 Method:

// #16 Method:

// #17 Method:

// #18

// #19

// #20
