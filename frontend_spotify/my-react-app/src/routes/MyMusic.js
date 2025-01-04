import spotify_logo from '../assets/images/spotify_logo_white.svg';
import IconText from '../components/shared/IconText';
import { Icon } from '@iconify/react/dist/iconify.js';
import TextWithHover from '../components/shared/TextWithHover';
import TextInput from '../components/TextInputs';
import SingleSongCard from '../components/shared/SingleSongCard';
import { makeAuthenticatedGETRequest } from '../utils/serverHelpers';
import React, { useState, useEffect } from 'react';
import {Howl , Howler} from 'howler';
import { Link } from 'react-router-dom';

// const songDate =
//  [{thumbnail:"https://images.unsplash.com/photo-1497166787666-d61839a665f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3VydGFpbnMlMjBiYWNrZ3JvaW91bnN8ZW58MHx8MHx8fDA%3D",
//   name:"curtains ",
//   artist:" A.R.rahaman" }]
const MyMusic = () => {
  const [songData, setSongData] = useState([]);
  const [soundPlayed, setSoundPlayed] = useState(null);
  
  const playSound = (songsrc) =>{
    if (soundPlayed){
      soundPlayed.stop();
    }
    let sound = new Howl({
      src: [songsrc],
      html5: true,
    });
    setSoundPlayed(sound);

    sound.play();
  };
 


    useEffect(() => {
    const getData = async () => {
      const response = await makeAuthenticatedGETRequest(
        "/song/get/mysongs"
      );
  setSongData(response.data);
    };
    getData();
  }, []);




  return (
    <div className="h-full w-full flex">
      <div className="h-full w-1/5 bg-black flex flex-col justify-between pb-10">
        {/* this div is for logos */}
        <div>
          <div className="logoDiv p-6">
            <img
              src={spotify_logo}
              alt="spotify logo"
              width={125}
            />
          </div>
          <div className='py-5'>
            <IconText
              iconName="mdi:home"
              displayText="Home"
              targetLink={"/home"}
            />
            <IconText
              iconName="mdi:search"
              displayText="Search"
              targetLink={"/search"}
               />
            <IconText
              iconName="mdi:bookshelf"
              displayText="Library"
              targetLink={"/Library"}
/>
            <IconText
              iconName="mdi:music"
              displayText="My-Music"
              active
            />
          </div>
          <div className='pt-7'>
            <IconText
              iconName="mdi:playlist-plus"
              displayText="Create-Playlist" />
            <IconText
              iconName="mdi:heart-multiple"
              displayText="Liked-Songs" />
          </div>
        </div>
        <div className='px-5'>
          <div className='border border-gray-400 text-white w-3/7 flex p-1 
            py-2 rounded-full items-center justify-center hover:border-white cursor-pointer'>
            <Icon icon='mdi:earth' />
            <div className='ml-2 text-sm font-semibold'>English</div>
          </div>
        </div>
      </div>

      <div className="h-full w-4/5 bg-app-black overflow-auto">
        {/* Navbar */}
        <div className='navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end'>
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="What do you want to play?" 
              className="bg-gray hover:bg-hover-gray2 text-white placeholder-black-800 border border-transparent 
              hover:border-white rounded-xl px-8 py-1 focus:outline-none focus:border-green-500 ml-4 pl-10"
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
            <Link to="/uploadsong">
              <TextWithHover displayText="Upload-Songs" />
              </Link>
              <div
                className='bg-white h-2/3 px-18 flex items-center font-semibold cursor-pointer justify-center
                rounded-full border border-transparent hover:border-green-500 hover:border-3'>
                Vansh
              </div>
            </div>
          </div>
        </div>
        <div className='content p-8 overflow'>
          <div className='text-white text-lg font-semibold'>
            My Songs:</div> 
           <div className='space-y-5 overflow-auto '> 
            {songData.map((item) => {
              return <SingleSongCard info={item} 
              playSound={playSound}/>
            })}
            </div>
        </div>
          </div>
      </div>
  );
};

export default MyMusic;