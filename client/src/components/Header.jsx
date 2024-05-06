import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="*"></Link>
      <div className="header">
        <Link
          aria-label="Read about dreamscape"
          to="/about"
          className="about-link"
        >
          About
        </Link>
        <Link aria-label="Go to the home page" to="/" className="home-link">
          <h1>Dreamscape</h1>
        </Link>
        <Link
          aria-label="View all the posts"
          to="/posts"
          className="posts-link"
        >
          Posts
        </Link>
      </div>
    </div>
  );
}
