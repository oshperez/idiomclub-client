import { useState } from "react";

import "./NewsletterForm.css";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={handleChange}
        placeholder="johndoe@company.com"
      />
      <input type="submit" value="Subscribe" />
    </form>
  );
};

export default NewsletterForm;
