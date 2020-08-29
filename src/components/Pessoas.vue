<template>
  <div id="app">
    <h1>Todos</h1>
    <!-- Tab panes -->
    <div id="Home" class="tabcontent">
        <ul>
            <li v-for="pessoa of pessoas" :key="pessoa.id">
                {{pessoa.nome}}
            </li>
        </ul> 
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