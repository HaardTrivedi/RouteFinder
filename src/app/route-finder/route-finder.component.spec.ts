import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleMapsModule } from '@angular/google-maps';
import { RouteFinderComponent } from './route-finder.component';

describe('RouteFinderComponent', () => {
  let component: RouteFinderComponent;
  let fixture: ComponentFixture<RouteFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ GoogleMapsModule ],
      declarations: [ RouteFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
