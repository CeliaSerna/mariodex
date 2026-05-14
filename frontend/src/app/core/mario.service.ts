import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment'; // SIEMPRE importa de 'environment' sin el .prod o .dev

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
  private url = `${environment.apiUrl}/personajes`;  

  private pokemonsSubject = new BehaviorSubject<Mario[]>([]);

  // Observable público
  pokemons$ = this.pokemonsSubject.asObservable();

  constructor(private http: HttpClient) {} // Inyectamos el cliente

  // Obtener valor actual
  getPokemons() {
    this.http.get<Mario[]>(this.url).subscribe({
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
    return this.http.post<Mario>(this.url, nuevoMario).subscribe({
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
    return this.http.delete(`${this.url}/${id}`).subscribe({
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