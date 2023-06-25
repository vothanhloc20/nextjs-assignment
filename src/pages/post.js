import Head from 'next/head';
import Header from '@/components/Layout/Header';
import PostContent from '@/components/Post/PostContent';

export default function About() {
  return (
    <>
      <Head>
        <title>Clean Blog - Sample Post</title>
      </Head>
      <Header backgroundImage='post-bg.jpg' />
      <PostContent />
    </>
  );
}
