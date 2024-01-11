import React, { useEffect, useState } from 'react';

// Styles
import './style.css';

// Data
import skillsData from '../../../../data/skills.json';
import { markdownToHTML } from '../../../../utils/converter';

// ------------------

function Skills() {
  const [progressReached, setProgressReached] = useState<boolean>(false);

  useEffect(() => {
    const progressBox = document.querySelector('.skills-progress');

    /**
     * Adding width to progress bars on reaching
     */
    const handleScroll = () => {
      if (progressBox) {
        const { top } = progressBox.getBoundingClientRect();
        if (top <= 100) setProgressReached(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="skills" className="section">
      <h2 className="title">{skillsData.title}</h2>
      <p
        className="content-670"
        dangerouslySetInnerHTML={{
          __html: markdownToHTML(skillsData.paragraphe),
        }}></p>

      <ul className="skills-history block-right">
        {skillsData.skillsHistory.map((skill, i) => (
          <li key={'skill-item-' + i}>
            <span className="date">{skill.title}</span>
            <p
              dangerouslySetInnerHTML={{
                __html: markdownToHTML(skill.description),
              }}></p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
