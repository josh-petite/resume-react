import React, { Component } from 'react';
import './additional-activities.css';

class ResumeAdditionalActivities extends Component {

  renderSummaryItems = (items) => {
    let results = [];

    for (let i = 0; i < items.length; i++) {
      results.push(<li key={i}>{items[i]}</li>)
    }

    return results;
  };

  render() {
    return (
      <div className="activities">
        <h2 className="title">Additional Activities</h2>
        <ul className="items">
          {this.renderSummaryItems(this.props.data)}
        </ul>
      </div>
    );
  }
}

export default ResumeAdditionalActivities;