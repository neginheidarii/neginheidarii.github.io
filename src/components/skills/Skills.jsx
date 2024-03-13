import { skills } from "../../Data";
import "./skills.css";
import shapeOne from "../../assets/shape-1.png";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title text-cs">Technical Skills</h2>
      <p className="section__subtitle">
        My <span>Talent</span>
      </p>

      <div className="skills__container container grid">
        {/* skill 1 */}
        <div className="skills__item">
          <div className="skills__titles">
            <h3 className="skills__name">Full Stack development</h3>
          </div>

          <p className="skills__description">
            I excel in React development with a deep understanding of its
            intricacies and a proven track record of building dynamic and
            responsive user interfaces.<br></br>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              <div>
                <b>Frontend:</b>
                <ul style={{ listStyle: "square" }}>
                  <li>HTML & CSS</li>
                  <li>Bootstrap</li>
                  <li>Tailwind CSS</li>
                  <li>JavaScript</li>
                  <li>React</li>
                </ul>
              </div>
              <div>
                <b>Backend:</b>
                <ul style={{ listStyle: "square" }}>
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Python</li>
                  <li>Restful API & GraphQL</li>
                </ul>
              </div>
              <div>
                <b>Databases:</b>
                <ul style={{ listStyle: "square" }}>
                  <li>MongoDB</li>
                  <li>MySQL</li>
                  <li>Oracle</li>
                </ul>
              </div>
            </div>
          </p>

          <div className="skills__bar">
            <span className="skills__percentage">
              <span></span>
            </span>
          </div>
        </div>

        {/* skill 2 */}
        <div className="skills__item">
          <div className="skills__titles">
            <h3 className="skills__name">Data Science</h3>
          </div>

          <p className="skills__description">
            I possess a strong proficiency in Python, along with a comprehensive
            understanding of essential libraries such as{" "}
            <b>NumPy, Pandas, and Matplotlib</b>. Through hands-on experience, I
            have successfully applied these skills to various projects,
            employing data analysis and visualization techniques. My enthusiasm
            for the field extends to ongoing exploration and learning,
            particularly in the realms of deep learning and machine learning
            algorithms.
          </p>

          <div className="skills__bar">
            <span className="skills__percentage">
              <span></span>
            </span>
          </div>
        </div>

        {/* skill 3 */}

        {/* skill 4 */}
        <div className="skills__item">
          <div className="skills__titles">
            <h3 className="skills__name">Development tools</h3>
          </div>

          <p className="skills__description">
            I have extensive experience working with a variety of development
            tools, enhancing my efficiency and workflow. Here's a categorized
            list of the tools I'm proficient in: <br></br> <br></br>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
              }}
            >
              <div>
                <b>Version Control:</b>
                <ul style={{ listStyle: "square" }}>
                  <li>Git</li>
                  <li>GitHub</li>
                  <li>GitLab</li>
                </ul>
              </div>
              <div>
                <b>IDEs:</b>
                <ul style={{ listStyle: "square" }}>
                  <li>VS Code</li>
                  <li>PyCharm</li>
                  <li>Android Studio</li>
                </ul>
              </div>
              <div>
                <b>Other tools:</b>
                <ul style={{ listStyle: "square" }}>
                  <li>Docker</li>
                  <li>Postman</li>
                  <li>Figma</li>
                  <li>Jira</li>
                </ul>
              </div>
            </div>
          </p>

          <div className="skills__bar">
            <span className="skills__percentage">
              <span></span>
            </span>
          </div>
        </div>
        {/* skill 4 */}
        <div className="skills__item">
          <div className="skills__titles">
            <h3 className="skills__name">MERN Stack</h3>
          </div>

          <p className="skills__description">
            I have a good grasp of MERN stack development, using{" "}
            <b>MongoDB, Express.js, React, Node.js</b> to build strong and
            scalable web applications. Through hands-on experience in different
            projects, I've improved my technical skills and developed a keen
            interest in full-stack applications.
          </p>

          <div className="skills__bar">
            <span className="skills__percentage">
              <span></span>
            </span>
          </div>
        </div>
        {/* skill 5 */}
        <div className="skills__item">
          <div className="skills__titles">
            <h3 className="skills__name">Mobile App Development</h3>
          </div>

          <p className="skills__description">
            Experienced in <b>React Native</b> and <b>Java</b> I create
            cross-platform mobile apps that deliver seamless and
            high-performance user experiences. I have developed captone project
            with utilizing React Native, Android Studio, and different
            libraries.
          </p>

          <div className="skills__bar">
            <span className="skills__percentage">
              <span></span>
            </span>
          </div>
        </div>

        <div className="skills__item">
          <div className="skills__titles">
            <h3 className="skills__name">Methodologies</h3>
          </div>

          <p className="skills__description">
            I have a good understanding of <b>Agile</b>, <b>Scrum</b>, and{" "}
            <b>Waterfall</b> methodologies, and I have worked in a team
            environment to deliver projects using these methodologies.
          </p>

          <div className="skills__bar">
            <span className="skills__percentage">
              <span></span>
            </span>
          </div>
        </div>
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">Skills</span>
      </div>
    </section>
  );
};

export default Skills;

{
  /* <div className='skills__item' key={index}>
              <div className='skills__titles'>
                <h3 className='skills__name'>{name}</h3>
              </div>

              <p className='skills__description'>{description}</p>

              <div className='skills__bar'>
                <span
                  className='skills__percentage'
                
                >
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className='section__deco deco__left'>
        <img src={shapeOne} alt='' className='shape' />
      </div>

      <div className='section__bg-wrapper'>
        <span className='bg__title'>Skills</span>
      </div>
    </section> */
}
