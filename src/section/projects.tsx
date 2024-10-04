import '@miktatmert/style/projects.css';
import ProjectCard, {ProjectCardProps} from "@miktatmert/component/ProjectCard";

const projects: ProjectCardProps[] = [
    {
        projectName: "O3Layer.com",
        projectDescription: "",
        projectImage: "/asset/backgroundImages/o3layer-bg.png"
    }
]

export default function Projects() {
    return (
        <div id='projects' className='projects-container'>
            <h1 className='projects-general-title'>Projects</h1>

            {
                projects.map(p => <ProjectCard key={p.projectName} {...p}/>)
            }
        </div>
    );
}
