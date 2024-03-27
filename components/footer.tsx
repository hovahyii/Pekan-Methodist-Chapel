import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 北根卫理布道所。荣耀归于神。</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">Made and sponsored by <Link href="https://hovahyii.vercel.app" className="text-orange-500" target="_blank">Hovah Yii</Link></p>
      </div>
      <nav className="flex gap-4 sm:gap-6">
        <Link href="https://www.instagram.com/pekan_methodist_chapel/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl hover:underline underline-offset-4" />
        </Link>
        <Link href="https://www.facebook.com/people/Pekan-Methodist-Chapel-%E5%8C%97%E6%A0%B9%E5%8D%AB%E7%90%86%E5%B8%83%E9%81%93%E6%89%80/100085909725418/" target="_blank" rel="noopener noreferrer">
          <FaFacebook  className="text-3xl hover:underline underline-offset-4" />
        </Link>
        <Link href="https://github.com/hovahyii/Pekan-Methodist-Chapel" target="_blank" rel="noopener noreferrer">
          <FaGithub  className="text-3xl hover:underline underline-offset-4" />
        </Link>
        <Link href="https://pekan-christian-community.vercel.app/" target="_blank" rel="noopener noreferrer">
        <Image src="/cf.webp" alt="Hero" className="object-cover w-full h-full" width={18} height={16} />
        </Link>
      </nav>
    </footer>
  );
}
