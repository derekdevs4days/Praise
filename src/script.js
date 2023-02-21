const initialComments = [
  {
    id: 1,
    text: "Dr. Gracie is the most compassionate mental health provider!",
    source: "patient",
    category: "psychiatry",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 0,
    createdIn: 2023,
  },

  {
    id: 2,
    text: "Dr. Sandeep. I wanted to express my deepest gratitude for the excellent care you provided during my recent treatment for my heart condition. Your expertise and professionalism were apparent from the very beginning, and I knew I was in good hands.",
    source: "patient",
    category: "cardiology",
    votesInteresting: 40,
    votesMindblowing: 4,
    votesFalse: 0,
    createdIn: 2023,
  },

  {
    id: 3,
    text: "A special thanks to John in IT for helping me navigate the EPIC software.",
    source: "employee",
    category: "it",
    votesInteresting: 9,
    votesMindblowing: 21,
    votesFalse: 0,
    createdIn: 2023,
  },
];

// DOM Elements
const BTN_FORM = document.querySelector(".head-btn");
const FORM = document.querySelector(".main-form");
const POST_LIST = document.querySelector(".post-list");

//Create DOM elements
POST_LIST.innerHTML = "";
//POST_LIST.insertAdjacentHTML("afterbegin");
const htmlArr = initialComments.map(
  (post) => `<li class="post-container">
    <p class="post">
      ${post.text}
      <span class="who">- ${post.source}</span>
    </p>
    <span class="department psych">${post.category}</span>
  </li>`
);
const html = htmlArr.join("");

POST_LIST.insertAdjacentHTML("afterbegin", html);

//Toggle form visibility
const showForm = () => {
  if (FORM.classList.contains("hidden")) {
    FORM.classList.remove("hidden");
    BTN_FORM.textContent = "Close";
  } else {
    FORM.classList.add("hidden");
    BTN_FORM.textContent = "Share";
  }
};

BTN_FORM.addEventListener("click", showForm);
