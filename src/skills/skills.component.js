import React, {Component} from 'react';
import './skills.css';

class ResumeSkills extends Component {

  createSkillRating = (skill) => {
    let rating = [];

    for (let i = 0; i < skill.rating; i++) {
      rating.push(<circle key={i} cx={`${(i * 20) + 10}%`} cy='50%' r='6' fill='black' stroke='black'/>);
    }

    for (let i = skill.rating; i < 5; i++) {
      rating.push(<circle key={i} cx={`${(i * 20) + 10}%`} cy='50%' r='6' fill='grey' stroke='black'/>);
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

  renderSkillSet = (name, collection) => {
    return <div>
      <div className="title">{name}</div>
      <div className="skill-list">
        {collection.map((item) => {
          return <div key={item.name + item.rating} className="skill">
            <span className="skill-name">{item.name}</span>
            <div className="rating">
              <svg className="rating-value" xmlns='http://www.w3.org/2000/svg'>
                {this.createSkillRating(item)}
              </svg>
              <div className="skill-description">
                {this.deriveSkillDescription(item.rating)}
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  };

  render() {
    return (
      <div className="skills">
        {this.renderSkillSet('Hard Skills', this.props.data.hardSkills)}
        {this.renderSkillSet('Soft Skills', this.props.data.softSkills)}
        {this.renderSkillSet('Languages', this.props.data.languages)}
        {this.renderSkillSet('Frameworks', this.props.data.frameworks)}
      </div>
    );
  }
}

export default ResumeSkills;