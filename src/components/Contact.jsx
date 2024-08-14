import styled from 'styled-components';
import Git from "../assets/github.png"
import Linkedin from "../assets/Linkedin.png"
import Figma from "../assets/figma.png"


const ContactSection = styled.section`
  padding: 2rem 0;
  text-align: center;
  background-color: #0F1624;
`;

const ContactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: white;

`;
const Image = styled.img`
margin-left: 30px;

`;

const ContactDescription = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  color: white;
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  font-size: 1rem;

  &:hover {
    background-color: #555;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <ContactTitle>Entre em Contato</ContactTitle>
      <ContactDescription>
        Gostaria de saber mais sobre meus projetos ou discutir uma oportunidade? Sinta-se à vontade para me enviar uma mensagem!
      </ContactDescription>
      <ContactButton href="mailto:leo_deplay@outlook.com.com">Enviar E-mail</ContactButton>
      <Image src={Git} alt="git"/>
      <Image src={Linkedin} alt="linkedin"/>
      <Image src={Figma} alt="linkedin"/>

    </ContactSection>
  );
};

export default Contact;
