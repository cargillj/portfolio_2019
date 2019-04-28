import React from 'react';
import Project from './components/project/';
import Header from './components/header/';

import { projects } from './assets/projects.json';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      {projects.map((project) => {
        const { name, subtitle } = project;
        return <Project name={name} subtitle={subtitle} />
      })}
      
    </div>
  );
}

export default App;
