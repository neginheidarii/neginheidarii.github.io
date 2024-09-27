import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Blog1 from "../../assets/blog1.jpg";
import Blog2 from "../../assets/blog2.jpg";
import Blog3 from "../../assets/blog3.jpg";
import shapeOne from "../../assets/shape-1.png";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog section" id="blog">
      <h2 className="section__title text-cs">Career Goals</h2>
      <p className="section__subtitle">
        statement of <span>career goals</span>
      </p>

      <div className="blog__container container grid">
        <div className="blog__item card card-two">
          <span className="blog__date text-cs">NOVEMBER 02, 2023</span>
          <h3 className="blog__title">
            A Vision for Professional Evolution in Technology
          </h3>
          <div className="blog__split">
            <p className="blog__description">
              <b>"We are the facilitators of our own creative evolution"</b>
              <br></br>
              -Bill Hicks <br></br>
              In the field of technology, I firmly believe that each of us has
              the power to shape our own professional growth and development.
              Inspired by Bill Hicks' wisdom, I see my journey in tech not just
              as a quest for career advancement, but as a continuous process of
              self-discovery and innovation. My passion for technology stems
              from childhood dreams of exploring space and making meaningful
              contributions to the world of science and technology.<br></br> As
              a 21-year-old navigating my path towards independence, I am driven
              by a deep-seated commitment to learning and growth. Coding and
              software development are not just skills I possess; they are tools
              that enable me to bring my ideas to life and make a positive
              impact. I view challenges as opportunities for learning and
              improvement, and I see myself as a collaborator, working alongside
              others to drive innovation and change within the tech industry.
              Looking ahead, I aspire to leverage my skills and experiences to
              make a meaningful contribution to the world of technology,
              inspiring others to embark on their own journey of professional
              evolution.
            </p>

            {/* <a href="" className="link">
            Read more
            <FaArrowRight className="link__icon"></FaArrowRight>
          </a> */}

            <img src={Blog1} alt="" className="blog__img " />
          </div>
        </div>

        {/* <div className='blog__item card card-two'>
          <span className='blog__date text-cs'>OCTOBER 31, 2022</span>
          <h3 className='blog__title'>Follow Your Own Design Process</h3>
          <p className='blog__description'>
            Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
            Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
            ornare eget…
          </p>

          <a href='' className='link'>
            Read more
            <FaArrowRight className='link__icon'></FaArrowRight>
          </a>

          <img src={Blog2} alt='' className='blog__img' />
        </div>

        <div className='blog__item card card-two'>
          <span className='blog__date text-cs'>NOVEMBER 28, 2022</span>
          <h3 className='blog__title'>
            Usability Secrets to Create Better Interfaces
          </h3>
          <p className='blog__description'>
            Vivamus interdum suscipit lacus. Nunc ultrices accumsan mattis.
            Aliquam vel sem vel velit efficitur malesuada. Donec arcu lacus,
            ornare eget…
          </p>

          <a href='' className='link'>
            Read more
            <FaArrowRight className='link__icon'></FaArrowRight>
          </a>

          <img src={Blog3} alt='' className='blog__img' />
        </div> */}
      </div>

      <div className="section__deco deco__right">
        <img src={shapeOne} alt="" className="shape" />
      </div>

    
    </section>
  );
};

export default Blog;
