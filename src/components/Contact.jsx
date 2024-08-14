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
  margin-left: 20px;
  

  &:hover {
    background-color: #555;
  }
`;

const Button2 = styled.a`
  display: inline-block;


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
       <ContactButton href="https://wa.me/5511965531504?text=Ol%C3%A1!">Entrar em Contato</ContactButton>
       <Button2  href="https://github.com/leleo-arch">
      <Image src={Git}alt="git"/>
      </Button2>
      <Button2  href="https://www.linkedin.com/in/leonardo-soares-1842b32b0/" >
      <Image src={Linkedin} alt="linkedin"/>
      </Button2>
      <Button2>
      <Image src={Figma} href="https://github.com/leleo-arch" alt="linkedin"/>
      </Button2>
     
    </ContactSection>
  );
};

export default Contact;
