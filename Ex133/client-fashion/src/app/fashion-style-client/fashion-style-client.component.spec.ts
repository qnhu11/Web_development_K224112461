import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionStyleClientComponent } from './fashion-style-client.component';

describe('FashionStyleClientComponent', () => {
  let component: FashionStyleClientComponent;
  let fixture: ComponentFixture<FashionStyleClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FashionStyleClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FashionStyleClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
