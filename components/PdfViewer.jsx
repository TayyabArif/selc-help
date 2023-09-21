import React, { useRef } from 'react';

function PDFViewer({ doc }) {
  const iframeRef = useRef(null);

  // Function to open the PDF in fullscreen
  const openFullscreen = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      }
    }
  };

  return (
    <div className='bg-gray-400'>
      <iframe
        src={doc}
        width="100%"
        height="500px"
        title="PDF Document"
        ref={iframeRef}
      ></iframe>
      <button onClick={openFullscreen} className="w-full text-white text-center bg-primary p-3 font-bold text-xl">Open Full Screen</button>
    </div>
  );
}

export default PDFViewer;
