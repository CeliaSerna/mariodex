import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Mario, MarioService} from '../../../core/mario.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nuevo-personaje',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './nuevo-personaje.html',
  styleUrls: ['./nuevo-personaje.css'],
})
export class NuevoPersonaje {
@Output() nuevo = new EventEmitter<void>();

  nombre = '';
  tipo = '';
  poder = '';
  mundo = '';

  constructor(private marioService: MarioService) {}

  agregarPokemon() {
    if(!this.nombre || !this.tipo || !this.poder || !this.mundo) return;

    const nuevo: Mario = {
      nombre: this.nombre,
      tipo: this.tipo,
      poder: this.poder,
      mundo: this.mundo,
    };

    this.marioService.addPokemon(nuevo);
    this.nuevo.emit(); // Cierra el modal
  }
  eliminarPokemon(id: number | undefined) {
    if (id) {
      if (confirm('¿Seguro que quieres borrar a este personaje?')) {
        this.marioService.removePokemon(id);
      }
    }
  }
}

