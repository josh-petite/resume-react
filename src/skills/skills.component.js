import React, {Component} from 'react';
import './skills.css';

class ResumeSkills extends Component {

  createSkillRating = (skill) => {
    let rating = [];

    for (let i = 0; i < skill.rating; i++) {
      rating.push(<circle key={i} cx={`${(i * 20) + 10}%`} cy='50%' r='5' fill='black' stroke='black'/>);
    }

    for (let i = skill.rating; i < 5; i++) {
      rating.push(<circle key={i} cx={`${(i * 20) + 10}%`} cy='50%' r='5' fill='grey' stroke='black'/>);
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

  renderSets = (categories) => {
    let sets = [];

    for (let i = 0; i < categories.length; i++) {
      sets.push(this.renderSkillSet(categories[i].name, categories[i].set));
    }

    return sets;
  };

  renderSkillSet = (name, collection) => {
    return <div key={name + collection.length}>
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
        {this.renderSets(this.props.data.categories)}
      </div>
    );
  }
}

export default ResumeSkills;