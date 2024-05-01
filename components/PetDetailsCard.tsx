"use client"

import React from 'react'
import { PetDetailsCardProps } from '@/types'

const PetDetailsCard = ({ imgPath, heading, gender, age, price }: PetDetailsCardProps) => {
    return (
        <div className="w-[185px] h-[319px] flex flex-col items-center bg-[#FDFDFD] rounded-xl xl:w-[300px] 
                        xl:h-[378px] px-2 py-2">
            <div className=' mb-2'>
                <img src={imgPath}  className='rounded-xl'/>
            </div>
            <div className='mb-2  w-full'>
                <p className='text-base font-bold text-[#00171F]'>{heading}</p>
            </div>
            <div className='xl:flex mb-2 w-full gap-x-3'>
                <div className='flex'>
                    <p className='font-medium text-sm me-2 mb-2 xl:mb-0'>Gene:</p>
                    <p className='text-sm font-bold'>{gender}</p>
                </div>
                <div  className='flex'>
                    <p  className='font-medium text-sm me-2'>Age</p>
                    <p className='text-sm font-bold'>{age}</p>
                </div>
            </div>
            <div className='mb-2 w-full '>
                <p className='text-base font-bold'>{price}</p>
            </div>
        </div>
    )
}

export default  PetDetailsCard