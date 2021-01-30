import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  // Injeta as dependencias (service, form, router e route)
  constructor(
    private produtoService: ProdutoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  form: FormGroup;
  produto: Produto;

  ngOnInit() {

    this.determina_edit_ou_delete();
  }

  determina_edit_ou_delete() {

    // Inicializa o formulário
    this.form = this.formBuilder.group({
      id: [],
      descricao: ['', Validators.required],
      codigo: ['', Validators.required]
    })

    // Verifica se veio ID na rota
    var id = Number(this.route.snapshot.paramMap.get('id'));
    if (id != null) {

      // Busca o produto
      this.get(id);
    }

  }

  get(id: number) {

    // Se inscreve no serviço e aguarda o retorno
    this.produtoService.getById(id).subscribe(result => {

      // Preenche o produto com o retorno
      this.produto = result;

      // Preenche o form
      this.form.setValue({
        id: this.produto.id,
        descricao: this.produto.descricao,
        codigo: this.produto.codigo
      })
    })
  }

  create() {

    // Remove a propriedade ID do form
    delete this.form.value['id'];

    // Obtém os valores do formulário na interface
    this.produto = this.form.value;

    // Se inscreve no serviço e aguarda o retorno
    this.produtoService.post(this.produto).subscribe(result => {

      // Redireciona para o componente de produtos
      this.router.navigateByUrl('produtos');
    })
  }

  edit() {

    // Obtém os valores do formulário na interface
    this.produto = this.form.value;

    // Se inscreve no serviço e aguarda o retorno
    this.produtoService.put(this.produto).subscribe(result => {

      // Redireciona para o componente de produtos
      this.router.navigateByUrl('produtos');
    })
  }

}
