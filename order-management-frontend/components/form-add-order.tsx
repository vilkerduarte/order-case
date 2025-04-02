import { useEffect, useState } from "react";
import { Button, Input, Label } from "./utils";

export default function FormAdd({ onSend }: any) {
    const [data, setData] = useState({
        produto: '',
        cliente: '',
        valor: ''
    });
    return (
        <div className={`flex flex-col`}>
            <Label label="Cliente"><Input placeholder="Cliente" value={data.produto} onChange={(e:any)=>{setData({...data,produto:e.target.value})}}/></Label>
            <Label label="Produto"><Input placeholder="Produto" value={data.cliente} onChange={(e:any)=>{setData({...data,cliente:e.target.value})}}/></Label>
            <Label label="Valor"><Input type="number" step="0.01" min="0" placeholder="Valor" value={data.valor} onChange={(e:any)=>{setData({...data,valor:e.target.value})}}/></Label>
            <div className="mt-4">
                <Button onClick={()=>{
                    onSend(data)
                }}>Adicionar</Button>
            </div>
        </div>
    )
}