import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-prop.component.html',
  styleUrls: ['./output-prop.component.css']
})
export class OutputPropComponent implements OnInit {

  @Input() valor:number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor +=1;
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor -=1
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
