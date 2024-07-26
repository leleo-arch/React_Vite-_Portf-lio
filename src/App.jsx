import NavBar from './NavBar';
import Intro from './Intro';
import Projects from './Projects';
import Contact from './Contact';
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