import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  usuario: any = {
    nome: '',
    email: '',
    endereco: {
      cep: '',
      numero: '',
      complemento: '',
      rua: '',
      cidade: '',
      estado: ''
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(dados: any) {
    console.log(dados);
    console.log(this.usuario)
  }
}
