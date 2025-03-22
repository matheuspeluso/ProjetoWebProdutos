import { Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './components/pages/cadastrar-produto/cadastrar-produto.component';
import { ConsultarProdutosComponent } from './components/pages/consultar-produtos/consultar-produtos.component';
import { EditarProdutoComponent } from './components/pages/editar-produto/editar-produto.component';

export const routes: Routes = [
    {
        path: 'pages/cadastrar-produto',
        component: CadastrarProdutoComponent
    },

    {
        path: 'pages/consultar-produtos',
        component: ConsultarProdutosComponent
    },

    {
        path: 'pages/editar-produtos',
        component: EditarProdutoComponent
    },

    {
        path: '', pathMatch: 'full', //mapeando a rota inicial do projeto
        redirectTo: '/pages/consultar-produtos'
    }
];
