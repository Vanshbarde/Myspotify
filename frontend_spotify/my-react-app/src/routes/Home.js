import React from 'react';
import spotify_logo from '../assets/images/spotify_logo_white.svg';
import IconText from '../components/shared/IconText';
import { Icon } from '@iconify/react/dist/iconify.js';
import TextWithHover from '../components/shared/TextWithHover';


// THIS IS FOR THE ARTIST CARDS
const popularartistCardsData = [{
  title: "Pritam",
  description: "Artist", // Corrected "discription" to "description"
  imgUrl: "https://tse3.mm.bing.net/th?id=OIP.0mNM1VgA2xXgxdF2NcQ4hgHaFj&pid=Api&P=0&h=180"
},
{ title: "Arjit Singh",
     description: "Artist",
      imgUrl: "https://tse3.mm.bing.net/th?id=OIP.aUBC3eCbBd121xP41BCVpwHaEU&pid=Api&P=0&h=180" 
      },
       { title: "A.R. Rahman", 
        description: "Artist", 
        imgUrl: "https://tse1.mm.bing.net/th?id=OIP.vYgO0JJXBr4-CcBXkUfEZgHaHo&pid=Api&P=0&h=180" 
        },
         { title: "Atif Aslam", 
            description: "Artist",
             imgUrl: "https://tse4.mm.bing.net/th?id=OIP.AwOcMS2gUlOjKfCvj3g19gHaEg&pid=Api&P=0&h=180" 
             },
              { title: "Yo Yo Honey Singh",
                 description: "Artist",
                  imgUrl: "https://tse4.mm.bing.net/th?id=OIP.8r73eYyx59IJXpJZlPEREQHaHa&pid=Api&P=0&h=180" 
                   }];


//this is for popular album and singles

const popularalbumsCardsData = [{
    title: "GLORY",
    description: "Yo Yo Honey Singh", // Corrected "discription" to "description"
    imgUrl: "https://tse3.mm.bing.net/th?id=OIP.0mNM1VgA2xXgxdF2NcQ4hgHaFj&pid=Api&P=0&h=180"
  },
  { title: "Aashiqui 2",
       description: "Mithoon, Ankit Tiwari,Jeet Gannguli",
        imgUrl: "https://tse3.mm.bing.net/th?id=OIP.aUBC3eCbBd121xP41BCVpwHaEU&pid=Api&P=0&h=180" 
        },
         { title: "Patandar", 
          description: "Arjan Dhillon", 
          imgUrl: "https://tse1.mm.bing.net/th?id=OIP.vYgO0JJXBr4-CcBXkUfEZgHaHo&pid=Api&P=0&h=180" 
          },
           { title: "Jo Tum Mere Ho", 
              description: "Anuv Jain",
               imgUrl: "https://tse4.mm.bing.net/th?id=OIP.AwOcMS2gUlOjKfCvj3g19gHaEg&pid=Api&P=0&h=180" 
               },
                { title: "Making Memories",
                   description: "Karan Aujla.ikky",
                    imgUrl: "https://tse4.mm.bing.net/th?id=OIP.8r73eYyx59IJXpJZlPEREQHaHa&pid=Api&P=0&h=180" 
                     }];




// this is for popular radios

const popularradioCardsData = [{
    title: "",
    description: "With Mohammed Rafi, Mukesh, Asha Bhosale", // Corrected "discription" to "description"
    imgUrl: "https://tse3.mm.bing.net/th?id=OIP.0mNM1VgA2xXgxdF2NcQ4hgHaFj&pid=Api&P=0&h=180"
  },
  { title: "",
       description: "With Arjit Singh, Yo Yo Honey Singh",
        imgUrl: "https://tse3.mm.bing.net/th?id=OIP.aUBC3eCbBd121xP41BCVpwHaEU&pid=Api&P=0&h=180" 
        },
         { title: "", 
          description: "With Anirudh,Ravichander", 
          imgUrl: "https://tse1.mm.bing.net/th?id=OIP.vYgO0JJXBr4-CcBXkUfEZgHaHo&pid=Api&P=0&h=180" 
          },
           { title: "", 
              description: "With A.R.Rahaman , Vishal-Shekhar",
               imgUrl: "https://tse4.mm.bing.net/th?id=OIP.AwOcMS2gUlOjKfCvj3g19gHaEg&pid=Api&P=0&h=180" 
               },
                { title: "",
                   description: "With Badasha,Subh,Sidhu Musewalla",
                    imgUrl: "https://tse4.mm.bing.net/th?id=OIP.8r73eYyx59IJXpJZlPEREQHaHa&pid=Api&P=0&h=180" 
                     }];




