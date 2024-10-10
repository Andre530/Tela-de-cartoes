let nome = ["CARTAO1", "CARTAO2", "CARTAO3", "CARTAO4", "CARTAO5", "CARTAO6", "CARTAO7", "CARTAO8", "CARTAO9", "CARTAO10", "CARTAO11", "CARTAO12"]
let valores = ["R$9,99", "R$14,50", "R$25,00", "R$34,90", "R$49,99", "R$59,00", "R$79,99", "R$99,90", "R$129,50  ", "R$199,99", "R$299,00", "R$49,99"]
//let img = ['https://services.meteored.com/img/article/o-misterio-da-antimateria-solucionado-novo-experimento-comprova-como-a-antimateria-interage-1695942655165_1280.png']



export function criarCartoes() {
   let sectionCartoes = document.getElementById('cartoes')
    
    for (let i = 0; i < nome.length; i++) {
        let cartao = document.createElement('div');
        cartao.className = 'cartao'
        let h1 = document.createElement('h1');
        h1.textContent = nome[i]
        let h3 = document.createElement('h3');
        h3.textContent = valores[i]
       // let img = document.createElement('img')
       // imgTag.src = imagem[i]




        cartao.appendChild(h1);
       // cartao.appendChild(imgTag)
        cartao.appendChild(h3);
        sectionCartoes.appendChild(cartao);
    }
}

