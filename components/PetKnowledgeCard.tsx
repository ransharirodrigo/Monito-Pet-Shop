import { PetKnowledgeCardProps } from '@/types'
import React from 'react'
import CustomButton from './CustomButton'

const PetKnowledgeCard = ({ imgPath, heading, description }: PetKnowledgeCardProps) => {
    return (
        <div className="w-full mt-3 flex flex-col items-center bg-[#FDFDFD] rounded-xl px-2 py-2">
            <div className='w-full mb-2'>
                <img src={imgPath} className='rounded-xl w-full' />
            </div>
            <div className='w-full mb-2'>
                <CustomButton title="Pet knowledge" containerStyles="bg-[#00A7E7] font-bold text-[#FDFDFD] 
                                                                        rounded-[57px] py-3 px-3 text-[10px]" />
            </div>
            <div className='mb-2  w-full'>
                <p className='text-base font-bold text-[#00171F]'>{heading}</p>
            </div>
            <div className='mb-2 w-full '>
                <p className='text-sm font-normal'>{description}</p>
            </div>
        </div>
    )
}

export default PetKnowledgeCard