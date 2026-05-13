import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MarioService } from './mario.service';

describe('MarioService', () => {
  let service: MarioService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MarioService]
    });
    service = TestBed.inject(MarioService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Esto asegura que no queden peticiones sin responder
  afterEach(() => {
    httpMock.verify();
  });

  it('debe recuperar la lista de personajes (GET)', () => {
    // Definimos los datos falsos (MOCK)
    const mockPersonajes = [
      { nombre: 'Mario', tipo: 'Héroe', poder: '100',  mundo: 'tierra' },
      { nombre: 'Luigi', tipo: 'Héroe', poder: '90',  mundo: 'tierra' }
    ];

    // Llamamos al método del servicio
  service.getPokemons();

    // Simulamos la llamada a API 
    const req = httpMock.expectOne('http://localhost:8000/personajes'); 
    expect(req.request.method).toBe('GET');
    req.flush(mockPersonajes); // Enviamos los datos ficticios

  // Verificamos que el BehaviorSubject se haya actualizado
    service.pokemons$.subscribe(personajes => {
      expect(personajes.length).toBe(2);
      expect(personajes[0].nombre).toBe('Mario');
    });
  });
});
