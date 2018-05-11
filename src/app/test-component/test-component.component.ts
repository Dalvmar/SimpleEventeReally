import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  // Los decoradores input permiten al componente
  // proveerse de informacion. En este ejemplo el
  // texto que mostramos en el componenete procede
  // de un coponente "padre"
  @Input() inputObject: any;

  // Los decoradores Output nos permiten manejar eventos.
  // Ellos nos permiten emitir una información especifica
  // al realizar una acción. Otros componentes podrán
  // escuchar esta acción y actuar en cosecuencia.
  @Output() outputEvent: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  // En este caso emplearemos esta funcion para mandar información
  // Observad que en ningun lugar de este componente se imprime la
  // información. 
  sendOutEvent(){
    this.outputEvent.emit('Esto es lo que deseo emitir');
  }
}
