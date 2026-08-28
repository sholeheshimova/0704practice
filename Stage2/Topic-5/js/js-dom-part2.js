//task1
const intro = document.querySelector("#intro")

intro.innerText  = "Updated content via innerHTML";


//task2

const box = document.querySelectorAll(".box");
console.log(box);

// box[0].textContent = "This is a box"
// box[1].textContent = "This is a box"
// box[2].textContent = "This is a box"


for (let i = 0; i < box.length; i++) {
    box[i].textContent = "This is a box"
}


//task3

const list = document.querySelectorAll("ul li");
for (let i = 0; i < list.length; i++) {

    list[i].textContent = "List Item Updated"
}

//task4

const head = document.querySelector("h2");
head.textContent = "Title Updated"


//task5
const welcome = document.getElementById("welcomeText");
welcome.textContent = "Welcome to my Website"

//task6
const item = document.querySelector("#itemList");

const newList = document.createElement("li");

newList.textContent = "Hello World";

item.appendChild(newList)
item.appendChild(newList)
item.appendChild(newList)

console.log(item);


//codewars tasks

//task1

function squareOrSquareRoot(array) {

    //for ile
    
//   let result = [];

//   for (let i = 0; i < array.length; i++) {
//     if (Number.isInteger(Math.sqrt(array[i]))) {
//        result.push(Math.sqrt(array[i]))
//     }else{
//       result.push(array[i] ** 2)
//     }
//   }

//   return  result
 
//map ile
    return array.map(function (el) {
        if (Number.isInteger(Math.sqrt(el))) {
            return Math.sqrt(el)
        }else{
            return el ** 2
        }
    })

}

console.log(squareOrSquareRoot([3,16,2,5,49,81]));




//20.08.2026

//task1  Mouse hover — rəng dəyişmə

const hoverBox = document.querySelector("#hoverBox");

hoverBox.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = "red";
})

hoverBox.addEventListener("mouseout", function (e) {
    e.target.style.backgroundColor = "lightgray"
})

//task2 Klaviatura — düyməni tanımaq


const keyInput = document.querySelector("#keyInput");
const keyResult = document.querySelector("#keyResult");

keyInput.addEventListener("keydown", function (event) {
    keyResult.textContent = event.key
})


//task3 Input — real-vaxt simvol sayğacı

const msgInput = document.querySelector("#msgInput")
const charCount = document.querySelector("#charCount");

msgInput.addEventListener("input", function () {

    if (msgInput.value <= 100) {
        charCount.textContent = `${msgInput.value} / 100`
    }else{
        charCount.style.color = "red"
    }
    
})


//task4 Double click — element böyütmək
const growBox = document.querySelector("#growBox");
console.log(growBox);


growBox.addEventListener("click", function () {
    
    growBox.style.height = "150px";
    growBox.style.width = "150px"
})


//task5 Mini "Enter ilə əlavə et" siyahısı

const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        todoList.innerHTML = `<li>${todoInput.value}</li>`
        todoInput.value = ""
    }
})


//task7 Mini "canlı axtarış" (real-vaxt filter)

const searchInput = document.querySelector("#searchInput");
const fruitList = document.querySelector("#fruitList");
const lists = document.querySelectorAll("#fruitList li")


searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    lists.forEach(function (item) {

        if (item.textContent.toLowerCase().includes(searchText)) {
            item.style.display = "list-item";
        } else {
            item.style.display = "none";
        }

    })

})