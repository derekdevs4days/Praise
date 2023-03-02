import { useEffect, useState } from "react";
import supabase from "./supabase";
import "./style.css";

//COMPONENTS
function App() {
  const [showForm, setShowForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState("all");

  useEffect(
    function () {
      async function getPosts() {
        setIsLoading(true);

        let query = supabase.from("posts").select("*");
        if (currentDepartment !== "all") {
          query = query.eq("department", currentDepartment);
        }

        const { data: posts, error } = await query;

        if (!error) {
          setPosts(posts);
          setIsLoading(false);
        } else {
          alert("There was an error.");
        }
      }
      getPosts();
    },
    [currentDepartment]
  );

  return (
    <>
      <Header showForm={showForm} setShowForm={setShowForm} />
      {showForm ? (
        <NewPostForm setPosts={setPosts} setShowForm={setShowForm} />
      ) : null}

      <main className="main-container">
        <CategoryFilter setCurrentDepartment={setCurrentDepartment} />
        <CategoryFilterMobile setCurrentDepartment={setCurrentDepartment} />
        {isLoading ? (
          <Loader />
        ) : (
          <PostList posts={posts} setPosts={setPosts} />
        )}
      </main>
    </>
  );
}

function Loader() {
  return <p className="loading">Loading...</p>;
}

function Header({ showForm, setShowForm }) {
  const APP_TITLE = "Priase";

  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="heart logo" width="120px" height="120px" />
        <h1>{APP_TITLE}</h1>
      </div>

      <button
        className="head-btn btn-large"
        onClick={() => setShowForm((show) => !show)}
      >
        {showForm ? "Close" : "Share"}
      </button>
    </header>
  );
}

const WHO = [
  { label: "Patient" },
  { label: "Family Member" },
  { label: "Visitor" },
  { label: "Physician" },
  { label: "Physician Assistant" },
  { label: "Nurse Practitioner" },
  { label: "Nurse" },
  { label: "Paramedic" },
  { label: "Medical Assistant" },
  { label: "Administrative Staff" },
  { label: "Ancillary Staff" },
  { label: "Volunteer" },
  { label: "Other" },
];

const DEPARTMENTS = [
  { name: "All", class: "all" },
  { name: "Admissions", class: "admissions" },
  { name: "Anesthesiology", class: "anesthesiology" },
  { name: "Cardiology", class: "cardiology" },
  { name: "Emergency", class: "emergency" },
  { name: "Gastroenterology", class: "gastroenterology" },
  { name: "General Services", class: "general-services" },
  { name: "ICU", class: "icu" },
  { name: "IT", class: "it" },
  { name: "Neurology", class: "neurology" },
  { name: "Obstetrics", class: "obstetrics" },
  { name: "Oncology", class: "oncology" },
  { name: "Orthopedics", class: "orthopedics" },
  { name: "Pathology", class: "pathology" },
  { name: "Pharmacology", class: "pharmacology" },
  { name: "Psychiatry", class: "psychiatry" },
  { name: "Radiology", class: "radiology" },
  { name: "Surgery", class: "surgery" },
];

function NewPostForm({ setPosts, setShowForm }) {
  const [text, setText] = useState("");
  const [who, setWho] = useState("");
  const [dep, setDep] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const textLength = text.length;

  async function handleSubmit(e) {
    e.preventDefault();

    if (text && who && dep && text.length <= 300) {
      setIsUploading(true);
      const { data: newPost, error } = await supabase
        .from("posts")
        .insert([{ post: text, who, department: dep }])
        .select();
      setIsUploading(false);
      if (!error) setPosts((posts) => [newPost[0], ...posts]);

      setText("");
      setWho("");
      setDep("");

      setShowForm(false);
    }
  }

  return (
    <form className="main-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Share an appreciation..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={isUploading}
      />
      <span className="char-limit">{300 - textLength}</span>

      <select
        name="category"
        id="category"
        value={who}
        onChange={(e) => setWho(e.target.value)}
        disabled={isUploading}
      >
        <option value="" disabled>
          Select an option
        </option>
        {WHO.map((obj) => (
          <option
            key={obj.label}
            value={obj.label.split(" ").join("-").toLowerCase()}
          >
            {obj.label}
          </option>
        ))}
      </select>

      <select
        name="category"
        id="category"
        value={dep}
        onChange={(e) => setDep(e.target.value)}
        disabled={isUploading}
      >
        <option value="" disabled>
          Select a department
        </option>
        {DEPARTMENTS.map((obj) =>
          obj.class !== "all" ? (
            <option key={obj.class} value={obj.class}>
              {obj.name}
            </option>
          ) : null
        )}
      </select>

      <button className="btn-large btn-post" disabled={isUploading}>
        Post
      </button>
    </form>
  );
}

function CategoryFilter({ setCurrentDepartment }) {
  return (
    <aside>
      <ul className="aside-dep">
        {DEPARTMENTS.map((obj) => (
          <li key={obj.name}>
            <button
              className={`btn-d ${obj.class}`}
              onClick={() => setCurrentDepartment(obj.class)}
            >
              {obj.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function CategoryFilterMobile({ setCurrentDepartment }) {
  const handleDepartmentChange = (event) => {
    setCurrentDepartment(event.target.value);
  };

  return (
    <select
      className="dep-btn-mobile btn-large hidden"
      name="category"
      id="category-mobile"
      defaultValue=""
      onChange={handleDepartmentChange}
    >
      <option disabled value="">
        Select a department
      </option>
      {DEPARTMENTS.map((obj) => (
        <option key={obj.class} value={obj.class}>
          {obj.name}
        </option>
      ))}
    </select>
  );
}

function PostList({ posts, setPosts }) {
  return (
    <section>
      <ul className="post-list">
        {posts.map((obj) => (
          <POST key={obj.id} postObj={obj} setPosts={setPosts} />
        ))}
      </ul>
      <p className="post-count">
        There {posts.length === 1 ? "is" : "are"} {posts.length}{" "}
        {posts.length === 1 ? "praise" : "praises"}. Share your own!
      </p>
    </section>
  );
}

function POST({ postObj, setPosts }) {
  const [isUpdating, setIsUpdating] = useState(false);

  async function handleVote(emoji) {
    setIsUpdating(true);
    const { data: updatedPost, error } = await supabase
      .from("posts")
      .update({ [emoji]: postObj[emoji] + 1 })
      .eq("id", postObj.id)
      .select();
    setIsUpdating(false);

    if (!error)
      setPosts((posts) =>
        posts.map((p) => (p.id === postObj.id ? updatedPost[0] : p))
      );
  }

  return (
    <li key={postObj.id} className="post-container">
      <p className="post">
        {postObj.post}
        <span className="who">{` -${postObj.who}`}</span>
      </p>
      <span className="department bubble">{postObj.department}</span>
      <div className="reactions">
        <button onClick={() => handleVote("hearts")} disabled={isUpdating}>
          ❤️ {postObj.hearts}
        </button>
        <button onClick={() => handleVote("celebrates")} disabled={isUpdating}>
          🙌 {postObj.celebrates}
        </button>
        <button onClick={() => handleVote("prayers")} disabled={isUpdating}>
          🙏 {postObj.prayers}
        </button>
      </div>
    </li>
  );
}
export default App;
