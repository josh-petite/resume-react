import React, { Component } from 'react';
import './additional-activities.css';

class ResumeAdditionalActivities extends Component {

  renderSummaryItems = (items) => {
    let results = [];

    for (let i = 0; i < items.length; i++) {
      results.push(<li>{items[i]}</li>)
    }

    return results;
  };

  render() {
    const activities = this.props.activities;

    return (
      <div className="activities">
        <h2 className="title">Additional Activities</h2>
        <ul className="items">
          {this.renderSummaryItems(activities)}
        </ul>
      </div>
    );
  }
}

export default ResumeAdditionalActivities;