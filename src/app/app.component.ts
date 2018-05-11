import { Component } from '@angular/core';
import { TestComponentComponent } from './test-component/test-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // directives: [TestComponentComponent]
})
export class AppComponent {
  title = 'Ejemplo Hiper Sencillo de Evento Este Componenete Es El 1';
  private testObject: {name: string};

  constructor() {
    this.testObject = {
      name: 'Too Flama Este Es El Componente 2'
    };
  }

  handleEvent(value) {
    this.title = value; // --> Veamos un ejemplo mas gráfico2
    console.log(value);
  }
}
