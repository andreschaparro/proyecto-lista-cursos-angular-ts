import { Component, OnInit } from '@angular/core';
import { cursos } from './mock';
import { ICurso } from 'src/app/models/curso.model';

@Component({
  selector: 'app-tabla-cursos',
  templateUrl: './tabla-cursos.component.html',
  styleUrls: ['./tabla-cursos.component.css']
})
export class TablaCursosComponent implements OnInit {

  // Se utiliza una interfaz para no utilizar any
  public cursos: ICurso[] = [];

  // Se ejecuta cuando se monta el componente
  ngOnInit(): void {
    this.cursos = cursos;
  }

}
