export default function DetailProject(props) {
  const { project } = props;
  return (
    <>
      <h2>Page de détail d'un projet</h2>
      <article>
        <img src={project.image} alt={project.name} className="project-image" />
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        <p>
          {" "}
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              Visiter le site
            </a>
          )}
        </p>
      </article>
    </>
  );
}
