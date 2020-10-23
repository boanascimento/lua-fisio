import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LuaServicesComponent } from './lua-services.component';

describe('LuaServicesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        LuaServicesComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(LuaServicesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'lua-fisio'`, () => {
    const fixture = TestBed.createComponent(LuaServicesComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('lua-fisio');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(LuaServicesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('lua-fisio app is running!');
  });
});
