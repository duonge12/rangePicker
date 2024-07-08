'use client';

import { EState, ETextSize, ETheme } from "@/app/enum/enumdata";
import { IInput } from "@/app/interfaces/(inputs)/inputInterface";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../buttons/button";


export const RangePicker=({
    description,
    isFullWidth=true,
    textSize=ETextSize.LARGE,
    inState=EState.DEFAULT,
    ...rest
    }:IInput
) => {
    
    const [value,setValue]=useState('Put your value here')
    const [start,setStart]=useState(0)
    const [end,setEnd]=useState(0)
    const [visible,setVisible]=useState(false)
    
    const handleStartChange=(e:ChangeEvent<HTMLInputElement>)=>{
        if(Number(e.target.value) >=0 && Number(e.target.value) <= Number(end))
            setStart(Number(e.target.value))
    }
    const handleEndChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setEnd(Number(e.target.value))
    }
    useEffect(()=>{
        if( !isNaN(Number(start)) && !isNaN(Number(end)) )
        {
            setValue(start+' VND to '+end+' VND' )
        }
        else
            isNaN(Number(start))? setValue('? to '+end+' $' ): setValue( start+' $ to '+' ?' )

    },[start,end])
    return (
      <div className="inline-block w-full">
        <button onClick={handleDrop}  className="border-2 w-full border-black rounded-md flex align-baseline">
            <input className={`${visible ? `w-full `: ` w-5/6`} w-5/6 text-center text-xl px-1 py-1 pointer-events-none outline-none`}  placeholder={value}/>
            <button onClick={handleDelete} className={`${visible?`hidden`:` w-1/6 my-auto text-center `}`}>X</button>
        </button>
        <div className={`${visible? `` :`hidden`} py-3 w-full border-2 border-black rounded-md justify-around`}>
            <div className="mx-5 y5 border-2 border-black rounded-xl flex justify-around">
                <input 
                    type="number" 
                    className="py-2 text-center w-2/5 outline-none" 
                    value={start}
                    onChange={handleStartChange}/>
                <span>|</span>
                <input 
                    type="number" 
                    className=" text-center w-2/5 outline-none" 
                    value={end}
                    onChange={handleEndChange}/>
            </div>
            <div className="mx-5 mt-2 flex justify-around">
                <Button className="px-4 py-1 rounded-xl" textSize={ETextSize.SMALL} onClick={handleDrop} colorTheme={ETheme.PRIMARY_DARK}>Apply</Button>
                <Button className="px-4 py-1 rounded-xl" textSize={ETextSize.SMALL} onClick={handleCancle} colorTheme={ETheme.PRIMARY_DARK}>Cancel</Button>
            </div>
        </div>
      </div>
      )
    function handleDrop(){
        visible==true? setVisible(false) : setVisible(true)
    }
    function handleCancle(){
       
        visible==true? setVisible(false) : setVisible(true)
    }
    function handleDelete(){
        setValue('Put your value here')
        visible==true? setVisible(false) : setVisible(true)
        setStart(0)
        setEnd(0)
    }
};