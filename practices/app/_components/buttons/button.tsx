'use client';

import SpinnerIcon from "../icons/loadingicon"
import { twMerge } from "tailwind-merge";
import { EState, ETextSize, ETheme } from "@/app/enum/enumdata";
import { IButton } from "@/app/interfaces/(buttons)/buttonInterface";



export const Button=({
    textSize=ETextSize.LARGE,
    leftSymbol,
    rightSymbol,
    children,
    isLoading,
    isFullWidth,
    colorTheme=ETheme.PRIMARY_WHITE,className,
    inState=EState.DEFAULT,...rest
    }:IButton
) => {
    
    const textCSS: { [key: string]: string }={
        [ETextSize.SMALL]:` text-sm py-1 px-5`,
        [ETextSize.LARGE]:` text-lg py-1 px-5`, 
        [ETextSize.XL]:` text-xl py-3 px-5`,
    }
    const colorCss:{[key:string]:string}={
        [ETheme.PRIMARY_WHITE]:` bg-white text-black rounded-md hover:bg-mint-300 hover:text-white `,
        [ETheme.PRIMARY_DARK]:` bg-grey-10 text-white hover:bg-mint-300 hover:text-grey-10 rounded-md`,
        [ETheme.SECONDARY_DARK]:` `,
        [ETheme.TEXT_DARK]:` bg-black text-white rounded-md hover:text-mint-900 `,
      }
    const stateCSS: { [key: string]: string }={
        [EState.DEFAULT]:` `,
        [EState.DISABLE]:` border-none pointer-events-none box-border`, 
    }
    
    const buttonStyle=twMerge(`${isFullWidth ? `w-full` : ``}`,textCSS[textSize],stateCSS[inState],colorCss[colorTheme],className)
    return (
        <button
            {...rest}
            className={buttonStyle}
        >
        {isLoading&& <SpinnerIcon/> }
        {!isLoading&& 
            <span className="flex"> 
                {leftSymbol}{children}{rightSymbol}
            </span>
        }

        </button>
    );
};