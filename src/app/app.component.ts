import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SkillsComponent,AboutMeComponent,ProjectsComponent,FooterComponent,HeroSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lab';
}
