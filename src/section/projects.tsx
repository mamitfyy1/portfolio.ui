import '@miktatmert/style/projects.css';
import ProjectCard, {ProjectCardProps} from "@miktatmert/component/ProjectCard";

const projects: ProjectCardProps[] = [
    {
        projectName: "O3Layer.com",
        projectDescription: "",
        projectImage: "bg-o3layer",
        projectColor: "bg-black"
    },
    {
        projectName: "OctopusBridge.xyz",
        projectDescription: "",
        projectImage: "bg-octopusbridge",
        projectColor: "bg-[#28293d]"
    },
    {
        projectName: "DeutschExpress.net",
        projectDescription: "",
        projectImage: "bg-deutschexpress",
        projectColor: "bg-gradient-to-br from-black from-30% to-red-700"
    }
]

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
