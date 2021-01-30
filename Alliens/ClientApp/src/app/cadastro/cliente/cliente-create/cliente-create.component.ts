import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  // Injeta as dependencias (service, form, router e route)
  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  form: FormGroup;
  cliente: Cliente;

  ngOnInit() {

    this.determina_edit_ou_delete();
  }

  determina_edit_ou_delete() {

    // Inicializa o formulário
    this.form = this.formBuilder.group({
      id: [],
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      codigo: ['', Validators.required]
    })

    // Verifica se veio ID na rota
    var id = Number(this.route.snapshot.paramMap.get('id'));
    if (id != null) {

      // Busca o cliente
      this.get(id);
    }

  }

  get(id: number) {

    // Se inscreve no serviço e aguarda o retorno
    this.clienteService.getById(id).subscribe(result => {

      // Preenche o produto com o retorno
      this.cliente = result;

      // Preenche o form
      this.form.setValue({
        id: this.cliente.id,
        nome: this.cliente.nome,
        endereco: this.cliente.endereco,
        codigo: this.cliente.codigo
      })
    })
  }

  create() {

    // Remove a propriedade ID do form
    delete this.form.value['id'];

    // Obtém os valores do formulário na interface
    this.cliente = this.form.value;

    // Se inscreve no serviço e aguarda o retorno
    this.clienteService.post(this.cliente).subscribe(result => {

      // Redireciona para o componente de produtos
      this.router.navigateByUrl('clientes');
    })
  }

  edit() {

    // Obtém os valores do formulário na interface
    this.cliente = this.form.value;

    // Se inscreve no serviço e aguarda o retorno
    this.clienteService.put(this.cliente).subscribe(result => {

      // Redireciona para o componente de clientes
      this.router.navigateByUrl('clientes');
    })
  }

}
