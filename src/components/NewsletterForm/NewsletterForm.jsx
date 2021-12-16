import { useState } from "react";

import "./NewsletterForm.css"

const NewsletterForm = () => {
  const [email, setEmail] = useState("")
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="newsletter-form">
      <input
        type="text"
        value={email}
        onChange={handleChange}
        className="newsletter-form__input-text"
        placeholder="johndoe@company.com"
      />
      <input
        type="submit"
        value="Subscribe"
        className="newsletter-form__input-submit"
      />
    </form>
  );
}

export default NewsletterForm;