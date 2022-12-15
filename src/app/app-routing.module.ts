import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '',   redirectTo: '/experience', pathMatch: 'full' },
  { path:'experience',component:ExperienceComponent },
  { path:'education',component:EducationComponent },
  { path:'skills',component:SkillsComponent },
  { path:'projects',component:ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
  ExperienceComponent,
  EducationComponent,
  SkillsComponent,
  ProjectsComponent
]
