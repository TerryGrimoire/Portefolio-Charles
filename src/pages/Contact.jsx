import React, { useEffect } from "react";
import Helmet from "react-helmet";
import Form from "../components/Form";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col align-center">
      <Helmet>
        <title> Charles Girouard | Contact </title>
        <link rel="canonical" href="https://charlesgirouard.fr/Contact" />
        <meta
          name="description"
          content="Charles Girouard, Data Analyst et Data Scientist, vous invite à découvrir son portefolio à travers ses expériences, ses compétences et ses projets."
        />
      </Helmet>
      <h2>Nous joindre</h2>
      <Form />
    </div>
  );
}

export default Contact;
