import styled from "styled-components";
import Imag from "../assets/timeline.png";



const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0f1624;
  gap: 30px;
`;

const IntroSection2 = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-top: -30px;
  background-color: #0f1624;
  gap: 20px;
`;

const IntroSection3 = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  background-color: #0f1624;
  margin-bottom: -25px;
  font-size: 10px;
  gap: 180px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-right: 820px;
  color: white;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: white;
`;

const Description2 = styled.p`
  font-size: 0.9rem;
  color: white;
  
`;

const Description3 = styled.p`
  font-size: 0.9rem;
  color: white;
`;

const Description4 = styled.p`
  font-size: 0.9rem;
  color: white;
`;

const Temporal = styled.img`
  width: 80%;
`;

const Intro = () => {
  return (
    <IntroSection id="about">
      <Title>Sobre mim </Title>
      <IntroSection3 >
        <Description3>2017</Description3>
        <Description3>2019</Description3>
        <Description3>2023</Description3>
        <Description3>2024</Description3>
      </IntroSection3>
      <Temporal src={Imag} />

      <IntroSection2 id="intro">
        <Description>
          Assistente de criação CPTM - Companhia Paulista de Trens
          Metropolitanos São Paulo, Brasil · Presencial - Atuava como assistente
          de criação, auxiliando na produção de materiais gráficos e digitais. -
          Desenvolvia materiais gráficos utilizando ferramentas de design.
          Colaborava com a equipe de marketing para criar campanhas visuais.
          Auxiliava na criação de conteúdo para mídias sociais e outras
          plataformas digitais. - Apoiar a equipe de marketing na criação de
          campanhas eficazes. Melhorar a comunicação visual da empresa. Adquirir
          experiência prática em design e criação de conteúdo.{" "}
        </Description>
        <Description2>
          Produção Multimídia - Virtual Reality GRUPO PAO DE AÇUCAR · Tempo
          integral - Trabalhava na produção de conteúdo multimídia e realidade
          virtual para a empresa GPA. - Desenvolvia projetos de realidade
          virtual utilizando tecnologias multimídia. Colaborava com equipes
          multidisciplinares para criar experiências imersivas. Utilizava
          ferramentas de edição e desenvolvimento multimídia. - Criação de
          experiências inovadoras e imersivas para os usuários. Aumentar o
          engajamento e a satisfação dos clientes com conteúdo de alta
          qualidade. Contribuir para a inovação tecnológica na empresa.{" "}
        </Description2>
        <Description3>
          Produção Multimídia - Virtual Reality Cics Tecnologia · Tempo integral
          - Trabalhava na produção de conteúdo multimídia e realidade virtual
          para a empresa CICS. - Desenvolvia projetos de realidade virtual
          utilizando tecnologias multimídia. Colaborava com equipes
          multidisciplinares para criar experiências imersivas. Utilizava
          ferramentas de edição e desenvolvimento multimídia. - Criação de
          experiências inovadoras e imersivas para os usuários. Aumentar o
          engajamento e a satisfação dos clientes com conteúdo de alta
          qualidade. Contribuir para a inovação tecnológica na empresa.{" "}
        </Description3>
        <Description4>
          Desenvolvedor web - Front-end e Back-end Freelancer São
          Paulo, Brasil · Híbrida · Desenvolvimento de aplicações web como
          freelancer, focando em tecnologias modernas e projetos de código
          aberto. - Aumentar a eficiência e a qualidade das aplicações web.
          Melhorar a experiência do usuário com interfaces modernas e
          responsivas. Contribuir para a comunidade de código aberto e
          compartilhar conhecimento. code : Html, CSS, JavaScript, TypeScript,
          Node.js, React, Git, Docker{" "}
        </Description4>
      </IntroSection2>
    </IntroSection>
  );
};

export default Intro;
