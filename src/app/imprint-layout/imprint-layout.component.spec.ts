import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintLayoutComponent } from './imprint-layout.component';

describe('ImprintLayoutComponent', () => {
  let component: ImprintLayoutComponent;
  let fixture: ComponentFixture<ImprintLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprintLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImprintLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
