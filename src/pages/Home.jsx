import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

import '../css/home.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// imgs icons starts form here 
import buisnesswomen from '../assets/banners/buisnesswoman1.png'


// service card svg
import Housekeeping from '../assets/svg/housekeeping.svg'
import PestControl from '../assets/svg/bug.svg'
import Pantry from '../assets/svg/hotelservice.svg'
import staff from '../assets/svg/staff.svg'
import canteenbottle from '../assets/svg/canteen.svg'
import landscapservices from '../assets/svg/drop.svg'

// unique advantages svg
import Selfperforming from '../assets/svg/selfperforming.png'
import Singleintegrated from '../assets/svg/singleintegrated.png'
import Continualimprovement from '../assets/svg/continualimprovement.png'
import Performanceenhancements from '../assets/svg/performanceenhancements.png'




const Hero = () => {
    return (
        <div className='container'>
            <div className="herobody" data-aos="fade-up" data-aos-duration="1000">
                <div className="herobodyleft">
                    <div className='herobodyleftcontainer' >
                        <h1>LDMS <span>- Facility Management</span></h1>
                        <span className="line"></span>
                        <h2 >Innovative solutions for a sustainable business environment </h2>

                    </div>
                    <div className='herobtns'>
                        <div className='getstartedbtn'><h5>book an appointment</h5></div>
                        <div className='getstartedbtntwo'><h5>Get a free quote</h5></div>
                    </div>
                </div>
                <div className="herobodyright">
                    <div className='herobodyrightimg'>
                        <img src="https://img.freepik.com/free-photo/servant-with-black-plate-mixed-ingredient-salad_114579-3693.jpg?ga=GA1.1.175441891.1739873448&semt=ais_hybrid" alt="image" />
                    </div>
                    <div className="herobodyrightcard">
                        <div className="herobodyrightcardbody">
                            <div className="herobodyrightcardbodyimg">
                                <img src="https://automech.tokotema.xyz/wp-content/uploads/2025/02/Untitled-design.jpg" alt="user" />
                            </div>
                            <div className="herobodyrightcardbodytext">
                                <p>LDMS serves as a trusted partner and advisor for a growing list of our esteemed clients in India. The
                                    Company has earned the confidence of reputed clients all over Madhya Pradesh Utter Pradesh,
                                    Rajasthan, Chhattisgarh Odisha and growing fast to other regions of India. </p>
                            </div>
                            <div className="herobodyrightcardbodyfooter">
                                <i className="ri-star-fill"></i>
                                <p>Name</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const Homeoverview = () => {
    return (
        <div className='container'>
            <div className='homeoverviewbanner'>
                <div className='homeoverviewbannerbody' >
                    <div className="homeoverviewbannerbodyleft">
                        <img src={buisnesswomen} alt="buisnesswomen" />
                    </div>
                    <div className="homeoverviewbannerbodyright" data-aos="fade-down" data-aos-duration="1000">
                        <div className="homeoverviewbannerbodyrightbody">
                            <div className='homeoverviewbannerbodyrightbodyleft'>
                                <h2 className='headingone'>Who We Are</h2>
                                <p className='textone'>LD Management Services (LDMS) is a recognized name in facility and resource management. With more than a decade of expertise, we have developed a strong presence across Madhya Pradesh, Uttar Pradesh, Rajasthan, Chhattisgarh, and Odisha.</p>
                                <p className='textone'>Our mission is to create value through quality service, operational excellence, and total customer satisfaction. Our team understands the unique needs of diverse sectors, and we tailor our solutions accordingly—ensuring flexibility, compliance, and service innovation at every step.</p>
                            </div>
                            <div className='homeoverviewbannerbodyrightbodyright'>
                                <div className="homeoverviewbannerbodyrightbodyrightexperince">
                                    <h5>200+</h5>
                                    <div><h6 className="headingfour">Skilled professionals</h6> <p className='texttwo'>Quality service and customer-centric solutions.</p> </div>

                                </div>


                            </div>
                        </div>
                        <div className="line"></div>
                        <div className='homeoverviewbannerbodyrightbottom'>
                            <Link to="/about" className="link">
                            <button className="clicktoknowmorebtn">
                                Click to know more <i class="ri-arrow-right-line"></i>
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <div className='container'>
            <div className="servicesbody">
                <div className="sectionheading" data-aos="fade-down" data-aos-duration="1000">
                    <span className='textthree'>Services</span>
                    <h2 className="headingone">Comprehensive Facility Management Solutions</h2>
                    <p className='textone'>We offer comprehensive facility management services tailored to the unique needs of each client. Our focus is on providing a sustainable, cost-effective, and efficient environment for your business.</p>

                </div>
                <div className='servicemainsection' data-aos="fade-down" data-aos-duration="1000">
                    <div className="servicemainsectioncards">
                        <div className="servicemainsectioncard">
                            <div className='servicemainsectioncardimg'>
                                <img src={Housekeeping} alt="Housekeeping" />
                            </div>
                            <div>
                                <h4 className='headingfour'> Housekeeping & Industrial Housekeeping</h4>
                                <p className="texttwo">Quality cleaning & maintenance.</p>
                            </div>
                        </div>
                        <div className="servicemainsectioncard">
                            <div className='servicemainsectioncardimg'>
                                <img src={PestControl} alt="Housekeeping" />
                            </div>
                            <div>
                                <h4 className='headingfour'>  Pest Control</h4>
                                <p className="texttwo">Efficient pest management services.</p>
                            </div>
                        </div>
                        <div className="servicemainsectioncard">
                            <div className='servicemainsectioncardimg'>
                                <img src={Pantry} alt="Housekeeping" />
                            </div>
                            <div>
                                <h4 className='headingfour'> Pantry Management</h4>
                                <p className="texttwo">Seamless food & beverage services.</p>
                            </div>
                        </div>

                        <div className="servicemainsectioncard">
                            <div className='servicemainsectioncardimg'>
                                <img src={staff} alt="Housekeeping" />
                            </div>
                            <div>
                                <h4 className='headingfour'> Office Staff Solutions</h4>
                                <p className="texttwo">Staffing and HR solutions.</p>
                            </div>
                        </div>
                        <div className="servicemainsectioncard">
                            <div className='servicemainsectioncardimg'>
                                <img src={canteenbottle} alt="Housekeeping" />
                            </div>
                            <div>
                                <h4 className='headingfour'> Canteen & Guest House Management</h4>
                                <p className="texttwo">Corporate hospitality services.</p>
                            </div>
                        </div>
                        <div className="servicemainsectioncard">
                            <div className='servicemainsectioncardimg'>
                                <img src={landscapservices} alt="Housekeeping" />
                            </div>
                            <div>
                                <h4 className='headingfour'> Landscaping Services</h4>
                                <p className="texttwo">Enhancing business spaces.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

const UniqueAdvantages = () => {
    return (
        <div className='container'>
            <div className="uniqueAdvantagesmain"  data-aos="fade-up" data-aos-duration="1000"> 
                <div className="sectionheading">
                    <span className='textthree'>Unique Advantages</span>
                    <h2 className="headingone">Why Choose LDMS?</h2>
                    <p className='textone'>LDMS is committed to delivering exceptional service and value to our clients. Our unique advantages set us apart in the facility management industry.</p>
                </div>
                <div className="uniqueadvantagesbody">
                    <div className="uniqueadvantagescard">
                        <div className="uniqueadvantagescardimage">
                            <img src={Selfperforming} alt={'Selfperforming'} />
                        </div>
                        <div className="uniqueadvantagescardbody">
                            <h4 className='headingfour'>Self-performing service model</h4>
                            <p className='texttwo'>Over a decade of experience in facility management.</p>
                        </div>
                    </div>
                    <div className="uniqueadvantagescard">
                        <div className="uniqueadvantagescardimage">
                            <img src={Singleintegrated} alt={'Singleintegrated'} />
                        </div>
                        <div className="uniqueadvantagescardbody">
                            <h4 className='headingfour'>Single & integrated service under one roof</h4>
                            <p className='texttwo'>Customized services to meet your specific needs.</p>
                        </div>
                    </div>
                    <div className="uniqueadvantagescard">
                        <div className="uniqueadvantagescardimage">
                            <img src={Continualimprovement} alt={'Continualimprovement'} />
                        </div>
                        <div className="uniqueadvantagescardbody">
                            <h4 className='headingfour'>Industry best practices and continual improvement</h4>
                            <p className='texttwo'>Commitment to eco-friendly practices.</p>
                        </div>
                    </div>
                    <div className="uniqueadvantagescard">
                        <div className="uniqueadvantagescardimage">
                            <img src={Performanceenhancements} alt={'Performanceenhancements'} />
                        </div>
                        <div className="uniqueadvantagescardbody">
                            <h4 className='headingfour'>Performance-linked service enhancements</h4>
                            <p className='texttwo'>Dedicated to exceeding client expectations.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

const Quality = () => {
    return (
        <div className='container'>
            <div className="qualitymain"  data-aos="fade-down" data-aos-duration="1000">
                <div className="sectionheading">
                    <div>
                        <span className='textthree'>Quality You Can Trust</span>
                        <h2 className="headingone">Our Commitment to Excellence</h2>
                        <p className='textone'>At LD Management Services (LDMS), quality and trust are the cornerstones of our business. We understand that a clean and well-maintained workplace is not just about appearance; it’s about creating a safe, healthy, and productive environment for your team. Our commitment to delivering the highest quality service while building long-term trust with our clients sets us apart in the facility management industry.</p>

                    </div>
                    <div className='qualitymainrightbox'>
                        <h5>100+</h5>
                        <div><h6 className="headingfour">Skilled professionals</h6> <p className='texttwo'>Quality service and customer-centric solutions.</p> </div>

                    </div>
                </div>
                <div className="qualitybody">
                    <div className="qualitycard">
                        <div className='qualitycardicon'>
                            <i class="ri-moon-clear-line"></i>
                        </div>
                        <h4 className='headingfour'>Quality Assurance</h4>
                        <p className='texttwo'>We are committed to providing high-quality services that meet or exceed client expectations.</p>
                    </div>
                    <div className="qualitycard">
                        <div className='qualitycardicon'>
                            <i class="ri-moon-clear-line"></i>
                        </div>
                        <h4 className='headingfour'>Quality Assurance</h4>
                        <p className='texttwo'>We are committed to providing high-quality services that meet or exceed client expectations.</p>
                    </div>
                    <div className="qualitycard">
                        <div className='qualitycardicon'>
                            <i class="ri-moon-clear-line"></i>
                        </div>
                        <h4 className='headingfour'>Quality Assurance</h4>
                        <p className='texttwo'>We are committed to providing high-quality services that meet or exceed client expectations.</p>
                    </div>
             
                  
                </div>
            </div>
        </div>
    )
}

const ContactSection = () => {
    return (
        <div className='container'>
            <div className="contactsection"  data-aos="fade-up" data-aos-duration="1000">
                <div className="sectionheading">
                    <span className='textthree'>Contact Us</span>
                    <h2 className="headingone">Get in Touch</h2>
                    <p className='textone'>We’d love to hear from you! Whether you have a question about our services, need assistance, or just want to chat, feel free to reach out.</p>
                    <div className='contactsectionmain'>
                        
                        <iframe   src="https://www.google.com/maps?q=Katara+Hills,+Bhopal,+India&output=embed" width="100%" height="250" style={{ border: 0 }} frameborder="0"></iframe>
                    </div>
                </div>
                <Contact />
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className='home'>
            <section id='herosection'>
                <div className="herobanner">
                    <Hero />
                </div>
            </section>
            <section id='homeoverview'>
                <Homeoverview />
            </section>
            <section id="services">
                <Services />
            </section>
            <section id="uniqueAdvantages">
                <UniqueAdvantages />
            </section>
            <section id="quality">
                <Quality />
            </section>

            <section id="contactform">
                <ContactSection />
            </section>
        </div>
    )
}

