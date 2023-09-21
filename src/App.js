import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skill from './components/Skill';
import Work from './components/Work';
import Snowfall from 'react-snowfall'


function App() {
  return (
    <div className="App" style={{overflow:'hidden'}}>
{/* <Snowfall
  snowflakeCount={window.innerWidth < 768 ? 10 : 30}
  color='#66AECC'
  style={{
position: 'fixed',
    width: '100vw',
    height: '100vh',

  }}
/> */}

      <Navbar />
      <Home />
      <Skill />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
