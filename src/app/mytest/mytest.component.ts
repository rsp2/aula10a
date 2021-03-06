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
  
  valorAtual:string = '';
  valorSalvo:string = '';
  nome:string = 'abc';

  nomeCurso:string = 'Angular';

  getValor() {
    return 2;
  }

  onKeyUp(event:KeyboardEvent) {
    //console.log((<HTMLInputElement>event.target).value);
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  isMouseOver:boolean  = false;

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
  }

  onEnter(v:string) {
    this.valorSalvo = v;
  }

  bclick() {
    alert("Botão Clicado!!!")
  }

  onMudouValor(evento) {
    console.log(evento.novoValor);
  }

  constructor() { }

  ngOnInit() {
  }

}
