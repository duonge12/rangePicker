'use client';
import { Button } from "@/app/_components/buttons/button";
import { MultilineInput } from "@/app/_components/inputs/multilineInput";
import { PassWordInput } from "@/app/_components/inputs/passwordInput";
import { PhoneInput } from "@/app/_components/inputs/phoneInput";
import { SimpleInput } from "@/app/_components/inputs/simpleInput";
import { SearchDrop } from "@/app/_components/lists/(parents)/dropDownSearch";
import { RangePicker } from "@/app/_components/rangePicker/simpleRangePicker";
import { EState, ETheme } from "@/app/enum/enumdata";
import { IData } from "@/app/interfaces/(data)/dataInterface";

import { ReactNode, useState } from "react";
interface ILayoutProps
{
    children?:ReactNode
}
export default function Layout(
    {children}:ILayoutProps
){
   
    return(
        <div className="w-[200px] mx-auto">
          <RangePicker/>
           
        </div>
    )
}