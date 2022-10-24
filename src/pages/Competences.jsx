import React, { useEffect } from "react";
import Helmet from "react-helmet";
import competencesData from "../data/competencesData";

function Competences() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section>
      <Helmet>
        <title> Charles Girouard | Compétences </title>
        <link rel="canonical" href="https://charlesgirouard.fr/Competences" />
        <meta
          name="description"
          content="Charles Girouard, Data Analyst et Data Scientist, vous invite à découvrir son portefolio à travers ses expériences, ses compétences et ses projets."
        />
      </Helmet>
      <article className="flex-col align-center justify-center background2">
        <h2>Les compétences</h2>

        <div className="competences_container flex wrap justify-center align-center">
          {competencesData.map((data) => (
            <div className="flex-col justify-center align-center">
              <img src={data.src} alt={data.alt} className="competences" />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Competences;
