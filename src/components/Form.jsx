
import Button from "./Button";

export default function Form({ search, setSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search blog posts..."
        aria-label="Search blog posts"
      />
      <Button type="submit">Search</Button>
    </form>
  );
}
