export interface ProjectCardProps {
    projectName: string;
    projectDescription: string;
    projectImage: string;
}

export default function ProjectCard({projectName, projectDescription, projectImage}: ProjectCardProps) {
    return (
        <div className={`project-card bg-[${projectImage}]`}>
            <h1 className='projects-title'>{projectName}</h1>
        </div>
    );
}
