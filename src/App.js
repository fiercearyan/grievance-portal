import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w11qstg",        // your EmailJS service ID
        "template_1938xlf",       // your EmailJS template ID
        form.current,
        "c_IwBikeox5BOOvWU"       // your public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Sent to Aryan ❤️");
        },
        (error) => {
          console.log(error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <div className="container">
      <h1>Haan toh Madamji ♥️</h1>
      <p>aaiye sunte hai Bembaa ke Nakhre 💌</p>

      {/* 💡 Wrap your form controls inside a <form> element */}
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="title"
          placeholder="🌸 Shuru Kijiye Title se..."
          required
        />

        <textarea
          name="message"
          placeholder="💬 Btaiye kya hua? I'm here to listen (even if you're mad)😌"
          required
        />

        <input
          type="text"
          name="mood"
          placeholder="🤭 Mood kesa h billu ka??"
          required
        />

        <input
          type="text"
          name="wish"
          placeholder="🎁 kya kiya jaaye? Mai guess kr lunga waise😘"
          required
        />

        <input
          type="text"
          name="to_email"
          value="aryankrsingh7@gmail.com"
          hidden
          readOnly
        />

        <button type="submit">Send with Love ❤️</button>
      </form>
    </div>
  );
}