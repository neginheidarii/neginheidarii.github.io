import React from "react";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, url } = projectItem;

        const redirectToExternalLink = () => {
          window.location.href = url;
        };

        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items card card-two"
            key={id}
          >
            <div className="portfolio__img-wrapper">
              <img src={img} alt="" className="portfolio__img" />
            </div>

            <span className="portfolio__category text-cs">{category}</span>
            <h3 className="portfolio__title">{title}</h3>
            <p className="portfolio__description">{description}</p>
            <button
              className="btn pricing__btn text-cs "
              style={{
                backgroundColor: "--bg-color",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "95%",
              }}
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-150}
              duration={500}
              onClick={redirectToExternalLink}
            >
              Git Repository{"  "}
              <FaArrowRight className="pricing__btn-icon"></FaArrowRight>
            </button>

            <img src={shapeTwo} alt="" className="shape c__shape" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
