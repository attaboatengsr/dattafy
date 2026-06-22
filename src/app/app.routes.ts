import { Routes } from '@angular/router';
import { BioComponent } from './components/bio/bio.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    {path:'about', component: BioComponent},
    // {path:'blog', component: BlogComponent},
     {path:'projects', component: ProjectsComponent}

];
