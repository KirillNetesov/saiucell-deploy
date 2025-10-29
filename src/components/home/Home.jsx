import "./Home.css";
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="media-icons">
        <a
          href="https://www.facebook.com/netesov.olegovic.kirill"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="https://www.instagram.com/kirill.netesov/"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="https://github.com/KirillNetesov"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
};

export default Home;
