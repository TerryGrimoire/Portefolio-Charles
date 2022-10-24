import React from "react";
import { Link } from "react-router-dom";
import croix from "../assets/fermer.png";

function Nav({ setOpenBurger }) {
  return (
    <nav className="flex-col openBurger justify-between">
      <button
        type="button"
        onClick={() => setOpenBurger(false)}
        className="croix"
      >
        <img src={croix} alt="croix pour fermer la navigation sur la page" />
      </button>
      <Link to="/">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Accueil
        </button>
      </Link>
      <Link to="/Competences">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Compétences
        </button>
      </Link>
      <Link to="/Portefolio">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Portefolio
        </button>
      </Link>
      <Link to="/Contact">
        <button type="button" onClick={() => setOpenBurger(false)}>
          Contact
        </button>
      </Link>
    </nav>
  );
}

export default Nav;
