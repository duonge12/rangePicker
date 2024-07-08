'use client';
import { ChangeEvent, ChangeEventHandler, EventHandler, ReactNode, forwardRef, useState } from "react"
import { twMerge } from "tailwind-merge";
import SpinnerIcon from "../icons/loadingicon";
import { LucideCheck, LucideFileWarning, LucideLoader, Rows } from "lucide-react";
import { MultilineInputProps } from "@/app/interfaces/(inputs)/inputInterface";
import { EState, ETextSize, ETheme } from "@/app/enum/enumdata";


export const MultilineInput= ({ 
  description,
  hasLeftCounter,
  hasRightCounter,
  textSize=ETextSize.LARGE,
  inState=EState.DEFAULT,
  colorTheme=ETheme.SECONDARY_DARK,
  isFullWidth,
  maxLength,
  ...rest }:MultilineInputProps) => {
  console.log("HEllo1")
  const [value,setValue]=useState("")
  const handleCount=(events: ChangeEvent<HTMLTextAreaElement>)=>{
      let element= events.target as HTMLTextAreaElement
      if(maxLength !== undefined){
        if(element.value.length<=maxLength){
            setValue(element.value)
        }
      }    
    }
  const textSizeCSS:{[key:string]:string}={
    [ETextSize.SMALL]:` text-sm py-1 px-1`,
    [ETextSize.LARGE]:` text-lg py-1 px-1`,
    [ETextSize.XL]:` text-xl py-1 px-1`,
  }
  const borderCSS:{[key:string]:string}={
    [EState.DEFAULT]:` border-none rounded-md`,
    [EState.ACTIVE]:` border-2 border-mint-300 rounded-md `,
    [EState.DISABLE]:` border-none pointer-events-none rounded-md`,
    [EState.LOADING]:` border-none rounded-md`,
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
    [EState.LOADING]:` text-white`,
    [EState.SUCCESS]:` text-success-600`,
    [EState.ERROR]:` text-error-600`,
  }
  
  const inputStyle=twMerge(
    textSizeCSS[textSize],colorCss[colorTheme],borderCSS[inState],colorStateCss[inState]
  )
  
  return (
    <div className={`inline-block flex-row ${isFullWidth ?`w-full`:``}`}>
      <div className="flex justify-between relative">
        <h3 className={colorStateCss[inState]}>{description}</h3>
        {((maxLength !== undefined)&& hasRightCounter) && <div className={colorStateCss[inState]}>{value.length}/{maxLength}</div>}
        {value.length!==0 &&
          <button onClick={()=>setValue('')} className="font-bold absolute -bottom-1 top-full right-1 text-white">X</button>}
      </div>
      
      <div className={inputStyle}>
        <textarea {...rest}
          value={value}
          maxLength={maxLength} 
          onChange={handleCount}  className={`bg-inherit outline-none w-full `}/>
        {((maxLength !== undefined)&& hasLeftCounter) && <div className={colorStateCss[inState]}>{value.length}/{maxLength}</div>}
               
      </div>
      {(inState===EState.LOADING) &&
        <div className={`${colorStateCss[inState]} flex`}>
            <SpinnerIcon/> 
            <span> Loading....</span>
        </div>
      }
      {(inState===EState.DEFAULT||inState===EState.ACTIVE||inState===EState.DISABLE) &&
        <div className={`${colorStateCss[inState]} flex`}>
            <span> Hint</span>
        </div>
      }
      {(inState===EState.ERROR) &&
        <div className={`${colorStateCss[inState]} flex`}>
            <LucideFileWarning/>
            <span> Error</span>
        </div>
      }
      {(inState===EState.SUCCESS) &&
        <div className={`${colorStateCss[inState]} flex`}>
            <LucideCheck/><span> Successed</span>
        </div>
      }
    </div>
    )
  };
