function reajustar(){
    let salario = Number(document.getElementById("salario").value);
    let resultado1 = document.getElementById("resultado");
    let bonus = 0;

    if(salario > 2000){
        bonus = salario * 0.10;
    }

    let salComBonus = salario+bonus;

    resultado1.innerHTML =`Bônus de R$ ${bonus.toFixed(2)} <br>
    Salário final R$ ${salComBonus.toFixed(2)}
    `;
    
}
function reajustar2(){
    let valor = Number(document.getElementById("valor").value);
    let resultado2 = document.getElementById("res");
    let frete = 0;

    if(valor <= 150){
        frete = valor = 20;
    }

    let valComfret = valor+frete;

    resultado2.innerHTML =`
    Frete de R$ ${frete.toFixed(2)} <br>
    Valor final R$ ${valComfret.toFixed(2)}
    `;
 }

 function reajustar3(){
    let abastecido = Number(document.getElementById("abastecido").value);
    let resultado3 = document.getElementById("total");
    let des = 0;

    if(abastecido > 200){
        des = abastecido * 0.05;
    }

    let absComdes = abastecido-des;

    resultado3.innerHTML =`
    Valor de desconto de R$ ${des.toFixed(2)} <br>
    Valor final R$ ${absComdes.toFixed(2)}
    `;}
 function reajustar4(){
    let conta = Number(document.getElementById("conta").value);
    let resultado4 = document.getElementById("cal");
    let taxa = 0;

    if(conta > 100){
        taxa = conta * 0.10;
    }

    let valComTaxa = conta+taxa;

    resultado4.innerHTML =`
    Valor da taxa de R$ ${taxa.toFixed(2)} <br>
    Valor total da conta R$ ${valComTaxa.toFixed(2)}
    `;}

    function reajustar5(){
    let mensalidade = Number(document.getElementById('mensalidade').value);
    let dias = Number(document.getElementById('diasAtraso').value);
    let resultado5 = document.getElementById('calcula');
    let multa = 0;

    if (dias > 0) {
        multa = mensalidade * 0.02;
    }

    let valorMulta = mensalidade+multa;

    resultado5.innerHTML =
        `Valor da multa: R$ ${multa.toFixed(2)}<br>
         Total a pagar: R$ ${valorMulta.toFixed(2)}`;
    }
   
    function reajustar6(){
    let com = Number(document.getElementById('com').value);
    let resultado6 = document.getElementById('resultado6');
    let cashback = 0;

    if (com > 300) {
        cashback = com * 0.05;
    }

    let valorLiquido = com-cashback;

    resultado6.innerHTML =
        `Valor do cashback: R$ ${cashback.toFixed(2)}<br>
         Valor líquido da compra: R$ ${valorLiquido.toFixed(2)}`;

    }
    