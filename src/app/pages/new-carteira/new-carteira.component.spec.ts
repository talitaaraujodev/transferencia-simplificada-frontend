import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCarteiraComponent } from './new-carteira.component';

describe('NewCarteiraComponent', () => {
  let component: NewCarteiraComponent;
  let fixture: ComponentFixture<NewCarteiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCarteiraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCarteiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
