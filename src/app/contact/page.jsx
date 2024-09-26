"use client";
import Swal from "sweetalert2";
import { useState } from "react";
import "./style.css";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    Swal.fire({
      position: "top",
      icon: "success",
      title: "Your message has been sent successfully",
      showConfirmButton: false,
      timer: 1500,
      background: "#9a9ae2",
      customClass: {
        title: "white-text",
      },
    });
  };

  return (
    <div className="flex justify-center">
      <div
        className='sm:w-full max-w-md rounded-xl py-2 px-8 shadow-md mx-4 md:mx-6 lg:mx-12'
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)", // Smooth gradient background
          transition: "background-color 0.5s ease", // Smooth transition for color changes
        }}>
        <h2 className='text-center text-2xl md:text-3xl font-extrabold text-gray-900 uppercase mb-4'>
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              htmlFor='name'
              className='block text-sm font-medium text-gray-700'>
              Name
            </label>
            <input
              type='text'
              name='name'
              id='name'
              autoComplete='name'
              value={formData.name}
              onChange={handleChange}
              required
              className='mt-1 block w-full sm:text-base border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2.5'
            />
          </div>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'>
              Email address
            </label>
            <input
              id='email'
              name='email'
              type='email'
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
              required
              className='mt-1 block w-full sm:text-base border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2.5'
            />
          </div>
          <div>
            <label
              htmlFor='phone'
              className='block text-sm font-medium text-gray-700'>
              Phone number
            </label>
            <input
              id='phone'
              name='phone'
              type='tel'
              autoComplete='tel'
              value={formData.phone}
              onChange={handleChange}
              required
              className='mt-1 block w-full sm:text-base border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2.5'
            />
          </div>
          <div>
            <label
              htmlFor='message'
              className='block text-sm font-medium text-gray-700'>
              Message
            </label>
            <textarea
              id='message'
              name='message'
              rows='3'
              value={formData.message}
              onChange={handleChange}
              required
              className='mt-1 block w-full sm:text-base border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 p-2.5'></textarea>
          </div>
          <div className='flex items-center justify-center'>
            <button
              type='submit'
              className='w-full py-2.5 px-4 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Submit
            </button>
          </div>
        </form>
        <div className='mt-6 text-center'>
          <p className='text-xs text-gray-600 lg:font-semibold'>
            For any inquiries, please feel free to contact us.
          </p>
          <p className='text-xs text-gray-600 lg:font-semibold'>
            We will get back to you as soon as possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
