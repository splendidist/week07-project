import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="*"></Link>
      <div className="header">
        <Link to="/about" className="about-link">
          About
        </Link>
        <Link to="/" className="home-link">
          <h1>Dreamscape</h1>
        </Link>
        <Link to="/posts" className="posts-link">
          Posts
        </Link>
      </div>
    </div>
  );
}
