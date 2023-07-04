import React from 'react';

const UnityWebGLComponent = () => {
  return (
    <div>
      <iframe
        title="Unity WebGL"
        src={`http://localhost:3000/synetic-ss/unity-build/index.html`}
        
        frameBorder="0"
        position= 'absolute' top= '100px' left= '0' width= '100%' height='89vh'
      ></iframe>
    </div>  
  );
};

export default UnityWebGLComponent;