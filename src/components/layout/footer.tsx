import React from 'react'

const footer = () => {
  return (
    <>
        <nav className='footer'>
            <div>
                <h1>Icon</h1>
                <p className='max-w-[400px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <h1>Company</h1>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div>
                <h1>Get in touch</h1>
                <ul>
                    <li>+1-234-567-890</li>
                    <li>contact@greatstack.dev</li>
                </ul>
            </div>
        </nav>

        <div className='border-t-1 py-4'>
            <p className='text-sm opacity-80 text-center'>Copyright 2025 © Frank All Right Reserved.</p>
        </div>
    </>
  )
}

export default footer