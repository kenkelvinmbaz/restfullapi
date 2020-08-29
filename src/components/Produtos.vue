<template>
  <div id="app">
           <div> 
              <h1 class="text-center">PRODUTOS</h1>
              <button class="btn btn-primary btn-sm float-right mr-5" data-toggle="modal" data-target="#add">+ Adicionar</button>
           </div>
            <!-- Tab panes -->
            <div id="Produtos" class="tabcontent">
              
                <input class="form-control" v-model="search" type="text" placeholder="buscar por aqui">
                    <table class="table table-hover table-striped mt-3">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Descrição</th>
                                    <th>Valor Unitario</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="" v-for="produto of filterItem" :key="produto.id">
                                    <td>{{produto.id}}</td>
                                    <td>{{produto.descricao }}</td>
                                    <td>{{produto.valoUnitario}}</td>
                                    <td>
                                    <button class="btn btn-danger btn-sm btn-circle" v-on:click="deleted(produto)">X Deletar</button>
                                    <button class="btn btn-primary btn-sm btn-circle ml-3">Editar</button>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
               
            </div>
            <!--****************************************************************************************-->
            <!--************************************  MODAL  REGISTER START  ***************************-->
            <!--****************************************************************************************-->
             
            <div class="modal" id="add">
                <div class="modal-dialog">
                    <div class="modal-content">

                            <!-- Modal Header -->
                            <div class="modal-header">
                                <h4 class="modal-title">Modal Heading</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>

                            <!-- Modal body -->
                            <div class="modal-body">
                                  <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">@</span>
                                        </div>
                                        <input type="text" class="form-control" v-model="descricao"  placeholder="adiciona a descrição">
                                  </div>

                                   <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text">@</span>
                                        </div>
                                        <input type="text" class="form-control" v-model="valoUnitario" placeholder="adiciona o valor unitário">
                                  </div>
                            </div>

                            <!-- Modal footer -->
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary" @click="addTodo()" >Add</button>
                            </div>

                    </div>
                </div>
            </div>
  </div>
</template>


<script>
import axios from 'axios';

const baseURL = "http://localhost:3000/produtos"

export default {
  name: 'app',
  data() {
    return {
      produtos: [],
      descricao: '',
      valoUnitario:'',
      search:'',
    }
  },
  async created() {
    try {
      const res = await axios.get(baseURL)

      this.produtos = res.data;
    } catch(e) {
      console.error(e)
    }
  },
  methods: {
    async addTodo() {
      if(this.descricao !='' && this.valoUnitario !='')
      {
          const res = await axios.post(baseURL, { descricao: this.descricao, valoUnitario: this.valoUnitario })
          this.produtos = [...this.produtos, res.data]

          this.descricao = '',
          this.valoUnitario = ''

          this.$swal({
              icon: 'success',
              title: 'Seu novo produto foi cadastrado!',
              showConfirmButton: true,
            })
      }
      else {
          this.$swal({
                icon: 'error',
                title: 'Oops...',
                text: 'Você esqueceu de preencher o campo descrição ou o valor unitário',
                footer: '<a href>Why do I have this issue?</a>'
                });
        }
    },

    deleted(produto){
          this.$swal({
            title: 'Tem certeza?',
            text: "Você não será capaz de reverter uma vez você confirmar!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, confirmo',
            cancelButtonText: 'Cancelar'

            }).then((result) => {
                if (result.value) 
                {
                        this.$swal(
                        'Apagado!',
                        'Esse dado foi apagado',
                        'success'
                        )
                        axios.delete("http://localhost:3000/produtos/" + produto.id)
                        
                        //this.produtos = res.data;
                        let index = this.produtos.indexOf(this.descricao)
                        this.produtos.splice(index,1)
                }
           })
    },

    //  update(produto){ 
    //    return axios.put("http://localhost:3000/produtos/" + produto.id , {descricao: this.descricao, valoUnitario: this.valoUnitario})
       
    //     this.produto.id = ''
    //     this.produto.descricao = ''
    //     this.produto.valoUnitario = ''
    //     //this.updateSubmit = false
      
    // },

 
  },

  computed:{
      filterItem(){
          return this.produtos.filter(produto => produto.descricao.includes(this.search))
         
      }
  }
}
</script>

