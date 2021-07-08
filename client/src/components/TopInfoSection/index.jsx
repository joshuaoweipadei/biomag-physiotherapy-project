import React from 'react';
// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import AlertContext from '../AlertContext/alertContext';
import {
  ServicesContainer,
  ServicesRow,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  CallContainer,
  CallPhoneIcon,
  CallPhoneNumber,
  // AppointmentForm,
  // AppointmentInputRow,
  // AppointmentInput,
  // SubmitButton,

  OpeningHours,
  DayRow,
  Day,
  Time,
  ServicesP,
  Instagram
} from './TopInfoSection'

const TopInfoSection = () => {
  // const alertContext = useContext(AlertContext);
  // const { setAlert } = alertContext
  // const { handleSubmit, register, errors } = useForm();
  // const [isSubmiting, setIsSubmiting] = useState(false);

  // const onSubmit = async (values, e) => {
  //   setIsSubmiting(true);
  //   try {
  //     const res = await axios.post('/api/email/appointment', values);
  //     setAlert(res.data, 'success');
  //     e.target.reset();
  //     setIsSubmiting(false)
  //   } catch (err) {
  //     console.log(err)
  //     setAlert('Could not book appointment.', 'error')
  //     setIsSubmiting(false)
  //   }
  // }

  return (
    <ServicesContainer>
      <ServicesRow>
        <ServicesWrapper>
          <ServicesCard>
            <OpeningHours>
              <ServicesH2>Appointment Booking & Emergency</ServicesH2>
              <CallContainer>
                <CallPhoneIcon/>
                <CallPhoneNumber>07069403480, 08137434302</CallPhoneNumber>
              </CallContainer>
              <ServicesP>
                We provide 24/7 professional therapy services for all clients of our clinic.
                Also book appointment with us today, by calling our phone lines.
              </ServicesP>
              <a href="https://www.instagram.com/invites/contact/?i=4x46tocbd97j&utm_content=k3v3dt2" target="_blank" style={{marginTop: '20px', display: "flex", alignItems: "center", color: "#252525"}}>
                <Instagram />
                Instagram
              </a>
            </OpeningHours>
          </ServicesCard>
          {/* <ServicesCard>
            <AppointmentForm onSubmit={handleSubmit(onSubmit)} >
              <ServicesH2>Book Appointment</ServicesH2>
              <AppointmentInputRow>
                <AppointmentInput 
                  type="text"
                  className={`${errors.names && errors.names.message ? 'isErrorBorder' : ''}`}
                  name="names" 
                  placeholder="Full Name"
                  ref={register({
                    required: "Full name is required",
                  })}
                />
                <AppointmentInput 
                  type="text" 
                  className={`${errors.phone && errors.phone.message ? 'isErrorBorder' : ''}`}
                  name="phone" 
                  placeholder="Phone"
                  ref={register({
                    required: "Phone is required",
                    pattern: {
                      value: /^[0][7-9]{1}[0-1]{1}[0-9]{8}$/i,
                      message: "Invalid phone number"
                    }
                  })}
                />
              </AppointmentInputRow>
              <AppointmentInputRow>
                <AppointmentInput
                  type="text"
                  className={`${errors.email && errors.email.message ? 'isErrorBorder' : ''}`}
                  name="email"
                  placeholder="E-mail"
                  ref={register({
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                />
                <SubmitButton
                  type="submit"
                  disabled={isSubmiting}
                >
                  {isSubmiting ? 'BOOKING APP. . .' : 'MAKE AN APPOINTMENT'}
                </SubmitButton>
              </AppointmentInputRow>
              <small className="isError">
                {
                  (errors.names && errors.names.message) || 
                  (errors.phone && errors.phone.message) ||
                  (errors.email && errors.email.message)
                }
              </small>
            </AppointmentForm>
          </ServicesCard> */}
          <ServicesCard>
            <OpeningHours>
              <ServicesH2>Opening Hours</ServicesH2>
              <DayRow>
                <Day>Weekdays</Day>
                <Time>8am - 4:30pm</Time>
              </DayRow>
              <DayRow>
                <Day>Saturdays</Day>
                <Time>10am - 6pm</Time>
              </DayRow>
              <DayRow>
                <Day>Sundays</Day>
                <Time>1:30pm - 5pm</Time>
              </DayRow>
            </OpeningHours>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesRow>
    </ServicesContainer>
  )
}

export default TopInfoSection