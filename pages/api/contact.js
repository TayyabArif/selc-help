import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, phoneNumber, studentID, program, message } = req.body;
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'tayyablefty786@gmail.com',
          pass: 'ipyugxqrgfuzuaim',
        },
      });
      const mailOptions = {
        from: 'tayyablefty786@gmail.com',
        to: 'Itsupport@selcedu.com',
        subject: 'New Contact Form Submission',
        html: `
          <p>First Name: ${firstName}</p>
          <p>Last Name: ${lastName}</p>
          <p>Email: ${email}</p>
          <p>Phone Number: ${phoneNumber}</p>
          <p>Student ID: ${studentID}</p>
          <p>Program: ${program}</p>
          <p>Message: ${message}</p>
        `,
      };
      const info = await transporter.sendMail(mailOptions);

      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
