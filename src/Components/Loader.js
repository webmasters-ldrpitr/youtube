// LoaderComponent.js
import React, { useEffect } from 'react';
import './LoaderComponent.css'; // Make sure to create a corresponding CSS file


const LoaderComponent = () => {
  useEffect(() => {
    // Set a timeout to delay the fade out by 1.5 seconds (1500 milliseconds)
    const timeoutId = setTimeout(() => {
      const loaderWrapper = document.querySelector('.loader-wrapper');
      if (loaderWrapper) {
        loaderWrapper.style.display = 'none';
      }
    }, 1600);

    // Cleanup the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div className="content">
        <div id="root">

        </div>
      </div>

      <div className="loader-wrapper">
        <span className="loader"><span className="loader-inner"></span></span>
      </div>
    </div>
  );
};

export default LoaderComponent;
