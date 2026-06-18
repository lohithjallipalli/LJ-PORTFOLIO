import React, { useState } from 'react';
import { AtSign, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import CustomIcon from './CustomIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: null,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.firstname || !formData.email || !formData.message) {
      setStatus({
        loading: false,
        success: false,
        error: 'Please fill in all required fields (First name, Email, and Message).'
      });
      return;
    }

    setStatus({ loading: true, success: null, error: null });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if variables are configured
    const isPlaceholder = !serviceId || !templateId || !publicKey ||
      serviceId.includes('your_') ||
      templateId.includes('your_') ||
      publicKey.includes('your_');

    if (isPlaceholder) {
      // Simulate real-time success for local testing/demo if keys are not set up
      setTimeout(() => {
        console.warn("EmailJS: Using demo mode. Set your actual credentials in the .env file.");
        setStatus({
          loading: false,
          success: true,
          error: null
        });
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          message: ''
        });
      }, 1500);
      return;
    }

    const templateParams = {
      from_name: `${formData.firstname} ${formData.lastname}`.trim(),
      reply_to: formData.email,
      phone: formData.phone || 'N/A',
      message: formData.message,
      to_email: 'lohithjallipalli@gmail.com',
      to_name: 'Lohith'
    };

    emailjs.send(serviceId, templateId, templateParams, {
      publicKey: publicKey
    })
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus({
          loading: false,
          success: true,
          error: null
        });
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus({
          loading: false,
          success: false,
          error: 'Failed to send message. Please check your credentials or try again later.'
        });
      });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="left__column">
          <div className="box">
            <div className="cluster">
              <h2 className="sub__title">
                Let’s <span className="primary">create something</span> amazing together!
              </h2>
              <p className="description">
                Feel free to reach out for projects, collaborations, via the form or email!
              </p>
            </div>
            <CustomIcon name="list-option-ui" className="list__ui" />
          </div>
          <div className="box">
            <div className="cluster">
              {/* Option Start */}
              <div className="flex option">
                <div className="icon__container">
                  <AtSign />
                </div>
                <div className="details">
                  <h3 className="name">Email</h3>
                  <p className="text__muted value">lohithjallipalli@gmail.com</p>
                </div>
              </div>
              {/* Option End */}
              {/* Option Start */}
              <div className="flex option">
                <div className="icon__container">
                  <Phone />
                </div>
                <div className="details">
                  <h3 className="name">Phone</h3>
                  <p className="text__muted value">+91-8919539142</p>
                </div>
              </div>
              {/* Option End */}
              {/* Option Start */}
              <div className="flex option">
                <div className="icon__container">
                  <MapPin />
                </div>
                <div className="details">
                  <h3 className="name">Address</h3>
                  <p className="text__muted value">Chintalapudi, Andhra Pradesh</p>
                </div>
              </div>
              {/* Option End */}
            </div>
          </div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="spotlight"></div>
          <h2 className="sub__title">
            Let's work <span className="primary">together!</span>
          </h2>
          <div className="row">
            <input
              type="text"
              placeholder="First name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              className="control"
              required
            />
            <input
              type="text"
              placeholder="Last name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              className="control"
            />
          </div>

          <div className="row">
            <input
              type="email"
              placeholder="Email address"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="control"
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="control"
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="control"
            required
          ></textarea>

          {status.success && (
            <p className="form-status-message success-message">
              Message sent successfully!
            </p>
          )}

          {status.error && (
            <p className="form-status-message error-message">
              {status.error}
            </p>
          )}

          <button
            type="submit"
            className="btn btn__primary submit__btn"
            disabled={status.loading}
          >
            {status.loading ? 'Sending...' : 'Send Now'}
          </button>
        </form>
      </div>
    </section>
  );
}

