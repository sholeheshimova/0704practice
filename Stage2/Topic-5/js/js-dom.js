//task1 Tapşırıq: düyməyə klik olunanda konsola "Düyməyə basıldı!" yazsın.

const myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", function () {
  console.log("Duymeye basildi!");
});

//task2 click saygaci

const countBtn = document.querySelector("#countBtn");

let count = 0;
countBtn.addEventListener("click", function () {
  console.log(count++);
});

//task3  Mətni dəyişmək

const title = document.querySelector("#title");
const changeBtn = document.querySelector("#changeBtn");

changeBtn.addEventListener("click", function () {
  title.innerHTML = "Xos geldiniz";
});

//task4 Stil dəyişdirmək (rəng dəyişmə)

const box = document.querySelector("#box");
const colorBtn = document.querySelector("#colorBtn");

colorBtn.addEventListener("click", function () {
  box.style.backgroundColor = "blue";
});

//task5 Elementi göstər/gizlət (toggle)

const text = document.querySelector("#text");
const toggleBtn = document.querySelector("#toggleBtn");

let newView = false;

toggleBtn.addEventListener("click", function () {
  if (newView) {
    text.style.display = "";
  } else {
    text.style.display = "none";
  }
  newView = !newView;
});

//task6 Input-dan mətn oxuyub göstərmək

const inputName = document.querySelector("#nameInput");
const showBtn = document.querySelector("#showBtn");
const resultParag = document.querySelector("#result");

showBtn.addEventListener("click", function () {
  const value = inputName.value;

  resultParag.innerHTML = `Salam, ${value}`;
});

//task7 Siyahıya yeni element əlavə etmək
const inputItem = document.querySelector("#itemInput");
const addBtn = document.querySelector("#addBtn");
const itemList = document.querySelector("#itemList");

addBtn.addEventListener("click", function () {
  let inputValue = inputItem.value;

  let newLi = document.createElement("li"); // yeni bir <li> yaradırıq
  newLi.textContent = inputValue; // ona mətn veririk
  itemList.appendChild(newLi);
});

//task8 Neçə dəfə klik olunduğunu sayğac ilə göstərmək (ekranda)

const counter = document.querySelector("#counter");
const incrementBtn = document.querySelector("#incrementBtn");
const resetBtn = document.querySelector("#resetBtn");

let count1 = 0;
incrementBtn.addEventListener("click", function () {
  count1++;
  counter.textContent = count1;
});

resetBtn.addEventListener("click", function () {
  count1 = 0;
  counter.textContent = count1;
});

