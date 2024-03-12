// import React from "react";
import profileImg from "../../assets/profile-img.png";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";
import { Link } from "react-scroll";

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import CV from "../../assets/Negin-Heidari-CV.pdf";
import "./home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__wrapper">
        <div className="home__container container">
          <p className="home__subtitle text-cs">
            Hello, <span>My Name Is</span>
          </p>

          <h1 className="home__title text-cs">
            <span>NEGIN</span> HEIDARI
          </h1>

          <p className="home__job">
            <span className="text-cs">I Am</span> <b> a Software Developer</b>
          </p>

          <div className="home__img-wrapper">
            <div className="home__banner">
              <img src={profileImg} alt="" className="home__profile" />
            </div>

            <p className="home__data home__data-one">
              <span className="text-lg">
                3<b>+</b>
              </span>

              <span className="text-sm text-cs">
                Years of <span>Experience</span>
              </span>
            </p>

            <p className="home__data home__data-two">
              <span className="text-lg">10+</span>

              <span className="text-sm text-cs">
                Completed <span>Projects</span>
              </span>
            </p>

            <img src={shapeOne} alt="" className="shape shape__1" />
            <img src={shapeTwo} alt="" className="shape shape__2" />
            <img src={shapeTwo} alt="" className="shape shape__3" />
          </div>

          <p className="home__text">
            Welcome to my digital realm! I'm Negin Heidari, a coding virtuoso on
            a mission to transform ideas into dynamic digital realities. With
            over 3 years of programming prowess, I've mastered the art of
            crafting innovative and efficient software solutions. My portfolio
            isn't just a showcase of projects; it's a journey through a world
            where lines of code weave tales of creativity and problem-solving.
            Join me as we embark on a thrilling exploration of my coding
            escapades—where every click unveils a story of passion, precision,
            and the relentless pursuit of excellence. Ready to turn your digital
            dreams into code-powered wonders? Let's make it happen!
          </p>

          <div className="home__socials">
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

          <div className="home__btns">
            <a download="" href={CV} className="btn text-cs">
              Download CV
            </a>

            <Link
              className="hero__link text-cs"
              to="skills"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-150}
              duration={500}
            >
              My Skills
            </Link>
          </div>
        </div>

        <div className="section__deco deco__left">
          <img src={shapeOne} alt="" className="shape" />
        </div>
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Negin</span>
      </div>
    </section>
  );
};

export default Home;
