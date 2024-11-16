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
  const [language, setLanguage] = useState('EN');

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

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
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
          {language === 'PT' ? (
            <p className="info-paragraph">
              Engenheiro de Software e Desenvolvedor Frontend Especializado em
              React e Angular com Mais de 4 Anos de Experiência
              <br />
              <br />
              <br />
              #React #Angular #JavaScript #TypeScript #FrontendDevelopment
              #UI/UX #APIs #SoftwareEngineer #AWS
              <br />
              <br />
              <br />
              💡 Sobre Mim:
              <br /> Sou Engenheiro de Software com formação em Análise e
              Desenvolvimento de Sistemas e mais de 4 anos de experiência em
              desenvolvimento frontend. Tenho expertise em criar interfaces de
              usuário dinâmicas, acessíveis e altamente responsivas, com foco em
              performance e escalabilidade, utilizando tecnologias modernas e
              práticas recomendadas em React e Angular.
              <br />
              <br />
              <br />
              ⚙️ Expertise em Frontend:
              <br /> Possuo conhecimento avançado em JavaScript e TypeScript,
              com experiência em React (Redux, ContextAPI, Recoil, Router,
              Hooks) e Angular (JS, 8+). Também tenho excelentes habilidades na
              integração de APIs REST, garantindo fluxo de dados eficiente e
              experiências otimizadas para os usuários. Trabalho de forma fluida
              com frameworks e ferramentas de estilo como CSS, Bootstrap, SASS,
              Styled-Components e Tailwind, sempre buscando aliar estética à
              funcionalidade.
              <br />
              <br />
              <br />
              🧪 Qualidade de Código e Boas Práticas:
              <br /> Sou comprometido com boas práticas como Clean Code, SOLID e
              TDD, aplicando testes rigorosos com JEST e Cypress para validar
              funcionalidades e garantir a confiabilidade do meu trabalho. Meu
              objetivo é sempre desenvolver soluções performáticas e de fácil
              manutenção.
              <br />
              <br />
              <br />
              📊 Gestão de Projetos e Colaboração:
              <br /> Além das habilidades técnicas, possuo sólida experiência em
              gestão de projetos e colaboração em equipe. Sou proficiente em
              sistemas de controle de versão como Git e BitBucket, e otimizando
              fluxos de trabalho com ferramentas como Asana, Trello e ClickUp.
              Minhas fortes habilidades de comunicação me permitem prosperar em
              equipes distribuídas, promovendo alinhamento e impulsionando
              processos de entrega ágeis.
              <br />
              <br />
              <br />
              🌐 Conhecimentos em Cloud e DevOps:
              <br /> Além da expertise em frontend, tenho crescente interesse em
              tecnologias de nuvem, especialmente AWS. Tenho familiaridade com a
              implantação e manutenção de aplicações em plataformas de nuvem,
              garantindo robustez em performance e disponibilidade. Isso
              complementa minha capacidade de entregar soluções de ponta a ponta
              alinhadas às necessidades do negócio.
              <br />
              <br />
              <br />
              🚀 Integrações e Experiências Profissionais de Destaque:
              <br />
              <br />
              <ul>
                <li>
                  Desenvolvi integrações completas com bancos como Safra,
                  Santander, BV e Bradesco, gerenciando comunicação de APIs
                  desde o registro de simulações até a finalização de propostas,
                  garantindo consistência de dados e conformidade com os
                  requisitos bancários.
                </li>
                <br />
                <li>
                  Otimizei processos de automação de marketing integrando o RD
                  Station utilizando filas RabbitMQ, aprimorando fluxos de dados
                  e a eficiência das campanhas.
                </li>
                <br />
                <li>
                  Criei integração analítica com Power BI e Excel para
                  monitoramento de KPIs em tempo real e tomada de decisões
                  baseadas em dados.
                </li>
                <br />
                <li>
                  Integrei ferramentas avançadas como ElasticSearch para
                  monitoramento de performance de aplicações e AWS Lambda para
                  soluções escaláveis em nuvem.
                </li>
                <br />
              </ul>
              E muito mais que você poderá descobrir{' '}
              <a
                className="profile-tag"
                target="_blank"
                rel="noreferrer"
                href="https://calendly.com/klihsman"
              >
                agendando
              </a>{' '}
              uma reunião comigo.
            </p>
          ) : (
            <p className="info-paragraph">
              Software Engineer and Frontend Developer Specialized in React and
              Angular with 4+ Years of Experience
              <br />
              <br />
              <br />
              #React #Angular #JavaScript #TypeScript #FrontendDevelopment
              #UI/UX #APIs #SoftwareEngineer #AWS
              <br />
              <br />
              <br />
              💡 About Me:
              <br />I am a Software Engineer with a degree in Systems Analysis
              and Development and over 4 years of experience in frontend
              development. My expertise is in building dynamic, accessible, and
              highly responsive user interfaces with a focus on performance and
              scalability, using modern technologies and best practices in React
              and Angular.
              <br />
              <br />
              <br />
              ⚙️ Frontend Expertise:
              <br />I have advanced knowledge in JavaScript and TypeScript, with
              experience in React (Redux, ContextAPI, Recoil, Router, Hooks) and
              Angular (JS, 8+). I also have excellent skills in integrating REST
              APIs, ensuring smooth data flow and optimal user experiences. I
              work seamlessly with styling frameworks and tools like CSS,
              Bootstrap, SASS, Styled-Components, and Tailwind, always aiming to
              combine aesthetics with functionality.
              <br />
              <br />
              <br />
              🧪 Code Quality and Best Practices:
              <br /> I am committed to good practices such as Clean Code, SOLID,
              and TDD, applying rigorous testing with JEST and Cypress to
              validate features and ensure the reliability of my work. My goal
              is always to develop maintainable, high-performance solutions.
              <br />
              <br />
              <br />
              📊 Project Management and Collaboration:
              <br />
              Beyond technical skills, I bring solid experience in project
              management and team collaboration. Proficient in version control
              systems like Git and BitBucket, I also streamline workflows using
              tools like Asana, Trello, and ClickUp. My strong communication
              skills enable me to thrive in distributed teams, fostering
              alignment and driving agile delivery processes.
              <br />
              <br />
              <br />
              🌐 Cloud and DevOps Skills:
              <br />
              In addition to frontend expertise, I have a growing interest in
              cloud technologies, particularly AWS. I am familiar with deploying
              and maintaining applications on cloud platforms, ensuring robust
              performance and availability. This complements my ability to
              deliver end-to-end solutions tailored to business needs.
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
                  real-time KPI tracking and improved data-driven
                  decision-making.
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
              </a>{' '}
              a call with me.
            </p>
          )}
          <div className="language-selector-container">
            <button
              className={`language-selector-button ${
                language === 'EN' ? 'selected' : ''
              }`}
              onClick={() => handleLanguageChange('EN')}
            >
              EN
            </button>
            <button
              className={`language-selector-button ${
                language === 'PT' ? 'selected' : ''
              }`}
              onClick={() => handleLanguageChange('PT')}
            >
              PT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
