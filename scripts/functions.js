function iniciarConta(nome, idBotao, idDiv) {
    if(dinheiroAtual >= nome.getPreco()){
        dinheiroAtual -=  nome.getPreco();
        console.log(dinheiroAtual);
        nome.setAtiva(true);
        nome.ativacao();
        
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
    inputDinheroAtual.setAttribute('readonly', 'readonly');
    var inputDinheroTotal = document.createElement('input');
    inputDinheroTotal.setAttribute('value', 'R$'+dinheiroTotal.toFixed(2));
    inputDinheroTotal.setAttribute('readonly', 'readonly');
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

