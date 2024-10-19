import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ListagemProdutosComponent } from './components/views/listagem-produtos/listagem-produtos.component';
import { AdicionarProdutosComponent } from './components/views/adicionar-produtos/adicionar-produtos.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DetalhesProdutoComponent } from './components/views/detalhes-produto/detalhes-produto.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListagemProdutosComponent,
    AdicionarProdutosComponent,
    DetalhesProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
