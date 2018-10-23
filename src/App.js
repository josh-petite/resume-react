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

class App extends Component {
  componentDidUpdate() {
    const doc = new jsPDF();
    doc.fromHTML(ReactDOMServer.renderToStaticMarkup(this.render()));
    doc.save(`${this.data().name} - Resume.pdf`);
  }

  data() {
    return {
      name: 'Developer Name Here',
      title: 'Software Engineer',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras a imperdiet quam. Duis maximus nisl in lacus dignissim lacinia. Proin scelerisque semper enim, elementum pulvinar enim faucibus eu. Nam malesuada vestibulum sem. Etiam sollicitudin felis ac sodales euismod. Nunc ut lectus vitae arcu interdum viverra et in orci. Suspendisse pulvinar orci vitae turpis congue, cursus consectetur ipsum vehicula. Integer tellus sapien, aliquam eget lacus quis, hendrerit lobortis tellus. Nullam quis aliquet ex, convallis aliquam nisi. Quisque in elementum lorem, quis euismod enim. Pellentesque mollis eu sapien nec fermentum. Donec eget finibus tortor. Curabitur et elit nec tellus suscipit consequat.',
      pi: {
        phone: '650-555-1212',
        email: 'test@test.com',
        portfolio: 'https://personal-website.com',
        linkedIn: 'https://linkedin.com/something'
      },
      experience: [{
        company: "Mendacium",
        startYear: "2013",
        endYear: null,
        title: "Senior Software Engineer",
        summaryItems: [
          "Supervised stuff at the place with the things",
          "Worked real hard",
          "Improved performance for the services"
        ]
      },
        {
          company: "Netaker",
          startYear: "2010",
          endYear: "2013",
          title: "Software Engineer",
          summaryItems: [
            "Fixed bugs all over the place",
            "Went to meetings",
            "Developed developer skills developly"
          ]
        },
        {
          company: "Waste Management",
          startYear: "2008",
          endYear: "2010",
          title: "Junior Software Engineer",
          summaryItems: [
            "Made coffee for all my teammates",
            "Worked on important stuff for important people"
          ]
        }],
      skills: {
        hardSkills: [
          {
            name: 'Coding',
            rating: 5
          },
          {
            name: 'Debugging',
            rating: 4
          },
          {
            name: 'Database Knowledge',
            rating: 2
          }
        ],
        softSkills: [
          {
            name: 'Leadership',
            rating: 5
          },
          {
            name: 'Collaboration',
            rating: 4
          },
          {
            name: 'Critical Thinking',
            rating: 4
          },
        ],
        languages: [
          {
            name: 'Java',
            rating: 5
          },
          {
            name: 'Typescript',
            rating: 3
          },
          {
            name: 'Python',
            rating: 2
          },
          {
            name: 'Go',
            rating: 2
          },
        ],
        frameworks: [
          {
            name: 'Angular',
            rating: 4
          },
          {
            name: 'React',
            rating: 2
          },
        ]
      },
      education: [
        {
          degree: "University of Developer People, BS, Software Engineering",
          startYear: "2004",
          endYear: "2008",
          summaryItems: [
            "Pursued my passion for Java server programming",
            "VP of Java club of something or other, 2004-2006",
            "Delivered actionable webinar on best practices for security in cloud server deployments to some people somewhere"
          ]
        }
      ],
      additionalActivities: [
        "Volunteered at center for helping children who were taught Java programming at an early age",
        "Member of FDLFPIJ Society of Software Engineers for 11 years (Friends don't let friends program in Java)"
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <ResumeHeader name={this.data().name} title={this.data().title}/>
        <div className="body">
          <div className="left">
            <ResumeSummary text={this.data().summary}/>
            <ResumeExperience exp={this.data().experience}/>
            <ResumeEducation edu={this.data().education}/>
            <ResumeAdditionalActivities activities={this.data().additionalActivities}/>
          </div>
          <div className="right">
            <ResumePersonalInfo pi={this.data().pi}/>
            <ResumeSkills skills={this.data().skills}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
