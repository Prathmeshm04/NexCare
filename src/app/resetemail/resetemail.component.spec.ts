import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetemailComponent } from './resetemail.component';

describe('ResetemailComponent', () => {
  let component: ResetemailComponent;
  let fixture: ComponentFixture<ResetemailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetemailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
