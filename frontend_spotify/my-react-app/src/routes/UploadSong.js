import React, { useState } from 'react';
import spotify_logo from '../assets/images/spotify_logo_white.svg';
import IconText from '../components/shared/IconText';
import { Icon } from '@iconify/react/dist/iconify.js';
import TextWithHover from '../components/shared/TextWithHover';
import TextInput from '../components/TextInputs';
import CloudinaryUpload from '../components/shared/CloudinaryUpload';
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelpers';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const UploadSong = () => {
  const [name, setName] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [playlistUrl, setPlaylistUrl] = useState("");
  const [uploadedSongFileName, setUploadedSongFileName] = useState("");
  const navigate = useNavigate();

  const submitSong = async () => {
    const data = {name, thumbnail, track: playlistUrl};
    const response = await makeAuthenticatedPOSTRequest(
        "/song/create",
        data
    );
    if (response.err) {
        alert("Could not create song");
        return;
    }
    alert("Success");
    navigate("/home");
}
  
  
  

  return (
    <div className="h-full w-full flex">
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        {/* Sidebar */}
        <div>
          <div className="logoDiv p-6">
            <img
              src={spotify_logo}
              alt="spotify logo"
              width={125}
            />
          </div>
          <div className='py-5'>
            <IconText iconName="mdi:home" 
            displayText="Home" 
            targetLink={"/home"}
            />
            <IconText iconName="mdi:search" displayText="Search" 
            targetLink={"/search"} />
            <IconText iconName="mdi:bookshelf" displayText="Library"
            targetLink={"/Library"} />
            <IconText iconName="mdi:music" 
            displayText="My-Music"
            targetLink={"/MyMusic"} />
          </div>
          <div className='pt-7'>
            <IconText iconName="mdi:playlist-plus" displayText="Create-Playlist" />
            <IconText iconName="mdi:heart-multiple" displayText="Liked-Songs" />
          </div>
        </div>
        <div className='px-5'>
          <div className='border border-gray-400 text-white w-3/7 flex p-1 py-2 rounded-full items-center justify-center hover:border-white cursor-pointer'>
            <Icon icon='mdi:earth' />
            <div className='ml-2 text-sm font-semibold'>English</div>
          </div>
        </div>
      </div>

      <div className="h-full w-4/5 bg-app-black overflow-auto ">
        {/* Navbar */}
        <div className='navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end'>
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="What do you want to play?" 
              className="bg-gray hover:bg-hover-gray2 text-white placeholder-black-800 border border-transparent hover:border-white rounded-xl px-8 py-1 focus:outline-none focus:border-green-500 ml-4 pl-10"
            />
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IconText iconName="mdi:search" />
            </span>
          </div>
          <div className='w-1/2 flex h-full items-center'>
            <div className='w-3/5 flex justify-around items-center'>
              <TextWithHover displayText="Premium" />
              <TextWithHover displayText="Support" />
              <TextWithHover displayText="Download" />
            </div>
            <div className='h-1/2 border-r border-white flex items-center'>
            </div>
            <div className='w-2/5 flex justify-around h-full items-center'>
              <TextWithHover displayText="Upload-Songs" 
              active/>
              <div className='bg-white h-2/3 px-18 flex items-center font-semibold cursor-pointer justify-center rounded-full border border-transparent hover:border-green-500 hover:border-3'>
                Vansh
              </div>
            </div>
          </div>
        </div>
        
        <div className='content p-8 pt-0 overflow-auto'>
          <div className='text-2xl font-semibold md-5 text-white mt-8'> 
            Upload your music
          </div>
          <div className='w-2/3 flex space-x-3 text-white'>
            <div className='w-1/2'>
              <TextInput
                label='Name'
                labelClassName={"text-white"}
                placeholder='Name' 
                value={name}
                setValue={setName}
              />
            </div>
            <div className='w-1/2'>
              <TextInput
                label='Thumbnail'
                labelClassName={"text-white"}
                placeholder='Thumbnail'
                value={thumbnail}
                setValue={setThumbnail} 
              />
            </div>
          </div>
          <div className='py-5'>
            {uploadedSongFileName ? (
              <div className='bg-white rounded-full p-3 w-1/3'>
                {uploadedSongFileName.substring(0, 120)}...
              </div>
            ) : (
              <CloudinaryUpload 
                setUrl={setPlaylistUrl} 
                setName={setUploadedSongFileName} 
              />
            )}
          </div>
          <div className='bg-white w-1/4 flex items-center justify-center p-4 rounded-full cursor-pointer font-semibold'
            onClick={submitSong}>
            Submit song
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadSong;
