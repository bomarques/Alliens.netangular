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

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit() {

    this.clienteService.get().subscribe(result => {
      this.clientes = result;
    })

  }

  create(){this.router.navigateByUrl("cliente/cadastro")}

  edit(produto: any){alert('Em construção')}

  delete(produto:any){alert('Em construção')}

}
