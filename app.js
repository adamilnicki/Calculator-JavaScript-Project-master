let btn = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let btnEqual = document.querySelector(".btn-equal");
let btnClear = document.querySelector(".btn-clear");

btn.forEach(function (item) {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    // if (
    //   item.dataset.num == "*" ||
    //   item.dataset.num == "/" ||
    //   item.dataset.num == "-" ||
    //   item.dataset.num == "+"
    // ) {
    //   operator.push(item.dataset.num);
    //   console.log(operator);
    //   // array.splice(0,1) to remove first element
    // }
    screen.value += item.dataset.num;
  });
});

btnEqual.addEventListener("click", function (e) {
  e.preventDefault();
  let input = screen.value;
  let operator = input.split(/[0-9]/);
  operator = operator.filter((el) => {
    return el != null && el != "";
  });
  let number = input.split(/[*\/+-]/);
  number = number.map(Number);
  // number.forEach(function (item, index) {
  //   item=Number(item);
  //   console.log(item, index);
  //   console.log(typeof(item));
  // });
  // operator.forEach(function (item, index) {
  //   console.log(item, index);
  // });
  // let result = screen.value;
  // console.log(screen.value);
  // screen.value = Number(result);

  function calculate(a, operator, b) {
    switch (operator) {
      case "*":
        return a * b;
      case "/":
        return a / b;
      case "-":
        return a - b;
      case "+":
        return a + b;
      default:
        return "Enter a value";
    }
  }
  //WORKS ONLY FOR 2 NUMBERS
  screen.value = calculate(number[0], operator[0], number[1]);
  // console.log(number[0], operator, number[1]);
  // console.log(calculate(number[0], operator[0], number[1]));
});

btnClear.addEventListener("click", function (e) {
  e.preventDefault();
  operator = [];
  number = [];
  screen.value = "";
});
