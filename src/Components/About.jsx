import React from 'react';
import './About.css'; // Create a CSS file for styling

function About() {
  const skills = [
    { name: '.NET', icon: 'https://img.icons8.com/color/48/000000/net-framework.png' },
    { name: 'Angular', icon: 'https://img.icons8.com/color/48/000000/angularjs.png' },
    { name: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
    { name: 'Azure', icon: 'https://img.icons8.com/color/48/000000/azure-1.png' },
    { name: 'SQL Server', icon: 'https://img.icons8.com/color/48/000000/microsoft-sql-server.png' },
    { name: 'TypeScript', icon: 'https://img.icons8.com/color/48/000000/typescript.png' },
    { name: 'Microservices', icon: 'https://img.icons8.com/color/48/000000/api-settings.png' },
    { name: 'DevExpress', icon: 'https://img.icons8.com/color/48/000000/console.png' },
  ];

  const languages = [
    { name: 'English', level: 'Fluent',icon:"/img/us.png" },
    { name: 'French', level: 'Fluent',icon:"/img/frensh.png" },
    { name: 'Tamazight', level: 'Native',icon:"/img/amazigh.png" },
    { name: 'Arabic', level: 'Native',icon:"/img/arabic.jpeg" },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>
            👋 Hi, I'm Mohamed! A passionate .NET and Angular developer with 4+ years of experience in building high-performance applications. I specialize in ASP.NET Core, Angular, Microservices, Azure, SQL Server, and CQRS, with strong expertise in desktop applications using .NET Framework.
          </p>
          <p>
            💡 I have a keen eye for design, precision, and problem-solving, allowing me to create scalable, efficient, and user-friendly solutions. I focus on delivering reliable and innovative solutions tailored to business needs.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3>Skills & Expertise</h3>
            <div className="skills-slider">
              <div className="skills-track">
                {skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span>{skill.name}</span>
                  </div>
                ))}
                {/* Duplicate skills for infinite scroll effect */}
                {skills.map((skill, index) => (
                  <div key={`${index}-copy`} className="skill-item">
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>

         


            <h3>Languages</h3>
              <div className="skills-slider">
              <div className="skills-track">
                {languages.map((language, index) => (
                  <div key={index} className="skill-item">
                    <img src={language.icon} alt={language.name} className="skill-icon" />
                    <span> {language.level}</span>
                  </div>
                ))}
                {/* Duplicate skills for infinite scroll effect */}
                {languages.map((language, index) => (
                  <div key={`${index}-copy`} className="skill-item">
                    <img src={language.icon} alt={language.name} className="skill-icon" />
                    <span> {language.leve}</span>
                  </div>
                ))}
              </div>
            </div>
            </div>
          </div>

         
     
         

          <div className="col-lg-6">
            <img
              src="https://cdn.dribbble.com/users/730703/screenshots/6581243/avento.gif" // High-quality animated GIF
              className="profile-img"
              alt="Programming Animation"
            />
          </div>
        </div>


   
      </div>
    </section>
  );
}

export default About;