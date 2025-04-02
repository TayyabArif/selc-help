import Accordion from '@/components/ProgramsAccordion'
import Image from 'next/image'
import React from 'react'
import styles from '@/components/Accordion.module.css';


const CoopDocumentation = () => {
	return (
		<div className='p-10'>
			<h1 className={styles.accordion_heading}>Co-op/ Practicum Documentation</h1>
			<Accordion title="Co-op Documents for Business & Hospitality Foundations Co-op">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>Business &amp; Hospitality Foundations Co-op</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date, click here to download:
						<a href="/BHWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className="text-blue-500 ml-1" target="_self">
							co-op@selcedu.com
						</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for Business Foundations Co-op">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>Business Foundations Co-op</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/BFWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for Business Administration (Co-op)">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>Business Administration (Co-op)</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/BAWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for Hospitality Management Co-op">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>Hospitality Management Co-op</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/HMWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for Tourism & Hospitality Management Co-op">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>Tourism & Hospitality Management Co-op</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/THMWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for Digital Marketing Fundamentals (Co-op)">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>Digital Marketing Fundamentals (Co-op)</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/DMFWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for Digital Marketing Professional (Co-op)">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>Digital Marketing Professional (Co-op)</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/DMPWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for International Business Communications">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>International Business Communications</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/IBCWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for CARE: Live-in Caregiver (Child Care)">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>CARE: Live-in Caregiver (Child Care)</strong> to be submitted through your co-op portion.
					</span>
				</div>


				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/CAREWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for Supply Chain Management Professional Co-op">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>Supply Chain Management Professional Co-op</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/SCMSWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for Supply Chain Transportation & Logistics Co-op">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>Supply Chain Transportation & Logistics Co-op</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/SCTLWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for Community Support Worker Co-op">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>Community Support Worker Co-op</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/CSWWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for Post Graduate Nursing Diploma Co-op">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>Post Graduate Nursing Diploma Co-op</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/PGNDWEA.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			<Accordion title="Co-op Documents for Medical Office Assistant (Co-op)">
				<div style={{ textAlign: 'left' }}>
					<Image
						style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
						src="/selc-logo.png"
						alt="logo"
						width={400}
						height={128}
					/>
				</div>

				<div style={{ textAlign: 'left' }}>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Hello students,<br /><br />
						Please find the Co-op Documents for <strong>Medical Office Assistant (Co-op)</strong> to be submitted through your co-op portion.
					</span>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>1.</strong> <strong>Work Experience Agreement</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is the first document to be submitted by your co-op start date. Click here to download:
						<a href="/SELC_WE_agreement_MOA200.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>WEA Form</strong>
						</a>
						.&nbsp;<span style={{ textDecoration: 'underline' }}>
							<em>If you are unemployed by your co-op start date, you must email us as soon as possible: co-op@selcedu.com</em>
						</span>
					</p>
					<div className='w-full !mx-auto mt-2 flex justify-center'>
						<span style={{ textDecoration: 'underline', marginTop: "8px" }} className='font-bold'>
							<em>**Remember that your job should be related to your program of studies, we strongly recommend double checking with the Co-op Department if your job is acceptable for co-op or not**</em>
						</span>
					</div>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>2.</strong> <strong>Monthly Report</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be submitted on a monthly basis during your co-op period. Click here to download:
						<a href="/coopmonthly.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Co-op Monthly Report</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>3.</strong> <strong>Employer Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by your employer and submitted by your co-op end date.
						Click here to download:
						<a href="/employerevaluation.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Employer Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						<strong>4.</strong> <strong>Student Evaluation Form</strong>
					</span>
					<p style={{ fontSize: '12pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						This form is to be filled out and signed by you. Click here to download:
						<a href="/studentevaluationupdated.pdf" target="_blank" rel="noopener">
							<strong className='text-blue-500'>Student Evaluation Form</strong>
						</a>
					</p>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						If you have any questions, please contact us at
						<a href="mailto:co-op@selcedu.com" className='text-blue-500 ml-1'>co-op@selcedu.com</a>
					</span>
				</div>

				<div>
					<span style={{ fontSize: '14pt', fontFamily: 'arial, helvetica, sans-serif' }}>
						Thank you!<br />
						- Co-op department
					</span>
				</div>
			</Accordion>
			{/* <Accordion title="Practicum Documents for PBLMT- SCMS">
                <div style={{ textAlign: 'left' }}>
                <Image
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                    src="/selc-logo.png"
                    alt="logo"
                    width={400}
                    height={128}
                />
                </div>

                <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        Dear students,<br /><br />
                        Please find the Practicum Documents for <strong>PBLMT- SCMS</strong> here for your reference.
                    </span>
                </div>

                <div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
                    <span style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        <strong><span style={{ fontSize: '12pt' }}>1.</span> </strong>
                        This form is to be submitted by your practicum start date:
                    </span>
                    <p style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        - <strong>Work Placement Agreement,</strong> click here to download file:
                        <a
                            href="/PBLMTFORM.pdf"
                            target="_blank"
                            rel="noopener"
                            className='text-blue-500'
                        >
                            Work Placement Agreement form
                        </a>
                    </p>
                </div>

                <div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
                    <span style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        <strong><span style={{ fontSize: '12pt' }}>2.</span> </strong>
                        This form is to be submitted on a weekly basis during your practicum period:
                    </span>
                    <p style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        - <strong>Weekly Report Form,</strong> click here to download file:
                        <a
                            href="/PBLMTWEEKLY.pdf"
                            target="_blank"
                            rel="noopener"
                            className='text-blue-500'
                        >
                            Weekly Report Form
                        </a>
                    </p>
                </div>

                <div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
                    <span style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        <strong><span style={{ fontSize: '12pt' }}>3.</span> </strong>
                        This form is to be filled out and signed by your employer once you complete your Practicum.
                    </span>
                    <p style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        - <strong>Employer Evaluation Form,</strong> click here to download file:
                        <a
                            href="/PBLMTemployeer.pdf"
                            target="_blank"
                            rel="noopener"
                            className='text-blue-500'
                        >
                            Employer Evaluation Form
                        </a>
                    </p>
                </div>

                <div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
                    <span style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        <strong><span style={{ fontSize: '12pt' }}>4.</span> </strong>
                        This form is to be filled out by you once you complete your Practicum.
                    </span>
                    <p style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        - <strong>Student Evaluation Form,</strong> click here to download file:
                        <a
                            href="/PBLMTStudent.pdf"
                            target="_blank"
                            rel="noopener"
                            className='text-blue-500'
                        >
                            Student Evaluation Form
                        </a>
                    </p>
                </div>

                <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>Thank you</span>
                </div>
    </Accordion>
    <Accordion title="Practicum Documents for CWRG-SCTL">
                <div style={{ textAlign: 'left' }}>
                <Image
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
                    src="/selc-logo.png"
                    alt="logo"
                    width={400}
                    height={128}
                />
                </div>

                <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        Dear students,<br /><br />
                        Please find the Practicum Documents for <strong>CWRG-SCTL</strong> here for your reference.
                    </span>
                </div>

                <div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
                    <span style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        <strong><span style={{ fontSize: '12pt' }}>1.</span> </strong>
                        This form is to be submitted by your practicum start date:
                    </span>
                    <p style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        - <strong>Work Placement Agreement,</strong> click here to download file:
                        <a
                            href="/CWRGFORM.pdf"
                            target="_blank"
                            rel="noopener"
                            className='text-blue-500'
                        >
                            Work Placement Agreement form
                        </a>
                    </p>
                </div>

                <div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
                    <span style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        <strong><span style={{ fontSize: '12pt' }}>2.</span> </strong>
                        This form is to be submitted on a weekly basis during your practicum period:
                    </span>
                    <p style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        - <strong>Weekly Report Form,</strong> click here to download file:
                        <a
                            href="/PBLMTWEEKLY.pdf"
                            target="_blank"
                            rel="noopener"
                            className='text-blue-500'
                        >
                            Weekly Report Form
                        </a>
                    </p>
                </div>

                <div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
                    <span style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        <strong><span style={{ fontSize: '12pt' }}>3.</span> </strong>
                        This form is to be filled out and signed by your employer once you complete your Practicum.
                    </span>
                    <p style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        - <strong>Employer Evaluation Form,</strong> click here to download file:
                        <a
                            href="/PBLMTemployeer.pdf"
                            target="_blank"
                            rel="noopener"
                            className='text-blue-500'
                        >
                            Employer Evaluation Form
                        </a>
                    </p>
                </div>

                <div className='!mt-5 border border-1 border-gray-500 border-b-1 border-r-0 border-t-0 border-l-0 pb-2'>
                    <span style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        <strong><span style={{ fontSize: '12pt' }}>4.</span> </strong>
                        This form is to be filled out by you once you complete your Practicum.
                    </span>
                    <p style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>
                        - <strong>Student Evaluation Form,</strong> click here to download file:
                        <a
                           href="/PBLMTStudent.pdf"
                           target="_blank"
                           rel="noopener"
                           className='text-blue-500'
                        >
                            Student Evaluation Form
                        </a>
                    </p>
                </div>

                <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '10pt', fontFamily: 'arial, helvetica, sans-serif' }}>Thank you</span>
                </div>
    </Accordion> */}
		</div>
	)
}

export default CoopDocumentation
