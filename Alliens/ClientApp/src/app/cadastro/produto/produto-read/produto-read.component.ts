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

  // Injeta o serviçe e o router no construtor
  constructor(private produtoService: ProdutoService, private router: Router) { }

  ngOnInit() {
    // Ao iniciar o componente, realiza a busca
    this.get();
  }

  get() {

    // Se inscreve no serviço e aguarda o retorno
    this.produtoService.get().subscribe(result => {

      // Preenche a lista de produtos com o retorno
      this.produtos = result;
    })
  }

  create() {

    // Redireciona para o componente de cadastro
    this.router.navigateByUrl("produto/cadastro")
  }

  edit(produto: any) {

    // Redireciona para o componente de cadastra, enviando o ID do produto na rota
    this.router.navigate(["produto/cadastro", produto.id])
  }

  delete(produto: any) {

    // Solicita confirmação
    var confirm = window.confirm('Tem certeza?');

    if (confirm) {

      // Solicita ao serviço e aguarda o retorno
      this.produtoService.delete(produto.id).subscribe(result => {

        // Avisa o usuário
        if (result != null)
          alert('Produto excluído com sucesso!');

        // Recarrega a lista
        this.get();

      })
    }
  }

}
