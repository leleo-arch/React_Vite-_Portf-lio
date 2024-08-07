import styled from 'styled-components';

const IntroSection = styled.section`
  padding: 2rem 0;
  text-align: center;
  background-color: #0F1624;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: white;

`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  color: white;

`;

const Intro = () => {
  return (
    <IntroSection id="intro">
      <Title>Bem-vindo ao Meu Portfólio</Title>
      <Description>
        Olá! Sou um desenvolvedor full-stack apaixonado por criar soluções web inovadoras e eficientes. Aqui você encontrará alguns dos meus projetos recentes e informações para entrar em contato comigo.
      </Description>
    </IntroSection>
  );
};

export default Intro;
