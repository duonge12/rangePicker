import { EState, ETextSize, ETheme } from "@/app/enum/enumdata"
import { ReactNode } from "react"


export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    textSize?:ETextSize.SMALL|ETextSize.MEDIUM|ETextSize.LARGE|ETextSize.XL
    leftSymbol?:ReactNode
    rightSymbol?:ReactNode
    children?:ReactNode
    isLoading?:boolean
    isFullWidth?:boolean
    className?:string
    colorTheme?:ETheme.PRIMARY_DARK|ETheme.PRIMARY_WHITE|ETheme.SECONDARY_DARK|ETheme.TEXT_DARK
    inState?:EState.DEFAULT|EState.ACTIVE|EState.DISABLE|EState.ERROR|EState.LOADING|EState.SUCCESS
}