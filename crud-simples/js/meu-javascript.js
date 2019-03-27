new Vue({
  el: '#app',
  data: {
    colunas: ['Id', 'Nome', 'Preço', 'Tipo', 'Autor'],
    listagem: [{
      nome: "Turma da Mônica",
      preco: 7.99,
      tipo: "Infantil",
      autor: "Mauricio de Sousa"
    }, {
      nome: "Bisa Bia, Bisa Bel",
      preco: 10.45,
      tipo: "Infantil",
      autor: "Ana Maria Machado"
    }, {
      nome: "A história dos pingos",
      preco: 4.25,
      tipo: "Infantil",
      autor: "Mary França e Eliardo França"
    }, {
      nome: "O Fantástico Mistério de Feiurinha",
      preco: 3.65,
      tipo: "Infantil",
      autor: "Pedro Bandeira"
    }, {
      nome: "Diário de um Banana",
      preco: 8.15,
      tipo: "Infantil",
      autor: "Jeff Kinney"
    }, {
      nome: "Chapeuzinho Amarelo",
      preco: 6.55,
      tipo: "Infantil",
      autor: "Chico Buarque e Ziraldo"
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