import { CustomButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({ title, containerStyles }: CustomButtonProps) => {
  return (
    <button type='button' className={`${containerStyles}`}>{title}</button>
  )
}

export default CustomButton

