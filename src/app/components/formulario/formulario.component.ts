import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  @Output() parametrosSeleccionados = new EventEmitter<any>;
  categoriaSeleccionada: string = 'general';
  paisSeleccionado: string = 'ar'

  paises:any[] = [
    {value: 'ar', nombre: 'Argentina'},
    {value: 'br', nombre: 'Brasil'},
    {value: 'fr', nombre: 'Francia'},
    {value: 'hu', nombre: 'Hungria'},
    {value: 'mx', nombre: 'Mexico'},
    {value: 'bg', nombre: 'Reino Unido'}
  ];
  categorias: any[] = [
    {value: 'general', nombre: 'General'},
    {value: 'business', nombre: 'Negocios'},
    {value: 'entertrainment', nombre: 'Entretenimiento'},
    {value: 'health', nombre: 'Salud'},
    {value: 'science', nombre: 'Ciencia'},
    {value: 'sports', nombre: 'Deportes'},
    {value: 'technology', nombre: 'Tecnologia'}
  ];

  constructor(){}

  buscarNoticia(){
    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }
    this.parametrosSeleccionados.emit(PARAMETROS);
  }


}
