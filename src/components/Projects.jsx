import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const GalleryWrapper = styled.section`
  padding: 60px 20px;
  background-color: #0F1624;
  
`;

const GalleryTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.2em;
  color: #ffffff;
  animation: ${fadeIn} 1s ease forwards;
`;

const Projects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Project = styled.div`
  background: #0F1624;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgb(255, 255, 255);
  transition: box-shadow 0.3s, transform 0.3s;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: ${(props) => props.index * 0.1}s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(69, 212, 255, 0.7);

  }
`;

const ProjectImage = styled(LazyLoadImage)`
  width: 90px;
  display: flex;
  justify-content: center;
  margin-left: 140px;
  height: auto;
  margin-top: 20px;
  border-bottom: 1px solid #ddd;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  font-size: 1.4em;
  color: #fff;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 1em;
  color: #fff;
  margin-bottom: 20px;
`;

const ProjectButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  font-size: 0.9em;
  color: #fff;
  background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.3s;

  &:hover {
    background: linear-gradient(270deg, #13ADC7 0%, #6978D1 66.67%, #945DD6 100%);
  }
`;

const Modal = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  gap:10px;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const projects = [
  {
    title: 'Meu Github',
    description: '',
    image: 'https://img.icons8.com/color/48/000000/github.png',
    link: 'https://github.com/leleo-arch'
  },

  {
    title: 'Aplicativo - Jiu-Jitsu - Mobile',
    description: 'Mobile',
    image: 'https://img.icons8.com/color/48/000000/react-native.png',
    link: 'https://innova-jiu.netlify.app'
  },
  {
    title: 'Site - Portfólio',
    description: 'Leonardo Soares ',
    image: 'https://img.icons8.com/color/48/000000/react-native.png',
    link: 'https://github.com/leleo-arch'
  },
  {
    title: 'Node.js',
    description: 'ORM ',
    image: 'https://img.icons8.com/color/48/000000/nodejs.png',
    link: 'https://github.com/leleo-arch/Node_ORM_Sequelize'
  },
  {
    title: 'Site - Clima Tempo',
    description: 'Site - Clima Tempo',
    image: 'https://img.icons8.com/color/48/000000/bootstrap.png',
    link: 'https://watherdnc.netlify.app'
  },
  {
    title: 'Lading Page - Arquitetura',
    description: 'Lading Page - Arquitetura',
    image: 'https://img.icons8.com/color/48/000000/css.png',
    link: 'https://arquitednc.netlify.app'
  },
  {
    title: 'Lading Page - Click-Mint',
    description: '',
    image: 'https://img.icons8.com/color/48/000000/html-5.png',
    link: 'https://clickmint.netlify.app/'
  },
  {
    title: 'Lading Page - Starbucks',
    description: 'Lading Page - Starbucks',
    image: 'https://img.icons8.com/color/48/000000/javascript.png',
    link: 'https://glittering-cascaron-8bda26.netlify.app'
  },
  {
    title: 'Lading Page - Starbucks',
    description: 'Lading Page - Starbucks',
    image: 'https://img.icons8.com/color/48/000000/html-5.png',
    link: 'https://clickmint.netlify.app'
  },
  {
    title: 'Site - Conversor Money',
    description: 'Site - Conversor Money',
    image: 'https://img.icons8.com/color/48/000000/javascript.png',
    link: 'https://moneyinnova.netlify.app'
  },
  {
    title: 'Site - Sorteio',
    description: 'Site - Sorteio',
    image: 'https://img.icons8.com/color/48/000000/javascript.png',
    link: 'https://randonsinnova.netlify.app'
  },
  {
    title: 'Lading Page - Jokenpo',
    description: 'Lading Page - Jokenpo',
    image: 'https://img.icons8.com/color/48/000000/javascript.png',
    link: 'https://jokenpoinnova.netlify.app'
  },
  {
    title: 'Site - Cardapio ',
    description: 'Site - Cardapio',
    image: 'https://img.icons8.com/color/48/000000/react-native.png',
    link: 'https://cardapioinnova.netlify.app'
  },
];

const ProjectGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <GalleryWrapper id="projects">
      <GalleryTitle>Projetos</GalleryTitle>
      <Projects>
        {projects.map((project, index) => (
          <Project key={index} index={index} onClick={() => openModal(project)}>
            <ProjectImage 
              src={project.image} 
              alt={project.title} 
              effect="blur"
            />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectButton href={project.link} target="_blank" rel="noopener noreferrer">
                Veja Mais
              </ProjectButton>
            </ProjectContent>
          </Project>
        ))}
      </Projects>

      {selectedProject && (
        <>
          <ModalOverlay isOpen={modalOpen} onClick={closeModal} />
          <Modal isOpen={modalOpen}>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <ProjectImage src={selectedProject.image} alt={selectedProject.title} effect="blur" />
            <ProjectButton href={selectedProject.link} target="_blank" rel="noopener noreferrer">
              Veja no GitHub
            </ProjectButton>
            <button onClick={closeModal}>Fechar</button>
          </Modal>
        </>
      )}
    </GalleryWrapper>
  );
};

export default ProjectGallery;
