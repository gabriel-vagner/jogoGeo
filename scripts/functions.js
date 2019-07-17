
function indacadoresMaker() {
    var quebr = document.createElement('br');
    var quebr1 = document.createElement('br');
    var quebr2 = document.createElement('br');
    var inputDinheroAtual = document.createElement('input');
    inputDinheroAtual.setAttribute('value', 'R$' + dinheiroAtual.toFixed(2));
    inputDinheroAtual.setAttribute('readonly', 'readonly');
    inputDinheroAtual.setAttribute('id', 'inputDinheroAtual');
    var inputDinheroTotal = document.createElement('input');
    inputDinheroTotal.setAttribute('value', 'R$' + dinheiroTotal.toFixed(2));
    inputDinheroTotal.setAttribute('readonly', 'readonly');
    inputDinheroTotal.setAttribute('id', 'inputDinheroTotal');
    var inputAno = document.createElement('input');
    inputAno.setAttribute('value', ano);
    inputAno.setAttribute('readonly', 'readonly');
    divInter.appendChild(inputDinheroAtual);
    divInter.appendChild(quebr);
    divInter.appendChild(inputDinheroTotal);
    divInter.appendChild(quebr1);
    divInter.appendChild(inputAno);
    divInter.appendChild(quebr2);
    setInterval(function () {
        inputDinheroAtual.setAttribute('value', 'R$' + dinheiroAtual.toFixed(2));
        inputDinheroTotal.setAttribute('value', 'R$' + dinheiroTotal.toFixed(2));
    }, 900);
    setInterval(function () {
        ano++
        inputAno.setAttribute('value', ano);
        noticFix();
    }, 5000);
}

function salvar() {
    localStorage.setItem('local', JSON.stringify(rouberto));
}

function noticFix() {
    switch (ano) {
        case 1501:
            teste.getAtiva()?console.log('funfa'):noticCont('um texto ae pra testeddasdasdas sd asda');
            break;

        default:
            break;
    }
}
function noticCont(x) {
    var conteudo = document.createElement('p');
    var anoText = document.createElement('p');
    anoText.appendChild(document.createTextNode(ano.toString() + ':'));
    conteudo.appendChild(document.createTextNode(x));
    asideNotic.appendChild(anoText);
    asideNotic.appendChild(conteudo);
}