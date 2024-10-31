import { criarCartoes } from "./tela_de_cartoes.js"


document.addEventListener("DOMContentLoaded", () => {
    criarCartoes();
})

export async function excluirCartoes(index) {
    try {
        const response = await fetch('https://novo-dominio.com/produtos', {

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