import { Component } from '@angular/core';
import { RouterModule,RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
//import {NavBarComponent} from './nav-bar/nav-bar.component';
//import { RouterModule} from '@angular/router';
//import { BioComponent } from './bio/bio.component';
//import { BlogComponent } from './blog/blog.component';
//import { ProjectsComponent } from './projects/projects.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dattafy';
}
