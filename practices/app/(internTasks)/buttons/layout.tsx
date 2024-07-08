'use client';
import { Button } from "@/app/_components/buttons/button";
import { MultilineInput } from "@/app/_components/inputs/multilineInput";
import { PassWordInput } from "@/app/_components/inputs/passwordInput";
import { PhoneInput } from "@/app/_components/inputs/phoneInput";
import { SimpleInput } from "@/app/_components/inputs/simpleInput";
import { EState, ETextSize, ETheme } from "@/app/enum/enumdata";
import { LucideFileWarning, LucidePhone, LucideStar } from "lucide-react";
import { Span } from "next/dist/trace";
import { ReactNode, useState } from "react";
interface ILayoutProps
{
    children?:ReactNode
}
export default function Layout(
    {children}:ILayoutProps
){
   
    return(
        <div className="bg-slate-500 flex-row w-full justify-center align-middle">
            {children}
            
                <div className=" mx-2 w-[800px] inline-block">
                    <h1 className="my-6 font-extrabold text-3xl text-white">PRIMARY WHITE XL</h1>

                    <Button textSize={ETextSize.XL} colorTheme={ETheme.PRIMARY_WHITE}>Button</Button>
                    <Button leftSymbol={<LucideStar/>} textSize={ETextSize.XL} colorTheme={ETheme.PRIMARY_WHITE}>Button</Button>
                    <Button rightSymbol={<LucideStar/>} textSize={ETextSize.XL} colorTheme={ETheme.PRIMARY_WHITE}>Button</Button>
                    <Button textSize={ETextSize.XL} colorTheme={ETheme.PRIMARY_WHITE} isLoading={true}>Button</Button>
                    <Button textSize={ETextSize.XL} colorTheme={ETheme.PRIMARY_WHITE} inState={EState.DISABLE}>Button</Button>
                   
                </div>
                <div className=" mx-2 w-[800px] inline-block">
                    <h1 className="my-6 font-extrabold text-3xl text-white">PRIMARY DARK SMALL</h1>
                    <Button textSize={ETextSize.SMALL} colorTheme={ETheme.PRIMARY_DARK}>Button</Button>
                    <Button leftSymbol={<LucideStar/>} textSize={ETextSize.SMALL} colorTheme={ETheme.PRIMARY_DARK}>Button</Button>
                    <Button rightSymbol={<LucideStar/>} textSize={ETextSize.SMALL} colorTheme={ETheme.PRIMARY_DARK}>Button</Button>
                    <Button textSize={ETextSize.SMALL} colorTheme={ETheme.PRIMARY_DARK} isLoading={true}>Button</Button>
                    <Button textSize={ETextSize.SMALL} colorTheme={ETheme.PRIMARY_DARK} inState={EState.DISABLE}>Button</Button>
                   
                </div>
                <div className=" mx-2 w-[800px] inline-block">
                    <h1 className="my-6 font-extrabold text-3xl text-white">TEXT DARK LARGE</h1>

                    <Button 
                        textSize={ETextSize.LARGE} 
                        colorTheme={ETheme.TEXT_DARK}>Button</Button>
                    <Button 
                        leftSymbol={<LucideStar/>} 
                        textSize={ETextSize.LARGE} 
                        colorTheme={ETheme.TEXT_DARK}>Button</Button>
                    <Button 
                        rightSymbol={<LucideStar/>} 
                        textSize={ETextSize.LARGE} 
                        colorTheme={ETheme.TEXT_DARK}>Button</Button>
                    <Button 
                        textSize={ETextSize.LARGE} 
                        colorTheme={ETheme.TEXT_DARK} 
                        isLoading={true}>Button</Button>
                    <Button 
                        textSize={ETextSize.LARGE} 
                        colorTheme={ETheme.TEXT_DARK} 
                        inState={EState.DISABLE}>Button</Button>
                   
                </div>
            
             
        
           
           
        </div>
    )
}