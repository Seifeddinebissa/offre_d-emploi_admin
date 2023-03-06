import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierAdminComponent } from './modifier-admin.component';

describe('ModifierAdminComponent', () => {
  let component: ModifierAdminComponent;
  let fixture: ComponentFixture<ModifierAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifierAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
