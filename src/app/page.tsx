import { useState } from 'react';
import { FC } from 'react';
import React from 'react';

interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({ title }) => {
  return <h1>{title ? title : 'Default title'}</h1>;
};

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'Description for project one.',
    link: 'https://example.com/project-one',
  },
  {
    title: 'Project Two',
    description: 'Description for project two.',
    link: 'https://example.com/project-two',
  },
  // Add more projects as needed
];

const Portfolio: FC = () => {
  return (
    <div>
      <h1>My Portfolio</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
