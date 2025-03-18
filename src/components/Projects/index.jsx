import Project from "../Project";

export default function Projects({
  projects,
  setCurrentPage,
  setSelectedProjectId,
}) {
  return (
    <section id="projects">
      <h1>Presentation</h1>
      <p> Bonjour,</p>
      <p>
        Bienvenue sur mon Portfolio (toujours en cours d'amélioration),je suis
        actuellement en formation au métier de Concepteur et Développeur
        d'Application auprès de l'école O'clock, dans le cadre d'une
        reconversion professionnelle. Après avoir passé 10 années dans le
        domaine bancaire, ma carrière prend un nouveau tournant.. Ce cursus
        exigeant me permet d'acquérir des compétences solides dans les langages
        et technologies tels que HTML, CSS, JavaScript, Node.js, PostgreSQL et
        React, que je vous présente avec les projets ci dessous.
      </p>

      <h1>Mes Projets</h1>
      <div className="projects">
        {projects.map((project) => {
          return (
            <Project
              key={project.id}
              project={project}
              setCurrentPage={setCurrentPage}
              setSelectedProjectId={setSelectedProjectId}
            />
          );
        })}
      </div>
    </section>
  );
}
