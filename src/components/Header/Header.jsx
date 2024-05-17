import { Link } from 'react-router-dom';
import './Header.scss';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);

  const handleToggleMenu = () => {
    setMobileToggle(!mobileToggle);
  }


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header className={`st-site-header st-sticky-header st-style1 ${isScrolled ? 'st-sticky-active' : ''}`}>
      <div className="st-main-header">
        <div className="container">
          <div className="st-main-header-in">
            <div className="st-main-header-left">
              <Link className="st-site-branding" to='/' id="hero"><img src="/img/logo.png" alt="Gideon" /></Link>
            </div>
            <div className="st-main-header-right">
              <div className="st-nav">
                <ul className="st-nav-list st-onepage-nav" style={{ display: `${mobileToggle ? 'block' : 'none'}` }}>
                  <li><ScrollLink to="home" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Home</ScrollLink></li>
                  <li><ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>About</ScrollLink></li>
                  <li><ScrollLink to="resume" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Resume</ScrollLink></li>
                  <li><ScrollLink to="portfolio" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Portfolio</ScrollLink></li>
                  <li><ScrollLink to="blog" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Blog</ScrollLink></li>
                  <li><ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} onClick={() => setMobileToggle(false)}>Contact</ScrollLink></li>
                </ul>
                <div className={`st-munu-toggle ${mobileToggle ? "st-toggle-active" : ""} `} onClick={handleToggleMenu}>
                  <span></span>
                </div>
                <div className="sp-phone">
                <div className="st-icon-wrap">
                  <Icon icon="fa-regular:envelope" />
                </div>
                  <a href="mailto:gassafuah@gmail.com" className="sp-phone-no">gassafuah@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header;
