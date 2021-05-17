let inputIn = document.querySelector(".in");
inputIn.oninput = function () {
  if (document.querySelector(".letter")) {
    document.querySelectorAll(".letter").forEach((el) => {
      el.remove();
    });
  }
  for (let i = 0; i < inputIn.value.length; i++) {
    addFront();
  }
  for (let i = 0; i < inputIn.value.length; i++) {
    let front = document.querySelectorAll(".front");
    console.log(front[i]);
    front[i].textContent = inputIn.value.charAt(i);
  }
};

let inputOut = document.querySelector(".out");
inputOut.oninput = function () {
  if (document.querySelector(".back")) {
    document.querySelectorAll(".back").forEach((el) => {
      el.remove();
    });
  }
  addBack();
  // for (let i = 0; i < inputOut.value.length; i++) {
  //   let back = document.querySelectorAll(".back");
  //   console.log(back[i]);
  //   back[i].textContent = inputOut.value.charAt(i);
  // }
};

function addFront() {
  let front = document.createElement("div");
  front.classList.add(`front`);
  let letter = document.createElement("div");
  letter.classList.add("letter");
  document.querySelector(`.letters`).appendChild(letter);
  let letterArr = document.querySelectorAll(`.letter`);
  letterArr[letterArr.length - 1].appendChild(front);
}

function addBack() {
  let back = document.createElement("div");
  back.classList.add(`back`);
  // todo здесь нужен цикл
  let letterArr = document.querySelectorAll(`.letter`);
  letterArr[inputOut.value.length - 1].appendChild(back);
}
