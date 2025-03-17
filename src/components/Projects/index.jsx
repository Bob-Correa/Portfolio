import Project from "../Project";

export default function Projects({
  projects,
  setCurrentPage,
  setSelectedProjectId,
}) {
  return (
    <section id="projects">
    <h1>Presentation</h1>
    <p> Bonjour, bienvenue sur mon Portfolio ,je suis actuellement en  formation intensive au métier de concepteur et développeur d'application auprès de l'école O'clock,
    dans le cadre d'une reconversion professionnelle. Apès avoir passé 10 années dans le domaine bancaire je ressentais le besoin de changement.. 
    Ce cursus exigeant m'a permis d'acquérir des compétences solides dans les langages et technologies tels que HTML, CSS, JavaScript, Node.js, PostgreSQL 
    et React, que je vous présente sous forme de projets ci dessous.
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
