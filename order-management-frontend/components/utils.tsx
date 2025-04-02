
interface Props{
    children: any
}
export function Title({children}:Props){
    return <h2 className="text-slate-950 font-bold text-[18pt]">{children}</h2>
}