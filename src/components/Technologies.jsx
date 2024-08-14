import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const TechnologiesWrapper = styled.section`
  padding: 60px 20px;
  background-color: #0F1624;
  text-align: center;
  animation: ${fadeIn} 1s ease forwards;
`;

const Title = styled.h2`
  font-size: 2.5em;
  color: #ffffff;
  margin-bottom: 40px;
`;

const TechGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TechItem = styled.div`
background-color: #0F1624;
border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgb(255, 255, 255);
  transition: transform 0.3s, box-shadow 0.3s;
  width: 120px;
  text-align: center;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.index * 0.1}s;

  &:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 4px 16px rgba(69, 212, 255, 0.7);
  }
`;

const TechIcon = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
`;

const TechName = styled.p`
  font-size: 1em;
  color: #ffffff;
`;

const technologies = [
  { name: 'HTML', icon: 'https://img.icons8.com/color/48/000000/html-5.png' },
  { name: 'CSS', icon: 'https://img.icons8.com/color/48/000000/css3.png' },
  { name: 'JavaScript', icon: 'https://img.icons8.com/color/48/000000/javascript.png' },
  { name: 'TypeScript', icon: 'https://img.icons8.com/color/48/000000/typescript.png' },
  { name: 'Node.js', icon: 'https://img.icons8.com/color/48/000000/nodejs.png' },
  { name: 'React', icon: 'https://img.icons8.com/color/48/000000/react-native.png' },
  { name: 'MongoDB', icon: 'https://img.icons8.com/color/48/000000/mongodb.png' },
  { name: 'Docker', icon: 'https://img.icons8.com/color/48/000000/docker.png' },
  { name: 'SQL', icon: 'https://img.icons8.com/color/48/000000/sql.png' },
  { name: 'Bootstrap', icon: 'https://img.icons8.com/color/48/000000/bootstrap.png' },
  { name: 'Figma', icon: 'https://img.icons8.com/color/48/000000/figma.png' },

];

const Technologies = () => (
  <TechnologiesWrapper id="technologies">
    <Title>Tecnologias</Title>
    <TechGrid>
      {technologies.map((tech, index) => (
        <TechItem key={index} index={index}>
          <TechIcon src={tech.icon} alt={tech.name} />
          <TechName>{tech.name}</TechName>
        </TechItem>
      ))}
    </TechGrid>
  </TechnologiesWrapper>
);

export default Technologies;
