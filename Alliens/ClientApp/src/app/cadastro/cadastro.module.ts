import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoReadComponent } from './produto/produto-read/produto-read.component';
import { ProdutoCreateComponent } from './produto/produto-create/produto-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteReadComponent } from './cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';



@NgModule({
  declarations: [ProdutoReadComponent, ProdutoCreateComponent, ClienteReadComponent, ClienteCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastroModule { }
