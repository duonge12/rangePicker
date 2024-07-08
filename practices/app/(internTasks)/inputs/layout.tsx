'use client';
import { Button } from "@/app/_components/buttons/button";
import { MultilineInput } from "@/app/_components/inputs/multilineInput";
import { PassWordInput } from "@/app/_components/inputs/passwordInput";
import { PhoneInput } from "@/app/_components/inputs/phoneInput";
import { SimpleInput } from "@/app/_components/inputs/simpleInput";
import { EState, ETheme } from "@/app/enum/enumdata";
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
    const [state,setState]=useState(EState.DEFAULT)
    const bttnDefault=()=>{
        setState(EState.DEFAULT)
    }
    const bttnActive=()=>{
        setState(EState.ACTIVE)
    }
    const bttnDisable=()=>{
        setState(EState.DISABLE)
    }
    const bttnLoading=()=>{
        setState(EState.LOADING)
    }
    const bttnSuccess=()=>{
        setState(EState.SUCCESS)
    }
    const bttnError=()=>{
        setState(EState.ERROR)
    }
    const bttnGetPhoneNumber=()=>{
        let input=document.getElementById('input') as HTMLInputElement

        alert(input.value)
    }
    return(
        <div className="bg-black flex-row w-full justify-center align-middle">
            {children}
            
                <div className=" mx-2 w-[400px] inline-block">
                    <h1 className="my-6 font-extrabold text-3xl text-white">Simple input</h1>
                    <SimpleInput 
                        placeholder="Put your text here....." 
                        inState={state} 
                        description="Description (optional)"/>
                    <SimpleInput 
                        leftSymbol={<LucideStar/>} 
                        placeholder="Put your text here....." 
                        inState={state} description="Description (optional)"/>
                    <SimpleInput 
                        rightSymbol={<LucideStar/>} 
                        placeholder="Put your text here....." 
                        inState={state} 
                        description="Description (optional)"/>
                </div>
            
                <div className="mx-2 w-[400px] inline-block">
                    <h1 className="my-6 font-extrabold text-3xl text-white">Multiline input</h1>
                    <MultilineInput 
                        isFullWidth={true} 
                        description="Description" 
                        placeholder="Put your text here......" 
                        inState={state} 
                        maxLength={10}
                        />
                    <MultilineInput 
                        isFullWidth={true} 
                        description="Description" 
                        placeholder="Put your text here......" 
                        inState={state} 
                        maxLength={10}
                        hasLeftCounter={true}/>
                    <MultilineInput 
                        isFullWidth={true} 
                        description="Description" 
                        placeholder="Put your text here......" 
                        inState={state} 
                        maxLength={10}
                        hasRightCounter={true}/>
                </div>
                <div className="mx-2 w-[400px] inline-block">
                    <h1 className="my-6 font-extrabold text-3xl text-white">Password input</h1>
                    <PassWordInput 
                        description="Description"
                        placeholder="Put your pass here" 
                        leftSymbol={<LucideStar/>}
                        inState={state}
                        />
                    <PassWordInput 
                        description="Description"
                        placeholder="Put your pass here"
                        inState={state}
                         />
                </div>
                <div className="mx-2 w-[400px] inline-block">
                    <h1 className="my-6 font-extrabold text-3xl text-white">Phone input</h1>
                    <PhoneInput 
                        id='input'
                        description="Description"
                        placeholder="Put phone number here...."
                        inState={state}
                        />
                </div>
           
            <div>
                <Button colorTheme={ETheme.PRIMARY_WHITE} onClick={bttnDefault}> Default</Button>
                <Button onClick={bttnActive}>Active</Button>
                <Button onClick={bttnDisable}>Disable</Button>
                <Button isLoading={true} onClick={bttnLoading}>Loading</Button>
                <Button onClick={bttnSuccess}>{<LucideStar/>}Success</Button>
                <Button onClick={bttnError}>Error{<LucideFileWarning/>}</Button>
                <Button onClick={bttnGetPhoneNumber}>GetPhoneNumber{<LucidePhone/>}</Button>
            </div>
           
           
        </div>
    )
}