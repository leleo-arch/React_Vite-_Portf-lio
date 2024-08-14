import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styled from 'styled-components';
import About from './components/About';
import Technologies from './components/Technologies';


const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #000000;
  width: 100%;
 
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #e0e0e0;
  }
`;

function App() {
  return (
    <Container>
      <NavBar />
      <Intro />
      <Projects/>
      <Technologies/>
      <About />
      <Contact />
    </Container>
  );
}

export default App;