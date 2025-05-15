import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

export default function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w11qstg",
        "template_1938xlf",
        form.current,
        "c_IwBikeox5BOOvWU"
      )
      .then(
        (result) => {
          alert("💌 Your grievance is sent!");
        },
        (error) => {
          alert("Oops! Something went wrong. Try again 💔");
          console.error(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="container">
      <h1>Dear Bembaa 💕</h1>
      <p>Tell me what’s on your heart today. I’m here, no matter what 💌</p>

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

      <button type="submit">💖 Send 💖</button>
    </div>
  );
}