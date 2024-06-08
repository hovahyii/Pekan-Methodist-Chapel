import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';
import Image from 'next/image';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '10px',
  },
};

interface MemoryFormProps {
  onClose: () => void;
}

const MemoryForm: React.FC<MemoryFormProps> = ({ onClose }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [message, setMessage] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const SUPABASE_URL = process.env.SUPABASE_URL || '';
  const SUPABASE_KEY = process.env.SUPABASE_KEY || '';
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target && typeof event.target.result === 'string') {
          setProfileImage(event.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const closeModal = () => {
    setModalIsOpen(false);
    onClose();
  };

  const handleSubmit = async () => {
    const { data, error } = await supabase.from('memorywall').upsert([
      {
        recipient_name: recipientName,
        message,
        sender_profile_picture: profileImage,
        sender_name: senderName,
      },
    ]);

    if (error) {
      console.error('Error submitting memory:', error);
    }

    // Clear form fields and close the modal
    setModalIsOpen(false);
    setMessage('');
    setRecipientName('');
    setSenderName('');
    setProfileImage(null);

    // Reload the page
    window.location.reload();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Memory Form"
    >
      <h1><strong>Submit a Memory</strong></h1>
      <form>
        <div className="mb-3">
          <label>Recipient Name</label>
          <input
            type="text"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', width: '100%' }}
          />
        </div>
        <div className="mb-3">
          <label>Your Name</label>
          <input
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', width: '100%' }}
          />
        </div>
        <div className="mb-3">
          <label>Profile Image</label>
          <div {...getRootProps()} className="border border-dashed border-gray-400 p-4 rounded">
            <input {...getInputProps()} />
            {profileImage ? (
              <Image
                width={20}
                height={20}
                src={profileImage}
                alt="Profile Image"
                className="w-20 h-20 rounded-full object-cover mb-2"
              />
            ) : (
              <div className="text-gray-500">
                <FiUpload size="24px" className="mb-2" style={{ backgroundColor: 'white' }}/>
                <p>Drag 'n' drop an image here or click to select an image</p>
              </div>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ backgroundColor: 'white', padding: '10px', borderRadius: '5px', width: '100%' }}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            style={{
              backgroundColor: '#0070f3',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Submit
          </button>
          <button
            onClick={closeModal}
            style={{
              backgroundColor: '#ff4c4c',
              color: 'white',
              padding: '10px',
              borderRadius: '5px',
              marginLeft: '10px',
            }}
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default MemoryForm;
