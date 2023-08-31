import Layout from '@/components/Layout'
import SuccessModal from '@/components/SuccessModal';
import React, { useState } from 'react'

const contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        studentID: '',
        program: '',
        message: '',
      });

    const [submissionStatus, setSubmissionStatus] = useState('');
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);


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
  return (
    <Layout>
      <section className="bg-white dark:bg-gray-900">
        <div className="bg-[url('/contact.png')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply h-[500px]">
            <div className="px-4 lg:pt-24 pt-8 pb-72 lg:pb-80 mx-auto max-w-screen-sm text-center lg:px-6 ">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">Contact Us</h2>
                <p className="mb-16 font-light text-white sm:text-xl">We look forward to seeing you at one of our State-of-the-art Vancouver Campuses</p>
            </div>
        </div>
        <div className="py-16 px-4 mx-auto -mt-[20%] max-w-screen-xl sm:py-24 lg:px-6 ">
            <form onSubmit={handleSubmit}  className="grid grid-cols-1 gap-8 p-6 mx-auto mb-16 max-w-screen-md bg-white rounded-lg border border-gray-200 shadow-sm lg:mb-28 dark:bg-gray-800 dark:border-gray-700 sm:grid-cols-2">
                <div>
                    <label for="first-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                    <input type="text" id="first-name" name='firstName' value={formData.firstName} onChange={handleChange} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Bonnie" required />
                </div>
                <div>
                    <label for="last-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                    <input type="text" id="last-name" name='lastName' value={formData.lastName} onChange={handleChange} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Green" required />
                </div>
                <div>
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" id="email" name='email' value={formData.email} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                </div>
                <div>
                    <label for="phone-number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Number</label>
                    <input type="number" id="phone-number" name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+12 345 6789" required />
                </div>
                <div>
                    <label for="student-id" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Student ID</label>
                    <input type="number" id="student-id" name='studentID' value={formData.studentID} onChange={handleChange} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="2301122" required />
                </div>
                <div>
                    <label for="program" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Program</label>
                    <input type="text" id="program" name='program' value={formData.program} onChange={handleChange} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Business Foundations 200" required />
                </div>
                <div className="sm:col-span-2">
                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                    <textarea id="message" rows="6" name='message' value={formData.message} onChange={handleChange} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    <p className="mt-4 text-sm text-gray-500">By submitting this form you agree to our <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">terms and conditions</a> and our <a href="#" className="text-primary-600 hover:underline dark:text-primary-500">privacy policy</a> which explains how we may collect, use and disclose your personal information including to third parties.</p>
                </div>
                <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
            </form>
            <SuccessModal isOpen={isSuccessModalOpen} onClose={handleCloseModal} />
        </div>
      </section>
    </Layout>
  )
}

export default contact
