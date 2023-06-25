import { useRouter } from 'next/router';
import { POST_URL } from '@/constants/constants';

export default function Header({ backgroundImage, title, subTitle }) {
  const router = useRouter();

  return (
    <header
      className='intro-header'
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
            {router.pathname !== POST_URL ? (
              <div className='site-heading'>
                <h1>{title}</h1>
                <hr className='small' />
                <span className='subheading'>{subTitle}</span>
              </div>
            ) : (
              <div className='post-heading'>
                <h1>
                  Man must explore, and this is exploration at its greatest
                </h1>
                <h2 className='subheading'>
                  Problems look mighty small from 150 miles up
                </h2>
                <span className='meta'>
                  Posted by <a href='#'>Start Bootstrap</a> on August 24, 2014
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
