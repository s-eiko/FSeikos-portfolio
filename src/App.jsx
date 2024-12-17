import './assets/css/App.css';

import Nav from './components/Nav';
import Home from './components/Home';
import SeeProjects from './components/SeeProjects';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Nav/>
      <Home/>
      <SeeProjects/>
      <Technologies/>
      <hr/>
      <Projects/>
      <hr/>
      <AboutMe/>
      <hr/>
      <Contact/>
    </>
  );
}

export default App;