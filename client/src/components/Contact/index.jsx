import React, { useState, useContext } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import AlertContext from '../AlertContext/alertContext';
import { GrFacebook, GrTwitter, GrInstagram } from 'react-icons/gr';

import '../../assets/styles/Contact.css'

const Contact = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext
  const { handleSubmit, register, errors } = useForm();
  const [isSubmiting, setIsSubmiting] = useState(false)

  const onSubmit = async (values, e) => {
    setIsSubmiting(true);
    try {
      const res = await axios.post('http://localhost:4000/api/email/contact', values);
      setAlert(res.data, 'success');
      e.target.reset();
      setIsSubmiting(false)
    } catch (err) {
      console.log(err)
      setAlert(err, 'error')
      setIsSubmiting(false)
    }
  }

  return (
    <div className="contact" id="contact">
      <div className="contact__wrapper">
        <ScrollAnimation animateIn='flipInY' animateOut='flipOutY' animateOnce={true}>
          <div className="contact__container">
            <form onSubmit={handleSubmit(onSubmit)} className="form__wrapper">
              <h1>Let's get in touch!</h1>
              <div className="form__row">
                <div className="form__group">
                  <input
                    type="text"
                    name="firstname"
                    placeholder="Your first name"
                    ref={register({
                      required: "Required",
                    })}
                  />
                  <small className="isError">{errors.firstname && errors.firstname.message}</small>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Your last name"
                    ref={register({
                      required: "Required",
                    })}
                  />
                  <small className="isError">{errors.lastname && errors.lastname.message}</small>
                </div>
              </div>
              <div className="form__row">
                <div className="form__group">
                  <input
                    type="text"
                    name="email"
                    placeholder="Your email address"
                    ref={register({
                      required: "Required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  <small className="isError">{errors.email && errors.email.message}</small>
                </div>
                
                <div className="form__group">
                  <input 
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    ref={register({
                      required: "Required",
                    })}
                  />
                  <small className="isError">{errors.subject && errors.subject.message}</small>
                </div>
              </div>
              <div className="form__row">
                <div className="form__group">
                  <textarea
                    placeholder="Your message"
                    name="message"
                    ref={register({
                      required: "Required",
                    })}  
                  ></textarea>
                  <small className="isError">{errors.message && errors.message.message}</small>
                </div>
              </div>

              <div className="form__row">
                <button type="submit" disabled={isSubmiting} >{isSubmiting ? 'Sending. . .' : 'Send Message'}</button> 
              </div>

              <div className="social__container">
                <ul className="social__item">
                  <li className="social__links" title="Facebook">
                    <a href="">
                      <GrFacebook className="social__icons" />
                    </a>
                  </li>
                  <li className="social__links" title="Twitter">
                    <a href="">
                      <GrTwitter className="social__icons" />
                    </a>
                  </li>
                  <li className="social__links" title="Instagram">
                    <a href="">
                      <GrInstagram className="social__icons" />
                    </a>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default Contact
