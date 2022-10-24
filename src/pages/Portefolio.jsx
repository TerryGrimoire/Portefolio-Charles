import React, { useEffect } from "react";
import Helmet from "react-helmet";
import projetsData from "../data/projetsData";

function Portefolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="flex-col justify-center align-center">
      <Helmet>
        <title> Charles Girouard | Portefolio </title>
        <link rel="canonical" href="https://charlesgirouard.fr/Portefolio" />
        <meta
          name="description"
          content="Charles Girouard, Data Analyst et Data Scientist, vous invite à découvrir son portefolio à travers ses expériences, ses compétences et ses projets."
        />
      </Helmet>
      <h2>Mon Portefolio</h2>
      <div className="desktop_portefolio_container">
        {projetsData.map((el) => (
          <a
            href={el.link}
            target="_blank"
            rel="noreferrer"
            className="flex-col align-center justify-content margin5r0"
          >
            <h3>{el.name}</h3>
            <img src={el.src} alt={el.alt} className="projets" />
            <small>{el.description}</small>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Portefolio;
