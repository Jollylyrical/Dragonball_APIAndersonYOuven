import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
       
        <div className="about-images">
          <img class = "img" src="/AndersonDanielProdWeb2.jpeg" alt="Anderson" />
          <img class = "img" src='/OuvenProdWeb2.jpeg' alt="Ouven" />
          <h1>Estudiantes Anderson Daniel Ramirez Pardo Y Ouven Giovany Rodriguez Cardenas</h1>
          <h2>Somos estudiantes de la materia de Programación web Y estamos presentando este producto para reforzar nuestro conocimiento.</h2>
          <h2>| Universidad de la Amazonia |</h2>
        </div>
      </div>
    </div>
  );
};

export default About;