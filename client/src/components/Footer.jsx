import React from 'react'
import { NavLink } from 'react-router-dom'

import '../css/footer.css'

import logo from '../assets/logos/LDMnagamentlogo.white.svg'


export default function Footer() {
  return (
    <div className='container'>
      <div className="footerbody">
        <div className='footertop'>
          <div className='footertopleft'>
            <div className='footertoplefticon'><i class="ri-inbox-fill"></i></div>
            <h4 className='headingtwo'>Join Our Newsletter to Keep Up To Date With Us!</h4>
          </div>
          <div className='footertopright'>
            <input type="text" placeholder='Enter your E-mail' className='form-control' />
            <div className="getstartedbtn"><h5>Subscribe</h5> </div>
          </div>
        </div>
        <div className="line"></div>
        <div className='footermain'>
          <div className='footermainabout'>
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div>
              <p>LDMS serves as a trusted partner and advisor for a growing list of our esteemed clients in India. The
                Company has earned the confidence of reputed clients all over Madhya Pradesh Utter Pradesh,
                Rajasthan, Chhattisgarh Odisha and growing fast to other regions of India.</p>
            </div>
            <div className='socialmedia'>
              <a href=""> <i class="ri-facebook-circle-line"></i></a>
              <a href=""> <i class="ri-linkedin-line"></i></a>
              <a href=""> <i class="ri-twitter-line"></i></a>
              <a href=""> <i class="ri-instagram-line"></i></a>
            </div>
          </div>
          <div className='footermainabout'>
            <h4 className='headingthree'>Company</h4>
            <div>
              <ul>
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? 'navlinks active-link' : 'navlinks'}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? 'navlinks active-link' : 'navlinks'}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) => isActive ? 'navlinks active-link' : 'navlinks'}
                  >
                    Service
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/pages"
                    className={({ isActive }) => isActive ? 'navlinks active-link' : 'navlinks'}
                  >
                    Pages
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us" className={({ isActive }) => isActive ? 'navlinks active-link' : 'navlinks'}
                  >
                    Contact-us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className='footermainabout'>
            <h4 className='headingthree'>Services</h4>
            <div>
              <ul>
                <li>xyz...</li>
                <li>xyz...</li>
                <li>xyz...</li>
                <li>xyz...</li>
                <li>xyz...</li>
              </ul>
            </div>
          </div>
          <div className='footermainabout'>
            <h4 className='headingthree'>Location</h4>
            <div>
              <iframe
                src="https://www.google.com/maps?q=Katara+Hills,+Bhopal,+India&output=embed"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy">
              </iframe>
              <p><strong>Address:</strong> B-63, Ground Floor, AB Smart City, Katara Hills, Bhopal-462043 (INDIA)</p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className='footerbottom'>
          <div className='copyright'><p>Copyrigt © 2025 Automech </p> | <p>Design by Leadsandbrand</p></div>
          <div className='termscondition'>
            <a href="">Terms</a> |
            <a href="">Conditions</a>
          </div>
        </div>
      </div>
    </div>
  )
}
