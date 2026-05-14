import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

export interface Mario {
  id?: number;
  nombre: string;
  tipo: string;
  poder: string;
  mundo: string;
}

@Injectable({
  providedIn: 'root'
})
export class MarioService {
  private url = 'https://mariodex-backend-sgxu.onrender.com/personajes'; // la ruta de laravel
  // Estado reactivo con BehaviorSubject
  private pokemonsSubject = new BehaviorSubject<Mario[]>([]);

  // Observable público
  pokemons$ = this.pokemonsSubject.asObservable();

  constructor(private http: HttpClient) {} // Inyectamos el cliente

  // Obtener valor actual
  getPokemons() {
    this.http.get<Mario[]>('https://mariodex-backend-sgxu.onrender.com/personajes').subscribe({
      next: (data) => {
        // Metemos los datos recibidos en el BehaviorSubject
        console.log('Servicio: He recibido esto de Laravel:', data);
        this.pokemonsSubject.next(data);
      },
      error: (err) => console.error('Error al obtener personajes:', err)
    });
  }

  // Añadir 
  addPokemon(nuevoMario: Mario) {
    return this.http.post<Mario>('https://mariodex-backend-sgxu.onrender.com/personajes', nuevoMario).subscribe({
      next: (personajeGuardado) => {
        // la lista se actualice sola
        const listaActual = this.pokemonsSubject.getValue();
        this.pokemonsSubject.next([...listaActual, personajeGuardado]);
        console.log('¡Guardado en la DB!', personajeGuardado);
      },
      error: (err) => console.error('Error al guardar', err)
    });
}

  // Eliminar 
  removePokemon(id: number) {
    return this.http.delete(`https://mariodex-backend-sgxu.onrender.com/personajes/${id}`).subscribe({
      next: () => {
        // Filtramos la lista actual para quitar el que acabamos de borrar
        const listaActual = this.pokemonsSubject.getValue();
        const listaNueva = listaActual.filter(p => p.id !== id);
        
        // Notificamos a todos los componentes del cambio
        this.pokemonsSubject.next(listaNueva);
        console.log('Eliminado de la base de datos');
      },
      error: (err) => console.error('Error al borrar:', err)
    });
  }
}