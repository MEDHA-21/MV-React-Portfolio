import projectsData from "../../assets/data.json";
import "./projects.css";
import gitImg from "../../icons/github.png";
import linkImg from "../../icons/linkImg.png"

const ProjectCard = ({ name, description, github, link, projectLandingPage }) => {

    return (
        <div className="projects-card">
            <img src={projectLandingPage} alt="Project Landing Page" className='projectLandingPageImg' />
            <h3 className='projectName'>{name}</h3>
            <p>{description}</p>

            <div className="buttons">
                <a href={github} target="_blank" rel="noopener noreferrer" className='gitBtn'>
                    <img
                        src={gitImg}
                        alt="github icon"
                        className="git-icon"
                    />
                </a>
                <a href={link} target="_blank" rel="noopener noreferrer" className='demoBtn'>
                    <span className="demoText">Demo</span>
                    <img src={linkImg} alt="Link icon" className="link-icon" />
                </a>
            </div>
        </div>
    );
};

function Projects() {
    return (
        <section id='projects'>
            <div>
                <p className="section__text__p1">Explore My</p>
                <h1 className="title">Projects</h1>
            </div>
            <div className="experience-section">
                {projectsData.Projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        name={project.Name}
                        description={project.description}
                        github={project.Github}
                        link={project.Link}
                        projectLandingPage={project.projectLandingPage}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
