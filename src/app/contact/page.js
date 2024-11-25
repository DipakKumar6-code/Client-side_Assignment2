
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    number: '', 
    comment: ''
  });

  const [successMessage, submitMsg] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data to local storage
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    // Reset form fields
    setFormData({
      fname: '',
      lname: '',
      email: '',
      password: '',
      number: '', 
      comment: ''
    });
    submitMsg('Congratulations! The form has been submitted successfully.');

    setTimeout(() => submitMsg(''), 5000);
  };

  return (
    <div className="container w-80 m-auto">
      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      <h2 className="text-center text-white">Contact Cineplex-Movies</h2>
      <p className="text-center text-white mb-4 p-2">
        Please fill out the form below and we'll get back to you as soon as possible!
      </p>

      <form onSubmit={handleSubmit} className='text-white'>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="first-name" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first-name"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="last-name" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last-name"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-7">
            <label htmlFor="myEmail" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="myEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-5">
            <label htmlFor="myPhone" className="form-label">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              id="myPhone"
              placeholder="+1 647-276-0010"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="myPassword" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="myPassword"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="comment" className="control-label col-sm-2">User Comments:</label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              rows="5"
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit Now</button>
      </form>
    </div>
  );
}