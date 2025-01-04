import React from 'react';
import { useContext } from 'react';
import songContext from '../../contexts/songContexts';

const SingleSongCard = ( {info , playSound} ) => {

const [currentSong , setCurrentSong] = useContext(songContext);


    return (
<div className="flex mt-4 hover:bg-gray-400 hover:bg-opacity-40"  
              onClick={() =>{
                setCurrentSong(info);
              }}>  

          <div   className="w-10 h-13 "
          style={{
            backgroundImage: `url("${info.thumbnail}")`,            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className='flex w-full'>
        <div  className="text-white  flex  justify-center flex-col pl-4 w-5/6">
            <div className=""> {info.name}</div>
            <div className="text-xs text-gray-500">
               {info.artist.firstName + "" + info.artist.lastName} </div>
        </div>
        <div className='w-1/6 flex items-center justify-end text-sm text-gray-400'>
          <div className=''> 3:44</div>
          {/* <div className='text-gray-400 flex items-center justify-center p-4' > ... </div> */}
        </div>
        </div>
      </div>
    );
  };
  
  export default SingleSongCard;
  