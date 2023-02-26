import "./style.css";

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

function CategoryFilter() {
  return <aside>Category Filter</aside>;
}

function PostList() {
  return <section>Post List</section>;
}
export default App;
