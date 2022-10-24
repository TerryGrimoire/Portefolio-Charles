import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Me from "./Me";
import competencesData from "../data/competencesData";
import projetsData from "../data/projetsData";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleDragStart = (e) => e.preventDefault();

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
      <p>{el.description}</p>
    </a>
  ));
  return (
    <main>
      <section className="landing_page relative">
        <h1>Charles Girouard</h1>
        <h2>Data Analyst | Data Scientist</h2>
        <div className="background_img" />
        <div className="veil" />
      </section>

      <Me />

      <section>
        <article className="flex-col align-center justify-center background2 background">
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
      <section className="flex-col justify-center align-center margin1r0">
        <h2>Mes projets</h2>
        <AliceCarousel
          autoPlay
          disableButtonsControls
          disableDotsControls
          disableSlideInfo
          infinite
          animationDuration="6000"
          mouseTracking
          items={items}
        />
      </section>
    </main>
  );
}
