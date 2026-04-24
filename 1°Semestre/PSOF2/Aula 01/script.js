const url = 'https://receitasapi-b-2025.vercel.app';
const receitas = [];
let receitaAtual = null;

carregarReceitas();

function carregarReceitas(){
    fetch(url + '/receitas')
    .then(response => response.json())
    .then(data =>{
        receitas.length = 0;
        receitas.push(...data);
        listarCards();
    })
    .catch(e =>alert('Problemas com a conexão da API'));
}

function listarCards(){
    const container = document.querySelector('#lista-receitas');
    container.innerHTML = '';

    receitas.forEach(receita =>{
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
        <h3>${receita.nome}</h3>
        <img src="${receita.img}" alt="${receita.nome}">
        <p>Custo Aproximado: ${receita.custoAproximado ?? '-'}</p>

        <button onclick="excluirReceita(${receita.id})">
        Excluir
        </button>
        `;

        container.appendChild(card);
    });
}

function excluirReceita(id){
    if(!confirm("Deseja excluir esta receita?")) return;

    fetch(url + '/receitas/' + id,{
        method:'DELETE'
    })
    .then(()=>{
        alert("Receita excluída com sucesso!");
        carregarReceitas();
    })
    .catch(()=>alert("Erro ao excluir"));
}

function abrirReceita(receita){
    receitaAtual = receita;
    tituloReceita.innerHTML = receita.nome;
    nomeEdit.value = receita.nome;
    imgReceita.src = receita.img;
    imgEdit.value = receita.tipo;
    tipoEdit.value = receita.tipo;
    ingredientesEdit.value = receita.ingredientes;
    modoEdit.value = receita.modoFazer;
    custoEdit.value = receita.custoAproximado ?? '';
    detalhes.classList.remove('oculto');
}

imgEdit?.addEventListener("input", () => {
    imgReceita.src = imgEdit.value;
});

document.querySelector('#formCad')?.addEventListener('submit',function(e){
    e.preventDefault();

    const novaReceita = {
        nome: nome.value,
        tipo: tipo.value,
        ingredientes: ingredientes.value,
        modoFazer: modoFazer.value,
        img: urlImagem.value,
        custoAproximado: custoAproximado.value 
            ? Number(custoAproximado.value) 
            : null
    };

    fetch(url + '/receitas',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(novaReceita)
    })
    .then(()=>{
        alert("receita adicionada com sucesso!");
        carregarReceitas();
    })
    .catch(()=>alert("Erro ao salvar a receita"));
});




















// let receitaEditando = null;

// async function buscarReceitas() {
//     const dados = await fetch(api).then(res => res.json());

//     const lista = document.getElementById("lista-receitas");
//     lista.innerHTML = "";

//     dados.forEach(receita => {
//         lista.innerHTML += `
//             <div class="card">
//                 <img src="${receita.img}">
//                 <h3>${receita.nome}</h3>
//                 <p>${receita.tipo}</p>
//                 <p>${receita.custoAproximado}</p>

//                 <button onclick="editar(${receita.id})">Editar</button>
//                 <button onclick="deletar(${receita.id})">Excluir</button>
//             </div>
//         `;
//     });
// }

// function abrirModal() {
//     document.getElementById("modal").style.display = "block";
// }

// function fecharModal() {
//     document.getElementById("modal").style.display = "none";
//     receitaEditando = null;
// }

// async function salvarReceita() {

//     const receita = {
//         nome: document.getElementById("nome").value,
//         tipo: document.getElementById("tipo").value,
//         ingredientes: document.getElementById("ingredientes").value,
//         modoFazer: document.getElementById("modoFazer").value,
//         img: document.getElementById("img").value,
//         custoAproximado: parseFloat(document.getElementById("custo").value)
//     };

//     if (receitaEditando) {
//         await fetch(`${api}/${receitaEditando}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(receita)
//         });
//     } else {
//         await fetch(api, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(receita)
//         });
//     }

//     fecharModal();
//     buscarReceitas();
// }

// async function editar(id) {
//     const dados = await fetch(`${api}/${id}`).then(res => res.json());

//     document.getElementById("nome").value = dados.nome;
//     document.getElementById("tipo").value = dados.tipo;
//     document.getElementById("ingredientes").value = dados.ingredientes;
//     document.getElementById("modoFazer").value = dados.modoFazer;
//     document.getElementById("img").value = dados.img;
//     document.getElementById("custo").value = dados.custoAproximado;

//     receitaEditando = id;
//     abrirModal();
// }

// async function deletar(id) {
//     await fetch(`${api}/${id}`, {
//         method: "DELETE"
//     });

//     buscarReceitas();
// }

// buscarReceitas()