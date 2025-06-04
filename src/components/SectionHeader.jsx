import React from 'react'
import '../css/style.css'

export default function SectionHeader() {
    const sectionheaderimg = "url(https://img.freepik.com/free-photo/waiting-order_1098-15642.jpg?t=st=1745585994~exp=1745589594~hmac=738fc3b154e937f5e63037dfcf23eafdfdecb822ce8763c5f4e2fc683121fc10&w=996)"
    const sectionheadertitle = "About Us"
    const sectionheaderdesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
  
    return (
    <div className='sectionheader' style={{backgroundImage: ` ${sectionheaderimg} `}} >
        <div className="sectionheader__container" data-aos="fade-up" >
            <h2 className='headingone '>{sectionheadertitle}</h2>
        </div>
    </div>
  )
}
