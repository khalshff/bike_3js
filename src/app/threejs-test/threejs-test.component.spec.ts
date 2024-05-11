import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsTestComponent } from './threejs-test.component';

describe('ThreejsTestComponent', () => {
  let component: ThreejsTestComponent;
  let fixture: ComponentFixture<ThreejsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreejsTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreejsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
