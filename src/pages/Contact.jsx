import React, { useEffect } from "react";
import Form from "../components/Form";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col align-center">
      <h2>Nous joindre</h2>
      <section>
        <Form />
      </section>
    </div>
  );
}

export default Contact;
