import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckListTagsComponent } from './check-list-tags.component';

describe('CheckListTagsComponent', () => {
  let component: CheckListTagsComponent;
  let fixture: ComponentFixture<CheckListTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckListTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckListTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
