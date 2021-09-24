import React, { useState } from "react";
import { Styles, CssTextField } from "./ContactElements";
import { Button } from "../ButtonElement";
import swal from "sweetalert";
import "./Contact.css";

function ContactSection() {
  const classes = Styles();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setNameError(false);
    setEmailError(false);
    setMessageError(false);

    if (name === "") {
      setNameError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (message === "") {
      setMessageError(true);
    }

    if (name !== "" && email !== "" && message !== "") {
      swal("Thank you for contacting us! Have a good day!");
    }
  };

  return (
    <div className={classes.container} id="contact-us">
      <h1 className="contact-font-color font-size">Contact Us</h1>
      <div>
        <form className={classes.container} onSubmit={handleSubmit}>
          <CssTextField
            variant="filled"
            label="Full Name"
            name="name"
            className={classes.textField}
            InputProps={{
              className: classes.input,
            }}
            focuscolor="black"
            onChange={event => setName(event.target.value)}
            error={nameError}
            helperText={nameError ? "Please fill out your full name." : ""}
          />
          <CssTextField
            variant="filled"
            label="Email"
            name="email"
            className={classes.textField}
            InputProps={{
              className: classes.input,
            }}
            focuscolor="black"
            onChange={event => setEmail(event.target.value)}
            error={emailError}
            helperText={emailError ? "Please fill out your email." : ""}
          />
          <CssTextField
            variant="filled"
            label="Message"
            name="message"
            multiline
            rows={10}
            className={classes.textField}
            InputProps={{
              className: classes.input,
            }}
            focuscolor="black"
            onChange={event => setMessage(event.target.value)}
            error={messageError}
            helperText={messageError ? "Please give us a message." : ""}
          />
          <div className="newsletter">
            <input type="checkbox" />
            <p>I want to receive newsletters</p>
          </div>
          <Button type="submit" className={classes.button}>
            Submit
          </Button>
        </form>
      </div>
      <span className="span">
        For direct assistance, call us at 512-399-9521
      </span>
      <br />
      <span className="span">
        For additional and specific requests, feel free to reach out to us at
        the corresponding emails
      </span>
      <div className="additional-contacts">
        <ul>
          <li>Engineering: Lucca@talarai.com</li>
          <li>Administration: Ben@talarai.com</li>
          <li>Operations: Marvina@talarai.com</li>
          <li>Management: Tucker@talarai.com</li>
          <li>General: info@talarai.com</li>
          <li>Partnerships: Ivana@talarai.com</li>
        </ul>
      </div>
    </div>
  );
}

export default ContactSection;
