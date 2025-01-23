import React, { useRef } from 'react';
import Card from './Card';

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      desc :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla!',
      filesize :'.9mb',
      close: true,
      tag:{isOpen:true, tagTitle :'Download Now', tagColor:'sky'},
    },
    {
      desc :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla!',
      filesize :'.6mb',
      close: false,
      tag:{isOpen:false, tagTitle :'Download Now', tagColor:'green'},
    },
    {
      desc :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla!',
      filesize :'.7mb',
      close: true,
      tag:{isOpen:true, tagTitle :'Download Now', tagColor:'green'},
    }
  ];
  return (
    <div ref={ref} className='fixed z-[3] w-full h-full bg-sky-800/200 flex gap-5 flex-wrap p-5'>
      {data.map((item,index)=>(
        <Card data={item} reference={ref}/>
      ))}
    </div>

  )
}

export default Foreground