<template>
  <div class="container-fluid mt-4">
    <h1 class="h1">CRUD - Livros</h1>
    <!-- Esse alert exibe um mensagem de carregamento quando a pagina é acessada ou atualizada-->
    <b-alert :show="loading" variant="info">Carregando...</b-alert>
    <b-row>
      <b-col>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Valor</th>
              <th>Tipo</th>
              <th>Autor</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="record in records" :key="record.id">
              <td>{{ record.id }}</td>
              <td>{{ record.nome }}</td>
              <td>{{ record.valor }}</td>
              <td>{{ record.tipo }}</td>
              <td>{{ record.autor }}</td>
              <td class="text-right">
                <a href="#" @click.prevent="updateCrudItem(record)">Editar</a> -
                <a href="#" @click.prevent="deleteCrudItem(record.id)">Deletar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col lg="3">
        <b-card :title="(model.id ? 'Editar Livro ID#' + model.id : 'Novo Livro')">
          <form @submit.prevent="createCrudItem">
            <b-form-group label="Nome:">
              <b-form-input type="text" v-model="model.nome"></b-form-input>
            </b-form-group>
            <b-form-group label="Valor:">
              <b-form-input type="text" v-model="model.valor" ></b-form-input>
            </b-form-group>
            <b-form-group label="Tipo:">
              <b-form-input type="text" v-model="model.tipo" ></b-form-input>
            </b-form-group>
            <b-form-group label="Autor:">
              <b-form-input type="text" v-model="model.autor" ></b-form-input>
            </b-form-group>
            <div>
              <b-btn type="submit" variant="success">Salvar Livro</b-btn>
            </div>
          </form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import api from '@/CrudLivrosApiService';

  export default {
    data() {
      return {
        loading: false,
        records: [],
        model: {}
      };
    },
    async created() {
      this.getAll()
    },
    methods: {
      async getAll() {
        this.loading = true

        try {
          this.records = await api.getAll()
        } finally {
          this.loading = false
        }
      },
      async updateCrudItem(crudItem) {
        // Uso o Object.assign() para criar uma nova (e separada) instancia
        this.model = Object.assign({}, crudItem)
      },
      async createCrudItem() {
        const isUpdate = !!this.model.id;

        if (isUpdate) {
          await api.update(this.model.id, this.model)
        } else {
          await api.create(this.model)
        }

        // Limpa do dados dentro da area de preenchimento
        this.model = {}

        // Fetch de todos os livros novamente para ter os dados atualizados
        await this.getAll()
      },
      async deleteCrudItem(id) {
        if (confirm('Are you sure you want to delete this record?')) {
          // Se editar um livro que foi deletado, remove ele da area de preenchimento
          if (this.model.id === id) {
            this.model = {}
          }

          await api.delete(id)
          await this.getAll()
        }
      }
    }
  }
</script>