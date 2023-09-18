import Layout from '@/components/Layout'
import SuccessModal from '@/components/SuccessModal';
import { useLanguage } from "@/contexts/LanguageContext";
import React, { useState } from 'react'

const contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        studentID: '',
        department: '',
        message: '',
      });

    const [submissionStatus, setSubmissionStatus] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const { selectedLanguage } = useLanguage();
    const translations = require(`../utlis/languages/${selectedLanguage}.json`);


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('formData is ', formData)
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccessModalOpen(true);

        // Optionally reset form data here
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmissionStatus('error');
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
  };

  const [isNextClick, setIsNextClick] = useState(false)
  const [isClose, setIsClose] = useState(true);
  return (
    <Layout>
      <section className="bg-white">
        <div className="bg-[url('/contact.png')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply h-[500px] flex">
            <div className="px-4 lg:pt-24 pt-8 pb-10 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6 flex flex-col items-center justify-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Contact Us</h2>
                <p className="mb-16 font-light text-white sm:text-xl">We look forward to seeing you at one of our State-of-the-art Vancouver Campuses</p>
            </div>
        </div>
        <div className="py-16 px-4 mx-auto -mt-[20%] 2xl:-mt-[12%] max-w-screen-xl sm:py-24 lg:px-6 ">
            <form onSubmit={handleSubmit}  className="flex flex-col gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-[#fcfafc] rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700">
                <div className='flex justify-between gap-4'>
                    <input type="text" id="full-name" name='fullName' value={formData.fullName} onChange={handleChange} className="block p-3 w-full text-sm text-gray-500 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-900 placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={translations.contact.name} required />
                    <input type="number" id="student-id" name='studentID' value={formData.studentID} onChange={handleChange} className="block p-3 w-full text-sm text-gray-500 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={translations.contact.studentID} required />
                </div>
                <div className='flex justify-between gap-4'>
                    <input type="email" id="email" name='email' value={formData.email} onChange={handleChange} className="shadow-sm bg-gray-300 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder={translations.contact.email} required />
                    <input type="number" id="phone-number" name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} className="block p-3 w-full text-sm text-gray-500 bg-gray-300 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 placeholder-gray-500 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required />
                </div>

                <select id="countries" name='department' onChange={handleChange} class="bg-gray-300 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Choose your Department to cintact</option>
                  <option value="US">Marketer</option>
                  <option value="CA">Student Services</option>
                  <option value="FR">Registrar</option>
                  <option value="DE">Co-op</option>
                  <option value="DE">IT</option>
                </select>
                <div className='w-full cursor-pointer'>
                <p className="w-full py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={() => setIsNextClick(!isNextClick)}>
                  {isNextClick ? "Prev" : "Next"
                  }
                  </p>
                </div>
                {isNextClick &&
                <>
                {isClose &&
                  <div class="bg-blue-100 border border-blue-100 text-gray-500 px-4 py-3 rounded relative" role="alert">
                    <h1 className='font-bold text-[20px]'>Note</h1>
                    <span class="block sm:inline">Please note that requests might take upto 24 hours to process. Thank you for your patience!</span>
                    <span class="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setIsClose(false)}>
                      <svg class="fill-current h-6 w-6 text-gray-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </span>
                  </div>
                }
                <div className="sm:col-span-2">
                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" name='message' value={formData.message} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                </>
              }
            </form>
            <SuccessModal isOpen={isSuccessModalOpen} onClose={handleCloseModal} />
        </div>
      </section>
    </Layout>
  )
}

export default contact
