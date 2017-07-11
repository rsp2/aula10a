import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-prop',
  templateUrl: './input-prop.component.html',
  styleUrls: ['./input-prop.component.css']
})
export class InputPropComponent implements OnInit {

  @Input() nome:string = '';

  

  constructor() { }

  ngOnInit() {
  }

}
