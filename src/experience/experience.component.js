import React, { Component } from 'react';
import './experience.css';

class ResumeExperience extends Component {

  renderSummaryItems = (items) => {
    let results = [];

    for (let i = 0; i < items.length; i++) {
      results.push(<li key={i}>{items[i]}</li>)
    }

    return results;
  };

  render() {
    const experience = this.props.exp;
    const mappedExp = experience.map((e) =>
      <div key={e.title + e.company} className="block">
        <div className="time">
          {e.startYear} - {e.endYear ? e.endYear : 'Present'}
        </div>
        <div className="details">
          <div className="job-title">{e.title}</div>
          <div className="company">{e.company}</div>
          <ul className="items">
            {this.renderSummaryItems(e.summaryItems)}
          </ul>
        </div>
      </div>
    );

    return (
      <div className="experience">
        <h2 className="title">Experience</h2>
        {mappedExp}
      </div>
    );
  }
}

export default ResumeExperience;