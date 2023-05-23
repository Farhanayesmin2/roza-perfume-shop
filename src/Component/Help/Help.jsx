import React from 'react';
import { TbMessageCircle2 } from "react-icons/tb";

export default function Help(){
    return(
        <button className='fixed h-[53px] w-[168px] bg-[#4D2952] hover:bg-[#4D3232] rounded-full border-none bottom-10 right-10 shadow-lg'> 
            <div className='flex flex-row justify-center'> 
                <TbMessageCircle2 className='w-[25px] h-[25px] text-white font-bold'/>
                <p className="text-white uppercase pl-2 font-bold">live help</p>

            </div>
        </button>
    )
}