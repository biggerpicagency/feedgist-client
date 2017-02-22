import { TestBed, async } from '@angular/core/testing';
import { MainComponent } from './main.component';

describe('MainComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the main', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const main = fixture.debugElement.componentInstance;
    expect(main).toBeTruthy();
  }));

  it(`should have as title 'main works!'`, async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    const main = fixture.debugElement.componentInstance;
    expect(main.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
