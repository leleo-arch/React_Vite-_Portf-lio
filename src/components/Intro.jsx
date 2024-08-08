import styled from 'styled-components';

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
justify-content:start;
  background-color: #0F1624;
`;

const Button = styled.button`
background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
width: 10%;
border-radius: 25px;
height: 50px;
margin-left: 70px;
color: white;
font-size: 15px;
margin-top: 10px;
`;


const Title = styled.h2`
  font-size: 2.5rem;
margin-left: 46px;
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
        Olá! Sou um desenvolvedor full-stack apaixonado por criar soluções web inovadoras e eficientes. Aqui você encontrará alguns dos meus projetos recentes e informações para entrar em contato comigo.
      </Description>
      <Button>Saiba mais</Button>
    </IntroSection>
  );
};

export default Intro;
