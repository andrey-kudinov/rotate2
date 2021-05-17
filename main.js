let inputIn = document.querySelector(".in");
inputIn.oninput = () => {
  if (document.querySelector(".char")) {
    document.querySelectorAll(".char").forEach((el) => {
      el.remove();
    });
  }
  full();
};

let inputOut = document.querySelector(".out");
inputOut.oninput = () => {
  if (document.querySelector(".char")) {
    document.querySelectorAll(".char").forEach((el) => {
      el.remove();
    });
  }
  full();
};

const add = () => {
  let char = document.createElement("div");
  char.classList.add("char");
  char.innerHTML = `<div class="front"></div>
  <div class="back"></div>`;
  document.querySelector(`.characters`).appendChild(char);
};

const full = () => {
  for (let i = 0; i < inputIn.value.length; i++) {
    add();
    document.querySelectorAll(".front")[i].textContent =
      inputIn.value.charAt(i);
    document.querySelectorAll(".back")[i].textContent =
      inputOut.value.charAt(i);
  }
  move()
};

const move = () => {document.querySelectorAll(".char").forEach((el) => {
  el.addEventListener("mouseenter", function () {
    if (el.classList.contains("open")) {
      el.classList.remove("open");
    } else {
      el.classList.add("open");
    }
  });
})};

move()
