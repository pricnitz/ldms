import React from 'react'
import SectionHeader from '../components/SectionHeader'

export default function About() {

  const SectionBody = () => {
    return (
    
      <div className='container'>
        <div className="sectionbody__container" data-aos="fade-up">
          <h2 className='headingtwo'>About Us</h2>
          <p className='sectionbody__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
          <p className='sectionbody__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
          <p className='sectionbody__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.</p>
        </div>
      </div>
    )
  }
  

  return (
    <div className='about'>
      <section>
        <SectionHeader />
      </section>
      <section className='aboutbody'>
        <SectionBody />
      </section>
    </div>
  )
}
