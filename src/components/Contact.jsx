import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' bg-[#0a192f] flex justify-center items-center p-4 sm:h-full'>
        <form name='contactForm' action="https://getform.io/f/1ed90372-4b06-48b0-a0d8-ba83651d1b64" method='post' className='flex flex-col ma-xw w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-200'>Contact</p>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - mishaten19@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] pad'  type="text" placeholder='Name' name='name' />
            <input className='my-4 pad bg-[#ccd6f6]'  type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2 pad' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact