import { ILi } from "@/app/interfaces/(lists)/(children)/li"
import { Button } from "../../buttons/button"
import { useEffect, useState } from "react"

export const Li=(
    {
        name,
        children,onDestroy,...rest
    }:ILi
)=>{
   
  

    
    return(
        <li className="w-full border-2 rounded-md border-black flex justify-between" {...rest} >
             <div className=" mx-1 flex-row inline-block">
                <h1 className="text-xl font-extrabold">
                    {name}
                </h1>
                {children}
                
               
            </div>
           
            <Button onClick={onDestroy}>X</Button>
               
           
           
        </li>
    )
}