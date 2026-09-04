import Reveal from "../Reveal/Reveal";

export default function Timeline({ title, items, sectionClass, delay = 0 }) {
  return (
    <Reveal className={`${sectionClass} padd-15`} delay={delay}>
      <h3 className="title">{title}</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            {items.map((item) => (
              <div className="timeline-item" key={item.date + item.title}>
                <div className="circle-dot"></div>
                <h3 className="timeline-date">
                  <i className="fa fa-calendar"></i> <span> </span>
                  {item.date}
                </h3>
                <h4 className="timeline-title">{item.title}</h4>
                <p className="timeline-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
