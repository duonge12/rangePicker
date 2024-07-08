'use client';
import { EState, ETextSize, ETheme } from "@/app/enum/enumdata";
import { IInput } from "@/app/interfaces/(inputs)/inputInterface";
import { ChangeEvent, useState } from "react";
import SpinnerIcon from "../icons/loadingicon";
import { LucideCheck, LucideFileWarning } from "lucide-react";
import { twMerge } from "tailwind-merge";



export const PhoneInput= ({ 
  description,
  leftSymbol,
  rightSymbol,
  isFullWidth,
  textSize=ETextSize.LARGE,
  colorTheme=ETheme.SECONDARY_DARK,
  inState=EState.DEFAULT,
  ...rest }:IInput
) => {
  const [nation,setNation]=useState('+1')
  const [phone,setPhone]=useState('')

  const handleItemSelected=(e: ChangeEvent<HTMLSelectElement>)=>{
    setNation(e.target.value)
  }
  const handleInputOnChange=(e: ChangeEvent<HTMLInputElement>)=>{
    let str=e.target.value
    let char=str.substring((nation+phone).length+1)
    if (e.nativeEvent instanceof InputEvent && e.nativeEvent.inputType === 'deleteContentBackward') {
      // Handle backspace
      setPhone(phone.slice(0, -1)); // Remove last character from phone
    }
    else if(!isNaN(Number(char))){
      setPhone(phone+char)
    }
  }
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
    textSizeCSS[textSize],colorCss[colorTheme],borderCSS[inState]
  )
  return (
    <div>
      <h3 className="text-white"> {description} </h3>
      <div className={inputStyle}>
      <select value={nation} onChange={handleItemSelected} className="bg-inherit outline-none">
          <option value="+1"> America </option>
          <option value="+84"> Vietnam </option>
          <option value="+7"> Russia </option>
          <option value="+39"> Italy </option>
          <option value="+86"> China </option>
      </select>
          <input
            className={`bg-inherit outline-none`}
            value={nation+' '+phone} onChange={handleInputOnChange} type="tel" {...rest} onBlur={handleInputOnChange} />
          {phone.length!==0 &&<button className=" font-bold " onClick={(e)=>{setPhone('')}}> X </button>}   
      </div>
      
      {(inState===EState.LOADING) &&
        <div className="flex text-white">
            <SpinnerIcon/> 
            <span> Loading.... </span>
        </div>
      }
      {(inState===EState.DEFAULT||inState===EState.ACTIVE||inState===EState.DISABLE) &&
        <div className="flex text-white">
            <span> Hint </span>
        </div>
      }
      {(inState===EState.ERROR) &&
        <div className="flex text-white">
            <LucideFileWarning/>
            <span> Error </span>
        </div>
      }
      {(inState===EState.SUCCESS) &&
        <div className="flex text-white">
            <LucideCheck/>
            <span> Successed</span>
        </div>
      }
    </div>
    )
  };
