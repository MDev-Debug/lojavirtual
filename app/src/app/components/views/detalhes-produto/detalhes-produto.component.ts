import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../../services/produto.service';
import { Produto } from '../../../models/produto';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements OnInit {
  public produto!: Produto

  constructor(private produtoService: ProdutoService,
              private rotaAtual: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = this.rotaAtual.snapshot.paramMap.get('id') ?? '';

    this.produtoService.obterProdutoPorId(id).subscribe(response => {
      this.produto = response;
      console.log(this.produto);
    })
  }

  public deletarProduto(id: string): void {
    this.produtoService.deletarProduto(id).subscribe(response => {
      this.router.navigate(['/'])
    })
  }

}
