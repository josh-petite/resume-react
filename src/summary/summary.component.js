import React, { Component } from 'react';
import './summary.css';

class ResumeSummary extends Component {
  render() {
    return (
      <div className="summary">
        {this.props.data}
      </div>
    );
  }
}

export default ResumeSummary;