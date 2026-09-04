import { motion } from "framer-motion";
import { profile } from "../../../data/profile";
import { skills, softSkills } from "../../../data/skills";
import { education } from "../../../data/education";
import { experience } from "../../../data/experience";
import SkillTag from "../../ui/SkillTag/SkillTag";
import Timeline from "../../ui/Timeline/Timeline";
import Reveal from "../../ui/Reveal/Reveal";

export default function About({ onHireMe }) {
  return (
    <section id="about" className="about">
      <div className="section-bloom" aria-hidden="true" />
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <Reveal className="about-text padd-15">
                <h3>
                  <span className="about-mark">//</span>
                  Hello There, I'm {profile.firstName} and<span> {profile.aboutTitle}</span>
                </h3>
                {profile.aboutText.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </Reveal>
            </div>
            <div className="row">
              <Reveal className="personal-info padd-15" delay={0.1}>
                <div className="meta-strip">
                  <span className="meta-pill">
                    <span className="meta-label">Birthday</span>
                    <span className="meta-value">{profile.birthday}</span>
                  </span>
                  <span className="meta-pill">
                    <span className="meta-label">Age</span>
                    <span className="meta-value">{profile.age} years</span>
                  </span>
                  <span className="meta-pill">
                    <span className="meta-label">Phone</span>
                    <span className="meta-value">{profile.phone}</span>
                  </span>
                  <span className="meta-pill">
                    <span className="meta-label">Email</span>
                    <span className="meta-value">{profile.email}</span>
                  </span>
                  <span className="meta-pill">
                    <span className="meta-label">Country</span>
                    <span className="meta-value">{profile.country}</span>
                  </span>
                  <span className="meta-pill">
                    <span className="meta-label">Language</span>
                    <span className="meta-value">
                      {profile.language} · {profile.languageLevel}
                    </span>
                  </span>
                  <span className="meta-pill meta-status">
                    <span className="meta-label">Status</span>
                    <span className="meta-value">
                      <span className="status-dot" aria-hidden="true"></span>
                      {profile.freelancerStatus}
                    </span>
                  </span>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <motion.a
                      href="#contact"
                      onClick={onHireMe}
                      className="btn Hire-me"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Hire-me
                    </motion.a>
                  </div>
                </div>
              </Reveal>
              <Reveal className="skills padd-15" delay={0.2}>
                <h5 className="skills-group-label">Tech stack</h5>
                <div className="skill-tag-cloud">
                  {skills.map((label, i) => (
                    <SkillTag key={label} label={label} delay={i * 0.03} />
                  ))}
                </div>
                <h5 className="skills-group-label">Soft skills</h5>
                <div className="skill-tag-cloud">
                  {softSkills.map((label, i) => (
                    <SkillTag key={label} label={label} delay={i * 0.03} muted />
                  ))}
                </div>
              </Reveal>
            </div>
            <div className="row">
              <Timeline title="Education" items={education} sectionClass="education" delay={0.1} />
              <Timeline title="Experience" items={experience} sectionClass="experience" delay={0.2} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
