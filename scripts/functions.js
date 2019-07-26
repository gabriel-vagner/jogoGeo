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

                Claudio.maker();
                Bruna.maker();
                Julio.maker();
                Cleyton.maker();
                Gertrudes.maker();
                Bruno.maker();
                Landa.maker();
                Toydiota.maker();
                VendasJá.maker();
                Brastempo.maker();
                Ricardo_Eletrico.maker();
                Stark_Indústrias.maker();
                AgoraGun.maker();
                Shoren.maker();
                Oscorpe.maker();
                Agabeee.maker();
                Petrobras.maker();
                Microsoftwares.maker();
                Baidula.maker()

                noticCont('../recursosDeImagem/jornais/Level 2/Jornal 1.png')
                noticCont('../recursosDeImagem/jornais/Level 2/Jornal 2.png');
                noticCont('../recursosDeImagem/jornais/Level 2/Jornal 3.png');
                noticCont('../recursosDeImagem/jornais/Level 2/Jornal 4.png');
                noticCont('../recursosDeImagem/jornais/Level 2/Jornal 5.png');
                noticCont('../recursosDeImagem/jornais/Level 2/Jornal 6.png');
                noticCont('../recursosDeImagem/jornais/Level 2/Jornal 7.png');
                noticCont('../recursosDeImagem/jornais/Level 2/Jornal 8.png');
                noticCont('../recursosDeImagem/jornais/Level 2/Jornal 9.png');
                break;
            case 'goToEnd':
                ano = 2019;
                break
            case 'end':
                gameEnd();
                break
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
    inputAno.setAttribute('id', 'inputAno');
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
            makeText('Rei D. Sebastião morre na batalha de Alcácer-Quibir, a um conflito em quem irá sucedê-lo, a economia desestabiliza e o preço do, até então monopólio, pau-brasil cai!', true);
            transitionAlert()
            Pau_Brasil.setValor(Pau_Brasil.getValor() - Pau_Brasil.getValor() * 0.2);
            setTimeout(() => {
                document.getElementById('corpo').removeChild(document.getElementById('falas'));
                makeText('Oh-Oww… Temos um problema aqui! Isso vai acontecer muito no mercado futuramente, é bom manter um dinheiro guardado pra evitar a falência!', true);
            }, 7000);
            setTimeout(() => {
                document.getElementById('corpo').removeChild(document.getElementById('falas'));
            }, 16000);
            setTimeout(() => {
                makeText('Acho que você já tá preparado para a próxima fase da industrialização brasileira, vamos passar pra lá!', true);
                transitionAlert()
            }, 20000);
            setTimeout(() => {
                ano = 1822;
                inputAno.setAttribute('value', ano);
                noticFix();
                Pau_Brasil.remove();
            }, 30000);
            break
        case 1822:
            document.getElementById('corpo').removeChild(document.getElementById('falas'));
            Café.maker();
            Soja.maker();
            Cana.maker();
            Tecidos.maker();

            Claudio.maker();
            Bruna.maker();
            Julio.maker();
            Cleyton.maker();
            Gertrudes.maker();
            Bruno.maker();
            Landa.maker();
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 1.png')
            break;
        case 1830:
            Automobilística.maker();
            Eletrodomésticos.maker();

            Toydiota.maker();
            VendasJá.maker();
            Brastempo.maker();
            Ricardo_Eletrico.maker();
            break;
        case 1850:
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 2.png');
            break;
        case 1870:
            Bruno.getAtiva() ? Cana.setValor(Cana.getValor() - (0.4 * (Cana.getValor() * 0.2))) : Cana.setValor(Cana.getValor() - (Cana.getValor() * 0.2));
            Gertrudes.getAtiva() ? Café.setValor(Café.getValor() - (0.4 * (Café.getValor() * 0.5))) : Café.setValor(Café.getValor() - (Café.getValor() * 0.5));
            Landa.getAtiva() ? Tecidos.setValor(Tecidos.getValor() - (0.4 * (Tecidos.getValor() * 0.1))) : Tecidos.setValor(Tecidos.getValor() - (Tecidos.getValor() * 0.1));
            document.getElementById('CanaInput')?destaqueInput(document.getElementById('CanaInput')):console.log;
            document.getElementById('CaféInput')?destaqueInput(document.getElementById('CaféInput')):console.log;
            document.getElementById('TecidosInput')?destaqueInput(document.getElementById('TecidosInput')):console.log;

            Stark_Indústrias.maker();
            AgoraGun.maker();
            Bélica.maker();
            break;
        case 1889:
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 3.png');
            break;
        case 1914:
            Bélica.setValor(Bélica.getValor() + (Bélica.getValor() * 0.7));
            VendasJá.getAtiva() ? Automobilística.setValor(Automobilística.getValor() - (0.4 * (Automobilística.getValor() * 0.2))) : Automobilística.setValor(Automobilística.getValor() - (Automobilística.getValor() * 0.2));
            Ricardo_Eletrico.getAtiva() ? Eletrodomésticos.setValor(Eletrodomésticos.getValor() - (0.4 * (Eletrodomésticos.getValor() * 0.3))) : Eletrodomésticos.setValor(Eletrodomésticos.getValor() - (Eletrodomésticos.getValor() * 0.3));
            document.getElementById('BélicaInput')?destaqueInput(document.getElementById('BélicaInput')):console.log;
            document.getElementById('AutomobilísticaInput')?destaqueInput(document.getElementById('AutomobilísticaInput')):console.log;
            document.getElementById('EletrodomésticosInput')?destaqueInput(document.getElementById('EletrodomésticosInput')):console.log;

            
            Farmacêutica.maker();

            Shoren.maker();
            Oscorpe.maker();
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 4.png');
            break;
        case 1953:
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 5.png');
            Petróleo.maker();

            Agabeee.maker();
            Petrobras.maker();
            break;
        case 1964:
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 6.png');
            break;
        case 1980:
            Oscorp.getAtiva() ? Farmacêutica.setValor(Farmacêutica.getValor() - (0.4 * (Farmacêutica.getValor() * 0.6))) : Farmacêutica.setValor(Farmacêutica.getValor() - (Farmacêutica.getValor() * 0.6));
            Petrobras.getAtiva() ? Petróleo.setValor(Petróleo.getValor() - (0.4 * (Petróleo.getValor() * 0.4))) : Petróleo.setValor(Petróleo.getValor() - (Petróleo.getValor() * 0.4));
            document.getElementById('FarmacêuticaInput')?destaqueInput(document.getElementById('FarmacêuticaInput')):console.log;
            document.getElementById('PetróleoInput')?destaqueInput(document.getElementById('PetróleoInput')):console.log;

            
            break;
        case 1985:
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 7.png');
            break;
        case 2000:
            Softwares.maker();

            Microsoftwares.maker();
            Baidula.maker()
            break;
        case 2005:
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 8.png');
            break;
        case 2007:
            Streaming.maker();
            break;
        case 2011:
            Inteligência_Artificial.maker();
            Baidula.getAtiva() ? Softwares.setValor(Softwares.getValor() - (0.4 * (Softwares.getValor() * 0.5))) : Softwares.setValor(Softwares.getValor() - (Softwares.getValor() * 0.5));
            document.getElementById('SoftwaresInput')?destaqueInput(document.getElementById('SoftwaresInput')):console.log;

            break;
        case 2020:
            Inteligência_Artificial.setValor(Inteligência_Artificial.getValor() + (Inteligência_Artificial.getValor() * 10));
            document.getElementById('Inteligência_ArtificialInput')?destaqueInput(document.getElementById('Inteligência_ArtificialInput')):console.log;

            dinheiroAtual = 999999999999999.90
            noticCont('../recursosDeImagem/jornais/Level 2/Jornal 9.png');
            gameEnd()
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
    asideNotic.scrollTop = 6000;
}
function tutorial() {
    makeText('Olá investidor, eu sou Linda', true);
    transitionAlert()
    setTimeout(() => {
        document.getElementById('corpo').removeChild(document.getElementById('falas'));
        makeText('Você é o mais novo funcionário da nossa Oken Investiments, como é de praste, nossos recém contratados precisam passar por uma simulação antes de começar a investir de verdade', true);
    }, 3000);
    setTimeout(() => {
        document.getElementById('corpo').removeChild(document.getElementById('falas'));
        makeText('Vamos começar pelo início, voltando para 1530, o descobrimento do Brasil!', true);
        indacadoresMaker();
        document.getElementById('inputAno').style.border = '6px solid red';
    }, 9000);
    setTimeout(() => {
        document.getElementById('corpo').removeChild(document.getElementById('falas'));
        document.getElementById('inputAno').style.border = '2px inset lightgray';
        makeText('Aqui no começo é fácil, compre alguma ações de pau Brasil para começar a lucrar!', true);
    }, 13000);
    setTimeout(() => {
        document.getElementById('corpo').removeChild(document.getElementById('falas'));
        Pau_Brasil.maker();
    }, 16000);
    var interval = setInterval(() => {
        if (Pau_Brasil.getAtiva() > 0) {
            clearInterval(interval);
            makeText('Muito bem! Aqui na ação podemos ver o dinheiro que você ganha e de quanto em quanto tempo! Alem da porcentagem de compra da sua empresa.', true);
            transitionAlert()
            document.getElementById('Pau_BrasilInput').style.border = '6px inset red';
            document.getElementById('Pau_BrasilInput2').style.border = '6px inset red';
            setTimeout(() => {
                document.getElementById('corpo').removeChild(document.getElementById('falas'));
                document.getElementById('Pau_BrasilInput').style.border = '1px solid black';
                document.getElementById('Pau_BrasilInput2').style.border = '1px solid black';
                makeText('Aqui em cima você pode ver sua atual e sua renda total, administre ela e não gaste tudo,é assim que te avaliamos!', true);
                document.getElementById('inputDinheroAtual').style.border = '4px solid red';
                document.getElementById('inputDinheroTotal').style.border = '4px solid red';
            }, 9000);
            setTimeout(() => {
                document.getElementById('corpo').removeChild(document.getElementById('falas'));
                document.getElementById('inputDinheroAtual').style.border = '2px inset lightgray';
                document.getElementById('inputDinheroTotal').style.border = '2px inset lightgray';
                makeText('Voce tambem pode conferir seus investidores disponiveis que lhe darão alguns bonus, sempre fique de olha para quando algum investidor aparecer', true);
                document.getElementById('linkInvestidores').style.border = '6px solid red';
            }, 14000);
            setTimeout(() => {
                document.getElementById('corpo').removeChild(document.getElementById('falas'));
                document.getElementById('linkInvestidores').style.border = 'none';
            }, 20000);
        }
    }, 1500);

}
function makeText(fala, s) {
    var divAlert = document.createElement('div');
    divAlert.setAttribute('class', 'alert');
    s ? divAlert.setAttribute('id', 'falas') : console.log();
    //var span = document.createElement('span');
    //span.setAttribute('class', 'close')
    // span.setAttribute('onclick', "this.parentElement.style.display='none'");
    // span.appendChild(document.createTextNode('->'));
    //divAlert.appendChild(span);
    divAlert.appendChild(document.createTextNode(fala));
    document.getElementById('corpo').appendChild(divAlert);
}
function gameEnd() {
    var end = document.createElement('img');
    end.setAttribute('src', '../recursosDeImagem/end.png');
    end.setAttribute("id", "imgEnd");
    end.style.opacity = 0.0;
    document.getElementById('corpo').appendChild(end);
    setTimeout(() => {
        document.getElementById('imgEnd').style.transition = 'opacity 4s';
        document.getElementById('imgEnd').style.opacity = 1.0;
    }, 6000);
    setTimeout(() => {
        makeText('Muito bem, você está contratado! Caso queira, Aperte F5 para reiniciar a simulação', true);
        transitionAlert();
    }, 8000);
}
function transitionAlert() {
    document.getElementById('falas').style.opacity = 0.0;
    setTimeout(() => {
        document.getElementById('falas').style.transition = 'opacity 0.3s';
        document.getElementById('falas').style.opacity = 1.0;
    }, 400)
}
function destaqueInput(input) {
    input.style.transition = 'background-color 0.5s';
    input.style.backgroundColor = 'red';
    setTimeout(() => {
        input.style.transition = 'background-color 0.5s';
        input.style.backgroundColor = 'white';
    }, 1000);
}

function getBootstrapDeviceSize (){
return $ ('# users-devices-size'). find('div: visible'). first (). attr ('id');

}