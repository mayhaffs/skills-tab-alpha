import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Character from './Character';
// import Demo from './demo';
// import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";
// import LinearProgress from "@material-ui/core/LinearProgress";
import { skills } from "./skillsJSON.js";
// import CustomizedProgressBars from './demo.js';
import CustomizedProgressBar from './ProgressBar.js';
import CustomizedCategoryRow from './CategoryRow.js';
import MultilineTextFields from './MultilineTextField.js';
import styles from './index.module.scss'
import * as serviceWorker from './serviceWorker';


  // - SkillsTab
  //   - SkillsIndex
  //     - SkillCategory
  //       - SkillProgressBar
    // - SkillsDetails
    //   - SkillDescription
    //   - MultilineTextFields

class SkillCategory extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <div>
        <CustomizedCategoryRow category={category}/>
      </div>
    );
  }
}

class SkillProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e, skill) {
    this.props.onSelectSkill(e, skill)
  }

  render() {
    const skill = this.props.skill;

    return (
      <div onClick={(e) => this.handleClick(e, skill)}>
        <CustomizedProgressBar skill={skill} />
      </div>

    );
  }
}

class SkillsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleSelectSkill = this.handleSelectSkill.bind(this);
  }

  handleSelectSkill(e, skill) {
    this.props.passSelectSkill(e, skill)
  }

  render() {
    const rows = [];
    let lastCategory = null;

    SKILLS.forEach((skill) => {
      if (skill.category !== lastCategory) {
        rows.push(
          <SkillCategory
            category={skill.category}
            key={skill.category} />
        );
      }
      rows.push(
        <SkillProgressBar
          skill={skill}
          key={skill.name}
          onSelectSkill={this.handleSelectSkill}
        />
      );
      lastCategory = skill.category;
    });

    return (
        <div className={styles.skillIndex}>
          {rows}
        </div>
    );

  }
}

class SkillDetails extends React.Component {
  render() {
    const skill = this.props.skill;

    return (
      <div className={styles.skillDetails}>
        <br/>
        <CustomizedProgressBar skill={skill} />
        <br/>
        <SkillDescription skill={skill}/>
        <br />
      </div>
    );
  }
}

class SkillDescription extends React.Component {
  render() {
    // const skill = this.props.skill;
    const description = this.props.skill.details;
    console.log(description)

    return (
      <div>
        <MultilineTextFields value={description} />
      </div>
    );
  }
}

class SkillsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSkill: SKILLS[Math.floor(Math.random() * SKILLS.length)]
    };
    this.handleSelectSkill = this.handleSelectSkill.bind(this);
  }

  handleSelectSkill(e, skill) {
    this.setState({
      selectedSkill: skill
    });
    console.log(skill)
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('prevState: ', prevState);
    // console.log('this.state: ', this.state);
  }

  render() {
    const skill = this.state.selectedSkill;

    return (
      <div>
        <SkillsIndex
          className={styles.skillIndex}
          passSelectSkill={this.handleSelectSkill}
        />
        <SkillDetails
          skill={skill}
          className={styles.skillDetails}
          // selectedSkill={this.state.selectedSkill}
        />
      </div>
    );
  }
}

const SKILLS = skills.SKILLS;

// ReactDOM.render(<Character />, document.getElementById('root'));
ReactDOM.render(
  <SkillsTab />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
