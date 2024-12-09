import React from 'react'

const page = () => {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-8">
      <div className="bg-white rounded-lg shadow-lg p-8 border-2 border-green-500">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About shortURL</h1>
        
        <div className="space-y-4 text-gray-600">
          <p>
            Welcome to shortURL - your go-to solution for transforming long, unwieldy URLs into clean, 
            manageable links. Our service makes sharing links easier than ever before.
          </p>

          <div className="bg-green-50 p-4 rounded-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Key Features:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Quick URL shortening</li>
              <li>Custom link options</li>
              <li>Secure and reliable</li>
              <li>User-friendly interface</li>
            </ul>
          </div>

          <p>
            Whether you're sharing links on social media, sending professional emails, or managing marketing campaigns,
            shortURL helps you keep your links concise and professional.
          </p>

          <div className="bg-gray-50 p-4 rounded-md">
            <p className="italic">
              "Simplifying the web, one link at a time."
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
