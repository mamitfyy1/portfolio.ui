'use client';

import cl from 'classnames';

export interface ProjectCardProps {
    projectName: string;
    projectDescription: string;
    projectImage: string;
    projectColor?: string;
}

export default function ProjectCard({projectName, projectDescription, projectImage, projectColor}: ProjectCardProps) {
    const handleClick = () => {
        window.open(`https://${projectName.toLowerCase()}`, '_blank');
    }

    return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
        <div className="project-card card cursor-pointer" onClick={handleClick}>
            <div className="card-inner">
                <div className={cl('card-front', projectColor)}>
                    <h1 className='projects-title'>{projectName}</h1>
                    <p className='projects-description'>{projectDescription}</p>
                </div>
                <div className={cl('card-back', projectImage)} />
            </div>
        </div>
    );
}
