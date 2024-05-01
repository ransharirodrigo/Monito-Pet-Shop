import React from 'react'
import CustomButton from './CustomButton'
import Logo from './Logo'

const Footer = () => {
    return (
        <div className='w-full py-9 px-3 rounded-t-[20px] bg-gradient-to-b from-[#FCEED5] via-[#FCEED5] to-[#FFE7BA] 
                        xl:rounded-t-[40px] xl:px-4'>
            {/* Blue div */}
            <div className='rounded-2xl bg-[#003459] p-3 grid grid-cols-1 xl:grid-cols-2'>
                <div className='mb-4 xl:row-span-2  xl:mb-0'>
                    <p className='font-bold text-xl text-[#FDFDFD] xl:text-2xl'>Register now so you don't miss our programs</p>
                </div>
                <div className='bg-white rounded-[14px] p-4 xl:flex justify-between xl:row-span-1'>
                    <input type="text" className='w-full h-12 mb-2 bg-white border-[#99A2A5] rounded-lg border-[1px] px-5 xl:w-2/3 xl:mb-0 ' placeholder='Enter your Email' />
                    <CustomButton title='Subscribe Now' containerStyles='bg-[#003459] rounded-[8px] w-full h-12 xl:w-3/12 text-[#FDFDFD] font-medium text-base' />
                </div>
            </div>

            {/* Navigation links and social media icons */}
            <div className='flex flex-col items-center mt-8 gap-y-4  xl:flex-row xl:justify-between xl:gap-y-0'>
                <div className='w-full xl:w-1/4'>
                    {/* Navigation Links */}
                    <nav className="w-full flex  justify-between gap-x-12">
                        <a href="#" className="text-[#00171F] font-medium text-base ">Home</a>
                        <a href="#" className="text-[#00171F] font-medium text-base ">Category</a>
                        <a href="#" className="text-[#00171F] font-medium text-base ">About</a>
                        <a href="#" className="text-[#00171F] font-medium text-base ">Contact</a>
                    </nav>
                </div>
                <div className='flex w-1/2 justify-between xl:w-1/4'>
                    <img src="/SocialMediaIcons/Facebook.svg" />
                    <img src="/SocialMediaIcons/Twitter.svg" />
                    <img src="/SocialMediaIcons/Instagram.svg" />
                    <img src="/SocialMediaIcons/Youtube.svg" />
                </div>
            </div>

            <div className='flex flex-col items-center xl:flex-row xl:justify-between mt-6'>
                <div className='hidden xl:block'>
                    <p>© 2022 Monito. All rights reserved.</p>
                </div>

                <div>
                    <Logo />
                </div>

                <div className='flex flex-row gap-x-4'>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>

                <div className='xl:hidden'>
                    <p>© 2022 Monito. All rights reserved.</p>
                </div>
            </div>

        </div>
    )
}

export default Footer

