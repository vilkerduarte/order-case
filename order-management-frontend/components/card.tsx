import { BRL, dateTimeBR } from "@/lib/utils"

interface Order {
    key:any
    dados:{
        id: string
        produto: string
        valor: number
        cliente: string
        status: string
        dataCriacao: string
    }
}

function Cell({ label, children, className = '' }: any) {
    return (
        <div className={`flex flex-col text-[11pt] p-1 rounded bg-white/10 ${className}`}>
            <strong className="text-[9pt]">{label}</strong>
            {children}
        </div>
    )
}
export default function CardOrder(props: Order) {
    let { cliente, valor, id, produto, status, dataCriacao } = props.dados;

    return (
        <div className="rounded-md grid md:grid-cols-6 gap-1 mb-1 bg-slate-900 text-white p-1">
            <Cell className="md:col-span-2" label="Cliente">{cliente}</Cell>
            <Cell className="md:col-span-2" label="Produto">{produto}</Cell>
            <Cell label="Valor">{<>{BRL(valor)}</>}</Cell>
            <Cell label="Status">{status}</Cell>
            <div className="flex flex-row justify-between md:col-span-6 text-[11pt] p-1 rounded bg-white/10 ">
                <span className="text-[8pt] text-neutral-300 italic">{id}</span>
                <span className="text-[8pt] text-neutral-300 italic">{dateTimeBR(dataCriacao)}</span>
            </div>
        </div>
    )
}