import React, { Suspense, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Fox from '../models/Fox';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';
import SocialLinks from '../components/SocialLinks';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const {alert, showAlert, hideAlert} = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };
  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Aditya",
        from_email: form.email,
        to_email: 'adityachitransh18@gmail.com',
        message: form.message   
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      ).then(() => {
      setIsLoading(false);
      showAlert({show: true, text: 'Message sent successfully', type: 'success'})

      setTimeout(() => {
        hideAlert();
        setForm({ name: '', email: '', message: ''});
        setCurrentAnimation('idle')
      }, 3000)
      
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle')
      console.log(error);
      showAlert({show: true, text: 'I didn\'t receive your message', type: 'danger'})
    })
  };

  return (
    <section className="pt-24 min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      {alert.show && <Alert {...alert}/>}
      <div className="max-w-5xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left: Form and heading */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold font-sans mb-8">Get in Touch</h1>
          <form className="w-full max-w-xl flex flex-col gap-7" onSubmit={handleSubmit}>
            <label className="text-black-500 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="w-full rounded-lg bg-gray-100 border-none py-3 px-4 mt-2 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John"
                required
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="w-full rounded-lg bg-gray-100 border-none py-3 px-4 mt-2 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="John@gmail.com"
                required
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <label className="text-black-500 font-semibold">
              Your Message
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg bg-gray-100 border-none py-3 px-4 mt-2 text-gray-700 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Let me know how I can help you!"
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>
            <button
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold rounded-lg shadow-md transition hover:from-blue-600 hover:to-blue-500 flex items-center justify-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
              ) : null}
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
        {/* Right: Fox Model */}
        <div className="w-full lg:w-1/2 flex justify-center items-center h-[400px]">
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000
            }}
          >
            <directionalLight intensity={2.5} position={[0, 0, 1]} />
            <ambientLight intensity={0.5}/>
            <Suspense fallback={<Loader />}>
              <Fox 
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.6, -0.7, 0]}
                scale={[0.7, 0.7, 0.7]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
      <SocialLinks className="justify-center" />
      <div className="mt-2 text-center font-poppins">
      📧 adityachitransh18@gmail <br/>
      Copyright © 2025 Aditya Chitransh. All rights reserved.
      </div>
    </section>
  )
}

export default Contact
