import React from 'react';
import { FaRegFileLines } from "react-icons/fa6";
import { MdDownloadForOffline } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion";


const Card = ({ data, reference }) => {
    return (
        <motion.div 
            drag 
            dragConstraints={reference} 
            whileDrag={{ scale: 1.2 }} 
            dragElastic={0.1} 
            dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} 
            className=' relative w-60 h-72 flex-shrink-0 bg-zinc-900/90 rounded-[30px] px-5 py-10 text-white overflow-hidden'>
            <FaRegFileLines />
            <p className='text-xs mt-5 font-semibold leading-tight'> {data?.desc}</p>
            <div className='absolute bottom-0 w-full  left-0'>
                <div className='flex items-center justify-between py-3 px-8'>
                    <h5> {data?.filesize}</h5>
                    <span className='w-7 h-7 flex justify-center item-center'>
                        {data?.close
                            ? <IoMdCloseCircle size="1.3em" />
                            : <MdDownloadForOffline size="1.3em" />
                        }
                    </span>
                </div>
                {
                    data?.tag?.isOpen && (
                        <div className={`tag w-full ${data?.tag?.tagColor === "green" ? "bg-green-600" : "bg-sky-600"} py-3 flex justify-center item-center`}>
                            <h3 className='text-sm font-semibold'>
                                {data?.tag?.tagTitle}
                            </h3>
                        </div>
                    )
                }
            </div>
        </motion.div>
    )
}

export default Card