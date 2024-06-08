// pages/prayers.tsx
import React from 'react';
import MemoryWall from '@/components/MemoryWall/List';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function Memory() {
    return (
    <div className="flex flex-col min-h-screen">

        <Header />
        <MemoryWall />
        <Footer />
    </div>
  );
};

