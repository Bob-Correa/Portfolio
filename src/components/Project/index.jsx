export default function Project(props) {
  const { project, setCurrentPage, setSelectedProjectId } = props;

  const handleClick = () => {
    setCurrentPage("detailProject");
    setSelectedProjectId(project.id);
  };
  return (
    <article>
      <img src={project.image} alt={project.name} className="project-image" />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <button onClick={handleClick} type="button">
        Détail du projet {project.id}
      </button>
    </article>
  );
}
