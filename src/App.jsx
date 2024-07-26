import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, sans-serif;
  color: #333;
  padding: 0 1rem;
`;

function App() {
  return (
    <Container>
      <NavBar />
      <Intro />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;