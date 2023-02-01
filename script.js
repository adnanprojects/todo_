"use strict";

const btn = document.getElementById("btn");
const input = document.getElementById("input");
const close = document.getElementById("close");
const listContainer = document.getElementById("notes");

// Delete notes function
function delBoxes() {
  let checkboxs = document.getElementsByClassName("check");
  let paras = document.getElementsByClassName("para");

  for (let i = 0; i < checkboxs.length; i++) {
    const ch = checkboxs[i];
    const pa = paras[i];

    if (ch.checked) {
      close.classList.remove("hidden");
      close.addEventListener("click", function () {
        // ch.parentNode.removeChild(ch);
        pa.parentNode.removeChild(pa);
      });
      if (checkboxs.length === 0) {
        console.log(close.classList);
        listContainer.classList.add("hidden");
        close.classList.add("hidden");
      }
    } else continue;
  }
}

// Add notes function
function adBoxes() {
  if (listContainer.classList.contains("hidden") && input.value)
    listContainer.classList.remove("hidden");

  const para = document.createElement("p");
  const check = document.createElement("INPUT");

  check.type = "checkbox";
  para.classList.add("para");
  check.classList.add("check");

  if (input.value) {
    para.innerText = input.value;
    para.appendChild(check);
    listContainer.appendChild(para);
    input.value = "";
    input.focus();
  } else {
    alert("Type something to Note!");
  }

  check.addEventListener("change", function () {
    if (this.checked) {
      delBoxes();
    } else if (document.getElementsByClassName("check").length === 0) {
      listContainer.classList.add("hidden");
    }
  });
}

// Add notes calls
btn.addEventListener("click", adBoxes);
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adBoxes();
  }
});
