<template>
  <div id="app">
    <h1>Todos</h1>
    <!-- Tab panes -->
    <div class="tab-content">
        <div class="tab-pane container active" id="home">
            <ul>
                <li v-for="pessoa of pessoas" :key="pessoa.id">
                   {{pessoa.nome}}
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
      pessoas: []
    }
  },
  async created() {
    try {
      const res = await axios.get(`http://localhost:3000/pessoas`)

      this.pessoas = res.data;
    } catch(e) {
      console.error(e)
    }
  },
}
</script>