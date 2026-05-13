import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPersonaje } from './nuevo-personaje';

describe('NuevoPersonaje', () => {
  let component: NuevoPersonaje;
  let fixture: ComponentFixture<NuevoPersonaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoPersonaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoPersonaje);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
