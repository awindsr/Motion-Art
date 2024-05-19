import React from 'react'

export default function Footer() {
  return (
    <div className='footer flex flex-col md:flex-row-reverse text-[#e1d9ff] items-center justify-between p-7 md:h-[3rem] text-[.8rem] h-[7rem]'>
        <div className='flex space-x-6'>
            <a href="https://qodematrix.com/docs/motion-art-for-elementor/">Documentation</a>
            <a href="https://support.qodematrix.com/">Support</a>
        </div>
        <div className='text-[.8rem]'>
            <p>&copy; 2023 Copywrite. All rights reserved by QodeMatrix</p>
        </div>
    </div>
  )
}
