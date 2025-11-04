import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillToolsComponent } from './skill-tools';

describe('SkillToolsComponent', () => {
  let component: SkillToolsComponent;
  let fixture: ComponentFixture<SkillToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
