import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/negin-heidari/"
            target="_blank"
            className="home__social-link"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/neginheidarii"
            target="_blank"
            className="home__social-link"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/NeginHeidarii"
            target="_blank"
            className="home__social-link"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
        </div>

        {/* <p className="footer__copyright text-cs">
          &copy; 2023 <span>Luique</span>. All Rights Reserved
        </p> */}

        <p className="footer__copyright text-cs">
          Developed By <span>Negin Heidari</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
