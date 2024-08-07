import styled from 'styled-components';

const HeaderWrapper = styled.header`
  text-align: center;
  padding: 50px 0;
background-color: #0F1624;
  color: white;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin: 0;
  color: white;

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
  <HeaderWrapper>
    <Title>Leonardo Soares</Title>
    <Subtitle>Desenvolvedor Web</Subtitle>
    <Nav>
      <NavLink href="#projects">Projetos</NavLink>
      <NavLink href="#about">Sobre</NavLink>
      <NavLink href="#contact">Contato</NavLink>
      <NavLink href="#technologies">Tecnologias</NavLink>

    </Nav>
  </HeaderWrapper>
);

export default Header;

