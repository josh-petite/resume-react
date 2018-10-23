import React, {Component} from 'react';
import './App.css';

import ResumeHeader from './header/header.component';
import ResumeExperience from "./experience/experience.component";
import ResumeSummary from "./summary/summary.component";
import ResumeSkills from "./skills/skills.component";
import ResumePersonalInfo from "./personal-info/personal-info.component";
import ResumeEducation from "./education/education.component";
import ResumeAdditionalActivities from "./additional-activies/additional-activities.component";
import ReactDOMServer from "react-dom/server";
import * as jsPDF from 'jspdf'
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      fetching: false,
      error: null
    };
  }

  componentDidUpdate() {
    const doc = new jsPDF();
    doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
    doc.save(`${this.state.name} - Resume.pdf`);
  }

  componentWillMount() {

    this.setState({fetching: true});

    this.dataRequest = axios.get(`source.json`)
      .then(res => {
        this.setState({data: res.data, fetching: false});
      }).catch(res => {
        this.setState({error: res.data, fetching: false});
      });
  }

  componentWillUnmount() {
    this.dataRequest.abort();
  }

  render() {
    if (this.state.fetching) {
      return <div>Loading...</div>;
    }

    if (this.state.error) {
      return (
        <div className='error'>
          {this.state.error.message}
        </div>
      );
    }

    return (
      <div className="App">
        <ResumeHeader name={this.state.data.name} title={this.state.data.title}/>
        <div className="body">
          <div className="left">
            <ResumeSummary data={this.state.data.summary}/>
            <ResumeExperience data={this.state.data.experience}/>
            <ResumeEducation data={this.state.data.education}/>
            <ResumeAdditionalActivities data={this.state.data.additionalActivities}/>
          </div>
          <div className="right">
            <ResumePersonalInfo data={this.state.data.personalInfo}/>
            <ResumeSkills data={this.state.data.skills}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
