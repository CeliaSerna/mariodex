import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarioService, Mario } from '../../../core/mario.service';
import { NgModule } from '@angular/core'; 
import { NuevoPersonaje } from '../nuevo-personaje/nuevo-personaje';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mario-dex-page',
  standalone: true,
  templateUrl: './mario-dex-page.html',
  styleUrls: ['./mario-dex-page.css'],
  imports: [NuevoPersonaje, CommonModule],

})
export class MarioDexPage implements OnInit{
  personajes : Mario[] = [];
  modalAbierto = false;

  constructor(private marioService: MarioService, private http: HttpClient) {}

    ngOnInit(): void {
      this.marioService.pokemons$.subscribe({
      next: (data) => {
        this.personajes = data; 
    console.log('En consola se ven:', this.personajes);
    }});
    
      this.marioService.getPokemons();
  }
    cargarDatos() {
      this.marioService.getPokemons(); 
    }
    abrirModal() {
      this.modalAbierto = true;
    }

    cerrarModal() {
      this.modalAbierto = false;
      this.marioService.getPokemons();
      this.cargarDatos(); // Refrescamos al cerrar
    }

    eliminarPokemon(id: number | undefined) {
    if (id) {
      this.marioService.removePokemon(id);
    }
  }
}