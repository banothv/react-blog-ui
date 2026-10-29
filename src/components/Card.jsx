
export default function Card({ post }) {
  return (
    <article className="post-card">
      <span className="category">{post.category}</span>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="post-meta">
        <span>By {post.author}</span>
        <span>{post.date}</span>
      </div>
    </article>
  );
}
