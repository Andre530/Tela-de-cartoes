export async function criarCartoes() {
    let sectionCartoes = document.getElementById('cartao')

    try {
        const response = await fetch('http://localhost:3000/produtos')
        const data = await response.json();
        const produtos = data.produtos;

        for (let i = 0; i < produtos.length; i++) {
            let cartao = document.createElement('div');
            cartao.className = 'cartao'
            let h1 = document.createElement('h1');
            h1.textContent = produtos[i].nome
            let h3 = document.createElement('h3');
            h3.textContent = produtos[i].valores
            let img = document.createElement('img')
            img.src = produtos[i].img

            let button = document.createElement('button')
            button.className = 'button_card';
            button.textContent = 'EXCLUIR'
            button.addEventListener('click', ()=>{

            })
            cartao.appendChild(h1);
            cartao.appendChild(img)
            cartao.appendChild(h3);
            cartao.appendChild(button)


            sectionCartoes.appendChild(cartao);
        }
    } catch (e) {
        alert(e)
    }
let cartaoAdd = document.createElement('button')
cartaoAdd.className = 'cartao'
cartaoAdd.textContent = '+'
cartaoAdd.addEventListener('click', ()=>{
    mostrarTelaCad()
})
sectionCartoes.appendChild(cartaoAdd)
}





