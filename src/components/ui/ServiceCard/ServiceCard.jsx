import Reveal from "../Reveal/Reveal";

export default function ServiceCard({ icon, title, text, delay = 0 }) {
  return (
    <Reveal className="service-row" as="article" delay={delay} tabIndex={0}>
      <span className="icon">
        <i className={`fa ${icon}`}></i>
      </span>
      <h4>{title}</h4>
      <p>{text}</p>
      <i className="fa fa-arrow-right row-arrow" aria-hidden="true"></i>
    </Reveal>
  );
}
