import React from "react";
import chiffresData from "../data/chiffresData";
import charles from "../assets/charles.png";

function Me() {
  return (
    <section>
      <article className="flex-col align-center justify-center">
        <h2>À propos de Charles</h2>
        <img
          src={charles}
          alt="Charles girouard portrait"
          className="portrait"
        />
        <div className="chiffres_container flex-col">
          {chiffresData.map((data) => (
            <div className="flex-col">
              <h3>
                <strong>{data.important}</strong> {data.title}
              </h3>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Me;
