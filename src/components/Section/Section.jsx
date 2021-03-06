import "./Section.css";

const Section = (props) => {
  return (
    <section className={`section ${props.className || ""}`}>
      <div className="container">{props.children}</div>
    </section>
  );
};

export default Section;
