export default function ContactInfoItem({ icon, title, text }) {
  return (
    <div className="contact-info-item">
      <div className="icon">
        <i className={`fa ${icon}`}></i>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
