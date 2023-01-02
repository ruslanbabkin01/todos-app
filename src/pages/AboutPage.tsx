import React from 'react';
import { Navigate } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  return (
    <>
      <h1>information</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id asperiores
        in exercitationem eligendi totam numquam impedit, earum molestias iusto
        quaerat assumenda voluptas placeat voluptates quibusdam, eius labore at
        esse explicabo!
      </p>
      <button className="btn" onClick={() => <Navigate to="/" replace />}>
        Return to todos
      </button>
    </>
  );
};
