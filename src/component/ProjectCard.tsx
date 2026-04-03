'use client';

import cl from 'classnames';
import { useRouter } from 'next/navigation';

export interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
  projectImage: string;
  projectColor?: string;
}

export default function ProjectCard({
  projectName,
  projectDescription,
  projectImage,
  projectColor,
}: ProjectCardProps) {
  const router = useRouter();

  const handleClick = () => {
  router.push('/projects/vtol_rocket');
  };

  return (
    <div className="project-card card cursor-pointer" onClick={handleClick}>
      <div className="card-inner">
        <div className={cl('card-front', projectColor, 'project-card-bg')}>
          <div className="project-card-overlay">
            <h1 className="projects-title">{projectName}</h1>
            <p className="projects-description">{projectDescription}</p>
          </div>
        </div>

        <div className={cl('card-back', projectImage)}>
          <p className="card-back-text">Click for Project Details</p>
        </div>
      </div>
    </div>
  );
}