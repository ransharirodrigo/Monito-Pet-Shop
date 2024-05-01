import React from 'react'

const Logo = () => {
    return (
        <div className="flex flex-row items-end gap-x-0.5">
            <img src="/LogoImages/Letter_M.svg" className="h-[25.26px] w-[27.43px]" />
            <img src="/LogoImages/Letter_O.svg" className="h-[18.95px] w-[17.94px]" />
            <img src="/LogoImages/Letter_N.svg" className="h-[18.95px] w-[17.94px]" />
            <div>
                <img src="/LogoImages/dot.svg" className="h-[7.37px] w-[7.91px]" />
                <img src="/LogoImages/Letter_I.svg" className="h-[16.84px] w-[7.39px]" />
            </div>
            <img src="/LogoImages/Letter_T.svg" className="h-[25.26px] w-[14.77px]" />
            <img src="/LogoImages/Letter_O.svg" className="h-[18.95px] w-[17.94px]" />
        </div>
    )
}

export default Logo