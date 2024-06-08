import React from 'react';
import Image from 'next/image';

interface Memory {
  id: number;
  recipient_name: string;
  message: string;
  sender_name: string;
  sender_profile_picture: string;
}

interface MemoryCardProps {
  memory: Memory;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ memory }) => {
  const { recipient_name, message, sender_name, sender_profile_picture } = memory;
  const defaultProfileImage = '/logo.jpg';

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 dark:text-black">
      <div className="p-4 flex-grow">
        <div className="flex items-center mb-2">
          <h2 className="text-lg font-semibold ">To: {recipient_name}</h2>
        </div>
        <p className="whitespace-pre-line mb-4">{message}</p>

        <p className="text-gray-800 text-sm font-semibold mb-2">From:</p>

        <div className='flex items-center'>
          <Image
            src={sender_profile_picture || defaultProfileImage}
            alt={sender_name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-full object-cover flex-initial"
          />
          <p className="text-gray-800 text-sm ml-4 flex-initial">{sender_name}</p>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;
