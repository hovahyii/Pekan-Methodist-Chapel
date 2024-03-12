"use client"

import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp2'

export default function App() {
  const floatingWhatsAppStyle = {
    position: "fixed" as const,
    bottom: "10px",
    right: "10px", // Adjust as needed
  };

  const floatingChatboxStyle = {
    position: "fixed" as const,
    bottom: "80px",
    right: "28px", // Adjust as needed
  };


  return (
    <FloatingWhatsApp
      phoneNumber="60199151055"
      accountName="戴光顺传道"
      avatar="/avatar.png"
      chatMessage="欢迎来到北根布道所,有什么可以帮到您吗?"
      statusMessage="约翰福音 3:16 「 神 爱 世 人 ..."
      notificationSound={true}
      buttonStyle={floatingWhatsAppStyle}
      chatboxStyle={floatingChatboxStyle}

    />
  );
}
