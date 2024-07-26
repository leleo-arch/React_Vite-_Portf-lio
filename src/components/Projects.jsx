import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 2rem 0;
`;

const ProjectTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const ProjectCard = styled.div`
  background: #f4f4f4;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  width: 300px;
`;

const ProjectName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
`;

const Projects = () => {
  const projectData = [
    {
      name: 'Projeto 1',
      description: 'Descrição do projeto 1.'
    },
    {
      name: 'Projeto 2',
      description: 'Descrição do projeto 2.'
    },
    {
      name: 'Projeto 3',
      description: 'Descrição do projeto 3.'
    }
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectTitle>Meus Projetos</ProjectTitle>
      <ProjectList>
        {projectData.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectName>{project.name}</ProjectName>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectCard>
        ))}
      </ProjectList>
    </ProjectsSection>
  );
};

export default Projects;
