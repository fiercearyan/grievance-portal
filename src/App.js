import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w11qstg",        // EmailJS service ID
        "template_1938xlf",       // EmailJS template ID
        form.current,
        "c_IwBikeox5BOOvWU"       // EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Your submission has been received.");
        },
        (error) => {
          console.log(error.text);
          alert("Submission failed. Please try again.");
        }
      );
  };

  return (
    <div className="container">
      <div className="eyebrow">Feedback Portal</div>
      <h1>Submit Feedback</h1>
      <p>Please complete the fields below. All submissions are reviewed.</p>

      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="title"
          placeholder="Subject"
          required
        />

        <textarea
          name="message"
          placeholder="Describe the issue or feedback in detail"
          required
        />

        <input
          type="text"
          name="mood"
          placeholder="Priority / current status"
          required
        />

        <input
          type="text"
          name="wish"
          placeholder="Requested resolution"
          required
        />

        <input
          type="text"
          name="to_email"
          value="aryankrsingh7@gmail.com"
          hidden
          readOnly
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
