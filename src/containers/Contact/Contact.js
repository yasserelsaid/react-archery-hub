import React from "react";
import classes from "./Contact.module.css";
import Aux from "../../hoc/Auxiliary/Auxiliary";

import NavBar from "../../components/NavBar/NavBar";
import FormGroupAnimated from "../../components/UI/FormGroupAnimated/FormGroupAnimated";
import FormGroupMessage from "../../components/UI/FormGroupMessage/FormGroupMessage";
import Button from "../../components/UI/Button/Button";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import Footer from "../../components/Footer/Footer";

const contact = (props) => (
  <Aux>
    <NavBar />

    <section className={classes.ContactForm}>
      <div className="container">
        <h1 className="l-heading-2">
          {" "}
          <span className="primary-text-dark">Contact</span> Us
        </h1>
        <p>Please fill out the form below to contact us.</p>

        <form action="https://formspree.io/mnqgbzjy" method="POST" >
          <FormGroupAnimated
            type="text"
            name="name"
            id="name"
            for="name"
            text="Name"
          />
          <FormGroupAnimated
            type="email"
            name="email"
            id="email"
            for="email"
            text="Email"
          />

          <FormGroupMessage label="Message" />

          <Button type="submit" className="btn">
            Submit
          </Button>
        </form>
      </div>
    </section>
    <ContactInfo />

    <Footer />
  </Aux>
);

export default contact;
