document.addEventListener("keypress", comandos);// console para comandos de teste e facil demonstração do jogo
function comandos() {//comandos do console
    if (event.keyCode == 39) {
        comando = prompt('CONSOLE DE COMANDO');
        switch (comando) {
            case "demo":
                dinheiroAtual = 9000000000;
                ano = 6000;
                Café.maker();
                Soja.maker();
                Cana.maker();
                Tecidos.maker();
                Automobilística.maker();
                Eletrodomésticos.maker();
                Bélica.maker();
                Farmacêutica.maker();
                Petróleo.maker();
                Softwares.maker();
                Streaming.maker();
                Inteligência_Artificial.maker();
                break;

            default:
                break;
        }
    }
}
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
function salvar() { // talvez nao seja utilizada
    localStorage.setItem('local', JSON.stringify(rouberto));
}

function noticFix() {
    switch (ano) {
        case 1578:
            teste.getAtiva() ? console.log('funfa') : noticCont("../recursosDeImagem/download.png");
            break;
        case 1822:
            Café.maker();
            Soja.maker();
            Cana.maker();
            Tecidos.maker();
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 1.png')
            break;
        case 1830:
            Automobilística.maker();
            Eletrodomésticos.maker();
            break;
        case 1850:
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 2.png');
            dinheiroAtual -= 0.00
            break;
        case 1870:
            Cana.setValor(Cana.getValor() -= Cana.getValor() * 0.2);
            Café.setValor(Café.getValor() -= Café.getValor() * 0.5);
            Tecidos.setValor(Tecidos.getValor() -= Tecidos.getValor() * 0.1);
            Bélica.maker();
            break;
        case 1889:
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 3.png');
            break;
        case 1914:
            Bélica.setValor(Bélica.getValor() += Bélica.getValor() * 0.7);
            Automobilística.setValor(Automobilística.getValor() -= Automobilística.getValor() * 0.2);
            Eletrodomésticos.setValor(Eletrodomésticos.getValor() -= Eletrodomésticos.getValor() * 0.3);
            Farmacêutica.maker();
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 4.png');
            break;
        case 1953:
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 5.png');
            Petróleo.maker();
            break;
        case 1964:
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 6.png');
            break;
        case 1980:
            Farmacêutica.setValor(Farmacêutica.getValor() -= Farmacêutica.getValor() * 0.6);
            Petróleo.setValor(Petróleo.getValor() -= Petróleo.getValor() * 0.4);
            break;
        case 1985:
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 7.png');
            break;
        case 2000:
            Softwares.maker();
            break;
        case 2005:
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 8.png');
            break;
        case 2007:
            Streaming.maker();
            break;
        case 2011:
            Inteligência_Artificial.maker();
            Softwares.setValor(Softwares.getValor() -= Softwares.getValor() * 0.5);
            break;
        case 2020:
            Inteligência_Artificial.setValor(Inteligência_Artificial.getValor() += Inteligência_Artificial.getValor() * 10);
            dinheiroAtual = 999999999999999.90
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 9.png');
            break;
        default:
            break;
    }
}
function noticCont(x) {
    var conteudo = document.createElement('img');
    conteudo.setAttribute('class', 'imgNoticias');
    conteudo.setAttribute('src', x);
    asideNotic.appendChild(conteudo);
}