class Empresa {
    constructor(_n, _v, _t, _p) {
        this.Img = " "

        this.Ativa = 0;
        
        
        this.Nome = _n;
        this.Valor = _v;
        this.Tempo = _t;
        this.Preco = _p;
    }

    setAtiva(_ativa){
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
    }

    setTempo(_tempo) {
        this.Tempo = _tempo;
    }

    setPreco(_preco) {
        this.Preco = _preco;
    }

    getAtiva(){
        return(this.Ativa);
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
        botao.setAttribute('onclick', this.Nome+'.iniciarConta('+this.Nome+')');
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
    
    iniciarConta(nome) {
        if(dinheiroAtual >= this.getPreco()){
            dinheiroAtual -=  this.getPreco();
            if(this.getAtiva()<1){    
                setInterval(function() {
                    dinheiroAtual += nome.getValor();
                    dinheiroTotal += nome.getValor();
                    console.log(dinheiroAtual);
                    }, nome.getTempo());
                }
            this.getAtiva()<=10?this.ativacao():console.log();
        }else{
            alert("sem dinhero");
        }
    }
    ativacao() {
        if (this.Ativa == 0) {
            var mostrador = document.createElement('input');
            mostrador.setAttribute('value', 'R$'+(this.Valor).toFixed(2)+'/'+(this.Tempo)/1000+'s')
            mostrador.setAttribute('readonly', 'readonly');
            mostrador.setAttribute('id', this.Nome+'Input');
            var porcentagem = document.createElement('input');
            porcentagem.setAttribute('value', 10+'%');
            porcentagem.setAttribute('readonly', 'readonly');
            porcentagem.setAttribute('id', this.Nome+'Input2');
            document.getElementById(this.Nome+'Div').appendChild(mostrador);
            document.getElementById(this.Nome+'Div').appendChild(porcentagem);
            this.setPreco(this.Preco*2);
            document.getElementById(this.Nome+'Botao').childNodes[0].nodeValue = this.Preco;
            this.setAtiva(this.getAtiva()+1);
        }else if(this.Ativa >0 && this.Ativa <9){
            this.setValor(this.Valor*2);
            document.getElementById(this.Nome+'Input').setAttribute('value', 'R$'+(this.Valor).toFixed(2)+'/'+(this.Tempo)/1000+'s');
            this.setPreco(this.Preco*2);
            document.getElementById(this.Nome+'Botao').childNodes[0].nodeValue = this.Preco;
            document.getElementById(this.Nome+'Input2').value = (10*(this.Ativa+1))+'%';
            this.setAtiva(this.getAtiva()+1);
        }else{
            document.getElementById(this.Nome+'Botao').setAttribute('disabled', 'disabled');
            document.getElementById(this.Nome+'Botao').childNodes[0].nodeValue = '------';
            document.getElementById(this.Nome+'Input2').value = '100%';
        }
    }
} 