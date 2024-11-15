import { ICurso } from "src/app/models/curso.model";

// Un mock es una estructura de datos falsa para poder hacer una página de muestra
export const cursos: ICurso[] = [
    { materia: 'Javascript', dificultad: 10, requiere: 'HTML y CSS' },
    { materia: 'Typecript', dificultad: 7, requiere: 'Javascript' },
    { materia: 'Angular', dificultad: 9, requiere: 'HTML, CSS, JS, y TS' },
    { materia: 'React', dificultad: 8, requiere: 'HTML, CSS, JS' }
]