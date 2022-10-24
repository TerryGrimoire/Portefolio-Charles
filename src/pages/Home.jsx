import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Helmet from "react-helmet";
import Me from "./Me";
import competencesData from "../data/competencesData";
import projetsData from "../data/projetsData";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: {
      items: 2,
    },
    1024: {
      items: 10,
    },
  };

  const items = projetsData.map((el) => (
    <a
      href={el.link}
      target="_blank"
      rel="noreferrer"
      onDragStart={handleDragStart}
      className="flex-col align-center justify-content"
    >
      <h3>{el.name}</h3>
      <img src={el.src} alt={el.alt} className="projets" />
      <small>{el.description}</small>
    </a>
  ));
  return (
    <main>
      <Helmet>
        <title> Charles Girouard | Accueil </title>
        <link rel="canonical" href="https://charlesgirouard.fr" />
        <meta
          name="description"
          content="Charles Girouard, Data Analyst et Data Scientist, vous invite à découvrir son portefolio à travers ses expériences, ses compétences et ses projets."
        />
      </Helmet>
      <section className="landing_page relative">
        <h1>Charles Girouard</h1>
        <h2>Data Analyst | Data Scientist</h2>
        <div className="background_img" />
        <div className="veil" />
      </section>

      <Me />

      <section>
        <article className="flex-col align-center justify-center background2 background">
          <h2>Mes compétences</h2>

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
      <section className="flex-col justify-center align-center margin5r0">
        <h2>Mes projets</h2>
        <AliceCarousel
          autoPlay
          disableButtonsControls
          disableDotsControls
          disableSlideInfo
          infinite
          animationDuration="6000"
          mouseTracking
          responsive={responsive}
          items={items}
        />
      </section>
    </main>
  );
}
