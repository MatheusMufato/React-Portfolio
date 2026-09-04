import { profile } from "../../../data/profile";
import ContactInfoItem from "../../ui/ContactInfoItem/ContactInfoItem";
import ContactForm from "../../ui/ContactForm/ContactForm";
import Reveal from "../../ui/Reveal/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-bloom" aria-hidden="true" />
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Contact Me</h2>
          </div>
        </div>
        <h3 className="contact-title padd-15">Have you any questions ?</h3>
        <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
        <div className="row">
          <div className="contact-grid">
            <Reveal className="contact-info-list" delay={0}>
              <ContactInfoItem icon="fa-phone" title="Call Me" text={profile.phone} />
              <ContactInfoItem icon="fa-location-dot" title="Office" text={profile.city} />
              <ContactInfoItem icon="fa-envelope" title="Email" text={profile.email} />
              <ContactInfoItem icon="fa-earth-americas" title="Website" text={profile.website} />
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="contact-title contact-title-left">Send me an Email</h3>
              <h4 className="contact-sub-title contact-sub-title-left">I'm very responsive to messages</h4>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
