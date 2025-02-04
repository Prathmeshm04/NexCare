import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NexCareComponent } from './nex-care.component';

describe('NexCareComponent', () => {
  let component: NexCareComponent;
  let fixture: ComponentFixture<NexCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NexCareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NexCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
