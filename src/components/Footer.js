import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
      <div className="flex flex-col items-start pt-56 pl-44 pb-10 bg-black text-gray-300">
        <span className="mb-4">
          Questions? Call <a href="#">0102030405</a>
        </span>
        <div className="flex justify-start w-full max-w-md mb-4">
          <a href="#" className="mr-4 hover:underline">
            FAQ
          </a>
          <a href="#" className="mr-4 hover:underline">
            Help Centre
          </a>
          <a href="#" className="mr-4 hover:underline">
            Terms of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>
        <div className="flex items-center">
          <a href="#" className="mr-2 hover:underline">
            Cookie Preferences
          </a>
          <span className="text-gray-400">|</span>
          <a href="#" className="ml-2 hover:underline">
            Corporate Information
          </a>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default Footer
