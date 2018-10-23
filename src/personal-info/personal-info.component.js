import React, {Component} from 'react';
import './personal-info.css';

class ResumePersonalInfo extends Component {
  render() {
    return (
      <div className="personal-info">
        <div className="title">Personal Info</div>
        <div className="item">
          <strong>Phone</strong>
        </div>
        <div className="item-content">
          <span className="phone">{this.props.pi.phone}</span>
        </div>
        <div className="item">
          <strong>E-mail</strong>
        </div>
        <div className="item-content">
          <a className="email" href={'mailto:' + this.props.pi.email}>{this.props.pi.email}</a>
        </div>
        <div className={this.props.pi.portfolio ? "item" : "hidden"}>
          <strong>Portfolio</strong>
        </div>
        <div className={this.props.pi.portfolio ? "item-content" : "hidden"}>
          <a className="portfolio" href={this.props.pi.portfolio}>
            {this.props.pi.portfolio}
          </a>
        </div>
        <div className="item">
          <strong>Linked-In</strong>
        </div>
        <div className="item-content">
          <a className="linked-in" href={this.props.pi.linkedIn}>
            {this.props.pi.linkedIn}
          </a>
        </div>
      </div>
    );
  }
}

export default ResumePersonalInfo;