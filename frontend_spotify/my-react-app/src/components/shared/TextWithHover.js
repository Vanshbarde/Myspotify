import React from "react";
const TextWithHover = ({displayText,active}) => {

return (<div className="flex items-center justify-start cursor-pointer ">
   
    <div className={`${active ? "text-white" :
     "text-gray-500" } 
    font-bold  hover:text-white text-lg `}> {displayText} </div>
</div>
);
};



export default TextWithHover;