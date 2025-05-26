'use client'

import React from 'react'
import Image from 'next/image'

const TestImage = () => {
  return (
    <div className="p-4">
      <h2>Test Image</h2>
      <div className="relative w-48 h-48">
        <Image
          src="/project_pics/tiktok.png"
          alt="Test Image"
          width={200}
          height={200}
          className="object-cover"
          unoptimized
        />
      </div>
    </div>
  )
}

export default TestImage 