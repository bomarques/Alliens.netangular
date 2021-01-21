import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-produto-create',
  templateUrl: './produto-create.component.html',
  styleUrls: ['./produto-create.component.css']
})
export class ProdutoCreateComponent implements OnInit {

  constructor(private produtoService: ProdutoService, private formBuilder: FormBuilder, private router: Router) { }

  form: FormGroup;
  produto: Produto;

  ngOnInit() {

    this.form = this.formBuilder.group({
      id: [],
      descricao: ['', Validators.required],
      codigo: ['', Validators.required]
    })
  }

  create() {

    delete this.form.value['id'];
    this.produto = this.form.value;

    // Envia para a API;
    this.produtoService.post(this.produto).subscribe(result => {
      this.router.navigateByUrl('produtos');
    })
  }
}
