//task1
const clickBtn = document.querySelector("#clickBtn")
const text = document.querySelector("#text");




const newContent = function (event) {
    event.target.textContent = "Hello, Shola";
    console.log(event.target);
    
}

clickBtn.addEventListener("click", newContent)

//task2
const box = document.querySelector("#box")

box.addEventListener("mouseover", function () {
    box.style.backgroundColor = "red"
})

box.addEventListener("mouseout", function () {
    box.style.backgroundColor = "green"
})

// task3

const dblClickBtn = document.querySelector("#dblClickBtn");
const text1 = document.querySelector("#text1")


dblClickBtn.addEventListener("dblclick", function () {
    console.log("clicked");
    
    text1.textContent = "Double Clicked!";
})


//task4

const inputField = document.querySelector("#inputField");
const output = document.querySelector("#output");


inputField.addEventListener("keypress", function (e) {
  output.textContent = e.key
})

//task5

const focusInput = document.querySelector("#focusInput");

focusInput.addEventListener("focus", function () {
    focusInput.style.border = "2px solid red"
})
focusInput.addEventListener("blur", function () {
    focusInput.style.border = "2px solid green"
})