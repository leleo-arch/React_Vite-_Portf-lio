import styled from 'styled-components';

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  background-color: #0F1624;
`;

const Button = styled.a`
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  width: 10%;
  border-radius: 25px;
  height: 50px;
  margin-left: 70px;
  color: white;
  font-size: 15px;
  margin-top: 10px;
  text-align: center;
  line-height: 50px;
  text-decoration: none;
  
  &:hover {
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 80%, #945DD6 120%);
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-left: 50px;
  color: white;
`;

const Description = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin-top: -10px;
  color: white;
  margin-left: 50px;
`;

const Intro = () => {
  return (
    <IntroSection id="intro">
      <Title>Bem-vindo ao Meu Portfólio</Title>
      <Description>
        Olá! Sou um desenvolvedor apaixonado por criar soluções web inovadoras e eficientes. Aqui você encontrará alguns dos meus projetos recentes e informações para entrar em contato comigo.
      </Description>
      <Button href="./assets/LeonardoSoares.pdf" download="Curriculo_Leonardo_Soares.pdf">
       Meu Currículo
      </Button>
    </IntroSection>
  );
};

export default Intro;
