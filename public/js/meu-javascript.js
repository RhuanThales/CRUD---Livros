new Vue({
  el: '#app',
  data: {
    colunas: ['Id', 'Nome', 'Preço', 'Tipo', 'Autor'],
    listagem: [{
      nome: "Chapeuzinho Vermelho",
      preco: 50.60,
      tipo: "Infantil",
      autor: "H.P Lovecraft"
    }, {
      nome: "Rapunzel",
      preco: 30.40,
      tipo: "Infantil",
      autor: "Lovecraft"
    }, {
      nome: "O pequeno principe",
      preco: 10.00,
      tipo: "Infantil",
      autor: "H.P"
    }, {
      nome: "Vermelho",
      preco: 90.60,
      tipo: "Infantil",
      autor: "H.P Lovecraft"
    }, {
      nome: "Chapeuzinho",
      preco: 80.60,
      tipo: "Infantil",
      autor: "H.P Lovecraft"
    }, {
      nome: "ChapeuzinhoAmarelo",
      preco: 20.60,
      tipo: "Infantil",
      autor: "H.P Lovecraft"
    }, {
      nome: "ChapeuzinhoBranco",
      preco: 30.60,
      tipo: "Infantil",
      autor: "H.P Lovecraft"
    }],
    input: {
      nome: "",
      preco: "",
      tipo: "",
      autor: ""
    },
    editarInput: {
      nome: "",
      preco: "",
      tipo: "",
      autor: ""
    }
  },
  methods: {
    //função para adicionar itens a lista
    add: function() {
      this.listagem.push({
        nome: this.input.nome,
        preco: this.input.preco,
        tipo: this.input.tipo,
        autor: this.input.autor
      });
      for (var key in this.input) {
        this.input[key] = '';
      }
      this.listagem.sort(ordonner);
      this.$refs.nome.focus();
    },
    //Função que permite a edição dos itens
    edit: function(index) {
      this.editarInput = this.listagem[index];
      console.log(this.editarInput);
      this.listagem.splice(index, 1);
    }, 
    //Função que faz o update dos itens que foram editados
    update: function(){
       this.listagem.push({
        nome: this.editarInput.nome,
        preco: this.editarInput.preco,
        tipo: this.editarInput.tipo,
        autor: this.editarInput.autor
      });
       for (var key in this.editarInput) {
        this.editarInput[key] = '';
      }
      this.listagem.sort(ordonner);
    }, 
    //Função que deleta o item da lista
    deplete: function(index) {
      this.listagem.splice(index, 1);
    }
  }
});