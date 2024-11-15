import { Component, OnInit } from '@angular/core';
import { alumnos } from './mock';
import { IAlumno } from 'src/app/models/alumno.model';

@Component({
  selector: 'app-tabla-alumnos',
  templateUrl: './tabla-alumnos.component.html',
  styleUrls: ['./tabla-alumnos.component.css']
})
export class TablaAlumnosComponent implements OnInit {

  // Se utiliza una interfaz para no utilizar any
  public alumnos: IAlumno[] = [];

  // Se ejecuta cuando se monta el componente
  ngOnInit(): void {
    this.alumnos = alumnos;
  }

}
