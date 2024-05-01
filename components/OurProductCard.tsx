"use client"

import React from 'react'
import { OurProductsCardProps } from '@/types'
import CustomButton from './CustomButton'

const OurProductCard = ({ imgPath, heading, product, size, price }: OurProductsCardProps) => {
    return (
        <div className="w-full flex flex-col items-center bg-[#FDFDFD] rounded-xl px-2 py-2">
            <div className='w-full mb-2'>
                <img src={imgPath} className='rounded-xl w-full' />
            </div>
            <div className='mb-2  w-full'>
                <p className='text-base font-bold text-[#00171F]'>{heading}</p>
            </div>
            <div className='xl:flex mb-2 w-full'>
                <div className='flex'>
                    <p className='font-medium text-sm me-2 mb-2 xl:mb-0'>Product</p>
                    <p className='text-sm font-bold'>{product}</p>
                </div>
                <div className='flex'>
                    <p className='font-medium text-sm me-2'>size</p>
                    <p className='text-sm font-bold'>{size}</p>
                </div>
            </div>
            <div className='mb-2 w-full '>
                <p className='text-base font-bold'>{price}</p>
            </div>
            <div className='mb-2 w-full'>
                <CustomButton title='Free Cat Food' containerStyles="rounded-lg bg-[#FCEED5] text-sm font-bold text-[#002A48]" />
            </div>
        </div>
    )
}

export default OurProductCard