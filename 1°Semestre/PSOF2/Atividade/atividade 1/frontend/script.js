const url = 'http://localhost:3000';

const pecasFixas = [
{
id: -1,
nome: "Brinco Ouro 18k com Diamantes",
categoria: "Brinco",
imagem: "brinco.gota.webp",
preco: 15890,
pedras: "Diamantes",
colecao: "Luxo"
},
{
id: -2,
nome: "Anel Ouro 18k com Diamantes",
categoria: "Anel",
imagem: "anel.png",
preco: 8590,
pedras: "Diamantes",
colecao: "Luxo"
},
{
id: -3,
nome: "Brinco Pérola Coração",
categoria: "Brinco",
imagem: "Brinco Argola Pérola Coração - Dourado.jpg",
preco: 250,
pedras: "Pérola",
colecao: "Romântica"
},
{
id: -4,
nome: "Colar Ponto de Luz Zircônia",
categoria: "Colar",
imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAE-GTO6PDfEeQvJY7xVSXOCIu4nzcQntWJQ&s",
preco: 220,
pedras: "Zircônia",
colecao: "Clássica"
},
{
id: -5,
nome: "Pulseira Ouro Delicada",
categoria: "Pulseira",
imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6tGBeshY4rZ9NzjuRupp9ObZsKp_WFB18zA&s",
preco: 480,
pedras: "Sem pedra",
colecao: "Minimalista"
},
{
id: -6,
nome: "Brinco Argola Dourado Luxo",
categoria: "Brinco",
imagem: "https://pandorajoias.vtexassets.com/arquivos/ids/382549/PNGTRPNT_262738C01_RGB.png?v=638853751095600000",
preco: 159.90,
pedras: "Zircônia",
colecao: "Luxo"
},
{
id: -7,
nome: "Anel Prata com Diamante",
categoria: "Anel",
imagem: "https://http2.mlstatic.com/D_NQ_NP_650417-MLB95530769068_102025-O-anel-de-prata-solitario-2mm-pedra-branca-zircnia-noiva-luxo.webp",
preco: 2210,
pedras: "Diamante",
colecao: "Noiva"
},
{
id: -8,
nome: "Colar Pingente Coração",
categoria: "Colar",
imagem: "https://ecom-qyvlxqgk.sfo2.digitaloceanspaces.com/@v2-1595479397630-colar-com-pingente-de-coracao-619231_0.jpg",
preco: 145,
pedras: "Zircônia",
colecao: "Romântica"
},
{
id: -9,
nome: "Bracelete Dourado Minimalista",
categoria: "Pulseira",
imagem: "https://down-br.img.susercontent.com/file/br-11134207-81z1k-mgib3sfbwah378",
preco: 320,
pedras: "Sem pedra",
colecao: "Minimalista"
},
{
id: -10,
nome: "Colar Ouro Pingente Flor",
categoria: "Colar",
imagem: "https://cdn.dooca.store/3126/products/colar-de-ouro-18k-feminino-rommanel-elo-cadeado-com-pingente-flor-rosa-da-bela-colorido-disney-50cm-45cm-532519.jpg?v=1711232470",
preco: 540,
pedras: "Zircônia",
colecao: "Primavera"
},
{
id: -11,
nome: "Anel Dourado Pedra Verde",
categoria: "Anel",
imagem: "https://lojavivarafsv3.vtexassets.com/arquivos/ids/894985-1600-1600/Anel-Life-Bellini-em-Prata-925-com-Banho-de-Ouro-Amarelo-18k-Pedras-Verdes-Amarelas-e-Incolores-102122_1_set.jpg?v=638687700944000000",
preco: 390,
pedras: "Esmeralda sintética",
colecao: "Elegante"
}
];

let pecas = [];
let pecaAtual = null;

carregarPecas();

function carregarPecas(){
    fetch(url + '/listar')
    .then(response => response.json())
    .then(data =>{
        pecas = [...pecasFixas, ...data];
        listarCards();
    })
    .catch(()=>{
        pecas = [...pecasFixas];
        listarCards();
    });
}

function listarCards(){
    const container = document.querySelector('#cards');
    container.innerHTML = '';

    pecas.forEach(peca =>{
        const card = document.createElement('div');
        card.classList.add('box');

        card.innerHTML = `
        <img src="${peca.imagem}">
        <p class="nome">${peca.nome}</p>
        <p class="valor">R$ ${Number(peca.preco).toFixed(2)}</p>
        <button onclick="abrirDetalhes(${peca.id})">Ver</button>
        `;

        container.appendChild(card);
    });
}

function abrirDetalhes(id){
    pecaAtual = pecas.find(p => p.id == id);

    tituloReceita.innerHTML = pecaAtual.nome;
    imgReceita.src = pecaAtual.imagem;

    nomeEdit.value = pecaAtual.nome;
    imgEdit.value = pecaAtual.imagem;
    precoEdit.value = pecaAtual.preco;
    categoriaEdit.value = pecaAtual.categoria;
    pedrasEdit.value = pecaAtual.pedras;
    colecaoEdit.value = pecaAtual.colecao;

    detalhes.classList.remove('oculto');
}

imgEdit.addEventListener("input", () => {
    imgReceita.src = imgEdit.value;
});

document.querySelector('#formCad').addEventListener('submit', function(e){
    e.preventDefault();

    const novaPeca = {
        nome: nome.value,
        imagem: imagem.value,
        preco: Number(preco.value),
        categoria: tipo.value,
        pedras: pedras.value,
        colecao: colecao.value
    };

    fetch(url + '/cadastrar', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(novaPeca)
    })
    .then(()=>{
        alert("Peça adicionada com sucesso!");
        cadastro.classList.add('oculto');
        carregarPecas();
    })
    .catch(()=>alert("Erro ao salvar peça"));
});

function salvarEdicao(){
    const pecaEditada = {
        nome: nomeEdit.value,
        imagem: imgEdit.value,
        preco: Number(precoEdit.value),
        categoria: categoriaEdit.value,
        pedras: pedrasEdit.value,
        colecao: colecaoEdit.value
    };

    fetch(url + '/editar/' + pecaAtual.id, {
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(pecaEditada)
    })
    .then(()=>{
        alert("Peça atualizada com sucesso!");
        detalhes.classList.add('oculto');
        carregarPecas();
    })     
    .catch(()=>alert("Erro ao editar peça"));
}

function excluirReceitaAtual(){
    if(!confirm("Deseja excluir esta peça?")) return;

    fetch(url + '/excluir/' + pecaAtual.id,{
        method: 'DELETE'
    })
    .then(()=>{
        alert("Peça excluída com sucesso!");
        detalhes.classList.add("oculto");
        carregarPecas();
    })
    .catch(()=>alert('Erro ao excluir peça'));
}