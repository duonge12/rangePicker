'use client';
import { EState, ETextSize, ETheme } from "@/app/enum/enumdata";
import { IInput } from "@/app/interfaces/(inputs)/inputInterface";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import SpinnerIcon from "../icons/loadingicon";
import { LucideCheck, LucideFileWarning } from "lucide-react";



export const SimpleInput= ({ 
  description,
  leftSymbol,
  rightSymbol,
  isFullWidth=true,
  textSize=ETextSize.LARGE,
  colorTheme=ETheme.SECONDARY_DARK,
  inState=EState.DEFAULT,
  ...rest }:IInput
) => {
  const [currvalue,setValue]=useState('')

  const textSizeCSS:{[key:string]:string}={
    [ETextSize.SMALL]:` text-sm py-1 px-1 `,
    [ETextSize.LARGE]:` text-lg py-1 px-1`,
    [ETextSize.XL]:` text-xl py-1 px-1`,
  }
  const borderCSS:{[key:string]:string}={
    [EState.DEFAULT]:` border-none rounded-md`,
    [EState.ACTIVE]:` border-2 border-mint-300 rounded-md `,
    [EState.LOADING]:` border-none rounded-md`,
    [EState.DISABLE]:` border-none pointer-events-none rounded-md`,
    [EState.SUCCESS]:` border-2 border-success-600 rounded-md`,
    [EState.ERROR]:` border-2 border-error-600 rounded-md`,
  }
  const colorCss:{[key:string]:string}={
    [ETheme.PRIMARY_WHITE]:` `,
    [ETheme.PRIMARY_DARK]:` `,
    [ETheme.SECONDARY_DARK]:` bg-grey-20 text-grey-70 `,
    [ETheme.TEXT_DARK]:` `,
  }
  const inputStyle=twMerge(
   `${isFullWidth ? `w-full` : ``}`, textSizeCSS[textSize],colorCss[colorTheme],borderCSS[inState]
  )
  return (
    <div className={isFullWidth ? `w-full`: `inline-block`} >
      <h3 className="text-white"> {description} </h3>
      <div className={`${inputStyle} flex`}>
          {leftSymbol}
          <input {...rest} className={`bg-inherit outline-none w-full`}/>
          {rightSymbol}
      </div>
      
      {(inState===EState.LOADING) &&
      <div className="flex text-white">
          <SpinnerIcon/> 
          <span> Loading....</span>
      </div>
      }
      {(inState===EState.DEFAULT||inState===EState.ACTIVE||inState===EState.DISABLE) &&
      <div className="flex text-white">
          <span> Hint</span>
      </div>
      }
      {(inState===EState.ERROR) &&
      <div className="flex text-white">
          <LucideFileWarning/>
          <span> Error</span>
      </div>
      }
      {(inState===EState.SUCCESS) &&
      <div className="flex text-white">
          <LucideCheck/><span> Successed</span>
      </div>
      }
    </div>
    )
  };
