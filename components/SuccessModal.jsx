import React from 'react';

function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="flex flex-col justify-center w-[40%] h-[60%] items-center bg-white p-6 rounded-lg">
        <p className="text-2xl text-green-500 uppercase font-semibold mb-2">Form Submitted Successfully</p>
        <p className='text-lg'>Your success message content goes here.</p>
        <button onClick={onClose} className="mt-4 text-blue-600 hover:underline focus:outline-none text-xl">
          Close
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
