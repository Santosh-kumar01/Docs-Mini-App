import React, { useState } from 'react';
import Card from './Card';


function Foreground() {

  
  const data = [
    {
      desc:"Kolkata the city of joy and Dhanbad the black city  and also ranchi the heart of jharkhand.",
       filesize:".9mb", 
       close: true, 
       tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc:"Kolkata the city of joy and Dhanbad the black city  and also ranchi the heart of jharkhand.",
         filesize:".9mb", 
         close: true, 
         tag: {isOpen: true, tagTitle: "Download Now", tagColor:"bg-blue-600"},
        },
        {
          desc:"Kolkata the city of joy and Dhanbad the black city  and also ranchi the heart of jharkhand.",
           filesize:".9mb", 
           close: true, 
           tag: {isOpen: true, tagTitle: "Download Now", tagColor: "green" },
          },
  ];
  
 
  return (
    <div className='fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap py-5'>
    {data.map((item, index)=>(
      <Card data={item}/>
    ))}   
    
    </div>
  );
}

export default Foreground;