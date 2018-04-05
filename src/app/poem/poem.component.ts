import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Verso } from '../verso';
import { Observable } from 'rxjs/Observable';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css']
})
export class PoemComponent implements OnInit {
  @Input() id:number;
  @Input() mostrarVersos:boolean;
  @Output() onMostrar = new EventEmitter<any>();
  versos:FirebaseListObservable<any[]>;
  constructor(private af:AngularFireDatabase) {

  }
  ngOnInit() { 
    this.versos = this.af.list('/versos');
  }

  onSubmit(verso:Verso) {
    this.versos.push({content: verso.contenido, player: verso.nombreJugador});
  }

  addVerso(player:string, verso:string):void {

  }

  deleteVerso(versoId:string) {
    this.af.object('/versos/' + versoId).remove();
  }

}
