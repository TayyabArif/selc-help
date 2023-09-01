import Image from 'next/image';
import React from 'react';

function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="relative flex flex-col justify-center w-[40%] h-[50%] items-center bg-white p-6 rounded-lg">
      <Image src="/cross.svg" alt="cross" width={24} height={24} className="absolute z-10 top-3 right-3 cursor-pointer" onClick={onClose}/>
        <p className="text-2xl text-green-500 uppercase font-semibold mb-2">Successfully Submitted</p>
        <p className='text-lg'>Please check your mail for further update</p>
      </div>
    </div>
  );
}

export default SuccessModal;
