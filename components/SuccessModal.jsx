import Image from 'next/image';
import React from 'react';

function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative flex flex-col justify-center items-center bg-white p-8 rounded-lg">
        <Image src="/cross.svg" alt="cross" width={24} height={24} className="absolute z-10 top-3 right-3 cursor-pointer" onClick={onClose}/>
        <p className="lg:text-2xl text-xl text-primary uppercase font-semibold mb-2 mt-5">Successfully Submitted</p>
        <p className='text-lg text-gray-600'>Please check your mail for further update</p>
      </div>
    </div>
  );
}

export default SuccessModal;
