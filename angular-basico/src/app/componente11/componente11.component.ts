import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css'
})
export class Componente11Component {

  formulario = new FormGroup({
    nome   : new FormControl('',[Validators.required, Validators.minLength(3)]),
    idade  : new FormControl(null, [Validators.required, Validators.min(0), Validators.max(120)]),
    cidade : new FormControl('',[Validators.required, Validators.minLength(3)]),
  });

  //Visibilidade dos botoes
  btnCadastrar:boolean = true;

  //Pessoa
  vetor:Pessoa[] = [];

  indice:number = -1

  //Função de cadastro

  cadastrar(){

    //Cadastro no Vetor
    this.vetor.push(this.formulario.value as Pessoa);

    //Limpeza nos inputs
    this.formulario.reset();

    //Visualização via console 
    console.table(this.vetor);

  }
  //Função Selecionar
  Selecionar(indice:number){

    //Atribuir o indice da pessoa
    this.indice = indice

    //Atribuir os dados da pessoa
    this.formulario.setValue({
      nome : this.vetor[indice].nome,
      idade : this.vetor[indice].idade,
      cidade : this.vetor[indice].cidade,

    });

    this.btnCadastrar = false;
  }

  //Função de alteração
  Alterar(){  
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    //Limpas os inputs
    this.formulario.reset()
    
    //Visibilidade dos botões
    this.btnCadastrar = true;

  }
  //Função de exclusão
  Remover(){
    this.vetor.splice(this.indice, 1)

    //Limpesa dos inputs
    this.formulario.reset()

    this.btnCadastrar = true
  }
  //Cancelar
  Cancelar(){
    //Limpar formulario
    this.formulario.reset();
    
    //Visibilidade dos botões
    this.btnCadastrar = true;
  }
}
