"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroBanner() {

    const [currentImage, setCurrentImage] = useState(0);
    const images = ['/group-photo1.jpg', '/group-photo2.jpg', '/group-photo3.jpg', '/group-photo4.heic'];
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000);
    
        return () => clearInterval(interval);
      }, []);
    
  return (
    <div className="flex flex-col items-center md:flex-row p-4">

      {/* Title and description on the bottom for mobile, right for larger screens */}
      <div className=' md:w-1/2'>
      <div className="p-6">
        <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold tracking-tighter">
        北根卫理布道所<br/>欢迎您！


        </h1>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
        欢迎大家出席每周日下午的崇拜，一同领略神的恩典和爱。
        </p>
        <p className="mt-4 text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
        也欢迎大专生出席我们的小组聚会，在崇拜后进行。
        </p>
      </div>
      </div>
      {/* Image on the top for mobile, left for larger screens */}
      <div className="w-full md:w-1/2">
  <div className="relative   md:h-full border  rounded-lg overflow-hidden">
    <Image
      src={images[currentImage]}
      alt="Hero"
      width={1440}
      height="400"
      className="object-cover w-screen h-[28rem]  "
      objectFit="cover"
    />
  </div>
</div>


    </div>
  );
}
