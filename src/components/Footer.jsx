import React, { useState } from 'react'
import assets from '../assets/assets'
import Title from './Title'
import { toast } from 'react-hot-toast'

const ContactUs = () => {
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending...')

    const formData = new FormData(event.target)
    formData.append('access_key', 'YOUR_ACCESS_KEY_HERE')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })

    const data = await response.json()

    if (data.success) {
      toast.success('Message sent successfully!')
      event.target.reset()
      setResult('')
    } else {
      toast.error(data.message)
      setResult('')
    }
  }

  return (
    <div
      id='contact-us'
      className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-28 text-gray-700 dark:text-white'
    >
      <Title
        title='Reach out to us'
        desc='From strategy to execution, we craft digital solutions that move your business forward.'
      />

      <form
        onSubmit={onSubmit}
        className='w-full max-w-3xl mt-10 space-y-6'
      >
        {/* Name & Email */}
        <div className='grid sm:grid-cols-2 gap-6'>
          {/* Name */}
          <div>
            <p className='text-sm mb-2'>Your name</p>
            <div className='flex items-center gap-3 border rounded-lg px-4 py-3'>
              <img src={assets.person_icon} className='w-4' alt='' />
              <input
                type='text'
                name='name'
                required
                placeholder='Enter your name'
                className='w-full outline-none text-sm bg-transparent'
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <p className='text-sm mb-2'>Email id</p>
            <div className='flex items-center gap-3 border rounded-lg px-4 py-3'>
              <img src={assets.email_icon} className='w-4' alt='' />
              <input
                type='email'
                name='email'
                required
                placeholder='Enter your email'
                className='w-full outline-none text-sm bg-transparent'
              />
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <p className='text-sm mb-2'>Message</p>
          <textarea
            name='message'
            rows={6}
            required
            placeholder='Enter your message'
            className='w-full border rounded-lg p-4 text-sm outline-none resize-none'
          />
        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='flex items-center gap-2 bg-primary text-white
                     px-8 py-3 rounded-full text-sm font-medium
                     hover:scale-105 transition-all'
        >
          Submit
          <img src={assets.arrow_icon} className='w-4' alt='' />
        </button>

        {result && <p className='text-sm'>{result}</p>}
      </form>
    </div>
  )
}

export default ContactUs
