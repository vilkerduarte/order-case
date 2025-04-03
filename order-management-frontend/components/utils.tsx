import { Component, ReactElement } from "react"
import { BiLoaderAlt, BiLoaderCircle } from "react-icons/bi"

interface Props{
    children: any
}
export function Title({children}:Props){
    return <h2 className="text-slate-950 font-bold text-[18pt]">{children}</h2>
}
interface LoadingButtomProps{
    onClick:Function|undefined
    loading:boolean
    Icon:any
    children:any
}
export function LoadingButtom({onClick,Icon,loading=false,children}:LoadingButtomProps){
    return (
    <Button onClick={onClick}>
        <div className="relative flex items-center gap-2">
            {loading ? <BiLoaderCircle className="animate-spin"/> : <Icon/> }{children}
        </div>
    </Button>)
}

export function Button(props:any){
    return <button className="bg-slate-900 cursor-pointer hover:bg-slate-800 transition-all hover:scale-95 text-white text-[10pt] px-4 py-2" {...props}/>
}

export function Input(props:any){
    return <input type="text" className="bg-neutral-100 rounded outline-none transition-all focus:shadow-xl hover:ring-1 focus:ring-2 ring-blue-900/20 text-slate-900 text-[10pt] px-4 py-2" {...props}/>
}

export function Label({label,children}:any){
    return (
        <div className="flex flex-col">
            <strong className="text-[8pt] text-slate-800]">{label}</strong>
            {children}
        </div>
    )
}