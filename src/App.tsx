import './App.scss';
import profileImage from './assets/profile-image.jpg';
import {
  PiGithubLogo,
  PiLinkedinLogoLight,
  PiCalendarLight,
} from 'react-icons/pi';
import { GoCopy } from 'react-icons/go';
import { useCallback, useState } from 'react';
import { Tooltip } from 'react-tooltip';

const App: React.FC = () => {
  const [tooltipText, setTooltipText] = useState('Copy');
  const personalEmail = 'klihsman@gmail.com';

  const copyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText(personalEmail)
      .then(() => setTooltipText('Copied!'))
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  }, [personalEmail]);

  const handleMouseLeave = () => {
    setTimeout(() => setTooltipText('Copy'), 200);
  };

  return (
    <div className="App">
      <div className="main-container">
        <div className="profile-container">
          <img
            src={profileImage}
            className="profile-image"
            alt="profile-image"
          />

          <div className="profile-text-informations">
            <span className="profile-user-name">Klihsman Freitas</span>
            <span className="profile-user-email">
              klihsman@gmail.com
              <Tooltip
                style={{ backgroundColor: '#6c757d', padding: '4px 10px' }}
                anchorSelect=".copy"
                place="right"
              >
                {tooltipText}
              </Tooltip>
              <GoCopy
                className="copy"
                onClick={copyToClipboard}
                onMouseLeave={handleMouseLeave}
              />
            </span>
          </div>
          <div className="profile-actions">
            <a
              className="profile-action git"
              href="https://github.com/Klihsman"
              target="_blank"
              rel="noreferrer"
            >
              <PiGithubLogo />
              Github
            </a>
            <a
              className="profile-action lin"
              href="https://www.linkedin.com/in/klihsman/"
              target="_blank"
              rel="noreferrer"
            >
              <PiLinkedinLogoLight />
              LinkedIn
            </a>
            <a
              className="profile-action age"
              href="https://calendly.com/klihsman"
              target="_blank"
              rel="noreferrer"
            >
              <PiCalendarLight />
              Agenda
            </a>
          </div>
          <div className="profile-tags">
            <a
              href="https://legacy.reactjs.org/docs/getting-started.html"
              className="profile-tag"
              target="_blank"
              rel="noreferrer"
            >
              #React
            </a>
            <a
              href="https://angular.dev/overview/"
              className="profile-tag"
              target="_blank"
              rel="noreferrer"
            >
              #Angular
            </a>
            <a
              href="https://www.typescriptlang.org/docs/"
              className="profile-tag"
              target="_blank"
              rel="noreferrer"
            >
              #Typescript
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              className="profile-tag"
              target="_blank"
              rel="noreferrer"
            >
              #JavaScript
            </a>
          </div>
        </div>
        <div className="info-container">
          <p className="info-paragraph">
            Software Engineer and Frontend Developer Specialized in React and
            Angular with 4+ Years of Experience
            <br />
            <br />
            <br />
            #React #Angular #JavaScript #TypeScript #FrontendDevelopment #UI/UX
            #APIs #SoftwareEngineer #AWS
            <br />
            <br />
            <br />
            💡 About Me:
            <br />I am a Software Engineer with a degree in Systems Analysis and
            Development and over 4 years of experience in frontend development.
            My expertise is in building dynamic, accessible, and highly
            responsive user interfaces with a focus on performance and
            scalability, using modern technologies and best practices in React
            and Angular.
            <br />
            <br />
            <br />
            ⚙️ Frontend Expertise:
            <br />I have advanced knowledge in JavaScript and TypeScript, with
            experience in React (Redux, ContextAPI, Recoil, Router, Hooks) and
            Angular (JS, 8+). I also have excellent skills in integrating REST
            APIs, ensuring smooth data flow and optimal user experiences. I work
            seamlessly with styling frameworks and tools like CSS, Bootstrap,
            SASS, Styled-Components, and Tailwind, always aiming to combine
            aesthetics with functionality.
            <br />
            <br />
            <br />
            🧪 Code Quality and Best Practices:
            <br /> I am committed to good practices such as Clean Code, SOLID,
            and TDD, applying rigorous testing with JEST and Cypress to validate
            features and ensure the reliability of my work. My goal is always to
            develop maintainable, high-performance solutions.
            <br />
            <br />
            <br />
            📊 Project Management and Collaboration:
            <br />
            Beyond technical skills, I bring solid experience in project
            management and team collaboration. Proficient in version control
            systems like Git and BitBucket, I also streamline workflows using
            tools like Asana, Trello, and ClickUp. My strong communication
            skills enable me to thrive in distributed teams, fostering alignment
            and driving agile delivery processes.
            <br />
            <br />
            <br />
            🌐 Cloud and DevOps Skills:
            <br />
            In addition to frontend expertise, I have a growing interest in
            cloud technologies, particularly AWS. I am familiar with deploying
            and maintaining applications on cloud platforms, ensuring robust
            performance and availability. This complements my ability to deliver
            end-to-end solutions tailored to business needs.
            <br />
            <br />
            <br />
            🚀 Key Integrations and Professional Experiences:
            <br />
            <br />
            <ul>
              <li>
                Developed full integrations with banks like Safra, Santander,
                BV, and Bradesco, handling API communication from simulation
                registration to proposal finalization while ensuring data
                consistency and compliance with banking requirements.
              </li>
              <br />
              <li>
                Optimized marketing automation processes by integrating RD
                Station using RabbitMQ queues, streamlining data flows and
                enhancing campaign efficiency.
              </li>
              <br />
              <li>
                Created analytical integration with Power BI and Excel for
                real-time KPI tracking and improved data-driven decision-making.
              </li>
              <br />
              <li>
                Integrated advanced tools like ElasticSearch for application
                performance monitoring and AWS Lambda for scalable cloud
                solutions.
              </li>
              <br />
            </ul>
            And much more that you will find out by{' '}
            <a
              className="profile-tag"
              target="_blank"
              rel="noreferrer"
              href="https://calendly.com/klihsman"
            >
              scheduling
            </a>
            a call with me
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
