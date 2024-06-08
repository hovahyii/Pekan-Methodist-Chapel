'use client';

import React, { useState, useEffect } from 'react';
import MemoryCard from './Card';
import { createClient } from '@supabase/supabase-js';
import { RiPencilFill } from 'react-icons/ri';
import MemoryForm from './Form';
import MemoryCardLoadingSkeleton from './LoadingSkeleton';

function MemoryList() {
  const [memories, setMemories] = useState<{
    id: number;
    recipient_name: string;
    message: string;
    sender_name: string;
    sender_profile_picture: string;
  }[]>([]);
  
  const [isFormOpen, setFormOpen] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchMemoriesFromSupabase();
  }, []);

  const fetchMemoriesFromSupabase = async () => {
    const supabaseUrl = process.env.SUPABASE_URL || '';
    const supabaseKey = process.env.SUPABASE_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    console.log('Supabase URL:', supabaseUrl);
    console.log('Supabase Key:', supabaseKey);

    try {
      const { data, error } = await supabase
        .from('memorywall')
        .select('*');

      if (error) {
        throw error;
      }

      console.log('Fetched memories:', data);
      setMemories(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching memories:', error);
      setLoading(false);
    }
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  useEffect(() => {
    const openForm = () => {
      setFormOpen(true);
    };

    const pencilIcon = document.querySelector('.pencil-icon');
    if (pencilIcon) {
      pencilIcon.addEventListener('click', openForm);
    }

    return () => {
      if (pencilIcon) {
        pencilIcon.removeEventListener('click', openForm);
      }
    };
  }, []); 

  return (
    <div>
      {isFormOpen && <MemoryForm onClose={closeForm} />}

      <div
        className="fixed bottom-12 right-4 w-12 h-12 bg-red-500 text-white flex items-center justify-center rounded-full cursor-pointer pencil-icon"
      >
        <RiPencilFill size={30} />
      </div>

      {isLoading ? (
        <MemoryCardLoadingSkeleton />
      ) : memories.length === 0 ? (
        <p>No memories found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {memories.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MemoryList;
