function indacadoresMaker(){
    var inputDinheroAtual = document.createElement('input');
    inputDinheroAtual.setAttribute('value', 'R$'+dinheiroAtual.toFixed(2));
    inputDinheroAtual.setAttribute('readonly', 'readonly');
    var inputDinheroTotal = document.createElement('input');
    inputDinheroTotal.setAttribute('value', 'R$'+dinheiroTotal.toFixed(2));
    inputDinheroTotal.setAttribute('readonly', 'readonly');
    var inputAno = document.createElement('input');
    inputAno.setAttribute('value', ano);
    inputAno.setAttribute('readonly', 'readonly');
    divInter.appendChild(inputDinheroAtual);
    divInter.appendChild(inputDinheroTotal);
    divInter.appendChild(inputAno);
    setInterval(function(){
        inputDinheroAtual.setAttribute('value', 'R$'+dinheiroAtual.toFixed(2));
        inputDinheroTotal.setAttribute('value', 'R$'+dinheiroTotal.toFixed(2));
     }, 900);
    setInterval(function(){
        ano++    
        inputAno.setAttribute('value', ano);
    }, 60000);
}

function salvar() {
    localStorage.setItem('local', JSON.stringify(rouberto));
}

