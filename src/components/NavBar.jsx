import styled from 'styled-components';
import Git from "../assets/github.png"
import Linkedin from "../assets/Linkedin.png"


const HeaderWrapper = styled.header`
  text-align: center;
  padding: 50px 0;
  width: 100%;
background-color: #0F1624;
  color: white;
  
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
  color: white;

`;

const Image = styled.img`
margin-left: 30px;

`;

const Subtitle = styled.p`
  font-size: 1.2em;
`;

const Nav = styled.nav`
  margin-top: 20px;
  
`;

const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: white;
  font-size: 1em;
  transition: color 0.3s;

  &:hover {
    color: #61dafb;
  }
`;

const Header = () => (
  <HeaderWrapper id="Nav">
    <Title>Leonardo Soares</Title>
    <Subtitle>Desenvolvedor Web</Subtitle>
    
    <Nav>
      <NavLink href="#projects">Projetos</NavLink>
      <NavLink href="#about">Sobre</NavLink>
      <NavLink href="#contact">Contato</NavLink>
      <NavLink href="#technologies">Tecnologias</NavLink>
      <Image src={Git} alt="git"/>
      <Image src={Linkedin} alt="linkedin"/>


    </Nav>
  </HeaderWrapper>
);

export default Header;

