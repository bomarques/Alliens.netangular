import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes: Cliente[];

  // Injeta o serviçe e o router no construtor
  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {
    // Ao iniciar o componente, realiza a busca
    this.get();
  }

  get() {

    // Se inscreve no serviço e aguarda o retorno
    this.clienteService.get().subscribe(result => {

      // Preenche a lista de produtos com o retorno
      this.clientes = result;
    })
  }

  create() {

    // Redireciona para o componente de cadastro
    this.router.navigateByUrl("cliente/cadastro")
  }

  edit(cliente: any) {

    // Redireciona para o componente de cadastra, enviando o ID do produto na rota
    this.router.navigate(["cliente/cadastro", cliente.id])
  }

  delete(cliente: any) {

    // Solicita confirmação
    var confirm = window.confirm('Tem certeza?');

    if (confirm) {

      // Solicita ao serviço e aguarda o retorno
      this.clienteService.delete(cliente.id).subscribe(result => {

        // Avisa o usuário
        if (result != null)
          alert('Cliente excluído com sucesso!');

        // Recarrega a lista
        this.get();

      })
    }
  }

}
