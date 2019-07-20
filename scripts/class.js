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
        nome.appendChild(document.createTextNode(this.Nome));
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
var Café = new Empresa("Café", 100.60, 3000, 545.76,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Soja = new Empresa("Soja", 200.60, 4000, 545.76,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Cana = new Empresa("Cana", 500.50, 5000, 545.76,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Tecidos = new Empresa("Tecidos", 50.50, 6000, 545.76,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Automobilística = new Empresa("Automobilística", 500.50, 3000, 545.76,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Eletrodomésticos = new Empresa("Eletrodomésticos", 106.06, 3000, 545.76,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Bélica = new Empresa("Bélica", 500.50, 3000, 545.76,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Farmacêutica = new Empresa("Farmacêutica", 500.50, 3000, 545.76,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Petróleo = new Empresa("Petróleo", 500.50, 3000, 545.76,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Softwares = new Empresa("Softwares", 500.50, 3000, 545.76,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Streaming = new Empresa("Streaming", 500.50, 3000, 545.76,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais
var Inteligência_Artificial = new Empresa("Inteligência_Artificial", 500.50, 3000, 545.76,"../recursosDeImagem/download.png"); // necessario que objeto e atributo nome sejam iguais

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
        nome.appendChild(document.createTextNode(this.Nome));
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
            invest.appendChild(document.createTextNode(this.Nome));
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

var Claudio = new InvestidorType2('Claudio', 'Dono de Terras Férteis',0.00,none,"../recursosDeImagem/download.png");
var Bruna = new InvestidorType1('Bruna', 'Máquinas para Moer Café',0.00,Café,"../recursosDeImagem/download.png");
var Julio = new InvestidorType1('Julio', 'Escravos para Moer Cana',0.00,Cana,"../recursosDeImagem/download.png");
var Cleyton = new InvestidorType1('Cleyton', 'Lotes de Plantação de Algodão',0.00,Tecidos,"../recursosDeImagem/download.png");
var Gertrudes = new InvestidorType3('Gertrudes', 'Vendedora de Leite, Procura Parceria',0.00,none,"../recursosDeImagem/download.png");
var Bruno = new InvestidorType3('Bruno', 'Vendedor de Caldo-de-Cana',0.00,none,"../recursosDeImagem/download.png");
var Landa = new InvestidorType3('Landa', 'A Costureira',0.00,none,"../recursosDeImagem/download.png");