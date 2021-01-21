import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-read',
  templateUrl: './produto-read.component.html',
  styleUrls: ['./produto-read.component.css']
})
export class ProdutoReadComponent implements OnInit {

  produtos: Produto[];

  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit() {

    this.produtoService.get().subscribe(result => {
      this.produtos = result;
    })

  }

  create(){this.router.navigateByUrl("produto/cadastro")}

  edit(produto: any){alert('Em construção')}

  delete(produto:any){alert('Em construção')}

}
