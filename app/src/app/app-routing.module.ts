import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemProdutosComponent } from './components/views/listagem-produtos/listagem-produtos.component';
import { AdicionarProdutosComponent } from './components/views/adicionar-produtos/adicionar-produtos.component';
import { DetalhesProdutoComponent } from './components/views/detalhes-produto/detalhes-produto.component';

const routes: Routes = [
  { path: '', component: ListagemProdutosComponent },
  { path: 'adicionar-produto', component: AdicionarProdutosComponent },
  { path: 'detalhes/:id', component: DetalhesProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
