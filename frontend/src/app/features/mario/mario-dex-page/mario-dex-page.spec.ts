import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarioDexPage } from './mario-dex-page';

describe('MarioDexPage', () => {
  let component: MarioDexPage;
  let fixture: ComponentFixture<MarioDexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarioDexPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarioDexPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
