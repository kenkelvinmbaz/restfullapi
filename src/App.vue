<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" data-toggle="tab" href="#home"><router-link to='/' class="active" >Home</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu1"><router-link to='/produtos'>Produtos</router-link></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#menu2"><router-link to='/pedidos'>Pedidos</router-link></a>
      </li>
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
