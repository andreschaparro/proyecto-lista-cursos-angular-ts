import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Clase
export class AppComponent {

  // Atributo
  cursos: boolean = true;

  // Método
  handleCambio() {
    this.cursos = !this.cursos;
  }

}
