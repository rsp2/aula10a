import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.css']
})
export class MytestComponent implements OnInit {

  url:string = 'http://www.rsp.com.br';
  urlImagem:string = 'https://conquistadigital.com.br/wp-content/uploads/2014/07/Sites-de-Imagens-Para-O-Seu-Blog.jpg';
  urlImagem2:string = 'http://www.scrapsdinamicos.com.br/imagens/imagens-imagens-44.jpg';
  
  getValor() {
    return 2;
  }

  constructor() { }

  ngOnInit() {
  }

}
