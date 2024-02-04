const arrowFunction = (param, param2) => {
  console.log("Hello");
  return 5;
};

arrowFunction();

const regularFunction = function (param, param2) {
  console.log("Hello");
  return 5;
};

regularFunction();

const oneParam = (param) => {
  console.log(param + 1);
};

oneParam(2);

const oneLine = () => 2 + 3;

console.log(oneLine());
