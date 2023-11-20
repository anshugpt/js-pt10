//* DOM Events 
// Events are the action done by keybored or mouse
// Events are signals that something has occurred(user input/actions)

//* Inline Events 
// attribute --> onclick=""

// in html -> <button onclick="console.log("button was clicked")">click me</button>

// when we click button it will print on the console

//* onclick Event
// when we click by mouse it will trriger

// let btn = document.querySelector("button")

// btn.onclick = function () {
//     alert("button is clicked"); //* when we click it will give alert
// };


//* onmouseenter Event
// when mouse pointer hover over the range of the element 

// btn.onmouseenter = function (){
//    console.log("you are in range of element");
//}

//* Event Listener 
// we can't perform multiple task on "onclick method" so we need event listener
// Syntax -> obj.addEventListener("event", callback);
// event -> "clicked", "drag", many more...(mdn refrence)
// callback -> function used as attribute

//* Activity (random color generator)

let btn = document.querySelector(".color-btn");

btn.addEventListener("click", function(){
    let head = document.querySelector(".head");
    let randomColor = getRandomColor();
    head.innerText = randomColor;
    let div = document.querySelector(".color-box");
    div.style.backgroundColor = randomColor;
});

function getRandomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}

// event listener is also used for elements like para, div 

//* "this" in event
// 'this' reffers to the object
// used if we want to add same event listener on multiple element

btn.addEventListener("click", function(){
    console.dir(this); //* -> show the all button property
    console.dir(this.innerText); //* -> show inner text of button
})

// for multiple element

//  let h3 = document.querySelector("h3");
//  let p = document.querySelector("p");

//  function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";
//  }

//  btn.addEventListener("click", changeColor);
//  h3.addEventListener("click", changeColor);
//  p.addEventListener("click", changeColor);