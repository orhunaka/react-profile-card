import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="orhun.jpg" alt="Orhun Aka" />;
}

function Intro() {
  return (
    <div>
      <h1>Orhun Aka</h1>
      <p>Front-end web developer who enjoys any kind of project!</p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😈" color="lime" />
      <Skill skill="HTML + CSS" emoji="😈" color="orangered" />
      <Skill skill="Git and GitHub" emoji="😈" color="yellow" />
      <Skill skill="JavaScript" emoji="😈" color="orange" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
