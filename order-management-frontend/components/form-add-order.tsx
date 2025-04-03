import { useEffect, useState } from "react";
import { Button, Input, Label, LoadingButtom } from "./utils";
import { FaFileCirclePlus } from "react-icons/fa6";
import { BiPlus } from "react-icons/bi";

export default function FormAdd({ onSend,loading=false,clear='random_string' }: any) {
    const [data, setData] = useState({
        produto: '',
        cliente: '',
        valor: ''
    });
    useEffect(()=>{
        let eventHandler = ()=>{
            setData({
                produto: '',
                cliente: '',
                valor: ''
            });
        }
        window.addEventListener('clearAddForm',eventHandler);
        return ()=>{
            window.removeEventListener('clearAddForm',eventHandler);
        }

    },[])
    return (
        <div className={`flex flex-col`} onKeyDown={(e)=>{
            if(e.key == 'Enter'){
                onSend(data)
            }
        }}>
            <Label label="Cliente"><Input placeholder="Cliente" value={data.cliente} onChange={(e:any)=>{setData({...data,cliente:e.target.value})}}/></Label>
            <Label label="Produto"><Input placeholder="Produto" value={data.produto} onChange={(e:any)=>{setData({...data,produto:e.target.value})}}/></Label>
            <Label label="Valor"><Input type="number" step="0.01" min="0" placeholder="Valor" value={data.valor} onChange={(e:any)=>{setData({...data,valor:e.target.value})}}/></Label>
            <div className="mt-4">
                <LoadingButtom Icon={BiPlus} onClick={()=>{
                    onSend(data)
                }} loading={loading}>Adicionar</LoadingButtom>
            </div>
        </div>
    )
}