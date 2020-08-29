<template>
  <div id="app">
    <h1>Pedidos</h1>
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane container active" id="home">
            <ul>
                <li v-for="pedido of pedidos" :key="pedido.id">
                   {{pedido.id}}
                    {{pedido.cliente.nome}}
                   {{pedido.dataEmissao}}

               </li>
            </ul>
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
      pedidos: []
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/pedidos`)

      this.pedidos = res.data;
    } catch(e) {
      console.error(e)
    }
  },
}
</script>