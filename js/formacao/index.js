import { criarCartoes } from "./tela-de-cartoes.js"


document.addEventListener("DOMContentLoaded", () => {
    criarCartoes();
})

export async function excluirCartoes(index) {
    try{
        const response = await fetch ('http://localhost:3000/produtos', {
            method 'DELETE'
            headers: {
                'Content-Type' : 'applications/json'

            }
            body: JSON.stringify({cartao: index})
        })
        criarCartoes()
    }
    catch(e)
    console.log(e)
}