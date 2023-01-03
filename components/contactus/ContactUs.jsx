import React from 'react';
import '../contactus/ContactUs.css';
import { Formik } from 'formik';
import { Form } from 'formik';
import { Field } from 'formik';

const ContactUs = () => {
  return (
    <div className='contact__us'>

      <div className='contact__grid'>

        <div className='contact__info'>
          <h3>Feel free to get in touch by...</h3>
          <p>Phone = +852 56624147</p>
          <p>Email = info@eliteskillsarenaeastasia.com</p>
        </div>

        <div className='contact__address'>
          <h3>Or come and see us at...</h3>
          <p>11th Floor, Prince Industrial Building, 5 Sun Yip Street, Chai Wan</p>
        </div>

      </div>

      <div className='contact__hours'>
        <h3>Hours</h3>
        <p>Everyday 09:30am - 10:30pm</p>
        <p className='notification'>ESA is open during most public holidays but<br/>please refer to our schedule for specific dates</p>
      </div>
      
    </div>
  )
}

export default ContactUs