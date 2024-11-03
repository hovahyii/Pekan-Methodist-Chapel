"use client"

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <div className="flex items-center space-x-2">
          <Link href="/" className="text-lg font-bold tracking-tighter sm:text-xl md:text-2xl">⛪ 北根卫理布道所</Link>
        </div>
        <nav className="ml-auto hidden lg:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#service">
            崇拜时间
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#cellgroup">
            小组聚会
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/#routine">
            事奉人员表
          </Link>
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="/memory-wall">
          🖼️ 祝福榜
          </Link> */}
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="https://pekan-christian-community.vercel.app/">
           大专（英）
          </Link>
       
        </nav>
        <Button className="ml-auto h-10 text-sm px-4 lg:hidden" onClick={toggleModal}>奉献</Button>
      </header>

      <nav className="flex lg:hidden justify-around w-full py-2 bg-gray-200">
        <Link href="#service" passHref className="text-sm font-medium hover:underline">崇拜时间</Link>
        <Link href="#cellgroup" passHref className="text-sm font-medium hover:underline">小组聚会</Link>
        <Link href="#routine" passHref className="text-sm font-medium hover:underline">事奉人员表</Link>
        <Link href="/memory-wall" passHref className="text-sm font-medium hover:underline">🖼️ 祝福榜</Link>
        <Link href="https://pekan-christian-community.vercel.app/" passHref className="text-sm font-medium hover:underline">大专（英）</Link>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg relative">
            <img src="/donation.jpg" alt="Donation" className="w-full" />
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={toggleModal}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
