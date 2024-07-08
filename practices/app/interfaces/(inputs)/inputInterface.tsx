import { EState, ETextSize, ETheme } from "@/app/enum/enumdata"
import { ReactNode } from "react"
import { IData } from "../(data)/dataInterface"


export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    description?:string
    leftSymbol?:ReactNode
    rightSymbol?:ReactNode
    isFullWidth?:boolean
    textSize?:ETextSize.SMALL|ETextSize.MEDIUM|ETextSize.LARGE|ETextSize.XL
    colorTheme?:ETheme.PRIMARY_DARK|ETheme.PRIMARY_WHITE|ETheme.SECONDARY_DARK|ETheme.TEXT_DARK
    inState?:EState.DEFAULT|EState.ACTIVE|EState.DISABLE|EState.ERROR|EState.LOADING|EState.SUCCESS
}
export interface MultilineInputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    description?:string
    hasLeftCounter?:boolean
    hasRightCounter?:boolean
    isFullWidth?:boolean
    textSize?:ETextSize.SMALL|ETextSize.MEDIUM|ETextSize.LARGE|ETextSize.XL
    colorTheme?:ETheme.PRIMARY_DARK|ETheme.PRIMARY_WHITE|ETheme.SECONDARY_DARK|ETheme.TEXT_DARK
    inState?:string
    maxLength?:number
}
export interface ISearchDrop extends IInput {
    data?:IData[]
   
}


