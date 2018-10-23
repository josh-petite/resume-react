import React, { Component } from 'react';
import './education.css';

class ResumeEducation extends Component {

  renderSummaryItems = (items) => {
    let results = [];

    for (let i = 0; i < items.length; i++) {
      results.push(<li>{items[i]}</li>)
    }

    return results;
  };

  render() {
    const education = this.props.edu;
    const mappedEducation = education.map((e) =>
      <div className="block">
        <div className="time">
          {e.startYear} - {e.endYear ? e.endYear : 'Present'}
        </div>
        <div className="details">
          <div className="degree">{e.degree}</div>
          <ul className="items">
            {this.renderSummaryItems(e.summaryItems)}
          </ul>
        </div>
      </div>
    );

    return (
      <div className="education">
        <h2 className="title">Education</h2>
        {mappedEducation}
      </div>
    );
  }
}

export default ResumeEducation;