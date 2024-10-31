import { criarCartoes } from "./tela-de-cartoes.js"


document.addEventListener("DOMContentLoaded", () => {
    criarCartoes();
})

export async function excluirCartoes(index) {
    try {
        const response = await fetch('https://back-end-bay-gamma.vercel.app/produtos', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify({ cartao: index })
        });
        criarCartoes();
    } catch (e) {
        console.log(e);
    }
}