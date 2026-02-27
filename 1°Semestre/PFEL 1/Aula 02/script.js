const modalCliente = document.getElementById("modalCliente");
var clientes = [];

document.addEventListener("DOMContentLoaded",renderizarTabela);

function abrirModal(){
    document.getElementById("modal").style.display="block";
}

function fecharModal(){
    document.getElementById("modal").style.display="none";
    limparCampos();
}

const cadCli = document.getElementById("cadCli");
cadCli.addEventListener("submit", f => {
    f.defaultPrevented();
    let cpf = document.getElementById("cpf").value;
    let nome = document.getElementById("nome").value;
    let sobrenome = document.getElementById("sobrenome").value;
    let nascimento = document.getElementById("nascimento").value;
    //Adicionar os campos na lista clientes
    clientes.push({cpf, nome, sobrenome, nascimento});
    renderizarTabela();
    fecharModal();
});

function renderizarTabela(){
    const dados = document.getElementById("dados");
    dados.innerHTML = ""; //limpa todas as linhas da tabela
    //Percorrer a lista preenchendo a tabela novamente
    clientes.forEach((c, i) =>{
    dados.innerHTML += `
    <tr> 
        <td>${c.cpf}</td>
        <td>${c.nome}</td>
        <td>${c.sobrenome}</td>
        <td>${c.nascimento}</td>
        <td><button onclick= "excluir(${i})">Excluir</button></td>
    </tr>
    `;

    });
}

function excluir(indice){
   clientes.slice(indice,1);
   renderizarTabela();
}

// function limparCampos(){
//     document.getElementById("cpf").value = "";
//     document.getElementById("nome").value = "";
//     document.getElementById("sobrenome").value = "";
//     document.getElementById("nascimento").value = "";
// }