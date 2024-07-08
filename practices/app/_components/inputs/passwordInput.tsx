'use client';
import { ChangeEvent, EventHandler, ReactNode, forwardRef, useState } from "react"
import { twMerge } from "tailwind-merge";
import SpinnerIcon from "../icons/loadingicon";
import { LucideCheck, LucideEye, LucideEyeOff, LucideFileWarning, LucideLoader } from "lucide-react";
import { IInput } from "@/app/interfaces/(inputs)/inputInterface";
import { EState, ETextSize, ETheme } from "@/app/enum/enumdata";

export const PassWordInput= ({ 
  description,
  leftSymbol,
  isFullWidth =true,
  textSize=ETextSize.LARGE,
  colorTheme=ETheme.SECONDARY_DARK,
  inState=EState.DEFAULT,
  ...rest }:IInput) => {
  const [eye,setOpen]=useState(true)
  const [value,setValue]=useState("")

  const textSizeCSS:{[key:string]:string}={
    [ETextSize.SMALL]:` text-sm py-1 px-1 `,
    [ETextSize.LARGE]:` text-lg py-1 px-1`,
    [ETextSize.XL]:` text-3xl py-1 px-1`,
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
  const colorStateCss:{[key:string]:string}={
    [EState.DEFAULT]:` text-grey-70`,
    [EState.ACTIVE]:` text-white `,
    [EState.DISABLE]:` text-grey-50 `,
    [EState.SUCCESS]:` text-success-600`,
    [EState.ERROR]:` text-error-600`,
  }
  const inputStyle=twMerge(
    colorCss[colorTheme],colorStateCss[inState],borderCSS[inState],textSizeCSS[textSize]
  )
  
 
  return (
    <div>
      <h3 className="text-white"> {description} </h3>
      <div className={`flex items-center ${inputStyle}`}>
        {leftSymbol}
        <input {...rest} 
          type={eye ? "text":"password"} className={`bg-inherit outline-none w-full`}
          value={value}
          onChange={(e)=>{setValue(e.target.value)}}
        />
        {value.length>0 &&<button className="font-bold" onClick={(e)=>{setValue('')}}>X</button>}
        {eye && <button onClick={()=>setOpen(false)}> <LucideEye cursor={"pointer"}/></button>}
        {!eye && <button onClick={()=>setOpen(true)}> <LucideEyeOff cursor={"pointer"}/></button>}    
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
