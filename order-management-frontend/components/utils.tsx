
interface Props{
    children: any
}
export function Title({children}:Props){
    return <h2 className="text-slate-950 font-bold text-[18pt]">{children}</h2>
}

export function Button(props:any){
    return <button className="bg-slate-900 text-white text-[10pt] px-4 py-2" {...props}/>
}

export function Input(props:any){
    return <input type="text" className="bg-neutral-100 rounded text-slate-900 text-[10pt] px-4 py-2" {...props}/>
}

export function Label({label,children}:any){
    return (
        <div className="flex flex-col">
            <strong className="text-[8pt] text-slate-800]">{label}</strong>
            {children}
        </div>
    )
}