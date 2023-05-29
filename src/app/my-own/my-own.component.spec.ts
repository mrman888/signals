import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOwnComponent } from './my-own.component';

describe('MyOwnComponent', () => {
  let component: MyOwnComponent;
  let fixture: ComponentFixture<MyOwnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyOwnComponent]
    });
    fixture = TestBed.createComponent(MyOwnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
