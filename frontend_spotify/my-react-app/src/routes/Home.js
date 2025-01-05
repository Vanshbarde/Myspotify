import React from 'react';
import spotify_logo from '../assets/images/spotify_logo_white.svg';
import IconText from '../components/shared/IconText';
import { Icon } from '@iconify/react/dist/iconify.js';
import TextWithHover from '../components/shared/TextWithHover';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useState } from 'react';

// THIS IS FOR THE ARTIST CARDS
const popularartistCardsData = [{
  title: "Pritam", 
  description: "Artist", 
  imgUrl: "https://tse3.mm.bing.net/th?id=OIP.0mNM1VgA2xXgxdF2NcQ4hgHaFj&pid=Api&P=0&h=180",
  audioUrl: process.env.PUBLIC_URL + "/assets/admire you song.mp3" // Corrected path 
    },
  
{ title: "Arjit Singh",
     description: "Artist",
      imgUrl: "https://tse3.mm.bing.net/th?id=OIP.aUBC3eCbBd121xP41BCVpwHaEU&pid=Api&P=0&h=180" ,
      audioUrl: process.env.PUBLIC_URL + "/assets/hamari aduri kahani.mp3" // Corrected path 
 
    },
       { title: "A.R. Rahman", 
        description: "Artist", 
        imgUrl: "https://tse4.mm.bing.net/th?id=OIP.q1ZXKxTPwcXKFfKslzwq3wHaE5&pid=Api&P=0&h=180" ,
        audioUrl: process.env.PUBLIC_URL + "/assets/ajj mausam bada song.mp3" // Corrected path 

        },
         { title: "Atif Aslam", 
            description: "Artist",
             imgUrl: "https://tse4.mm.bing.net/th?id=OIP.AwOcMS2gUlOjKfCvj3g19gHaEg&pid=Api&P=0&h=180",
             audioUrl: process.env.PUBLIC_URL + "/assets/glory song1.mp3" // Corrected path 
 
             },
              { title: "Yo Yo Honey Singh",
                 description: "Artist",
                  imgUrl: "https://tse3.mm.bing.net/th?id=OIP.mFLYnR62wnujO9_QA23SHwAAAA&pid=Api&P=0&h=180" ,
                  audioUrl: process.env.PUBLIC_URL + "/assets/glory song1.mp3" // Corrected path 

                   }];


//this is for popular album and singles

const popularalbumsCardsData = [{
    title: "GLORY",
    description: "Yo Yo Honey Singh", // Corrected "discription" to "description"
    imgUrl: "https://tse4.mm.bing.net/th?id=OIP.8r73eYyx59IJXpJZlPEREQHaHa&pid=Api&P=0&h=180",
    audioUrl: process.env.PUBLIC_URL + "/assets/glory song1.mp3" // Corrected path 

  },
  { title: "Aashiqui 2",
       description: "Mithoon, Ankit Tiwari,Jeet Gannguli",
        imgUrl: "https://tse2.mm.bing.net/th?id=OIP.iRq2F0VF65ORtQ4TkreX3AHaHa&pid=Api&P=0&h=180" ,
        audioUrl: process.env.PUBLIC_URL + "/assets/ashique song.mp3" // Corrected path 

        },
         { title: "Patandar", 
          description: "Arjan Dhillon", 
          imgUrl: "https://tse3.mm.bing.net/th?id=OIP.3Jo5hhOWlhcIz2gSuDfBmQHaHa&pid=Api&P=0&h=180" ,
          audioUrl: process.env.PUBLIC_URL + "/assets/yaar patandar.mp3" // Corrected path 

          },
           { title: "Jo Tum Mere Ho", 
              description: "Anuv Jain",
               imgUrl: "https://tse1.mm.bing.net/th?id=OIP.HWX3R2N4OnYrVBQ7M1JKiAHaEK&pid=Api&P=0&h=180",
               audioUrl: process.env.PUBLIC_URL + "/assets/jo tum mere ho song.mp3" // Corrected path 
 
               },
                { title: "Making Memories",
                   description: "Karan Aujla.ikky",
                    imgUrl: "https://tse2.mm.bing.net/th?id=OIP.fmagaw4IyB7oCRgMfcSshwHaEK&pid=Api&P=0&h=180",
                    audioUrl: process.env.PUBLIC_URL + "/assets/admire you song.mp3" // Corrected path 
 
                     }];




