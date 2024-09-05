import React from 'react'
import Accordion from '@/components/Accordion'
import Head from 'next/head'
import styles from '@/components/Accordion.module.css';


const CoopFaq = () => {
  return (
    <div className='p-10'>
            <Head>
                <title>Image Accordion</title>
            </Head>

            <h1 className={styles.accordion_heading}>Frequently Asked Questions</h1>

            <Accordion
                title="Working Hours"
                description="How many hours do I need to complete?"
                listItems={[
                    "You can have a full-time job in order to complete your program required hours (40 hours per week max).",
                    "You can have two part time jobs in order to complete your program required hours.",
                    "You cannot work more than 40 hours per week."
                ]}
                imageUrl="https://selcedu.com/wp-content/uploads/2023/11/Working-Hours.jpg"
                imageAlt="Working Hours"
            />

            <Accordion
                title="Documents Required for Submission"
                description="What documents do I need to submit?"
                listItems={[
                    "Work Experience Agreement Form – by the start date of your co-op",
                    "Monthly Report – at the end of each month during your co-op period length",
                    "Student Evaluation Form – at the end date of your co-op",
                    "Employer Evaluation Form - at the end date of your co-op",
                    "**Important: All coop documents submissions must be done through the Student Portal www.myselcedu.com"
                ]}
            />

            <Accordion
                title="Locating Co-op Documents"
                description="Where can I find the co-op document?"
                listItems={[
                    "All documents will be located on your Student Portal under the Co-op/Practicum Section (Subsection: Co-op/ Practicum Documentation)."
                ]}
                imageUrl="https://selcedu.com/wp-content/uploads/2023/11/co-op-1.png"
                imageAlt="Co-op Documents"
            />

            <Accordion
                title="Submitting Co-op Documents"
                description="How to submit my Co-op documents?"
                listItems={[
                    "Go to www.myselcedu.com and log into your student account.",
                    "Go to My Records Tab and then click on Required Tasks.",
                    "Click on the document field you want to upload."
                ]}
                imageUrl="https://selcedu.com/wp-content/uploads/2023/11/co-op-Doc-submit.png"
                imageAlt="Submitting Co-op Documents"
            />

            <Accordion
                title="After Document Submission"
                description="What am I supposed to do after submitting my Co-op documents?"
                listItems={[
                    "It’s your responsibility to always double check whether your documents have been approved or not.",
                    "If your documents are declined, you will find them on Pending Tasks tab with a little note/comment.",
                    "If your documents are approved, you will find them on Completed Tasks Tab."
                ]}
                imageUrl="https://selcedu.com/wp-content/uploads/2023/11/co-op-after-submission.png"
                imageAlt="After Document Submission"
            />

            <Accordion
                title="Submission Decline"
                description="What to do if my submission is declined?"
                listItems={[
                    "Read the information disclosed on the Note/Comment box on Required Tasks.",
                    "Revise and resubmit your documents as soon as possible to avoid any late submission fee."
                ]}
                imageUrl="https://selcedu.com/wp-content/uploads/2023/11/co-op-sun-dec.png"
                imageAlt="Submission Decline"
            />

            <Accordion
                title="Flexible Employment"
                description="Can I work in different places?"
                listItems={[
                    "You can only work in different places if you have 2 part-time jobs."
                ]}
            />

            <Accordion
                title="Co-op Workplace Change"
                description="Can I change my workplace during Co-op?"
                listItems={[
                    "Yes, you don’t need to finish your coop in the same company. You can change companies during co-op, however, you must:",
                    "Submit the Student and Employer Evaluation forms from the job you are leaving.",
                    "Submit your new Work Experience Agreement and get an approval; you must receive an approval in order to start that job."
                ]}
            />

            <Accordion
                title="Pre Co-op Orientation"
                description="Do I have to attend the pre-Coop Orientation?"
                listItems={[
                    "Yes, the Pre Co-op Orientation is mandatory."
                ]}
            />

            <Accordion
                title="Contact Information for Co-op"
                description="Who should I contact in the Co-op?"
                imageUrl="https://selcedu.com/wp-content/uploads/2023/11/co-op-image.jpg"
                imageAlt="Contact Information for Co-op"
            />
        </div>
  )
}

export default CoopFaq
