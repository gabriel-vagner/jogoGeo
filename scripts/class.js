class Empresa {
    constructor(_n, _v, _t, _p) {
        this.Img = " "

        this.ativa = false;
        
        
        this.Nome = _n;
        this.Valor = _v;
        this.Tempo = _t;
        this.Preco = _p;
    }

    setAtiva(_ativa){
        this.ativa = _ativa;
    }

    setImg(_img) {
        this.Img = _img;
    }

    setNome(_nome) {
        this.Nome = _nome;
    }

    setValor(_valor) {
        this.Valor = _valor;
    }

    setTempo(_tempo) {
        this.Tempo = _tempo;
    }

    setPreco(_Preco) {
        this.Preco = _preco;
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
        botao.setAttribute('onclick', 'iniciarConta(' + this.Nome + ', '+this.Nome+'Botao, '+this.Nome+'Div)');
        botao.setAttribute('id', this.Nome+'Botao');
        botao.appendChild(document.createTextNode(this.Preco));
        var img = document.createElement('img');
        img.setAttribute('class', 'imgEmpresas');
        img.setAttribute("src", this.Img);

        var divEm = document.createElement('div');
        divEm.setAttribute('id', this.Nome+'Div');
        divEm.setAttribute('class', 'empresas');
        divEm.appendChild(nome);
        divEm.appendChild(botao);
        divEm.appendChild(img);


        divPrinc.appendChild(divEm);
    }
    
    ativacao() {
        if (this.ativa) {
            var mostrador = document.createElement('input');
            mostrador.setAttribute('value', 'R$'+(this.Valor).toFixed(2)+'/'+(this.Tempo)/1000+'s')
            mostrador.setAttribute('readonly', 'readonly');
            mostrador.setAttribute('id', this.Nome+'Input');
            document.getElementById(this.Nome+'Div').appendChild(mostrador);
            document.getElementById(this.Nome+'Botao').setAttribute('disabled', 'disabled');
            
        }
    }
} 