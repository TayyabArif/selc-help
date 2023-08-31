// // VideoModal.js
// import React from 'react';
// import Image from 'next/image';

// const VideoModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50">
//       <div className="bg-white rounded-lg p-4 shadow-lg">
//         <button className="absolute top-2 right-2" onClick={onClose}>
//           <Image src="/close.svg" alt="Close" width={24} height={24} />
//         </button>
//         <div className="aspect-w-16 aspect-h-9">
//           <iframe
//             src="/steps/testVideo.mp4"
//             title="Video"
//             allowFullScreen
//             frameBorder="0"
//             autoPlay
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoModal;

// VideoModal.js
import React from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

Modal.setAppElement('#__next'); // Set the app root element

const VideoModal = ({ isOpen, onClose, video }) => {
  return (
    // <Modal
    //   isOpen={isOpen}
    //   onRequestClose={onClose}
    //   contentLabel="Video Modal"
    //   className="modal"
    //   overlayClassName="overlay"
    // >
    //   <button className="close-button" onClick={onClose}>
    //     <Image src="/close.svg" alt="Close" width={24} height={24} />
    //   </button>
    //   <div className="aspect-w-16 aspect-h-9">
    //     <iframe
    //       src="/steps/testVideo.mp4"
    //       title="Video"
    //       allowFullScreen
    //       frameBorder="0"
    //       autoPlay
    //     />
    //   </div>
    // </Modal>
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Video Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <button className="close-button" onClick={onClose}>
        <Image src="/close.svg" alt="Close" width={24} height={24} />
      </button>
      <div className="aspect-w-16 aspect-h-9">
        <video controls autoPlay className='h-[500px] w-[500px]'>
          <source src={video} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
    </Modal>
  );
};

export default VideoModal;
