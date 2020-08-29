<template>
  <div id="app">
    <div class="jumbotron text-center" style="margin-top:-57px;">
       <h1>Bem Vindo a ESCRIBA</h1>
       <p>Tela de cadastro e Controle de Itens</p>
    </div>
    <!-- Nav tabs -->
  
   <ul class="menu">
      <li title="home"><a href="#" class="home"><router-link to='/' class="active" >home</router-link></a></li>
      <li title="search"><a href="#" class="search"><router-link to='/produtos'>Produtos</router-link></a></li>
      <li title="pencil"><a href="#" class="pencil"><router-link to='/pedidos'>Pedidos</router-link></a></li>
   </ul>
    <router-view />
  </div>
</template>

<script>

</script>

<style scoped>
    @import './assets/style/main.css';
    
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
