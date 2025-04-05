import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-consultar-produtos',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  templateUrl: './consultar-produtos.component.html',
  styleUrl: './consultar-produtos.component.css'
})

export class ConsultarProdutosComponent {

  //atributos
  produtos : any[] = [];
  pagina = 1;
  itemsPorPagina = 5;

  constructor(
    private http: HttpClient
  ) { }

  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(4)])
  })

  //função para capturar o submit 

  onSubmit() {
    const nome = this.formulario.get('nome')?.value;
    this.http.get(environment.apiProdutos +'?nome=' + nome)
      .subscribe({
        next: (data) => {
          this.produtos = data as any[];
        }
      })
  }

  //função para alternar entre as paginas do paginador 
  pageChanged(event: number){
    this.pagina = event;
  }
}