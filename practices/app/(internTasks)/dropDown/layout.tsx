'use client';
import { Button } from "@/app/_components/buttons/button";
import { MultilineInput } from "@/app/_components/inputs/multilineInput";
import { PassWordInput } from "@/app/_components/inputs/passwordInput";
import { PhoneInput } from "@/app/_components/inputs/phoneInput";
import { SimpleInput } from "@/app/_components/inputs/simpleInput";
import { SearchDrop } from "@/app/_components/lists/(parents)/dropDownSearch";
import { EState, ETheme } from "@/app/enum/enumdata";
import { IData } from "@/app/interfaces/(data)/dataInterface";
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
    const arr: IData[]=[
        {
            name:'Tiger',
            value:'Strong and fast'
        },
        {
            name:'Bull',
            value:'Calm but dangerous'
        },
        {
            name:'Cat',
            value:'Cute and calm'
        },
        {
            name:'Human',
            value:'Smart and creative'
        },
        {
            name:'Crocodile',
            value:'Do not mess with me'
        }
    ]
    return(
        <div className="bg-black rounded-md flex-row w-[700px] mx-auto justify-center align-middle">
           <SearchDrop placeholder="Put your text here..." data={arr}/>
           
        </div>
    )
}