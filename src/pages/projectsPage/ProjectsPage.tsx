import "./projectsPage.scss";
import { projects, Project } from "./projects-data";

export default function projectsPage() {
  return (
    <div className="projects-block">
      <div className="container">
        <div className="label">
          <h3 className="label__name">Featured Projects</h3>
          <p className="label__descr">
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>

        {projects.map((project: Project, index: number) => (
          <div className="project-block" key={index}>
            <a
              className="project-block__container"
              href={project.link ? project.link : project.github}
            >
              <img src={project.src} alt={`project-${project.label}`} />
            </a>
            <div className="project-block__descr">
              <p className="project-block__descr--label">{project.label}</p>
              <p className="project-block__descr--descr">{project.descr}</p>
              {project.note && (
                <p className="note">
                  <span className="note__label">Note: </span>
                  {project.note}
                </p>
              )}
              <div className="buttons">
                <button className="github-button" type="button">
                  <a href={project.github}>SEE ON GITHUB</a>
                  <img
                    src="/assets/projects/logo/icons8-github.svg"
                    alt="gitHub"
                  />
                </button>
                {project.deploy && (
                  <button className="github-button deploy" type="button">
                    <a href={project.link}>LIVE DEPLOY ↗</a>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
