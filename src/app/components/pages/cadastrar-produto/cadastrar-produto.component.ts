import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-cadastrar-produto',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './cadastrar-produto.component.html',
  styleUrl: './cadastrar-produto.component.css'
})
export class CadastrarProdutoComponent {

  //atributos
  categorias: any[] = [];
  mensagem: string = '';

  constructor(private http: HttpClient)
  {}

  //consultando as categorias
  ngOnInit(){
    this.http.get(environment.apiCategorias) //pega a variavel do de produção mesmo estando em branco
    .subscribe({
      next: (data) =>{
        // console.table(data)
        this.categorias = data as any[];
      }
    })
  }

  //Criando a estrutura do formulario
  formulario = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(8)]),
    preco: new FormControl('', [Validators.required, Validators.min(0.1)]),
    quantidade: new FormControl('', [Validators.required, Validators.min(1)]),
    categoriaId: new FormControl('', [Validators.required])
  });

  //função para capturar o SUMIT do formulário
  onSubmit(){
    //enviando uma requisição HTTP POST para cadastrar o produto da API
    this.http.post(environment.apiProdutos, this.formulario.value, {
      responseType: 'text' //RESPOSTA QUE A API VAI RETORNAR É DO TIPO TEXTO
    }).subscribe({
      next: (data) =>{
        this.mensagem = data;
        this.formulario.reset()
      }
    })
  }
}
