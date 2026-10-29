
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Form from "./components/Form";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/posts.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load blog posts.");
        }
        return response.json();
      })
      .then((data) => setPosts(data))
      .catch(() => setError("Unable to load posts. Check posts.json."))
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    "All",
    ...new Set(posts.map((post) => post.category))
  ];

  const filteredPosts = posts.filter((post) => {
    const term = search.toLowerCase();

    const matchesSearch = [
      post.title,
      post.excerpt,
      post.category,
      post.author
    ].some((value) => value.toLowerCase().includes(term));

    const matchesCategory =
      category === "All" || post.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Header />

      <main id="home">
        <section className="hero">
          <p className="eyebrow">LEARN. BUILD. SHARE.</p>
          <h1>Explore the World of Web Development</h1>
          <p>
            Practical articles about HTML, CSS, JavaScript,
            and React.
          </p>
        </section>

        <section className="blog-section" id="posts">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR ARTICLES</p>
              <h2>Latest Blog Posts</h2>
            </div>
            <span>{filteredPosts.length} posts</span>
          </div>

          <Form search={search} setSearch={setSearch} />

          <div className="filters" aria-label="Filter by category">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={
                  category === item
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
              >
                {item}
              </button>
            ))}
          </div>

          {loading && <p>Loading blog posts...</p>}

          {!loading && error && (
            <p role="alert">{error}</p>
          )}

          {!loading && !error && filteredPosts.length > 0 && (
            <div className="post-grid">
              {filteredPosts.map((post) => (
                <Card key={post.id} post={post} />
              ))}
            </div>
          )}

          {!loading && !error && filteredPosts.length === 0 && (
            <p className="empty-message">
              No posts found. Try another search or category.
            </p>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}
