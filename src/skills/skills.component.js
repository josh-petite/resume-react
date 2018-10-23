import React, {Component} from 'react';
import './skills.css';

class ResumeSkills extends Component {

  createSkillRating = (skill) => {
    let rating = [];

    for (let i = 0; i < skill.rating; i++) {
      rating.push(<circle cx={`${(i * 20) + 10}%`} cy='50%' r='6' fill='black' stroke='black'/>);
    }

    for (let i = skill.rating; i < 5; i++) {
      rating.push(<circle cx={`${(i * 20) + 10}%`} cy='50%' r='6' fill='grey' stroke='black'/>);
    }

    return rating;
  };

  deriveSkillDescription = (rating) => {
    switch (rating) {
      case 1:
        return 'Beginner';
      case 2:
        return 'Basic';
      case 3:
        return 'Intermediate';
      case 4:
        return 'Advanced';
      case 5:
        return 'Expert';
      default:
        return 'Unknown';
    }
  };

  render() {
    return (
      <div className="skills">
        <div className="title">Hard Skills</div>
        <div className="skill-list">
          {this.props.skills.hardSkills.map((hs) => {
            return <div className="skill">
              <span className="skill-name">{hs.name}</span>
              <div className="rating">
                <svg className="rating-value" viewBox='0 0' xmlns='http://www.w3.org/2000/svg'>
                  {this.createSkillRating(hs)}
                </svg>
                <div className="skill-description">{this.deriveSkillDescription(hs.rating)}</div>
              </div>
            </div>
          })}
        </div>
        <div className="title">Soft Skills</div>
        <div className="skill-list">
          {this.props.skills.softSkills.map((ss) => {
            return <div className="skill">
              <span className="skill-name">{ss.name}</span>
              <div className="rating">
                <svg className="rating-value" viewBox='0 0' xmlns='http://www.w3.org/2000/svg'>
                  {this.createSkillRating(ss)}
                </svg>
                <div className="skill-description">{this.deriveSkillDescription(ss.rating)}</div>
              </div>
            </div>
          })}
        </div>
        <div className="title">Languages</div>
        <div className="skill-list">
          {this.props.skills.languages.map((lang) => {
            return <div className="skill">
              <span className="skill-name">{lang.name}</span>
              <div className="rating">
                <svg className="rating-value" viewBox='0 0' xmlns='http://www.w3.org/2000/svg'>
                  {this.createSkillRating(lang)}
                </svg>
                <div className="skill-description">{this.deriveSkillDescription(lang.rating)}</div>
              </div>
            </div>
          })}
        </div>
        <div className="title">Frameworks</div>
        <div className="skill-list">
          {this.props.skills.frameworks.map((fr) => {
            return <div className="skill">
              <span className="skill-name">{fr.name}</span>
              <div className="rating">
                <svg className="rating-value" viewBox='0 0' xmlns='http://www.w3.org/2000/svg'>
                  {this.createSkillRating(fr)}
                </svg>
                <div className="skill-description">{this.deriveSkillDescription(fr.rating)}</div>
              </div>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default ResumeSkills;