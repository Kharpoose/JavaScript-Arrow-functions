/*
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

const objent2 = {
  method() {

  }
};
*/

const buttonElement = document.querySelector(".button-js");

const eventListener = () => {
  console.log("click");
}
buttonElement.addEventListener("click", eventListener);

buttonElement.removeEventListener("click", eventListener);

buttonElement.addEventListener("click", () => {
  console.log("click2");
});
