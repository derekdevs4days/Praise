// DOM Elements
const BTN_FORM = document.querySelector(".head-btn");
const FORM = document.querySelector(".main-form");
const POST_LIST = document.querySelector(".post-list");
const DEPARTMENTS = document.querySelector("aside ul");

//Create DOM elements
POST_LIST.innerHTML = "";

//Fetch API
loadPosts("all");
async function loadPosts(category) {
  const res = await fetch(
    "https://jiwmiywskwvnsszhupxz.supabase.co/rest/v1/posts",
    {
      headers: {},
    }
  );
  let data = await res.json();
  let newData = filterData(data, category);
  createPost(newData);
}

const createPost = (data) => {
  const htmlArr = data.map(
    (post) => `<li class="post-container">
    <p class="post">
      ${post.post}
      <span class="who">- ${post.who}</span>
    </p>
    <span class="department psych">${post.department}</span>
  </li>`
  );
  const html = htmlArr.join("");

  POST_LIST.insertAdjacentHTML("afterbegin", html);
};

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

//Filter Posts
const filterDepartment = (event) => {
  let category = "";
  if (event.target.tagName === "BUTTON") {
    category = event.target.className;
  }
  category = category.split(" ")[1];
  category = category.split("-").join(" ");
  POST_LIST.innerHTML = "";
  loadPosts(category);
};

const filterData = (data, category) => {
  if (category === "all") {
    return data;
  } else {
    return data.filter((obj) => obj.department.trim() === category);
  }
};

DEPARTMENTS.addEventListener("click", filterDepartment);
