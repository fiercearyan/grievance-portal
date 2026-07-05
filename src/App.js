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
          alert("status: 200 — update transmitted");
        },
        (error) => {
          console.log(error.text);
          alert("status: 500 — transmission failed, retry");
        }
      );
  };

  return (
    <div className="container">
      <div className="status-row">
        <span className="status-dot" />
        <span className="status-label">status_update.req</span>
      </div>

      <h1>&gt; submit_update()</h1>
      <p className="subtitle">{"// fill required fields and execute"}</p>

      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="f-title">title</label>
        <input
          id="f-title"
          type="text"
          name="title"
          placeholder="untitled"
          required
        />

        <label htmlFor="f-message">description</label>
        <textarea
          id="f-message"
          name="message"
          placeholder="// describe the change"
          required
        />

        <label htmlFor="f-mood">status</label>
        <select id="f-mood" name="mood" required defaultValue="">
          <option value="" disabled>-- select --</option>
          <option value="on_track">on_track</option>
          <option value="at_risk">at_risk</option>
          <option value="blocked">blocked</option>
        </select>

        <label htmlFor="f-wish">next_steps</label>
        <input
          id="f-wish"
          type="text"
          name="wish"
          placeholder="null"
          required
        />

        <input
          type="text"
          name="to_email"
          value="aryankrsingh7@gmail.com"
          hidden
          readOnly
        />

        <button type="submit">execute --submit</button>
      </form>
    </div>
  );
}
