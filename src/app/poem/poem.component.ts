import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Verso } from '../verso';


@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {
  @Input() id:number;
  @Input() mostrarVersos:boolean;
  @Output() onMostrar = new EventEmitter<any>();
  versos:Array<Verso> = [];
  constructor() {
    let newVerso = new Verso();
    newVerso.nombreJugador = 'La computadora';
    newVerso.contenido = 'Cuando supe que ya no me querias...'
    this.versos.push(newVerso);
   }

  ngOnInit() {  
  }

  onSubmit(verso:Verso) {
    this.versos.push(verso);
  }

}
