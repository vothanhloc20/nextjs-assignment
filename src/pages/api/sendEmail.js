import nodemailer from 'nodemailer';
import { SEND_EMAIL_FAILED, SEND_EMAIL_SUCCESS } from '@/constants/constants';

export default async (req, res) => {
  if (req.method === 'POST') {
    let firstName = req.name;

    if (firstName.indexOf(' ') >= 0) {
      firstName = req.name.split(' ').slice(0, -1).join(' ');
    }

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'your-name@gmail.com',
        pass: 'your-email-password',
      },
    });

    try {
      await transporter.sendMail({
        from: 'your-email@gmail.com',
        to: req.email,
        subject: `Website Contact Form: ${req.name}`,
        text: `You have received a new message from your website contact form.\n\n
        Here are the details:\n\n
        Name: ${req.name}\n\n
        Email: ${req.email}\n\n
        Phone: ${req.phoneNumber}\n\n
        Message:\n${req.message}`,
        headers: {
          From: 'your-email@gmail.com',
          'Reply-To': req.email,
        },
      });

      res.status(200).json({ message: SEND_EMAIL_SUCCESS });
    } catch (error) {
      res.status(500).json({
        message: SEND_EMAIL_FAILED.replace('@firstName', firstName),
      });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