//this is for popular playlist froom our editors

const popularplaylistCardsData = [{
    title: "",
    description: "Pumping track for pumping iron.", // Corrected "discription" to "description"
    imgUrl: "https://tse3.mm.bing.net/th?id=OIP.0mNM1VgA2xXgxdF2NcQ4hgHaFj&pid=Api&P=0&h=180"
  },
  { title: "",
       description: "Catchy Pop music to keep those legs going.",
        imgUrl: "https://tse3.mm.bing.net/th?id=OIP.aUBC3eCbBd121xP41BCVpwHaEU&pid=Api&P=0&h=180" 
        },
         { title: "", 
          description: "Get ypur beast mode on !.", 
          imgUrl: "https://tse1.mm.bing.net/th?id=OIP.vYgO0JJXBr4-CcBXkUfEZgHaHo&pid=Api&P=0&h=180" 
          },
           { title: "", 
              description: "Energy tracks to get your mode on.",
               imgUrl: "https://tse4.mm.bing.net/th?id=OIP.AwOcMS2gUlOjKfCvj3g19gHaEg&pid=Api&P=0&h=180" 
               },
                { title: "",
                   description: "Boost your energy with these dance tracks.",
                    imgUrl: "https://tse4.mm.bing.net/th?id=OIP.8r73eYyx59IJXpJZlPEREQHaHa&pid=Api&P=0&h=180" 
                     }];



const Home = () => {
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
            />
            <IconText
              iconName="mdi:search"
              displayText="Search"
              active />
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
                    py-2 rounded-full items-center justify-center  hover:border-white cursor-pointer'>
            <Icon icon='mdi:earth' />
            <div className='ml-2 text-sm font-semibold'>English</div>
          </div>
        </div>
      </div>

      <div className="h-full w-4/5 bg-app-black overflow-auto">
        {/* All the right part content will be contained here */}
        <div className='navbar w-full h-1/10 bg-black bg-opacity-30 flex items-center justify-end'>
          <div className='w-1/2 flex h-full items-center'>
            <div className='w-3/5 flex justify-around items-center'>
              <TextWithHover displayText="Premium" />
              <TextWithHover displayText="Support" />
              <TextWithHover displayText="Download" />
            </div>
            <div className='h-1/2 border-r border-white flex items-center'>
            </div>
            <div className='w-2/5 flex justify-around h-full items-center'>
              <TextWithHover displayText="Sign Up" />
              <div className='bg-white h-2/3 px-8 flex items-center font-semibold cursor-pointer justify-center rounded-full'>
                Login
              </div>
            </div>
          </div>
        </div>
        <div className='content p-8 pt-0 overflow-auto'>
          <PlaylistView titleText="Popular artists" cardsData={popularartistCardsData} />
          <PlaylistView titleText="Popular albums and singles" cardsData={popularalbumsCardsData} />
          <PlaylistView titleText="Popular radio" cardsData={popularradioCardsData} />
          <PlaylistView titleText="Playlist from our editors" cardsData={popularplaylistCardsData} />
        </div>
      </div>
    </div>
  );
};

const PlaylistView = ({ titleText, cardsData }) => {
  return (
    <div className='text-white mt-8'>
      <div className='text-2xl font-semibold mb-16'>
        {titleText}
      </div>
      <div className='w-full flex justify-between space-x-4'>
        {
          cardsData && cardsData.length > 0 ? (
            cardsData.map((item) => {
              return (
                <Card
                  key={item.title} // It's good practice to add a unique key prop when rendering lists
                  title={item.title}
                  description={item.description} // Corrected "discription" to "description"
                  imgUrl={item.imgUrl} // Moved imgUrl inside the Card component
                />
              );
            })
          ) : (
            <div className='text-gray-400'>No items available</div>
          )
        }
      </div>
    </div>
  );
};

const Card = ({ title, description, imgUrl }) => { // Corrected "discription" to "description"
  return (
    <div className='bg-black bg-opacity-40 w-1/5 p-4 rounded-lg'>
      <div className='pb-4 pt-2'>
        <img className='w-full rounded-sm' src={imgUrl} />
      </div>
      <div className='text-white font-semibold py-3'>{title}</div>
      <div className='text-gray-500 text-sm'>{description}</div>
    </div>
  );
};

export default Home;
