import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  constructor(private clienteService: ClienteService, private formBuilder: FormBuilder, private router: Router) { }

  form: FormGroup;
  cliente: Cliente;

  ngOnInit() {

    this.form = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      endereço: ['', Validators.required],
      codigo: ['', Validators.required]
    })
  }

  create() {

    delete this.form.value['id'];
    this.cliente = this.form.value;

    // Envia para a API;
    this.clienteService.post(this.cliente).subscribe(result => {
      this.router.navigateByUrl('clientes');
    })
  }
}
