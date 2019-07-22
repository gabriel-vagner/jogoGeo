class Empresa {
    constructor(_n, _v, _t, _p, _m) {
        this.Img = _m

        this.Ativa = 0;


        this.Nome = _n;
        this.Valor = _v;
        this.Tempo = _t;
        this.Preco = _p;
    }

    setAtiva(_ativa) {
        this.Ativa = _ativa;
    }

    setImg(_img) {
        this.Img = _img;
    }

    setNome(_nome) {
        this.Nome = _nome;
    }

    setValor(_valor) {
        this.Valor = _valor;
        document.getElementById(this.Nome + 'Input')?document.getElementById(this.Nome + 'Input').setAttribute('value', 'R$' + (this.Valor).toFixed(2) + '/' + (this.Tempo) / 1000 + 's'):console.log();
    }

    setTempo(_tempo) {
        this.Tempo = _tempo;
    }

    setPreco(_preco) {
        this.Preco = _preco;
    }

    getAtiva() {
        return (this.Ativa);
    }
    getNome() {
        return (this.Nome);
    }
    getValor() {
        return (this.Valor);
    }
    getTempo() {
        return (this.Tempo);
    }
    getPreco() {
        return (this.Preco);
    }
    maker() {

        var nome = document.createElement('h2');
        nome.setAttribute('class', 'h2Empresas');
        nome.appendChild(document.createTextNode((this.Nome).replace(/_/i, ' ')));
        var botao = document.createElement('button');
        botao.setAttribute('class', 'botaoEmpresas');
        botao.setAttribute('onclick', this.Nome + '.iniciarConta(' + this.Nome + ')');
        botao.setAttribute('id', this.Nome + 'Botao');
        botao.appendChild(document.createTextNode(this.Preco));
        var img = document.createElement('img');
        img.setAttribute('class', 'imgEmpresas');
        img.setAttribute("src", this.Img);

        var divEm = document.createElement('div');
        divEm.setAttribute('id', this.Nome + 'Div');
        divEm.setAttribute('class', 'empresas');
        divEm.appendChild(nome);
        divEm.appendChild(img);
        divEm.appendChild(botao);


        divPrinc.appendChild(divEm);
    }

    iniciarConta(nome) {
        if (dinheiroAtual >= this.getPreco()) {
            dinheiroAtual -= this.getPreco();
            if (this.getAtiva() < 1) {
                setInterval(function () {
                    dinheiroAtual += nome.getValor();
                    dinheiroTotal += nome.getValor();
                    inputDinheroAtual.setAttribute('value', 'R$' + dinheiroAtual.toFixed(2));
                    inputDinheroTotal.setAttribute('value', 'R$' + dinheiroTotal.toFixed(2));
                }, nome.getTempo());
            }
            this.getAtiva() <= 10 ? this.ativacao() : console.log();
        } else {
            alert("dinheiro insuficiente");
        }
    }
    ativacao() {
        if (this.Ativa == 0) {
            var mostrador = document.createElement('input');
            mostrador.setAttribute('value', 'R$' + (this.Valor).toFixed(2) + '/' + (this.Tempo) / 1000 + 's')
            mostrador.setAttribute('readonly', 'readonly');
            mostrador.setAttribute('id', this.Nome + 'Input');
            var porcentagem = document.createElement('input');
            porcentagem.setAttribute('value', 10 + '%');
            porcentagem.setAttribute('readonly', 'readonly');
            porcentagem.setAttribute('id', this.Nome + 'Input2');
            document.getElementById(this.Nome + 'Div').appendChild(mostrador);
            document.getElementById(this.Nome + 'Div').appendChild(porcentagem);
            this.setPreco(this.Preco * 2);
            document.getElementById(this.Nome + 'Botao').childNodes[0].nodeValue = this.Preco;
            this.setAtiva(this.getAtiva() + 1);
        } else if (this.Ativa > 0 && this.Ativa < 9) {
            this.setValor(this.Valor * 2);
            document.getElementById(this.Nome + 'Input').setAttribute('value', 'R$' + (this.Valor).toFixed(2) + '/' + (this.Tempo) / 1000 + 's');
            this.setPreco(this.Preco * 2);
            document.getElementById(this.Nome + 'Botao').childNodes[0].nodeValue = this.Preco;
            document.getElementById(this.Nome + 'Input2').value = (10 * (this.Ativa + 1)) + '%';
            this.setAtiva(this.getAtiva() + 1);
        } else {
            this.setValor(this.Valor * 2);
            document.getElementById(this.Nome + 'Input').setAttribute('value', 'R$' + (this.Valor).toFixed(2) + '/' + (this.Tempo) / 1000 + 's');
            document.getElementById(this.Nome + 'Botao').setAttribute('disabled', 'disabled');
            document.getElementById(this.Nome + 'Botao').childNodes[0].nodeValue = '------';
            document.getElementById(this.Nome + 'Input2').value = '100%';
        }
    }
}
var Café = new Empresa("Café", 100.00, 4000, 500,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Soja = new Empresa("Soja", 150.00, 3000, 700,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Cana = new Empresa("Cana", 50.00, 2000, 250,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Tecidos = new Empresa("Tecidos", 75, 2000, 300,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Automobilística = new Empresa("Automobilística", 250.00, 3000, 4000.00,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Eletrodomésticos = new Empresa("Eletrodomésticos", 300.00,4000, 3500.00,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Bélica = new Empresa("Bélica", 80000, 5000, 800000,"../recursosDeImagem/download.png");
var Farmacêutica = new Empresa("Farmacêutica", 1000000, 20000, 9000000,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Petróleo = new Empresa("Petróleo", 500, 1000, 35000000.,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Softwares = new Empresa("Softwares", 1500, 2000, 60000000,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Streaming = new Empresa("Streaming", 5000, 3000, 9000000,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Inteligência_Artificial = new Empresa("Inteligência_Artificial", 9999999, 5000, 99000000,"../recursosDeImagem/download.png");
class Investidor{
    constructor(_n, _d, _p, _r, _m){
        this.Nome = _n;
        this.Descricao = _d;
        this.Preco = _p;
        this.Img = _m; 
        this.Referencia = _r;
        this.Ativa = false;
    }
    setAtiva(_ativa){
        this.Ativa = _ativa;
    }
    setNome(_nome){
        this.Nome = _nome;
    }
    setDescricao(_desc){
        this.Descricao = _desc;
    }
    setPreco(_preco){
        this.Preco = _preco;
    }
    setImg(_img){
        this.Img = _img;
    }
    getNome(){
        return this.Nome;
    }
    getDescricao(){
        return this.Descricao;
    }
    getPreco(){
        return this.Preco;
    }
    getReferencia(){
        return this.Referencia;
    }
    getAtiva(){
        return this.Ativa;
    }
    maker() {

        var nome = document.createElement('h2');
        nome.setAttribute('class', 'h2Investidores');
        nome.appendChild(document.createTextNode(this.Nome.replace(/_/i, ' ')));
        var botao = document.createElement('button');
        botao.setAttribute('class', 'botaoInvestidores');
        botao.setAttribute('onclick', this.Nome+'.ativar()');//d
        botao.setAttribute('id', this.Nome + 'Botao');
        botao.appendChild(document.createTextNode(this.Preco));
        var img = document.createElement('img');
        img.setAttribute('class', 'imgInvestidores');
        img.setAttribute("src", this.Img);
        var desc = document.createElement('p');
        desc.setAttribute('class', 'descricaoInvestidores');
        desc.appendChild(document.createTextNode(this.Descricao));

        var divIn = document.createElement('div');
        divIn.setAttribute('id', this.Nome + 'Div');
        divIn.setAttribute('class', 'investidores');
        divIn.appendChild(nome);
        divIn.appendChild(img);
        divIn.appendChild(botao);
        divIn.appendChild(desc);


        divInvest.appendChild(divIn);
    }
    efeito(R){
    
    }
    ativar() {
        if (dinheiroAtual >= this.getPreco()) {
            dinheiroAtual -= this.getPreco();
            this.efeito(this.getReferencia());
            var invest = document.createElement('p');
            invest.appendChild(document.createTextNode(this.Nome.replace(/_/i, ' ')));
            divInvestAtivos.appendChild(invest);
        } else {
            alert("sem dinhero");
        }
    }
    remove(){
        divInvest.removeChild(document.getElementById(this.Nome + 'Div'));
    }
}
class InvestidorType1 extends Investidor{
    efeito(R){
        R.setValor(R.getValor()+(R.getValor()*0.1));
        document.getElementById(this.Nome + 'Botao').setAttribute('disabled', 'disabled');
        document.getElementById(this.Nome + 'Botao').childNodes[0].nodeValue = '------';
        this.setAtiva(true);
    }
}
class InvestidorType2 extends Investidor{
    efeito(R){
        Café.setValor(Café.getValor()+(Café.getValor()*0.02)); 
        Cana.setValor(Cana.getValor()+(Cana.getValor()*0.02)); 
        Soja.setValor(Soja.getValor()+(Soja.getValor()*0.02)); 
        Tecidos.setValor(Tecidos.getValor()+(Tecidos.getValor()*0.02));
        document.getElementById(this.Nome + 'Botao').setAttribute('disabled', 'disabled');
        document.getElementById(this.Nome + 'Botao').childNodes[0].nodeValue = '------';
        this.setAtiva(true);
    }
}
class InvestidorType3 extends Investidor{
    efeito(R){
        document.getElementById(this.Nome + 'Botao').setAttribute('disabled', 'disabled');
        document.getElementById(this.Nome + 'Botao').childNodes[0].nodeValue = '------';
        this.setAtiva(true);
    }
}
var none = 'investidores sem influencia direta em algum valor de uma empresa';

var Claudio = new InvestidorType2('Claudio', 'Dono de Terras Férteis',3500,none,"../recursosDeImagem/download.png");
var Bruna = new InvestidorType1('Bruna', 'Máquinas para Moer Café',3000,Café,"../recursosDeImagem/download.png");
var Julio = new InvestidorType1('Julio', 'Escravos para Moer Cana',3000,Cana,"../recursosDeImagem/download.png");
var Cleyton = new InvestidorType1('Cleyton', 'Lotes de Plantação de Algodão',3000,Tecidos,"../recursosDeImagem/download.png");
var Gertrudes = new InvestidorType3('Gertrudes', 'Vendedora de Leite, Procura Parceria',2500,none,"../recursosDeImagem/download.png");
var Bruno = new InvestidorType3('Bruno', 'Vendedor de Caldo-de-Cana',2500,none,"../recursosDeImagem/download.png");
var Landa = new InvestidorType3('Landa', 'A Costureira',2500,none,"../recursosDeImagem/download.png");
var Toydiota = new InvestidorType1('Toydiota', 'Exportar Carros',600000,Automobilística,"../recursosDeImagem/download.png");
var VendasJá = new InvestidorType3('VendasJá', 'Parceria, Revendedora de Carros',550000,none,"../recursosDeImagem/download.png");
var Brastempo = new InvestidorType1('Brastempo', 'Vendas em Casa',600000,Eletrodomésticos,"../recursosDeImagem/download.png");
var Ricardo_Eletrico = new InvestidorType3('Ricardo_Eletrico', 'O Gerente Ficou Maluco',550000,none,"../recursosDeImagem/download.png");
var Stark_Indústrias = new InvestidorType1('Stark_Indústrias', 'Armas de Alta Tecnologia',800000,Bélica,"../recursosDeImagem/download.png");
var AgoraGun = new InvestidorType3('AgoraGun', 'Exportação de Armamento Para os EUA',7500000,none,"../recursosDeImagem/download.png");
var Shoren = new InvestidorType1('Shoren', 'Centro de Pesquisa',35000000,Farmacêutica,"../recursosDeImagem/download.png");
var Oscorpe = new InvestidorType3('Oscorpe', 'Remédios Genéricos Governamentais',30000000,none,"../recursosDeImagem/download.png");
var Agabeee = new InvestidorType1('Agabeee', 'Fabricante de Bombas Petrolíferas',60000000,Petróleo,"../recursosDeImagem/download.png");
var Petrobras = new InvestidorType3('Petrobras', 'Parceria com o Governo',55000000,none,"../recursosDeImagem/download.png");
var Microsoftwares = new InvestidorType1('Microsoftwares', 'Empresa Promissora',9000000,Softwares,"../recursosDeImagem/download.png");
var Baidula = new InvestidorType3('Baidula', 'Antivírus para Toda a Empresa',8500000,none,"../recursosDeImagem/download.png");