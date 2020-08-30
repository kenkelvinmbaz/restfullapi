# escriba

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Para rodar o serviço é necessário instalar o json-server:  
```
➢  npm install -g json-server  Após isso
```

### rodar o comando:
json-server db.json Isso irá disponibilizar uma api REST rodando nos endereços  •  http://localhost:3000/pessoas •  http://localhost:3000/produtos •  http://localhost:3000/pedidos

## INSTALL Sweet Alert
npm install -S vue-sweetalert2

// main.js
import Vue from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
 
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
 
Vue.use(VueSweetalert2);

<script>
export default {
  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
  },
};
</script> 