// this is for popular radios

const popularradioCardsData = [{
    title: "",
    description: "With Mohammed Rafi, Mukesh, Asha Bhosale", // Corrected "discription" to "description"
    imgUrl: "https://tse2.mm.bing.net/th?id=OIP.Wf3Fu5EG7xeR6d0eOEcXtgHaHa&pid=Api&P=0&h=180",
    audioUrl: process.env.PUBLIC_URL + "/assets/mere mahaboob mere sanam song.mp3" // Corrected path 

  },
  { title: "",
       description: "With Arjit Singh, Yo Yo Honey Singh",
        imgUrl: "https://tse2.mm.bing.net/th?id=OIP.z3WtqGIXZQ62205794EwAQHaFu&pid=Api&P=0&h=180",
        audioUrl: process.env.PUBLIC_URL + "/assets/hamari aduri kahani.mp3" // Corrected path 
 
        },
         { title: "", 
          description: "With Anirudh,Ravichander", 
          imgUrl: "https://tse4.mm.bing.net/th?id=OIP.tETw9_QH2FVIZSbNZhtCVgHaHa&pid=Api&P=0&h=180" ,
          audioUrl: process.env.PUBLIC_URL + "/assets/beast song.mp3" // Corrected path 

          },
           { title: "", 
              description: "With A.R.Rahaman , Vishal-Shekhar",
               imgUrl: "https://tse3.mm.bing.net/th?id=OIP.YDCvg0YYwCY9ouzjuGh_cwHaEz&pid=Api&P=0&h=180" ,
               audioUrl: process.env.PUBLIC_URL + "/assets/ajj mausam bada song.mp3" // Corrected path 

               },
                { title: "",
                   description: "With Badasha,Subh,Sidhu Musewalla",
                    imgUrl: "https://tse3.mm.bing.net/th?id=OIP.WVFnl3DpGB46YgwoFkL5IwHaEK&pid=Api&P=0&h=180",
                    audioUrl: process.env.PUBLIC_URL + "/assets/sidhumusewala song.mp3" // Corrected path 
 
                     }];




//this is for popular playlist froom our editors

