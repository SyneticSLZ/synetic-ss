import React from 'react';

const UnityWebGLComponent = () => {
  return (
    <div>
      <iframe
        title="Unity WebGL"
        src={`http://localhost:3000/synetic-ss/unity-build/index.html`}
        width="800"
        height="600"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default UnityWebGLComponent;