import logo from "./logo.svg";
import "./App.css";

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

function Intro() {}

function SkillList() {}

function Skill() {}

export default App;
