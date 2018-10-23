import React, { Component } from 'react';
import './header.css';

class ResumeHeader extends Component {
  render() {
    return (
      <div className="header">
        <h2>{this.props.name}</h2>
        <span>{this.props.title}</span>
      </div>
    );
  }
}

export default ResumeHeader;