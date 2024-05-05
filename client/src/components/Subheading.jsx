import { Link } from "react-router-dom";

export default function Subheading() {
  return (
    <div>
      <div className="subheading">
        {" "}
        <Link to="/posts" className="posts-link">
          All
        </Link>
        <Link to="/dreams" className="posts-link">
          Dreams
        </Link>
        <Link to="/nightmares" className="posts-link">
          Nightmares
        </Link>
      </div>
      <div>
        <p className="posts-intro">
          Whether youre seeking inspiration, solace, or simply a window into the
          human psyche, Dreamscape invites you to embark on a journey of
          exploration and discovery. Dive deep into the collective unconscious
          and witness the power of dreams to illuminate the human experience.
        </p>
      </div>
    </div>
  );
}
