import { ReactComponent as NewsletterSvg } from "assets/imgs/man-and-mailbox.svg";
import NewsletterForm from "components/NewsletterForm/NewsletterForm";

import "./Newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <NewsletterSvg className="newsletter__image" />
      <div>
        <h1 className="newsletter__heading">Lorem ipsum dolor.</h1>
        <h2 className="newsletter__subheading">Subscribe to our newsletter!</h2>
        <p className="newsletter__paragraph">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo vel,
          incidunt molestiae iusto distinctio consequuntur.
        </p>
        <NewsletterForm />
      </div>
    </div>
  );
};

export default Newsletter;
