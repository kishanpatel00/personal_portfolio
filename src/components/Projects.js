import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Recipe Finder Website',
       description: 'A React-based e-commerce site.Enhancing user experience with real-time updates and intuitive navigation with React.js, Rest API',
       content:"•The platform enables users to explore, search different food recipes", 
   },
    { id: 2, title: 'Project 2',
      description: 'A Node.js backend for a social media app.' },
    { id: 3, title: 'Project 3', description: 'A responsive portfolio website using React and Bootstrap.' },
  ];

  return (
    <section id="projects" className="py-6">
      <div className="container">
        <h2 className="text-center mb-5">Projects</h2>
        <div className="row">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="col-md-4 mb-4"
            >
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <p className="card-text">{project.content}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;