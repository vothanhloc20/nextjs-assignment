import Head from 'next/head';
import Header from '@/components/Layout/Header';
import ContactContent from '@/components/Contact/ContactContent';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Clean Blog - Contact</title>
      </Head>
      <Header
        backgroundImage='contact-bg.jpg'
        title='Contact Me'
        subTitle='Have questions? I have answers (maybe).'
      />
      <ContactContent />
    </>
  );
}
