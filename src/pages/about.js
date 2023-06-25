import Head from 'next/head';
import Header from '@/components/Layout/Header';
import AboutContent from '@/components/About/AboutContent';

export default function About() {
  return (
    <>
      <Head>
        <title>Clean Blog - About</title>
      </Head>
      <Header
        backgroundImage='about-bg.jpg'
        title='About Me'
        subTitle='This is what I do.'
      />
      <AboutContent />
    </>
  );
}
