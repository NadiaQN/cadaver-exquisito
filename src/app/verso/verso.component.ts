import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Verso } from '../verso';

@Component({
  selector: 'app-verso',
  templateUrl: './verso.component.html',
  styleUrls: ['./verso.component.css']
})
export class VersoComponent implements OnInit {
  @Input() verso:any;
  @Output() removeVerso = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.removeVerso.emit(this.verso.$key)
    console.log('click')
  }

}

