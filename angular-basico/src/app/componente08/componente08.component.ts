import { Component } from '@angular/core';

@Component({
  selector: 'app-componente08',
  standalone: true,
  imports: [],
  templateUrl: './componente08.component.html',
  styleUrl: './componente08.component.css'
})
export class Componente08Component {

  //Variavel de media
  media:number = 8

  linguagem:string = 'CSS'

  nomes:string[] = ['Joao', 'Maria', 'Julio','Bruno']
}
