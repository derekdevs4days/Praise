import "./style.css";

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
    category: "information technology",
    votesInteresting: 9,
    votesMindblowing: 21,
    votesFalse: 0,
    createdIn: 2023,
  },
];

//COMPONENTS
function App() {
  const APP_TITLE = "Priase";
  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="logo">
          <img src="logo.png" alt="heart logo" width="120px" height="120px" />
          <h1>{APP_TITLE}</h1>
        </div>

        <button className="head-btn btn-large">Share</button>
      </header>
      <NewPostForm />
      <main className="main-container">
        <CategoryFilter />

        <PostList />
      </main>
    </>
  );
}
function NewPostForm() {
  return <form className="main-form">Post Form</form>;
}

const DEPARTMENTS = [
  { name: "All" },
  { name: "Admissions" },
  { name: "Anesthesiology" },
  { name: "Cardiology" },
  { name: "Emergency" },
  { name: "Gastroenterology" },
  { name: "General Services" },
  { name: "ICU" },
  { name: "IT" },
  { name: "Neurology" },
  { name: "Obstetrics" },
  { name: "Oncology" },
  { name: "Orthopedics" },
  { name: "Pathology" },
  { name: "Pharmacology" },
  { name: "Psychiatry" },
  { name: "Radiology" },
  { name: "Surgery" },
];

function CategoryFilter() {
  return (
    <aside>
      <ul className="aside-dep">
        {DEPARTMENTS.map((obj) => (
          <li key={obj.name}>
            <button
              className={`btn-d ${obj.name.split(" ").join("-").toLowerCase()}`}
            >
              {obj.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function PostList() {
  const posts = initialComments;

  return (
    <section>
      <ul className="post-list">
        {posts.map((obj) => (
          <POST key={obj.id} postObj={obj} />
        ))}
      </ul>
      <p>There are {posts.length} praises. Share your own! </p>
    </section>
  );
}

function POST({ postObj }) {
  return (
    <li key={postObj.id} className="post-container">
      <p className="post">
        {postObj.text}
        <span className="who">- {postObj.source}</span>
      </p>
      <span className="department psych">{postObj.category}</span>
      <div className="reactions">
        <button>❤️ 25</button>
        <button>🙌 15</button>
        <button>🙏 3</button>
      </div>
    </li>
  );
}
export default App;
