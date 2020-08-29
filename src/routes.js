

import Pessoas from './components/Pessoas'
import Produtos from './components/Produtos'
import Pedidos from './components/Pedidos'



const routes = [

    { path: '/', component: Pessoas },
    { path: '/produtos', component: Produtos },
    { path: '/pedidos', component: Pedidos }
];

export default routes;