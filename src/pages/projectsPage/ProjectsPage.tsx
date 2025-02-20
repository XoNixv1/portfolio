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
            <div className="project-block__container">
              <img src={project.src} alt={`project-${project.label}`} />
            </div>
            <div className="project-block__descr">
              <p className="project-block__descr--label">{project.label}</p>
              <p className="project-block__descr--descr">{project.descr}</p>
              <div className="buttons">
                <button className="github-button" type="button">
                  SEE ON GITHUB
                  <img
                    src="/assets/projects/logo/icons8-github.svg"
                    alt="gitHub"
                  />
                </button>
                {project.deploy && (
                  <button className="github-button deploy" type="button">
                    LIVE DEPLOY ↗
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
