import { services } from "../../../data/services";
import ServiceCard from "../../ui/ServiceCard/ServiceCard";

export default function Services() {
  return (
    <section id="services">
      <div className="section-bloom" aria-hidden="true" />
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Services</h2>
          </div>
        </div>
        <div className="row">
          <div className="services-list">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
