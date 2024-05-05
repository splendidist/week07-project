import Header from "../components/Header";
import "../About.css";

export default function About() {
  return (
    <div>
      <Header />
      <div className="about">
        <p>
          Welcome to Dreamscape, a unique platform designed for dreamers to
          share and explore the depths of their subconscious mind. Our app
          provides a safe and supportive space for users to record and reflect
          on their dreams, whether theyre whimsical fantasies or haunting
          nightmares.
        </p>
        <p>
          At Our Dream Diary, we understand the profound impact that dreams can
          have on our waking lives. They can inspire creativity, offer insight
          into our deepest desires and fears, and even serve as a window into
          our subconscious thoughts and emotions. By keeping a record of your
          dreams, you can unlock the mysteries of your inner world and gain a
          deeper understanding of yourself.
        </p>
        <p>With Our Dream Diary, you can:</p>
        <ul>
          <li>
            Record Your Dreams: Easily jot down the details of your dreams as
            soon as you wake up, ensuring that no fleeting memory is lost to the
            passage of time.
          </li>
          <li>
            Explore Dream Themes: Browse through a diverse range of dream
            submissions from fellow users to discover common themes and symbols
            that may resonate with your own experiences.
          </li>
          <li>
            Connect with Others: Share your dreams with the community and engage
            in discussions with other dreamers, fostering a sense of camaraderie
            and mutual support.
          </li>
        </ul>
        <p>
          Join us on a journey of self-discovery and exploration as we delve
          into the fascinating world of dreams together. Start using our Dream
          Diary now and unravel the mysteries of your nighttime adventures.
        </p>
        <p>Sweet dreams!</p>
      </div>
    </div>
  );
}
