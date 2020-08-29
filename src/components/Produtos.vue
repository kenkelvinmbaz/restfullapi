<template>
  <div id="app">
           <div> 
              <h1 class="text-center">PRODUTOS</h1>
              <button class="btn btn-primary btn-sm float-right mr-5" data-toggle="modal" data-target="#add">+ Adicionar</button>
           </div>
            <!-- Tab panes -->
            <div class="tab-content mt-4">
                <div class="tab-pane container active" id="home">
                    <table class="table table-hover table-striped">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Descrição</th>
                                    <th>Valor Unitario</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="" v-for="produto of produtos" :key="produto.id">
                                    <td>{{produto.id}}</td>
                                    <td>{{produto.descricao}}</td>
                                    <td>{{produto.valoUnitario}}</td>
                                    <td>
                                    <button class="btn btn-danger btn-sm btn-circle"><font-awesome-icon icon="user-edit" /></button>
                                    <button class="btn btn-primary btn-sm btn-circle ml-3">e</button>
                                    </td>
                                </tr>
                            </tbody>
                    </table>
                </div>
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

export default {
  name: 'app',
  data() {
    return {
      produtos: []
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/produtos`)

      this.produtos = res.data;
    } catch(e) {
      console.error(e)
    }
  },
}
</script>

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
      const res = await axios.post(baseURL, { descricao: this.descricao, valoUnitario: this.valoUnitario })

      this.produtos = [...this.produtos, res.data]

      this.descricao = '',
      this.valoUnitario = ''
    }
  }
}
</script>

