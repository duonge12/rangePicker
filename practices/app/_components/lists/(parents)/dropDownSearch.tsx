'use client';
import { EState, ETextSize } from "@/app/enum/enumdata"
import { IData } from "@/app/interfaces/(data)/dataInterface"
import { ISearchDrop } from "@/app/interfaces/(inputs)/inputInterface"
import { ChangeEvent, useEffect, useState } from "react"
import { SimpleInput } from "../../inputs/simpleInput"
import { LucideSearch } from "lucide-react"
import { Li } from "../(children)/simpleList";
import { Button } from "../../buttons/button";



export const SearchDrop=(
{
    textSize=ETextSize.MEDIUM,
    inState=EState.DEFAULT,data,placeholder,...rest
}:ISearchDrop
)=>{
    const [drop,setDrop]=useState(true)
    const [value,setValue]=useState('')

    const [list,setList]=useState<IData[]>(data as IData[])
    const [displayList,setDisplayList]=useState<IData[]>(list)
    const [removeList,addRemoveList]=useState<IData[]>([] as IData[])
   
    const handleSearching=(e: ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
    const onDestroy=(data: IData)=>{
        let newList=list?.filter(item=> item.name!== data.name)
        setList(newList)
        addRemoveList([...removeList,data])
    }
    const onAdd=(data: IData)=>{
        setList([...list,data])
        let newList=removeList.filter(item=>item!==data)
        addRemoveList(newList)
    }
    useEffect(()=>{
        let newList=list.filter(item=> item.name.toLowerCase().startsWith(value.toLowerCase()))
        console.log(value)
        setDisplayList(newList)
    },[value])
    useEffect(()=>{
        let newList=list.filter(item=> item.name.toLowerCase().startsWith(value.toLowerCase()))
        setDisplayList(newList)
    },[list])
    
    return(
        <div className="inline-block w-full relative">
            <div className={removeList.length===0?` hidden`: ` px-2 py-1`}>
               {removeList.length>0 && removeList.map(item=>
                <Button key={item.name} onClick={()=>onAdd(item)}>{item.name}</Button>
               )}
            </div>
            <button onClick={handleDrop} className="w-full">
                <SimpleInput placeholder={placeholder} textSize={ETextSize.XL} value={value} onChange={handleSearching}  id="inputID" leftSymbol={<LucideSearch/>} />
            </button>
            <ul className={`absolute ${drop ? `hidden`:`visible`} left-0 right-0`}>
                {
                   (displayList!== undefined)&& displayList.map(item =>(
                            <Li 
                                key={item.name} 
                                name={item.name} 
                                value={item.value} 
                                onDestroy={()=>onDestroy(item)}>
                                <span>{item.value}</span>
                            </Li>
                        )
                    )
                }
            </ul>
           
        </div>
    )
    function handleDrop(){
        if(drop===true)
            setDrop(false)
        else
            setDrop(true)
    }
   
}