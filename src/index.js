// console.log("Hi Batch #543");


// ////////
// Select DOM elements
// ////////

// with its ID (evan)
const evan = document.querySelector("#evan");
// console.log(evan);

// with its tag type (h2)
const h2 = document.querySelector("h2");
// console.log(h2);

// with its class (group)
// const group = document.querySelector(".group");
// console.log(group);

// by nest selection (ul of the group)
// const ul = group.querySelector("ul");
// console.log(ul);

// select multiple elements (all the card)
const cards = document.querySelectorAll(".card");
// console.log(cards);

// ////////
// Modify the DOM
// ////////

// add an HTML element (Porfolio FC 🐅 in list)
const group = document.querySelector(".group");
const ul = group.querySelector("ul");
ul.insertAdjacentHTML("afterbegin", "<li>Porfolio <em>FC</em> 🐅</li>");

// same but more complex (add Albert!!)
const listOfStudents = document.querySelector("#blackberry ul");
listOfStudents.insertAdjacentHTML(
  "beforeend",
  `<li>
    <img src="https://avatars.githubusercontent.com/u/72423167?v=4" alt="">
    <p>Albert</p>
  </li>`
);

// change the element style (group background to green)
// Careful! background-color => backgroundColor
group.style.backgroundColor = "rgb(160,200,69)";

// add a class to the element (add text-white to group)
// Careful! no DOT
group.classList.add("text-white");

// remove it
group.classList.remove("text-white");

// add/remove every 1sec
setInterval(() => {
  group.classList.toggle("text-white");
}, 3000);

// Read/Write for inputs (change the value in the email input)
const email = document.querySelector("#email");
// console.log(email.value);
email.value = "yann@gmail.com";

// Read/Write the (inner) text and HTML content (Blackberry club title)
const ffRailsTitle = document.querySelector("#ff-rails > h3");
// console.log(ffRailsTitle.innerText);
// console.log(ffRailsTitle.innerHTML);
// console.log(group.innerHTML);
group.innerHTML = "<h2> Nothing here! </h2>";

// ////////
// Add event listeners
// ////////

// 1. Select evan's picture
// const evanPic = document.querySelector("#evan");
// // 2. Listen to a click
// evanPic.addEventListener("click", (event) => {
//   // 3. Modify the DOM (add the class selected)
//   // console.log(event);
//   event.currentTarget.classList.toggle("selected");
// });


// 1. Select all pictures
const allPics = document.querySelectorAll(".card img");
allPics.forEach((pic) => {
  // 2. Listen to a click
  pic.addEventListener("click", (event) => {
    // 3. Modify the DOM
    event.currentTarget.classList.toggle("selected");
  });
});
