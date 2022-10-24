import React, { useEffect } from "react";
import projetsData from "../data/projetsData";

function Portefolio() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="flex-col justify-center align-center">
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
