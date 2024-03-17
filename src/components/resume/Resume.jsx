import React from 'react';
import { cv } from '../../Data';
import Card from './Card';
import './resume.css';
import shapeOne from '../../assets/shape-1.png';

const Resume = () => {
  return (
    <section className="resume section" id="resume">
      <h2 className="section__title text-cs">Academic Projects</h2>
      <p className="section__subtitle">
        My <span>projects</span>
      </p>

      <div className="resume__container container grid">
        <div className="resume__group">
          <h3 className="resume__heading">Capstone Project</h3>

          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "Capstone Project") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>

        <div className="resume__group">
          <h3 className="resume__heading">Achievements</h3>

          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "experience") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
        
      </div>

      <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
      </div>

      <div className="section__bg-wrapper">
        <span className="bg__title">History</span>
      </div>
    </section>
  );
};

export default Resume;
