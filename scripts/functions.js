function iniciarConta(nome, id2, idDiv) {
    if(dinheiroAtual >= nome.getPreco()){
        dinheiroAtual -=  nome.getPreco();
        console.log(dinheiroAtual);
        nome.setAtiva(true);
        nome.ativacao(id2,idDiv);
        
    setInterval(function () {
        dinheiroAtual += nome.getValor();
        dinheiroTotal += nome.getValor();
        console.log(dinheiroAtual);
    }, nome.getTempo());
    }else{
        alert("sem dinhero");
    }
}
function mostradoresDin(){
    var inputDinheroAtual = document.createElement('input');
    inputDinheroAtual.setAttribute('value', 'R$'+dinheiroAtual.toFixed(2));
    var inputDinheroTotal = document.createElement('input');
    inputDinheroTotal.setAttribute('value', 'R$'+dinheiroTotal.toFixed(2));
    divInter.appendChild(inputDinheroAtual);
    divInter.appendChild(inputDinheroTotal);
    setInterval(function(){
        inputDinheroAtual.setAttribute('value', 'R$'+dinheiroAtual.toFixed(2));
        inputDinheroTotal.setAttribute('value', 'R$'+dinheiroTotal.toFixed(2));
     }, 900);
}

function salvar() {
    localStorage.setItem('local', JSON.stringify(rouberto));
}

