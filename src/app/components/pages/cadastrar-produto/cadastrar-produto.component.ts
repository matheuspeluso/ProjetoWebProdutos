import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar-produto',
  imports: [],
  templateUrl: './cadastrar-produto.component.html',
  styleUrl: './cadastrar-produto.component.css'
})
export class CadastrarProdutoComponent {

  constructor(private http: HttpClient)
  {}

  ngOnInit(){
    this.http.get('http://localhost:8080/api/categorias')
    .subscribe({
      next: (data) =>{
        console.log(data)
      }
    })
  }

}
