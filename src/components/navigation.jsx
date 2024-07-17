import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleClick = (e, navigate) => {
  e.preventDefault();
  scrollToTop();
  navigate("/");
};

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [location]);

  return null;
};

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <>
      <ScrollToTop />
      <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
        <div className='container'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <Link
              to='/'
              className='navbar-brand page-scroll'
              style={{ color: "blue" }}
              onClick={(e) => handleClick(e, navigate)}
            >
              ResourceDekho
            </Link>
          </div>

          <div
            className='collapse navbar-collapse'
            id='bs-example-navbar-collapse-1'
          >
            <ul className='nav navbar-nav navbar-right'>
              <li>
                <a href='#features' className='page-scroll'>
                  Features
                </a>
              </li>
              <li>
                <a href='#about' className='page-scroll'>
                  About
                </a>
              </li>
              <li>
                <a href='#services' className='page-scroll'>
                  Services
                </a>
              </li>
              <li>
                <a href='#pricing' className='page-scroll'>
                  Plan and Package
                </a>
              </li>
              <li>
                <a href='#testimonials' className='page-scroll'>
                  Testimonials
                </a>
              </li>
              {/* <li>
							<a
								href="#team"
								className="page-scroll"
							>
								Team
							</a>
						</li> */}
              <li>
                <a href='#faq' className='page-scroll'>
                  Faq
                </a>
              </li>
              <li>
                <a href='#contact' className='page-scroll'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
