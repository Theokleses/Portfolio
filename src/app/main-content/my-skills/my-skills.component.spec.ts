import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySKillsComponent } from './my-skills.component';

describe('MySKillsComponent', () => {
  let component: MySKillsComponent;
  let fixture: ComponentFixture<MySKillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySKillsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MySKillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
