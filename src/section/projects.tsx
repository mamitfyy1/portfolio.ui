import '@miktatmert/style/projects.css';
import ProjectCard, {ProjectCardProps} from "@miktatmert/component/ProjectCard";

const projects: ProjectCardProps[] = [
  {
    projectName: "VTOL Rocket System 3D Design",
    projectDescription: "",
    projectImage: "bg-aerospace", 
    projectColor: "bg-black"
  }
];


export default function Projects() {
    return (
        <div id='projects' className='projects-container'>
            <h1 className='projects-general-title'>Projects</h1>

            <div className='projects-cards'>
                {
                    projects.map(p => <ProjectCard key={p.projectName} {...p}/>)
                }
            </div>
        </div>
    );
}
