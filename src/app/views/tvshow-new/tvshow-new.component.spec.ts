import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvshowNewComponent } from './tvshow-new.component';

describe('TvshowNewComponent', () => {
  let component: TvshowNewComponent;
  let fixture: ComponentFixture<TvshowNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvshowNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvshowNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
