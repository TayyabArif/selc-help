import React, { useState, useRef } from 'react';
import Modal from 'react-modal';
import Image from 'next/image';

Modal.setAppElement('#__next'); // Set the app root element

const VideoModal = ({ isOpen, onClose, video, setIsNotLikeVideo, setIsLoginClick }) => {
  const [showFeedbackPopup, setShowFeedbackPopup] = useState(false);
  const [likedVideo, setLikedVideo] = useState(null);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setShowFeedbackPopup(true);
  };

  const handleFeedback = (liked) => {
    setLikedVideo(liked);
    setIsNotLikeVideo(liked);
    setIsLoginClick("contact")
    onClose();
    setShowFeedbackPopup(false);
    const cardsSection = document.getElementById('cardsSection');
    if (cardsSection) {
      cardsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <>
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Video Modal"
    className="modal md:w-[30%] w-[80%]"
    overlayClassName="overlay"
  >
    <button className="close-button" onClick={onClose}>
      <Image src="/close.svg" alt="Close" width={24} height={24} />
    </button>
    <div className="aspect-w-16 aspect-h-9 relative"> {/* Added relative class */}
      <video
        controls
        autoPlay
        className='h-[500px] w-[500px]'
        onEnded={handleVideoEnd}
        ref={videoRef}
      >
        <source src={video} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      {showFeedbackPopup && (
        <div className="absolute inset-0 flex items-center justify-center backdrop-blur-md">
          <div className="bg-white px-4 py-8 rounded w-[90%] border border-gray-300 shadow-lg box">
            <p className="mb-2 text-center text-xl">Is this Video helpful?  </p>
            <div className='flex justify-center space-x-4'>
              <button
                className="px-4 py-2 rounded-lg bg-green-500 text-white transition duration-300 hover:shadow-md hover:scale-105"
                onClick={() => handleFeedback(false)}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 rounded-lg bg-red-500 text-white transition duration-300 hover:shadow-md hover:scale-105"
                onClick={() => handleFeedback(true)}
              >
                No
              </button>
            </div>
          </div>
        </div>

      )}
    </div>
  </Modal>
</>


  )
};

export default VideoModal;
