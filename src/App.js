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
      <h1>Dear Bembaa 💕</h1>
      <p>Tell me what’s on your heart today. I’m here, no matter what 💌</p>

      {/* 💡 Wrap your form controls inside a <form> element */}
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="title"
          placeholder="🌸 Title please..."
          required
        />

        <textarea
          name="message"
          placeholder="💬 Btaiye kya hua? I'm here to listen (even if you're mad)"
          required
        />

        <input
          type="text"
          name="mood"
          placeholder="😔 Feeling like...hmm??"
          required
        />

        <input
          type="text"
          name="wish"
          placeholder="🎁 kya kiya jaaye? till then I’ll guess 😘"
          required
        />

        <input
          type="text"
          name="to_email"
          value="aryankrsingh7@gmail.com"
          hidden
          readOnly
        />

        <button type="submit">💖 Send 💖</button>
      </form>
    </div>
  );
}