import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionDetailClientComponent } from './fashion-detail-client.component';

describe('FashionDetailClientComponent', () => {
  let component: FashionDetailClientComponent;
  let fixture: ComponentFixture<FashionDetailClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionDetailClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionDetailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
