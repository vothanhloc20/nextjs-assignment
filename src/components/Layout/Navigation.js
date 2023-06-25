import { useEffect, useState } from 'react';

export default function Navigation() {
  const MQL = 1170;
  const [previousTop, setPreviousTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentTop = window.scrollY;
      const navBarCustom = document.getElementsByClassName('navbar-custom');

      if (navBarCustom) {
        const headerHeight = navBarCustom[0].offsetHeight;
        const navBarCustomClassList = navBarCustom[0].classList;

        if (currentTop < previousTop) {
          if (currentTop > 0 && navBarCustomClassList.contains('is-fixed')) {
            navBarCustomClassList.add('is-visible');
          } else {
            navBarCustomClassList.remove('is-visible');
            navBarCustomClassList.remove('is-fixed');
          }
        } else if (currentTop > previousTop) {
          navBarCustomClassList.remove('is-visible');

          if (
            currentTop > headerHeight &&
            !navBarCustomClassList.contains('is-fixed')
          )
            navBarCustomClassList.add('is-fixed');
        }

        setPreviousTop(currentTop);
      }
    };

    if (window.innerWidth > MQL) {
      window.addEventListener('scroll', handleScroll);
    }
  }, [previousTop]);

  return (
    <nav className='navbar navbar-default navbar-custom navbar-fixed-top'>
      <div className='container-fluid'>
        <div className='navbar-header page-scroll'>
          <button
            type='button'
            className='navbar-toggle'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            <span className='sr-only'>Toggle navigation</span>
            Menu <i className='fa fa-bars'></i>
          </button>
          <a className='navbar-brand' href='/'>
            Start Bootstrap
          </a>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/post'>Sample Post</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
