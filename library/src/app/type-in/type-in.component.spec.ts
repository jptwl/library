import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeInComponent } from './type-in.component';

describe('TypeInComponent', () => {
  let component: TypeInComponent;
  let fixture: ComponentFixture<TypeInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
