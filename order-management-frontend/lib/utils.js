export async function getOrders(host,callback,errorCallback){
    try {
        let list = await fetch(`${host}/orders`,{mode:'cors'});
        list = await list.json();
        callback(list);
    } catch (error) {
        errorCallback(error)
    }
}
export function BRL(n){
    return parseFloat(n).toLocaleString('pt-BR',{style:'currency', currency:'BRL'});
}
export function dateTimeBR(date){
    return (new Date(Date.parse(date))).toLocaleString('pt-BR',{dateStyle:'short',timeStyle:'short'})
}