const popularplaylistCardsData = [{
    title: "",
    description: "Pumping track for pumping iron.", // Corrected "discription" to "description"
    imgUrl: "https://tse3.mm.bing.net/th?id=OIP.cVXKznZ-iPIQmWWIK5XdXQHaEK&pid=Api&P=0&h=180",
    audioUrl: process.env.PUBLIC_URL + "/assets/glory song1.mp3" // Corrected path 

  },
  { title: "",
       description: "Catchy Pop music to keep those legs going.",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaT6mIWg1mMAhFECEzghHRb-C93UkkqJJ17Q&s" ,
        audioUrl: process.env.PUBLIC_URL + "/assets/glory song1.mp3" // Corrected path 

        },
         { title: "", 
          description: "Get your beast mode on !.", 
          imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgALrTd9gaBrWiojROMSGv7C2YcQsiUAuAmw&s" ,
          audioUrl: process.env.PUBLIC_URL + "/assets/glory song1.mp3" // Corrected path 

          },
           { title: "", 
              description: "Energy tracks to get your mode on.",
               imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzZOajtRop2budheOKs4UIUte_-PRC1ZSUKg&s",
               audioUrl: process.env.PUBLIC_URL + "/assets/glory song1.mp3" // Corrected path 
 
               },
                { title: "",
                   description: "Boost your energy with these dance tracks.",
                    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp2oSP8-MHJRK2jyubw6f_LS-4241czanCZw&s" ,
                    audioUrl: process.env.PUBLIC_URL + "/assets/glory song1.mp3" // Corrected path 

                     }];
                     
                     const Home = () => {
                       const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
                     
                       const toggleAudio = (audioRef) => {
                         if (currentlyPlaying && currentlyPlaying !== audioRef.current) {
                           currentlyPlaying.pause();
                         }
                         if (audioRef.current.paused) {
                           audioRef.current.play().then(() => {
                             setCurrentlyPlaying(audioRef.current);
                           }).catch((error) => {
                             console.error('Error playing audio:', error);
                           });
                         } else {
                           audioRef.current.pause();
                           setCurrentlyPlaying(null);
                         }
                       };
                     
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
                                   active
                                 />
                                 <IconText
                                   iconName="mdi:search"
                                   displayText="Search"
                                   targetLink={"search"}
                                 />
                                 <IconText
                                   iconName="mdi:bookshelf"
                                   displayText="Library" />
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
                             {/* All the right part content will be contained here */}
                     
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
                                 <div className='h-1/2 border-r border-white flex items-center'></div>
                                 <div className='w-2/5 flex justify-around h-full items-center'>
                                   <Link to="/signup">
                                     <TextWithHover displayText="Sign Up" />
                                   </Link>
                     
                                   <Link to="/login">
                                     <div
                                       className='bg-white h-2/3 px-8 flex items-center font-semibold cursor-pointer justify-center
                                       rounded-full border border-transparent hover:border-green-500 hover:border-3'>
                                       Login
                                     </div>
                                   </Link>
                                 </div>
                               </div>
                             </div>
                             <div className='content p-8 pt-0 overflow-auto'>
                               <PlaylistView titleText="Popular artists" cardsData={popularartistCardsData} toggleAudio={toggleAudio} />
                               <PlaylistView titleText="Popular albums and singles" cardsData={popularalbumsCardsData} toggleAudio={toggleAudio} />
                               <PlaylistView titleText="Popular radio" cardsData={popularradioCardsData} toggleAudio={toggleAudio} />
                               <PlaylistView titleText="Playlist from our editors" cardsData={popularplaylistCardsData} toggleAudio={toggleAudio} />
                             </div>
                           </div>
                         </div>
                       );
                     };
                     
                     const PlaylistView = ({ titleText, cardsData, toggleAudio }) => {
                       return (
                         <div className='text-white mt-8'>
                           <div className='text-2xl font-semibold mb-16'>{titleText}</div>
                           <div className='w-full flex justify-between space-x-4'>
                             {cardsData && cardsData.length > 0 ? (
                               cardsData.map((item) => (
                                 <Card
                                   key={item.title}
                                   title={item.title}
                                   description={item.description}
                                   imgUrl={item.imgUrl}
                                   audioUrl={item.audioUrl}
                                   toggleAudio={toggleAudio} // Pass the toggleAudio function
                                 />
                               ))
                             ) : (
                               <div className='text-gray-400'>No items available</div>
                             )}
                           </div>
                         </div>
                       );
                     };
                     
                     const Card = ({ title, description, imgUrl, audioUrl, toggleAudio }) => {
                       const audioRef = useRef(null);
                     
                       return (
                         <div className='bg-black bg-opacity-40 w-1/5 p-4 rounded-xl border 
                         border-transparent hover:border-white hover:shadow-white-6 hover:bg-hover-gray1'>
                           <div className='pb-4 pt-2' onClick={() => toggleAudio(audioRef)}>
                             <img className='w-full rounded-sm' src={imgUrl} alt={`${title} Image`} />
                           </div>
                           <div className='text-white font-semibold py-3'>{title}</div>
                           <div className='text-gray-500 text-sm'>{description}</div>
                           <audio ref={audioRef} src={audioUrl}></audio>
                         </div>
                       );
                     };
                     
                     export default Home;
                     
