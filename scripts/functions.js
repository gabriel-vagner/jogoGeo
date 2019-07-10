function indacadoresMaker(){
    var quebr = document.createElement('br');
    var quebr1 = document.createElement('br');
    var quebr2 = document.createElement('br');
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
    divInter.appendChild(quebr);
    divInter.appendChild(inputDinheroTotal);
    divInter.appendChild(quebr1);
    divInter.appendChild(inputAno);
    divInter.appendChild(quebr2);
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

